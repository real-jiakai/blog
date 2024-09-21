---
title: "小红书RSS的解决方案"
date: 2024-09-21T19:23:52+08:00
tags: ["小红书","rss"]
slug: "xiaohongshu-rss-tips"
summary: 介绍小红书rss的解决方案。
showtoc: true
---

## 背景介绍

上半年部署了[RSSWorker](https://github.com/yllhwa/RSSWorker)，看中了其README中介绍支持小红书。这正好填补了RSSHub对于小红书支持的空缺。

我兴致勃勃地将一些小红书博主(包括我的舍友)的RSS订阅链接添加到了RSS阅读器中。然而,每天查看时却发现阅读器没有任何更新。我尝试了多个不同的RSS阅读器 - 从Tiny Tiny RSS到Miniflux,最后甚至换成了安卓应用Read You - 但结果都一样,没有一个能显示小红书的最新内容。

但是打开RSSWorker生成的小红书RSS，有显示新条目。

![RSSWorker生成的小红书RSS，有显示新条目](https://cdn.sa.net/2024/09/21/2KbnwZYH3jMquoU.webp)

在Claude 3.5 Sonnet的辅助下，我对于作者仓库有关小红书RSS的爬取代码进行了简单的理解。作者是从`<script>`标签中的JSON数据处提取数据的，作者的代码已经把未登陆状态下小红书能提供给匿名访客的信息，全都整上了。

![小红书script标签提供的JSON数据](https://cdn.sa.net/2024/09/21/txNJXeMisSn8vCV.webp)

仔细分析RSSWorker生成的小红书RSS链接，不难发现，虽然能爬取到所有的item，但每个item里面存在以下问题。

- 缺少pubDate

未登陆状态爬取小红书博主主页，无法获取每则笔记的发布时间。缺少发布时间，可能导致 RSS 阅读器无法正确更新内容。

- 每则笔记的link全指向小红书博主的主页链接

未登陆状态下爬取小红书博主主页，无法获取每则笔记的独特链接。缺少每个item独特的链接，也是致使RSS阅读器无法更新的另一原因。

RSSWorker项目的issues里面也有网友对于小红书RSS存在问题的反馈。我舍友没有置顶帖子，照样RSS阅读器无更新。

![网友对于RSSWorker项目小红书RSS存在问题的反馈](https://cdn.sa.net/2024/09/21/IpdvVWY7Lh4wS2G.webp)

## 解决方案

我的解决方案使用[Distill Web Monitor](https://chromewebstore.google.com/detail/distill-web-monitor/inlikjemeeknofckkjolnjbpehgadgge)，一个网页监控工具。

![Distill Web Monitor](https://cdn.sa.net/2024/09/21/CfxoSRnMHGyUVqp.webp)

每隔24小时自动打开一次监控对象的小红书主页，如果有更新，该插件图标就会有小红点显示。

![监控对象有更新，Distill Web Monitor有小红点显示](https://cdn.sa.net/2024/09/21/sxjbolrK7NQP2dT.webp)

安装完该chrome插件后，固定在chrome浏览器右上角的extensions列表中。

打开要监控的小红书博主主页。点击Distill Web Monitor插件图标，点击Monitor parts of page。

鼠标选中一则笔记的标题，选择XPath，后续的XPath表达式中去除掉序号。

![监控小红书博主主页操作步骤1](https://cdn.sa.net/2024/09/21/mh2Ry3PXvAzECJL.webp)

可以看到右侧已经展示出来XPath匹配到的所有笔记的标题。点击Save selections。

![监控小红书博主主页操作步骤2](https://cdn.sa.net/2024/09/21/fdhMCNz5E1YUGKc.webp)

Schedule checks选择1天以上，毕竟这种社交媒体的更新频率不高。

你也可以进行一些其余设置，比如我去处了Actions中的声音通知，最后点击Save。

![监控小红书博主主页操作步骤3](https://cdn.sa.net/2024/09/21/UeQX3guT42lMpRJ.webp)

紧接着每隔24小时左右，这款插件就会自动打开博主主页，查看有无更新的内容，有更新的内容，则会在插件图标处显示小红点。自动打开完也会自动关闭。

这就是我目前获取小红书博主更新内容的解决方案，当然何同学只是为了演示需要，演示完我就会删除该监控。我用这种法子主要为了获取舍友的小红书更新。

一般而言，小红书作为我的中文搜索引擎来用，搜出来的内容确实有时比常规的搜索引擎有用多了。就比如今天我在上面搜了一下学习内容，看到别人的交流或者互怼，也给我的学习提供了新的思路。

![小红书=中文搜索引擎](https://cdn.sa.net/2024/09/21/6Crg5zAYBkWayiu.webp)

小红书上的搭子、脱单啥的就不要整，都是无意义的。分享一则前几个月逛hostloc，看到的mjj妙评。😂

![小红书搭子的妙评](https://cdn.sa.net/2024/09/21/RNvMtzHTDCwy5I1.webp)

