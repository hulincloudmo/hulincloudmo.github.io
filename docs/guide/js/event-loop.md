---
title: js中的事件循环
date: 2020/03/02 22:35
categories: 
 - js
tags: 
 - js小知识
---

<!-- more -->

## 宏任务与微任务

宏任务与微任务的概念非常重要，需要我们详知，首先我们看看那些属于宏任务，那些属于微任务

宏任务：

- script

- setTimeout

- new promise

- setInterval

- I/O

微任务

- process.nextTick

- promise的then

- async、await

**js的执行顺序是：执行宏任务，如果宏任务产生了微任务，将会优先执行，当宏任务全部执行完毕后，执行微任务**

### setTimeout(fn,0)的意义是什么？

明明已经setTimeout却又给一个0是什么意思呢？其实，就是指定了这个函数将会在**主线程最早可得的空闲时间执行**,这个空闲需要我们理解
