(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{197:function(t,s,a){"use strict";a.r(s);var n=a(0),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"移动前端分页加载的探讨"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移动前端分页加载的探讨","aria-hidden":"true"}},[t._v("#")]),t._v(" 移动前端分页加载的探讨")]),t._v(" "),a("h2",{attrs:{id:"分页的前世今生"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分页的前世今生","aria-hidden":"true"}},[t._v("#")]),t._v(" 分页的前世今生~")]),t._v(" "),a("p",[t._v("我们都知道，服务器的性能是有限的，对我们前端开发者来说，为了解放服务器的压力，我们也要在程序中分担一部分的性能压力。也为了能让客户端的页面速度更加流畅，我们使用了分页，在pc端，我们使用页数来进行分页，但是在移动端，我们往往没有分页的概念，也因此我们出现了第二代的分页。")]),t._v(" "),a("h2",{attrs:{id:"第二代分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二代分页","aria-hidden":"true"}},[t._v("#")]),t._v(" 第二代分页")]),t._v(" "),a("p",[t._v("在移动端，我们的分页场景往往会是触底加载，这时我们使用start和count来进行分页，"),a("font",{attrs:{color:"red"}},[t._v("我们不再关心到底有多少页，我们只关心从多少开始，取多少条！")])],1),t._v(" "),a("h2",{attrs:{id:"分页需要考虑的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分页需要考虑的问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 分页需要考虑的问题")]),t._v(" "),a("p",[t._v("要分页，我们就要考虑到分页时的状态:")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://hulincloud.cn/images/vuepress/w-2.jpg",alt:"image:text"}})]),t._v(" "),a("p",[t._v("天呐，没想到想起来简单的分页，看了上面的分页状态，居然有这么复杂，我们不可能每次要分页的时候都需要考虑这么多细节，太累了！")]),t._v(" "),a("p",[t._v("所以，我们必须要封装一个分页对象，用它来处理这些状态")]),t._v(" "),a("h2",{attrs:{id:"开始封装分页"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开始封装分页","aria-hidden":"true"}},[t._v("#")]),t._v(" 开始封装分页")]),t._v(" "),a("h4",{attrs:{id:"期望：在业务中使用分页应该足够的简单，不需要考虑细节，我们每次想要数据，只需要向paging去取"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#期望：在业务中使用分页应该足够的简单，不需要考虑细节，我们每次想要数据，只需要向paging去取","aria-hidden":"true"}},[t._v("#")]),t._v(" 期望：在业务中使用分页应该足够的简单，"),a("font",{attrs:{color:"red"}},[t._v("不需要考虑细节")]),t._v("，我们每次想要数据，只需要向paging去取")],1),t._v(" "),a("h4",{attrs:{id:"编程思想：函数或类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编程思想：函数或类","aria-hidden":"true"}},[t._v("#")]),t._v(" 编程思想：函数或类")]),t._v(" "),a("p",[t._v("我们应该使用函数还是类呢？")]),t._v(" "),a("p",[t._v("在分页过程中，我们需要保存分页的状态吗？想想是需要的，我们需要保存每一次分页的start值不是么？\n所以我们应该通过类来实现这个分页！")]),t._v(" "),a("p",[t._v("我们先来确定一下paging类所需要的数据")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("constructor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" count"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" count\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" start\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求对象")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("req "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求url，为什么要单独设置一个url？ 后面有答案！")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("数据有了，那么我们就可以拿这些数据去请求服务器啦，但是我们前面说到了，我们的请求应该避免重复，所以，我们这里应该要使用锁机制来保证请求不是重复的，在代码中其实锁很简单，就简单用一个true or false就可以实现，"),a("font",{attrs:{color:"red"}},[t._v("当一个请求进入线程后，我们将锁设置为true，如果这时下一个请求来到，我们就直接返回，不去请求数据库了")])],1),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getMoreData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断锁存在")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_getLocker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 真正请求服务器")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_actualGetData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 释放锁")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_releaseLocker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" data\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_getLocker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("locker"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("locker "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_releaseLocker")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("locker "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("要请求后端数据，那么我们需要请求的url，可是我们想想，请求url是固定的么？")]),t._v(" "),a("p",[t._v("显然不是，既然是分页，我们就是要不断的改变start值，才能拿到不同数据，没办法，我们只能再写一个函数去处理这个分页url")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("_getCurrentReq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// url的答案在这：每次都取到原始的url，避免重复拼接参数")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 拼接参数")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" params "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("start=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("&count=")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("count"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 判断url中是否已经有其他参数了，如果已经有了其他参数，我们就应该直接拼接&符号")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'?'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("?")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("params"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" url\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("req\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("通过这样的处理后，我们就可以拿到后端所返回的数据了，这时候我们只需要再组织一个数据结构，返回给页面就可以了！")])])}),[],!1,null,null,null);s.default=r.exports}}]);