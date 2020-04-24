---
title: 一些css知识
date: 2020/03/27 16:52
categories: 
 - css
tags: 
 - 日积月累
---
有些不常用，常常看看总是好的！
<!-- more -->

1. 文字阴影：text-shadow： 5px 5px 5px #FF0000;（水平阴影，垂直阴影，模糊距离，阴影颜色）

2. 边框图片：border-image: url(border.png) 30 30 round

3. css创建各种图形

原理：首先先看border上下左右各负责的部分

![border](/css-border.png)

三角形：
````css
div {
width: 0;
height: 0;
border-top: 40px solid transparent;
border-left: 40px solid transparent;
border-right: 40px solid transparent;
border-bottom: 40px solid #ff0000;
}
````

宽高为0时，将其中三边设置为透明，相当于左右两边的矩形切割成两个三角形，再隐藏掉一个三角形，就可以达到视觉上的三角形







