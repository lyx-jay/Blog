## 横向瀑布流布局

在排列图片时，可能会遇到这样的场景：

图片高度一致，但宽度不一致，要使图片错落的排布在一起，且每一行不会产生多余的空白空间（类似百度图片的布局）

那么，我们该怎样去处理这个布局呢？

### 分析

常用的布局方案有两种：flex 布局 和 grid 布局

grid 布局适用于 **可以知道具体划分为几列或几行的场景**

flex 布局适用于不确定列数或行数的场景

因此，采用 flex 布局可以处理这种图片排列
### 方案

```css
.img-wrapper-list {
  display: flex;
  flex-wrapper:wrap; /* 当元素占满一行时，可以自动换行 */
  padding: 15px 5px; /* padding 可以根据具体项目设定 */
}
.img-wrapper-list::after { /* 用于最后一行的位置显示空白 */
  content: '';
  flex-grow: 9999;
}

/* img-wrapper 为包裹图片的盒子 */
.img-wrapper-list .img-wrapper {
  flex-grow: 1; /* 根据比例计算每个图片等分剩余空间 */
  overflow:hidden; /* 把每个盒子多余的部分给包裹起来 */
  .img {
    height:170px;
    min-width: 100%; /* 让图片充满父级标签的宽度 */
    object-fit:cover;
  }
}
```

这样就可以实现横向瀑布流布局

但是，每个盒子设置为flex-grow为1，盒子会均分剩余的空间，也就是说每个图片宽度都会增加相同的像素

这样会改变图片的宽高比

因此，为了让图片的宽高比不发生变化，可以按照**图片的宽高比瓜分剩余空间**

