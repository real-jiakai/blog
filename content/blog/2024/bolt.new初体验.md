---
title: "bolt.new初体验"
date: 2024-10-10T16:11:35+08:00
tags: ["ai", "前端"]
slug: "bolt-new-first-experience"
summary: 介绍自己初次体验bolt.new完成一个简单项目的经历。
showtoc: false
---

上午的时候温习了一下traefik的相关知识，中午准备复盘记笔记时，想起了开发者工具中的“Tree 树形目录可视化生成器”，用这个工具展示项目结构真的很直观。

可是当时又忘记了该网站的链接，于是我尝试了bolt.new，多轮对话后整出了一个类似的产物：[Tree Toc Generator](https://tree.gujiakai.me) ，在左侧输入框输入markdown格式的列表，右侧能实时显示生成的树形结构。

![树形目录生成器](https://cdn.sa.net/2024/10/10/XHqfR9t6slVKWTY.webp)

bolt.new和Claude Artifact等一些工具与众不同的点见下图：

![bolt.new的与众不同点](https://cdn.sa.net/2024/10/10/VcHLDasKqxRjoYe.webp)

Claude Artifact目前能做的仅仅是简单的html、css、js、svg等的渲染，但前端的软件包、代码编辑等还不支持，而bolt.new弥补了这一缺陷。具体的区别可以见下图Perplexity的概述。

![perplexity对于claude artifact和bolt.new区别的介绍](https://cdn.sa.net/2024/10/10/5hAw2UQ3uxy4sf6.webp)

其实树形目录生成器项目不难，只要详细描述自己的需求，bolt.new就能实现你的想象。

![详细描述自己的需求，bolt.new就能实现你的想象](https://cdn.sa.net/2024/10/10/2adtDYlSMFJWIpb.webp)

整完这个项目，花费了10万多tokens，每天的免费额度为15万tokens。

![项目花费的tokens数量](https://cdn.sa.net/2024/10/10/br5JK7zPIL1lk8n.webp)

我忘记的Tree 树形目录可视化生成器网址：[https://devtool.tech/tree](https://devtool.tech/tree)，这是山月大佬开发的。

![项目灵感——Tree 树形目录可视化生成器](https://cdn.sa.net/2024/10/10/TaMOjkWphvCGr8V.webp)

bolt.new既结合了目前的LLM代码之王—Claude 3.5 Sonnet，又连接PaSS平台—Netlify，使用体验是真不错。

~~在初次使用过程中，我发现bolt.new的部署还存在有待改进的地方。第一次部署项目后，我claim了该网站，后续发现了bug，继续对话，修改完该bug后，再次部署，但是发现并没有更新原先claim的项目，还得再重新claim一下，这有些不丝滑，估计后续Stackblitz会和Netlify解决这个问题，进一步完善用户的部署体验。~~

修改完bug再次部署，bolt.new会自动就将新部署的添加到Netlify的sites中。但并不是基于原来项目的重新部署，我觉得这一点后续可以优化一下，毕竟在一个chat中，就应该是一个项目的多次迭代部署啊。

![多次部署并不是基于一个项目的多次部署，而是在Netlify中新开项目进行部署](https://cdn.sa.net/2024/10/10/7vJ6cGzWokQIxga.webp)

有关Stackblitz这家公司以及bolt.new的介绍可参考Perplexity的概括：

![perplexity对于Stackblitz和bolt.new的介绍](https://cdn.sa.net/2024/10/10/njYbpPMIqkAC4Js.webp)

在探索bolt.new的过程中，我看到了Stackblitz CEO—Eric Simons在ViteConf 2024上的演示，其中他的开源精神令人钦佩。将bolt.new项目的核心组件开源了。

开源地址：https://github.com/stackblitz/bolt.new

![Stackblitz CEO—Eric Simons的开源精神](https://cdn.sa.net/2024/10/10/DCuw4WrPnaoyGJd.webp)

目前的AI代码工具主要依靠的是大语言模型强大的能力，这些前沿的模型是基座，工具仅仅是结合了这些前沿模型，在此基础上给用户带来流畅的体验。如果Anthropic哪天优化了Artifact，使得Artifact的功能更佳完善，bolt.new有的，它也有，那这些工具的结局就是死亡。

记得上半年，OpenAI的春季发布会结束后，多邻国的股价就下跌了，这是因为GPT-4o高级语音功能是学习语言的好伙伴。

bolt.new可以看作是基于Claude 3.5 Sonnet基础上的创新，因此不用太担心会被Anthropic给吞噬，毕竟Anthropic也不可能短期内实现整套丝滑的前端开发流程，专业的事情交给专业的公司去做，挺好的。

![有关LLM的言论](https://cdn.sa.net/2024/10/10/O9gH4YvLSNMrZuV.webp)

不难看到，目前出现的AI工具主要还是在前端领域让人眼前一亮，后端增删改查，AI工具貌似就有些相形见绌了。记得看过“回到Axton”
频道的一期视频—[你想多了：非程序员也能用Cursor开发应用？15个实用避坑指南 | 回到Axton](https://youtu.be/dBuNKEgvuuU?si=H-t_2jn9C9rsHtaW)，里面提及到了cursor在开发后端以及复杂应用中的挑战。当然，这肯定也是目前bolt.new越不过的大山。

有时不禁感慨，GPT和Claude主要依赖 Transformer 架构中的解码器堆叠，通过前文预测下一个最可能出现的单词，竟能展现出如此的“智能”。尽管偶尔会出现幻觉或不尽如人意的回答，但大多数情况下，它们的表现确实让人感觉具备了某种智能。

最近的诺贝尔奖也开始涉及AI+领域，这更让我感受到AI的深远影响。有时我在写作时也用AI工具来润色表述。在这波AI浪潮下，大家多用AI工具吧。

虽然我认为这些工具依赖向量计算预测最可能的词汇组合，并不是真正的人类智能，但其实际表现却常常让我怀疑，它们是否真的拥有了某种智能。

via: https://x.com/stackblitz/status/1841873251313844631