# 为什么我的scroll-view的高度会如此之高？

## scroll-view和view
 我们在使用scroll-view的时候，都会想到scroll-view其实是view的特殊封装，可是实际开发中，我们会发现这样的情况：
 
![Image text](/view-long.jpg)

## 哇？为什么？我的scroll-view的高度为什么会达到8920px这么高？

对于这个问题，微信官方并没有给出相关的提示与解决方案，但是我们可以推测，是scroll-view造成的，我们在使用横向滚动的时候，其实是强制改变了内容的排列方向，但是scroll-view依然会保持原有的元素排列，所以就会在垂直方向上将容器撑开，造成了这个长长的不知名物体……
    
## 如何解决这个长长的怪物？

聪明的工程师可以想到，既然scroll-view的高度被强制撑开，那么我就把高度固定一下不就好了嘛？

于是，你写出了下面的代码
```css
.scroll-view {
     display: flex;
     height: 300rpx;
 }
```
成功了！通过限定scroll-view的高度，我们让页面重新变的正常，我们解决了这个坑，开心！

![Image text](/scroll-view-fix.jpg)

## 这样做是最佳的解决方案么？
通过上面的修正，我们终于让scroll-view恢复了正常，但是，我们把scroll-view的高度写死了！！！我们在开发的过程中，应该尽量避免将一个外层布局的高度给写死了，虽然对我们开发攻城狮来说，写死并不会有太大的影响，就算以后想改，也是改一个数字而已，但是对于运营来说，这就是一个噩梦。运营可能会使用各种大小的图片，很可能在某一天，他使用的图片高度超过了你所设置的高度，那么图片将会显示不全！
## 更好的解决方案
这里，我给出一个更好的解决方案，那就是使用view，我们知道，在没有设置view的高度时，view的高度是由内部元素的高度所撑起来的，所以，我们只要在scroll-view中包一层view，这样就能又使用了scroll-view的滚动特性，又让高度能够根据内部元素的高度进行自适应
````html
<scroll-view enable-flex scroll-x>
        <view class="scroll-view">
            <block wx:for="{{spuList}}" wx:key="{{index}}">
                <view class="spu-container" hover-class="rect-hover" hover-start-time="300">
                    <image class="spu-img" src="{{item.img}}" style=""></image>
                    <text class="spu-text">{{item.title.length>8?s.substring(item.title,0,7)+'...' : item.title}}</text>
                    <m-price color="#157658" autofix l-value-class="price-value" l-unit-class="price-unit" value="{{item.price}}"></m-price>
                </view>
            </block>
        </view>
    </scroll-view>
````
我们来看看效果图

![Image text](/scroll-view-best.jpg)

完美实现了预期的效果，scroll-view的高度不再由自身决定，而是由内层的view来决定

## 总结
scroll-view虽然只是view的封装，但还是有一些需要我们去注意的细节，开发需要更多的思考，细致，开发之路才能越走越远！


