---
title: "hxservers搭建google one vpn节点教程"
date: 2023-10-04T18:54:34+08:00
tags: ['vps','google one vpn']
slug: "hxservers-google-one-node-setup-guide"
summary: 介绍hxservers服务器搭建google one vpn节点的方法。
showtoc: true
---

## 更新(2023.11.27)

hxservers商家已经跑路。paypal争议，成功拿到所有钱款。

![paypal击碎hxservers](https://vip2.loli.net/2023/11/28/uQaqb8pPtS67weU.webp)

## 故事背景

昨天晚上看药水哥直播看困了，想直接睡觉了，但是转念又想已经好久没有关注vps的相关讯息了。于是我打开我的inoreader里面的vps板块，以及tg群组中的vps群组。

看到了最近新开张的商家hxservers正在搞万圣节活动。优惠力度为半价（结账时使用优惠码：SPOOKY，直接半价，活动一直持续到2023年的10月31号，这是循环优惠）。其中的一款vps配置得到了我的青睐。

![hxservers套餐列表](https://vip2.loli.net/2023/10/04/HGtswIrAfimBlOW.webp)

我之前用的一款window vps由商家cheapwindowsvps提供，使用lowendtalk的优惠码半价后，是5.5刀/月。配置如下：

![我原本的cheapwindowsvps的windows配置](https://vip2.loli.net/2023/10/04/ydGUwoKfrMt2aP5.webp)

两款都是无限流量。配置相差无几，主要区别是hxservers的处理器是AMD EPYC-Milan Processor 3,39GHz(2 processors)，而cheapwindowsvps的处理器是Intel Xeon E3-12xx v2(Lvy BRIDGE,ibrs) 2.80GHz。

经过chatgpt4的点播，我意识到hxservers的处理器更强。再加上上个月我听nodeseek和hostloc上的水友讲hxservers的机器性能无敌，线路拉跨。我对hxservers心动了。更低的价格，更高的配置是每个mjj的梦想。

![chatgpt4的解释](https://vip2.loli.net/2023/10/04/yA2q8QHlMnwLVvh.webp)

cheapwindowsvps的机器虽然能用，但是rdp远程连接时卡顿严重。废话不多说，直接paypal付款。付完款，拿到机器已经是将近晚上11点了。我准备第二天在上面开启google one vpn。接着用xray搭建一个代理节点，代理节点享用google one vpn的流量。

## 折腾报错之路

到了第二天（也就是今天，2023年10月4号），我早上早早地用rdp远程连接了该windows server。下载并安装好google one vpn，当我满怀期待地打开connect按钮，结果等来的却是一直disconnect并重连。

![windows server上google one vpn连接失败](https://vip2.loli.net/2023/10/04/CT5S1qNzAJ6rW8U.webp)

在此期间，我尝试关闭防火墙，问gpt4和new bing，问google one tg群群友......都没有得到令我满意的答案。我为此重装了好多次系统，结果发现商家提供的仅有的windows server 2019镜像和windows server 2022镜像均无法成功连接google one vpn。

有网友怀疑ip不在google one vpn的支持地区。为此我还特意搭建一个节点，以这个节点作为前置，我的安卓手机成功连接上google one vpn，至此我才笃定一定是windows server的问题。

于是我转变思路，将hxservers的vps换成linux，接着准备dd一个纯净的windows系统。

下午，我一开始观看了油管博主使用cxthhhhh.com提供的dd脚本 linux dd windows的教程。照此操作，但是发现无法成功dd。

后来研究生团队喊我去搞ppt，下午就耽误了。

## 解决方案

到了晚上，我在网上搜索了dd windows脚本，找到了这个开源项目—[leitbogioro/Tools](https://github.com/leitbogioro/Tools)，
使用里面的dd脚本。

```bash
# 下载dd windows工具，并赋予执行权限
wget --no-check-certificate -qO InstallNET.sh 'https://raw.githubusercontent.com/leitbogioro/Tools/master/Linux_reinstall/InstallNET.sh' && chmod a+x InstallNET.sh
# dd windows 2022
bash InstallNET.sh -dd "https://dl.lamp.sh/vhd/en-us_win2022.xz"
```

接着再reboot机器。大约过了5~10分钟左右，我打开商家后台的vnc，直接看到windows的待机页面。我有预感，我快成功了。

不出所料，在秋水逸冰大佬的windows镜像的加持下，成功连接上google one vpn。

![成功连接上google one vpn](https://vip2.loli.net/2023/10/04/CDQ2sSr4pMJxHGo.webp)

这一刻我觉得非常幸福，折腾路上攻克拦路虎真开心。

搭建节点就非常容易了，服务端使用xray，客户端使用v2rayN，很轻松就能实现代理的搭建。如果这一部分有疑问可以在youtube搜不良林的windows搭建节点教程，他里面使用的是v2ray，xray和x2ray的搭建流程大差不差。

最后还需要修改以太网的网络适配器为最低优先级，以使得google one vpn的优先级大于以太网，这样子xray提供的代理，使用的就是google one vpn的流量了。具体教程可见google one tg群网友的解答—[via](https://t.me/googleonevpn/15907)。

![成功使用上google one vpn的节点](https://vip2.loli.net/2023/10/04/cah5tHiUX84nGls.webp)

我主要拿google one vpn所在的windows server作为落地机，用来分流chatgpt和new bing这类流量。一般情况下不使用直连google one vpn的节点。

> 注：dd完windows，建议立马修改windows server rdp的默认端口3389，以及windows镜像的默认密码：Teddysun.com。我10月8号晚上远程连接登录上我dd的windows server，发现桌面多了一堆文件，名字为sql，tcp之类，并且还有一个窗口在下载东西。我当时意识到情况不对，这台系统应该是被黑了，我立马重置了系统，重新dd。并且检查了原本在hxserver windows上登陆过的谷歌账号，登出所有设备。

