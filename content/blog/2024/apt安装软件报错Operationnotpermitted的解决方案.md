---
title: "apt安装软件报错Operation not permitted的解决方案"
date: 2024-01-17T17:06:29+08:00
tags: ["linux"]
slug: "fix-apt-install-operation-not-permitted-error"
summary: 介绍apt安装软件报错Operation not permitted的解决方案。
showtoc: false
---

期末考试考完后，就可以随时随地折腾vps了。下午原本在写vps的测评文章，但其中一台vps在我运行三网回程测试脚本以及AI平台解锁检测脚本时，报了如下错误：

![三网回程脚本显示无法将可执行文件移动到`/usr/bin`文件夹下](https://cdn.sa.net/2024/01/17/72UruNm8Y4cxwsB.webp)

三网回程脚本显示无法将可执行文件移动到`/usr/bin`文件夹下。

![AI平台解锁检测脚本报错jq命令找不到](https://cdn.sa.net/2024/01/17/C2a7pTc5QnbAsUR.webp)

AI平台解锁检测脚本报错jq命令找不到。

于是我准备使用`apt install jq`命令来安装jq，结果报了如下错误：

![安装jq发现操作`/usr/bin`文件夹的操作不被允许](https://cdn.sa.net/2024/01/17/28fHQPR6VuN51q3.webp)

又是操作`/usr/bin`文件夹的操作不被允许。

查看`/usr/bin`文件夹的权限，发现没有w(write)写的权限。

![查看`/usr/bin`文件夹的权限](https://cdn.sa.net/2024/01/17/TgItlM4OvCDYx5q.webp)

我将手头的所有vps进行排查，最后发现共有3台vps存在同样的问题。

GPT的3小时40条被我全部消耗光了，在搜索引擎中找寻了很多网页，但是始终没有得到我想要的结果。

中间排错的过程中，我甚至想到上个月Debian的一个Bug，于是又将三台vps的内核全部升级到最新版本，但是依旧没有解决我遇到的问题。

![上个月Debian的一个Bug](https://cdn.sa.net/2024/01/17/J7bS9qes348W6OM.webp)

正当我一筹莫展之际，我发现这三台vps都装了宝塔面板开心版，

宝塔面板开心版破解了宝塔的付费插件，所以我安装了一堆插件。没准是这些插件搞得鬼。

在一番排查后，我最终找到了导致无法操作`/usr/bin`文件夹的罪魁祸首插件—一款名为宝塔系统加固的插件。

![罪魁祸首插件—宝塔系统加固](https://cdn.sa.net/2024/01/17/rKZ5tFz2IoGCyEU.webp)

其中的关键目录加固，将`/usr/bin`目录直接变为只读了。

![关键目录加固将`/usr/bin`目录直接变为只读](https://cdn.sa.net/2024/01/17/1FzK9Q2ZoqJLapi.webp)

将`/usr/bin`文件夹的加固开关关闭后。

![关闭`/usr/bin`文件夹的加固开关](https://cdn.sa.net/2024/01/17/d7hVXyr8oF4MtCJ.webp)


再次执行三网回程脚本和AI平台解锁检测脚本，之前的错误消失了。

虽然这vps不是扶墙机器，但是可以发现谷歌送中了，mjj多的地方，谷歌送中是常态。有些人贪谷歌送中，油管没广告，让邻居遭殃，这种非蠢即坏的mjj真让人不知道说啥。

![三网回程脚本顺利执行](https://cdn.sa.net/2024/01/17/E3PR8m7IVc2Uu1k.webp)

![AI平台解锁检测脚本顺利执行](https://cdn.sa.net/2024/01/17/k6RGIXECAL18dBK.webp)

其实，最好的解决方案就是将这个加固插件给卸载了，不然以后没准还会报一些莫名其妙的错误。