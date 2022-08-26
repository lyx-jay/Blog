# 使用 stylelint 规范 css 书写

## 为什么要使用 stylelint ？

* 我在写 CSS 的时候，经常不注意属性顺序，所以看起来非常乱
* CSS 顺序也会影响页面性能

## stylelint 在 React 中的配置

### 安装 stylelint 

`npm i --save-dev stylelint stylelint-order stylelint-config-standard`

### 创建配置文件

在 `package.json` 中添加如下命令：
```json
scripts: {
  "style": "stylelint \"src/**/*.(vue|scss|css)\" --fix"
}
```

在项目根目录下创建配置文件 `.stylelintrc.json`

```json
{
  "extends": "stylelint-config-standard",
  "plugins": [
    "stylelint-order"
  ],
  "rules": {
    "order/properties-order": [
      "position",
      "top",
      "right",
      "bottom",
      "left",
      "z-index",
      "display",
      "justify-content",
      "align-items",
      "float",
      "clear",
      "overflow",
      "overflow-x",
      "overflow-y",
      "margin",
      "margin-top",
      "margin-right",
      "margin-bottom",
      "margin-left",
      "border",
      "border-style",
      "border-width",
      "border-color",
      "border-top",
      "border-top-style",
      "border-top-width",
      "border-top-color",
      "border-right",
      "border-right-style",
      "border-right-width",
      "border-right-color",
      "border-bottom",
      "border-bottom-style",
      "border-bottom-width",
      "border-bottom-color",
      "border-left",
      "border-left-style",
      "border-left-width",
      "border-left-color",
      "border-radius",
      "padding",
      "padding-top",
      "padding-right",
      "padding-bottom",
      "padding-left",
      "width",
      "min-width",
      "max-width",
      "height",
      "min-height",
      "max-height",
      "font-size",
      "font-family",
      "font-weight",
      "text-align",
      "text-justify",
      "text-indent",
      "text-overflow",
      "text-decoration",
      "white-space",
      "color",
      "background",
      "background-position",
      "background-repeat",
      "background-size",
      "background-color",
      "background-clip",
      "opacity",
      "filter",
      "list-style",
      "outline",
      "visibility",
      "box-shadow",
      "text-shadow",
      "resize",
      "transition"
    ]
  }
}
```

### 安装 VsCode 插件

插件：Stylelint

打开 setting.json :

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  }
}
```