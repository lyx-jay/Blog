# 虚拟列表

## 虚拟列表原理


## 代码实现

ts + react

```tsx
import React, { useEffect, useRef, useState } from 'react';
import './style.css';

export default function VirtualList(props: {
  listData: any[];
  itemSize: number;
  screenHeight: number;
}) {
  const bufferScale: number = 1;
  const { listData, itemSize, screenHeight } = props;
  const listHeight = listData.length * itemSize;
  const visibleCount = Math.ceil(screenHeight / itemSize);

  const listRef = useRef<HTMLDivElement | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [endIndex, setEndIndex] = useState(visibleCount);
  const [offset, setOffset] = useState(0);
  const [showData, setShowData] = useState<any[]>([]);


  const handleScroll = () => {
    let scrollTop = listRef.current!.scrollTop;  // 当前滚动位置
    let newStartIndex = Math.floor(scrollTop / itemSize);
    let newEndIndex = newStartIndex + visibleCount;
    let newOffset = scrollTop - (scrollTop % itemSize);
    setStartIndex(newStartIndex);
    setEndIndex(newEndIndex);
    setOffset(newOffset);
  }

  useEffect(() => {
    const aboveCount = Math.min(startIndex, bufferScale * visibleCount);
    const belowCount = Math.min(listData.length - endIndex, bufferScale * visibleCount);
    const realStartIndex = startIndex - aboveCount;
    const realEndIndex = endIndex + belowCount;
    const newShowData = listData.slice(realStartIndex, realEndIndex);
    setShowData(newShowData);
  }, [startIndex, endIndex, listData])

  return (
    <div ref={listRef} className="infinite-list-container"
      style={{ height: screenHeight }}
      onScroll={handleScroll}>
      <div className="infinite-list-phantom" style={{ height: listHeight }}></div>
      <ul className="infinite-list" style={{ transform: `translate3d(0,${offset}px,0)` }}>
        {
          showData.map((data, index) => {
            return (
              <li className='infinite-list-row' style={{ height: itemSize }} key={index}>
                {data}
              </li>
            )
          })
        }
      </ul >
    </div >

  )
}
```

样式文件

```css
ul,li {
  list-style-type: none;
}

.infinite-list-container {
  position: relative;
  overflow: auto;
  width: 100%;
}

.infinite-list-phantom {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
}

.infinite-list {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}

.infinite-list-row {
  text-align: center;
  margin-bottom: 28px;
  background-color: rgb(224, 222, 222);
  border-bottom: 1px solid gray;
}
```


## 待解决的问题
1. 列表中的每一项高度不确定，如何解决？
2. 列表中的每一项可以加点扩大，如何解决？
3. 当每一行有多个元素如何解决？