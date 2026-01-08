---
title: "Using Windows Hotspot and Clash TUN Mode for Kindle Internet Access"
date: 2023-09-22T12:18:22+08:00
tags: ['kindle','proxy']
slug: "using-windows-hotspot-and-clash-tun-for-kindle-internet-access"
summary: Introducing how to use Windows hotspot and Clash TUN mode to enable proxy access on Kindle.
showtoc: true
---

## Results

- Kindle successfully achieved proxy internet access

![Kindle successfully achieved proxy internet access](https://vip2.loli.net/2023/09/22/AaFxTH2cnsWhlpy.webp)

- Android and iPad can connect to Google One VPN without any configuration

![Android connects to Google One VPN without any configuration](https://vip2.loli.net/2023/09/22/NM1QCIXHkKUj2Su.webp)

![iPad connects to Google One VPN without any configuration](https://vip2.loli.net/2023/09/22/36bDAWM8hLP2olk.webp)

## Background

My Kindle is a Paper White 10th generation. Previously, to achieve proxy access on Kindle, I could only do it during summer and winter breaks at home, using proxy software in a soft router like OpenClash.

In the campus network environment, at most I could only connect to domestic networks. If I turned on my phone's hotspot combined with software like Every Proxy, hoping to set up proxy on Kindle for internet access, it wasn't realistic on my Kindle because my Kindle's WiFi settings don't have options to set proxy IP and port.

Until last night, when I was searching for related information online, I accidentally saw a comment. Following the method in the comment, I successfully achieved the effects shown in "Results."

This Windows computer I bought at the beginning of the year, and I hardly used it. I only started using it when school began in September.

Last night, I wanted to set up Windows as a frontend proxy, with my Android phone connecting to Windows to access Google One VPN. So I followed the old routine from the first half of the year: enable Windows hotspot, Android phone connects to the hotspot shared by Windows, and set the proxy options for the hotspot on the Android phone. But I found even after setting the Windows LAN IP and Clash's port 7890 on the Android phone, I couldn't access the proxy.

After some searching, I reinstalled TUN mode following the method mentioned in this issue from the Clash for Windows repository—[WIN 10 configured CLASH, opened ALLOW LAN, why can't access LAN, need help!! I want to connect TV box #831](https://github.com/Fndroid/clash_for_windows_pkg/issues/831). Then I successfully enabled my Android phone to use the Clash traffic shared through Windows hotspot to connect to Google One VPN.

But during the search, I found this comment. [via](https://zhuanlan.zhihu.com/p/337430556)

![User comment](https://vip2.loli.net/2023/09/22/nk7v24OZwzGfeFi.webp)

Following their instructions step by step, then opening Windows hotspot again—when my Android phone connected to the hotspot, I found it could directly access proxy; when Kindle connected to the hotspot (in my case, I needed to set the shared hotspot frequency to 2.4GHz because my Kindle device can't detect 5GHz WiFi signals), it could also directly access proxy.

![Set Windows shared hotspot to WiFi frequency Kindle can detect](https://vip2.loli.net/2023/09/22/fJ9nNXCSyQ2iODT.webp)

Of course, if you have Google One, following the above steps, you can easily connect to Google One VPN.

For the principle behind this, see [GPT-4's analysis](https://chat.openai.com/share/0f7c9947-c897-406a-aea2-3e37129a43b8).
