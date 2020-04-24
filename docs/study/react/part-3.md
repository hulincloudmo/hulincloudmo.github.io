---
title: react中的组件-1
date: 2020-02-12 20:41
categories: 
 - react
tags: 
 - react基础
---
在TS规范下的react，使用组件要注意什么？
<!-- more -->

## 使用方法

react官方推荐我们使用函数组件来编写react应用。

```typescript jsx
const App:React.FC = () => {

}
```

react的组件一定要大写开头，不然会报错！！！
react的组件一定要大写开头，不然会报错！！！
react的组件一定要大写开头，不然会报错！！！

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

## 使用Context实现跨组件层级传值

```typescript jsx
import React, {Component, createContext, useState, useContext} from "react"
import {Button} from "antd"

const CountContext = createContext(0)

class Foo extends Component {
  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <CountContext.Consumer>
        {
          count => <h1>{count}</h1>
        }
      </CountContext.Consumer>
    )
  }
}

class Bar extends Component {
  static contextType = CountContext

  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    let count = this.context
    return (
      <h1>{count}</h1>
    )
  }
}

function Counter() {
  const count = useContext(CountContext)
  return (
    <h1>{count}</h1>
  )
}

export default function App(props: any) {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Button type="primary" onClick={() => setCount(count + 1)}>click</Button>
      <CountContext.Provider value={count}>
        <Foo/>
        <Bar/>
        <Counter/>
      </CountContext.Provider>
    </div>
  )
}
```







