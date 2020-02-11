---
title: slot
date: 2020-02-10 21:50
categories: 
 - vue
tags: 
 - vue-slot
---

<!-- more -->

## 具名插槽和作用域插槽的用处

作用域插槽可以让父组件拿到子组件中的数据，具名插槽就是将内容插入子组件中的某一个地方

```vue
<!--作用域插槽示例-->

<!--子组件-->
<div :slotData="a">{{a}}</div>

data() {
return {
  a: 4 
}
}
<!--父组件-->
<div>
<tamplete v-slot="data">
{{data.a}} <!--输出4-->
</tamplete>
</div>

data() {
return {
  a: 5 
}
}
```

