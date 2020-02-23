--- 
title: 使用vuepress创建个人博客
date: 2020/01/14 15:57:53
categories: 
 - 自动部署
tags: 
 - 部署blog
---

:::: tip
 本文将介绍四大步骤使用vuepress
 - 使用vuepress搭建您的个人博客并部署在github的gitpage上
 - 使用github的自定义域名功能将gitpage换到自己的域名上
 - 解决每次提交github时自定义域名会自动重置的问题
 - 使用TravisCI自动化部署更新博客
 @flowstart
 process=>operation: Operation
 e=>end: End
 
 process->e
 @flowend
::::

## 获取vuepress[源码github地址](https://github.com/vuejs/vuepress)
    在项目中添加依赖
    yarn add vuepress -D
等待处理完成后，运行vuepress dev docs命令即可看到你的blog，目录结构如下

    .
    ├── docs
    │   ├── .vuepress (可选的)
    │   │   ├── components (可选的)
    │   │   ├── theme (可选的)
    │   │   │   └── Layout.vue
    │   │   ├── public (可选的)
    │   │   ├── styles (可选的)
    │   │   │   ├── index.styl
    │   │   │   └── palette.styl
    │   │   ├── templates (可选的, 谨慎配置)
    │   │   │   ├── dev.html
    │   │   │   └── ssr.html
    │   │   ├── config.js (可选的)
    │   │   └── enhanceApp.js (可选的)
    │   │ 
    │   ├── README.md
    │   ├── guide
    │   │   └── README.md
    │   └── config.md
    │ 
    └── package.json
    
## 配置vuepress的侧边栏

在/docs/.vuepress/config.js下可以配置vuepress的各项配置，具体可参照官网进行配置，我这里提供出官网中比较难理解的侧边栏配置，尝试了很多配置方法，最后还是手动配置最为方便，示例代码如下

    sidebar: {
         "/guide/": [
          {
                    title: "微信小程序相关",
                    collapsable: false,
                    children: [
                      'miniprogram/scroll-view',
                      'miniprogram/loading',
                      'miniprogram/paging'
                    ]
                  },
         ]

每个路由是一个数组，且不要忘了左右斜杠，如果你的md文件不在guide目录的根目录下，那么你需要在children中配置以guide为根的路径，md后缀可不写，在每个路由文件夹下可以建一个readme.md文件，这将会成为这个路由的首页！

## vuepress中的静态文件

在vuepress生成过程中，会将所有在public目录下的文件编译到最外层，所以在使用静态文件时我们首先要把静态文件放在public目录下，然后就可以直接使用如下格式
    /<文件名>使用即可，如果博客不是部署在你的github主页上，则要加上/<仓库名.github.io>/<文件名>
    
## 完成这几步，可以部署啦
完成了上面的步骤后，我们就可以将代码上传到建好的github仓库，再配置githubpage页面即可，如果你有自己的域名，在配置自定义域名即可。

## 配置自定义域名
配置自定义域名实际上就是配置一个网站重定向。最简单的方式就是在网站的云解析中，将网站解析到github页面上，
以腾讯云为例，记录类型选择CNAME，记录值填入你的博客地址即可！

## 解决每次提交github时自定义域名会自动重置的问题

我们知道github识别是否需要自定义域名是看仓库里有没有CNAME文件，如果有的话将会使用其中的域名作为自定义域名，但是我们每次配置只能配置在代码文件中，而不是在生成文件中，所以我们需要在/docs/.vuepress/public目录下复制一个CNAME文件，这样每次提交的时候就不会被重置了

## 使用TravisCI自动化部署更新博客

在我们完成了部署后，我们发现每次都要重新编译后都需要自己上传对应的生成文件dist文件夹，那么我们为了省事，可以使用CI工具来完成我们的部署工作

### 1.配置自动部署脚本

    部署过程：
    1.编写自动化脚本，这里每个人的都不同，我展示一下我的配置，可供参照
    ```shell script
    #!/usr/bin/env sh
    ​
    # abort on errors
    set -e
    ​
    # build
    npm run docs:build
    ​
    # navigate into the build output directory
    cd docs/.vuepress/dist
    ​
    # if you are deploying to a custom domain
    # echo 'www.example.com' > CNAME
    ​
    git init
    git add -A
    git commit -m 'deploy'
    ​
    # if you are deploying to https://<USERNAME>.github.io
    # git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master（你将要部署到的分支，如果不是master分支，这里就修改为需要的分支,如果是github主页只能部署到master分支)
    ​
    # if you are deploying to https://<USERNAME>.github.io/<REPO>
     git push -f https://${access_token}@github.com/<USERNAME>/<USERNAME>.github.io.git master
    ​
    cd -
    
    ```
    在脚本中我们看到需要配置access_token，这个信息需要在github上配置，并且给这个access_token推送等权限，这样travis才能自动的推送编译好的代码到github容器中,配置access_token的过程可自行百度

### 2.配置travisCI

有了配置文件，我们还要告诉Travis我们部署需要做什么事情，我们在根目录建立一个.travis.yml文件，可以写入如下内容

    language: node_js # node环境，不可省略
    node_js:
      - lts/*
    script:
      - npm run docs:build # 执行命令
    deploy:
      provider: pages
      skip-cleanup: true
      local_dir: docs/.vuepress/dist # 部署的文件夹文件
      github-token: $GITHUB_TOKEN # travis服务上的token变量
      target-branch: master # 集成发布到master分支上，如果你的不是就改成对应的分支
      keep-history: true
      on:
        branch: dev   # 代码文件所在的分支


### 3.开启travisCI的监控功能

在我们每次push代码到仓库中后，将会触发webhook请求到CI服务器，CI服务器就会知道他需要开始部署了，我们首先要在github配置好向Travis的webhook请求，然后在Travis开启对应仓库的监控即可，这样在我们提交代码之后，Travis就会自己编译代码并推送到github上，网站也就随之更新了。


### 4.提高访问速度

因github服务器在国外，国内的访问速度是很慢的，我自己的渣渣网络需要20s才能打开，这样的体验是很不好的，在我自己有服务器域名的情况下，我决定将服务建立在我自己的服务器上

我的思路是使用linux的定时任务，每天晚上自动拉取github的最新代码，然后再自动编译出博客，当然更好的办法是使用github的webhook，但是还需要部署服务，比较麻烦啦（偷懒）

但是在实际操作中发现定时任务中linux调用的nodejs的版本并不是我们安装的版本，这个版本不管你怎么调试，都是不能切换的，为6.x的版本，但是vuepress要求至少有node8.x才能编译，这里我想到的解决方案就是强制替换系统的nodejs 使用linux查找命令`node which`发现定时任务调用的node在系统的bin目录下，将原node文件删除，替换为新版的node/bin下的node文件，这样就可以强制切换系统的node版本了


::: tip linux命令参考
which命令的原理：在PATH变量指定的路径中，搜索某个系统命令的位置，并且返回第一个搜索结果。也就是说，使用which命令，就可以看到某个系统命令是否存在，以及执行的到底是哪一个位置的命令。

whereis命令原理：只能用于程序名的搜索，而且只搜索二进制文件（参数-b）、man说明文件（参数-m）和源代码文件（参数-s）。如果省略参数，则返回所有信息。

参考：https://www.cnblogs.com/mfryf/p/4568731.html
:::


## 自动生成侧边栏路由

vuepress的自带路由是不好用的，当你使用自动生成时，就不能生成一级分类，只能根据文章标题建立二级标题，那么如果你想让本博客一样的效果，那么你需要手动配置这样的配置
```javascript
{
    title: "坑坑坑",
    collapsable: false,
    children: [
      'code-style/code',
      'code-style/browser-fix',
      'code-style/js-code'
    ]
  }
```
每次更新时，还需要手动向列表添加children，这是非常麻烦的，所以下面笔者提供了一个函数来处理这样的问题，不过你可能还需要做一些改动。

```javascript
const fs = require('fs')

function getChildren(path) {
  const root = []
  readDirSync(path,root)
  return root
}

function readDirSync(path,root){
  let pa = fs.readdirSync(path);
  pa.forEach(function(ele,index){
    let info = fs.statSync(path+"/"+ele)
    if(info.isDirectory()) {
      // 出现二级目录，需要递归
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
  path = path.slice(index,path.length)
  const pathLast = path.slice(path.length-1)
  const dirLast = dirPath.slice(0,1)
  // 处理二级目录的斜杠问题
  if(pathLast === '/' && dirLast === '/') {
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
```

通过调用`getChildren(basePath)`方法就可以获得对应`basePath`目录下的所有博客，即使是子目录，函数也会帮你正确的返回！但是为了保证函数处理过程的正确性，你传的目录格式必须符合`docs/xxx/xxx/`，否则函数和webpack都不能正确的帮你生成数据。

为了保证你的目录是符合要求的，你可以使用仿制以下帮助函数来生成basePath
```javascript
/**
 * @return {string}
 */
// xxx就是你的博客文件所在的一级目录，dirPath为二级目录
function createFilePath(dirPath) {
  return `docs/xxx/${dirPath}/`
// `docs/study/${dirPath}/`
}
```


