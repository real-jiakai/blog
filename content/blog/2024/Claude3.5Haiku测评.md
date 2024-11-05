---
title: "Claude 3.5 Haiku测评"
date: 2024-11-05T10:11:43+08:00
tags: ['claude', 'anthropic']
slug: "claude-3-5-haiku-review"
summary: 记录Claude 3.5 Haiku测评。
showtoc: false
draft: false
---

1、aider代码排行榜排名第四。

![aider代码排行榜排名第四](https://cdn.sa.net/2024/11/05/7FXzIBTG6NgP3y8.webp)

livebench排行榜、lmarena排行榜待定，预计代码能力应该不及claude 3.5 sonnet(new)。

2、模型api定价

![模型api定价](https://cdn.sa.net/2024/11/05/9WTwXv2juqtIokm.webp)

暂时只能通过api获取，预计后续会取代claude.ai上的claude 3 haiku。

3、claude 3.5 haiku的亮点：快速、知识截止日期更新（2024年7月，不由得吐槽openai，啥时候将模型的知识截止日期往后推一推啊，一直2023年10月，影响模型的准确度和使用体验）

备注：不支持图片输入哦。

4、官方给出的claude 3.5 haiku的主要使用案例【在lobechat中自定义模型，用上了官方api提供的最新haiku模型】：

![claude 3.5 haiku的主要使用案例](https://cdn.sa.net/2024/11/05/SDu4187N5fQrOYK.webp)

5、benchmarks，感觉haiku就是蒸馏版的claude 3.5 sonnet(new)

![benchmarks](https://cdn.sa.net/2024/11/05/7EpFWwX4Mk6n3s9.webp)

6、claude 3.5 sonnet测评

+ 知识截止日期测评【不涉及任何政治因素，仅仅用于测试用】

![知识截止日期测评图1](https://cdn.sa.net/2024/11/05/5KQLYSjhRrgIa2s.webp)

claude 3.5 sonnet(new)比较搞笑的点，一开始拒绝回复【政治敏感，较为谨慎】，新开一个chat，准确回复。

![知识截止日期测评图2](https://cdn.sa.net/2024/11/05/cNUGDYms5AZwthb.webp)

![知识截止日期测评图3](https://cdn.sa.net/2024/11/05/gN7wVscxDG9nbLq.webp)

what happened? 感觉claude 3.5 sonnet haiku确确实实是claude 3.5 sonnet(new)的蒸馏版本啊。

![知识截止日期测评图4](https://cdn.sa.net/2024/11/05/KWETG4BYrUtuiCc.webp)

![知识截止日期测评图5](https://cdn.sa.net/2024/11/05/OKyYZabpr5JeS6x.webp)

为此我还特意去anthropic的控制台查看了一下日志，确确实实是请求的claude 3.5 haiku模型啊。

![anthropic控制台日志](https://cdn.sa.net/2024/11/05/VQJrB1m3lHf4AaE.webp)

用英文提问试试，结果claude 3.5 haiku直接说截止日期是2024年2月份了。

![知识截止日期测评图6](https://cdn.sa.net/2024/11/05/GjlyPI2ZYMNU4dS.webp)

![知识截止日期测评图7](https://cdn.sa.net/2024/11/05/6OM3pRKgAfEz4bl.webp)

瞬间不想再继续测评下去了。其实LLM的知识截止日期越靠后并不意味着LLM能学习到这段时间内的所有的知识，就比如lmarena中的知识截止日期最靠后的是cohere的command r plus（2024年8月），但是该模型对于2024年发生的事件知晓的并不全面。不由得感慨数据对于LLM训练的重要性。

![cohere的command r plus对于2024年发生的事件知晓的并不全面](https://cdn.sa.net/2024/11/05/l61JPIfnH9L5Ubk.webp)

也有可能是我目前还没找到claude 3.5 haiku相较于claude 3.5 sonnet(new)的优势。看Alex Albert（Anthropic公司的开发者关系主管）的描述，claude 3.5 haiku还是很有潜力的。

![Alex Albert对于claude 3.5 haiku的描述](https://cdn.sa.net/2024/11/05/RFlE1YLgVuA64qk.webp)

+ 推理能力

一坨shit。

![推理能力测评图1](https://cdn.sa.net/2024/11/05/KCNbL9l7Dx38apM.webp)

claude 3.5 sonnet(new)的对于推理的幻觉也是存在的。

![推理能力测评图2](https://cdn.sa.net/2024/11/05/uPRL6DGyCZ5rmeq.webp)

![推理能力测评图3](https://cdn.sa.net/2024/11/05/v1Q7MJU23SILjlx.webp)

7、再来简单地看看马斯克的xai呢【年底前，每个月25刀的免费额度】？librechat这个开源项目适配xai。

![xai测评图1](https://cdn.sa.net/2024/11/05/Ef1vAVkJMsn3Kgt.webp)

![xai测评图2](https://cdn.sa.net/2024/11/05/tpSfuyDmUxEZe6N.webp)

老马的xai grok用的是x（原twitter）上的数据训练的，恰巧覆盖到了? xai的知识日期在lmarena上显示的是2024年3月啊，grok穿越了？还tm真就答对了。

![xai测评图3](https://cdn.sa.net/2024/11/05/YtQIeGuJagjSidR.webp)

没有继续探索下去的动力了。

![xai测评图4](https://cdn.sa.net/2024/11/05/4O6KhLwWTXRnp3l.webp)

![xai测评图5](https://cdn.sa.net/2024/11/05/DkTUqbIVn1Hly7W.webp)

继续老老实实用claude 3.5 sonnet(new)吧。真正让人兴奋的，永远是最强的LLM。

LLM这个领域注定是赢家通吃的局面，除了一些为了成本考量的应用场景，其余大部分场景谁会愿意把时间浪费在和低级别的LLM对话上？

成本上面目前的claude 3.5 haiku比gpt-4o mini贵这么多，考虑成本的条件下，找不到任何用claude 3.5 haiku的理由。

![gpt 4o-mini定价](https://cdn.sa.net/2024/11/05/2ioxFyED3LW8kaP.webp)

还是那句话，也有可能是我目前并没有任何使用claude 3.5 haiku的应用场景，如果你有类似场景，可以结合prompt caching来使用使用。

![Alex Albert对于claude 3.5 haiku的推广](https://cdn.sa.net/2024/11/05/6zVnqiG4SNWKp2a.webp)

当然，降本肯定会在稍后进行。

![claude 3.5 haiku降本会在稍后进行](https://cdn.sa.net/2024/11/05/8QDpefN5ynCqciI.webp)

via: https://www.anthropic.com/claude/haiku

