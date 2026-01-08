---
title: "Racknerd的ubuntu机器报错'UFS: unable to mount root fs on unknown-block.'的解决方案"
date: 2023-11-14T14:48:57+08:00
tags: ['vps','linux']
slug: "racknerd-ubuntu-ufs-fix"
summary: "介绍Racknerd的ubuntu机器报错'UFS: unable to mount root fs on unknown-block.'的解决方案。"
showtoc: false
---

Racknerd 2023年的黑五活动在北京时间的今天凌晨拉开了帷幕。这次活动我采购了linux vps中价格最贵的一台。[同款vps黑五套餐购买链接](https://my.racknerd.com/aff.php?aff=9721&a=add&pid=796)

> Racknerd黑五活动页面：https://www.racknerd.com/BlackFriday/

> 结账时，会出现Wheel of Savings（抽奖减免），随机获取美元的减免。实测下来，美元减免都在2刀以内。因此减免可有可无。

> 下单完，可以去商家的[lowendtalk上发布的帖子](https://lowendtalk.com/discussion/190011/b-l-a-c-k-f-r-i-d-a-y-by-lets-1-top-provider-racknerd-hundreds-of-giveaways-come-get-some/)下，回复订单号，获取双倍带宽。需要我帮忙发帖可以私给我订单号。

> 回帖参考格式：`Order Number: 你的订单号 @dustinc please doble bw.`

![2023年racknerd黑五我买的机器配置](https://vip2.loli.net/2023/11/14/5lnztYabZ9EDxQ7.webp)

我选择的系统是ubuntu 22.04，地点是洛杉矶DC02机房（亚洲优化线路）。中国ping这台机器的ping值还算ok。

![racknerd优化线路中国ping值还算ok](https://vip2.loli.net/2023/11/14/IwEep4M6bcuH93L.webp)

我开机一般经常做的两件事。

- 更新系统软件包列表 && 更新所有已安装的软件包到最新版本

```bash
# 更新系统软件包列表
# 更新所有已安装的软件包到最新版本
apt update && apt upgrade -y
```

- 开启bbr加速

```bash
# 将新的默认队列调度算法设置为 "fq"
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
# 将新的TCP拥塞控制算法设置为 "bbr"
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
# 立即应用新的系统控制参数
sysctl -p
```

但是当我第二次ssh连接时，发现死活连不上，就算是配置了代理，也连不上。

于是我来到了racknerd的vps控制面板点击reboot，重启vps，但是卡在reboot界面好一会，接着显示error。

![racknerd的vps控制面板界面](https://vip2.loli.net/2023/11/14/42MsNSgwYUDn6Cr.webp)

于是我在vps控制面板打开了vnc，发现了如下报错信息：UFS: unable to mount root fs on unknown-block。

![UFS: unable to mount root fs on unknown-block](https://vip2.loli.net/2023/11/14/sHDT4I8B1wr93yE.webp)

在网上搜索了一下后，发现需要重启并选择旧版本内核启动进入系统。

由于一开始点击reboot会报错error，于是我选择点击shutdown，接着开启vnc，再boot系统，在boot系统的一开始选择`Advanced options for Ubuntu`选项。

![选择Advanced options for Ubuntu](https://vip2.loli.net/2023/11/14/bTfyD6AUqvtm9Ko.webp)

接着选择旧版本内核进入系统。下图中我选择的是我的旧版本内核—Linux 5.5.0-70-generic。

![选择旧版本内核进入系统](https://vip2.loli.net/2023/11/14/s1pDWZdzJiO75qV.webp)

进入系统后，采用了ask ubuntu社区中的问题—[Kernel Panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0)](https://askubuntu.com/questions/41930/kernel-panic-not-syncing-vfs-unable-to-mount-root-fs-on-unknown-block0-0)中的这个答案，进行了如下一通操作（这通操作是GPT-4 Turbo为我总结的）。

![ask ubuntu论坛网友的回答](https://vip2.loli.net/2023/11/14/F9rydigjRJLUS67.webp)

```bash
# 更新软件包列表
apt update

# 配置尚未配置的所有软件包
dpkg --configure -a

# 重新安装指定版本的Linux内核及其头文件
apt install --reinstall linux-image-5.15.0-88-generic linux-headers-5.15.0-88-generic

# 更新initramfs，为特定的内核版本生成新的初始化RAM磁盘
update-initramfs -u -k 5.15.0-88-generic

# 更新GRUB引导加载器的配置
update-grub

# 重启系统
reboot
```

进行完这通操作后，可以进入新内核5.15.0-88-generic的系统，但是发现网络连接不上。

我发现`/etc/resolv.conf`文件【DNS解析的配置文件】并没有错误，里面默认的是google的公共DNS。

尝试将其更新为cf的dns服务器ip+google dns服务器ip，重启网络依旧连不上网。

![更新/etc/resolv.conf](https://vip2.loli.net/2023/11/14/9hMvnKWw5abqfTd.webp)

![新内核的vps连不上网](https://vip2.loli.net/2023/11/14/Q2EX3pBTNJnljzk.webp)

接着我就去网上查找有关切换新内核连不上网的问题，有帖子说需要在老内核装相应的依赖。

gpt-4 turbo直接让我重启。我就使用了reboot命令重启了该vps，重启完后，我发现网络恢复了。而且内核是新内核。

![重启解决了新内核vps没网的问题](https://vip2.loli.net/2023/11/14/rBP4psQZAJDE5Sl.webp)

以上就是这次排错经历，我上半年入手了一台最低配的racknerd机器，应该也遇到过这类问题，当时的解决方案是重装系统。这次没有直接重装，而是一步步排错解决这个问题，很享受“遇到问题，直面问题”的过程。



