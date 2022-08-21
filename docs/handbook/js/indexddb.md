# 使用 Promise 封装 indexedDB

indexedDB 是一个浏览器存储数据库，拥有与 MySQL 相似的特性，其存储容量远大于其他浏览器存储方案（cookie、webStorage）

但是，其 API 设计的非常复杂，在使用起来体验非常不好。所以，考虑使用 Promise 对其进行二次封装

## 注意事项

1. 在操作数据库的过程中，经常要使用到 db、objectStore 这两个对象。所以要通过 Promise.resolve() 的方式拿到这个对象，而不能直接通过在类中设置 this.db 属性的方式去获取，这种方式会导致有时拿不到对象

2. 对于获取这两个对象的写法，分开写，遵循 solid 原则。之前我在使用的时候，老想着把他们写在一起，想着这个类里边有这么一个函数（异步获取对象）就够了，但是往往会造成更复杂的情况。从中我学到了：**抽象是应该让事情变简单，凡事让事情更复杂的，多是错误的**

3. `onupgradeneeded` 触发条件：
* 当数据库不存在时，使用 `indexedDB.open(name, version)` 创建数据库会触发 `onupgradeneeded` 事件
* 数据库存在，使用 `indexedDB.open(name, newVersion)` 打开数据库（注意，**version 发生变化**，version 只能是整数），会触发 `onupgradeneeded` 事件
* 数据库存在，使用 `indexedDB.open(name, newVersion)` 打开数据库，version 不发生变化，不会触发 `onupgradeneeded` 事件

4. 根据第 3 条的规则，**在封装创建数据库的函数时，创建数据库和创建数据表应该都是放在一起，这点很重要**。之前，我想这步封装为两个函数：`createDB`-创建数据库、`createStore`-创建表，但是你会发现必须在创建表的时候更新版本号，才可以创建成功，否则根本触发不了 `onupgradeneeded` 函数。而 `createStore` 函数又会被多次调用，每次都更新一个版本号嘛，显然是不合理的，所以，创建数据库和创建表要放在一个函数里去写。

## 代码编写

封装的代码来自 `_Season`，我在学习他的封装时，写下这些感想

文章链接 - [IndexDB 的麻瓜式介绍与异步封装](https://juejin.cn/post/6898529524640645127#heading-6)

```js
function promisify(request, type) {
  return new Promise((resolve, reject) => {
    request.onsuccess = (event) => {
      const returnMap = {
        event: event.target.result,
        request: request.result,
        msg: "操作成功"
      };
      resolve(returnMap[type || "msg"])
    };
    request.onerror = (event) => reject(event.target.error || '操作失败')
  })
}

class LDB {

  static indexedDB;
  constructor(options) {
    this.name = options.name;
    this.version = options.version;
    this.initDB(options.store);
  }

  // 单例模式
  static getInstance(options) {
    this.indexedDB = this.indexedDB ? this.indexedDB : new LDB(options);
    return this.indexedDB;
  }

  initDB(store) {
    const request = indexedDB.open(this.name, this.version);
    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      for (let i = 0; i < store.length; i++) {
        if (db.objectStoreNames.contains(store[i].name)) {
          continue;
        }

        const objectStore = db.createObjectStore(store[i].name, { keyPath: store[i].key });
        for (let j = 0; j < store[i].cursorIndex.length; j++) {
          const element = store[i].cursorIndex[j];
          objectStore.createIndex(element.name, element.name, {
            unique: element.unique
          });
        }
      }
    }

    request.onerror = () => Promise.reject('初始化数据库失败');
    request.onsuccess = () => Promise.resolve('初始化数据库成功');
  }

  openDB() {
    const request = indexedDB.open(this.name, this.version);
    return promisify(request, "event");
  }

  async insertData(table, data) {
    try {
      const db = await this.openDB();
      const transaction = db.transaction(table, 'readwrite');
      const objectStore = transaction.objectStore(table);

      // 如果添加的数据不是数组
      if (!Array.isArray(data)) {
        const request = objectStore.add(data);
        return promisify(request);
      }

      data.forEach(item => {
        objectStore.put(item);
      })

      return new Promise((resolve, reject) => {
        transaction.oncomplete = () => {
          resolve('所有数据插入成功');
        }

        transaction.onerror = (event) => {
          reject(event)
        }
      })
    } catch (err) {
      return Promise.reject(error)
    }
  }

  async getObjectStore(table, type) {
    try {
      const db = await this.openDB();
      return db.transaction(table, type).objectStore(table);
    } catch (error) {
      return Promise.reject(error);
    }
  }

  // 获取单条数据时，必须要添加cursorValue才可以去得到
  async getData(table, cursorKey, cursorValue) {
    console.log(cursorKey)
    try {
      const objectStore = await this.getObjectStore(table);
      const request = cursorValue ? objectStore.index(cursorKey).get(cursorValue) : objectStore.get(cursorKey);
      const result = await promisify(request, "request");
      return result
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async getAllData(table) {
    try {
      const objectStore = await this.getObjectStore(table);
      const request = objectStore.getAll();
      const result = await promisify(request, "request");
      return result ? result : [];
    } catch (error) {
      return Promise.reject(error);
    }
  }

  async clearDB(table) {
    try {
      const objectStore = await this.getObjectStore(table, "readwrite");

      const request = objectStore.clear();
      return promisify(request);
    } catch (error) {
      return Promise.reject(error);
    }
  }

    /**
   * 通过游标来获取表的数据,性能较好
   * @param table 表名
   * @param keyRange 查询的范围；IDBKeyRange对象，内容传 表主键的值
   */
     async getDataByCursor(table, keyRange) {
      try {
        console.time("getDataByCursor");
        const objectStore = await this.getObjectStore(table);
        const cursorRequest = objectStore.openCursor(keyRange);
  
        return new Promise((resolve, reject) => {
          let results  = [];
  
          cursorRequest.onerror = reject;
          cursorRequest.onsuccess = (e) => {
            const cursor = e.target.result;
            // console.log(e);
  
            if (cursor) {
              // cursor.key 是一个 name, 就像 "Bill", 然后 cursor.value 是整个对象
              results.push(cursor.source);
              cursor.continue();
            } else {
              console.timeEnd("getDataByCursor");
              // 遍历之后的 object 数据列表的结果
              resolve(results);
            }
          };
        });
      } catch (error) {
        return Promise.reject(error);
      }
    }
}

// ----------- 数据库使用

const data = {
  itemId: "2489",
  goodsId: "2001857",
  barcode: "6902265360100",
  category: "调味油汁/料酒类",
  name: "海天上等蚝油260g",
  brand: "海天",
  specification: "260g瓶",
  status: 1,
  statusDesc: "",
  itemSkuId: "2540",
};

let storeData = [];
for (let i = 0; i < 10000; i++) {
  const item = {
    ...data,
    id: i,
    name: data.name + i,
    goodsId: data.goodsId + i,
  };

  storeData.push(item);
}

// 数据库的结构
const store = [
  {
    name: "goods",
    key: "id",
    cursorIndex: [
      { name: "name", unique: false },
      { name: "goodsId", unique: true },
    ],
  },
];

const database = LDB.getInstance({ store: store, name: 'db', version: 1 });

database.insertData("goods", storeData); // 耗时：insertData: 1266.023193359375ms

database.getData("goods", "name", "海天上等蚝油260g0").then(res => {
  console.log(res)
})
// database.getAllData("goods").then((val) => console.log(val));

database.getDataByCursor("goods", IDBKeyRange.bound(0, 20)).then((val) => console.log(val)); 


```