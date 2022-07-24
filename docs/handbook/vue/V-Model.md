
# V-Model


v-model 是 Vue 中双向数据绑定的语法。


v-model 实际上是两个指令的结合。通过v-bind在表单元素上绑定value，再使用v-on监听input事件去修改value触发响应式更新。


在input事件中完成`this.message = event.target.value`

