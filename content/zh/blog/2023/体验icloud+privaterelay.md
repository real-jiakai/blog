---
title: "体验icloud+ private relay"
date: 2023-10-05T11:02:55+08:00
tags: ['apple']
slug: "experience-icloud-plus-private-relay"
summary: 介绍自己使用icloud+ private relay的体验。
showtoc: true
---

## 故事背景

国庆假期即将落下帷幕，趁着最后的一小段时间，准备折腾一下icloud+ 提供的private relay功能【中文名：专用代理】。

折腾过程参考自这位博主的博文—[如何在中国开启 iCloud Private Relay｜苹果家的 VPN 使用体验 ✈️](https://web.archive.org/web/20210624084012/https://qust.me/post/PrivateRelay/)
【注：由于这篇博文的图片目前已经无法加载，故贴一下互联网档案馆的历史快照。】

该博主使用的是路由器+open clash作为前置代理连接成功的。本文我将介绍clash for windows的tun模式+windows的热点作为前置，mac成功开启icloud+提供的private relay的方法。

关于private relay的介绍以及其原理等知识，可以参见上面贴出来的博文，或者自行搜索去了解，这边就不再赘述。

## 实际操作 

注：操作前提：apple美区id，apple美区id登陆美区apple store，订阅了美区的icloud+。

windows的clash for windows软件中在Global(全局模式)或者Rule(规则模式)中选择一个美国节点。接着开启clash for windows的tun模式。然后开启windows热点。

打开控制面板的网络连接部分的修改适配器设置，应该能找到3个如下图所示的网络适配器。一个clash的虚拟网卡、一个本地的wifi，一个分享的热点【下图中的Local Area Connector】

![3个网络适配器](https://vip2.loli.net/2023/10/05/RrsitF6ZynfXPLT.webp)

点开clash虚拟网卡的属性，在分享那一栏允许热点从clash的网卡连接。

![允许热点从clash的网卡连接](https://vip2.loli.net/2023/10/05/hW8tvRolrnXdEJK.webp)

其实上述操作，就是我上个月的博文—[利用windows热点和clash-tun模式实现kindle科学上网](https://blog.gujiakai.top/2023/09/using-windows-hotspot-and-clash-tun-for-kindle-internet-access)提及的方法。该方法取自网友的知乎评论。

![网友评论](https://vip2.loli.net/2023/09/22/nk7v24OZwzGfeFi.webp)

接着mac上连接windows分享出来的热点。

注：经过上述操作，可能mac会连不上windows共享出来的热点，如果遇到这种情况可以尝试重新开启tun模式，重新开启windows的热点。

找到专用代理(settings—>apple id—>icloud—>private relay)，打开即可。

![打开专用代理](https://vip2.loli.net/2023/10/05/eXP1zg2k6BwMQHA.webp)

此时在safari浏览器上冲浪就会被专用代理所保护了。其他浏览器依旧使用的是windows上热点共享的clash流量。

apple专用代理(private relay)出口节点的ip使用的是cloudflare的节点。每一次请求基本上使用的都是不一样的cloudflare节点。

![apple专用代理的ip是动态的](https://vip2.loli.net/2023/10/05/H34p9bKAz76eaT1.webp)

毋庸置疑，apple的这个专用代理（本地—>ISP—>apple—>cloudflare—>目标网站）的工作流程对于隐私保护提供了保障。有点类似洋葱浏览器的意味。

但是于我而言，这个功能并没有如google one vpn令我着迷。其中的一个原因：apple的出口节点就是cloudflare的节点。

因为对我而言，要想获取cloudflare节点作为出口，只需使用[warp脚本](https://gitlab.com/fscarmen/warp)给vps套一层warp即可实现。warp ip的纯净度不如google one vpn。

今天一开始下单了美区0.99刀的icloud+套餐，主要是奔着private relay去的，结果体验后，反而觉得自定义邮箱地址可能会更吸引我一些。

![icloud+的副赠品](https://vip2.loli.net/2023/10/05/lnJjHMW4OAaVc1R.webp)

当然这边所说的吸引，也不是非常强烈的那种感觉。因为firefox的relay、duckduckgo的邮箱隐私服务都提供了类似的功能，其中duckduckgo的服务令我印象深刻，它的服务是完全免费的。

目前我使用了icloud+的自定义邮箱功能给我的一个域名设置了域名邮箱。可能这是我继续续费icloud+的动力吧。


