---
title: 异步加载与keep-alive
date: 2020-02-10 22:31
categories: 
 - vue
tags: 
 - vue性能优化
---

<!-- more -->

## 如何让组件异步加载 <Badge text="性能优化" type="warn"/>

异步加载组件是一种性能优化方案，使用了异步加载，可以让组件在需要的时候才会加载，而不是随着页面的加载而加载，对于路由也是这样的

比如后端返回1000条数据，如果需要一次性渲染到页面上，就可以用异步渲染来做，如果按照常规的直接渲染，由于dom操作耗时，js单线程，所以会阻塞js运行，会发生页面卡顿的情况。这时候我们就可以通过一个异步操作，比如`settimeout`或者`requestAnimationFrame`把dom操作推到异步队列，进行分批渲染，提高页面性能，减少卡顿。

包括在vue里面渲染也是一样，$nextTicket 其实就是个类似于settimeout这样的异步函数，把回调操作推到异步队列，所以即使我不用$netTicket，用个setTimeout也是能实时获取到最新的dom

```vue
<script >
export default {
components: {
   xxx: ()=> import('xxx')
}
}
</script>
```

## keep-alive

组件缓存，如果需要渲染的组件比较大，消耗性能，可以用keep-alive来保存，就算切换的时候使用**v-if**组件也**不会销毁**！
