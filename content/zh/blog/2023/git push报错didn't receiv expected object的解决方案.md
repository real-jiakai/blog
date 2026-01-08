---
title: "git push报错'remote: fatal: did not receive expected object'的解决方案"
date: 2023-09-16T09:56:21+08:00
tags: ['git','github']
slug: "fix-git-push-fatal-error-did-not-receive-expected-object"
summary: "介绍git push报错'remote: fatal: did not receive expected object'的解决方案"
showtoc: true
---

## 故事背景

来到广西民大，当我用keep室外跑功能记录自己每天晨跑，满怀期待地打开自己搭建的[running page](https://running.gujiakai.top)网站时，发现新的跑步记录并没有向往常一样呈现出来，网站最后更新的截止日期是9月9号，那天早上在酒店锻炼使用的是keep的室内跑功能。

![keep室外跑数据无法同步](https://vip2.loli.net/2023/09/16/PRqXOhnuF4YMHNJ.webp)

keep软件的改版应该是在今年暑假，2023年7月份那会。当时在家中，我每天使用的是室内跑功能，虽然地图数据无法获取，但是跑步记录还能持续获取，并在网站上更新。

原项目的讨论区也有网友出现了keep无法同步数据的错误。见[获取keep数据错误 #484](https://github.com/yihong0618/running_page/issues/484)

![网友回复](https://vip2.loli.net/2023/09/16/eRYpKVh3DNsUMSn.webp)

这是国产软件的通病，喜欢绑架用户数据。我承认keep软件的用户体验比目前使用的国外strava软件更加人性化，但捆绑用户数据的行为直接会将它的优势一举抹除。

于是我准备重新新建一个仓库并部署，原本的网站保留，原本的仓库归档。

当我配置完配置项，准备将内容推送到github新仓库时，出现了一个报错'remote: fatal: did not receive expected object'。

## 操作复现

```bash
# 克隆远程仓库到本地，只获取最新的一次提交（浅克隆）
git clone https://github.com/yihong0618/running_page.git --depth=1

修改配置项

# 将所有修改添加到Git暂存区
git add .
# 提交暂存区的修改，并附加消息"xxx"
git commit -m "xxx"
# 将本地的master分支推送到远程仓库，并设置远程仓库为默认上游
git push -u origin master
```

经上述操作，得到如下报错：

![git push报错](https://vip2.loli.net/2023/09/16/S5qDHUwpgQ7vsKG.webp)


## 解决方案

在stack overflow上有这样一个回复。

![stack overflow网友回复](https://vip2.loli.net/2023/09/16/agG97tbZVrQPJqm.webp)

- [git 'did not receive expected object' error when trying to update GitHub repo](https://stackoverflow.com/questions/76470864/git-did-not-receive-expected-object-error-when-trying-to-update-github-repo)

对应到我的场景，我会选择Jon Mair网友的方案，直接将.git文件夹删除，接着进行如下操作。最终成功将仓库推送到GitHub上了。

```bash
# 初始化一个新的Git仓库，创建一个新的.git目录来存储仓库信息
git init
# 将所有修改添加到Git暂存区
git add .
# 提交暂存区的修改，并附加消息"xxx"
git commit -m "initial commit"
# 将本地的master分支推送到远程仓库，并设置远程仓库为默认上游
git push -u origin master
```

GPT4分析：

![GPT4分析](https://vip2.loli.net/2023/09/16/DZ5xA4N7Fqr2Cwu.webp)