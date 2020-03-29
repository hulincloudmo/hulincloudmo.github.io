const fs = require('fs')
const path = require('path')

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
      throw TypeError(`please check your path ${dirPath} config.json is exist?`)
    }
  }

  function getChildren(path:string):string[] {
    const children: [] = []
    readDirSync(path,children)
    return children.map((v:string) => {
      const lastIndex = v.lastIndexOf("/docs") + 5
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

  function prefixPath(basePath:string,dirPath:string):string {
    let index = basePath.indexOf("/")
    // 去除一级目录地址
    basePath = basePath.slice(index,path.length)
    // replace用于处理windows电脑的路径用\表示的问题
    return path.join(basePath,dirPath).replace(/\\/g,"/")
  }
}



module.exports = {
  start:generate.start
}

