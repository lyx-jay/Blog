
# Computed & watcher


`Computed`本质上是一个具备缓存的`watcher`，依赖的属性发生变化时就会更新视图，适用于比较消耗性能或表达式过于复杂的计算场景。


`computed`传入的其实还是一个函数，这里回想一下`watcher`的本质，其实就是存储了一个需要在特定时机触发的函数。


在`Vue`内部，每个`computed`属性也有自己的一个对应的`watcher`实例，叫做`computedWatcher` 。与渲染`watcher`不同的是：

	1. 渲染`watcher`只能作为依赖被收集到其它的`deps`里，而`computedWatcher`有自己的`deps`，它可以收集别的`watcher`作为自己的依赖。
	2. 惰性求值，初始化时不去运行`getter`

假设渲染函数`watcher`中有计算属性 `number`，而`number`又包含着`data`中`num`的运算


流程：

1. 执行渲染函数`watcher`，首先会将该渲染函数`watcher`设置为`Dep.target`。
2. 在读取到`number`的时候，会先将`Dep.target`收集到`number`的`dep`里，然后将`number`对应的`computedWatcher`设置为`Dep.target`。
3. 在`number`中读取到`num`时，会触发`num`劫持的`getter`，将`computedWatcher`收集到`num`对应的dep里。

此时的依赖关系为：`num`的`dep`里装着`computedWatcher`，`computedWatcher`里装着渲染函数`watcher`


此时，如果更新num的值，会一级一级的向上触发更新。

