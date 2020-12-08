---
title: JS的小知识
date: 2020/02/25 13:01
categories: 
 - js
tags: 
 - 日积月累
---

### 值类型与引用类型

应用类型是指页面所返回的对象，页面所返回的对象，往往只有对象的属性，**而没有属性的方法**

## 实现类的私有属性

### 1.使用Symbol
````javascript
const password = Symbol()
class user {
   constructor() {
   this[password] = 1
}
}
console.log(new user().password) // 不能获取
````
使用了Symbol看似完美的使属性变成了私有的，但是如果我们打印一下new出来的对象

`user:{ [Symbol()]: '1' }`

可以看到属性的值还是被获取到了，那么有没有办法将属性值给藏起来呢？这里我们可以使用进阶的办法

### 2.使用WeakMap

WeakMap是map的一个`弱化`实现，它没有map的key方法，导致他只能在已知key值的情况下才能获取对应的value值，那么我们就可以利用它的这个特性来藏起value值,这里我们**把this值作为map的key**

```javascript
class Weak {
    constructor() {
        this.secret = new WeakMap().set(this,'weak')
        this.token = new WeakMap().set(this,'token')
    }
    getWeak() {
        return this.secret.get(this)
    }
    getToken() {
      return this.token.get(this)    
}
}
```

此时，我们的weak属性真正变成了一个私有属性，**只有在Weak类中才能获取到secret的值**,在外部要获取值必须通过get方法才能获取

### 3.使用Typescript

Typescript内置的private属性也可以实现私有的成员变量

## 数组拷贝

1. 浅拷贝

- arr.slice()

2. 展开 

- arr.flat()

## promise

1. 异步串行

- Promise.allSettled()



