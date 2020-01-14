let {sidebar} = require('./sildebarConfig/core')

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
      { text: '个人简历', link:'/resume/'},

    ],
    sidebar: sidebar
  }
}
