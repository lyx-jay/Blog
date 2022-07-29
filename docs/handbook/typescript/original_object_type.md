# 原始类型与对象类型

## null 和 undefined

null 与 undefined 在 typescript 中表示**有具体意义的类型**，这与 javaScript 中不同。

在未开启 `strictNullChecks` 的情况下，这两种类型会被视为其他类型的子类型，比如，string 类型会被认为包含 null 和 undefined 类型

## void

void 用于描述一个内部没有 return 语句，或者没有显示 return 一个值的函数的返回值

```ts
function func1() {}
function func2() {
  return;
}
function func3() {
  return undefined;
}
```

在这里，func1 与 func2 的返回值类型都会被隐式推导为 void，只有显式返回了 undefined 值的 func3 其返回值类型才被推导为了 undefined。但在实际的代码执行中，func1 与 func2 的返回值均是 undefined。


## 数组与元组

在处理大量数据时，数组是我们经常使用的类型。其在 Typescript 中声明方式如下：
```ts
const arr1:string[] = [];  // 这种方式更常用
const arr2:Array<string> = [];
```
在数据大小未知的情况下，可以使用数组。但，对于**定长的数据**而言，元组可能更合适。

元组特点：
1. 在下标越界时，可以给出明确的类型报错
2. 可以精确标记索引位置上的元素类型
3. 支持可选成员
4. 对于隐式越界的情况，如通过结构赋值的形式，也可以给出警告


```ts
const arr3:[string, string, string] = ['lyx', 'lyx', 'lyx'];
console.log(arr1[15]); // 错误，在索引15处没有元素
```

```ts
// 支持不同类型的元素
const arr4:[string, number, boolean] = ['lyx', 12, boolean];
```

```ts
// 支持不同类型的元素
const arr5:[string, number？, boolean？] = ['lyx'];
```

对于标记为可选的成员，在 --strictNullCheckes 配置下会被视为一个 string | undefined 的类型。此时元组的长度属性也会发生变化，比如上面的元组 arr5 ，其长度的类型为 1 | 2 | 3：

在 Typescript 4.0 中，支持了具名元组，可以为元组中的元素打上类似属性的标记

```ts
const arr7: [name: string, age: number, male: boolean] = ['linbudu', 599, true];
```

具名元组不支持以 `arr7[name]` 的形式取的元素值


## 对象类型的类型标注

在描述对象类型时，常常使用 interface 来描述对象对外提供的接口

```ts
interface IDescription {
  name:string;
  age:number;
  male:boolean;
}

const obj: IDescription = {
  name: 'lyx',
  age: 20,
  male:true
}
```

注意：
1. 每一个属性值必须与接口的属性类型一一对应
2. 属性不能多或者少，不允许直接在对象内部声明，或是 `obj.other  = 'xxx' 这样的形式`

### 属性修饰符： ？ and readonly

`？`：表示该属性是可选的

```ts
interface IDescription {
  name: string;
  age: number;
  male?: boolean;
  func?: Function;
}

const obj2: IDescription = {
  name: 'linbudu',
  age: 599,
  male: true,
  // 无需实现 func 也是合法的
};
```
在此时，即使你在 `obj2` 中定义了 `male` 属性，当时，访问 `obj.male` 时，其类型仍然会是 `boolean ｜ undefined`

但是，可选属性不会影响你对属性赋值：

```ts
obj2.male = false;
obj2.func = () => {};
```

`readonly`：表示该属性只读，不可以被再次赋值

数组与元组也有属性修饰符，但是：
1. 数组/元组只能整体被标记为只读，而不能仅仅标记某个属性为只读
2. 一旦被标记为只读，那这个只读数组/元组的类型上，将不再具有 push、pop 等方法（即会修改原数组的方法），因此报错信息也将是类型 xxx 上不存在属性“push”这种。这一实现的本质是只读数组与只读元组的类型实际上变成了 ReadonlyArray，而不再是 Array。


### type 和 interface

type 和 interface 都可以用来描述对象、类的结构

推荐用法：
1. interface 用来描述对象、类的结构
2. type 用来将一个**函数签名**、一组**联合类型**、一个**工具类型**等等抽离成一个完整独立的类型

### object、Object 和 {}

Object: 在 ts 中，Object 表现为包含所有的类型。这与 JS 中Object作为原型链的终点的含义不谋而合。

```ts
// 对于 undefined、null、void 0 ，需要关闭 strictNullChecks
const tmp1: Object = undefined;
const tmp2: Object = null;
const tmp3: Object = void 0;

const tmp4: Object = 'linbudu';
const tmp5: Object = 599;
const tmp6: Object = { name: 'linbudu' };
const tmp7: Object = () => {};
const tmp8: Object = [];
```

**装箱类型**（Boolean、String、Number、Symbol）与 Object 含义类似，它会包含 undefined、null、void 以及对应的**拆箱类型**

例如，String 类型会包含 undefined、null、void 以及 string 类型

> 在任何情况下，都不应该使用装箱类型


object 的引入就是为了解决对 Object 类型的错误使用，它代表**所有非原始类型的类型，即数组、对象与函数类型**

{}：可以认为是对象字面量类型，它意味着**任何非 null / undefined 值**

虽然其可以作为变量类型，但是无法对其进行任何赋值操作

总结：

1. 在任何时候都不要，不要，不要使用 Object 以及类似的装箱类型。

2. 当你不确定某个变量的具体类型，但能确定它不是原始类型，可以使用 object。但我更推荐进一步区分，也就是使用 Record<string, unknown> 或 Record<string, any> 表示对象，unknown[] 或 any[] 表示数组，(...args: any[]) => any表示函数这样。

3. 我们同样要避免使用{}。{}意味着任何非 null / undefined 的值，从这个层面上看，使用它和使用 any 一样恶劣。

