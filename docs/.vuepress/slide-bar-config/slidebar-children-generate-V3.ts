/**
 * @author 青夏
 * @version 3.0
 * @description
 * 这是vuepress侧边栏目录生成辅助的V3版本，V3相比与V2来说，使用了TS编写，简化了调用方法，只需要一次配置，即可自动生成一个分栏下的所有分类，使用方法：调用start函数，传入你需要自动生成目录的文件夹名，比如需要生成mood下的侧边栏目录，你只需要调用start('mood')即可，同时，V3版本将每个分页的标题数据写在了对应目录的json文件下，这样你需要配置每个分栏的名字时，只需要在对应目录下创建一个json文件，写入对应数据即可，同时，引入了json配置文件的思想后，你可以对本插件进行更多的功能拓展，比如配置排序等等需求
 *
 *
 */
const fs = require('fs')
const path = require('path')
const os = require("os")
const osType = os.type()
let workFolder = ""

namespace generate {
  function resolve(basePath:string,resolvePath:string) {
    return path.resolve(basePath,resolvePath)
  }

  interface articleModule {
    title: string,
    collapsable: boolean,
    children: string[]
  }

  export function start(basePath:string) {
    workFolder = `/${basePath}`
    basePath = resolve(__dirname,`../../${basePath}`)
    const result = []
    const dirList = fs.readdirSync(basePath)
    for(let item of dirList) {
      const DirPath = resolve(basePath,item)
      let info = fs.statSync(DirPath)
      if (info.isDirectory()) {
        result.push(articleModuleFactory(DirPath))
      }
    }
    return result
  }

// console.log(start("../../mood"))

  function articleModuleFactory(dirPath:string):articleModule {
    const mes = getMessage(resolve(dirPath,"./config.json"))
    const categoryName = mes.categoryName
    const collapsable  = mes.collapsable
    return {
      title: categoryName,
      collapsable: collapsable,
      children: getChildren(dirPath)
    }
  }

  function getMessage(dirPath:string) {
    try {
      return JSON.parse(fs.readFileSync(dirPath).toString())
    } catch (e) {
      throw TypeError(`please check your directory ${dirPath} config.json is exist?`)
    }
  }

  function getChildren(path:string):string[] {
    const children: [] = []
    readDirSync(path,children)
    return children.map((v:string) => {
      let lastIndex
      if (isWindows()) {
        lastIndex = v.lastIndexOf(workFolder)
      }else {
        lastIndex = v.lastIndexOf(workFolder)
      }
      return v.substr(lastIndex)
    })
  }

  function readDirSync(path:string,root:string[]){
    let pa = fs.readdirSync(path);
    pa.forEach(function(ele:string,index:number){
      const elePath = resolve(path,ele)
      let info = fs.statSync(elePath)
      if(info.isDirectory()) {
        readDirSync(elePath,root)
      } else {
        if (checkFileType(ele)) {
          root.push(prefixPath(path,ele))
        }
      }
    })
  }

  function checkFileType(path:string) {
    return path.includes(".md")
  }

  function isWindows() {
    return osType === "Windows_NT"
  }

  function prefixPath(basePath:string,dirPath:string):string {
    let index
    if (isWindows()) {
      index = basePath.indexOf("\\")
    } else {
      index = basePath.indexOf("/")
    }
    // 去除一级目录地址
    basePath = basePath.slice(index,path.length)
    // replace用于处理windows电脑的路径用\表示的问题
    if (isWindows()) {
      return path.join(basePath,dirPath).replace(/\\/g,"/")
    } else {
      return path.join(basePath,dirPath)
    }
  }
}



module.exports = {
  start:generate.start
}

