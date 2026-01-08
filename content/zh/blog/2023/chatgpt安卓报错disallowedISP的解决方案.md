---
title: "chatgpt安卓报错disallowed ISP/There is a problem with your request的解决方案"
date: 2023-10-16T18:06:02+08:00
tags: ['chatgpt']
slug: "chatgpt-android-error-disallowed-isp-solution"
summary: 介绍chatgpt安卓报错disallowed ISP/There is a problem with your request的解决方案。
showtoc: true
---

## 更新(2023.12.13)

shadowrocket tg频道给出的判断节点能否访问GPT的方法。

访问网址：[https://ios.chat.openai.com/public-api/mobile/server_status/v1](https://ios.chat.openai.com/public-api/mobile/server_status/v1)

![shadowrocket tg频道给出的判断节点能否访问GPT的方法](https://cdn.sa.net/2023/12/13/biMkcv4CgDs3Nzd.webp)

- [via](https://t.me/ShadowrocketNews/523)

## 更新(2023.11.23)

使用不解锁GPT移动端的代理节点，GPT移动端的报错信息已经变为`There is a problem with your request`了。

不解锁GPT移动端的代理节点所处服务端的报错信息还是disallowed ISP。

![](https://vip2.loli.net/2023/11/23/lNgswq7S6OFYdPU.webp)

## 更新(2023.11.21)

最近看到nodeseek论坛上一篇好帖—[chatgpt安卓苹果解锁方法](https://www.nodeseek.com/post-31717-1)。里面提及了移动端chatgpt解锁的判定。

![nodeseek帖子-chatgpt安卓苹果解锁方法](https://vip2.loli.net/2023/11/21/pXqiZfDxhkmQSab.webp)

其中的`curl andriod.chat.openai.com`和`curl ios.chat.openai.com`命令，是给节点所在的服务器准备的。

如果你是自建科学上网节点，采用的是cloudcone、racknerd商家的vps。那节点应该是不解锁移动端的GPT的。 如我买的racknerd黑五dc02的套餐，默认是不解锁移动端的GPT的。

![racknerd dc02不解锁移动端GPT](https://vip2.loli.net/2023/11/21/JeSgOhXspLdatKA.webp)

采用上半年较火的vps检测openai支持与否的检测脚本，显示的是Yes。这边的Yes仅仅表示网页端解锁GPT。

```bash
# 采用上半年较火的vps检测openai支持与否的检测脚本
bash <(curl -Ls https://cdn.jsdelivr.net/gh/missuo/OpenAI-Checker/openai.sh)
```

![半年较火的vps检测openai支持与否的检测脚本不支持移动端chatgpt解锁检测](https://vip2.loli.net/2023/11/21/tj8VOZb43g9HlYh.webp)

在网上搜索一圈后，我发现目前加上移动端OpenAI检测的脚本由1Stream提供。

```bash
# 1stream流媒体解锁脚本检测OpenAI访问性
# 复制以下命令至vps终端，回车执行
# 输入数字10进行OpenAI检测
bash <(curl -L -s https://netflix.dad/detect-script)
```

![1stream检测脚本支持移动端chatgpt解锁检测](https://vip2.loli.net/2023/11/21/IXbpMWnOrU4SLGZ.webp)

这个脚本的检测原理就是获取`curl ios.chat.openai.com`命令的执行结果，接着根据返回结果，将OpenAI移动端解锁与否的含义，直观地在终端上呈现。

这篇帖子中给出的解决方案是将两个域名加入warp代理，或者丢入dns解锁。

可以给vps套warp，或者仅仅开一个warp socks端口，接着修改自建代理节点的路由规则，凡是openai的相关请求，转交给warp的socks端口进行处理即可。

我的解决方案：将openai的相关域名请求，交由google one vpn落地机器的ss节点/家宽isp落地机器的ss节点，进行分流处理。具体的操作流程就是修改自建代理节点的路由规则，凡是openai的相关请求，转交给开启google one vpn的windows vps/家宽isp落地机器进行处理。这个等寒假有空了再写一篇博客或者在youtube上传视频演示了，只言片语讲不清。

参考资料：

- [chatgpt安卓苹果解锁方法](https://www.nodeseek.com/post-31717-1)



## 故事背景

最近带舍友玩vps，正好趁着cloudcone黑五预热套餐推出和搬瓦工的限量款套餐回归，于是我将上述信息，推给了他，他最近正好在学鸟哥的私房菜linux教程，再加上他也舍得花钱，他毫不犹豫地买了cloudcone的黑五预热29刀的套餐，以及搬瓦工的包含dc6机房的46刀传家宝套餐。

我给他推荐了不良林大哥的零基础教程，他照做后，也搭建出了属于他的节点。

今天晚上吃饭时，舍友跟我讲，他拿我给他的节点能使用chatgpt的节点，使用他自己搭建的节点，会报如下的错误—Something went wrong. You may be connected to a disallowed ISP. If you are using VPN, try disabling it. Otherwise try a different Wi-Fi network or data connection.

![chatgpt安卓应用报错截图](https://vip2.loli.net/2023/10/16/jpob26QzXUiLydk.webp)

根据他的描述，再加上我对于我的所有结点做的落地处理操作，我可以肯定这一定是ip相关的问题。

虽然使用检测openai是否可访问的一键脚本显示他的两台vps均支持chatgpt，并且他使用那两个节点，网页版的chatgpt也能使用，但是到安卓端的app就不行了。

使用我google one vpn作为chatgpt流量落地的结点，chatgpt安卓app又能正常使用，那就给他的两台服务器的xui面板添加二级代理，使得我的google one vpn作为chatgpt流量的落地，这样子他使用他自己的节点，也能正常使用chatgpt安卓版本的app。

![一键脚本检测chatgpt可访问](https://vip2.loli.net/2023/10/16/zuDjvkUtp278nlG.webp)

## 具体操作

具体操作可以见不良林的二级代理相关的视频，给linux vps的xui面板配置一下xray设置即可。

关于google one vpn在windows上的搭建，以及使其变为节点的相关操作，可以自行上网搜索，我就不赘述了。

## 尾声

chatgpt安卓版本经过迭代，截至2023年10月16日，我的安卓版本仅比网页版少了Advance Data Analysis和Plugins功能。其中的移动端独有的Voice conversations功能，令我惊艳。

![chatgpt安卓端](https://vip2.loli.net/2023/10/16/E9kX3A7QRdraqLt.webp)

![chatgpt网页版](https://vip2.loli.net/2023/10/16/IUlMyN1axwfJ6O4.webp)

希望更多人能用GPT提高自己的效率。
