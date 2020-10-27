---
title: 装饰器模式
date: 2020/10/12 10:21
categories: 
 - 学习
tags: 
 - 设计模式
---

<!-- more -->

1. 通过TS实现装饰器

- 类声明装饰器 classDecorator

```ts
// 类装饰器类型声明
interface classDecorator<TFunction extends Function> {
  target: TFunction
}
```

`类装饰器可以修改类的定义，返回一个新的类`

```ts

@changeClassDecorator()
class Decorator {
  constructor () {
    console.log(111)
  }
}

function changeClassDecorator () {
  return function (target) {
    return class newClass {
      constructor () {
        console.log(222)
      }
    }
  }
}

new Decorator() // 222
```

你也可以通过注解给类的方法进行拓展，但是你不能直接修改target

```ts
@changeClassDecorator()
class Decorator {
  constructor () {
    console.log(111)
  }

  test () {
    console.log('test')
  }
}

function changeClassDecorator () {
  return function (target) {
    target.prototype.say = () => {
      console.log('hello')
    }
  }
}

new Decorator().say() // hello
```

- 方法装饰器

`方法装饰器只能应用于class的方法上`


