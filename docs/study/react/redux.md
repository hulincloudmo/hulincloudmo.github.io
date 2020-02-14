---
title: redux入门
date: 2020-02-13 22:51
categories: 
 - react
tags: 
 - redux
---
<p>
<img src="/redux.jpg" class="medium-zoom-image" style="width: 300px;height: 200px;" alt="Image text">
</p>
<!-- more -->

## 有图有真相！

上图就是一个redux的执行流程，为了方便理解，我们先把身份进行转化，假定如下

- Store 图书馆管理员

- Reducers 图书馆图书手册

- Action 你向管理员索要某一本书的行为

当我们需要redux中的”书“时，我们使用`store.getState()`方法就可以拿到图书馆中的“书”，在书中你发现一个字错了，想要更新图书手册中的资料，于是，你就书写了修改内容`（Action）`,写好后，你需要更新图书手册，于是你提交了一个更新请求`（dispatch)`,在其中你写了需要修改的地方`（type）`和修改建议`（value`），图书馆管理手册收到请求后，开始查阅更新流程，查找对应书`（type）`的更新流程，这样就更新了一本书，但是图书馆管理员不会主动通知你图书改好了，你需要自己去主动**订阅**这本书才能收到书的更新`store.subscribe(fun)`,同时你需要处理收到新的书的内容，所以你输入了一个处理方法去应对新的书`(fun)`。

## show code来看看

说了那么多，上代码

```jsx harmony
/**
 * @author 陌上青夏
 * @创建时间 2020/2/12 5:19 下午
 */
import React,{Component} from 'react'
import './antd.css'
import Button from "antd/es/button"
import {Input,List, Avatar} from "antd"
import store from "../store/index"
const data: any[] | undefined = []

class Antd extends Component<any, any> {
  private readonly handleStoreChange: any = function() {
    // @ts-ignore
    this.setState(store.getState())
  }
  private readonly change: any = function (e:any) {
    // @ts-ignore
    // 订阅
    store.subscribe(this.handleStoreChange)
    const action = {
      type: 'change',
      value: 'react'
    }
    store.dispatch(action)
    // @ts-ignore
    // e.target.value = this.state.value
    console.log(e.target)
  }

  constructor(props:any) {
    super(props);
    this.change = this.change.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
  }



  render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
    return (
      <div className='App'>
        <Input placeholder='demo' style={{width:'300px'}}/>
        <Button type="primary" onClick={this.change}>demo</Button>
      </div>
    )
  }
}

export default Antd
```

Store中的code

```js
export default (state: any = defaultState, action: any)=> {
  // 图书更新方法
  if (action.type === "change") {
    // 不能直接修改State！
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    console.log(newState)
    return newState
  }
} 

```

## 使用react-redux

### connect方法

connect方法可以将State里的数据变成组件中的props

```jsx harmony
import React from 'react';
import './App.css';
import {connect} from "react-redux"

class App extends React.Component {
  render() {
    return (
        <div className="App">
          <input type="text" onChange={this.props.changeInputValue}/>
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inoutValue: state.inputValue
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = {
        type: 'change',
        value: e.target.value
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);

// export default App


```


### provider

provider可以用来包裹组件

```jsx harmony
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from "./App"
import Header from "./common/header/header"
// import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux"
import store from "./store"

const App = (
    <Provider store={store}>
        <Header/>
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
```




