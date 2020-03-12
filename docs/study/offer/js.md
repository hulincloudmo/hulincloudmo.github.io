---
title: JS相关面试
date: 2020-02-01 23:57:51
categories: 
 - offer
tags: 
 - 面试
---

## 闭包相关

闭包：自由变量的查找，是在**函数定义的地方**向上级查找，不是在执行的地方

```javascript
function fn() {
  const a = 100
  return function() {
    console.log(a)
  }
}

const a = 200

let b = fn()  // 输出100

```

### 闭包的应用-函数的柯里化（curring）

柯里化？这么高端的名词到底是什么意思？其实只是curring的中文读音而已，实际上也就是通过闭包简化函数的参数使用，下面看一个简单的例子来解释科里化的运用

```javascript
function curring() {
    let _args = []
    return (function a() {
        if (arguments.length === 0) {
            let num = 0
            _args.forEach(v=>{
                num+=v
            })
            return num
        }
        _args = _args.concat(Array.from(arguments))
        return a
    })
}

const nums = curring()

nums(2,3)
nums(1)
console.log(nums()) // 6
```

耐心看完上面的函数，可以发现：
1. 当我们真正需要求值时，再传入一个空参数即可，避免了不必要的求值
2. 参数_args得到了复用

当然科里化还有一个用处，**节约函数的参数**

我们再看一个例子

```javascript
function save(reg) {
    return function (value) {
        return reg.test(value)
    }
}

let reg = save(/www/)

console.log(reg("wwww")) // true
console.log(reg('w2')) // false
```
通过柯里化，我们只用传递一次验证规则，就可以多次对目标字符串进行多次验证，节约了一次函数的使用。

### 总结

闭包在使用中可以简化我们的代码，但是我们**不能滥用**，因为闭包的变量会一直保存，可能会造成大量的内存占用，而且也不会被JS的垃圾回收机制所回收，所以在我们确定一个闭包函数不会使用到的时候，一定要记得手动清除闭包




## this的指向问题

### 一、什么时候确定this的指向
this的指向在没有执行到的时候是未知的,执行的时候才会确定this指向

### 二、this指向的修炼！

1. 隐式丢失

先上代码，先上代码

```javascript
function foo () {
  console.log(this.a)
}
function doFoo (fn) {
  console.log(this)
  fn()
}
var obj = { a: 1, foo }
var a = 2
var obj2 = { a: 3, doFoo }

obj2.doFoo(obj.foo)
```
如果你把一个函数当成参数传递到另一个函数的时候，也会发生隐式丢失的问题，且与包裹着它的函数的this指向无关。在非严格模式下，会把该函数的this绑定到window上，严格模式下绑定到undefined。

2. setTimeout中的this指向

```javascript
var obj1 = {
  a: 1
}
var obj2 = {
  a: 2,
  foo1: function () {
    console.log(this.a)
  },
  foo2: function () {
    setTimeout(function () {
      console.log(this)
      console.log(this.a)
    }, 0)
  }
}
var a = 3

obj2.foo1()
obj2.foo2()
```

**setTimeout的this指向会到window,如果new一个对象再bind，new的函数优先级会更高，使得bind失效**

```javascript
window.setTimeout(function () {
	console.log(this)
  console.log(this.a)
}, 0)
```

所以结果是

```text
2
Window{...}
3
```



### 二、箭头函数中的this

- 箭头函数的this永远取的是他的上级作用域的值，箭头函数中本身没有this
- 字面量对象不是作用域，作用域只有全局作用域和函数作用域
注意，**箭头函数的this指向不受bind，apply，call的影响，你即使调用了也是没有作用的！！！！**

```javascript
var name = 'window'
var obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var obj2 = {
  name: 'obj2',
  foo: function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}
var obj3 = {
  name: 'obj3',
  foo: () => {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var obj4 = {
  name: 'obj4',
  foo: () => {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}

obj1.foo()() // 'obj1' 'window'
obj2.foo()() // 'obj2' 'obj2'
obj3.foo()() // 'window' 'window'
obj4.foo()() // 'window' 'window'

```

```javascript
var name = 'window'
var obj1 = {
  name: 'obj1',
  foo1: function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  },
  foo2: () => {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}
var obj2 = {
  name: 'obj2'
}
obj1.foo1.call(obj2)() // 'obj2' 'obj2'
obj1.foo1().call(obj2) // 'obj1' 'obj1'
obj1.foo2.call(obj2)() // 'window' 'window'
obj1.foo2().call(obj2) // 'window' 'obj2'

```

## ajax

1. XMLHttpRequest

2. 状态码

3. 跨域：同源策略

```javascript
// 示例
let xhr = new XMLHttpRequest()
xhr.open("GET","/xxx",false)
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
     if(xhr.status === 200) {
      console.log(xhr.response)
     }
  }
}
```

### 什么是同源策略
浏览器要求当前网页和Server必须同源（协议，域名，端口，三者必须一致），但加载图片，css，js是可以无视同源策略的

利用无视同源策略特性： 使用图片实现打点

### JSONP是什么？
 使用script标签来传递信息，将参数写在请求地址上，写好jsonp返回函数的callback函数名


## 何时需要使用beforeDestory

- 解绑自定义事件 `event.$off` => **不解绑容易造成内存泄漏**

- 清除定时器 => **不解绑容易造成内存泄漏**

- 解绑自定义DOM事件，如window，scroll => **不解绑容易造成内存泄漏**

## 变量提升

::: tip
- avaScript 解释器中存在一种变量声明被提升的机制，也就是说**函数声明会被提升到作用域的最前面**，即使写代码的时候是写在最后面，也还是会被提升至最前面。
- 而用函数表达式创建的函数是在运行时进行赋值，且要等到表达式赋值完成后才能调用
:::

```javascript
var getName //变量被提升，此时为undefined

getName() //oaoafly 函数被提升 这里受函数声明的影响，虽然函数声明在最后可以被提升到最前面了
var getName = function() {
    console.log('wscat')
} //函数表达式此时才开始覆盖函数声明的定义
getName() //wscat
function getName() {
    console.log('oaoafly')
}
getName() //wscat 这里就执行了函数表达式的值
```

## new一个函数和直接定义函数有什么区别？

new会使执行函数的上下文指向这个函数的本身，而直接执行定义的函数的this将会指向window

## 判断类型的终极解决方案

### 1. 解决方案一：`typeOf`

typeOf 的判断能力是比较有限的，**typeof只能检测使用字面量命名的基本数据类型（除了 null）**

```javascript
var  c = true;
    console.log(typeof(c));   // boolean
var  A = new Number(123);
    console.log(typeof(A));   // object
```

### 2.解决方案二：`intanceof`

instanceof原理：只要左边的对象的对象能够通过原型链`__proto__`是指向右边的构造函数就可以
```javascript
function instance_of(L, R) {    //L 表示左表达式，R 表示右表达式
 var O = R.prototype;           // 取 R 的显示原型
 L = L.__proto__;               // 取 L 的隐式原型
 while (true) { 
   if (L === null) 
     return false; 
   if (O === L)                 // 这里重点：当 O 严格等于 L 时，返回 true 
     return true; 
   L = L.__proto__; 
 } 
}
```
instanceof是通过判断变量的原型链是否相同来判断变量是否是同一类型，但是instanceof也有缺陷，就是她不能够去判断基本数据类型，因为基本数据类型的数组和对象的原型是一样的

```javascript
console.log([] instanceof Object) // true
```

### 3. 终极解决方案：`Object.prototype.toString.call()`

```javascript
Object.prototype.toString.call({})              // '[object Object]'
Object.prototype.toString.call([])              // '[object Array]'
Object.prototype.toString.call(() => {})        // '[object Function]'
Object.prototype.toString.call('test')        // '[object String]'
Object.prototype.toString.call(1)               // '[object Number]'
Object.prototype.toString.call(true)            // '[object Boolean]'
Object.prototype.toString.call(Symbol())        // '[object Symbol]'
Object.prototype.toString.call(null)            // '[object Null]'
Object.prototype.toString.call(undefined)       // '[object Undefined]'

Object.prototype.toString.call(new Date())      // '[object Date]'
Object.prototype.toString.call(Math)            // '[object Math]'
Object.prototype.toString.call(new Set())       // '[object Set]'
Object.prototype.toString.call(new WeakSet())   // '[object WeakSet]'
Object.prototype.toString.call(new Map())       // '[object Map]'
Object.prototype.toString.call(new WeakMap())   // '[object WeakMap]'

```

### 总结

如果你能够知道一个变量一定会是**字面量定义的**基本类型，那么你可以使用typeof,如果是对象或者类，可以使用instanceof，为了保险，也可以使用终极方案











