(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{373:function(t,a,v){"use strict";v.r(a);var e=v(0),_=Object(e.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"vue双向绑定时的原理？什么时候开始监听watch的？"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue双向绑定时的原理？什么时候开始监听watch的？"}},[t._v("#")]),t._v(" vue双向绑定时的原理？什么时候开始监听Watch的？"),v("Badge",{attrs:{text:"★★★",type:"warn"}})],1),t._v(" "),v("p",[t._v("VUE实现双向数据绑定的原理就是利用了 Object.defineProperty() 这个方法重新定义了对象获取属性值(get)和设置属性值(set)的操作来实现的。在mounted之后")]),t._v(" "),v("h2",{attrs:{id:"watch的使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#watch的使用"}},[t._v("#")]),t._v(" watch的使用")]),t._v(" "),v("p",[t._v("deep深度监听，immaterial立即监听")]),t._v(" "),v("h2",{attrs:{id:"组件data必须为什么要是个函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#组件data必须为什么要是个函数"}},[t._v("#")]),t._v(" 组件data必须为什么要是个函数")]),t._v(" "),v("p",[t._v("组件实际上在编译后会变成一个类，如果不是函数的话，所有的组件data就会一样了，而函数里返回的变量会受到闭包的影响而保留")]),t._v(" "),v("p",[t._v("一个组件被复用多次的话，也就会创建多个实例。本质上，这些实例用的都是同一个构造函数。如果data是对象的话，对象属于引用类型，会影响到所有的实例。所以为了保证组件不同的实例之间data不冲突，data必须是一个函数。")]),t._v(" "),v("h2",{attrs:{id:"vue的action和mutation有何区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue的action和mutation有何区别"}},[t._v("#")]),t._v(" Vue的action和mutation有何区别")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("action中处理异步，mutation不可以")])]),t._v(" "),v("li",[v("p",[t._v("mutation中做原子操作")])]),t._v(" "),v("li",[v("p",[t._v("action可以整合多个mutation")])])]),t._v(" "),v("h2",{attrs:{id:"响应式原理"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#响应式原理"}},[t._v("#")]),t._v(" 响应式原理")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("监听data")])]),t._v(" "),v("li",[v("p",[t._v("组件渲染、更新过程")])])]),t._v(" "),v("h2",{attrs:{id:"vue中组件更新顺序"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#vue中组件更新顺序"}},[t._v("#")]),t._v(" vue中组件更新顺序")]),t._v(" "),v("p",[t._v("创建顺序 => 先父后子")]),t._v(" "),v("p",[t._v("渲染顺序 => 先子后父")]),t._v(" "),v("p",[t._v("更新顺序 => 先父后子")]),t._v(" "),v("p",[t._v("更新完成顺序 => 先子后父")]),t._v(" "),v("p",[t._v("销毁顺序 => 先父后子")]),t._v(" "),v("p",[t._v("销毁完成顺序 => 先子后父")])])}),[],!1,null,null,null);a.default=_.exports}}]);