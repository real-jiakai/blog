---
title: "GLM Realtime API体验"
date: 2025-01-18T15:05:49+08:00
tags: ["glm"]
slug: "glm-realtime-api-experience"
summary: 分享GLM Realtime API体验感受。
showtoc: true
---

## 更新(2025.3.1)

现在Claude编程能力这么强，直接把官方文档甩给它，和它一起编码，肯定可以快速实现将GLM Realtime API接入你的使用场景，可以借助Cursor、Windsurf这类接入Claude 3.7 Sconnet的AI编辑器来辅助开发。

不要问我关于这个项目的任何信息，这是自然语言编程的产物，俗称Vibe Coding，我对于这个项目一无所知，这个项目完全由Claude 3.5 Sonnet编写，而且还存在诸多Bug。

![Vide Coding解释](https://cdn.sa.net/2025/03/01/eGAXMrRW6S7dq3g.webp)

## 更新(2025.1.18)

我是🤡，智谱清言App已经上线了Realtime API了，打电话自动就可以让GLM清唱特定的7首歌曲，我属于是后知后觉了😑。

---

## 背景故事

1月16日下午公众号“GLM大模型”发布了一则推文—[智谱 Realtime、4V、Air 新模型发布，同步上新API](https://mp.weixin.qq.com/s/EQiwpOVKoDK_zIfR1qbBEg)，文章里面的GLM-Realtime清唱功能吸引了我，毕竟现在的AI语音都因为音乐版权的缘故，限制了AI的唱歌能力。

![GLM Realtime提供清唱功能](https://cdn.sa.net/2025/01/18/PTx6mJRInQrZAuS.webp)

虽然真正体验过GLM-Realtime API后，发现其仅仅只能唱一些简单的口水歌，涉及版权的音乐依旧无法演绎。

ChatGPT等一众语音模型一开始是可以唱歌的，2024年5月份的OpenAI春季发布会演示GPT-4o多模态能力就展示了让ChatGPT演唱《Happy Birthday》歌曲。via: https://www.youtube.com/watch?v=V6pYxfcDRks&ab_channel=OpenAI

![GPT-4o多模态唱歌展示](https://cdn.sa.net/2025/01/18/YlDLpMQVPiAeqgd.webp)

视频演示中的GPT-4o是有灵性的，饱含情感。记得当时看完这个演示视频后我陷入了无尽了沉思，打心底佩服OpenAI。

但后续OpenAI开始变得内敛，一些压箱底的宝贝不再第一时间和世界分享，一些次压箱底的宝贝，比如o1-pro竟然需要花费200刀/月的价格才能体验，这整得Plus用户很尴尬，能尝鲜OpenAI的新功能，但属于是被砍一刀的新功能，真正的新功能永远是Pro用户所独享的。

## 体验心得

想尝试Realtime API，但发现目前仅仅只能通过API调用，智谱API平台还没上架实时语音API的交互（没有提供类似Google AI Studio那样实时语音开箱即用的入口】。

于是乎，我便将智谱官方文档有关Realtime API的内容发送给Claude，在和Claude反复拉扯以及结合Perplexity Debug Claude代码后，最终整出了GLM-Realtime API演示: [https://glm-realtime.gujiakai.top](https://glm-realtime.gujiakai.top)。

这次编写代码让我深刻体会到编程高手和Claude结合的强大，我一个小白，无法最大程度发挥Claude的编程实力。编程高手拿到Claude反馈的代码，能很快找出bug，并实现指挥Claude指哪打哪。还是得好好学编程，0基础编写带一些复杂逻辑的应用，在AI辅助下debug很浪费时间。

我依旧不看好OpenAI的o系列，第一，我没这么富有，体验不到o1-pro让我扫兴；第二，个人觉得o系列模型存在的意义就是刷榜，但实际体验和Claude相差无几，甚至在日常使用中还比Claude更糟糕，过时的知识思考再多也是在死循环自迭代😄。

打开网页，填写[智谱AI开放平台](https://www.bigmodel.cn/)新创建的API Key即可开始实时语音交互，GLM-Realtime API演示网站还存在bug，但我觉得这样子已经可以了，估计智谱在近期会将GLM Realtime API上架到API平台，提供类似Google AI Studio的实时语音交互体验，或者直接上架ChatGLM App，到时候这Demo就啥也不是了。

GLM Realtime API目前只能唱7首歌，总好过没有，但还是那句话音乐版权是AI永远无法逾越的大山。

![GLM Realtime API目前只能唱7首歌](https://cdn.sa.net/2025/01/18/G6PCDHQoeg2nyWv.webp)

这7首歌曲是否还受版权保护具体没深究。可以看看Perplexity的分析：

![Perplexity有关7首歌曲版权的分析](https://cdn.sa.net/2025/01/18/ATiq3lnuIYe1m8E.webp)

7首歌曲演示视频：

BiliBili: [https://www.bilibili.com/video/BV1DywAe4EfC/](https://www.bilibili.com/video/BV1DywAe4EfC/)

Youtube: [https://www.youtube.com/watch?v=xsRXGFBHBDg](https://www.youtube.com/watch?v=xsRXGFBHBDg)

希望2025年国产AI越来越好，智谱在我心目中是国产AI的Top4，前三甲为阿里的Qwen、DeepSeek、字节跳动的豆包。