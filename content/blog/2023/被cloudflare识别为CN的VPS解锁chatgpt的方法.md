---
title: "非open ai服务地区的VPS解锁ChatGPT的方法"
date: 2023-06-01T11:15:46+08:00
tags: ['vps','chatgpt','openai']
slug: "unlock-chatgpt-when-vps-been-judged-cn-by-cloudflare"
summary: 分享使用二级代理来实现非open ai服务地区的VPS解锁ChatGPT的方法。
showtoc: false
---

前一阵子，忙毕设以及每天都要刷一堆科技新闻，博客更新频次较少，这篇文章我老早就想写了。本人持有香港地区的CMI和CN2线路的VPS。

但是由于香港地区并不在open ai的服务地区，因此港区的ip是获取不到open ai的服务的。

要想使得港区的VPS上搭建的节点，解锁ChatGPT, 不能使用套WARP的操作，因为Cloudflare会将港区的VPS流量引导向附近的Cloudflare节点（也是港区的ip），
还是会被blocked。

当然，如果服务地区的vps被Cloudflare识别为非open ai服务地区也会出现上述的情形。

如我的一台五一期间购入的Digital Virt的美西9929的VPS， 前一阵子，被cf识别的地区为CN，这导致无法解锁ChatGPT。截至本文撰写时（2023.6.1），他家的VPS的IP被cf成功识别为US，
已经天然具备了解锁ChatGPT的能力。

被cf识别为CN的vps，就算是套了WARP，cf会将VPS的流量，引导向识别地区的cf节点，即CN，中国大陆不在open ai的服务区。进而造成了依旧无法解锁ChatGPT的悲剧。

总体而言，服务地区的VPS被open ai blocked，可以通过套WARP来解锁ChatGPT（也可能套WARP后的cf节点也无法解锁ChatGPT，有这种情况存在），非服务地区的VPS唯一的办法就是使用二级代理来实现解锁ChatGPT。

目前，我更倾向于上述两种情况均使用二级代理，来解决服务地区被open ai blocked的vps和非服务地区的vps不解锁ChatGPT的窘境。

二级代理的方法可以参见不良林大哥的教程—[【最全最细】中转提速教程，详解使用各种方式实现中转，端口转发、二级代理、隧道中转、链式代理，总有一种适合你！什么是中转？为什么需要中转？搭建xui端口转发、gost隧道中转、clash链式代理](https://www.youtube.com/watch?v=AEqP8x_tILw)和[奈飞解锁方式大全，原生IP解锁、二级代理解锁、WARP解锁、DNS劫持解锁，详细介绍每种解锁方式，总有一种适合你。disney+、HBO、hulu、Spotify等流媒体平台可参考](https://www.youtube.com/watch?v=Vj4TGd9IaQc)

二级代理的设置看后一个视频跟着操作即可。当然，你也可以采用不良林大哥讲述的其他方案来进行尝试。


