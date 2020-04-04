---
title: vue组件是如何渲染和更新的？
date: 2020-02-17 12:42
categories: 
 - vue
tags: 
 - vue原理
---
vue组件渲染分为3个过程……
<!-- more -->

## 初次渲染过程

- 触发响应式，监听data属性

- 执行render函数，生产vnode，patch


## 更新过程

- 修改data，触发setter => 前提是此前在getter中已被监听，也就是在模版中使用了的

- 重新执行render函数，生成新的vnode（diff算法）

- patch函数生成真实dom

## 异步渲染 => 汇总data的修改，一次性更新视图



