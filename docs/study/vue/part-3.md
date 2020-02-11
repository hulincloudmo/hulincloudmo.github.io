---
title: $nextTick
date: 2020-02-10 21:40
categories: 
 - vue
tags: 
 - vue-$nextTick
---

<!-- more -->

## 使用原因

- Vue是个异步渲染的框架
- data改变之后，DOM不会立即渲染

$nextTick会在DOM渲染后被触发

## 使用场景

**当你需要拿到data改变后的DOM数据时！比如用$ref拿到元素节点操作时**

**实现异步渲染，nextTick会等到Data数据修改完全后，才会执行回调，提高页面性能**


