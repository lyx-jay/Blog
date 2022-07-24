# React 架构设计 

React 在 v16 之后，重新调整了整个框架的设计架构。因此，了解其架构设计，要分为两个阶段：

- React 15 及之前版本
- React 16 及之后版本

## React 15 架构


特点：同步更新


架构设计分为两部分：

1. stack reconciler：找到发生变化的组件
2. renderer：将变化的组件渲染到页面上

## React 16 架构


特点：可中断的异步更新


16 架构新增内容：

- 增加了 scheduler 模块，用于控制优先级调度
- 引入了Fiber架构，将 stack reconciler 更新为 Fiber reconciler

![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/d9056371-8bc0-4fa4-9d89-5bc2e45b7958/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T093742Z&X-Amz-Expires=3600&X-Amz-Signature=a1450ed2e57b59eb6d09b2fcf52dda6061062b20e439b2db9d7db406061a8884&X-Amz-SignedHeaders=host&x-id=GetObject)


![](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/2d577514-117c-497c-a413-45cf0f13f386/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220724T093742Z&X-Amz-Expires=3600&X-Amz-Signature=8f92dad9f609682fb546a4daba97fdc1a8403e1ad9f73b12331ed58138be4aec&X-Amz-SignedHeaders=host&x-id=GetObject)


React 16 引入的Fiber解决了什么问题？有什么具体的意义？

