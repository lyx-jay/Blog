
# MVVM & MVC


用JavaScript在浏览器中操作HTML，经历了若干个节点：


第一阶段，直接使用JavaScript操作DOM节点，使用浏览器提供的原生API


```javascript
var dom = document.getElementById('name');
dom.innerHTML = 'HOmer';
dom.style.color = 'red';
```


第二阶段，由于原生API不好用，还需要考虑额浏览器兼容性，jQuery出现了，以简洁的API迅速俘获了前端开发者


第三阶段，`MVC`模式，需要服务器端配合，JavaScript可以在前端修改服务器渲染后的数据。


MVC：M-Model（模型，数据或信息），V-View（视图），Controller（控制）


随着前端页面越来越复杂，用于对于交互性要求也越来越高。MVVM模型应运而生。


### MVVM


MVVM 的出现促进了GUI前端开发与后端业务逻辑的分离，极大地提高了前端开发效率。MVVM的核心是`ViewModel`层，它就像是一个中转站（value converter），负责转换Model中的数据对象来让数据变得更加容易管理和使用，该层向上与视图进行双向数据绑定，向下与Model层通过接口请求进行数据交互，起呈上启下作用。


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/191c54c4-dcfc-455a-95f4-7a4a47ef2841/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T082110Z&X-Amz-Expires=3600&X-Amz-Signature=31f68313d4e6d8ac94e9ace5c5294a1cbd4075cf2ffb143588022f539f553dc2&X-Amz-SignedHeaders=host&x-id=GetObject)


MVVM组成部分


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/f1d198bf-3fad-4011-965f-4e09d348ab4b/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T082110Z&X-Amz-Expires=3600&X-Amz-Signature=5a6f65421f6bd770f60e7e8d1b4552bd315615a85e5f2be76eea2fb6082f7075&X-Amz-SignedHeaders=host&x-id=GetObject)


**View 层**


View 是视图层，也就是用户界面。前端主要由 HTML 和 CSS 来构建，为了更方便地展现 ViewModel 或者 Model 层的数据，已经产生了各种各样的前后端模板语言，比如FreeMarker、Marko、Pug、Jinja2等等，各大 MVVM 框架如 avalon，Vue，Angular 等也都有自己用来构建用户界面的内置模板语言。


M**odel 层**


Model 是指数据模型，泛指后端进行的各种业务逻辑处理和数据操控，主要围绕数据库系统展开。


**ViewModel 层**


`ViewModel` 是由前端开发人员组织生成和维护的视图数据层。`mvvm`模式的核心，它是连接`view`和`model`的桥梁。


在`ViewModel`层，会对从后端获取的数据进行二次封装，这里封装的数据模型包括视图的状态和行为，比如这一块展示的内容是什么，点击会发生什么。


视图状态和行为都封装在了 `ViewModel` 里，这样的封装使得 `ViewModel` 可以完整地去描述 `View` 层。通过双向绑定，`ViewModel` 的内容会实时展现在 `View` 层。


前端开发者只需要处理和维护ViewModel层，更新数据，视图就会相应的更新，实现数据驱动开发。


View 层展现的不是 Model 层的数据，而是 ViewModel 的数据，由 ViewModel 负责与 Model 层交互，这就完全解耦了 View 层和 Model 层，这个解耦是至关重要的，它是前后端分离方案实施的重要一环。

