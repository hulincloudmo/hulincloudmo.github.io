# 如何创建一个像我一样的blog

:::: tip
 本文将介绍四大步骤使用vuepress
 · 使用vuepress搭建您的个人博客并部署在github的gitpage上
 · 使用github的自定义域名功能将gitpage换到自己的域名上
 · 解决每次提交github时自定义域名会自动重置的问题
 · 使用TravisCI自动化部署更新博客
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

在vuepress生成过程中，会将所有在public目录下的文件编译到最外层，所以在使用静态文件时可以直接使用如下格式
    /<文件名>即可，如果博客不是部署在你的github主页上，则要加上/<仓库名.github.io>/<文件名>
    
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

有了配置文件，我们还要告诉Travis我们部署需要做什么事情，我们在根目录建立一个.travis.yml文件，写入如下内容

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
