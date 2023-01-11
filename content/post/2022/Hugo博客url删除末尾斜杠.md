---
title: "Hugo博客url删除末尾斜杠"
date: "2022-11-07T15:05:47+08:00"
tags: ['hugo']
slug: "hugo-remove-trailing-slash"
summary: 介绍Hugo博客去除url尾部斜杠的方法。
---

## 1.背景

从今年上半年第一次接触Hugo博客开始，就一直对Hugo博客的url不爽。如`http://localhost:1313/2022/11/hugo-bear-theme-add-fancybox/`，

我不需要末尾的`/`。Hugo社区以及其它的技术社区都对此进行过讨论，有兴趣的可以自行搜索。

在网上找了很多解决法子，均是在根目录的配置文件`config.toml`中新增一个选项`uglyurls = true`，但是我添加过后，发现`/`并没有去除。

在暑假的时候，没事翻阅Hugo官方文档，发现了以下两段话，如下图所示：

### 图一：

![Ugly URLS](https://vip2.loli.io/2022/11/07/GFB9zYwN8pMOZxh.png)

>  除了在根目录下新增`uglyurls = true`选项外，你还可以在运行hugo命令的时候，设置环境变量。

### 图二：

![配置环境变量](https://vip2.loli.io/2022/11/07/wYqv3gPuHtXpA6e.png)

> 在类Unix系统，可以通过env命令来设置环境变量，设置环境变量对于你使用Netlify这类服务来部署站点非常有用。

当然，Windows系统并不是类Unix系统。所以，如果你想要在本地看到ugly urls的效果，你可以在Windows电脑的环境变量中添加一条记录【Key=`HUGO_UGLYURLS`，Value=`true`】。

![Windows添加环境变量后，url效果图](https://vip2.loli.io/2022/11/07/Yukdhl3s8pGxjTP.png)



## 2.操作步骤

静态博客部署到Netlify或Vercel的操作非常简单，将本地的hugo博客文件夹先Push到GitHub，然后打开Netlify，从GitHub导入hugo博客仓库，Netlify或Vercel会自动识别项目框架，你只需导入后，点击部署即可。这边以Netlify为例。

1. 将站点部署到netlify，在部署的时候，设置环境变量【Key=`HUGO_UGLYURLS`，Value=`true`】。

![Netlify配置环境变量](https://vip2.loli.io/2022/11/07/BdWo3wJFXmUik5Z.png)

2. 最终效果

![最终效果图](https://vip2.loli.io/2022/11/07/Rr4m6ukvbcWaU9i.png)



## 3.参考链接

[Ugly URLs](https://gohugo.io/content-management/urls/#ugly-urls)

[Configure with Environment Variables ](https://gohugo.io/getting-started/configuration/#configure-with-environment-variables)
