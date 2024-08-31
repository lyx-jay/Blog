# hash vs chunhash vs contenthash

## hash

hash 是根据所有文件的内容计算出的🈯值，因此，无论有多少的chunk，其 hash 值都是一样的

## chunkhash

chunkhash 是基于 entry 计算的，每一个 chunk，会生成不同的hash值。

```js
module.exports = {
  mode: "development",
  entry: {
    index: './index.js',
    main: './main.js'
  },
  output: {
    filename: '[name].[chunkhash].js'
  },
};
```

当前webpack配置，存在两个打包入口：`index.js` 和 `main.js`。

这两个入口的文件引用关系如下：

index.js -> index-1.js

main.js -> main-1.js

**第一次打包**

|  文件   | chunkhash  |
|  ----  | ----  |
| main  | eb47078030e568214c45 |
| index  | 6d6ce1dd00c6d488a9de |

**第二次打包**

仅修改 `index-1.js` 文件

|  文件   | chunkhash  |
|  ----  | ----  |
| main  | eb47078030e568214c45 |
| index  | <div style="color:red">a09cd21a892a640a7d8f</div> |

对比发现，仅有 `index.js` 文件的 `chunkhash` 发生了变化。因为仅是 `index.js` 入口的文件依赖发生了变化，`main.js` 入口文件并没有发生变化。

## contenthash

contenthash 是指根据文件内容计算hash值

> 即便是文件名不同，但文件内容相同，那么 contenthash 也是相同的



webpack5 中增加了 `realContentHash` feature，修复了 `contenthash` 的错误，具体可以见下面文章：

https://www.matthinchliffe.dev/2023/12/20/content-hashes-fixed-in-webpack-v5
