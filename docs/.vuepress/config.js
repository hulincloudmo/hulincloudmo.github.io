let {sidebar} = require('./sildebarConfig/core')

module.exports = {
  base: "",
  title: '陌上青夏',
  theme: 'reco',
  description: '陌上花开，可缓缓归矣',
  plugin: ['flowchart'],
  themeConfig: {
    repo: 'https://github.com/hulincloudmo/hulincloudmo.github.io',
    type: "blog",
    authorAvatar: "/default-avatar.jpg",
    smoothScroll: true,
    serviceWorker: {
      updatePopup: true
    },
    evergreen: true,
    lastUpdated: '上次码字的时间吖',
    nav: [
      { text: '首页', link: '/',icon: 'reco-home' },
      { text: '业务手记', link: '/guide/',icon:"reco-blog" },
      { text: '理论也很重要吖',link: "/study/",icon: "reco-coding" },
      { text: '心情笔录', link: '/mood/',icon: "reco-suggestion" },
      { text: '个人简历', link:'/resume/',icon: "reco-eye"},
      { text: '时间记忆', link: '/timeline/', icon: 'reco-date' }

    ],
    sidebar: sidebar
  }
}
