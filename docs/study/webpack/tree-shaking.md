---
title: tree-shaking
date: 2020-02-24 10:28 下午
categories: 
 - webpack
tags: 
 - webpack基础
---
摇树机制 => 帮你干掉没有用到的代码
<!-- more -->

```javascript
// webpack.config.js
{
    optimization: {
    usedExports: true
}
}
// package.json 排除掉不需要摇树优化的文件
{
  "sideEffects": ["*.css"]
}
```

