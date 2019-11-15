module.exports = {
  base: "/vuepress.github.io/",
  title: '陌上青夏的开发书',
  description: '陌上花开，可缓缓归矣',
  themeConfig: {
    repo: 'https://github.com/hulincloudmo',
    smoothScroll: true,
    serviceWorker: {
      updatePopup: true
    },
    evergreen: true,
    lastUpdated: '上次码字的时间吖',
    nav: [
      { text: '首页', link: '/' },
      { text: '编程手记', link: '/guide/' },
      { text: '课程学习',link: "/study/" },
      { text: '心情笔录', link: '/mood/' },
      { text: '博客链接', link: 'http://mookaihang.design' },

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
            'electronic-commerce/spu-and-sku'
          ]
        },
        {
          title: "运维相关",
          collapsable: false,
          children: [
            'operation/auto-CI'
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
          title: "电商全栈",
          collapsable: false,
          children: [
            '7yue',
          ]
        },
      ]
    }
  }
}
