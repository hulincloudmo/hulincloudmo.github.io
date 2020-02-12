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
