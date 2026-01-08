---
title: "Hugo博客url删除末尾斜杠"
date: "2022-11-07T15:05:47+08:00"
tags: ['hugo']
slug: "hugo-remove-trailing-slash"
summary: 介绍Hugo博客去除url尾部斜杠的方法。
showtoc: true
---

## 更新(2025.3.4)

最近发现Google貌似把我的站点从Google Search中k掉了，于是乎，我打开了Google Search Console，发现原来我还没有验证网站，但前些年Google还是给了我很大的曝光，感谢Google。

验证了网站后，发现有很大一部分网页存在问题，导致了Google不索引，和Claude对话了几轮后，定位了问题所在，正是由于2022年的这个环境变量设置，导致了sitemap中出现了重复的链接，有带.html的，还有不带的。Google判定了重复，进而不索引这部分不规范的网页链接。

![Google Search Console遇到的issue](https://cdn.sa.net/2025/03/04/kVH3OCTXdSLE41l.webp)

去除了Netlify中的环境变量，并在Hugo博客的head部分添加了以下这部分规范链接代码，希望过一段日子能再次在Google Search中看到站点的回归。

```html
<link rel="canonical" href="{{ .Permalink }}" />
```

Hugo默认采用Pretty URL标准挺好的，当初我想保留`.html`这种UGLY URL是因为受到阮一峰老师博客网站的URL启发。

![Hugo默认采用Pretty URL标准](https://cdn.sa.net/2025/03/04/QtKZSNPaAHlUumV.webp)

---

> 注：以下方法仅限于在hugo的config.toml配置文件中添加了`uglyURLs = true`选项，仍不生效的情况。
> 
> 如果添加了`uglyURLs = true`选项，url尾部的`/`换成了`.html`，就没必要在环境变量中做文章了。

## 1.背景

从今年上半年第一次接触Hugo博客开始，就一直对Hugo博客的url不爽。如`http://localhost:1313/2022/11/hugo-bear-theme-add-fancybox/`，

我不需要末尾的`/`。Hugo社区以及其它的技术社区都对此进行过讨论，有兴趣的可以自行搜索。

在网上找了很多解决法子，均是在根目录的配置文件`config.toml`中新增一个选项`uglyurls = true`，但是我添加过后，发现`/`并没有去除。

在暑假的时候，没事翻阅Hugo官方文档，发现了以下两段话，如下图所示：

### 图一：

![Ugly URLS](https://vip2.loli.net/2022/11/07/GFB9zYwN8pMOZxh.png)

>  除了在根目录下新增`uglyurls = true`选项外，你还可以在运行hugo命令的时候，设置环境变量。

### 图二：

![配置环境变量](https://vip2.loli.net/2022/11/07/wYqv3gPuHtXpA6e.png)

> 在类Unix系统，可以通过env命令来设置环境变量，设置环境变量对于你使用Netlify这类服务来部署站点非常有用。

当然，Windows系统并不是类Unix系统。所以，如果你想要在本地看到ugly urls的效果，你可以在Windows电脑的环境变量中添加一条记录【Key=`HUGO_UGLYURLS`，Value=`true`】。

![Windows添加环境变量后，url效果图](https://vip2.loli.net/2022/11/07/Yukdhl3s8pGxjTP.png)



## 2.操作步骤

静态博客部署到Netlify或Vercel的操作非常简单，将本地的hugo博客文件夹先Push到GitHub，然后打开Netlify，从GitHub导入hugo博客仓库，Netlify或Vercel会自动识别项目框架，你只需导入后，点击部署即可。这边以Netlify为例。

1. 将站点部署到netlify，在部署的时候，设置环境变量【Key=`HUGO_UGLYURLS`，Value=`true`】。

![Netlify配置环境变量](https://vip2.loli.net/2022/11/07/BdWo3wJFXmUik5Z.png)

2. 最终效果

![最终效果图](https://vip2.loli.net/2022/11/07/Rr4m6ukvbcWaU9i.png)



## 3.参考链接

[Ugly URLs](https://gohugo.io/content-management/urls/#ugly-urls)

[Configure with Environment Variables ](https://gohugo.io/getting-started/configuration/#configure-with-environment-variables)
