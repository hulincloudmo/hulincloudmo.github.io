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
