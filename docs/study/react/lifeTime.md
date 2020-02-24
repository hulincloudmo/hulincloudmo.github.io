---
title: react的生命周期
date: 2020-02-13 19:35
categories: 
 - react
tags: 
 - react基础
---

<!-- more -->

## 介绍

| 生命周期函数        | 执行节点           | 对比vue  |
| ------------- |:-------------:| -----:|
| render      | 数据发生变化时和componentWillMount完成后，父组件的执行会带动子组件执行 | beforeUpdate |
| componentWillMount      | 在组件即将被挂载到页面时刻自动执行      | beforeMount |
| componentDidMount | 组件挂载完成，在这里进行异步网页请求      |  Mounted   |
| componentWillReceiveProps| 满足两个条件：1.一个组件要从父组件接收参数 2.**这个组件之前存在于父组件之中**|  无 |
| shouldComponentUpdate| 组件数据变化时是否需要更新，返回boolean，常用于提高性能 | 无|
| componentDidUpdate | 组件数据更新完成| updated |
| componentWillUnmount| 组件将销毁时| beforeDestroy | 
| componentDidUnmount | 组件已销毁 | destroyed |

## 使用场景

- 进行ajax请求 => componentDIdMount

- 自定义事件销毁 => componentDidUnmount
