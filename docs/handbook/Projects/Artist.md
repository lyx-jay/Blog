
# Aritst
## **Preview Picture**


This is a simple demo, which can help you comprehend React's basic usage.


If you want to see the code, please click [lyx-jay/ANIMATED_REACT_APP: using React and styled-components to create an animated app, which is a great project to learn React. (github.com)](https://github.com/lyx-jay/ANIMATED_REACT_APP).


![light mode](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/0eedc98b-ca65-49f5-bbe5-7a930c881af2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T045821Z&X-Amz-Expires=3600&X-Amz-Signature=aafda7b3d9e707a0913db289432ecb0420ea1bb569b4a8a9e94a16845c54425f&X-Amz-SignedHeaders=host&x-id=GetObject)


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a827b2be-e930-4d8e-ad30-e829db097c70/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T045821Z&X-Amz-Expires=3600&X-Amz-Signature=fcbb9f468b1ff2bf20b6a6fb5476250a14c8c1dbb80ba2d104951805bccfcaa7&X-Amz-SignedHeaders=host&x-id=GetObject)


## **Summarize**

1. 在项目建立时，首先要建立全局样式
	- 全局样式包括通过用元素的基础样式设置，样式清零设置
2. max-width & width
	- max-width：指元素的最大宽度，当 width 的宽度超过最大宽度时，max-width 生效，而width 不生效
	- 当p、h标签中文字过长时，设定 max-width 可以使文字换行

	| 属性          | 含义                                    |
	| ----------- | ------------------------------------- |
	| px          | 绝对长度                                  |
	| auto        | 浏览器为指定的元素计算并选择一个宽度                    |
	| max-content | 内容的宽度，若是一句话，就是该句话的宽度                  |
	| min-content | 内容的最小宽度，内容较长时会出现换行                    |
	| fit-content | 取min-content和(max-content, 可用宽度)中的较大值 |

3. css中如何使用变量
	- 对于经常使用到的颜色、高度等值，可以将其写成变量的形式。
	- CSS变量 --> `--height: 50px`，具有继承性
	- 对于全局CSS变量，可以放在`:root {--width: 200px}` 中，局部变量则放在相应的容器中 `div {--color: #fff}`
4. CSS 如何实现switch按钮

	![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/fdc2179c-cf5a-48e3-bb95-2c01d6f03670/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T045827Z&X-Amz-Expires=3600&X-Amz-Signature=8ef38aa13fe13d2047f6d916a52d94b8da7df49c4ae12eee2fab089b6ddd375b&X-Amz-SignedHeaders=host&x-id=GetObject)

	1. 首先清除checkbox的默认样式
	2. 定义checkbox的外观
	3. 利用伪元素生成一个圆形，作为switch的按钮，并添加transition动画
	4. 在checkbox状态改变时，将圆形向右移动一定距离

	清除checkbox样式的两种方法：

	- 利用 `appearance` 属性。该属性目前是一个实验性属性，表示基于平台的原生UI样式，将该属性设置为 `none`即可清除默认样式。
	- 利用 `visibility:hidden` 和 `display:none`

	```html
	<!DOCTYPE html>
	<html lang="en">
	<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
	<style>
	    body {
	        background-color: cadetblue;
	    }
	    input {
	        position: relative;
	        box-sizing: border-box;
	        appearance: none;
	        width: 50px;
	        height: 25px;
	        border-radius: 12px;
	        background-color: #FFF;
	        cursor: pointer;
	    }
	    input::after {
	        position: absolute;
	        top: 1px;
	        left: 3px;
	        content: "";
	        width: 23px;
	        height: 23px;
	        border-radius: 50%;
	        background-color: greenyellow;
	        transition: 0.3s ease all;
	    }
	    input:checked::after{
	        transform: translateX(23px);
	    }
	</style>
	</head>
	<body>
	<input type="checkbox">
	</body>
	</html>
	```

5. CSS如何实现黑暗模式

	关于黑暗模式实现，会另写一篇文章，详细分析。

6. li中包裹input会导致高度出现变化

	由于 input、texrarea 等表单元素自身具有border、padding，因此不仅是li，应该是所有块级元素中都会出现input高度比盒子稍高一点的情况，将所有元素的盒模型设置为 `box-sizing: border-box` 可以解决该问题

7. gap

	gap属性用来设置网格行与列之间的间隙，该属性是 `row-gap` 和 `col-gap` 的简写形式


	该属性可以用于flex、grid以及多列布局。


	多列布局是指div设置了column-count属性，column-count表示将一个盒子分为若干列

8. form、input等元素也可以使用text-align居中

	`text-align` 用于设置行内元素的对齐方式, 行内元素有：

	- b, big, i, small, tt
	- abbr, acronym, cite, code, dfn, em, kbd, strong, samp, var
	- a, bdo, br, img, map, object, q, script, span, sub, sup
	- button, input, label, select, textarea
