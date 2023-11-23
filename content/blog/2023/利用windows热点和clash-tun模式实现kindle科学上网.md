---
title: "利用windows热点和clash-tun模式实现kindle科学上网"
date: 2023-09-22T12:18:22+08:00
tags: ['kindle','科学上网']
slug: "using-windows-hotspot-and-clash-tun-for-kindle-internet-access"
summary: 介绍利用windows热点和clash-tun模式实现kindle科学上网的方法。
showtoc: true
---

## 成果展示

- kindle成功实现科学上网

![kindle成功实现科学上网](https://vip2.loli.io/2023/09/22/AaFxTH2cnsWhlpy.webp)

- andriod、ipad均无需进行任何设置连上google one vpn

![andriod无需进行任何设置连上google one vpn](https://vip2.loli.io/2023/09/22/NM1QCIXHkKUj2Su.webp)

![ipad无需进行任何设置连上google one vpn](https://vip2.loli.io/2023/09/22/36bDAWM8hLP2olk.webp)

## 故事介绍

我的这台kindle是paper white第10代。以前要想实现kindle的科学上网，只能在寒暑假，自己在家时搭配软路由中的代理软件，如openclash实现。

在校园网环境下，最多只能连上国内的网络；如果自己打开手机热点再搭配上every proxy这类软件，以期想实现kindle设置代理，来科学上网，在我这台kindle上也是不现实的，因为我的kindle wifi中没有设置代理ip和端口的选项。

直到昨天晚上，我在网上搜索相关资料时，无意间看到一条评论，按照评论的方法操作后，成功实现了“成果展示”中的效果。

我这台windows电脑是年初刚买的，一直都没怎么用过。今年9月开学时，我才开始使用。

昨天晚上，我想实现windows作为前置代理，安卓手机连接windows，连上google one vpn。于是按照上半年的那一套路：开启windows的热点，安卓手机连接windows分享的热点，并且在安卓手机上设置热点的代理选项。但是我发现安卓手机连设置了windows局域网ip和clash的7890端口，但并不能科学上网。

经过一番搜索，我按照clash for windows仓库下的这个issue-[WIN 10 配置好了CLASH 打开ALLOW LAN 为什么不能局域上网 求大神远程协助！！我要连电视盒子 #831](https://github.com/Fndroid/clash_for_windows_pkg/issues/831)中提及的方法重新安装了tun mode，接着成功实现了安卓手机利用windows热点共享出来的clash流量，连上google one vpn。

但是在搜索过程中，我发现了如下这条评论。[via](https://zhuanlan.zhihu.com/p/337430556)

![网友评论](https://vip2.loli.io/2023/09/22/nk7v24OZwzGfeFi.webp)


按照他的说明，一步一步操作完后，再次打开windows热点，当我安卓手机连上该热点后，我发现直接能科学上网；kindle连接上该热点后（在我的例子中，我需要将分享的热点频段设置为2.4GHz，因为我的kindle设备无法搜索到5GHz的wifi信号），也能直接科学上网。

![windows分享的热点设置kindle能检索到的wifi频段](https://vip2.loli.io/2023/09/22/fJ9nNXCSyQ2iODT.webp)

当然，如果你开通了google one的话，按照上述操作后，也能轻松连接上google one vpn。

关于这么操作的原理，可以见[GPT4的分析](https://chat.openai.com/share/0f7c9947-c897-406a-aea2-3e37129a43b8)。