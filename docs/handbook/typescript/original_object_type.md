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