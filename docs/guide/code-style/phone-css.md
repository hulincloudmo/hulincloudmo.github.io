---
title: 移动端的适配问题总结
date: 2020/04/04 16:13
categories: 
 - 移动端
tags: 
 - css
---

<!-- more -->

## ios

### 1. 不支持webp格式的图片

### 2. 边框在Retina屏幕下可能会发生变化，可以使用viewport或者伪类transform

### 3. 不支持主动触发input的聚焦

### 4.input框在h5移动端端配置

1. 去除聚焦时下划线

`outline: none`

2. ios端不可聚焦问题

`user-select: auto`

3. 去除默认聚焦时的x

`input[type=search]::-webkit-search-cancel-button{
           -webkit-appearance: none;
         }`



## android

1. 低版本不支持box-shadow



