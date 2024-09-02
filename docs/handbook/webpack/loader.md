# loader

## 常用loader解析

### style-loader

`style-loader` 的作用是将 `css` 文件注入到 HTML 的 DOM 元素，默认是注入到 `style` 标签当中。

值的注意的是，注入样式的过程是在运行时完成的，并非是在编译时就将样式注入到 DOM 元素中

::: tip
`style-loader` 主要用于开发环境当中。

在生产环境打包时，通常是将 css 文件从 js 文件中抽离出来
:::

### mini-css-extract-plugin

该插件的作用是将 css 从 js 文件中抽离出来，并通过在 `document.head` 中添加 link 标签的方式引入样式文件

::: danger
千万不能只看名字就推测该插件的作用，以为仅仅是将 css 文件抽离出来，没有注入到 html 中。

这会导致在生产环境打包的时候错误地将 `style-loader` 和 `mini-css-extract-plugin` 混合使用
:::

## loader原理