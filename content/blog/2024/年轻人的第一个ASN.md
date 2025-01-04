---
title: "年轻人的第一个ASN"
date: 2024-06-04T15:36:56+08:00
tags: ["ASN"]
slug: "the-first-asn-of-young-people"
summary: 介绍自己获取ASN并配置该ASN对应的ipv6地址的经历。
showtoc: true
---

## 更新(2024.12.24)

平安夜收到一封有关ASN的邮件，直接让GPT写了一封回信，选择放弃ASN资源。再见AS214948。

![GPT-4o有关ASN邮件的解释](https://cdn.sa.net/2024/12/24/lGXEAzIcpetrkPn.webp)

![有关ASN邮件的回信](https://cdn.sa.net/2024/12/24/eO6j3UXwPqvLmRA.webp)

![再见AS214948](https://cdn.sa.net/2024/12/24/Zuk2owUXnO56NYx.webp)

## 更新(2024.06.11)

![c1vhosting灵车ASN涨价通知](https://cdn.sa.net/2024/06/11/xrbHIZYtmNzUEuC.webp)

哈哈哈，c1vhosting灵车还是发来了ASN和ipv6地址段段涨价通知。可以预计以后博主们写“年轻人的第一个ASN”的成本会越来越大。😂

--- 

下午原本想润色综述论文的，但奈何GPT崩了，于是乎，我便开始着手写这篇早已酝酿很久了的博文。

## 背景介绍

今年3月份，看到意大利灵车商家—c1vhosting推出了一个ASN &IPv6 /48 Subnet的套餐。

![c1vhosting灵车商家的ASN套餐](https://cdn.sa.net/2024/06/04/q9LPYkfzFjigAeN.webp)


原本我是不想折腾ASN的，但是看到这白菜价，于是赶紧下了一单。


## 历经的过程

当时参考了nodeseek站点的一些教程贴以及互联网上的资源。如：

- [ASN 注册指南 - RIPE NCC 篇 [教程向]](https://www.nodeseek.com/post-16272-1)

进行了以下一些流程

- 签合同

- 个人护照信息

![注册ASN所需的部分文件](https://cdn.sa.net/2024/06/04/jZGMlBtc1OFLnm7.webp)

- 创建ripe数据

- ......

当时还需要有两个及以上的 Peering Partner，这个商家帮我解决了。【当时为了确保ASN分配的ipv6地址能正常用，还特意买了一台他家的灵车vps，申请ASN后的相关配置全部在这台vps上进行】

邮件将相关信息发送出去后，接下来就是耐心等待了。

商家帮我进行ASN资源申请，分配ipv6子网时，还让我验证了一下护照信息。

![RIPE分配ASN验证个人信息](https://cdn.sa.net/2024/06/04/yQhpSRw29K7NBWr.webp)

最终，成功获取到了ASN（AS214948）。

![成功获取ASN](https://cdn.sa.net/2024/06/04/HWNvSnKAlG45ytX.webp)

## 使用bird2配置BGP会话

部分配置可以见我当时写的一份[bird2配置ASN笔记](https://discuz.gujiakai.top/forum.php?mod=viewthread&tid=29)，可能并不适合你的场景，或者存在疏漏的地方。

其实我自己配置的过程也挺懵逼的。当BGP显示established以后，准备配置一下分配到的ASN对应的ipv6地址。

当时按照网上的博客创建了dummy0虚拟接口，但是使用dummy0虚拟接口获取ip地址`curl --interface dummy0 ip.gs`一直失败。

和GPT-4o也对话了很多时间，但就是死活无法从dummy0虚拟接口访问互联网。

5月8号，拿到ASN的，一直和客服battle到6月2号，到最后我实在受不了了，直接把vps的账号、密码全都发给了c1vhosting的客服，紧接着，第二天客服说解决了dummy0虚拟接口无法访问互联网的问题。

从history命令追踪客服的操作记录发现他啥都没动，只不过从dummy0虚拟接口访问互联网，指定的网卡，不是名称dummy0，而是dummy0所分配到的ipv6地址。

搞笑的是，客服说是他们那边的问题，我这边的一切正常。

![和c1vhosting客服的邮件截图](https://cdn.sa.net/2024/06/04/xOWXlIKTPaUGhY8.webp)

虽然我也想实现通过--interface dummy0，而不是分配所得到的ipv6地址去访问互联网，但是一直都以失败而告终，默认路由啥的早添加了。

![claude3的解释](https://cdn.sa.net/2024/06/04/BRldmASF6w2siKk.webp)

目前想要使用我自己的ASN来上网需要指定虚拟网卡dummy0的ipv6地址来进行。

## 尾语

总得来说，花白菜价体验了一把ASN的注册流程以及如何在vps上配置该ASN分配得到的ipv6地址。

其他的我也就不再班门弄斧了，这个ASN注定不会活得长久，具体可见—[RIPE 更新年费标准后个人ORG（ASN） 何去何从？](https://www.nodeseek.com/post-114959-1)。我的归宿直接放弃好吧。🙃

如果你对于ASN有兴趣，可以选择一个靠谱的商家尝鲜体验一下。谨慎选择我的这个商家c1vhosting，毕竟他家的vps价格还是有些灵的，体验了3个月，经历过了2～3次的宕机。

