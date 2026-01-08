---
title: "Feed43的继承者—Rsseverything制作RSS源教学"
date: 2023-03-31T20:45:17+08:00
tags: ["rss"]
slug: "create-rss-feed-with-rsseverything-tutorial"
summary: 介绍Rsseverything制作RSS源教学。
showtoc: true
---

## 故事背景

好几天没打开inoreader了，趁着今天周五刷feed，结果发现了reddit上rss社区的这条[帖子](https://www.reddit.com/r/rss/comments/125igab/feed43_is_this_the_end/)。feed43的网站挂掉了。

![inoreader rss subreddit image](https://vip2.loli.net/2023/03/31/rus18NUBJeAEWhF.webp)

评论区网友的高赞评论，表明目前feed43仍然可以通过ip地址来访问，与此同时也给出了feed43的代替服务—[RssEverything](https://rss.stephenslab.top/)。

![reddit用户评论1](https://vip2.loli.net/2023/03/31/TbE9Oq2NArjWLBG.webp)

RssEverything这个服务是在2022年年度作者在reddit上发布的。感谢这位作者创造出了人们想要的产品。

![reddit用户评论2](https://vip2.loli.net/2023/03/31/Nclog1G6ipPUaQS.webp)

feed43的服务，自从去年https的ssl证书到期后，我就再也没用过，我知道这项服务岌岌可危。没有人知道feed43服务的作者到底发生了什么。下面两条去年reddit的帖子是关于feed43服务的讨论。

- [feed43 is no longer supported. I'd be happy to pay if someone made this for me. I have an idea for an RSS feed generator.](https://www.reddit.com/r/rss/comments/xv6y8d/feed43_is_no_longer_supported_id_be_happy_to_pay/)

- [Feed43.com Death Watch](https://www.reddit.com/r/rss/comments/z4uuy6/feed43com_death_watch/)

写这篇文章之前，我拿RssEverything制作了自己个人站点的rss源。制作的流程和feed43简直一摸一样。具体的语法为{%}和{*}

详细解释请看chatgpt4的解释：

![feed43模板语法的解释](https://vip2.loli.net/2023/03/31/JTHuLaXNVMKmw1x.webp)

TL;DR：{%}定义捕获组，用于提取你希望包含在生成的RSS源中的内容；{*}是一个通配符，用于匹配任意数量的任意字符，用于跳过不需要提取的内容。



## 操作演示

- 1、填写要提取网站的url，点击load。

![第一步](https://vip2.loli.net/2023/03/31/qe3TNr4oa8XkFSJ.webp)

拿我的[个人网站](https://gujiakai.top)来举例（查看源码使用的是chrome插件—Quick source viewer）：

![个人网站源码](https://vip2.loli.net/2023/03/31/3BbpkRD8PSzd4M5.webp)

可以看到文章列表中的每一项，都在html中的li标签中包裹着。

```html
<li>
    <span>
        <i>
            <time datetime="2023-02-28" pubdate="">
                2023-02-28
            </time>
        </i>
    </span>
        <a href="https://gujiakai.top/2023/02/weekly-issue-15.html">今天我学了什么 #15</a>
</li>
```

- 2、定义提取规则

于是乎，我的匹配模式就可以这样写：

```html
<li>
{*}
    <a href="{%}">{%}</a>
</li>
```

点击提取后，便得到了文章列表每一项的url和文章标题。

![第二步](https://vip2.loli.net/2023/03/31/i1Ikz4uxVKXbDWh.webp)

- 3、定义输出格式

最后填写生成rss模板的相应参数后，Item Title填写{%2}，Item Link填写{%1}，对应步骤二中提取出的item中的二个选项，点击preview。

![第三步](https://vip2.loli.net/2023/03/31/p6unhFmO93dXHWl.webp)

最终效果图如下：

![最终效果图](https://vip2.loli.net/2023/03/31/F6SUDuaCh18Bepc.webp)

接着搭配全文抓取的RSS阅读器，如Inoreader，即可阅读到文章全貌，无需跳转到网站阅读。

![inoread抓取全文](https://vip2.loli.net/2023/03/31/vntIJflO6i4yBdC.webp)

我在写本篇文章时，遇到了一阵子网站访问不了，过了一会，再次尝试，就恢复访问了，可能是我网络不佳的问题吧。

![网站不稳定](https://vip2.loli.net/2023/03/31/wI3JxqamzE5UTBG.webp)

## 尾声

RSSEverything目前（2023.3.30）并没有付费套餐，但是网站首页的Introduction里面提及会有付费计划。我估摸着应该是等网站做起来了，再考虑出一个付费plan。

![RssEverything Introduction](https://vip2.loli.net/2023/03/31/okfayZb4P5lMESA.webp)

此外，作者的Roadmap中包含了全文抓取等功能，值得期待。

![RssEverything Soon](https://vip2.loli.net/2023/03/31/KftpkQV46Sg952X.webp)

RSS是一项古老的技术，在2023年仍有其存在的价值。它帮助人们追踪网站的更新，节省了访问网站查看更新与否的过程。希望这项服务能维持得久一些。
