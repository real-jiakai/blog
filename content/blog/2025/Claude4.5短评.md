---
title: "Claude Sonnet 4.5短评"
date: 2025-09-30T08:12:17+08:00
tags: ['claude', 'anthropic']
slug: "claude-sonnet-4-5-review"
summary: 分享Claude Sonnet 4.5体验。
showtoc: true
---

## 补充（2025.10.09）

近期看到Anthropic针对各种类型的套餐出了严苛的周限，各大中转站都纷纷开始调整套餐。

今天早上也看到了姚顺宇大神对于Anthropic激进言论的公开反对。via: https://alfredyao.github.io/posts/2025-10-06.html

![姚顺宇反对Anthropic的激进言论](https://cdn.sa.net/2025/10/09/wsWKZV9odtfhurC.webp)

偷偷用吧，也希望各大AI公司都能以用户体验为核心开发模型和产品，而不是基准测试。

称赞Anthropic是因为他家的模型确实有些场景下能更契合我的需求，比如Vibe Coding，我也是个代码小白，从去年到现在，唯一能信任的也就只有Claude写的代码。其余的模型真没有想尝试的欲望。我的目标很简单：只要做好提示，力争第一版代码就是最终版代码。

什么是真正的遥遥领先，领先一步就是步步领先，虽然看上去这句话很激进，但其实道出的就是现实。ChatGPT发布早，用户数远远大于其余AI模型，LLM相关的API大多都兼容OpenAI调用格式；反过头来，代码领域Claude模型也是同样的情况，从3.5到4.5，一直是代码领域的最佳选项。

## 背景

东八区2025年9月30日凌晨，[Claude Sonnet 4.5](https://www.anthropic.com/news/claude-sonnet-4-5)降临！我的观点：领先一步就是步步领先。Anthropic有绝对的自信，直接宣称：

- 世界上最好的编码模型（过去这一年多的时间，从3.5 Sonnet到4.5 Sonnet一直是）
- 构建智能体（Agent）最强的基座模型
- 使用电脑的最佳模型

三个`最`字彻底宣告了其的伟大！

## 短评

Claude for Chrome目前已经对所有加入waitlist的Max会员开放。其中的Sonnet模型也已经切换到了最新的4.5模型。

官方Claude Sonnet 4.5模型博客中包含多条客户评价部分，如果我手动一个个点击查看势必是一件非常麻烦费时的事情，于是乎，我让Claude for Chrome帮助我挨个点击，给出这么多客户对于Claude Sonnet 4.5模型的总体评价。

![Claude for Chrome帮我点击客户对于Claude Sonnet 4.5的评价，并给出总结](https://cdn.sa.net/2025/09/30/VsoexlRr24AIfFS.webp)

客户评价直接让VS Code中的Claude Code扩展来进行翻译。

![让Claude Code扩展来翻译客户评价](https://cdn.sa.net/2025/09/30/CZqDRsBNgYw6uma.webp)

Claude Code扩展从原本的启动Claude Code快捷键变更为了丰富的对话窗口，还能查看过去的对话历史。其余AI编辑器的市场份额绝对会被进一步蚕食。

![Claude Code VS Code扩展变更为了丰富的对话窗口](https://cdn.sa.net/2025/09/30/t1zsVJ9baqCKPnY.webp)

在账户设置中新增了用量限制的显示，透明化的操作也在提醒用户，尽可能编辑好自己的提示词，而不是一味依赖于多轮对话。

![Claude账户设置添加了用量限制显示](https://cdn.sa.net/2025/09/30/nSWyY5Z3vdzDqIm.webp)

训练截止日期来到了2025年7月份，可靠的知识截止日期依旧保持2025年1月份。暂时让其编写python脚本调用gemini api，还是用的已经过时的gemini python sdk。再过1年，这些AI能否学习到最新的gemini python sdk？让我们拭目以待。

![Claude Sonnet 4.5的训练截止日期来到了2025年7月份](https://cdn.sa.net/2025/09/30/aWLs9G6wZAqSjMt.webp)

谄媚减少了，暂时没有看到`You're absolutely right.`回复。

## Imagine with Claude

![Imagine with Claude实验](https://cdn.sa.net/2025/09/30/1KrYCx7gWO3Ro6i.webp)

实时生成软件有点意思。里面Claude的上下文窗口为100K。只对Max用户开放5天。

![Imagine with Claude体验图1](https://cdn.sa.net/2025/09/30/2xuE6JkOyQbSMm3.webp)

左侧有三个便签，其中一个便签上写着"Constraints breed creativity"，翻译为中文是“约束孕育创造力”，
个人认为是“自由孕育创造力”，条条框框反而会禁锢思想，使得创造力慢慢消逝。为此我向Claude提出了质疑。

![Imagine with Claude体验图2](https://cdn.sa.net/2025/09/30/8aGBW3HRmOU9wsT.webp)

Claude的回复中文译文如下：

![Imagine with Claude体验图3](https://cdn.sa.net/2025/09/30/3vM1uhLamDGlegE.webp)

我选择了完全自由。紧接着我输入了Claude专属音乐，它创建了一个音乐播放器UI窗口。

![Imagine with Claude体验图4](https://cdn.sa.net/2025/09/30/EI7xg4eLy3atUfN.webp)

打开垃圾箱，里面有3个文件，其中一个是假期图片。

![Imagine with Claude体验图5](https://cdn.sa.net/2025/09/30/A8ZPguovz19sVWK.webp)

都是在模拟UI，桌面上的图标除了垃圾箱能打开外，其余的图标就是个摆设。代码执行也是假的，全是Claude用代码模拟出来的UI。

![Imagine with Claude体验图6](https://cdn.sa.net/2025/09/30/rboJZQMnRkjhfDW.webp)

![Imagine with Claude体验图7](https://cdn.sa.net/2025/09/30/GHPZEh3lK4mQNXV.webp)

Keep Thinking是Anthropic的最新宣传片。观看链接: https://www.youtube.com/watch?v=FDNkDBNR7AM

![Imagine with Claude体验图8](https://cdn.sa.net/2025/09/30/gAeIO84QNsjcm7Y.webp)

让Claude想象Trump版的美国队长。

![Imagine with Claude体验图9](https://cdn.sa.net/2025/09/30/OliPX2fozMC9AEW.webp)

Claude想象的骑自行车的鹈鹕。

![Imagine with Claude体验图10](https://cdn.sa.net/2025/09/30/W26Twazq1J8MgUl.webp)

在Claude for Chrome的辅助下和世界分享我的发现。丝滑的流程、丝滑的体验。

![在Claude for Chrome辅助下发推文](https://cdn.sa.net/2025/09/30/Ilw4i6xQE3ctDmN.webp)

![在Claude for Chrome辅助下发嘟文](https://cdn.sa.net/2025/09/30/MAOahTELkUc7iSB.webp)

## Claude Pro

Pro用户也拿到了代码执行和文件创建功能，记得去Chat Features中启用。

![Pro用户也拿到了代码执行和文件创建功能](https://cdn.sa.net/2025/09/30/RpAuKZvQMcn6t5m.webp)

编译、运行代码如下图所示。此外还能创建文件，如幻灯片等。

![Claude代码执行功能展示](https://cdn.sa.net/2025/09/30/Vdv6OosGHLW28xN.webp)

## 总结

这次发布是Pro用户的大胜利。Claude Code中的Opus模型不给Pro用户用，这次Pro用户也能在Claude Code中享受最强大的模型。

个人认为Sonnet 4.5发布并不意味着Opus 4.1就一无是处了。贵总有贵的道理。Opus模型更大，虽然在一部分基准测试中落后于Sonnet 4.5，但毋庸置疑基准测试并不代表实际体验。实际体验中，没准Opus 4.1在某些场景下会更优。

## 补充资源

尽可能多地关注英文测评，因为Anthropic会提前给一部分知名用户内测，中文测评很多都是水文，有些时候我也会怀疑自己是不是也在制造垃圾？

- [Claude Sonnet 4.5 is probably the “best coding model in the world” (at least for now)](https://simonwillison.net/2025/Sep/29/claude-sonnet-4-5/)

- [Vibe Check: Claude Sonnet 4.5](https://every.to/vibe-check/vibe-check-claude-sonnet-4-5)

- [Tibor总结推文](https://x.com/btibor91/status/1972745462487933038)