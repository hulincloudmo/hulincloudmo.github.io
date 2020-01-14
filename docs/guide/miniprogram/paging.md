--- 
title: 移动前端分页加载？
date: 2019-12-28
categories: 
 - 小程序
tags: 
 - 小知识
---
# 移动前端分页加载的探讨

## 分页的前世今生~

我们都知道，服务器的性能是有限的，对我们前端开发者来说，为了解放服务器的压力，我们也要在程序中分担一部分的性能压力。也为了能让客户端的页面速度更加流畅，我们使用了分页，在pc端，我们使用页数来进行分页，但是在移动端，我们往往没有分页的概念，也因此我们出现了第二代的分页。

## 第二代分页

在移动端，我们的分页场景往往会是触底加载，这时我们使用start和count来进行分页，<font color="red">我们不再关心到底有多少页，我们只关心从多少开始，取多少条！</font>

## 分页需要考虑的问题

要分页，我们就要考虑到分页时的状态:

![image:text](http://hulincloud.cn/images/vuepress/w-2.jpg)

天呐，没想到想起来简单的分页，看了上面的分页状态，居然有这么复杂，我们不可能每次要分页的时候都需要考虑这么多细节，太累了！

所以，我们必须要封装一个分页对象，用它来处理这些状态

## 开始封装分页

#### 期望：在业务中使用分页应该足够的简单，<font color="red">不需要考虑细节</font>，我们每次想要数据，只需要向paging去取

#### 编程思想：函数或类

我们应该使用函数还是类呢？

在分页过程中，我们需要保存分页的状态吗？想想是需要的，我们需要保存每一次分页的start值不是么？
所以我们应该通过类来实现这个分页！

我们先来确定一下paging类所需要的数据

```javascript
constructor(req, start=0, count=10) {
        this.count = count
        this.start = start
        // 请求对象
        this.req = req
        // 请求url，为什么要单独设置一个url？ 后面有答案！
        this.url = req.url
    }
```

数据有了，那么我们就可以拿这些数据去请求服务器啦，但是我们前面说到了，我们的请求应该避免重复，所以，我们这里应该要使用锁机制来保证请求不是重复的，在代码中其实锁很简单，就简单用一个true or false就可以实现，<font color="red">当一个请求进入线程后，我们将锁设置为true，如果这时下一个请求来到，我们就直接返回，不去请求数据库了</font>
```javascript
async getMoreData() {
// 判断锁存在
        if (this._getLocker()) {
            return
        }
        // 真正请求服务器
        const data = await this._actualGetData()
        // 释放锁
        this._releaseLocker()
        return data
    }

_getLocker() {
        if (this.locker) {
            return false
        }
        this.locker = true
    }

_releaseLocker() {
        this.locker = false
    }
```

要请求后端数据，那么我们需要请求的url，可是我们想想，请求url是固定的么？

显然不是，既然是分页，我们就是要不断的改变start值，才能拿到不同数据，没办法，我们只能再写一个函数去处理这个分页url

```javascript
_getCurrentReq() {
        // url的答案在这：每次都取到原始的url，避免重复拼接参数
        let url = this.url
        // 拼接参数
        const params = `start=${this.start}&count=${this.count}`
        // 判断url中是否已经有其他参数了，如果已经有了其他参数，我们就应该直接拼接&符号
        if(url.includes('?')) {
            url += `&${params}`
        } else {
            url += `?${params}`
        }
        this.req.url = url
        return this.req
    }
```

通过这样的处理后，我们就可以拿到后端所返回的数据了，这时候我们只需要再组织一个数据结构，返回给页面就可以了！











