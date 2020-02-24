---
title: setState
date: 2020/02/24 15:03
categories: 
 - react
tags: 
 - react基础
---
setState是react的核心中的核心，重点中的重点，一定要掌握
<!-- more -->

::: warning
- 不可变值
- 可能是异步更新
- 可能会被合并
- 函数组件默认没有state
:::

- 不可变值

一定不能直接操作State中的值，必须要用临时变量来修改

- 可能是异步更新

1.如果在**异步函数**中调用setState，那么setState就会是**同步**的，否则就是**异步**的
2.如果是自己定义的DOM事件中调用，那么setState也是**同步**的



```javascript
let num = 1
this.setState({
count: num++
},()=> {
console.log(this.state.count) //获取最新state中的值
})
console.log(this.state.count) // 这里拿不到最新的state值
```

- State异步更新时，可能会被合并

1. 在setState中传入对象，最终count只会加一次

```javascript
this.setState({
  count: num++
})
this.setState({
  count: num++
})
this.setState({
  count: num++
})
```

2. 在setState中传入函数，最终count+3

```javascript
this.setState((preState,props)=> {
  return {
  count: preState.count+1  
}
})
this.setState((preState,props)=> {
  return {
  count: preState.count+1
}
})
this.setState((preState,props)=> {
  return {
  count: preState.count+1  
}
})
```

