---
title: vue相关面试
date: 2020-02-09 15:08
categories: 
 - offer
tags: 
 - vue
keys:
  - 'offerMes'
---

<!-- more -->

## vue双向绑定时的原理？什么时候开始监听Watch的？<Badge text="★★★" type="warn"/>

VUE实现双向数据绑定的原理就是利用了 Object.defineProperty() 这个方法重新定义了对象获取属性值(get)和设置属性值(set)的操作来实现的。在mounted之后

## 组件data必须为什么要是个函数

组件实际上在编译后会变成一个类，如果不是函数的话，所有的组件data就会一样了，而函数里返回的变量会受到闭包的影响而保留





