(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{364:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"如何让组件异步加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#如何让组件异步加载","aria-hidden":"true"}},[t._v("#")]),t._v(" 如何让组件异步加载 "),s("Badge",{attrs:{text:"性能优化",type:"warn"}})],1),t._v(" "),s("p",[t._v("异步加载组件是一种性能优化方案，使用了异步加载，可以让组件在需要的时候才会加载，而不是随着页面的加载而加载，对于路由也是这样的")]),t._v(" "),s("p",[t._v("比如后端返回1000条数据，如果需要一次性渲染到页面上，就可以用异步渲染来做，如果按照常规的直接渲染，由于dom操作耗时，js单线程，所以会阻塞js运行，会发生页面卡顿的情况。这时候我们就可以通过一个异步操作，比如"),s("code",[t._v("settimeout")]),t._v("或者"),s("code",[t._v("requestAnimationFrame")]),t._v("把dom操作推到异步队列，进行分批渲染，提高页面性能，减少卡顿。")]),t._v(" "),s("p",[t._v("包括在vue里面渲染也是一样，$nextTicket 其实就是个类似于settimeout这样的异步函数，把回调操作推到异步队列，所以即使我不用$netTicket，用个setTimeout也是能实时获取到最新的dom")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\ncomponents"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("xxx")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("h2",{attrs:{id:"keep-alive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#keep-alive","aria-hidden":"true"}},[t._v("#")]),t._v(" keep-alive")]),t._v(" "),s("p",[t._v("组件缓存，如果需要渲染的组件比较大，消耗性能，可以用keep-alive来保存，就算切换的时候使用"),s("strong",[t._v("v-if")]),t._v("组件也"),s("strong",[t._v("不会销毁")]),t._v("！")])])}),[],!1,null,null,null);a.default=n.exports}}]);