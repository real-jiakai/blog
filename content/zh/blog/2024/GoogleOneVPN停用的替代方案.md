---
title: "Google One VPN停用的替代方案"
date: 2024-04-19T18:08:18+08:00
tags: ["google one vpn"]
slug: "alternatives-to-google-one-vpn-shutdown"
summary: 介绍Google One VPN停用的替代方案。
showtoc: true
---

## 更新(2025.01.06)

今天已经锁定了bootloder，esim不受影响。锁定bootloader仅仅是清空了应用数据。

也不知道为啥，总感觉自己对Google One VPN祛魅了。毕竟现在的AI服务都tm需要上真家宽了，双isp机器也没啥卵用了。

![时隔半年，再次连上Google One VPN](https://cdn.sa.net/2025/01/06/vnsx8AyFXGKcUtq.webp)

## 更新(2024.07.22)

今天折腾检查了vps的分流以及分流出口机器的ip质量检测。又有想买家宽的冲动，但是到最后想了想还是算了，我不愿意用warp ip，用双isp的机器也够用啦。

有些时候也会思考自己分享这些渠道到底合适否？毕竟人一多，真家宽也会变脏，更别说是双isp了。

目前我的分流机器有三台。

一台是lisa的美西双isp，ip质量检测结果如下：

![lisa host的ip质量检测结果](https://cdn.sa.net/2024/07/22/RjkSqrAMX79K35c.webp)

流媒体解锁情况如下：

![lisa host的流媒体解锁情况](https://cdn.sa.net/2024/07/22/AvBXRnLOoQ5JMcC.webp)

一台是艾云的美西双isp，ip质量检测结果如下：

![艾云的ip质量检测结果](https://cdn.sa.net/2024/07/22/19PsB4TWZ8ElRaA.webp)

流媒体解锁情况如下：

![艾云的流媒体解锁情况](https://cdn.sa.net/2024/07/22/Hf5UW8eDYy7EcGP.webp)

还有一台是ipraft的单att的美东机器，ip质量检测结果如下：

![ipraft的ip质量检测结果](https://cdn.sa.net/2024/07/22/zqJgnyA3l5PDB1I.webp)

流媒体解锁情况如下：

![ipraft的流媒体解锁情况](https://cdn.sa.net/2024/07/22/GE8qlQDM7Kvabrf.webp)

如果仅仅是AI服务分流，双isp，真的绰绰有余，虽然都是伪家宽。其他的比如Instagram的版权音频解锁，一般我也很少用，reddit论坛我也一直处于登陆状态，基本上不需要reddit解锁【解锁的话，不登账号就能查看内容】。

还是把钱用在刀刃上较好。5、6、7月份，GPT和Claude我都是双持的【每个月40刀】，其实GPT我已经有想取消订阅的冲动了，Claude目前才是我的刚需，暂时还是继续双持下去吧，用AI辅助学习可比去培训机构便宜多了。

## 更新(2024.07.01)

近期更新了Pixel7手机后，vpn确实已经内置了，但是我发现使用前置代理竟然连不上。
直到前天晚上看甬哥直播后，才知道root过的设备和bootloader解锁的设备可能无法使用Google VPN。详情见[Connect to VPN by Google on your Pixel device](https://support.google.com/pixelphone/answer/2819573)。

![使用Google VPN的要求](https://cdn.sa.net/2024/07/01/8XicSpQrmu2yfaH.webp)

设备但凡更新系统就会掉root，目前我的pixel7手机的bootloader处于解锁状态，原本还想relock一下，但是看了claude的解释后决定还是放弃了，毕竟这部手机里面有太多东西了，重头再来我是一点都不想再折腾了。

![claude有关relock bootloader的解释](https://cdn.sa.net/2024/07/01/Maw3bWhjf4cI5Bp.webp)

## 更新(2024.06.24)

再见Google One VPN For Windows。

![Google One VPN For Windows停用前的最后一连](https://cdn.sa.net/2024/06/24/l6E3zOchPSbaxrU.webp)

![Google One VPN For Windows彻底停用](https://cdn.sa.net/2024/06/24/9wF361y7MVgvSlJ.webp)

## 更新(2024.06.17)

今天趁下午有空，将本篇博文中提及的解决方案以及一些未提及补充的解决方案整理到了Google Sheet上。欢迎阅读本博文的同时，搭配该表格查看。[link](https://docs.google.com/spreadsheets/d/1G3zJ6BPfYlom30NFIH0wgnpj01JCl56SgAFW9zFdspU/edit?usp=sharing)

## 更新(2024.06.16)

前一段时间看甬哥直播，甬哥买了一个Google Pixel8手机，直播中他展示了连接Google One VPN。

Google One VPN停用后，Pixel7以上的手机依然可以继续享受Google One VPN服务。

下图展示我去年买的Pixel7备用机通过前置代理成功连接Google One VPN。

![我去年买的Pixel7备用机通过前置代理成功连接Google One VPN](https://cdn.sa.net/2024/06/16/Qph4YqWDaF5xido.webp)

如果你还想继续用Google One VPN的话，建议直接去拼多多等电商平台买一台Pixel7及以上的手机作为备用机即可【买之前请三思，毕竟pixel系列的手机用起来还是差点意思的】。

上午看到日本家宽供应商—sososo的合租房空位紧俏，冲了一台他家的9.9刀/月的机器。他家的机器是真家宽，而且如果你本地有ipv6地址的话，搭建的代理到中国大陆的延迟还是很漂亮的。目前这台机器用来分流解锁我的香港机器AI服务。他家的主页链接：[sososo日本家宽](https://sales.sososo.io/)

![](https://cdn.sa.net/2024/06/17/FASRHMi5tzKka6x.webp)

## 更新(2024.05.24)

再补充一家卖美国att家宽的商家—[wirecat家的ResNet VPS](https://billing.wirecat.net/order/main/packages/resnet/?group_id=15)

![](https://cdn.sa.net/2024/05/24/ryUObfsixvgQP9m.webp)

最低50刀/月，还是偏贵的。除非开车，不然个人用，很少人能物尽其用，发挥最大价值。

## 更新(2024.05.16)

据说[soladrive](https://www.soladrive.com/support/aff.php?aff=192)和[aait](https://www.aait.io/?aff=QDAQDPFV)这两家是真家宽。

其中soladrive的家宽机器的最低价格为25刀/月，aait的家宽机器的最低价格为299人民币/月，如果没有特殊业务，这个价格一个人还是很难扛住的。如果开个5～10人合租车【专注于流媒体、AI等解锁业务】，还是可以的，前提是10个人不乱搞，拿真家宽仅仅用于解锁，或者诸如paypal养号等对ip质量较高的环境使用。

![soladrive的家宽机器](https://cdn.sa.net/2024/05/16/Wkqwy1jOgVEQYLh.webp)

![aait的家宽机器](https://cdn.sa.net/2024/05/16/s9Rlq1fb6W5egNH.webp)

对于家宽感兴趣的朋友可以看看这个youtuber的介绍视频—[TikTok网络 的顶配选择，AaIT提供真正美国静态住宅IP，真实美国线下宽带，拥有一台美国远程电脑，Amazon、PayPal、ChatGPT网络都不再是问题，客户还可享0开卡费0手续费信用卡福利](https://www.youtube.com/watch?v=kls2v-oW2ac)。

我目前面对Google One VPN即将于今年6月20号取消的应对措施【已经实施】 ：

- ~~Azure学生包里面开美国地区的机器，Azure的动态ip，ipinfo.io均显示Bussiness类型的ip~~

- lisa host的双isp机器

- 艾云的双isp机器

- ipraft的弗吉尼亚州的单ISP ATT机器【isp+business】

- ~~viie的绝版美国家宽机器【稳定性不ok】~~

- ~~zgovps的国际线路机器~~

- ~~littlecreekhosting的伪isp~~

- ~~crunchbits的伪isp~~

以上机器会作为我的xray balance配置的AI服务分流出口。当然有些时候也会怀疑自己是否真的需要这么多的解锁出口？答案肯定是否定的。一个人用的话，一台解锁机足矣。或者你的信条是套了warp就解锁万事大吉的话，也是没问题的，目前ai的风控我见网上说就claude比较严重，其他的基本上都已经放开了。我这边分享出我的解决方案仅仅是提供一个思路，不必效仿我。

## 更新(2024.05.02)

不良林大哥的最新视频提及了一些寻找双isp商家的方法—[【跨境电商】搭建任意地区TikTok专线节点，免拔卡观看TikTok，双isp节点搭建，节点中转提速，寻找纯净IP，解决ip与DNS位置不一致问题](https://youtu.be/du1G5dG1qPQ)，可以参考教程，寻找适合自己的双isp落地商家。

## 更新(2024.04.21，2024.05.08)

![](https://cdn.sa.net/2024/05/08/gqeSCvQWZRcLV64.webp)

Google One VPN年中就下线了【ps：下线时间说改就改，原本是6月10号，现在变成了6月20号】，今年晚些时候竟然表示的是年中。via: [What’s happening to VPN by Google One?](https://support.google.com/googleone/answer/14806901)

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

目前个人使用他家的弗吉尼亚州的单ISP，ATT的机器，非常流畅，推荐指数可以加到4星。

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

由于viie维护=删机重开，故他家的推荐指数变更为零星。

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

- [zgovps]( https://clients.zgovps.com)

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