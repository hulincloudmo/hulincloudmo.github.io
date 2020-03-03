---
title: webpack面试
date: 2020/03/02 13:05
categories: 
 - webpack
tags: 
 - 面试
---

<!-- more -->

## webpack的基本配置

### 拆分配置和merge

在开发环境和生产环境中，我们需要使用不同的webpack配置，但是他们两者往往是有许多相同之处的，在我们把相同部分抽离之后，我们就可以使用merge将两个配置文件进行合并

```javascript
const merge = require("webpack-merge")
const commonConfig = require("./webpack.common.js")

const devConfig =  {
    mode: "development",
    devtool: "cheap-module-source-map",
    devServer: {
        contentBase: './dist',
        open:true,
        port: 8080,
        hot: true,
    },
    optimization: {
        usedExports: true
    },
}

module.exports = merge(commonConfig,devConfig)

```

### 什么是chunk？

webpack打包生成的文件就叫做chunk



