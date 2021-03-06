---
title: js工具类
date: 2020/04/09 00:39
categories: 
 - js工具
tags: 
 - js
---

<!-- more -->
## 字符串处理类

### 解析url_param参数

npm库：query-string

```javascript

function parseParam(url) {
    let paramStr = url.substr(url.indexOf("?")+1)
    let paramArr = paramStr.split("&")
    let obj = {}
    paramArr.forEach( param => {
        let [key,value] = param.split("=")
        if (obj.hasOwnProperty(key)) {
            if (value === undefined) {
                return
            }
            if (Object.prototype.toString.call(obj[key]) === "[object Array]") {
                obj[key].push(value)
            } else {
                let data = obj[key]
                obj[key] = [data,value]
            }
        } else {
            if (value) {
                if (value === 'true' || value === 'false') {
                    obj[key] = Boolean(value)
                } else {
                    obj[key] = value
                }
            } else {
                obj[key] = true
            }
        }
    })
    return obj
}
```

### 查找字符串中出现最多的字符和个数

````javascript

````

## 数组操作

### 展平一个数组
利用reduce方法，reduce方法适用在每次操作数组时需要依赖上一次操作数组的结果时
```javascript
function flatten(arr) {
    return arr.reduce((total,currentValue,currentIndex,arr)=> {
        return total.concat(Array.isArray(currentValue) ? flatten(currentValue): currentValue)
    },[])
}
```

## 微信小程序

### API转promise

```javascript
const promisic = function (func) {
    return function (params = {}) {
        return new Promise((resolve, reject) => {
            const args = Object.assign(params, {
                success: (res) => {
                    resolve(res)
                },
                fail: (error) => {
                    reject(error)
                }
            })
            func(args)
        })
    }
}
```

## js浮点数计算不精确问题

```javascript
function accAdd(num1, num2) {
    const num1Digits = (num1.toString().split('.')[1] || '').length;
    const num2Digits = (num2.toString().split('.')[1] || '').length;
    const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
    return (Math.round(num1 * baseNum) + Math.round(num2 * baseNum)) / baseNum;
}

function accMultiply(num1, num2) {
    const num1Digits = (num1.toString().split('.')[1] || '').length;
    const num2Digits = (num2.toString().split('.')[1] || '').length;
    const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
    return (Math.round(num1 * baseNum) * Math.round(num2 * baseNum)) / baseNum / baseNum;
}

function accSubtract(num1, num2) {
    const num1Digits = (num1.toString().split('.')[1] || '').length;
    const num2Digits = (num2.toString().split('.')[1] || '').length;
    const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
    return (Math.round(num1 * baseNum) - Math.round(num2 * baseNum)) / baseNum;
}


export {
    accAdd,
    accMultiply,
    accSubtract
}
```

## 最大请求次数限制

```javascript
function maxRequest(fn, maxNum) {
  return new Promise(function (resolve, reject) {
    if (maxNum === 0) {
      reject('max request')
      return
    }
    Promise.resolve(fn().then(data => {
      if (data.code !== 1) {
        throw new Error('should next request')
      } else {
        resolve(data)
      }
    })).catch(() => {
      return maxRequest(fn, maxNum - 1)
    })
  })
}
```
