
# Redux


# **react & redux**


React 的数据传递方案（组件内部和跨组件）有：

1. 通过props在组件之间进行数据传递。这种方式可以实现嵌套组件之间的数据传输，但当嵌套层级过深时，会非常麻烦，每一层都需要进行中转。且该方式不能实现平级组件之间的数据传递。
2. 使用 Context 进行数据传递。这种方式避免了组件嵌套层级过深时，中间组件的无用转发，目标组件可以直接获取到 Context 中的数据。但这种方式对函数组件不太友好，尤其是有多个Context 存在的情况，函数组件的 Consumer 会嵌套非常多层。
3. 使用 Redux 进行数据管理。Redux 是一个状态管理库，其并不与 React 绑定，可以与其他框架一起使用。

## **redux的基础使用**


redux 有三大基本原则：

4. **单一数据源**。整个应用的 `state` 被储存在一颗 `object tree` 中，并且这个 object tree 只存在于唯一一个 `store` 中
5. **state** 是只读的。唯一改变state的方法就是触发 `action`，`action` 是一个对象，用来描述发生事件的**类型**及**行为**
6. 使用纯函数来执行修改

### [**#**](https://lyx-jay.github.io/Blog/handbook/react/react-redux.html#redux-%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)**redux 目录结构**


```javascript
  store
    |----index.js         创建并导出store
    |----reducer.js       初始化数据以及reducer函数
    |----actions.js       事件对象
    |----constant.js      事件对象的类型
```


`index.js`


```javascript
import { createStore } from 'redux';
import reducer from './reducer.js';

const store = createStore(reducer);

export default store;
```


`reducer.js`


```javascript
import * as actionType from './constant.js';

const initialState = {
  counter: 0
}

// reducer函数默认一定要返回state，不然会返回一个undefined，那么store.getState()拿到的就是undefined
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_NUMBER:
      return {...state, counter: state.counter + action.num}
    case actionType.SUB_NUMBER:
      return {...state, counter: state.counter + action.num}
    case actionType.MUL_NUMBER:
      return {...state, counter: state.counter * action.num}
    default:
      return state;
  }
}
```


`actions.js`


```javascript
import * as actionType from './constant.js';

export const addAction = (num) => ({
  type: actionType.ADD_NUMBER,
  num
})
export const subAction = (num) => ({
  type: actionType.SUB_NUMBER,
  num
})
export const mulAction = (num) => ({
  type: actionType.MUL_NUMBER,
  num
})
```


`constant.js`


```javascript
export const ADD_NUMBER = 'ADD_NUMBER';
export const SUB_NUMBER = 'SUB_NUMBER';
export const MUL_NUMBER = 'MUL_NUMBER';
```


## **react-redux**


在使用 redux 时，需要订阅以及注销 store。当组件较多时，会有大量重复代码，可以使用HOC来抽取出公共组件。


react-redux 就是一个提高复用性的库，提供了connect函数。


connect函数主要思想如下:


```javascript
function connect2(mapStateToProps, mapDispatchToProps) {
  return function handleMapCpn (WrappedComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          storeState: mapStateToProps(store.getState())
        }
      }

      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProps(store.getState())
          })
        })
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return <WrappedComponent {...this.props}
                                 {...mapStateToProps(store.getState())}
                                 {...mapDispatchToProps(store.dispatch)}/>
      }
    }
  }
}
```

