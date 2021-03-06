
# Uncontrolled Components


## **受控组件**


在HTML中，表单类元素的数据通常是由自己维护，并根据用户输入进行更新，这在React中是不可控制的。


在React中state是唯一的数据源，因此，将表单数据存储在state中，并且只能通过setState进行更新


渲染表单的 React 组件还控制着用户输入过程中表单发生的操作，被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。


```javascript
import React, { Component } from 'react'

export default class ControledComponents extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit(event) {
    alert('A name was submitted : ' + this.state.value)
    event.preventDefault();
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value='Submit' />
      </form>
    )
  }
}
```


## **非受控组件**


在编写受控组件时，每个状态更新都需要编写对应的数据处理函数，较为麻烦


使用非受控组件的形式，可以使用ref从DOM节点中获取表单数据


### **默认值**


在 React 渲染生命周期时，表单元素上的 value 将会覆盖 DOM 节点中的值，在非受控组件中，你经常希望 React 能赋予组件一个初始值，但是不去控制后续的更新。 在这种情况下, 你可以指定一个 defaultValue 属性，而不是 value。


```javascript
render() {
  return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input
          defaultValue="Bob"
          type="text"
          ref={this.input} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
```


同样，checkbox 和 radio 支持 defaultChecked，select 和 textarea 支持 defaultValue。

