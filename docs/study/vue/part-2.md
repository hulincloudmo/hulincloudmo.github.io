---
title: v-model
date: 2020/02/10 20:06
categories: 
 - vue
tags: 
 - v-model
---

<!-- more -->

## 深入理解v-model

vue中的v-model实现了input、textarea的动态绑定,例如：
```vue
<input type="text" v-model="message">
<p>{{message}}</p>
```

当我们输入时，就会影响到message的值，实际上，v-model实际上是个语法糖：
```vue
<input type="text" :value="value" @input="value=$event.target.value">
<p>{{message}}</p>
```
这样的代码是等效的

## 自定义v-model

当我们需要绑定子组件的input框时，我们就需要自定义model

```vue
 <!-- 父组件 !-->
<custom-v-model v-model="name"></custom-v-model>
<!-- 子组件 !-->
<input type="text" :value="text" @input="$emit('change',$event.target.value)">
 model: {
    prop: 'text',
    event: 'change'
  },
  props: {
    text: String,
    default() {
      return ""
    }
  }
```
