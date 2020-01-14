# 微信小程序编写一个高面向对象的规格选择(SPU)组件

## 开场白
本文开始将介绍如何使用微信小程序实现一个完美的，面向对象的SPU组件，因为代码较多，最后将会提供github源码链接供大家参考！

效果图[!Image](/spu-preview.jpg)

## 服务器数据

我们首先先看看服务器所返回的数据结构

     {
        "id":2,
        "title":"林间有风自营针织衫",
        "subtitle":"瓜瓜设计，3件包邮",
        "category_id":12,
        "root_category_id":2,
        "price":"77.00",
        "img":"",
        "for_theme_img":"",
        "description":null,
        "discount_price":"62.00",
        "tags":"包邮$热门",
        "is_test":true,
        "online":true,
        "sku_list":[
            {
                "id":2,
                "price":77.76,
                "discount_price":null,
                "online":true,
                "img":"",
                "title":"金属灰·七龙珠",
                "spu_id":2,
                "category_id":17,
                "root_category_id":3,
                "specs":[
                    {
                        "key_id":1,
                        "key":"颜色",
                        "value_id":45,
                        "value":"金属灰"
                    },
                    {
                        "key_id":3,
                        "key":"图案",
                        "value_id":9,
                        "value":"七龙珠"
                    },
                    {
                        "key_id":4,
                        "key":"尺码",
                        "value_id":14,
                        "value":"小号 S"
                    }
                ],
                "code":"2$1-45#3-9#4-14",
                "stock":5
            },
            {
                "id":3,
                "price":66,
                "discount_price":59,
                "online":true,
                "img":"",
                "title":"青芒色·灌篮高手",
                "spu_id":2,
                "category_id":17,
                "root_category_id":3,
                "specs":[
                    {
                        "key_id":1,
                        "key":"颜色",
                        "value_id":42,
                        "value":"青芒色"
                    },
                    {
                        "key_id":3,
                        "key":"图案",
                        "value_id":10,
                        "value":"灌篮高手"
                    },
                    {
                        "key_id":4,
                        "key":"尺码",
                        "value_id":15,
                        "value":"中号 M"
                    }
                ],
                "code":"2$1-42#3-10#4-15",
                "stock":999
            },
            {
                "id":4,
                "price":88,
                "discount_price":null,
                "online":true,
                "img":"",
                "title":"青芒色·圣斗士",
                "spu_id":2,
                "category_id":17,
                "root_category_id":3,
                "specs":[
                    {
                        "key_id":1,
                        "key":"颜色",
                        "value_id":42,
                        "value":"青芒色"
                    },
                    {
                        "key_id":3,
                        "key":"图案",
                        "value_id":11,
                        "value":"圣斗士"
                    },
                    {
                        "key_id":4,
                        "key":"尺码",
                        "value_id":16,
                        "value":"大号  L"
                    }
                ],
                "code":"2$1-42#3-11#4-16",
                "stock":8
            },
            {
                "id":5,
                "price":77,
                "discount_price":59,
                "online":true,
                "img":"http://i1.sleeve.7yue.pro/assets/09f32ac8-1af4-4424-b221-44b10bd0986e.png",
                "title":"橘黄色·七龙珠",
                "spu_id":2,
                "category_id":17,
                "root_category_id":3,
                "specs":[
                    {
                        "key_id":1,
                        "key":"颜色",
                        "value_id":44,
                        "value":"橘黄色"
                    },
                    {
                        "key_id":3,
                        "key":"图案",
                        "value_id":9,
                        "value":"七龙珠"
                    },
                    {
                        "key_id":4,
                        "key":"尺码",
                        "value_id":14,
                        "value":"小号 S"
                    }
                ],
                "code":"2$1-44#3-9#4-14",
                "stock":7
            }
        ],
        "spu_img_list":[
            {
                "id":165,
                "img":"http://i1.sleeve.7yue.pro/assets/5605cd6c-f869-46db-afe6-755b61a0122a.png",
                "spu_id":2
            }
        ],
        "spu_detail_img_list":[
            {
                "id":24,
                "img":"http://i2.sleeve.7yue.pro/n4.png",
                "spu_id":2,
                "index":1
            }
        ],
        "sketch_spec_id":1,
        "default_sku_id":2
    }
    
### 服务器返回数据分析
上面长长的一串数据就是一个商品页面的返回结果，我们先看spces(属性)，在sku_list中的specs中记录了每个SPU对应的sku规格值，从数据中我们可以看出，每个spu拥有3个规格值分别是颜色，图案，尺码，我们将每个SPU数据单独抽离出来可以得到：

    金属灰 七龙珠 小号 S
    青芒色 灌篮高手 中号 M
    青芒色 圣斗士 大号 L
    橘黄色 七龙珠 小号 S
对比效果图[!Image](/spu-preview.jpg)
我们可以发现，这两玩意好像啊，不就是每一行读下来并且去重就是渲染所需要的数据了么？那么接下来，我们就想办法将数据换一换。

### 通过矩阵思想解决问题
在大学的课程中我们学过矩阵，那么这样的变化不就是**矩阵的转置**么？把每一列变成行，就可以初步得到我们想要的数据渲染数组！

    金属灰 青芒色 青芒色 橘黄色
    七龙珠 灌篮高手 圣斗士 七龙珠
    小号 中号 大号 小号
    
However,很遗憾，js中并没有提供矩阵的转置函数，所以，我们得自己实现矩阵的转置
```javascript

// 矩阵处理类
class Matrix {
    matrix
    constructor(matrix) {
        this.matrix = matrix
    }

    get rowsNum() {
        return this.matrix.length
    }

    get colsNum() {
        return this.matrix[0].length
    }

    transpose() {
        const desArr = []
        for(let j = 0; j < this.colsNum; j++) {
            desArr[j] = []
            for (let i = 0; i < this.rowsNum; i++) {
                desArr[j][i] = this.matrix[i][j]
            }
        }
        return desArr
    }
}

export {
    Matrix
}

```
