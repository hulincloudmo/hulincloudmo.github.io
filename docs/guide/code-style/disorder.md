--- 
title: 杂乱的小知识
date: 2020-01-14 15:57:53
categories: 
 - 未整理
tags: 
 - 就是些小知识
---
# 记录一些杂乱未整理的小知识

## js

### 一.js的new Date("2019-1-1")结果出来会少一天
```javascript
console.log(new Date("2019-1-2"))
// 2019-01-01T16:00:00.000Z
```

### 二.日期前面补充0
```javascript
`${(new Date().getFullYear()+1).toString().padStart(2,"0")}-${(new Date().getMonth()+1).toString().padStart(2,"0")}`
```

## npm

### EACCES: permission denied 问题解决

在指令后加上`--unsafe-perm=true --allow-root`

## 微信小程序

### 微信小程序的组件样式限制
组件对应 wxss 文件的样式，只对组件wxml内的节点生效。编写组件样式时，需要注意以下几点：

组件和引用组件的页面不能使用**id选择器（#a）、属性选择器（[a]）和标签名选择器（XXX input）**，请改用class选择器。
组件和引用组件的页面中使用后代选择器（.a .b）在一些极端情况下会有非预期的表现，如遇，请避免使用。
子元素选择器（.a>.b）只能用于 view 组件与其子节点之间，用于其他组件可能导致非预期的情况。
继承样式，如 font 、 color ，会从组件外继承到组件内。
除继承样式外， app.wxss 中的样式、组件所在页面的的样式对自定义组件无效（除非更改组件样式隔离选项）。

## java

### springboot
#### bean的名字不能重复，即使在不同文件夹也不行，注入的时候会冲突


