---
title: "使用RSS订阅Ins的方式"
date: 2023-01-19T16:40:18+08:00
tags: ["rss"]
slug: "use-rss-to-subscribe-instagram"
summary: 介绍使用RSS订阅Ins的方式。
showtoc: true
---

## 更新(2024.10)

晚上刷到reddit rss subreddit的这条帖子，感觉评论区的海外老哥讲的很有道理。尝试通过RSS关注Instagram是一场你会输的游戏。目前我基本上已经不再用RSS关注Ins了，而且Ins的有些帖子的背景音乐需要家宽才能解锁。

![reddit rss subreddit帖子评论区金句](https://cdn.sa.net/2024/10/18/cXogxObTwzZQFjG.webp)

## 更新(2024.02)

RSSHub中提供的Picnob路由也提供对于instagram的支持。[via](https://docs.rsshub.app/routes/social-media#instagram-user-profile-picnob)

![RSSHub中提供的Picnob路由也提供对于instagram的支持](https://cdn.sa.net/2024/02/27/7hruIfNO3n8RUka.webp)

![feedbro中通过Picnob路由查看三上老师的instagram](https://cdn.sa.net/2024/02/27/kYCmIMrsbUK4u3D.webp)

## 更新(2023.12)

2023年12月7号，发现openrss.org网站也提供ins的rss订阅。

![openrss.org网站也提供ins的rss订阅](https://vip2.loli.net/2023/12/07/FJt4L6NXl78BoT9.webp)

## 更新(2023.10)

2023年10月13日，发现了proxigram这一项目，能实现instagram to rss的效果。详情见我的博文—[使用docker自建proxigram](https://blog.gujiakai.top/2023/10/use-docker-compose-to-build-proxigram)

2023年10月22日，发现rssbridge中除了picuki bridge可以提供ins的rss订阅外，还有一个imgsed bridge也能提供ins的rss订阅。

![imgsed bridge提供ins的rss订阅](https://vip2.loli.net/2023/10/23/s7MJc2dyGCPbiat.webp)

---

在交流RSS的TG群组中，时常可以看到群友询问如何订阅Instagram，故今天写一篇文章介绍目前我了解的订阅Ins的方法。

![群友的疑惑](https://vip2.loli.net/2023/01/18/1meRb4o8FiLTSJf.webp)

Ins的主页并不会公开，如果采用RSSHub+配置自己账号密码的方式，让RSSHub获取Ins上某个名人的动态，过一段时间，Ins会因为RSSHub程序的频繁爬取，来验证你的身份，并让你强制修改账号密码，这非常不方便。

![ins主页并不公开](https://vip2.loli.net/2023/01/18/zaovHsDqYgcMC2F.webp)

此外，RSSHub中也提供了另一种方法，RSSHub+Picuki，你可以把Picuki看成是一个匿名观看名人Ins动态的程序。

在输入框输入名人的username后，便可以查看名人在Ins上发的动态。

![Picuki](https://vip2.loli.net/2023/01/18/k4TREtNXU6QmvpB.webp)

这个法子（RSSHub+Picuki），在我使用RSSHub+Ins，自己的Ins账号异常，被要求验证身份、强制改密后，使用过一段时间，

但是好景不长，不久就Error了。

![RSSHub+Picuki报错](https://vip2.loli.net/2023/01/18/FIVNDX2QMwjdf5z.webp)

因此使用RSSHub订阅Ins，目前为止（2023.01.18）不可行。

以下分享目前我已知可行的Ins订阅姿势。

## 1、RSS Bridge Picuki订阅（推荐指数：☆☆☆☆☆）

粗略扫一眼[RSS Bridge](https://github.com/RSS-Bridge/rss-bridge) GitHub仓库的README，并没有看到Ins的字眼，但里面的Bridge含有Picuki，因此可以拿其来订阅Ins，值得注意的是，官方的公共实例订阅Picuki，会报403的错误，不难推测出由于使用的人太多，该实例已经被Picuki屏蔽了。

所以必须自建RSS Bridge，自建完后使用里面的Picuki Bridge就能成功订阅Ins了。

![使用Picuki Bridge成功订阅Ins上名人的动态](https://vip2.loli.net/2023/01/18/utjJGRPANdO39pq.webp)

## 2、Feedbro插件（推荐指数：☆☆☆）

[Feedbro chrome插件地址](https://chrome.google.com/webstore/detail/feedbro/mefgmmbdailogpfhfblcnnjfmnpnmdfa/)


在Feedbro中输入名人Ins的url地址,点击load后，Feedbro会自动识别出Ins账号。

![使用Feedbro订阅ins](https://vip2.loli.net/2023/01/18/U3cl8VDdR4bP6MC.webp)

接着便可以欣赏名人Ins动态了。

![Feedbro+ins效果图](https://vip2.loli.net/2023/01/18/jN1cdvpa9mfMCkg.webp)

为什么Feedbro的推荐指数会少两星？

第一点，我不会将Feedbro作为我的RSS阅读器，因为Feedbro并没有移动端。明星的动态我更倾向于在移动端欣赏，电脑端适合于长文的阅读。

第二点，使用Feedbro订阅名人动态期间，个人Ins也出现了要求身份验证，强制改密的现象。我不清楚为何自己的Ins会再次出现这个现象。但是我在Feedbro的help页中看到了这样的描述。

![Feedbro help页描述](https://vip2.loli.net/2023/01/18/KxIFsw46gOz5Pl9.webp)

译文：

问：

为什么instagram的集成不起作用了？

答：

如果你经常浏览多个Ins账户而没有登录，Instagram 可以暂时禁止你的 IP。在大多数情况下，登录 Instagram 应该可以防止屏蔽。

个人猜测，Feedbro中Ins的集成是基于你已经登录了自己的Ins账号，在此基础上，这个程序定时去访问你订阅名人的Ins界面（借助了你的账号）。

为了验证自己的猜想，我将个人的Ins账号退出登录，再次使用Feedbro订阅名人Ins时，出错了。

![退出Ins登录后。使用Feedbro订阅出错](https://vip2.loli.net/2023/01/18/bywH2FLnYPmSxWz.webp)

如果你不嫌Ins强制身份认证、要求改密麻烦，你可以选择此方法。

RSSHub+Ins和Feedbro+Ins，是一样的原理，使用你的Ins账号，定期去访问名人的Ins，并将结果呈现给你。

## 3、Telegram Aximobot（推荐指数：☆☆）

[AximoBot链接](https://t.me/AximoBot)

这个机器人可以订阅名人的Ins动态，但pro价格直接劝退了我（半年24€，一整年就是48€，换算成人民币接近350￥，数字极简党追求的是能不花钱就不花钱），此外机器人的描述中也说Ins功能不稳定。

以上的种种，促使我给出2星的评价。

如果你对于Ins的更新没有太多要求且追星较少的小伙伴，可以尝试白嫖免费版，免费版支持10个源，其中Ins源的刷新率为4~6小时。

![AximoBot的价格](https://vip2.loli.net/2023/01/18/qcdtW3s4SU9ow7z.webp)

## 4、Telegram The Feed Reader Bot（推荐指数：☆☆）

[The Feed Reader Bot链接](https://t.me/TheFeedReaderBot)

和上一个Telegram机器人类似，不过这个机器人提供的Ins订阅是通过机器人开发者自建的RSS Bridge实例中的Picuki实现的。

![The Feed Reader Bot](https://vip2.loli.net/2023/01/18/GjSgp8RxsiHYAaV.webp)

注：如果打算将Telegram作为自己阅读器的话，以上的两个bot均可尝试，付费套餐都可为不支持RSS的网站建立RSS，就拿The Feed Reader Bot举例，可以使用xpath或者screenshot来追踪不支持RSS的网站更新。

试用了这么多Telegram中的RSS Bot后，以上两个bot给我的感觉是功能最丰富的。这边所说的丰富是包含了付费套餐而言，以上两个bot的免费版本均不支持对于无RSS的网站生成RSS。

## 5、其他

当然，也有一些其他的类似产品，如[rssbox](https://github.com/stefansundin/rssbox)，但都没有自建的RSSBridge+Picuki好用。因此如果你想使用RSS追踪Ins上名人的动态，个人推荐你自建RSSBridge。其余的方式均不推荐。

其实，之前有过一个和RSSBridge+Picuki订阅Ins名人动态效果类似的服务，虽然我没有体验过，这个服务叫做Bibliogram，目前已经不再维护和支持了。

![Bibliogram图片](https://vip2.loli.net/2023/01/18/TSO96Bczm2FGXQs.webp)

图片来源：[Open source front-ends for YouTube, Instagram and Twitter](https://youtu.be/2bgNA-jBMqQ?t=342)

Bibliogram的作者在去年九月份发布了[Discontinuing Bibliogram](https://cadence.moe/blog/2022-09-01-discontinuing-bibliogram)的通告，从通告中不难看出作者维护Bibliogram的心力憔悴。

![Discontinuing Bibliogram](https://vip2.loli.net/2023/01/18/FNeiKD8yzsfuw54.webp)

Ins的这种闭源确实能给名人起到一定的保护作用，RSS的隐蔽性，一言难尽。如果仅仅是关注动向，无需忧虑；但试想一下，一个偷窥癖在暗处，看你发的照片，接着可能拿你的照片干不明所以的事情，这就有点不道德了。

Ins的闭源给RSS的抓取带来了难度，但所幸并没有赶尽杀绝，我不知道自己的分享到底有没有过错，如果官方看到了我的分享，将所有的渠道都干掉，我会不会成为RSS的罪人？这些问题一直都在我的脑海中回荡，并促使我思索。但既然你能看到这篇文章，就说明我还是选择了分享。

我相信既然名人愿意分享自己的动态或照片，就是希望自己的粉丝能去围观，能被更多的人关注。因此无需考虑太多，专注于分享自己觉得有价值的东西即可。



## 后记

总而言之，使用RSSBridge+Picuki方式来追Ins上的名人，个人最推荐。

如果某天，这种方式也失效了，那就放弃这种泛娱乐化的信息资讯，远离Ins这个闭源生态。
