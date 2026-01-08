---
title: "chika登陆器在windows server上闪退的解决方案"
date: 2023-06-17T15:24:10+08:00
tags: ['游戏']
slug: "fix-chika-crash-on-windows-server"
summary: 分享chika登陆器在windows server上闪退的解决方案。
showtoc: false
---

从今年开始，赛尔号一些繁琐的日常挂机、巅峰刷币等任务，我都放到了云端执行。本地电脑只会做每周更新的任务和剧情，或者有空时偶尔打几把巅峰。

在过去的几个月中，我一开始在国内的轻云挂机宝（2核处理器，1GB内存，50GB的硬盘，无限流量）上执行这些任务，但是由于轻云挂机宝的windows机器是win7的缘故，chika登陆器根本打不开，仅仅能打开刷日常任务的ruby登陆器。因此在那段时间里面巅峰刷币依旧只能在本地进行。

![ruby登陆器成功刷上日常](https://image.gujiakai.top/i/2023/06/17/r553lo-0.webp)

后来发现阿里云能免费体验3个月的无影云电脑（4核处理器，8GB内容，130GB的硬盘）。

![阿里云无影云电脑免费试用计划](https://image.gujiakai.top/i/2023/06/17/r8o0hp-0.webp)

在上面的游戏体验就丝滑多了。能打开挂巅峰刷币的chika以及刷日常的ruby登陆器。

![无影云电脑玩赛尔号](https://image.gujiakai.top/i/2023/06/17/raegao-0.webp)

但是阿里云的无影云电脑免费试用期过了以后，续费的价格会很贵，于是我又开始寻找合适的小鸡。

最终我在腾讯云入了3年的轻量（2核处理器，2GB的内存，50GB的硬盘，月流量300GB）。用小程序新注册了一个腾讯云账号，花了396￥，购买了3年期的腾讯云轻量（618活动机），系统选择的是windows server2022。

![腾讯云轻量](https://image.gujiakai.top/i/2023/06/17/rbts2c-0.webp)

但是我在上面折腾时，发现chika登陆器打不开。具体的情况就是双击登陆器的.exe文件后，应用在任务栏一闪而过。

跟chatgpt4聊了几个回合后，按照chatgpt4的指引，我在windows server中禁用数据执行保护(DEP)对于赛尔号登陆器exe文件的影响，最终成功打开了chika登录器和其他的登陆器。

![腾讯云轻量成功打开chika登陆器](https://image.gujiakai.top/i/2023/06/17/rea0vd-0.webp)

聊天记录地址：https://chat.openai.com/share/152c4d9a-e7bb-4514-88c4-5b5a3a9185d

当然选择腾讯云务必将监控卸载或者dd一下系统。

卸载监控的笔记地址：https://vps.gujiakai.top/vps/tencent.html