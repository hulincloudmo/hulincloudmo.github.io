---
title: JS相关面试
date: 2020-02-01 23:57:51
categories: 
 - offer
tags: 
 - 面试
---

## 闭包相关

闭包：自由变量的查找，是在**函数定义的地方**向上级查找，不是在执行的地方

```javascript
function fn() {
  const a = 100
  return function() {
    console.log(a)
  }
}

const a = 200

let b = fn()  // 输出100

```

## this的指向问题

### 一、什么时候确定this的指向
this的指向在没有执行到的时候是未知的

### 二、箭头函数中的this

箭头函数的this永远取的是他的上级作用域的值

## ajax

1. XMLHttpRequest

2. 状态码

3. 跨域：同源策略

```javascript
// 示例
let xhr = new XMLHttpRequest()
xhr.open("GET","/xxx",false)
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
     if(xhr.status === 200) {
      console.log(xhr.response)
     }
  }
}
```

### 什么是同源策略
浏览器要求当前网页和Server必须同源（协议，域名，端口，三者必须一致），但加载图片，css，js是可以无视同源策略的

利用无视同源策略特性： 使用图片实现打点

### JSONP是什么？
 使用script标签来传递信息，将参数写在请求地址上，写好jsonp返回函数的callback函数名


## 何时需要使用beforeDestory

- 解绑自定义事件 `event.$off` => **不解绑容易造成内存泄漏**

- 清除定时器 => **不解绑容易造成内存泄漏**

- 解绑自定义DOM事件，如window，scroll => **不解绑容易造成内存泄漏**

## Vue的action和mutation有何区别

- action中处理异步，mutation不可以

- mutation中做原子操作

- action可以整合多个mutation

## 响应式原理

- 监听data

- 组件渲染、更新过程








