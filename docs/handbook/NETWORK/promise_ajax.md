# Promise 封装 ajax

## 有哪些注意事项
1. 调用的函数如果有可能抛出异常，就需要使用try...catch
2. 网络请求失败怎么办？请求失败重新发送，若超过3次，则提示用户请求失败
3. 如何封装超时重发函数？
4. 输入 get、post有可能输错，使用选择的方式
5. onerror错误处理、onload错误处理
6. 输出error的时候一定要写错误信息
7. get / post 请求返回的数据类型定义一定根据后端接口制定（使用Ts中的泛型）

## 函数封装


### GET 请求封装

```ts
type Params = {
  name:string;
  age:number;
}

// 处理get请求附有参数的情况
// 为了防止XSS攻击，参数必须使用 encodeURIComponent()函数进行编码
export function addUrlParam(url:string, params:Params):string {
  url += (url.indexOf('?') === -1 ? '?' : "&");
  let key:keyof Params;
  for (key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      url += (encodeURIComponent(key) + '=' + encodeURIComponent(params[key]) + '&')
    }
  }
  url = url.replace(/&$/g, ''); // 去除拼接后url中的末尾&
  return url;
}

export function get(url:string, params: Params = {name:'lvyuanxin', age: 20}):Promise<[]> {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    url = addUrlParam(url, params);
    // 当请求完成的时候会出发onload事件
    xhr.onload = () => {
      if (xhr.status === 200) {
        try {
          resolve(JSON.parse(xhr.responseText) );
        } catch (error) {
          reject('get xhr.res json parse fail')
        }
      } else {
        reject('get xhr load fail ' + xhr.status)
      }
    }
    xhr.onerror = err => {
      console.log(err)
    }
    xhr.ontimeout = err => {
      console.log('get 请求超时 ' + err)
    }
    xhr.timeout = 3000;
    xhr.open('get', url);
    // 发送请求
    xhr.send();
  })
}

// 超时重发函数
// version 1
export async function reTryGet(url:string, reTryTimes:number = 3) {
  try {
    let result = await get(url);
    return result;
  } catch (err) {
    if (reTryTimes - 1 > 0) {
      reTryGet(url, reTryTimes - 1);
    }
  }
}
```

对于超时重发网络请求函数的封装，还有其他不同方案：
```js
// version 2
let retryPromise = function(options,times) {
  fetch({...options}).then(resolve)
  .catch(err=> {
     if(times - 1 > 0) {
      retryPromise(options,times -1) 
    }
    return reject(err)
  })
}
```

```js
// version 3
async function retryFunction(times, options) {
  for (let i = 0; i < times; i++) {
	try {
	  let result = await fetch(options)
	  return result
	} catch (err) {
	  return new Error(err)
	}
  }
  return new Error('代码除了问题')
}
```


### POST 请求封装

```ts
export function post(url:string, data:any):Promise<Object> {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.timeout = 3000;
    xhr.open('post', url);
    // 当请求完成的时候会出发onload事件
    xhr.onload = () => {
      if (xhr.status === 200) {
        try {
          resolve(JSON.parse(xhr.responseText) );
        } catch (error) {
          reject('post xhr.res json parse fail')
        }
      } else {
        reject('post xhr load fail ' + xhr.status)
      }
    }
    xhr.onerror = err => {
      console.log(err)
    }
    xhr.ontimeout = err => {
      console.log('post请求超时 ' + err)
    }
    xhr.setRequestHeader('content-type', 'application/json') // 客户端告诉服务器返回的数据类型为json
    // 发送请求
    xhr.send(data);
  })
}

export async function reTryPost(url:string, data:any, retryTimes:number = 3) {
  try {
    let result = await post(url, data);
    return result;
  } catch (error) {
    if (retryTimes - 1 > 0)
    reTryPost(url, data, retryTimes - 1)
  }
}
```