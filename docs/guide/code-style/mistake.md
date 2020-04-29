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

## 小程序

### properties的类型写错导致渲染出错

properties类型写错第一次渲染不会有事，但是一旦组件更新后，不符合的值就会变成null


