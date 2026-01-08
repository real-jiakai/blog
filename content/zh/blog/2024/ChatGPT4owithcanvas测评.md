---
title: "ChatGPT 4o with canvas测评"
date: 2024-10-04T10:04:48+08:00
tags: ["openai","chatgpt"]
slug: "chatgpt-4o-canvas-review"
summary: 记录自己使用ChatGPT 4o with canvas的体验感受。
showtoc: true
---

昨天OpenAI的高级语音功能已经下放到了免费用户，今天就放出了仅限Plus和Team用户使用的新功能，不难看到开通OpenAI的会员还是挺值的，可以第一时间尝试新功能。

官方介绍：一种使用ChatGPT进行写作和编码的新方式。

## 写作场景下的快捷方式

![写作场景下的快捷方式](https://cdn.sa.net/2024/10/04/lWT7odnPuECw9gB.webp)

注：
- 可以自己在画布上调整修改，每一段都可以让GPT进行编辑、解释或者改写。
- 可以先用Add emojis再结合Add final polish，可以得到有一定数量的emoji的合理文章。纯Add emojis得到的效果严重影响阅读体验，具体见下图。

![纯Add emojis得到的效果严重影响阅读体验](https://cdn.sa.net/2024/10/04/Zab8zscMoXWpdUv.webp)

感觉这适用于写作或论文润色场景，通过不断调整，以达到预期的效果。新鲜的事物肯定是可以尝试和探索的，但是带有画布的4o模型是否能在写作方面与Claude 3 Opus相提并论甚至超越还存疑。

## 编码场景下快捷方式

![编码场景下的快捷方式](https://cdn.sa.net/2024/10/04/VLybPp8wqYXuUlO.webp)

注：

- 可以自己在画布上调整代码。

用我昨天的一个“不可能三角形”图案为例。

这是Claude经过多轮迭代后生成的，一直无法实现将图案准确居于三角形的正中间，迭代了好几次了，Claude 3.5 Sonnet的修正力度很小。

![Claude 3.5 Sonnet无法实现将图案居中于三角形正中间](https://cdn.sa.net/2024/10/04/zp2Mf7QwEJdt1vn.webp)

这是ChatGPT o1-preview第一次就修正成功的结果，准确地将图案居于了三角形的正中间。

![ChatGPT o1-preview第一次就成功将图案居于三角形的正中间](https://cdn.sa.net/2024/10/04/nBw75Wg8AjJYLv2.webp)

ChatGPT 4o with canvas则花费了2～3次的迭代，才成功修复，将图案放置在了三角形的正中间。

![ChatGPT 4o with canvas花费了好几轮迭代，才成功将图案放置在了三角形的正中间](https://cdn.sa.net/2024/10/04/oEHLPJvANBqWGSb.webp)

总体而言，个人觉得o1加上canvas，这对组合更棒，估计OpenAI后期会更换模型，4o模型还是拉垮的。但这个例子并不是否认Claude 3.5 Sonnet，在我心目中o1模型和Claude 3.5 Sonnet才是目前的闭源LLM之王，毕竟livebench的排行榜更可信，lmarena的排行榜则带有更多的偏见。

![livebench的LLM排行榜](https://cdn.sa.net/2024/10/04/t8WbMSdEPcD145w.webp)

Canvas是ChatGPT可视化界面的首次重大更新，处于早期测试阶段，OpenAI也在计划快速提高其功能。个人估计Canvas后期应该会在编码方面加入类似Claude的Artifact这样的玩意。

## 附录

附上一些早上我看到的一些网友对于该功能的评价。

![网友对于该功能的评价](https://cdn.sa.net/2024/10/04/mHdAwGKEy4Lo2CO.webp)

via: https://openai.com/index/introducing-canvas/