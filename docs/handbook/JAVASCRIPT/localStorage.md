# localStorage 二次封装

在选择浏览器本地存储时，localStorage 是我们在开发中最经常使用的方案

我认为原因有两个：
1. 存储空间。localStorage 存储空间为 5M，这个大小可以满足大多数场景下的缓存要求
2. API简单。相较于 indexedDB 复杂的 API 设计，localStorage 的使用非常简单

那，为什么还需要二次封装呢？

在业务上，我们需要考虑的地方有很多，比如资源过期时间、过期自动清除、数据存储加密、不同域名存储、内存缓存等等。。。

因此，基于这些考虑，需要对 localStorage 进行二次封装

## 代码设计

```js
import { b64decode, b64encode } from '@waiting/base64';

export default class EnhanceStorage {

  constructor(options) {
    this.memoryCache = {};
    this.PREFIX = options.PREFIX;
    this.PREFIX_EXPIRES = options.PREFIX_EXPIRES;
    // 初始化检出localStorage中内容是否过期
    this._checkAll();
    this._updateLocalStorgaeToMemoryCache();
  }

  /**
   * 将localStorage中的数据同步到内存中
   */
  _updateLocalStorgaeToMemoryCache() {
    for (const k in localStorage) {
      if (k.includes(this.PREFIX) || k.includes(this.PREFIX_EXPIRES)) {
        this.memoryCache[k] = localStorage.getItem(k);
      }
    }
  }

  /**
   * 检查全部数据是否过期，删除其中过期的数据
   */
  _checkAll() {
    for (const k in localStorage) {
      if (k.includes(this.PREFIX_EXPIRES)) {
        this._checkItem(k.replace(this.PREFIX_EXPIRES + '_', ''));
      }
    }
  }

  async getItem(key, syncFn, newExpire) {
    const targetKey = this._getTargetKey(key);
    if (!this.memoryCache[targetKey]) return null;
    if (!this._checkItem(key)) {
      // 没过期
      return JSON.parse(b64decode(this.memoryCache[targetKey]));
      // let value = localStorage.getItem(targetKey);
      // if (!value) return null;
      // return JSON.parse(b64decode(localStorage.getItem(targetKey)));
    } else {
      // 过期, 检查有没有更新函数
      if (!syncFn || typeof syncFn !== 'function') return null;
      let newValue = await syncFn();
      // 将获取到的新结果写入到缓存和localStorage
      this.setItem(key, value, newExpire);
      return newValue
    }

    // 先判断是否过期
    // 如果过期，删除
    // 如果不过期，再取出来
    // this._checkItem(key);
    // const targetKey = this._getTargetKey(key); 
    // let value = localStorage.getItem(targetKey);
    // if (!value) return null;
    // return JSON.parse(b64decode(localStorage.getItem(targetKey)));
  }

  /**
   * 检查单个数据是否过期，若过期，删除数据
   * @param {String} key 数据键名
   */
  _checkItem(key) {
    let expired = false;
    const expireKey = this._getExpiresKey(key);
    const targetKey = this._getTargetKey(key);
    const expires = JSON.parse(localStorage.getItem(expireKey));
    const now = Date.now();
    // 如果过期，删除数据
    if (now > +expires) {
      expired = true;
      localStorage.removeItem(targetKey);
      localStorage.removeItem(expireKey);
    }
    return expired
  }

  /**
   * 获取该数据的时间key
   * @param {String} key 数据键名
   * @returns String
   */
  _getExpiresKey(key) {
    return this.PREFIX_EXPIRES + `_${key}`
  }

  /**
   * 获取该数据的key
   * @param {String} key 数据键名
   * @returns String
   */
  _getTargetKey(key) {
    return this.PREFIX + `_${key}`;
  }

  setItem(key, value, expires = 10 * 1000) {
    let targetKey = this._getTargetKey(key);
    let expireKey = this._getExpiresKey(key);
    try {
      // 将数据写入内存
      this.memoryCache[targetKey] = b64encode(JSON.stringify(value)); 
      this.memoryCache[expireKey] = Date.now() + expires + ''; 
      // 将数据写入localStorage
      localStorage.setItem(targetKey, b64encode(JSON.stringify(value)));
      localStorage.setItem(expireKey, Date.now() + expires + '');
    } catch (error) {
      // 当 localStorage 存满了，会触发错误
      // 此时，先清除当前域名下的存储空间，再向其中存储数据
      this.clear();
      this.memoryCache[targetKey] = b64encode(JSON.stringify(value)); 
      this.memoryCache[expireKey] = Date.now() + expires + ''; 
      localStorage.setItem(targetKey, b64encode(JSON.stringify(value)));
      localStorage.setItem(expireKey, Date.now() + expires + '');
    }
  }

  /**
   * 删除单个数据
   * @param {String} key 数据键名 
   */
  removeItem(key) {
    let targetKey = this._getTargetKey(key);
    let expireKey = this._getExpiresKey(key);
    // 删除内存中的数据
    delete this.memoryCache[targetKey];
    delete this.memoryCache[expireKey];
    // 删除localStorage中的数据
    localStorage.removeItem(targetKey);
    localStorage.removeItem(expireKey);
  }

  // 删除带有前缀的key-value
  clear() {
    this.memoryCache = {}; // 清除内存中的数据
    for (const k in localStorage) {
      if (k.includes(this.PREFIX) || k.includes(this.PREFIX_EXPIRES)) {
        localStorage.removeItem(k);
      }
    }
  }
}
```