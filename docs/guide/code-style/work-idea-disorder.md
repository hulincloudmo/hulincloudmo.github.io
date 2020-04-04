---
title: 工作中的一些零散小知识
date: 2020/02/25 13:01
categories: 
 - 业务
tags: 
 - 日积月累
---

<!-- more -->

## 各种命令

### windows相关
1.windows环境下保持启动MariaDB

在MariaDB的bin目录下运行`mysqld.exe --standalone`


## 工具使用

### idea
1. idea配置UTF-8编码

setting-file-encoding-properties- UTF-8 **旁边的勾勾一定要钩上（transparent native-to-ascii conversion）**

2. 配置sass编译

安装sass使用国内源`gem sources -a https://gems.ruby-china.com/`

### chrome

1. 代码利用率分析

使用command+shift+p输入>show coverage

### git

1. git cherry-pick

git cherry-pick可以理解为”挑拣”提交，它会获取某一个分支的单笔提交，并作为一个新的提交引入到你当前分支上。 当我们需要在本地合入其他分支的提交时，如果我们不想对整个分支进行合并，而是只想将某一次提交合入到本地当前分支上，那么就要使用git cherry-pick了。

`git cherry-pick commitid`


