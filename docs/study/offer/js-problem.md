---
title: js面试题目实战
date: 2020-02-05 23:20
categories: 
 - 题目
tags: 
 - 面试题
---

## 题目实战

::: tip 
**一、** 打车时，可以打专车或快车。任何车都有**车牌号**和**名称**，不同的车价格不同，快车每公里1元，专车每公里2元。行程开始时，显示车辆信息，行程结束时，显示打车金额，**假定一位用户行程为5公里，请画出UML类图并用ES6语法写出该示例**
:::
<<< @/docs/study/offer/code/code-1.js

::: tip
**二、** 某停车场，分3层，每层100车位，每个车位都能监控到车辆的驶入和离开，车辆进入前，显示每层的空余车位数量，车辆进入时，摄像头可识别车牌号和时间，车辆出来时，出口显示器显示车牌号和停车时间
:::

<<<@/docs/study/offer/code/code-2.ts

::: tip
下列代码输出的对象原型链分别是什么？
:::

```js
let obj = {
    fun: function () {
        console.log(this)
    }
}

obj.fun()

var fun = obj.fun
fun()

```

答：第一个是在对象中，而第二个是在window中，**函数在哪里执行，this就指向哪里**

