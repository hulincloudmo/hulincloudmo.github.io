---
title: js的垃圾回收
date: 2020-02-12 16:37
categories: 
 - js
tags: 
 - js小知识
---
## js是如何判断一个变量是没有必要的？
垃圾回收，也就是将没有必要的变量清理出内存中，在js中，会进行下面两种方式判断一个变量是不需要的
* 如果变量是全局变量，那么变量不会被销毁
* 如果是在函数中定义的变量，在函数结束后不管是全局变量（var）还是局部变量（let）都会进行销毁

## 我就是想保存函数中的变量怎么办？
在javascript中，由于没有类的概念，当我们想保证一个变量，他只能通过自己定义的方法去修改他的属性值时就遇到了困难，其实这时候，我们就可以使用闭包，让js引擎不再清除我们的变量
* 规则：如果一个函数被外部变量所引用时，js将不会清除函数中的变量
```javascript
function a(){
    var b = 0;
    return function(){
        b ++;
        console.log(b);
    }
}

var d = a();
d();//1
d();//2
```
这里的b变量虽然是函数变量，但是她被d所间接引用，所以就构成了一个闭包，那么只要d变量没有销毁，b变量就会保存

