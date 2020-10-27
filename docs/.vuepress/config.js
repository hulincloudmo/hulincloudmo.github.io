let {sidebar} = require('./slide-bar-config/core')
module.exports = {
  base: "",
  port: 8085,
  title: '墨墨 lee',
  theme: 'reco',
  evergreen: true,
  description: '陌上花开，可缓缓归矣',
  plugin: [['flowchart'],['img-lazy'],['vuepress-plugin-boxx']],
  themeConfig: {
    repo: 'https://github.com/hulincloudmo/hulincloudmo.github.io',
    record: "桂ICP备19002590号",
    recordLink: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=45010702001137",
    type: "blog",
    authorAvatar: "/default-avatar.jpg",
    footText: "愿世间所有美好，都能与你，环环相扣。",
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
      // { text: '个人简历', link:'/resume/',icon: "reco-eye"},
      { text: '时间记忆', link: '/timeline/', icon: 'reco-date' }

    ],
    sidebar,
    sidebarDepth:2,
  }
}
