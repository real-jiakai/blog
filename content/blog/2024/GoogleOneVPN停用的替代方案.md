---
title: "Google One VPN停用的替代方案"
date: 2024-04-19T18:08:18+08:00
tags: ["GoogleOneVPN"]
slug: "alternatives-to-google-one-vpn-shutdown"
summary: 介绍Google One VPN停用的替代方案。
showtoc: true
---

## 更新(2023.04.21)

![Google One VPN年中下线官方公告](https://cdn.sa.net/2024/04/21/XNykMrRDVqjZ1gx.webp)

Google One VPN年中就下线了，今年晚些时候竟然表示的是年中。via: [What’s happening to VPN by Google One?](https://support.google.com/googleone/answer/14806901)

## 背景

2024年4月12日【GMT+8】，当我看到Google One VPN即将年底停用的新闻时，内心是五味杂陈的。以后再也无法享受这么纯净的IP了。

![Google One VPN年底停用的新闻](https://cdn.sa.net/2024/04/19/hRgFZYmdXp6BCVy.webp)

我目前使用的自建节点，其中AI服务分流出口中有3个是Google One VPN。

## 替代方案

> 注：以下涉及的均为vps服务推荐，如果你是机场用户并且也想使用ip类型为isp类型的节点，有条件的可以直接上高端机场—[TAG](https://tagss04.pro/#/auth/j6c8uF3k)，他家的高端套餐里面的节点包含家宽节点+马斯克的星链延伸出来的节点。

> 以下推荐的vps服务如果不包含优化线路，不建议直连，建议当作落地鸡使用【分流操作】。

> 如果cloudflare的免费warp就已经满足你的需求了，那就给vps套warp，紧接着将特定站点的流量分流至warp，作为出站即可，面对以下方案无需冲动。

1、双isp的VPS

罗列一下我目前已知的卖双isp VPS的商家：

- [丽萨主机](https://lisahost.com/aff.php?aff=889)

年付特价VPS页面选购双isp的机器即可。有台湾、新加坡、美国地区的双isp机器售卖。

> 常驻的9折优惠码：`TS-CBP205DQJE`

我目前手上持有的一台“美国4837三网大陆回程优化 - 双isp家宽住宅美国原生IP”机器，流媒体服务解锁优秀，并且[ipinfo.io](https://ipinfo.io)站点显示的ip类型为isp。

机器还算流畅，推荐指数：⭐⭐⭐⭐【唯一的缺点是油管可能会被坏邻居搞成送中】

![丽萨主机年付特价vps页面](https://cdn.sa.net/2024/04/19/RuVlpAPQak9zvew.webp)

- [Ipraft](https://ipraft.com/?i6679af)

![Ipraft订购机器页面](https://cdn.sa.net/2024/04/19/3M76KGwBJeN2tSj.webp)

这家的优势是ip被[ping0.cc](https://ping0.cc/)站点识别为家庭宽带IP。图一是lisa主机的ping0.cc的结果，图二为ipraft的ping0.cc结果。当然两者的ipinfo.io站点显示的ip类型均为isp。

我用过他家弗吉尼亚州的双isp机器，解锁啥的都是ok的，机器的流畅性不如lisa主机。他家的双isp机器地区挺丰富的。

推荐指数：⭐⭐⭐【缺点可能是我体验的弗吉尼亚州机器很卡，性能不佳，仅个人观点】

![丽萨主机的ping0.cc结果](https://cdn.sa.net/2024/04/19/TWLFOvbmdEDP6Ng.webp)

![Ipraft的ping0.cc结果](https://cdn.sa.net/2024/04/19/LRsNSPAK2chrujY.webp)

- [wepc.au](https://wepc.au/aff.php?aff=305)

这家没用过，但是知道他家的美西机器宣称的是isp，即ipinfo.io站点显示的ip类型为isp。美西的4837双isp机器最低配年付貌似只要100多人民币。

![wepc.au订购机器页面](https://cdn.sa.net/2024/04/19/AvkO3KlnjUV74XG.webp)

推荐指数：⭐⭐⭐【我没体验过，但看上去还是ok的，再加上mjj群体也没有过多吐槽过这家，所以推荐指数为3星】

- [灵车viie](https://idc.viie.io/)

如果你抱着能用一天是一天以及贪小便宜的心理追求ip类型为isp的机器的话，可以冲一下，但建议还是慎重。

他家vps的区域挺丰富的，有香港、澳门、台湾、欧洲、新加坡、美国等地区的家宽套餐。

![灵车viie套餐页面](https://cdn.sa.net/2024/04/19/xArsDpf5V2KZCn7.webp)

推荐指数：⭐⭐【工单基本不回，黑历史较多，互联网一搜便知，nodeseek上有很多mjj吐槽他家的服务质量】

- [艾云](https://iaclouds.com/aff.php?aff=1805)

艾云的24新年特价isp CN2 GIA也不错。

![](https://cdn.sa.net/2024/04/22/Chby58vH3YcgUzR.webp)

推荐指数：⭐⭐⭐⭐

- 一些小众商家的vps，ip类型被ipinfo.io识别为isp。

如我手持的一台[littlecreekhosting](https://www.littlecreekhosting.com/)的机器，位置在美东，解锁优秀，并且ip类型被ipinfo.io识别为isp。

你可以去商家的这个报价帖子购买去年黑五期间的套餐。via: [Can't Wait for BF | Double RAM Starting at $3.50 | KVM | NVME Storage | Linux and Windows](https://lowendtalk.com/discussion/189963/cant-wait-for-bf-double-ram-starting-at-3-50-kvm-nvme-storage-linux-and-windows/p1)，在报价帖子留言订单号可以翻倍内存RAM。

推荐指数：⭐⭐⭐⭐【个人手持一台，体验下来效果还行，唯一的缺点在于其位置，美东实在太远了，美西分流到美东至少有30ms的延迟，再加上美西回大陆的延迟至少150ms，速度还是有些力不从心的】

- 其他的idc

诸如megalayer、六六云等，就不提了，价格摆在那，不值得个人用户冲。

推荐指数：⭐

2、IP类型为hosting，但解锁优秀的VPS

- [zgovps]( https://clients.zgovps.com/?cmd=cart&action=add&affid=354&id=100)

其实以上罗列的ipinfo.io站点识别的ip类型为isp，都是伪家宽。真正的家宽，一个月的费用不是普通用户所能承受的。

而且随着时间的推移，不难发现OpenAI等一些AI服务都已经不再如当初那般封禁机房ip了。因此不必再刻意追求ip类型为isp。

推荐的zgovps的洛杉矶国际线路机器，流媒体解锁优秀，适合作为落地。最低配年付12.9刀，价格也很合理。我手上也有一台zgo的国际线路机器，专门用作落地用。

![zgovps订购机器页面](https://cdn.sa.net/2024/04/19/8WQ9w6YLPqltvok.webp)

推荐指数：⭐⭐⭐⭐【如果ip类型是isp，简直完美】

## 影响

对我的影响，主要为Google One VPN支持地区的Windows机器性价比下降。没有Google One VPN可玩，Win机少了一个可以折腾的项目。

## 总结

![killed by Google网站](https://cdn.sa.net/2024/04/19/ZROjWtqkLpH6GE5.webp)

via: [Killed by Google](https://killedbygoogle.com/)

大公司就是这样的，一旦一个项目无法产生持续的经济效益，就有可能被Killed。

![Wikipedia有关Google One VPN的描述](https://cdn.sa.net/2024/04/19/O3xgnEAGfhjJ2st.webp)

via: [Wikipedia Google One](https://en.wikipedia.org/wiki/Google_One)

![The Verge新闻有关Google One VPN停用事件的点评](https://cdn.sa.net/2024/04/19/v7tcaKGWC9z3Hnq.webp)

via: [The Google One VPN service is heading to the Google graveyard](https://www.theverge.com/2024/4/12/24128177/google-one-vpn-service-shutdown-announcement-graveyard)

在这个AIGC盛行的时代，Google为Google One添加了AI Premium套餐，而Google One VPN则因为所谓的用户稀少为由，即将被终止。

在Google One VPN存活的四年时间里面，我享受了1年左右的时间(2023.5~2024.6)的服务，最后对Google One VPN道一声感谢，感谢Google One VPN，帮助我流畅地访问各大AI服务。