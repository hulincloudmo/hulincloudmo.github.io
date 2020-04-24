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

一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。如果data是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。
## Vue的action和mutation有何区别

- action中处理异步，mutation不可以

- mutation中做原子操作

- action可以整合多个mutation

## 响应式原理

- 监听data

- 组件渲染、更新过程

## vue中组件更新顺序

创建顺序 => 先父后子

渲染顺序 => 先子后父

更新顺序 => 先父后子

更新完成顺序 => 先子后父

销毁顺序 => 先父后子

销毁完成顺序 => 先子后父





