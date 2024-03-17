---
title: "关于Ikihost换ip风波的经验分享"
date: 2024-03-17T15:01:23+08:00
tags: ["vps"]
slug: "experience-sharing-on-ikihost-ip-change-ordeal"
summary: 分享自己从Ikihost换ip风波中获取的经验。
showtoc: true
---

## 事件经过

前几天收到ikihost vps供应商的邮件，说过些日子要维护换ip。当时我也没将这件事放在心上，因为换ip后，我需要操作的仅仅是更改一下dns解析记录。

![Ikihost 宣告ip更换完成](https://cdn.sa.net/2024/03/17/FpD3I7AGEZHVdfL.png)

昨天收到Ikihost宣告ip更换完成的通知邮件，于是我第一时间去cloudflare的dns解析处，搜索旧的ip地址，将搜索出来的dns解析记录的记录值更改为新的ip地址。

等我操作完成后，发现网站都宕机了，用ssh连接也连不上。登录商家的virtfusion vps控制台，vps还运行着，于是我使用vnc登录进去查看，结果映入眼帘的是下图所示的报错信息：

![vps报错信息](https://cdn.sa.net/2024/03/17/i4NGxJTMoKeHE8X.webp)

将图片发送给AI工具以及加上自己的搜索，没有找到自己可以尝试的修复方法，于是我便开工单，以期获取服务支持。

开工单的同时，我也着手准备将里面的数据给拿出来。
只可惜，找遍了virtfusion vps控制台愣是没有找到救援模式的按钮。

昨天和客服battle得到的回复是我能通过插入iso镜像，使用救援模式随时拿出我的任何数据。

![客服的回复](https://cdn.sa.net/2024/03/17/h3iNPLyZOmjnwsS.webp)

可是我发现商家提供的virtfusion面板，并没有提供预制的iso镜像供我使用救援模式来拿出数据，需要我自定义iso镜像。

![商家提供的virtfusion面板，并没有提供预制的iso镜像供我使用救援模式来拿出数据](https://cdn.sa.net/2024/03/17/MC2Hq7AoxJOSbdT.webp)

于是昨天和客服的最后一段回复表达了我会耐心等待，让他们慢慢修的意思。

![回复表达了我会耐心等待，让他们慢慢修](https://cdn.sa.net/2024/03/17/xDkUM95QBOmarz2.webp)

今天上午，一时心血来潮，准备设置自定义iso，以救援模式，进入文件系统，来取出我的四个站点的文件。以下是我今天折腾之路的经验分享。

## 救援模式取文件

设置自定义CD/DVD，链接填写：`https://gemmei.ftp.acc.umu.se/debian-cd/current/amd64/iso-cd/debian-12.5.0-amd64-netinst.iso`，点击Insert。因为这台vps的操作系统为debian 12，因此选择debian 12的CD镜像。

启动顺序选择CD/DVD，点击Apply，接着关机重启。

![自定义CD/DVD-ROM。调整启动顺序](https://cdn.sa.net/2024/03/17/ByxChtvYN43knKA.webp)

打开vnc界面。选择`Advanced options`。

![选择`Advanced options`](https://cdn.sa.net/2024/03/17/VaLF2uEXgt1rcS9.webp)

下一步的界面，选择`Rescue mode`。

后续选择手动配置网络的相关信息，可以去vps的virtfusion面板的network页面获取。

![选择手动配置网络的相关信息，可以去vps的virtfusion面板的network页面获取](https://cdn.sa.net/2024/03/17/DePYJHLdifXQvyV.webp)

接着选择`/dev/vda1`作为文件系统。

![选择`/dev/vda1`作为文件系统](https://cdn.sa.net/2024/03/17/osqfXy5Ag2BLkDz.webp)

选择`Excute a shell in /dev/vda1`选项。

![选择`Excute a shell in /dev/vda1`选项](https://cdn.sa.net/2024/03/17/V6dEbstvTYeyBp1.webp)

成功进入文件系统。

![成功进入文件系统](https://cdn.sa.net/2024/03/17/fzgmxo4Gj5dXSqp.webp)

由于配置好了网络，此时是能接入互联网的。

![由于配置好了网络，此时是能接入互联网的](https://cdn.sa.net/2024/03/17/9bEBOranjqhD5R1.webp)

使用rsync命令，将文件同步到远程服务器。样例如下：

```bash
# 使用rsync命令将本地的/opt/file_share/目录同步到远程服务器的/opt目录
# -a, --archive               归档模式，等于-rlptgoD (没有 -H)，保留文件属性
# -v, --verbose               详细模式输出
# -z, --compress              在传输时压缩数据
# -P                          等于--partial --progress，显示传输进度，允许部分文件传输
# /opt/file_share/            本地目录路径，要同步的源目录
# root@ip_address:/opt        目标目录路径，格式为 用户名@服务器IP地址:目标目录
# 如果远程vps的ssh端口不是22，则需要加上-e "ssh -p ssh_port"
rsync -avzP /opt/file_share/ root@ip_address:/opt
```

在远程服务器，成功让四个站点上线后，那就跟ikihost好好告个别吧！机器性能不差，但是这次事故让我有些忌惮，再加上手头服务器资源充裕，这台Ikihost不会再续费了！

![rm -rf /*伺候](https://cdn.sa.net/2024/03/17/Xc4zZPd8fSgQCnU.webp)

离线了将近两天，还没修好。商家修复效率有待提高。

![离线了将近两天，还没修好。商家修复效率有待提高](https://cdn.sa.net/2024/03/17/IECQ4NTOrx7BwHV.webp)

删除哪吒面板的Ikihost相关的信息。

![删除哪吒面板的Ikihost相关的信息](https://cdn.sa.net/2024/03/17/ez4Sr1bgC8wqRQM.webp)

今天客服还没回复过，这个工单效率还是堪忧的，四个站点目前悉数转移至了racknerd的黑五大鸡上。

![客服工单效率堪忧](https://cdn.sa.net/2024/03/17/8KvfdsEHDYTgrIW.webp)

racknerd 23黑五大鸡上原本就装了一个cyberpanel，今天简单尝鲜了一下cyberpanel，效果还不错，特别是openlitespeed这一web服务器的auto index功能，展示文件列表的效果深得我心，有caddy的file_server的简约美。

![openlitespeed这一web服务器的auto index功能，展示文件列表的效果深得我心](https://cdn.sa.net/2024/03/17/eUplBEyG3iFSDAV.webp)


## 总结

这次事件进一步提醒我要做好服务器相关文件的备份工作，今天通过vnc救援模式成功取回文件，如果未来某天由于vps供应商的拉跨，导致文件无法找回，那就亏大了。

还有就是重要的文件或者站点，一定要选择靠谱的vps供应商进行托管，当然我并不是说Ikihost就完全不靠谱，只是从我的个人体验来看，Ikihost离靠谱还有一些距离。工单速度，服务质量，这些都是vps供应商的立身之本，做得不够好，就不能称之为靠谱。