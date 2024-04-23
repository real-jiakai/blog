---
title: "SSH通过代理连接远程服务器报错Connection_closed_by_foreign_host的解决对策."
date: 2022-10-06T19:27:33+08:00
tags: ['linux']
slug: ssh-connect-by-proxy-error-connection-closed-by-foreign-host-solution
summary: ssh设置代理连接远程服务器报错，经过两小时的摸索，我找到了解决对策。
showtoc: true
---



## 1.故事背景

第一次接触国外vps的时候，就想过我该如何操作，才能加速国外vps的访问。当时看到ssh软件中存在代理这一选项，如xshell会话属性中就存在代理这一选项。当时设置并添加了代理服务器后，双击会话，ssh连接国外的vps并没有成功，反而会得到如下图所示的报错信息。

![xshell一开始使用代理连接搬瓦工vps未成功](https://vip2.loli.net/2022/10/06/5AjmBMCSaDZpJGf.png)

在网上看了很多别人的解决方案，其中有一个方法奏效，就是通过国内的云服务产商，如阿里云，去连接国外的vps，速度会比本地直接使用ssh工具(不使用代理)连接快很多。

我也亲自实践了一下，在termius这款ssh软件中设置中间转发的服务器为阿里云的服务器，再次连接国外的vps，很快就连接上了。

带着好奇，我开始搜索ssh使用代理连接国外vps的相关资料，并且还在tg群里问了群友，后来发现自己ssh软件中的设置并没有问题，但群友使用这样的设置，能通过ssh代理连接上国外的vps，而我的却不行。

但当我将代理结点换成自建结点的时候，也成功连接上了国外的vps。如果采用jc的结点，则还是报上图所示的错误。



## 2.解决对策

首先确保在ssh软件中设置好相应的代理。

更改国外vps的ssh默认端口号`22`，将其改为如`23456`这样的端口。

```shell
# ubuntu更改ssh端口的流程
# 用vim编辑器打开ssh的配置文件
vi /etc/ssh/sshd_config

# 命令模式下，输入G(大写)，跳转至文件的最后一行
# 将默认的ssh端口22更改为23456
PasswordAuthentication yes
PermitRootLogin yes
+ Port 23456

# 重启ssh服务
/etc/init.d/ssh restart
```

接着再次使用jc的结点，就能成功连接上国外的vps了。



## 3.原因概述

因为jc大多都会存在审计，即可能会屏蔽掉ssh协议。这样你就无法使用代理，连接到国外vps的`22`端口了。

> 为什么大多jc会屏蔽掉ssh协议？

![jc会屏蔽掉ssh协议原因一](https://vip2.loli.net/2022/10/06/QHnjU9pqyEfXko7.png)

![jc会屏蔽掉ssh协议原因二](https://vip2.loli.net/2022/10/06/gySPfXzAYVFdn9u.png)

简单来说，就是这个端口可能会被滥用，一旦滥用会给产商造成麻烦。如大多数云服务器产商都屏蔽掉了SMTP的`25`端口，以防有人利用该端口发送垃圾邮件。

> 为什么使用阿里云这类国内的云服务厂商的机子连接国外的vps，速度会比你通过ssh软件(不使用代理)来得快？

![使用国内vps连接国外vps比自己直连国外vps快的原因](https://vip2.loli.net/2022/10/06/DScJHjIoWXhZ5Mq.png)

阿里云连接到你国外vps的线路比你直连到国外vps的线路更优。