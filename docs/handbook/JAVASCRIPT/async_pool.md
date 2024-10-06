# 异步并发控制

## 前置知识

``Promise.resolve()``

`Promise.resolve()` 是 JavaScript 中 Promise 对象的一个静态方法，它用于将一个值或对象转换为一个 Promise 对象。这个方法可以接受一个值、一个 Promise 对象或者一个 `thenable` 对象（即具有 then 方法的对象），并返回一个新的 Promise 对象。

`Promise.resolve()` 的主要用法包括：

转换值为 Promise：如果传入的参数是一个非 Promise 值，`Promise.resolve()` 会将其包装成一个 Promise 对象，并立即进入 fulfilled 状态，其值就是传入的值。

处理 Promise：如果传入的参数本身就是一个 Promise 对象，`Promise.resolve()` 会直接返回这个 Promise 对象。

处理 `thenable` 对象：如果传入的参数是一个具有 then 方法的对象（即 `thenable` 对象），`Promise.resolve()` 会将这个对象转换为一个 Promise 对象，并立即执行其 then 方法。

```js
// 转换一个值为 Promise
const value = 42;
const promise = Promise.resolve(value);
promise.then(result => console.log(result)); // 输出: 42

// 处理一个已经是 Promise 的对象
const existingPromise = Promise.resolve(10);
Promise.resolve(existingPromise).then(result => console.log(result)); // 输出: 10

// 处理一个 thenable 对象
const thenable = {
  then: function(resolve) {
    resolve('thenable resolved!');
  }
};
Promise.resolve(thenable).then(result => console.log(result)); // 输出: thenable resolved!
```

::: tip
如果在调用 `Promise.resolve()` 时不传入任何参数，它仍然会返回一个新的 Promise 对象。这个 Promise 对象会立即进入 fulfilled 状态，并且其值为 undefined。这是因为 `Promise.resolve()` 方法的目的是将一个值或对象转换为一个 Promise 对象，即使这个值是 undefined。
:::


`Promise.race()`

Promise.race()会接受一个包含 Promise 实例的可迭代对象。该方法**仅关注第一个完成的 Promise 实例**，无论该实例的结果是成功还是失败。

`Promsie.all()`

Promise.all() 是 JavaScript 中 Promise 对象的一个静态方法，它用于将多个 Promise 实例包装成一个新的 Promise 实例。这个新的 Promise 实例会在所有传入的 Promise 实例都完成（即都变为 fulfilled 状态）后才完成。如果传入的 Promise 实例中有一个失败（即变为 rejected 状态），那么整个 Promise.all() 返回的 Promise 实例也会立即失败，并返回第一个失败的 Promise 的结果。

## 并发控制实现

```ts
async function asyncPool(poolLimit: number, array: any[], iteratorFn: Function) {
  const ret: Promise<any>[] = []; // 存储所有的异步任务
  const executing: Promise<any>[] = []; // 存储正在执行的异步任务
  for (const item of array) {
    // 调用 iteratorFn 函数创建异步任务
    const p = `Promise.resolve()`.then(() => iteratorFn(item, array));
    ret.push(p); // 保存新的异步任务

    // 当 poolLimit 值小于或等于总任务个数时，进行并发控制
    if (poolLimit <= array.length) {
      // 当任务完成后，从正在执行的任务数组中移除已完成的任务
      const e: Promise<any> = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e); // 保存正在执行的异步任务
      if (executing.length >= poolLimit) {
        await Promise.race(executing); // 等待较快的任务执行完成
      }
    }
  }
  return Promise.all(ret);
}
```

这段代码非常巧妙的利用了 promise 状态变化的特点，实现了将已完成的任务从正在执行的任务数组中移除，从而达到了并发控制的目的。

1. 当 `() => iteratorFn(item, array)` 执行完毕，表示该任务执行完毕，p 的状态会变为 fullfilled。
2. 接着，会将 `() => executing.splice(executing.indexOf(e), 1)` 放入微任务队列中，等待执行。
3. 当 `executing.splice(executing.indexOf(e), 1)` 执行时，由于 executing 是正在执行数组的同一个引用地址，所以可是实现删除已经执行完毕的任务。

