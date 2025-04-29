---
title: "Meta.AI美国IP区域不受支持的解决方案"
date: 2024-08-06T10:18:01+08:00
tags: ["meta"]
slug: "meta-ai-us-ip-restriction-solutions"
summary: 介绍Meta.AI美国IP区域不受支持的解决方案。
showtoc: true
---

## 更新(2025.4.29)

去年年中注册的账号今年上半年登陆时发现寄了，Meta的风控机制绝对是最严格的存在。也尝试过在美东Windows机器上重新注册账号，但基本上都是一注册就风控。

临近Llama开发者大会，我在网上买了一个美区Facebook账号，在美东Windows机器上成功用上了meta.ai。希望Llama开发者大会能有惊喜，但个人预计大概率发布的内容不及今天阿里团队发布的Qwen3。

![ChatGPT o3对于Llama开发者大会的调研](https://cdn.sa.net/2025/04/29/VTC7zSWiN4gvcA8.webp)

## 背景介绍

前一阵子，Meta推出了开源的Llama 3.1。[via](https://t.me/aigc1024/7441)

![Meta推出了开源的LLama 3.1](https://cdn.sa.net/2024/08/06/cWaxI5okwVnqSD4.webp)

当时准备登陆Meta.AI官网尝试最新的模型，却发现美国IP竟然不受支持。

![Meta.AI美国ip不受支持](https://cdn.sa.net/2024/08/06/aLz4huiCFRUOXZG.webp)

于是乎，我打开了微软远程桌面，连接到了我的一台美东的Windows机器，无痕模式下，使用Meta账号登陆Meta.AI，但还是报区域不受支持的错误。

不死心的我，拿了前一阵子白嫖一个月的美国教育网家宽节点，nekobox开启tun模式，再次尝试，结果依旧是这个错误。

无奈之下，只能用WhatsApp来体验最新的模型。

![Meta.AI区域不受支持](https://cdn.sa.net/2024/08/06/WrXPCkVnLSI3t4H.webp)

后来在网上搜索相关的解决方案，首先看到了L站的这篇帖子—[高质量IP不能访问Meta.AI ？](https://linux.do/t/topic/72735)。

帖子作者描述了其在2024年5月使用高质量的美国IP同样无法访问Meta.AI。

后来我索性也在L站发了一篇帖子—[meta.ai 美国ip不受支持？风控更严格？](https://linux.do/t/topic/157895)，看看有无和我遇到一样报错的网友。

其中的一个评论说得非常在理。

![L站网友的评论1](https://cdn.sa.net/2024/08/06/rs3czE5BFgh6uCO.webp)

当时由于最新的Llama模型，在WhatsApp实际体验下来还是稍逊色于Claude 3.5 Sonnet，于是乎就没有实操。

## 解决方案

今天上午清理tab页时，看到了上个月残留的内容后，我重新用邮箱注册了一个facebook账号，没有在本地使用美国代理ip操作，全程在美东的一台Windows机器上操作。紧接着使用facebook登陆Meta.AI，成功访问。

![重新注册了一个facebook账号，成功访问Meta.AI](https://cdn.sa.net/2024/08/06/QNJ3I4nPMv5AhGZ.webp)

确实如那位网友所言，能否登陆Meta.AI，与facebook账号属性的区域有关。

前几年，我应该是通过香港IP注册的Meta旗下的应用。

这次的Meta.AI区域不受支持应该是Meta.AI今年年中才加的风控限制，这个限制可能是根据你的Meta账号的注册地来决定的【地区受限的Meta账号查遍了所有的设置，无任何异常】。今年4月份，我拿美国ip访问Meta.AI是没有这个风控机制的。今年7月份再次访问Meta.AI才体验到了该限制。

总的来说，如果你遇到了和我类似的问题，最好使用原生的美国ip【开启代理后，访问ping0.cc，显示原生IP，非广播IP】，重新用email注册一个facebook账号，紧接着再使用新注册的账号登陆Meta.AI应该就能正常访问了。

![ping0.cc显示原生IP](https://cdn.sa.net/2024/08/06/Yi5XwPIt2vkmNyq.webp)

最后附上我认为Meta AI最令人惊喜的功能，实时生成图像【上半年4月份就推出了】。附一个我在WhatsApp应用中使用Meta AI实时生成图像的示例【fishes表示多种类的鱼😁】。

<div class="ratio ratio-16x9" style="max-height: 80vh;">
  <video controls>
    <source src="https://cdn.jiakai.page/videos/2024/meta_ai_imagine_demo.mp4" type="video/mp4">
    您的浏览器不支持视频标签。
  </video>
</div>

网页端也能体验实时生成图像功能。使用`Imagine: xxx`的prompt来体验。

![Meta.AI网页端的实时图像生成](https://cdn.sa.net/2024/08/06/jNLbOuzqvw4AWFc.webp)

这种实时交互体验还是挺棒的。

其他的如Llama 3.1-405B这种类型的模型对于开源LLM的研究和发展是有益的，而对于普通人而言，确实如下面这位兄台所言，可以略过，安安心心拥抱Claude 3.5 Sonnet即可。

![L站网友的评论2](https://cdn.sa.net/2024/08/06/vOFBZGKwpytVaLd.webp)