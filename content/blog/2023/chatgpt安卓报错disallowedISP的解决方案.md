---
title: "chatgpt安卓报错disallowed ISP的解决方案"
date: 2023-10-16T18:06:02+08:00
tags: ['chatgpt']
slug: "chatgpt-android-error-disallowed-isp-solution"
summary: 介绍chatgpt安卓报错disallowed ISP的解决方案。
showtoc: false
---

## 故事背景

最近带舍友玩vps，正好趁着cloudcone黑五预热套餐推出和搬瓦工的限量款套餐回归，于是我将上述信息，推给了他，他最近正好在学鸟哥的私房菜linux教程，再加上他也舍得花钱于是他买了cloudcone的黑五预热29刀的套餐，以及搬瓦工的包含dc6机房的46刀传家宝套餐。

我给他推荐了不良林大哥的零基础教程，他照做后，也搭建出了属于他的节点。

今天晚上吃饭时，舍友跟我讲，他拿我给他的节点能使用chatgpt的节点，使用他自己搭建的节点，会报如下的错误—Something went wrong. You may be connected to a disallowed ISP. If you are using VPN, try disabling it. Otherwise try a different Wi-Fi network or data connection.

![chatgpt安卓应用报错截图](https://vip2.loli.io/2023/10/16/jpob26QzXUiLydk.webp)

根据他的描述，再加上我对于我的所有结点做的落地处理操作，我可以肯定这一定是ip相关的问题。

虽然使用检测openai是否可访问的一键脚本显示他的两台vps均支持chatgpt，并且他使用那两个节点，网页版的chatgpt也能使用，但是到安卓端的app就不行了。

使用我google one vpn作为chatgpt流量落地的结点，chatgpt安卓app又能正常使用，那就给他的两台服务器的xui面板添加二级代理，使得我的google one vpn作为chatgpt流量的落地，这样子他使用他自己的节点，也能正常使用chatgpt安卓版本的app。

![一键脚本检测chatgpt可访问](https://vip2.loli.io/2023/10/16/zuDjvkUtp278nlG.webp)

## 具体操作

具体操作可以见不良林的二级代理相关的视频，给linux vps的xui面板配置一下xray设置即可。

关于google one vpn在windows上的搭建，以及使其变为节点的相关操作，可以自行上网搜索，我就不赘述了。

## 尾声

chatgpt安卓版本经过迭代，截至2023年10月16日，我的安卓版本仅比网页版少了Advance Data Analysis和Plugins功能。其中的移动端独有的Voice conversations功能，令我惊艳。

![chatgpt安卓端](https://vip2.loli.io/2023/10/16/E9kX3A7QRdraqLt.webp)

![chatgpt网页版](https://vip2.loli.io/2023/10/16/IUlMyN1axwfJ6O4.webp)

希望更多人能用GPT提高自己的效率。
