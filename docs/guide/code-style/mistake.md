---
title: 我犯过的错误
date: 2020-03-07 12:36
categories: 
 - 人生
tags: 
 - 日积月累
keys:
 - mistake
---
这里记录了我开发时因为自己不小心所犯过的错误……吾日三省吾身
<!-- more -->

## js

1. 数组拼接后要赋值！！！

`_arr = _arr.concat(anotherArr)`

2. 浮点数计算的时候记得使用js库，js自带运算浮点数是不精确的！

`totalPrice = accAdd(totalPrice,this.getGoodPrice(good))`

## 小程序

### properties的类型写错导致渲染出错

properties类型写错第一次渲染不会有事，但是一旦组件更新后，不符合的值就会变成null

## h5

1. 跳转参数不能写在#/之后




