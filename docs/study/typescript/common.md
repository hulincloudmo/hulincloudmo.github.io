---
title: ts基础语法
date: 2020-03-06 2:10 下午
categories: 
 - ts
tags: 
 - ts语法
---
基础中的强化！
<!-- more -->

## 1.类型保护

```typescript
interface Bird {
  fly: boolean,
  sing:()=> {}
}

interface Dog {
  fly: boolean,
  bark:()=> {}
}

function train(animal: Bird | Dog) {
  // 类型断言
  if (animal.fly) {
    (animal as Bird).sing()
  } else {
    (animal as Dog).bark()
  }
   // in语法
   if ('sing' in animal) {
       animal.sing()
     } else {
       animal.bark()
     }
 }


```

## 2.范型 generic

```typescript
function fun<A,B>(first:A,second:B):string {
  return ``
}

fun<number,string>(1,"2")

interface Item {
  name:string
}


class DataM<T extends Item> {
  constructor(private data:T[]) {
  }
  getItem():string {
    return this.data[0].name;
  }
}
```

## 3.namespace => 模块化开发，对外统一暴露接口

使用typescript可以减少对外暴露出的变量，如果namespace中的某个变量需要暴露出，只需要加上export导出即可。

```typescript
namespace Home {
  export class A {
    static say() {
      console.log("a")
    }
  }
}

console.log(Home.A.say())
```
## 4.keyof语法
使用keyof可以实现自定义的类型
```typescript
interface Person {
  name:string,
  age:number,
  gender: string,
  num: number[]
}
class Teacher {
  constructor(private info:Person) {
  }
  getInfo<T extends keyof Person>(key:T):Person[T] {
    return this.info[key]
  }
}
```

## 5.装饰器




