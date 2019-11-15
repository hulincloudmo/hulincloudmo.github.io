# 7yue全栈课
[[toc]]
## 视图对象和模型对象
### 定义
+ 视图对象

是指从页面中触发事件所返回的对象，如点击后返回一个渲染对象
```vue
<div v-for="item in obj" onclick="click(item)"></div>
```
这里的item就是一个视图对象
+ 模型对象

js中定义的一般对象
```javascript
let a = {
    b: function() {
      
    }
}
```
### 区别
  :::: danger
  视图对象是从js引擎中返回的，这个对象往往不会携带对象的方法，只会携带对象的属性！！
  ::::
  下面我们看一个示例，打印同一个对象，一个是传到视图层后再返回到逻辑层，一个是直接打印逻辑层，也就是视图对象与模型对象，我们来对比一下
  
![image text](https://api.hulincloud.cn/vuepress/viewOrObject.jpg)

上图中的96行所打出的就是**视图对象**，而102行打出的则是**模型对象**

图中可以看出，模型对象中多了很多奇奇怪怪的东西，但是就是没有我们想要的在模型中定义的方法，**getCellCode()**
所以，我们如果需要用到模型返回的对象中的方法时，要么提前保存了这个对象，要么在使用时，需要**重新new**这个对象，来获得对象的方法
```javascript
let data = e.detail.cell
            let x = e.detail.x
            let y = e.detail.y
            const judger = this.data.judger
            // 解决模型返回的数据不带方法的问题
            let cell = new Cell(data.spec)
```





