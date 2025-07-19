---
title: "Manus体验"
date: 2025-07-17T14:33:10+08:00
tags: ["manus"]
slug: "manus-experience"
summary: 吐槽Manus的体验感受。
showtoc: true
draft: false
---

## 更新（2025.7.19）

随着ChatGPT Agent的发布，Manus开始活跃起来了，比如开始分享构建Agent的干货文章：[Context Engineering for AI Agents: Lessons from Building Manus](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus)，来自新的竞争对手压力促成动力挺好。

Manus撤离中国是无奈之举，产品有弊端，也有优点，Agent类产品肯定有很多瑕疵，毕竟Agent最大的问题就是不稳定。

记得年初，当时用Claude 3.5 Sonnet作为Agent框架的基座模型，同一个工作流（Workflow）中，能稳定调用工具，当2月份Claude 3.7 Sonnet出来后，基座模型升级，结果发现模型反而过度思考，有些时候不再调用工具。近期用Claude Desktop搭配MCP协议调用外部工具，就算是最强的Claude Opus 4，同一个流程也并不是每次都能完美执行。

给Agent类产品一些时间吧。

## 0 引言

前一阵子在学习智能体（Agent）方面的知识，当时体验不开会员的Manus感觉非常笨，于是乎，在2025年7月4日，用野卡开通了Manus Basic会员。没想到一个礼拜后野卡关停了，后续野卡网站重新上线后，我迅速消费完了虚拟卡中的剩余财产；同样是开通会员之后的一个礼拜，Manus撤离中国大陆，该讯息遭到了诸多非议。

本篇博文分享Manus Basic会员的体验。

## 1 说在前头

首先Manus这款产品，不付费的用户体验非常糟糕。

不付费的Manus账号，里面的Agent底座模型应该不是Claude。在深度体验过程中，免费版Manus Agent犯错的概率极大，属于免费Agent类产品中较为糟糕的一款。下图展示了让免费版Manus核实Q&A问答对是否准确，结果仅进行了一次搜索，毋庸置疑，给出的答案也是差强人意的。

![免费版Manus体验糟糕](https://cdn.sa.net/2025/07/04/zbdmvYRFQ85MqEJ.webp)

付费开通了Basic会员，Agent偏好会自动切换为Quality。

![付费开通了Basic会员，Agent偏好会自动切换为Quality](https://cdn.sa.net/2025/07/04/ph9vMeWSwxcu5mQ.webp)

此时Manus Agent的卖力程度得到了质的提升。

使用时，建议给Manus Knowledge中添加一条如下图所示的Knowledge，不然中文提问，搜索的还是CSDN这些网站就尴尬了😅。

![给Manus添加一条Knowledge使其优先英文检索](https://cdn.sa.net/2025/07/17/PEOx2k4UnbZs7Iz.webp)

添加了该条Knowledge，一般而言Manus在搜索互联网之前会先进行知识回忆（Knowledge recall）操作，这样子就能保证先英文检索，英文互联网实在没资源了，再中文检索。

![Manus搜索互联网之前先进行Knowledge recall操作](https://cdn.sa.net/2025/07/17/d5aguhyQj89UMEX.webp)

## 2 优点

### 2.1 制作PPT精美

![得益于OpenAI GPT Image 1模型的集成，Manus生成的PPT图文并茂](https://cdn.sa.net/2025/07/17/mfDzkdLHSPQhlWa.webp)

得益于OpenAI GPT Image 1模型的集成，生成的PPT图文并茂【PPT里面也存在不准确的表述】。天工/Skywork生成的PPT也很精美，里面的图片是缓存互联网上的内容，不是AI生成的【下图展示了天工PPT智能体制作的PPT，但很可惜有错误信息】。Z.ai、Genspark生成的PPT也很不错，但无图充满文字，不符合我的胃口。

![天工/Skywork生成的PPT也很精美，但PPT存在错误信息](https://cdn.sa.net/2025/07/17/aeOZuIT2BVKigL1.webp)

据说OpenAI也快发布Agent Mode了，可直接编辑PPT，如果能结合OpenAI的最强文生图模型，感觉没Manus啥事了。

### 2.2 小电脑交互方式虽时髦但难过反爬虫

Manus右侧小电脑交互方式很时髦，我很喜欢这样子的体验。

![Manus右侧小电脑交互方式很时髦](https://cdn.sa.net/2025/07/17/C3sP2phSyxRd7b5.webp)

但也不得不指出目前这种智能体电脑操作的弊端：无法过人机验证程序。

![Minimax Agent被Google人机验证拦截](https://cdn.sa.net/2025/07/17/UmKhxMXV5LtFqvj.webp)

上图展示了Minimax Agent被Google人机验证拦截的场景。记得Manus小电脑遇到Cloudflare Turnstile时，我曾多次手动控制小电脑，人工点击Cloudflare的人机验证按钮，结果一直在转圈死循环，可见Cloudflare的人机验证是真牛。

## 3 缺点

### 3.1 公网数据辨别能力差点意思

由于公开互联网上的资料参差不齐，Manus并不能很好地进行正确、错误区分，全盘接受或碎片化理解文章，最终的结果就是回复里面存在瑕疵。

下图展示了Manus付费版误解了公开互联网资料的文段内容，给出的回复中存在瑕疵。

![Manus付费版误解了公开互联网资料的文段内容，给出的回复中存在瑕疵](https://cdn.sa.net/2025/07/04/dnRyqrmJfWe63Kz.webp)

这时追加用户澄清，可以让Manus修正。下图展示了Manus在我的澄清引导下，成功修正回复。

![Manus在我的澄清引导下，成功修正回复](https://cdn.sa.net/2025/07/04/KDrHj9xa6OkSUqM.webp)

同样的一个问题，Minimax Agent、ChatGPT o3、Flowith尝鲜会员都可以较好地指出原本Q&A问答对中所存在的错误。这个案例中，Manus Basic会员不敌这些产品。下图展示了Minimax Agent一次性指出了原本Q&A问答对中存在的错误。

![Minimax Agent一次性指出了原本Q&A问答对中存在的错误](https://cdn.sa.net/2025/07/04/gaj6OiNsq9MfD2U.webp)

### 3.2 模型不透明

Adaptive、Agent、Chat三种模式的底座模型是啥，压根不标注，互联网上也没有很多有关Manus所使用的模型讯息发布。

![Manus模式底座模型不透明](https://cdn.sa.net/2025/07/17/WphUsbGtNIT2wZ9.webp)

在Manus的Discord群组里面，6月底，有网友猜测Manus的Agent底座模型是Claude 3.7 Sonnet、Chat模型是Gemini 2.5 Pro。估计目前7月中旬大概率依旧保持老样子，Agent基座模型还没切换到Claude 4。也不排除已经切换到了Claude 4的可能性。但不管怎么说，Manus对于模型的透明度有待提高。

![Manus Discord群组中网友猜测Manus底座模型](https://cdn.sa.net/2025/07/17/65Uea4WQRlfEcKN.webp)

Gemini 2.5 Pro的最佳体验是AI Studio+开启Grounding with Google Search，没人会稀罕Manus中的Chat。

### 3.3 其余缺点

定时任务不如Grok的清晰明了；云端浏览器方面，我目前没有使用场景，官方推文给出的样例见下图；文生图我更倾向于直接用ChatGPT；文生视频有Gemini App中的Veo3......

![Manus云端浏览器官方样例](https://cdn.sa.net/2025/07/17/tuKs1F6SjDnaI3X.webp)

## 4 总结

Manus给人的感觉真是一炒作的玩意，每隔一段时间在世界各地举办各种活动，但真正能作为护城河的功能寥寥无几。活动都办到尼泊尔了，真有些让人吃惊。

![Manus活动办到了尼泊尔](https://cdn.sa.net/2025/07/17/gW8YJ26hPVbofvX.webp)

我对于Manus的未来持悲观态度。按照目前LLM供应商原生提供Agent LLM的趋势，Manus会和Perplexity处于一样的境地。将近20刀/月买ChatGPT更有性价比。

![Manus的会员费不值得](https://cdn.sa.net/2025/07/17/Fk86bZO9fKaTqgl.webp)

工具是Agent类产品的护城河。比如Grok能接入X平台。

![工具是Agent类产品的护城河。](https://cdn.sa.net/2025/07/17/QFhVnt1ocmbwuqX.webp)

与此同时，Agent类产品极其容易被互联网上参差不齐的信息所干扰，中文互联网本质上已经由各大私域组成（微信公众号、小红书等），公开互联网上高质量信息偏少。如果Agent类产品的模型辨别能力不强，被低质信息所干扰，进而会导致回复中一本正经地引用错误信息。

近期博文[写在 Kimi K2 发布之后：再也不仅仅是 ChatBot](https://bigeagle.me/2025/07/kimi-k2/)中的一句话引起了我的共鸣：`绝大多数 Agent 产品，离了 Claude 以后，什么都不是`，现实确实是这样的，Claude在Agent方面遥遥领先，期待Anthropic继Claude Code编程Agent后下半年将Web端的Extended Thinking升级为Agent，与此同时保留经典LLM。
