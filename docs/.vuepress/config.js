module.exports = {
  base: "",
  title: '陌上青夏的开发书',
  description: '陌上花开，可缓缓归矣',
  themeConfig: {
    repo: 'https://github.com/hulincloudmo/hulincloudmo.github.io',
    smoothScroll: true,
    serviceWorker: {
      updatePopup: true
    },
    evergreen: true,
    lastUpdated: '上次码字的时间吖',
    nav: [
      { text: '首页', link: '/' },
      { text: '业务手记', link: '/guide/' },
      { text: '理论也很重要吖',link: "/study/" },
      { text: '心情笔录', link: '/mood/' },
      { text: '个人简历', link:'/resume'},

    ],
    sidebar: {
      "/guide/": [
        {
          title: "编程思想",
          collapsable: false,
          children: [
            'code-style/code'
          ]
        },
        {
          title: "javascript",
          collapsable: false,
          children: [
            'js/rubbish-recover'
          ]
        },
        {
          title: "Typescript",
          collapsable: false,
          children: [
            'test'
          ]
        },
        {
          title: "微信小程序相关",
          collapsable: false,
          children: [
            'miniprogram/scroll-view',
            'miniprogram/loading',
            'miniprogram/paging'
          ]
        },
        {
          title: "电商相关",
          collapsable: false,
          children: [
            'electronic-commerce/spu-and-sku',
            'electronic-commerce/spu-shop'
          ]
        },
        {
          title: "运维相关",
          collapsable: false,
          children: [
            'operation/auto-CI',
            'operation/create-your-blog'
          ]
        }
      ],
      "/mood/": [
        {
          title: ""
        }
      ],
      "/study/": [
        {
          title: "小知识",
          collapsable: false,
          children: [
            '7yue',
            'disorder'
          ]
        },
      ]
    }
  }
}
