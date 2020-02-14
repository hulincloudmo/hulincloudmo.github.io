---
title: react中的虚拟DOM
date: 2020-02-13 17:43
categories: 
 - react
tags: 
 - 虚拟DOM
---

<!-- more -->

## react中的虚拟DOM

1. State 数据
2. JSX 数据
3. 数据和模板结合，生成真实DOM
4. 数据 + 模板生成虚拟DOM => 虚拟DOM就是一个JS对象，用它来描述虚拟DOM **(消耗了性能，但是比生成真实DOM小)**
例如，
```html
<div><span>hello world</span><div>
```
`生成的虚拟DOM就是:`
```javascript
`['div',{id:"xxx"},['span',{class:"xxx"},'hello world']]`
```
5. state发生改变

6.数据 + 模板 `生成新的虚拟DOM` => 
 ```javascript
`['div',{id:"xxx"},['span',{class:"xxx"},'change']]`
```
 **(节约了性能)**
 
7. 比较虚拟DOM之间的差异 **(节约了性能，js对象比较比DOM比较性能消耗小)**
8. 直接操作DOM，生成新的真实DOM

## JSX转换成虚拟DOM对象

::: tip
原理： 调用`React.createElement`方法
`JSX` => `createElement对象` => `vdom` => `真实DOM`
:::

## 虚拟DOM的有点

- 提高了性能
- 可以开发原生应用 `react native`

## react虚拟DOM的diff算法

- 多次setState只会进行一次比对
- 一次只进行同层比对，如果第一层不一致，就会重新生成所有子元 素
