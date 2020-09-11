---
title: webpack中的代码分割
date: 2020/02/29 20:45
categories: 
 - webpack
tags: 
 - webpack基础
---
code-splitting
<!-- more -->

## 当你使用比较大的库时

比如你使用lodash时，如果你没有配置lodash的代码分割，你打包出来的文件可能是这样的。

 ` main.js   1.38 MiB    main  [emitted]  main`
 
 打包出来的大小已经达到了1.38MB
 
 ## 将公用的包进行拆分
 
 当我们没有使用代码分割时，如果你的业务代码发生了变化，那么lodash库和业务代码都需要重新请求，如果业务代码有1MB，那么每次都需要重新加载2MB的文件，这显然是不合理的！！！
 
 ### 同步代码的代码分割
 
 同步代码webpack是不能自动代码分割的，需要我们做一些`小动作`
 
 在webpack的配置文件中


```
splitChunks: {
            chunks: "all", // async：代码分隔只对异步代码生效
            minSize: 0, // 需要做代码分隔的最小字节 1000字节=1kb
            minChunks: 1, // 文件使用了多少次才会进行分隔
            maxAsyncRequests: 5, // 最大分隔文件数
            maxInitialRequests: 3, // 首页（入口）最大的分割数
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: { // 分隔条件判断，满足才会分隔
                vendors: {
                    test: /[\\/]node_modules[\\/]/, // 满足此条件的打包规则
                    priority: -10, // 打包优先级 （当文件同时满足default和vendor条件时）
                    // filename: "vendor.js"
                },
                default: {
                    // minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true,
                    // filename: "common.js"
                }
            }
        }
```
### 异步代码的代码分割

异步代码在webpack中会自动进行代码分割，啥都不用做就会进行代码分割啦！！

## 优化你的代码性能

1. magic-commend

```javascript
document.addEventListener("click",()=> {
    import(/* webpackPrefetch:true */'./click').then(({default:func}) => {
        func()
    })
})
```

webpackPrefetch会将你的代码变成在网络空闲的时候去加载，也就是整个网站都已经加载完毕了，才会去加载这些文件，比如说首页中进入的登录框就可以做成这样的效果



