const fs = require('fs')

function getChildren(path) {
  const root = []
  readDirSync(path,root)
  return root
}

function readDirSync(path,root){
  var pa = fs.readdirSync(path);
  pa.forEach(function(ele,index){
    var info = fs.statSync(path+"/"+ele)
    if(info.isDirectory()) {
      readDirSync(path+ele,root)
    } else {
      if (checkFileType(ele)) {
        root.push(prefixPath(path,ele))
      }
    }
  })
}

function checkFileType(path) {
  return path.includes(".md")
}

function prefixPath(path,dirPath) {
  let index = path.indexOf("/")
  // 去除一级目录地址
  path = path.slice(index,path.length)
  const pathLast = path.slice(path.length-1)
  const dirLast = dirPath.slice(0,1)
  if(pathLast === '/' && dirLast === '/') {
    // 去除其中一个斜杠
    const prefix = path.slice(0,path.length-1)
    return prefix + dirPath
  } else if (pathLast !== '/' && dirLast === '/' || pathLast === '/' && dirLast !== '/') {
    return path + dirPath
  } else if (pathLast !== '/' && dirLast !== '/') {
    return `${path}/${dirPath}`
  }
}

module.exports = {
  getChildren:getChildren
}

