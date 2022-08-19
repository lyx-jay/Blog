# 用户高频输入场景下的优化

在日常开发中，input 框高频输入是我们经常遇到的一个场景，那么该场景下的优化思路是什么呢？

用户高频输入，那么造成的后果可能有两个：

1. 每输入一个字符，就会发送一个网络请求。但事实上，用户的每一次输入并不代表他真正想要搜索的内容，有可能最后一次才是真正想要请求的内容，这个问题的本质实际上是**如何决定请求触发的时机**。

2. 用户成功发送请求A，但在A请求还未返回时，又发出了请求B。用户想要的是请求B的结果，但是却返回了请求A的结果。这种情况就可能造成用户拿不到最后请求的结果，我们要解决的第二个问题就是**如何确保用户拿到正确的请求结果**。

对于以上两个问题，我们可以从两个方面解决：

1. 触发时机问题。使用 debounce 对输入事件进行防抖处理，避免多次发出请求。

2. 在发出一个网络请求后，若未收到响应之前，又发出了新的请求，那么就取消（abort）上一个请求，这样就可以保证用户拿到的结果是最后发出的请求。

## 防抖处理

网络上关于防抖的文章有很对，这里就不仔细解释了。

可以参考 冴羽大佬的文章[JavaScript专题之跟着underscore学防抖
](https://juejin.cn/post/6844903480239325191)

```js
function debounce(fn, delay) {
  let timer = null;
  return function() {
    let context = this;
    let args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(context, this);
    }, delay)
  }
}
```

## 如何取消上次请求？
目前发起网络请求的方式：XMLHttpRequest、fetch、axios

这三种方式都有对应的取消网络请求的方法：
1. 取消 xhr：使用 `XMLHttpRequest.abort()` 方法
2. 取消 fetch 请求：使用 `AbortController API`
3. 取消 axios 请求：axios 可以使用 cancelToken 方法（但该方法已经废弃）。同样，axios 也支持 `AbortController API`

下面详细描述使用 ``AbortController API` 的方法

```js
var redundantRequests = 0;
var successfulRequests = 0;

var fakeApi = "http://api/xxxx";

var auto = document.getElementById('autocomplete');
var controller;

const handleKeydown = (event) => {
  if (event.target.value === '') return;

  if (controller) {
    console.log(`controller`, controller)
    controller.abort();
  }
  if (AbortController) {
    controller = new AbortController();
    var signal = controller.signal;
  }

  fetch(fakeApi, { signal })
    .then(function (response) {
      console.log("response", response);
      response.json().then((data) => {
        successfulRequests++;
        document.getElementById("successful").textContent = successfulRequests + " 请求成功";
        let li = document.createElement('li');
        li.innerHTML = `<li><span>${successfulRequests} 请求内容为：</span>${event.target.value}</li>`;
        document.getElementById('autocompleteMenu').appendChild(li);
        controller = null;
      })

    })
    .catch(function (e) {
      if (e.name === "AbortError") {
        redundantRequests++;
        document.getElementById("redundant").textContent = redundantRequests + " uneccessary requests cancelled";
        let li = document.createElement('li');
        li.innerHTML = `<li><span>${redundantRequests} 取消内容为：</span>${event.target.value}</li>`;
        document.getElementById("error").appendChild(li);
      }

    })
}

auto.addEventListener('keydown', debounce(handleKeydown, 100));
```