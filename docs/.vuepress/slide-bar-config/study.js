const {getChildren} = require("./slidebar-children-generate")

/**
 * @return {string}
 */
function createFilePath(dirPath) {
  return `docs/study/${dirPath}/`
}

let study = [
  {
    title: "小知识",
    collapsable: false,
    children: [
      '/study/7yue',
      '/study/disorder/disorder'
    ]
  },
  {
    title: "springboot",
    collapsable: false,
    children: [
      '/study/springboot/autowired'
    ]
  },
  {
    title: "typescript学习旅程",
    collapsable:false,
    children: getChildren(createFilePath("typescript"))
  },
  {
    title: "http协议",
    collapsable: false,
    children: [

    ]
  },
  {
    title: "设计模式",
    collapsable:false,
    children: [
      '/study/design-pattern/part-1',
      '/study/design-pattern/part-2'
    ]
  },
  {
    title: "webpack",
    collapsable: false,
    children: [
      '/study/webpack/part-1'
    ]
  },
  {
    title: "vue相关",
    collapsable: false,
    children: getChildren(createFilePath("vue"))
  },
  {
    title: "react相关",
    collapsable:false,
    children: getChildren(createFilePath('react'))
  }
  ,
  {
    title: "面试相关",
    collapsable: true,
    children: getChildren(createFilePath('offer'))
  }
]

module.exports = {
  study
}
