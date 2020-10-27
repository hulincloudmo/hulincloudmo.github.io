---
title: webpack第一章
date: 2020-02-05 23:16
categories: 
 - webpack
tags: 
 - webpack基础
---

## Development和production模式的区别

- 开发模式会有map，帮助你定位错误未知，还会启动服务，帮你监听文件变化
- 生产模式会将代码压缩，如果配置了摇树模式，会真实的删除没有使用的代码

## loader和plugin的区别

- Loader => 单一职责原则（每个loader只完成一种转换）

`Loader`用于转换模块源码，将各种类型的文件转换为webpack能够处理的有效模块，再利用webpack的打包能力对它们进行二次处理。

例如：sass => css less=>css es6=>es5 ts=>js

::: tip loader的链式调用原则
  loader的执行顺序的倒序的，也就是栈的数据结构，由末尾的loader先执行,之后的Loader将会接受之前Loader的处理结果并继续处理，所以loader的书写顺序必须要严格按照loader的执行顺序书写
:::

- Plugin => 应用拓展

writing…………

### loader和plugin的本质区别

writing…………


