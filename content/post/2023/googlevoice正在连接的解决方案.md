---
title: "Google voice正在连接的解决方案"
date: 2023-03-14T09:08:15+08:00
tags: ["google"]
slug: "the-solution-of-google-voice-is-connecting"
summary: 介绍Google voice正在连接的解决方案
---



近期Google voice IFTTT的保号方法开始收费。[via](https://www.zaihua.net/512.html)

![ifttt keep google voice active pro](https://vip2.loli.io/2023/03/14/pajIDBne3y6bkcC.webp)

今天早上查看v站帖子看到一条[google voice 互相保活](https://www.v2ex.com/t/923496)。

其中一条网友的留言引起了我的注意。

![v站网友留言](https://vip2.loli.io/2023/03/14/nBwui7VExPh2dGL.webp)

于是我便开始了保号操作。在打电话这一块，可以参考v站的这条帖子：[GV 保号用到的一些美国号码](https://www.v2ex.com/t/655153)。

我选择拨打微软客服进行电话保号，结果我发现在chrome浏览器上一直显示正在连接的状态。在网上搜索了一圈没有找到解决方案。

![google voice正在连接](https://vip2.loli.io/2023/03/14/E7TULc9Aqrvf8mh.webp)

于是我在自己的安卓机上尝试拨打微软客服的gv号，结果拨通了。我再次来到pc端，这次换用edge浏览器，登录自己的google voice账号后，拨打微软客服的gv号，也能打通，这时我才意识到应该是chrome浏览器的某个插件导致了gv拨号失败的情况，想起前一阵子看了不良林博主的DNS泄露相关视频，装了一个名为WebRTC Control的chrome插件，

抱着试一试的心态，将其禁用后，再次在chrome浏览器的gv界面拨打微软客服，成功拨通对方。

![webrtc control](https://vip2.loli.io/2023/03/14/NuxOakBWCUIs8DY.webp)

至于为什么禁用了webrtc功能会导致google voice拨打不通的原因，可见new bing关于此的回复。

> TL;DR
>
> google voice使用 webrtc 来实现端到端之间音频和视频的实时通信。

![new bing dial](https://vip2.loli.io/2023/03/14/gW7NhpxZEQ6VdLt.webp)

事后，在网上搜索相关的内容，发现前人也遇到过这种问题，如：

- [WebRTC Leak Prevent导致Google Voice网页版无法使用](https://www.52yahuan.com/google-voice.html)
- [disable-webrtc blocks google voice](https://github.com/ChrisAntaki/disable-webrtc-firefox/issues/27)
