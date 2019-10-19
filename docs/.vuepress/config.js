module.exports = {
  base: "/vuepress.github.io/",
  title: '陌上青夏的开发书',
  description: '陌上花开，可缓缓归矣',
  themeConfig: {
    repo: 'https://github.com/hulincloudmo',
    serviceWorker: {
      updatePopup: true
    },
    lastUpdate: "上次码字时间",
    nav: [
      { text: '首页', link: '/' },
      { text: '编程手记', link: '/guide/' },
      { text: '心情笔录', link: '/mood/' },
      { text: '博客链接', link: 'http://mookaihang.design' },

    ],
    sidebar: [
      {
        title: "编程思想",
        collapsable: false,
        children: [
          'code-style/code'
        ]
      },
      {
        title: "Typescript",
        collapsable: false,
        children: [
          ['guide/','初见Typescript'],
          'guide/test'
        ]
      },
      {
        title: "微信小程序相关",
        collapsable: false,
        children: [
          ['miniprogram/','微信小程序'],
          'miniprogram/scroll-view',
          'miniprogram/loading',
          'miniprogram/paging'
        ]
      },
      {
        title: "运维相关",
        collapsable: false,
        children: [
          'operation/auto-CI'
        ]
      }
    ]
  }
}
