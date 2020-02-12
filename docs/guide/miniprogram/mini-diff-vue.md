---
title: 用微信原生开发小程序和vue开发微信小程序的语法对比
date: 2020-02-12 16:37
categories: 
 - 小程序
tags: 
 - 总结
---

<!-- more -->

## 语法对比
|功能| 微信原生        | vue           | 备注  |
|---:| ------------- |:-------------:| -----:|
|访问data数据| this.data.xxx | this.data |  |
|接受组件参数| properties      | props      |    |
|接收外部样式类| externalClasses | 不支持      |  可通过props接受，但是效果没有原生好   |
|生命周期| lifetimes| 写在最外层| |
|绑定事件| bind:tap| @tap| |
|绑定动态变量| 直接写src="&#123; &#123; data &#125; &#125;"| :src="data"| |
|修改DOM| this.setData({xxx:"xxx"})| this.xxx="xxx"|
|获取DOM元素| xxx | this.$refs.xxx||
|循环| wx:for= '&#123; &#123; data &#125; &#125;' wx:key='&#123; &#123; index &#125; &#125;'| v-for="(item,index) of list" :key="index"||
|导入组件| 在json文件中的usingComponents中引入| 在script中的components中引入||
| 方法| 组件方法写在methods下，页面方法直接写在pages下| 都写在methods下||


