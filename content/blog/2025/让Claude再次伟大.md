---
title: "让Claude再次伟大!"
date: 2025-08-06T18:28:21+08:00
tags: ['claude']
slug: "make-claude-great-again"
summary: 分享近期有关Claude产品的使用心得。
showtoc: false
---

![Make Claude Great Again!](https://cdn.sa.net/2025/08/06/76IRckCSMdUpXFt.webp)

人工智能实验室中的黑马[^1]—Anthropic在今天凌晨发布了Claude Opus 4.1。

近期用Claude Opus 4辅助写论文某一部分片段时，给我的感触是文字水平有下降的趋势。同样的Prompt（让LLM完善的那一部分，写作思路、写作要点等均预先填充），AI Studio中的Gemini 2.5 Pro产出的段落逻辑清晰，我拿过来自己再润色润色就能直接用了，而Claude Opus 4产出的文字多为列表式的呈述，能直接拿来用润色的文字变少了。

当然也有可能是我Prompt不到位的缘故，目前辅助我论文写作的LLM，第一时间想到的依旧是Claude Opus和Gemini 2.5 Pro。

今天发布的模型页面[^2]有这样一段有关内容创作的表述：

![Claude Opus模型页面有关内容创作的表述](https://cdn.sa.net/2025/08/06/3NsC1ap9ijXgGUE.webp)

虽不能低估Claude Opus系列写作的水平。但Anthropic一直强化Claude系列模型编码、Agent方面的能力，着实让人有些担心其文字功底倒退的可能性。

Claude 4系列模型的训练截止日期：2025年3月。

![Claude 4系列模型的训练截止日期：2025年3月](https://cdn.sa.net/2025/08/06/a97kbLCGx6d3YtW.webp)

这一点是我5月份的Claude 4博客中所忽略的。虽然截止日期并不能说明啥，让模型用一些框架写业务代码时，依旧采用框架SDK过时的知识，如Gemini的Python SDK，Claude 4系列模型依旧采用被废弃的SDK。

截止日期应该是目前所有模型中最新的了，之前我还误以为Gemini 2.5 Pro的知识截止日期最新（2025年1月）。

Claude 4系列模型不开搜索都知道2025年1月份美国加州发生了山火的新闻。

![Claude 4系列模型不开搜索都知道2025年1月份美国加州发生了山火的新闻](https://cdn.sa.net/2025/08/06/XSfng6MixNuaZ32.webp)

目前很多LLM供应商都注重后训练，预训练甚至都已经放弃了，毕竟有了web搜索工具，模型可以实时获取最新的资讯。欣赏Anthropic预训练和后训练两手抓。

Claude Opus 4.1模型卡片[^3]都是有关安全的内容。个人目前以及未来都不会认为LLM将对人类造成任何威胁。虽然目前的模型看起来很智能，但其实也就那样。

Claude Code在2025年6月份左右开始流行，成为了程序员等群体青睐的工具，目前的热度肯定是盖过Augment、Cursor这类产品的。

我也在7月份尝试了用该工具Vibe Coding，Claude Code使用体验确实不错，能直接操作Jupyter Notebook让我开了眼（也试过Google Colab中终端安装Claude Code，Claude Code无法操作其中的Jupyter Notebook对应的单元格）。

![Claude Code能直接操作Jupyter Notebook让我开了眼](https://cdn.sa.net/2025/08/06/1kAgv2K6acBG7Eb.webp)

国产廉价的GPU平台是AutoDL，无卡模式开机每小时1毛钱，有些时候需长时间运行的脚本，我就放上面跑，脚本出现Bug，直接终端中安装Claude Code，紧接着就可以开始愉快地辅助我代码了。Claude Code官方没提供GUI，采用终端的形式确实更通用。虽然也有开源的Claude Code配套GUI项目。

![Claude Code终端形式更通用](https://cdn.sa.net/2025/08/06/2GWMlhQBzVTengj.webp)

当然能在国内的机器上这样恣意妄为操作是因为用的Claude Code中转站，自己的号不会在Claude不支持地区登陆，

我目前用的Claude Code中转站也不稳定，几乎每天号池都会出现被Anthropic扬号的情况，目前暂时也只能用Claude Sonnet 4模型。

Claude Code和网页端共享额度，这是其流行的一大原因。如果仅仅支持API用Claude Code，谁用谁破产。开了Max套餐，直接Opus模型启动，确实很爽。可惜Pro会员只能在Claude Code中用Sonnet模型。

用Claude Code、Claude Web端有些时候觉得达到限额了，才允许自己放松，不由得感觉有些心累。一个人高强度用Pro会员，一天最多用3轮，全部拉满，生活也太疲惫了。

![Claude高强度用，会感到心累](https://cdn.sa.net/2025/08/06/8axHdiyoLQv1gUw.webp)

Claude Sonnet 4的代码能力我不敢恭维太多，之前遇到一个代码Bug，Vibe Coding用Sonnet 4越改越错。纯浪费我时间，自己不理解代码逻辑，无法实现指哪打哪，当时最后换Gemini Cli，Gemini 2.5 Pro一遍过。如果哪天Gemini Cli能和Gemini网页版会员共享额度，绝对会迎来增长，暂时依旧处于被低估的状态。

目前唯一还存在这么狠的使用限制也只有Anthropic的Claude模型。Pro用户如果用Claude Opus模型对话内容较长，没一会就会达到限额。

![Claude Opus模型，Pro用户存在较狠的限额](https://cdn.sa.net/2025/08/06/pmCY9QxakywF2Jr.webp)

GPT-5本周发布（美国时间周四，北京时间周五），但个人认为依旧无法撼动Claude模型在编码、Agent方面的实力，GPT系列模型强在哪？最全能、搜索、文生图、ChatGPT Agent。

不知道这次OpenAI的基准测试敢不敢放Gemini 2.5 Pro、Grok 4、Claude Opus 4.1的对比图，就算放了，编码、Agent方面领先Claude，我也不会信。

最近我开始习惯用英文和海外各大模型进行对话。一开始我以为用英文写提示词会较为浪费时间，但实操后发现并不会浪费太多时间，英文的表达用常见词即可，一时想不起来的英文短语直接用Google Translate翻译补充。就算我的英文提示中有拼写错误，只要不离谱，AI基本上都能理解意思。

Claude模型最让人难蚌的是：`You're absolutely right!`

![Claude模型最让人难蚌的是：You're absolutely right!](https://cdn.sa.net/2025/08/06/jrRnxy47cmPJ1Fk.webp)

执笔于此，时间已经过了晚上8点，我也该洗漱准备休息。最后附上个人有关Claude后续发布的预测：

官方博客[^4]中有这样一句话：

```
We plan to release substantially larger improvements to our models 
in the coming weeks.
```

`in the coming weeks`中文译文：未来几周。

Claude Opus 4.1给出的最有可能发布时间区间为2025年的8月20日～2025年的9月3日。

![Claude Opus 4.1对于未来Claude模型改进发布的时间预测](https://cdn.sa.net/2025/08/06/h2StNToMp4bwsy1.webp)

Claude Opus 4.1给出最有可能发布的版本是Claude Opus 5，其次的可能是新的定价层级，或者是更长上下文的产品。

![Claude Opus 4.1对于未来Claude模型发布内容的预测](https://cdn.sa.net/2025/08/06/XdK89fVZEWxclNG.webp)

个人觉得其猜测有一定的道理。在GPT-5发布后，用更大改进的模型去摧毁OpenAI引起为傲的产品，有利于进一步扩大Claude模型的市场。

新的定价层次也有一定的可能性，在8月底，Claude Max套餐会施加每周额度限制，以防止狂热粉丝用Claude Code 24小时自动化操作。要想无限制使用Claude Opus模型，引入新的套餐层级，月付更多的美刀，如1000刀或者2000刀。

更长的上下文长度也是可能的，200K的上下文，企业500K的上下文，至今还没达到Gemini的1M上下文窗口，延伸到更大的上下文长度，如1M或者2M，有利于与GPT-5、Gemini模型竞争。但其实长上下文或多或少还是有弊端的，就算抗衰减能力再强，也很难完全把握住上下文窗口中的海量文本。

[^1]: https://archive.is/OJESS

[^2]: https://www.anthropic.com/claude/opus

[^3]: https://assets.anthropic.com/m/4c024b86c698d3d4/original/Claude-4-1-System-Card.pdf

[^4]: https://www.anthropic.com/news/claude-opus-4-1