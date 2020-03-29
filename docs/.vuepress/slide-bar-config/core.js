const {guide} = require("./guide")
const {mood} = require("./mood")
const {study} = require("./study")

let sidebar = {
  "/guide/": guide,
  "/mood/": mood,
  "/study/": study
}

module.exports = {
  sidebar
}
