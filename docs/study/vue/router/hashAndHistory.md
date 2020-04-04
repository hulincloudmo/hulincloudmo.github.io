---
title: hash模式和history模式
date: 2020-02-17 1:01
categories: 
 - vue
tags: 
 - vue-router
---

<!-- more -->

## hash的特点

- hash变化会触发网页跳转，如浏览器前进、后退
- hash变化不会刷新页面，SPA必须的
- hash永远不会提交到server端特点

## history的特点

- 用url规范的路由，但跳转时不刷新页面

## 怎么选择两种方式

to B hash
to C history

选择相对成本低的


