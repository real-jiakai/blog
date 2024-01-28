---
title: "Lightsail迁移至ipv6 only实例过程记录"
date: 2024-01-28T18:29:40+08:00
tags: ["vps","lightsail"]
slug: "migrating-to-ipv6-only-instance-on-lightsail"
summary: 记录Lightsail迁移至ipv6 only实例过程。
showtoc: true
---

aws lightsail即将涨价，对于ipv6 only的机器，依旧是月付3.5刀。今天下午有空，迁移了我的lightsail实例至ipv6 only的机型。特此记录一下。

![aws lightsail即将涨价](https://cdn.sa.net/2024/01/28/boYyrR541mcPqFS.webp)

## 1、迁移步骤

在原本的lightsail实例页面中创建快照。

![在原本的lightsail实例页面中创建快照](https://cdn.sa.net/2024/01/28/DHpevcA2goFzU9x.webp)

接着根据快照创建新的ipv6 only的实例。

![根据快照创建新的ipv6 only的实例](https://cdn.sa.net/2024/01/28/aEjquHp1N9WwCev.webp)

## 2、迁移过程中遇到的问题

### 2.1、SSH连接

迁移到新的ipv6 only的实例后，用ssh连接，需要确保本地网络有ipv6地址。

如果本地网络没有ipv6地址，只有ipv4地址，则需要通过诸如中间加一台跳板机（含ipv4+ipv6双栈）来进行连接。

![ssh连接ipv6 only的机器，需要本地网络有ipv6地址](https://cdn.sa.net/2024/01/28/PnZIVJ8YTurWg2S.webp)

由于我家里面的wifi网络中，在光猫和路由器之间夹着一台软路由，在软路由中我禁用了ipv6地址，所以连接到该网络中的我的电脑也不具备ipv6地址。

我的解决方案：

- 电脑连接手机数据热点，手机数据热点分享的网络包含ipv6地址，此时ssh连接，可以连接上。

- 采用中转服务，如nnr，在nnr中转服务管理后台添加一条转发规则，接着采用nnr提供的ip地址:端口来进行ssh连接。【因为nnr的中转机器是ipv4+ipv6双栈机，我本地连接nnr提供的中转机器，nnr的中转机器来访问我的lightsail ipv6 only实例。】

![在nnr中转服务管理后台添加一条转发规则](https://cdn.sa.net/2024/01/28/BcDNvTRUzJI41Pi.webp)

理清了思路，实操时，我却遇到了麻烦，ssh连接一直连不上，而且全球各地ping我的lightsail ipv6 only实例的ipv6地址，都ping不通【我已经在lightsail管理界面的联网中放行了相应的端口，ICMP、SSH端口均已经放行】

![在lightsail ipv6 only管理界面的联网中放行了相应的端口](https://cdn.sa.net/2024/01/28/91cOTVSBy8vnQYL.webp)

使用上述的两种解决方案都失败了，就在我一筹莫展之际，我想起上半年禁用了lightsail的ipv6。当时看到网上一个帖子说优化线路的商家一般提供的优化线路仅针对v4优化，v6一般没优化，于是我当时使用了以下的一键脚本，禁用了lightsail上的ipv6。

```bash
echo -e "net.ipv6.conf.all.disable_ipv6=1\nnet.ipv6.conf.default.disable_ipv6=1\nnet.ipv6.conf.lo.disable_ipv6=1" >> /etc/sysctl.conf
```

禁用了ipv6，当然无法连接了。这时只能先在原本的lightsail【ipv4+ipv6双栈机】上开启ipv6，再重新创建快照，再根据快照来新建ipv6 only实例。

![禁用ipv6导致ssh无法连接](https://cdn.sa.net/2024/01/28/WC5UeMHEFXR4bKV.webp)

启用ipv6功能【将sysctl.conf里面禁用ipv6的参数更改为0或者删除掉这些参数】后，重新创建快照。用新创建出来的快照新建出来的ipv6 only实例，可以用上述提及的两种解决方案成功连接上。

### 2.2、更改cloudflare的dns记录

将原本的A记录更改为AAAA记录，记录值更新为新的ipv6 only lightsail机器的ipv6地址，清空cloudflare的缓存，稍等片刻访问域名，结果发现web server is down。

![更改了dns解析，却发现web server is down](https://cdn.sa.net/2024/01/28/dJirjweo5Vbft97.webp)

一开始我以为是缓存的缘故，于是我去吃了个晚饭，以及洗了个澡，返回电脑桌前，再次访问，依旧是这个报错。

这时得去问问GPT，获取与之相关的思路了。

![GPT给我提供思路](https://cdn.sa.net/2024/01/28/6lZ2epsJx3bCzDH.webp)

其中提及到的服务器端口配置这一点，我觉得非常在理，因为当时我手搓一个nginx反向代理本地端口的配置文件时，监听的仅仅是ipv4地址上的80和443端口，并没有监听ipv6地址上的80和443端口。根据GPT的提示，我在原本配置文件的server块中添加了监听ipv6地址上的80和443端口的字段：

- listen [::]:80;

- listen [::]:443 ssl http2;

重载nginx后再次访问域名，能成功获取到域名所对应的服务。

![添加了nginx监听ipv6地址上的80和443端口，能成功获取rssbridge服务](https://cdn.sa.net/2024/01/28/E2MtL9bHRBGPgOs.webp)


### 2.3、增强ipv4的访问能力

使用warp脚本，给vps添加一个ipv4出栈。

```bash
wget -N https://gitlab.com/fscarmen/warp/-/raw/main/menu.sh && bash menu.sh
```

![使用warp脚本添加一个ipv4出栈](https://cdn.sa.net/2024/01/28/LXmZgzPvVIbfDNn.webp)

或者可以使用nat64服务，更改ipv6 only vps的dns服务器为nat64页面提供的dns64服务器地址。

![nat64服务，也可以增强ipv6 only机器的ipv4访问能力](https://cdn.sa.net/2024/01/28/OVbXdRqEc2B3nKs.webp)

两种方法选择其一即可，我使用的是warp脚本添加一个ipv4出栈的方法来增强ipv6 only lightsail访问ipv4地址的能力。

## 3、总结

迁移完，不要忘记删除快照和之前的ipv4+ipv6双栈机器！

lightsail原先的3.5刀套餐为1vcpu，512MB内存，20GB的硬盘，ipv4+ipv6双栈。

即将涨价后的5刀套餐为2vcpu，512MB内存，20GB的硬盘，ipv4+ipv6双栈，新的3.5刀套餐为2vcpu，512MB内存，20GB的硬盘，ipv6 only单栈。

![lightsail的新套餐价格提升的同时，也带来了配置上的提升](https://cdn.sa.net/2024/01/28/y1c7Fr54oIdpqJQ.webp)

新配置的vps实例在cpu核心数、线程数、cpu频率和指令集支持方面都有所提升，值得点赞。aws对ipv4收费的措施，必将进一步推动ipv6的普及，没准还会引来同行的效仿。

之前开lightsail看中的是它重启机器自动更换ipv4地址的优秀特性。现在支持我继续续费的动力在于我的aws抵扣券还没用完，没准等我耗尽了折扣券，lightsail就不再续费了。

![我的aws折扣券还没用完，是我继续续费lightsail的动力](https://cdn.sa.net/2024/01/28/M8cB4ZjnQ3LPEHG.webp)

就先写这么多，如果后续折腾时有新的感悟，再来补充。