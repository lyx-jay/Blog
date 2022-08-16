# 图片懒加载

## img 标签的 loading 属性

```html
  <img src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF" loading="lazy"></img>
  <img src="https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF" loading="lazy"></img>
  <img src="https://t7.baidu.com/it/u=825057118,3516313570&fm=193&f=GIF" loading="lazy"></img>
  <img src="https://t7.baidu.com/it/u=1358795231,3900411654&fm=193&f=GIF" loading="lazy"></img>
```

## intersecObserver API

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    img {
      height: 250px;
      width: 200px;
      margin-top: 300px;
    }
    .imglist {

      display: flex;
      flex-direction: column;
      width: 400px;
      height: 200px;
      background-color: lightgray;
      overflow: auto;
    }
  </style>
</head>

<body>
  <div class="imglist">
    <img data-src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF"></img>
    <img data-src="https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF"></img>
    <img data-src="https://t7.baidu.com/it/u=825057118,3516313570&fm=193&f=GIF"></img>
    <img data-src="https://t7.baidu.com/it/u=1358795231,3900411654&fm=193&f=GIF"></img>
  </div>
  <script>

    let options = {
      root: document.querySelector('.imglist'),
      rootMargin: '5px',
      threshold: 1
    }

    let callback = function(entries) {
      console.log(entries)
      entries.forEach(element => {
        if (element.intersectionRatio === 1) {
          let img = element.target;
          observer.unobserve(img);
          img.setAttribute('src', img.getAttribute('data-src'))
        }
      });
    }

    let observer = new IntersectionObserver(callback, options);
    let imgs = document.querySelectorAll('img');
    for (let i = 0; i < imgs.length; i++) {
      observer.observe(imgs[i])
    }
  </script>
</body>

</html>
```

## 监听滚动事件

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .imglist {
      display: flex;
      flex-direction: column;
      overflow: auto;
      width: 600px;
      height: 200px;
      margin: 0 auto;
      background-color: lightgray;
    }

    img {
      width: 200px;
      height: 150px;
      margin-bottom: 100px;
    }
  </style>
</head>

<body>
  <div class="imglist">
      <img data-src="https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF"></img>
      <img data-src="https://t7.baidu.com/it/u=4198287529,2774471735&fm=193&f=GIF"></img>
      <img data-src="https://t7.baidu.com/it/u=825057118,3516313570&fm=193&f=GIF"></img>
      <img data-src="https://t7.baidu.com/it/u=1358795231,3900411654&fm=193&f=GIF"></img>
  </div>
  <script>
    function throttle(fn, delay) {
      let last = 0, timer = null;
      return function() {
        let context = this;
        let args = arguments;
        let now = +Date.now();

        if (now - last > delay) {
          clearTimeout(timer);
          timer = setTimeout(() => {
            last = now;
            fn.apply(context, args);
          }, delay);
        } else {
          last = now;
          fn.apply(context, args);
        }
      }
    }

    const imgWrapper = document.querySelector('.imglist');
    const imgs = document.querySelectorAll('img');

    function scrollEvent() {
      const h = imgWrapper.clientHeight;
      imgs.forEach(item => {
        let el = item.getBoundingClientRect();
        if (el.top > 0 && el.top < h) {
          item.setAttribute('src', item.getAttribute('data-src'))
        }
      })
    }
    imgWrapper.addEventListener('scroll', throttle(scrollEvent, 1000) )
  </script>
</body>

</html>
```