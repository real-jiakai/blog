---
title: "Solution for RackNerd Ubuntu Error 'UFS: unable to mount root fs on unknown-block'"
date: 2023-11-14T14:48:57+08:00
tags: ['vps','linux']
slug: "racknerd-ubuntu-ufs-fix"
summary: "Introducing the solution for RackNerd Ubuntu machine error 'UFS: unable to mount root fs on unknown-block.'"
showtoc: false
---

RackNerd's 2023 Black Friday event kicked off in the early morning hours of today (Beijing time). This time I purchased the most expensive Linux VPS. [Same VPS Black Friday package purchase link](https://my.racknerd.com/aff.php?aff=9721&a=add&pid=796)

> RackNerd Black Friday page: https://www.racknerd.com/BlackFriday/

> At checkout, there will be a Wheel of Savings (lottery discount), randomly getting dollar discounts. In my testing, dollar discounts were all under $2. So the discount is optional.

> After ordering, you can go to the [LowEndTalk post by the vendor](https://lowendtalk.com/discussion/190011/b-l-a-c-k-f-r-i-d-a-y-by-lets-1-top-provider-racknerd-hundreds-of-giveaways-come-get-some/) and reply with your order number to get double bandwidth. If you need me to post for you, private message me your order number.

> Reply format reference: `Order Number: your_order_number @dustinc please doble bw.`

![2023 RackNerd Black Friday machine specs I bought](https://vip2.loli.net/2023/11/14/5lnztYabZ9EDxQ7.webp)

I chose Ubuntu 22.04 system, location Los Angeles DC02 datacenter (Asia optimized route). Ping values from China to this machine are decent.

![RackNerd optimized route China ping values are decent](https://vip2.loli.net/2023/11/14/IwEep4M6bcuH93L.webp)

Two things I usually do after boot:

- Update system package list && update all installed packages to latest version

```bash
# Update system package list
# Update all installed packages to latest version
apt update && apt upgrade -y
```

- Enable BBR acceleration

```bash
# Set new default queue scheduling algorithm to "fq"
echo "net.core.default_qdisc=fq" >> /etc/sysctl.conf
# Set new TCP congestion control algorithm to "bbr"
echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.conf
# Apply new system control parameters immediately
sysctl -p
```

But when I tried to SSH connect the second time, I couldn't connect at all, even with proxy configured.

So I went to RackNerd's VPS control panel and clicked reboot to restart the VPS, but it stuck on the reboot screen for a while, then showed error.

![RackNerd VPS control panel interface](https://vip2.loli.net/2023/11/14/42MsNSgwYUDn6Cr.webp)

So I opened VNC in the VPS control panel and found this error message: UFS: unable to mount root fs on unknown-block.

![UFS: unable to mount root fs on unknown-block](https://vip2.loli.net/2023/11/14/sHDT4I8B1wr93yE.webp)

After searching online, I found I needed to reboot and select an older kernel version to enter the system.

Since clicking reboot would show error at first, I chose to click shutdown, then open VNC, boot the system, and select `Advanced options for Ubuntu` at the beginning of boot.

![Select Advanced options for Ubuntu](https://vip2.loli.net/2023/11/14/bTfyD6AUqvtm9Ko.webp)

Then select an older kernel version to enter the system. In the image below, I selected my older kernel—Linux 5.5.0-70-generic.

![Select older kernel to enter system](https://vip2.loli.net/2023/11/14/s1pDWZdzJiO75qV.webp)

After entering the system, I used this answer from the Ask Ubuntu community question—[Kernel Panic - not syncing: VFS: Unable to mount root fs on unknown-block(0,0)](https://askubuntu.com/questions/41930/kernel-panic-not-syncing-vfs-unable-to-mount-root-fs-on-unknown-block0-0), and performed the following operations (summarized for me by GPT-4 Turbo).

![Ask Ubuntu forum user answer](https://vip2.loli.net/2023/11/14/F9rydigjRJLUS67.webp)

```bash
# Update package list
apt update

# Configure all unconfigured packages
dpkg --configure -a

# Reinstall specific version of Linux kernel and its headers
apt install --reinstall linux-image-5.15.0-88-generic linux-headers-5.15.0-88-generic

# Update initramfs, generate new initial RAM disk for specific kernel version
update-initramfs -u -k 5.15.0-88-generic

# Update GRUB bootloader configuration
update-grub

# Reboot system
reboot
```

After these operations, I could enter the new kernel 5.15.0-88-generic system, but found the network wasn't connecting.

I found `/etc/resolv.conf` [DNS resolution config file] had no errors—it defaulted to Google's public DNS.

Tried updating it to Cloudflare DNS server IP + Google DNS server IP, restarted network but still couldn't connect.

![Update /etc/resolv.conf](https://vip2.loli.net/2023/11/14/9hMvnKWw5abqfTd.webp)

![New kernel VPS can't connect to network](https://vip2.loli.net/2023/11/14/Q2EX3pBTNJnljzk.webp)

Then I searched online for issues about new kernel not connecting to network. Some posts said you need to install corresponding dependencies in the old kernel.

GPT-4 Turbo directly told me to reboot. So I used the reboot command to restart the VPS. After rebooting, I found the network was restored. And the kernel was the new kernel.

![Reboot solved new kernel VPS no network issue](https://vip2.loli.net/2023/11/14/rBP4psQZAJDE5Sl.webp)

That's this troubleshooting experience. I bought a minimum spec RackNerd machine in the first half of the year and probably encountered similar issues—the solution then was to reinstall the system. This time I didn't reinstall directly but troubleshot step by step to solve the problem. I really enjoyed the process of "facing problems head-on."
