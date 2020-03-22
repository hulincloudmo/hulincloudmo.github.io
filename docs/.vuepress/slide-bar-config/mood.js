const {getChildren} = require("./slidebar-children-generate")

/**
 * @return {string}
 */
function createFilePath(dirPath) {
  return `docs/mood/${dirPath}/`
}

let mood = [
  {
    title: "编程人生",
    collapsable:false,
    children: getChildren(createFilePath("coding-life"))
  },
  {
    title: "工作周报",
    collapsable: true,
    children: getChildren(createFilePath("summary"))
  }
]

module.exports = {
  mood
}
