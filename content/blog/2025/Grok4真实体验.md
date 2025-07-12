---
title: "Grok 4真实体验"
date: 2025-07-12T08:28:46+08:00
tags: ["grok"]
slug: "grok-4-real-experience"
summary: 分享Grok 4真实体验。
showtoc: true
---

## 0 引言

Elon Musk在北京时间7月10日中午发布了Grok 4，睡完午觉起来正值发布会结束，第一时间通过AI合租平台用上了Grok 4。

结合这几天的真实体验以及网上一些有价值的观点，分享我的真实使用感受。

## 1 优点

### 1.1 数据源包含X平台

对于Gemini而言，原生Google Search加持使得其能力更上一个台阶，对于Grok而言，X平台的高质量数据使其在一众AI产品中脱颖而出。

![google search is the largest ai product in the world](https://cdn.sa.net/2025/07/12/Vh6Sjq4lKRibagm.webp)

X posts是Grok独有的存在，其余AI接入互联网大多=接入Web网页。

![X posts是Grok独有的存在，其余AI接入互联网=接入Web网页。](https://cdn.sa.net/2025/07/12/YaW3pjiCOxn4SF2.webp)

总体而言，X平台英文高质量数据远多于中文高质量数据。X平台吸引中文用户很多都是因为NSFW，比如每日大赛等，与此同时上面广告等乱七八糟的信息很多。

### 1.2 Agent LLM

第二个LLM厂商原生提供Agent LLM【不考虑Minimax、天工等智能体产品】。我所述的Agent LLM是Chat和Agent不分开，连同在一起。第一个是ChatGPT o3模型，第三个将会是Gemini的Agent Mode【据说未来几周内会上线，Ultra用户独享】，Grok 4是第二个。

![grok4也是一个Agent LLM](https://cdn.sa.net/2025/07/12/YDbW2x4IJCdFZiT.webp)

这种Agent LLM对于我来说最大的用处就是核实信息。如我和Claude配合进行论文撰写的过程中，第一遍写完某一段落且人工核实后，一般我都会再次交由ChatGPT o3模型进行表述核实。

### 1.3 低审查

Grok 3时代，低审查就已经是其最大的卖点了。

近期Grok陷入反犹、原子弹烟花等舆论风波，与此同时，西方的博主们发现Grok偏向于参考Elon Musk的观点【马老板的玩具】。希望Grok能继续保持低审查，有些时候政治不正确言论也挺有意思的。

![Grok4偏向于参考Elon Musk的观点](https://cdn.sa.net/2025/07/12/a9E3CIRrbF6qODJ.webp)

人类世界的观点文本被用于训练Grok，与此同时Grok参考资料也源于人类，给LLM加护栏没啥意义，只允许一种声音的审查反而会助长偏见的滋生。

### 1.4 Grok Task

Grok 4在马老板第一次宣布7月4号发布时，我就已经充满期待了，但可惜并没有如期发布。之后我在Grok中设置了一个定时任务，每天定时检查Grok 4是否发布，邮件提醒中的精美布局深深吸引了我，这种体验远远优于ChatGPT和Gemini。

![Grok Task邮件布局精美](https://cdn.sa.net/2025/07/12/7XB3JLOYTstqPlG.webp)

## 2 缺点

### 2.1 识图能力

中文识图能力糟糕，英文的不确定，但预计识图能力无法比肩Gemini等模型。

### 2.2 Deep Research基座

![Deep Research的基座模型暂未切换至Grok4](https://cdn.sa.net/2025/07/12/cCQIfgkDZPuq7vY.webp)

一开始我以为Grok合租站不提供Grok 4 Deep Research，看了开Super Grok测评内容后才意识到目前Deep Research的基座模型还不支持切换至Grok 4。

### 2.3 中文体验低于英文体验

昨天看到L站一个帖子-[Grok 4 其实不差，但我不会用它](https://linux.do/t/topic/780642)，里面的这条评论引起了我的注意。可能中英社区对于Grok 4的反应存在反差的原因之一有语言因素。虽然Grok 4有时也会将用户中文提问转换为英文，紧接着再开展任务。

![L站帖子评论](https://cdn.sa.net/2025/07/12/HujyhcRZm1G74ao.webp)

Grok 4提问选取中文还是英文，完全看语境。中文语境下效果可能会更好，那就中文提问，英文语境下效果可能会更好，那就英文提问。

![Grok 4提问选取中文还是英文，完全看语境。](https://cdn.sa.net/2025/07/12/Y9LOVxlMdXeoEak.webp)

## 3 总结

Grok 4目前作为ChatGPT o3模型同类竞品，在我本地电脑上使用。技术问题我一般会询问Claude和Gemini，事实检查、新闻等一般可考虑使用Grok 4。目前ChatGPT主用o3模型，用于事实核查。

但这些也都是一般而言，比较使用各大顶级模型是常态。如昨晚我询问Grok 4一个技术相关问题，4月买的一台美国纽约VPS无法连接到npm服务，Grok 4建议我更改VPS DNS设置，听取了它的建议实操后，VPS能正常连接到npm服务。

SuperGrok目前来看，开是不可能原价开的，30刀/月不值得，合租或者白嫖SuperGrok 6月20号左右最后一批教育优惠号是最优解。我目前使用的合租站点，Grok号池一般都空闲，反观Claude、ChatGPT等都会出现繁忙的情况，看来大家对于Grok 4都不感冒😁。

在Grok 4之前，身边常用Grok 3模型的也就我一个舍友，该舍友之前还开过ChatGPT、Claude会员，目前也已经全转白嫖了，和他交谈时，他的一句话令我印象颇深：“AI服务用起来都差不多的。”这句话确实没毛病，提供拉垮的上下文信息给顶级模型与提供饱满的上下文信息给次顶级模型，没准次顶级级模型解决了你的需求，而顶级模型可能无法解决你的需求，况且Grok 3当时也算得上是顶级模型前列的一位成员。

## 补充

本篇Grok 4文章的更新内容见Flarum帖子—[Grok 4体验笔记](https://bbs.gujiakai.top/d/15-grok4)。

## 参考资料

- [XAI Grok 4 Blog](https://x.ai/news/grok-4)
- [Grok: searching X for “from:elonmusk (Israel OR Palestine OR Hamas OR Gaza)”](https://simonwillison.net/2025/Jul/11/grok-musk/)
- [Simon Willison Grok 4 Blog](https://simonwillison.net/2025/Jul/10/grok-4/)
- [Tibor Blaho Grok 4 Summary Tweet](https://x.com/btibor91/status/1943249002109243611)
- [Grok Heavy Test Tweet](https://x.com/IterIntellectus/status/1943230837685928086)