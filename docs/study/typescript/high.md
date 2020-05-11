---
title: typescript中的高级用法
date: 2020/04/07 12:19
categories: 
 - typescript
tags: 
 - 高级用法
---

<!-- more -->

## Omit剔除部分类型

```typescript
interface User {
    username: string
    id: number
    token: string
    avatar: string
    role: string
}
type UserWithoutToken = Omit<Omit<User,'id'>, 'token'>
// 没有token与id属性
let a:UserWithoutToken = {
  avatar: "",
  role: "", 
  username: ""
}
```

## 对一个对象属性值类型相同的对象属性约束
如果一个对象的属性值都是相同的，你想要约束对象的key值，可以借助Record的帮助简化代码
```typescript
type Car = 'Audi' | 'BMW' | 'MercedesBenz'
type CarList = Record<Car, {age: number}>

const cars: CarList = {
    Audi: { age: 119 },
    BMW: { age: 113 },
    MercedesBenz: { age: 133 },
}
```

## keyof约束对象属性

```typescript
function getValue<T extends Object,K extends keyof T>(o: T, key: K) {
  return o[key];
}
const obj1 = { name: '张三', age: 18 };
const namea = getValue(obj1, 'name');
```

## 生成重复的类型

```typescript
type name = 'firstName' | 'lastName';
type TName = {
  [key in name]: string;
};
```
