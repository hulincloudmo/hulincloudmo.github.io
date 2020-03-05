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

### 闭包的应用-函数的柯里化（curring）

柯里化？这么高端的名词到底是什么意思？其实只是curring的中文读音而已，实际上也就是通过闭包简化函数的参数使用，下面看一个简单的例子



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

## 变量提升

::: tip
- avaScript 解释器中存在一种变量声明被提升的机制，也就是说**函数声明会被提升到作用域的最前面**，即使写代码的时候是写在最后面，也还是会被提升至最前面。
- 而用函数表达式创建的函数是在运行时进行赋值，且要等到表达式赋值完成后才能调用
:::

```javascript
var getName //变量被提升，此时为undefined

getName() //oaoafly 函数被提升 这里受函数声明的影响，虽然函数声明在最后可以被提升到最前面了
var getName = function() {
    console.log('wscat')
} //函数表达式此时才开始覆盖函数声明的定义
getName() //wscat
function getName() {
    console.log('oaoafly')
}
getName() //wscat 这里就执行了函数表达式的值
```

## new一个函数和直接定义函数有什么区别？

new会使执行函数的上下文指向这个函数的本身，而直接执行定义的函数的this将会指向window

## 判断类型的终极解决方案

`Object.prototype.toString.call()`

```javascript
Object.prototype.toString.call({})              // '[object Object]'
Object.prototype.toString.call([])              // '[object Array]'
Object.prototype.toString.call(() => {})        // '[object Function]'
Object.prototype.toString.call('test')        // '[object String]'
Object.prototype.toString.call(1)               // '[object Number]'
Object.prototype.toString.call(true)            // '[object Boolean]'
Object.prototype.toString.call(Symbol())        // '[object Symbol]'
Object.prototype.toString.call(null)            // '[object Null]'
Object.prototype.toString.call(undefined)       // '[object Undefined]'

Object.prototype.toString.call(new Date())      // '[object Date]'
Object.prototype.toString.call(Math)            // '[object Math]'
Object.prototype.toString.call(new Set())       // '[object Set]'
Object.prototype.toString.call(new WeakSet())   // '[object WeakSet]'
Object.prototype.toString.call(new Map())       // '[object Map]'
Object.prototype.toString.call(new WeakMap())   // '[object WeakMap]'

```









