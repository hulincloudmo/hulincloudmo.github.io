---
title: react小知识
date: 2020-02-13 17:26
categories: 
 - 未整理
tags: 
 - react
---

<!-- more -->

## react中数据变化改变引起页面变化

当props或者State变化时，render函数就会重新执行一次

## react事件中为什么要bind(this)

this在属性方法中默认是undefined，为了不用bind函数，你可以把函数定义为成员方法

## e.target和e.currentTarget区别

target获取的是真实点击元素，currentTarget获取的是事件所绑定的元素


