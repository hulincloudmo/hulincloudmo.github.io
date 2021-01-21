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

## 1. 文字阴影：text-shadow： 5px 5px 5px #FF0000;（水平阴影，垂直阴影，模糊距离，阴影颜色）

## 2. 边框图片：border-image: url(border.png) 30 30 round

## 3. css创建各种图形

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


## 4.制作边框神器-border-image
使用border-image可以方便的给一个容器加上四周边框

```html
<div style="width: 500px;
height: 500px;
border:30px solid transparent;
border-image-source: url('https://blog.hulincloud.cn/8.jpg');
border-image-slice: 10 10 10 10;">
111
</div>
```

<div style="width: 500px;
height: 500px;
border:30px solid transparent;
border-image-source: url('https://blog.hulincloud.cn/8.jpg');
border-image-slice: 10 10 10 10;">
111
</div>

## 5.visible和display:none的区别

visible让元素不可见后还占用原来的空间，
display:none则不占用原有位置，直接消失

## 6.flex总是忘记的知识……
`啊啊啊，这些知识怎么总是忘`

### flex的属性

````
flex: auto;
flex: initial;
flex: none;
flex: 2;
````
flex-grow flex-shrink flex-basic(在元素宽度设置时，flex-basic有更高的优先级)

## 7.单行文本居中，多行文本居左显示

```css
.c {
display: flex;
justify-content: center;
}
```

## 8.各类居中

- 固定宽高

1. `绝对定位实现`

::: tip
  给父容器添加`position: relative`,子组件固定宽高，并
```css
position: absolute;
top: 0;
left: 0;
right: 0;
bottom:0;
margin: auto
```
:::


2. `绝对定位 + 负margin`

::: warning
注意，"绝对定位+负边距"这种方法不适合那种宽百分之多少、高百分之多少这种相对单位，取而代之的是具体的数值。
:::

```css
        position: absolute;
        top: 50%;
        left: 50%;
        width: 300px;
        height: 200px;
        background-color: #fff;
        margin-left: -150px;
        margin-top: -150px;
```

3. `绝对定位加平移`

平移方式解决了动态盒子的问题，只需要相对自身平移50%即可定位
`无脑50%`
```css
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 30px;
        background-color: aqua;
```

## 9. margin设置负值

`left` 和 `top`会造成元素本身向左或向上移动，`bottom`和`right`会让相邻元素向上或向左移动