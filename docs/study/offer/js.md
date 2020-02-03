---
title: JS相关面试题
date: 2020-02-01 23:57:51
categories: 
 - 学习
tags: 
 - 面试
---

## 闭包相关

闭包：自由变量的查找，是在函数定义的地方向上级查找，不是在执行的地方

```javascript
function fn() {
  const a = 100
  return function() {
    console.log(a)
  }
}

let a = fn()  // 输出100

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

- 什么是同源策略
浏览器要求当前网页和Server必须同源（协议，域名，端口，三者必须一致），但加载图片，css，js是可以无视同源策略的

利用无视同源策略特性： 使用图片实现打点

JSONP: 使用script标签来传递信息，将参数写在请求地址上，写好jsonp返回函数的callback函数名

## 题目实战

::: tip 
**一、** 打车时，可以打专车或快车。任何车都有**车牌号**和**名称**，不同的车价格不同，快车每公里1元，专车每公里2元。行程开始时，显示车辆信息，行程结束时，显示打车金额，**假定一位用户行程为5公里，请画出UML类图并用ES6语法写出该示例**
:::
<<< @/docs/study/offer/code-1.js

::: tip
**二、** 某停车场，分3层，每层100车位，每个车位都能监控到车辆的驶入和离开，车辆进入前，显示每层的空余车位数量，车辆进入时，摄像头可识别车牌号和时间，车辆出来时，出口显示器显示车牌号和停车时间
:::

<<<@/docs/study/offer/code-2.ts




