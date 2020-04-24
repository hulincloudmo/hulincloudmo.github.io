---
title: tree-shaking
date: 2020-02-24 10:28
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
// treeShaking会把没有导出的东西的模块默认排除，当有不能排除的文件时，你需要配置sideEffects
// package.json 排除掉不需要摇树优化的文件
{
  "sideEffects": ["*.css"]
}
```
## tree-shaking并不一定能够真的实现

[tree shaking](https://zhuanlan.zhihu.com/p/32831172)
