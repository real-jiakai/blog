---
title: "hxservers网络问题的解决方案"
date: 2023-10-13T12:20:19+08:00
tags: ['vps','google one vpn']
slug: "solving-hxservers-network-issues"
summary: 介绍hxservers网络问题的解决方案。
showtoc: true
---

## 更新(2023.11.27)

hxservers商家已经跑路。paypal争议，成功拿到所有钱款。

![paypal击碎hxservers](https://vip2.loli.net/2023/11/28/uQaqb8pPtS67weU.webp)

## 更新(2023.10)

使用dd windows脚本后，需要vnc到windows机器，设置网络的ip地址、子网掩码、默认网关，等到windows能联网了，才能使用本地的rdp工具连接。

ip地址和子网掩码可以在执行dd windows脚本之前在linux上通过`ifconfig`命令查看，默认网关可以通过`ip route`命令查看。具体哪一项是ip地址，哪一项是子网掩码，哪一项是默认网关可以去网上自行搜索或者将图片上传给GPT4-V，让GPT识图给你解答。

virtfusion面板的windows安装模版，google one vpn一般都存在问题，因此可以先安装debian12，接着用dd脚本对windows机器进行dd操作，dd后的windows配置一下网络即可正常使用windows。配置网络所需的ip地址、子网掩码、默认网关在面板网络选项中可以直接查看。(2023.11.27)

## 故事背景

hxservers商家在2023年的10月11日进行了维护，这次维护后，原本linux dd windows的windows server服务器的网络直接没了。

昨天解决该问题，我选择了另一位大神提供的windows镜像，再次将linux机器dd成windows server。

以下是我使用的dd脚本。

```bash
# 下载dd工具，并赋予执行权限
wget --no-check-certificate -qO InstallNET.sh 'https://raw.githubusercontent.com/leitbogioro/Tools/master/Linux_reinstall/InstallNET.sh' && chmod a+x InstallNET.sh
# dd windows
# windows server
# 默认账户：Administrator
# 默认密码：nat.ee
# 默认rdp端口号：3389
bash InstallNET.sh -dd 'https://oss.sunpma.com/Windows/Win_Server2022_64_Administrator_nat.ee.gz'
```

dd完，还是没有网络的。因此无法使用本机windows自带的远程桌面连接到该windows server，需要在商家提供的vnc页面操作，在以太网的ipv4属性中设置ip地址和dns设置。

其中ip地址填写商家提供的ipv4地址，一般都是类似165.140.8.x，子网掩码会自动填充为255.255.0.0，默认网关填写165.140.8.1。

dns可以设置为1.1.1.1(主dns)和8.8.8.8(副dns)，类似下图所示：

![设置网络](https://vip2.loli.net/2023/10/13/lcMe9sSjzNipH3B.webp)

保存后，应该会弹出一个网络识别的页面，点击确定即可。确保网络连接正常后，就可以使用本地windows的rdp连接该远程windows server了。

接着便是连接google one vpn的常规操作。

![连接google one vpn](https://vip2.loli.net/2023/10/13/lNHvMD8pnJa2iKP.webp)

注意点：

- 该windows server镜像默认提供的语言环境为简体中文，可以在服务中开启windows更新服务，接着将语言环境更改为英文，时区更改为vps所在的时区，地区更改为美国。美国的windows server环境还是设置中国的那一套，会有很多限制，如bing会跳转至中国特供版的bing。

- 更改windows server的默认密码，以管理员运行powershell，接着执行以下命令更改密码。【其中的密码更改为你自己的，建议使用bitwarden这类工具生成随机强密码】

```bash
net user administrator your_new_password
```

- 更改windows server的默认端口3389，更改端口的操作，可以见这篇文章—[How To Change RDP Port on a Windows VPS](https://lowendbox.com/blog/how-to-change-rdp-port-on-a-windows-vps/)

## 继续折腾

虽然用新镜像解决了网络问题，并且成功连接上了google one vpn。但是之前的秋水逸冰大神的镜像是否也能通过配置网络设置，恢复google one vpn的连接呢？

当时由于本地rdp连不上远程的windows server，我通过商家提供vnc页面进入了windows server【该windows server采用秋水逸冰大神的windows镜像】，看见网络出了问题，我直接重置了系统，用新的windows镜像进行了dd操作【故事背景中介绍的方法】，没有验证秋水逸冰大神的镜像是否也能通过设置网络的形式，恢复rdp和google one vpn的连接。

今天上了一上午的课，趁着下午没课的间隙，准备重置系统验证一下秋水逸冰大神windows镜像是否能通过设置网络的形式，继续在hxservers的机器上大放异彩。

采用下面的命令进行dd操作。

```bash
# 下载dd windows工具，并赋予执行权限
wget --no-check-certificate -qO InstallNET.sh 'https://raw.githubusercontent.com/leitbogioro/Tools/master/Linux_reinstall/InstallNET.sh' && chmod a+x InstallNET.sh
# dd windows 2022
# windows server
# 默认账户：Administrator
# 默认密码：Teddysun.com
# 默认rdp端口号：3389
bash InstallNET.sh -dd "https://dl.lamp.sh/vhd/en-us_win2022.xz"
```

接着还是需要在商家的vnc页面设置网络，这样我们才能使用rdp远程连接该windows server。

设置完网络，接着点击Yes，允许该windows server被发现，以连接上网络。

![允许windows server被发现](https://vip2.loli.net/2023/10/13/6YBu8jlSKEXFxrN.webp)

接下来就可以使用本地的rdp连接远程的windows server进行操作了。果然设置完网络后，google one vpn就能成功连接。

![成功连接google one vpn](https://vip2.loli.net/2023/10/13/bqhNDlLjpBS8JPI.webp)

接着便是常规的搭建节点和对windows server进行改密、该端口等操作了。

以上设置网络恢复hxservers网络的方法来自tg google one群组网友的讨论。