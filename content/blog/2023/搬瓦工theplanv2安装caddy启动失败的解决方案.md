---
title: "搬瓦工theplanv2安装caddy启动失败的解决方案"
date: 2023-06-29T15:38:29+08:00
tags: ["vps"]
slug: "solving-caddy-failure-on-bandwagonhost-theplanv2"
summary: 介绍搬瓦工新推出套餐the plan v2上安装caddy启动失败的解决方案。
showtoc: false
---

搬瓦工在2023年的6月27日推出了the plan v2套餐，价格死贵。the plan v2套餐无任何aff链接购买地址：https://bandwagonhost.com/the-plan-v2

无论是hostloc，还是nodeseek，亦或是v2ex上，都能看到一堆affman(促销商人)在猛吹搬瓦工的新套餐多好多好，点击他们带aff的链接购买搬瓦工的新套餐就会使得他们获取到高额的aff佣金。（每个推荐成功的订单提供22%的佣金分成）。

这款the plan v2的套餐，使用优惠码购买的价格是每年110多刀，如果你踩着aff的链接购买并定期续费，那affman每年可以躺着赚到20多刀。

![搬瓦工the plan v2 affman获利情况](https://vip2.loli.io/2023/06/29/qvpacO8WZPENVxb.webp)

原本我已经持有两台搬瓦工的vps了，一台是cn2 gt每年40多刀的机子，另一台是搬瓦工的cn2 gia 70多刀的限量套餐，但是我估计这两台机器都是踩着别人的aff链接购买的，我会愿意让affman每年躺着赚钱？当然不会，当我意识到aff链接这个问题的那一刻起，我就已经不再有想续费那些踩着别人的aff链接购买的vps的念头了。

the plan v2线路和配置还行（硬盘配置可以再高些，40GB不耐看，硬盘现在的价格已经是白菜价级别了，瓦工还这么抠门），再加上我原本手上的两台搬瓦工的机器均是踩着aff的链接购买的缘故，于是我买了一个季度（主要是目前手头上资金不充裕，研究生开学了才有钱，开学了会续费年付），

这几天我准备将原本两台搬瓦工vps上的各种各样的服务均迁移到the plan v2上。这样子可以避免affman每年获利。

反向代理服务器我一般选择简单易操作的caddy，当我在the plan v2的debian系统上安装caddy时，发现caddy启动失败。

报错信息：Error: loading initial config: loading new config: starting caddy administration endpoint: listen tcp 69.171.67.22:2019: bind: cannot assign

报错截图：

![caddy报错截图](https://vip2.loli.io/2023/06/29/udIGg3K7FDsLjCw.webp)

这边的69.171.67.22并不是我的vps ip，在new bing+chatgpt4+google的帮助下，我找到了导致这个错误的原因。

解决方案：

```bash
vim /etc/hosts
# 删除错误的ip地址对应主机名的条目
# 在我例子中错误条目为
# 69.171.67.22 localhost.localdomain localhost
```

![/etc/hosts文件原本文件内容](https://vip2.loli.io/2023/06/29/W8ZspTfSmxVwOzv.webp)

这应该是瓦工机器的问题，这个错误的ip地址对应主机名的条目，不是我添加的。

最终成功启动caddy。

![成功启动caddy](https://vip2.loli.io/2023/06/29/v2zj4OBoUxgepJF.webp)

最后附上chatgpt4的解释

![chatgpt4的解释](https://vip2.loli.io/2023/06/29/4PBFk1iVz2lLDIs.webp)



