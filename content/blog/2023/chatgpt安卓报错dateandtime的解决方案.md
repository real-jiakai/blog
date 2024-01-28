---
title: "chatgpt安卓报错date and time的解决方案"
date: 2023-08-17T13:30:01+08:00
tags: ['chatgpt','andriod']
slug: "solving-date-and-time-error-in-chatgpt-android-app"
summary: 分享chatgpt安卓报错date and time的解决方案。
showtoc: true
---

## 更新（2024.1）

前几天邻居大学放假来我家玩耍，他的小米手机12手机（原本使用华谷套件安装了谷歌三件套）也报了这个错误。

确定使用了支持GPT移动端的节点后，报错date and time，我让他去apkpure/apk mirror上下载最新的play store后，再次打开ChatGPT app不再报错date and time。这个错误大概率的解决思路：

- 节点支持GPT移动端与否

- play store（谷歌商店）确保更新至最新版本，谷歌三件套的其他两件套没硬性更新要求。

## 更新（2023.11）

2023年11月27号，有网友在这个[issue](https://github.com/real-jiakai/blog/issues/3#issuecomment-1826815359)提到，给自己的vps套上warp专门处理openai相关的流量解决了date and time的错误。给vps套warp解决date and time错误，那就表明date and time错误也有可能与ip有关。

暑假那时候我的openai落地全部采用google one vpn落地，但是并没有解决date and time错误。9月初那一波GPT  app更新后，登录app，直接date and time错误不见了，报错信息指向一个链接，具体详情见`更新（2023.09）`部分的描述。

之后一直采用google one vpn作为落地专门用来处理与openai相关的请求，移动端的GPT再也没有出现任何差错，能正常使用。本月开始，我的openai相关请求交由google one vpn和家宽vps来进行负载均衡处理，进一步保证了GPT移动端的解锁。

反正date and time这个问题的具体原因可能有以下几种可能：

- 代理节点仅仅解锁GPT web端，不解锁GPT移动端【具体可见-[chatgpt安卓报错disallowed ISP/There is a problem with your request的解决方案](https://blog.gujiakai.top/2023/10/chatgpt-android-error-disallowed-isp-solution)】

- 谷歌三件套问题（google services framework根据你手机的安卓版本安装适配的最新版本，其余两者无脑更新至最新版）

- 如`更新（2023.09）`部分所示，没给`google play services`应用授予phone权限

- 国产魔改安卓系统的问题

## 更新（2023.09）

2023年9月2日，当我在play store更新完chatgpt应用后，打开报错，根据官方教程授予google play services手机的phone权限后，成功用上chatgpt的安卓app。再也没有之前的date and time错误。[官方教程链接](https://help.openai.com/en/articles/8261897-chatgpt-android-app-sign-in-error-something-went-wrong-with-code-17-error)

![成功用上chatgpt安卓应用](https://vip2.loli.io/2023/09/02/dTtYr12uHGWvlzy.webp)

## 背景介绍

7月25日，chatgpt的安卓版本可以抢先在google play store的美区下载体验，我也是第一时间下载了该应用，但是登录时，出现了如下图所示的报错。

![chatgpt andriod报错](https://vip2.loli.io/2023/08/17/CMjuqNh8cOWoATn.webp)

Something went wrong. Please make sure your device's date and time are set properly. Check that your internet connection is stable, then restart the app and try again. 

懂一些英文的应该会尝试更改自己安卓手机的时间为代理节点地区，于是我将设备时间更改为了我的代理节点地区—美西洛杉矶。可是依然无济于事。

在v2ex论坛上的这个帖子中有网友提出更新google play的法子。[via](https://www.v2ex.com/t/959723)

![v站网友的解决方案](https://vip2.loli.io/2023/08/17/tJpXzRHEZu4gqrA.webp)

于是我在apkpure下载了最新版本的google play store，并安装了。但是依然出现date and time的报错。

虽然这个法子依然不适用于我的vivo手机【内置国产funtouch os】，但是提供了一个思路，我开始怀疑是google三件套未更新到最新版本的问题。【google services framework，google play service，google play store】

由于我的vivo手机的安卓版本是10，因此我选择了google services framework最低要求为安卓10的最新版，安装了三者的最新版，外加手机上的所有app全部更新到最新版，依旧报错。

我为了解决这个问题，至少花了1天时间，过去的半个月，时不时在网上搜索这方面的相关资料。

比如nodeseek论坛上的这个帖子中就有关于这个问题的相关讨论。[via](https://www.nodeseek.com/post-16285-1)

有人说是ip问题，有人反驳跟ip无关，将google play store更新到最新版本能解决此问题。

![nodeseek网友回复](https://vip2.loli.io/2023/08/17/4lWPgQOzhuyStMH.webp)

比如b站有up主做了一个视频，里面关于我遇到的问题的解决方案依旧是更新google play store，但是这种方法对我无效，评论区也有更新google play store版本后，依旧报错的网友。[via](https://www.bilibili.com/video/BV1dp4y1G7qq/)

比如youtube评论区也有网友留言刷机后的小米手机可以登录。

![youtube网友留言](https://vip2.loli.io/2023/08/17/gB1Rjy4qwfZGmkU.webp)

等等......

我目前依旧没有解决这个问题，但是我个人猜测国内手机商家的魔改版安卓系统大多会出这个问题。就以我的vivo手机举例，我的语言设置早就更改为了英文，并且时区更改到代理节点所在的时区，定位服务啥的早就全部关闭。但我估计魔改版的安卓系统会有一个参数显示所在地为中国，进而报date and time错误。

当然我也看到vivo手机成功登录chatgpt安卓应用的例子。

如果你也和我一样，使用国产安卓手机登录chatgpt安卓app报date and time的错误，不妨就舍弃掉这个app吧，专注于使用网页版即可。

经此一次折腾，可以看到有一台美版的原生安卓手机或者苹果手机的重要性。

注：为了验证这个app是不是和tiktok一样验证sim卡，我还特意将sim卡拔出，结果依旧报错。

~~有网友说是ip的问题，我是非常不赞同的。不赞同的原因如下：~~

~~- 网页版能登录不报错，安卓app登录报错，两相对比就知道不是ip问题，如果是ip问题，那么两者应该同时登录报错才对。~~

~~- 我使用软路由作为前置代理，手机上开启google one vpn，使用谷歌家的纯净ip，并且将时区设置为该ip所在地时区，结果依旧连接不上，google one vpn都解决不了的安卓app困境就说明不是ip问题，因为google one vpn的ip纯净度比机房的ip好太多了。~~