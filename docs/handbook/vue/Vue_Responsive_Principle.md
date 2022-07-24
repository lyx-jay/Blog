
# Vue响应式原理（双向数据绑定）


### 简单版


Vue 在创建实例时，会遍历data选项的属性，利用`object.defineProeprty` 为属性添加setter和getter。getter用来依赖收集，setter用来派发更新，并且在内部追踪依赖，在属性被访问和修改时通知变化。


### 详解版


在创建Vue实例时，会遍历`data`的属性，并且对每个属性调用`defineReactive`函数。`defineReactive`函数的作用就是定义一个响应式对象，给对象添加`getter`和`setter`。在`defineReactive`函数中，会创建一个`dep`实例。`Dep`类就是利用`Set`去做存储，在`depend`的时候把`Dep.target`加入到`deps`里，在`notify`的时候遍历`deps`，触发每个`watcher`的`update`。


当执行一个`watcher`时，会先将该`watcher`中的渲染函数保存起来。然后将这个存储了渲染函数的`watcher`设置为`Dep.target`，然后执行渲染函数。


在执行渲染函数的过程中，读取到了value值，就会触发其`getter`，`getter`函数中执行`dep.depend`，将`Dep.target`加入到`value`的`deps`里。


当修改`value`的值时，就会触发其`setter`，`setter`函数会执行`dep.notify`，会遍历`deps`，执行每一个`watcher`的`update`

