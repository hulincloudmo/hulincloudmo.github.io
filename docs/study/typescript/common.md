---
title: ts基础语法
date: 2020-03-06 2:10
categories: 
 - ts
tags: 
 - ts语法
---
基础中的强化！
<!-- more -->

1. 类型保护

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

2. 范型 generic

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

3. namespace => 模块化开发，对外统一暴露接口

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
4. keyof语法
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

5. 使用？.链式操作

链式操作中如果遇到了undefined或者null时，我们希望程序能够立刻暂停，这时可以使用
`?.`操作

例如：`let x = foo?.bar.baz()`

当foo已经定义时，程序将正常执行，如果遇到了null或者undefined时，语句只会返回一个undefined

```typescript
// Before
if (foo && foo.bar && foo.bar.baz) {
    // ...
}

// After-ish
if (foo?.bar?.baz) {
    // ...
}
```

改写你的代码`if(xxx !== null) => xxx?.`简化你的判空操作

6. ?? 运算符

基础用法：

`let a = null ?? 1 // a=1`

??号的最大特点就是可以避免`falsy`值的干扰`(0, NaN and "")`

`a = 0 ?? 1` 结果是`a=0`





