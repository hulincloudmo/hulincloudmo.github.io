---
title: 通用的小技巧
date: 2020-02-06 18:06
categories: 
 - 算法
tags: 
 - 小技巧
---
小技巧
<!-- more -->

## 对角线遍历数组

对角线的方式交换数组元素

```javascript
for (let i = 0; i < vecor; i++) {
        for (let j = 0; j < i; j++) {
            [arr[i][j],arr[j][i]] = [arr[j][i],arr[i][j]]
        }
    }
```






