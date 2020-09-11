---
title: git相关操作
date: 2020/09/02 09:51
categories: 
 - 开发知识
tags: 
 - 日积月累
---

<!-- more -->

1. `git cherry-pick`

git cherry-pick可以理解为”挑拣”提交，它会获取某一个分支的单笔提交，并作为一个新的提交引入到你当前分支上。 当我们需要在本地合入其他分支的提交时，如果我们不想对整个分支进行合并，而是只想将某一次提交合入到本地当前分支上，那么就要使用git cherry-pick了。

`git cherry-pick commitid`

2. `git revert xxx与git reset xxx`

- `reset`: 如果想恢复到之前某个提交的版本，且那个版本之后提交的版本我们都不要了，就可以用这种方法。

- `revert`: 如果我们想撤销之前的某一版本，但是又想保留该目标版本后面的版本，记录下这整个版本变动流程，就可以用这种方法。

3. `git commit --amend -m "消息"`

修改上次提交的内容或者是提示信息，而不产生新地提交记录
