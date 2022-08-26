
# JSX


## **What is JSX ?**


官方定义：JSX 是 React.createElement(components, props, ...children) 函数的语法糖


```javascript
<Mybutton color="blue" shadowSize={2}>
Click Me
</Mybutton>
```


上方函数会被编译为下方代码：


```javascript
React.createElement(
  Mybutton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```


打开 React 的源码，找到 createElement 函数:


```javascript
function createElement(type, config, children) {
  var propName; // Reserved names are extracted

  var props = {};
  var key = null;
  var ref = null;
  var self = null;
  var source = null;

  if (config != null) {
    if (hasValidRef(config)) {
      ref = config.ref;

      {
        warnIfStringRefCannotBeAutoConverted(config);
      }
    }

    if (hasValidKey(config)) {
      {
        checkKeyStringCoercion(config.key);
      }

      key = '' + config.key;
    }

    self = config.__self === undefined ? null : config.__self;
    source = config.__source === undefined ? null : config.__source; // Remaining properties are added to a new props object

    for (propName in config) {
      if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  } // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.


  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props


  if (type && type.defaultProps) {
    var defaultProps = type.defaultProps;

    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }

  {
    if (key || ref) {
      var displayName = typeof type === 'function' ? type.displayName || type.name || 'Unknown' : type;

      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }

      if (ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
}
```


从源码中，我们可以看到 createElement 函数接收三个参数: type(标签类型)、config(标签中的属性)、children(子标签)


但是，在编写 JSX 的时候，一个标签通常会包含多个子标签，那么该函数是如何接收这些子标签呢 ?


我们关注源码的这一部分:


```javascript
  var childrenLength = arguments.length - 2;

  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);

    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }

    {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }

    props.children = childArray;
  } // Resolve default props
```


我们知道，arguments 对象中包含有所有参数，那么 childrenLength 就是排除前两个参数之外剩余参数的个数


若 childrenLength 为 1，则只有一个子元素（可以是文字也可以是新的JSX） 若 childrenLength 大于 1，则创建一个长度为 childrenLength 的数组，利用 for 循环将arguments 中的对象添加到数组中


## 简化版 React.createElement


`ReactElement` 对象定义：


```javascript
function ReactElement(type, key, props) {
	return {
		$$typeof: Symbol.for('react.element'),
    type,
    key,
    props
	}
}
```


`createElement()` 函数实现：


```javascript
function createElement(type, config, children) {
	const props = {};
  if (config) {
		// 将 config 中的键值对添加到 props 中
    for (propName in config) {
      if (hasOwnProperty.call(config, propName)) {
        props[propName] = config[propName];
      }
    }
  }

  const childrenLength = arguments.length - 2;
  // 多个children使用数组的形式
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    const childArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[2 + i];
    }
    props.children = childArray;
  }
  
  return ReactElement(type, null, props);
}
```


当仅有一个 DOM 节点时，调用 createElement 函数：


```javascript
let a = createElement(
  'div',
  {width:'20px', height: '20px'},
)
```


打印出a，其结果为：


```bash
{
  '$$typeof': Symbol(react.element),
  type: 'div',
  key: null,
  props: { width: '20px', height: '20px' }
}
```


由于并没有子元素，所以 props 中没有 children 属性


当父节点含有多个子节点时：


```bash
let a = createElement(
  'div',
  {width:'20px', height: '20px'},
  createElement(
    'p'
  ),
  createElement(
    'a'
  ),
)
```


打印出a，其结果为：


```bash
{
  '$$typeof': Symbol(react.element),
  type: 'div',
  key: null,
  props: { width: '20px', height: '20px', children: [ [Object], [Object] ] }
}
```


可以看到，当含有多个子元素时，children 以数组的形式存储这些子元素。

