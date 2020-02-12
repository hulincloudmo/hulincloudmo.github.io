---
title: react的基本操作
date: 2020-02-12 20:13
categories: 
 - react
tags: 
 - react基础
---

<!-- more -->

## 一个todolist示例

```typescript jsx
/**
 * @author 陌上青夏
 * @创建时间 2020/2/12 5:19 下午
 */
import React, {Fragment} from 'react'
class todoList extends React.Component<any,any> {
    private handleInputChange: any = (e:any) => {
        // react的数据存在State中，要修改就要使用setState方法
        this.setState({inputValue:e.target.value})
    }
    private handleClick: any = (e: any) => {
        let value = this.state.inputValue
        this.setState({list:[...this.state.list,value]})
    }
    private handleItemDelete: any = (e: any) => {
        // immutable
        // state 不允许改变，否则性能会受到影响
        let index = e.target.getAttribute('data-index')
        // bad code
        // this.state.list.splice(index,1)
        // useful code
        let CopyList = this.state.list
        CopyList.splice(index,1)
        this.setState({list:CopyList})
    }
    constructor(props:object) {
        super(props);
        this.state = {
            inputValue: "hello",
            list: ['陌上青夏','hulincloud']
        }
    }
    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
// jsx中的元素
        return <Fragment>
            <div>
                <input
                    value={this.state.inputValue}
                    type="text"
                    onChange={this.handleInputChange}
                />
                <button
                    onClick={this.handleClick}
            >添加</button>
                <ul>
                    {this.state.list.map((item:any,index:number):any => {
                        return <li key={index} data-index={index} onClick={this.handleItemDelete}>{item}</li>
                    })
                    }
                </ul>
            </div>
        </Fragment>
    }
}




export default todoList
```
