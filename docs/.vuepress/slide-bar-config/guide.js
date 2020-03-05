const {getChildren} = require("./slidebar-children-generate")

/**
 * @return {string}
 */
function createFilePath(dirPath) {
  return `docs/guide/${dirPath}/`
}

let guide = [
  {
    title: "坑坑坑",
    collapsable: false,
    children: getChildren(createFilePath("code-style"))
  },
  {
    title: "css",
    collapsable:false,
    children: getChildren(createFilePath("css"))
  },
  {
    title: "javascript",
    collapsable: false,
    children: getChildren(createFilePath("js"))
  },
  {
    title: "vue",
    collapsable:false,
    children:getChildren(createFilePath("vue"))
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
    children: getChildren(createFilePath("miniprogram"))
  },
  {
    title: "电商相关",
    collapsable: false,
    children: getChildren(createFilePath("electronic-commerce"))
  },
  {
    title: "运维相关",
    collapsable: false,
    children: [
      'operation/auto-CI',
      'operation/create-your-blog'
    ]
  }
]

module.exports = {
  guide
}
