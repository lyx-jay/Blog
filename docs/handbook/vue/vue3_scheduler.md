# vue3 响应式系统原理 - scheduler

## scheduler 

可调度性是响应系统非常重要的特性。可调度就是指，当 **trigger** 动作触发副作用函数重新执行时，有能力决定副作用函数执行的时机、次数以及方式

调度器的基本结构
```js
// effect 为注册副作用函数的函数
// effectFn 为副作用函数
const effect = (effectFn, options={}) => {
  ...
}

// 更新数据
function trigger(target, key, newValue) {
  target[key] = newValue
  const depsMap = bucket.get(target)
  if (!depsMap) return
  const effects = depsMap.get(key)

  const effectsToRun = new Set()
  effects && effects.forEach(effectFn => {
    if (effectFn !== activeEffect) {
      effectsToRun.add(effectFn)
    }
  })
  effectsToRun.forEach(effectFn => {
    // 如果一个副作用函数存在调度器，就调用该调度器
    if (effectFn.options.scheduler) {
      effectFn.options.scheduler(effectFn)
    } else {
      // 否则，就直接执行副作用函数
      effectFn()
    }
  })
}

```
通过在 options 中添加调度器函数，可以控制副作用函数执行的时机

## scheduler - 控制执行次数

同样是在 options 的 scheduler 函数中，书中利用 jobQueue 和 flushJob 两个函数实现了控制执行次数
```js
const data = {foo: 1} 
const jobQueue = new Set()
// 创建一个 promise 实例，将任务添加到微任务队列中
p = Promise.resolve()
let isFlushing = false // 代表是否正在刷新队列

function flushjob() {
  if (isFlushing) return
  isFlushing = true
  p.then(() => {
    jobQueue.forEach(job => job())
  }).finally(() => {
    isFlushing = false
  })
}

effect(() => {
  console.log(obj.foo)
}, {
  scheduler(fn) {
    jobQueue.add(fn)
    flushJob()
  }
})

obj.foo++
obj.foo++
```

### 原理分析

以上函数之所以可以控制执行次数，原因在于巧妙地利用了**微任务**

1. `effect` 函数执行，将副作用函数也就是 `effect` 中传入的第一个参数推入到 `jobQueue` 队列中。打印出`1`
2. 执行 `flushJob` 函数。`isFlushing` 为 `false`，将 `JobQueue` 中的函数添加到微任务队列中执行。此时，`isFlushing` 为 `true`
3. 执行 `obj.foo++`， 触发 `trigger` 函数，再次执行 `scheduler` 中的内容。副作用函数被推入到 `jobQueue` 队列中。由于 `isFlushing` 为 true，代表正在刷新队列。
4. 执行第二个 `obj.foo++`， 同上一步一样
5. 此时，脚本执行完毕，也就是宏任务执行完毕，开始执行微任务队列。执行 `JobQueue` 中的函数，由于它是一个 `set`，所以其实只有一个函数(队列中一共存在两个函数)。经过了两次的自增，`foo` 已经变为了 3，所以此时打印出的就是 `3`