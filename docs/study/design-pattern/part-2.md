---
title: 设计模式简单学
date: 2020-02-04 2:39
categories: 
 - 学习
tags: 
 - 设计模式
---

## 单例模式
只有一个实例，并提供全局访问。

::: tip 
单纯的JS是没办法实现完全单例模式的，这里我们使用Typescript来实现语法级提示
:::

<<<@/docs/study/design-pattern/single.ts

## 适配器模式（adapter）

::: tip
就像电脑充电时，我们不能直接使用220V给电脑充电，我们要使用**适配器**进行电压转换。适配器模式就是去调用原有的接口，使他通过一定的转化，能够实现新的需求
:::

::: danger
使用适配器模式是一种亡羊补牢的操作，一定要谨慎使用
:::

```javascript
function old () {
  return "这是旧需求"
}
function news (str) {
  let old = old()
return `新需求${str}+${old}`
}
```

## 装饰器模式

- 为对象添加新功能，而不改变其原有的结构和功能

下面我们来看一个使用typescript仿制springboot控制器的例子

```typescript
import "reflect-metadata"
function Controller(target:Function) {
  let getMethods = []
  let postMethods = []
// for(let key in Reflect.ownKeys(target.prototype))
  for(let key in target.prototype) {
    let method = Reflect.getMetadata("Method",target.prototype,key)
    let requestPath:string = Reflect.getMetadata("Path",target.prototype,key)
    switch (method) {
      case "GET":
        getMethods.push(requestPath)
        break
      case "POST":
        postMethods.push(requestPath)
    }
  }
}


function GetMapping(path:string) {
  return function (target: any,key:any) {
    Reflect.defineMetadata("Path",path,target,key)
    Reflect.defineMetadata("Method","GET",target,key)
  }
}

function postMapping( s: string) {
  return function (target: any,key:any) {
    Reflect.defineMetadata("Path",s,target,key)
    Reflect.defineMetadata("Method","POST",target,key)
  }
}

function customGet(target:any,key:string,descriptor:PropertyDescriptor) {
    descriptor.get = ()=> {
      console.log("c")
    }
}

@Controller
class A {

  @customGet
  get _a() {
    return "a"
  }

  @GetMapping("/custom")
  custom(path:string) {

  }

  @postMapping("/postMethod")
  postMethod() {

  }

}

new A().custom("str")
```

通过对类打上了controller注解，对方法打上getMapping、PostMapping,类中定义的路由信息将会自动提取，不需要我们再人工的编写路由函数

::: warning

上述代码需要在编译成ES5代码下才能运行，如果你的TS编译为ES6代码，你需要使用`Reflect.ownKeys(target.prototype)`才能获取到类下的所有方法，这里也不能使用`Object.keys()`


:::






