---
title: "Perplexity Max尝鲜"
date: 2026-06-08T18:05:58+08:00
tags: ['perplexity']
slug: "trying-perplexity-max"
summary: 介绍 Perplexity Max 会员的尝鲜体验。
showtoc: true
---

## 背景故事

2026年2月，Perplexity 推出了 Model Council（模型委员会）等功能，但仅限 Max 会员使用。后续 3、4 月在闲鱼上都看到过一些低价 Perplexity Enterprise Max 商品，但当时比较忙，一直忍着没下手。五一假期结束后，闲鱼、L站上又出现了低价 Perplexity Max 会员，于是我花了 600 人民币尝鲜了 Perplexity Max 一个月。【备注：后续又看到闲鱼上有不到 500 的 Perplexity Max 会员，反正早买早享受，晚买享折扣。】

![闲鱼上的低价Perplexity Max会员](https://i.see.you/2026/06/08/c0lI/20260607184008997.webp)

## 先说结论

Perplexity Max 会员有优点，但不多。可能是因为我之前被 Claude Cowork、Codex 惊艳过了，再看到 Perplexity Max 的相关功能，并没有激起我心中的涟漪。

如果你想低成本体验类似 Model Council 的功能，可以去 OpenRouter 上的 [Model Fusion](https://openrouter.ai/fusion) 体验。

![OpenRouter上的Model Fusion功能](https://i.see.you/2026/06/08/fL7v/20260607184417788.webp)

如果想让这个模型委员会具备更好的上下文，可以考虑去闲鱼买 Perplexity Max 尝鲜。Perplexity 毕竟是 AI 搜索鼻祖，网络检索层的质量是其产品的一道护城河。备注：OpenRouter 上的 Model Fusion 也能启用联网并设置推理强度。

![Perplexity的Model Council和OpenRouter的Model Fusion对比](https://i.see.you/2026/06/08/zr4O/20260607190332768.webp)

使用 Perplexity 普通 Search 时建议英文提问（可以用沉浸式翻译 + 三个空格敲击来快速将中文输入转为英文），模型回复偏好选择中文，毕竟没人想让 Perplexity 引用一些如 CSDN 等站点的内容。

我也曾试过个性化自定义指令，但 Perplexity 普通 Search 中的 GPT 5.5 Thinking、Claude Opus 4.8 Thinking 有时并不会很好地遵循。它们看到你用中文提问，就会开始搜中文内容，但这个问题最佳的搜索语境并不一定是中文。而 Computer 则能较好地遵循个性化自定义指令。

![PPLX的Computer遵循指令比普通Search更好](https://i.see.you/2026/06/08/Mx4w/20260607185345395.webp)

我的 Perplexity 自定义指令如下，由 Perplexity 中的 Claude Opus 模型撰写，主要目的是让它优先参考高质量的英文内容。

```bash
Search Strategy:
1. Regardless of the language I use to ask, ALWAYS translate my query into English first and run the web search in English as the primary search.
2. Prioritize high-quality English-language sources (official docs, reputable media, academic sites, GitHub, Stack Overflow, Reddit, etc.).
3. Only run a Chinese-language search as a supplementary pass when the topic is China-specific (local policy, domestic products, Chinese celebrities, etc.) or when English sources are insufficient.
4. Always reply to me in 简体中文, but keep proper nouns, technical terms and quotes in their original English form.
5. When citing, prefer English sources; clearly mark which citations come from Chinese sources.
```

Perplexity 里面的 Claude Opus 模型应该是真的（Claude 模型中英文引号不分），但推理强度感觉不高。很多时候虽然我将同样的任务也布置给了 Perplexity Computer，但依旧优先采纳 Claude Cowork、Codex 的结果。

## Perplexity Computer关键信息

- 云电脑是 Linux 纯命令行无头服务器，有 2 个 CPU 核心、约 8GB 内存、约 20GB 硬盘的配置。
- Computer 每一个会话独占一台虚拟机，任务结束后销毁。
- 云电脑 IP 是 AWS 的美国 IP【也就是美国 IP 环境下的 Perplexity】。
- 云电脑里面资源丰富，如 Python 3 环境、curl 工具等。
- 里面安装了 Claude Code、Codex，但都是未登录状态。

## 亮点或有趣的案例

1、模棱两可时，让 Model Council 来进行交叉验证

通常 Model Council 由四部分组成：`Where Models Agree`、`Where Models Disagree`、`Unique Discoveries`【如果有模型有特殊发现的话就会有这一部分】、`Comprehensive Analysis`。

据 reddit 上 perplexity_ai 社区网友反馈，Model Council 每个月的限额可能为 50 或者 100 次。一个月用下来，我还没到 Model Council 的限额，现实情况下并没有这么多模棱两可的情况需要交给委员会讨论。前一阵子备考大专计算机老师笔试时，回顾大学里面的计算机相关知识，遇到自己不确定的知识时用得多一些。

![Perplexity的Model Council给我的大专计算机老师笔试备考提供帮助](https://i.see.you/2026/05/14/6zwJ/20260514042732615.webp)

在人类自己的知识无法判别单个模型回复真伪时，让模型之间以头脑风暴的形式进行讨论，最终得出一份综合且更可信的分析，这样的形式确实不错。

2、Perplexity Computer 编排模型指挥并监督 Code CLI 进行编程

![Perplexity Computer中使用ChatGPT Team设备授权登录Codex](https://i.see.you/2026/06/08/rN9v/20260607194815243.webp)

Computer 的底层编排模型选择 Claude Opus 4.8，紧接着让其更新 Codex，将 Codex 模型设置为 5.5 xhigh，我再配合它完成我的 ChatGPT Team 设备授权登录。

接下来就是 Claude Opus 4.8 指挥 Codex 中的 GPT 5.5 进行对应的编码任务了。

该编码任务是一个庆生站点的开发。单页内容依次为生日祝福、信件、画廊、点亮生日蜡烛。
最终的效果我觉得很不错。

![庆生站点最终效果不错](https://i.see.you/2026/06/08/G3zo/20260607194402828.webp)

但真的有必要用 Perplexity Max 的 Computer 进行套娃吗？答案显然是没必要的，完全可以本地用 Claude Code 开发，再让 Codex 监督开发的每一步来推进。

3、Perplexity Mac 客户端控制微信和联系人聊天

拿到 Perplexity Max 账号的第一天，我就测试了它能不能操作 App，比如微信。Computer 跑了大半天，还是能实现给联系人发微信消息的，图片展示了给卖我 Perplexity Max 账号的商家发消息。

![Perplexity Mac客户端控制微信和联系人聊天](https://i.see.you/2026/06/08/2hBr/20260607225837987.webp)

但是整个流程明显不如 Claude Cowork 丝滑，使用脚本操作 App 很慢。Claude Cowork 是我使用过的操作微信最丝滑的 AI 工具，Codex 次之。

安装好 Perplexity 的 Mac 客户端后，可以将本地 Mac 作为 Perplexity Computer 的工作环境，来进行对应的操作。这部分我玩得比较少，因为更信任 Claude Cowork、Codex 这两个工具。

4、利用 Perplexity Computer 设置定时任务监控网站通知变化

![利用Perplexity Computer设置定时任务监控网站通知变化](https://i.see.you/2026/06/08/4Bze/20260607231048761.webp)

前一阵子求职期间，需要关注网站的新公告。为了实现新公告发布后第一时间获知，我让 Perplexity Computer 每小时检查一次公告列表，一有通知就推送到 TG 机器人。

定时任务的底层执行模型是 GPT 5.2。预估 Perplexity 是为了省成本，毕竟 GPT 5.2 的价格相较于 5.4、5.5 便宜一些。

![GPT 5.2的价格相较于5.4、5.5更便宜一些](https://i.see.you/2026/06/08/tlX3/20260607231820833.webp)

5、Perplexity Computer 在 tldraw 上绘画

![Perplexity Computer在tldraw上绘画](https://i.see.you/2026/06/08/ff8B/20260607233134105.webp)

在 tldraw 网站上用鼠标一笔一笔画猫，左侧是 Claude Sonnet 4.6 的杰作，右侧是 Claude Opus 4.8 的杰作。

6、Perplexity 中的可视化展示

![Perplexity中的可视化展示](https://i.see.you/2026/06/08/wj9S/20260608013802897.webp)

股票、天气等信息有可视化卡片展示。

7、学术数据库专业加持

![学术数据库专业加持](https://i.see.you/2026/06/08/Pw1v/20260608014457431.webp)

搞学术研究的朋友可以指定 Wiley 之类的搜索源来加速科研；我不搞科研，基本上用不到该功能。

## 缺点

1、Perplexity 移动端 App 里面的 Computer 默认编排模型是 Claude Sonnet 4.6

![Perplexity移动端App里面的Computer默认编排模型是Claude Sonnet 4.6](https://i.see.you/2026/06/08/iv9N/20260607192404430.webp)

截至 2026 年 6 月 8 日，Perplexity 移动端 App 里面的 Computer 依旧无法像网页端那样指定编排模型，压根没有选择模型的选项。有时询问后得知其基座模型是 Claude Sonnet 4.6。Perplexity 还是太抠了。

2、Perplexity Computer 没有类似 Manus 这样的云电脑展示界面

![交代给Perplexity Computer一个调研小红书上有关Perplexity Max的用户反馈。登录二维码是截图给我的。](https://i.see.you/2026/06/08/2Kxx/20260607193028799.webp)

比如我交代给 Perplexity Computer 一个任务：调研小红书上有关 Perplexity Max 的用户反馈。登录二维码也是截图给我的。

![我不喜欢Perplexity Computer的不透明](https://i.see.you/2026/06/08/Ev0u/20260607193309728.webp)

明明是个类似 Manus 的云电脑，但最多只提供截图。我觉得这样的用户交互体验比较糟糕。

3、Perplexity 的上下文窗口限制

设置里记得启用 Computer 扩展的上下文窗口。不启用的话会频繁压缩上下文，关键信息也容易丢失。

![设置里记得启用Computer扩展的上下文窗口](https://i.see.you/2026/06/08/qr8J/20260608003922810.webp)

前一阵子在网上调研过 Perplexity 上下文窗口，貌似只有 32k。

## 尾声

使用一个月的 Perplexity Max 后，我对其祛魅了。Perplexity Computer 能干的，Claude Cowork、Codex 也能干，而且干得更好。它就类似 OpenClaw、Hermes Agent 一样，效果比不上 Claude Cowork 和 Codex。这些开源 Agent 至少还有开源优势，而 Perplexity Computer 是闭源的。

我看过一些中文自媒体在对 Perplexity 的评价上横跳：一会儿说套壳没前途、要死了，看到 Model Council、Computer 后又说 Perplexity 没死、还很强。结合这几个月的发展势头看，我不怎么看好 Perplexity Computer 这类云端执行环境的 Agent 产品形态的长期竞争力。尤其是 Computer 目前能做的事，Claude Cowork、Codex 基本也能做，而且在我的体验里往往还能做得更好。唯一令我觉得不错的可能是 Model Council：顶级模型一起讨论并解答用户疑问的体验不错。再加上 Perplexity 具备专业学术数据库，用于学术研究时可能会有较好的体验。

当然，我的结论带有个人偏见，对于非技术用户来说，Perplexity Computer 这种“零配置、开箱即用”的形态反而可能更有吸引力。

我接近一个月的体验观察就是这些。想尝鲜 Perplexity Max 的小伙伴可以考虑去闲鱼买一个月试试水；一般而言我不推荐，抱紧 ChatGPT、Claude 就行。
