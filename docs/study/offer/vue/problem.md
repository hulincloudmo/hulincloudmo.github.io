---
title: vue相关面试
date: 2020-02-09 15:08
categories: 
 - offer
tags: 
 - vue
keys:
  - 'offerMes'
---

<!-- more -->

## vue双向绑定时的原理？<Badge text="★★★" type="warn"/>

VUE实现双向数据绑定的原理就是利用了 Object.defineProperty() 这个方法重新定义了对象获取属性值(get)和设置属性值(set)的操作来实现的。

## computed和watch

### computed
1. computed的原理

computed会在程序初始化时计算一次值，完成后内部将`dirty`属性设为`false`，同时将计算值缓存下来，而computed会拥有一个自己的watcher，当依赖值发生变化被内部watcher监听到时，会将`dirty`重新置为`true`，这样在下次访问到computed函数时，就会重新计算


### watch

1. 什么时候开始监听Watch的？

在mounted之后

2. watch中的deep深度监听

深度监听会对监听对象进行递归的访问，为他们添加watcher，这样深层次的修改也会触发watch的回调函数，对于复杂对象来说，深度监听是比较消耗性能的，所以深度监听要合理使用

## 组件data必须为什么要是个函数

组件实际上在编译后会变成一个类，如果不是函数的话，所有的组件data就会一样了，而函数里返回的变量会受到闭包的影响而保留

一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。如果data是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。

假设我们有一个这样的组件使用

```vue
<div>
<Component1></Component1>
<Component1></Component1>
</div>
```
从原理出发，他将会编译成什么样的`render`函数呢？
```javascript
function render() {
// _c即是createElement，1是节点类型
  with (this) {
    return _c("div",[_c('Component1'), _c('Component1')],1)
  }
}
```

每一个`Component1`都会被_c调用，这时候如果你的data是一个属性时，他会拿着Component中的data去创建组件。用代码表示可为

```javascript
function _c() {
  const data1 = Component1.data
  const data2 = Component1.data
}
```

那么当你改变其中一个组件的data时，另一个组件的data也会被改变，造成了数据污染

函数形式则就相当于

````javascript
function _c() {
  const data1 = Component1.data()
  const data2 = Component1.data()
}
````

这时候，你每创建一次组件实例就会执行一次data()函数，每个组件都会拥有自己的一份全新的data，就不会互相污染数据了

## Vue的action和mutation有何区别

- action中处理异步，mutation不可以

- mutation中做原子操作

- action可以整合多个mutation

## 响应式原理

- 监听data

- 组件渲染、更新过程

## vue中组件更新顺序

创建顺序 => 先父后子

渲染顺序 => 先子后父

更新顺序 => 先父后子

更新完成顺序 => 先子后父

销毁顺序 => 先父后子

销毁完成顺序 => 先子后父







