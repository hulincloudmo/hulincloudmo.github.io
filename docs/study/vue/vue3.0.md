---
title: vue3.0-前瞻
date: 2020/06/07 22:53
categories: 
 - vue
tags: 
 - vue3.0
---
vue3.0终于beta啦，香香的hooks编程终于到vue啦，让我们看看有啥新特性吧！
<!-- more -->

## 全新的响应式

在vue3.0中`data中声明的数据将不会再具有响应式`，要声明响应式数据，需要在`setup()`函数中使用`ref`或`reactive`来声明，这两个函数本身响应式没有区别，只是`reactive`只能用来声明一个响应式对象，而ref没有限制。

## 全新的异步组件使用

我们知道，异步组件是由三种状态组成（loader，loading，error），在vue2.x中，我们需要自己书写异步组件的切换工厂函数，而在3.0中，我们只需要使用内置API`defineAsyncComponent`即可动态的切换组件

````vue
export default {
const asyncComponent = defineAsyncComponent({
  loader: () => new Promise( res => { 
       // 完成逻辑
       res(import("./xxx.vue"))
 } ),
  loadingComponent: import("./loading.vue")
  errorComponent: import("./error.vue")
})
  setup() {

}
 }
````

## 新的路由组件hooks

## 新的生命周期函数

在vue3.0中废弃了created和beforeCreated，转变为setup函数，原有的生命周期函数全部加上了on前缀
