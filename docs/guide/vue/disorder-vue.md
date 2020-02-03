--- 
title: 关于vue的一些小知识
date: 2020-1-18 16:07:51
categories: 
 - vue
tags: 
 - 小知识
---
# 关于vue的一些小知识

## 一、让watch在第一次变化就监听

watch方法默认是在初始化时不会监听，如果你需要在目标初始化后就执行某一个方法，那么你可以这么做：

```javascript
// 该回调将会在侦听开始之后被立即调用
export default {
watch: {
    value:{
      handler:function(o,n){
// 方法内容      
},
      immediate: true
    } 
  }}
```

<p style="color: red;font-weight: bold">在监听器中不要使用箭头函数哦~不应该使用箭头函数来定义 watcher 函数 (例如 searchQuery: newValue => this.updateAutocomplete(newValue))。理由是箭头函数绑定了父级作用域的上下文，所以 this 将不会按照期望指向 Vue 实例，this.updateAutocomplete 将是 undefined。</p>
