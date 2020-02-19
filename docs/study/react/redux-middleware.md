---
title: redux的中间件
date: 2020-02-15 12:11 下午
categories: 
 - react
tags: 
 - redux
---
什么是redux中间件？介绍redux-thunk和redux-saga的使用方法
<!-- more -->

## 中间件的原理 => 拓展升级dispatch
在action和reducer之间，进行一些额外的操作，就需要用到middleware。你可以利用 Redux middleware 来进行日志记录、创建崩溃报告、调用异步接口或者路由等等。
换言之，中间件都是对store.dispatch()的增强

## redux-thunk => 将异步操作拆分

- 作用：使action可以使用函数形式

```js
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from "xxx"
 const store = createStore(
  reducers, 
  applyMiddleware(thunk)
);
```

## redux-saga => 

```js
import createSagaMiddleware from 'redux-saga'
import todosaga from './saga.js'
const sagaMiddleware = createSagaMiddleware()
applyMiddleware(sagaMiddleware)
sagaMiddleware.run(todosaga)
// saga.js
function * mySage() {
  
}
export default mySage
```






