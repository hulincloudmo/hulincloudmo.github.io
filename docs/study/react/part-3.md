---
title: react中的组件
date: 2020-02-12 20:41
categories: 
 - react
tags: 
 - react基础
---
在TS规范下的react，使用组件要注意什么？
<!-- more -->

## 使用方法

### 使用import引入组件，组件名要大写

### 子组件要调用父组件的方法

```typescript jsx
{/*传递父组件的方法到子组件，并用bind方法将this强制绑定在父组件*/}
<TodoItem index={index} deleteItem={this.handleItemDelete.bind(this)} content={item}/>
{/*子组件调用*/}
this.props.deleteItem(this.props.index)
```

## pureComponent和Component的区别

::: danger
pureComponent要小心使用，最好只是用在展示组件上，state和props也不会经常变化的场景
:::

pureComponent是浅比较，对于引用类型来说，只有在数据引用不同时，才会触发重新render，如果是值类型，只要值不发生变化，就不会触发render




