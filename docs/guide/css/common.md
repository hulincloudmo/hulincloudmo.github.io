---
title: css的小零碎
date: 2020-03-01 1:02
categories: 
 - css
tags: 
 - 小知识
---

<!-- more -->

## 1.制作边框神器-border-image
使用border-image可以方便的给一个容器加上四周边框

```html
<div style="width: 500px;
height: 500px;
border:30px solid transparent;
border-image-source: url('https://blog.hulincloud.cn/8.jpg');
border-image-slice: 10 10 10 10;">
111
</div>
```

