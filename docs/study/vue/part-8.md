---
title: vue高级原理
date: 2020/02/10 22:48
categories: 
 - vue
tags: 
 - vue高级原理、虚拟DOM
---

<!-- more -->

## 一、组件化开发  MVVM

核心概念：**数据驱动视图** 

M => **模型**
 
 V => **view** 
 
 VM => **viewModel**


```vue
<!--V-->
<templete>

</templete>

<script >
export default {
// M
data() {

}

}
</script>
```

## 二、Vue的响应式是如何实现的？

### 核心API: Object.defineProperty

<<<@/docs/study/vue/source-code/defineProperty.js


## 三、Object.defineProperty的缺点

- 不满足监听的情况 => 复杂对象，数组
- 为了保证深度监听需要大量的递归循环，计算量非常大
- 新增属性，删除属性监听不到，为此产生了$set,$delete
- 不能监听数组的变化，需要使用以下代码

```js
// 重新定义数组原型
const oldArrayProperty = Array.prototype
// 创建新对象，不影响原型方法
const arrProto = Object.create(oldArrayProperty)
```

## 四、虚拟DOM

::: tip
- vdom是实现vue和React的重要基石
- diff算法是vdom中最核心、最关键的部分
- vdom就是找出需要修改的最小部分
- 虚拟DOM实际上就是一个js对象
:::

### ① 背景

- DOM操作是非常耗费性能的，以前用JQ可以自行控制DOM操作时机，手动调整
- vue和React都是数据驱动视图
- DOM引擎、js引擎相互独立，但是他们是工作在同一个线程之中，js代码调用DOM-API会挂起JS引擎，转换传入的参数数据，激活DOM引擎，DOM重绘完成后再转换可能有的返回值，最后再重新激活JS引擎，这是十分消耗性能的过程，
- 虚拟DOM生成后不会马上进行排版重绘，而是进行diff运算，确定真实DOM中需要修改的部分，减少过多的DOM节点排版与重绘损耗
- 跨端需求，当我们有了虚拟DOM后，我们可以将虚拟DOM编译打包成各种平台的代码，实现跨端开发

### ② 用js模仿DOM
`vue中生成树`
![image text](/vdom.png)

## 五、diff算法

树的时间复杂度是O（n^3)

### ① 我们一直在循环中用的key

::: danger
不要使用循环的index作为key，这样会导致key值不稳定，也就失去了意义
:::

```text
a 0          b 0
b 1  删除a=>  c 1
c 2
```

上述例子中，key值是不稳定的，当key变化时，就会出发DOM的重新渲染












