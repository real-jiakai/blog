---
title: "Claude Max回味"
date: 2026-01-08T16:46:40-08:00
tags: ["claude", "anthropic"]
slug: "claude-max-aftertaste"
summary: 分享第二次购买Claude Max会员的使用心得。
showtoc: true
---

2025年12月，为了月底的硕士学位论文预答辩，我再次开通了Claude Max 5x会员。在Claude Pro套餐下，Claude Code中的Opus 4.5额度少得可怜，使用没多久就熄火了。用550人民币买的10万奈拉在尼日利亚Apple Store成功订阅，这次没有如第一次那般需要等待48小时才能支付成功。

知道很多相关的中转站，但为了更稳定使用，我选择直接开官方的。

![直接开官方的套餐，相较于中转站使用更稳定](https://cdn.sa.net/2026/01/08/rAkDgLSQovZFOIq.webp)

## 回味心得

1、学位论文系统集成与创新点Demo落地

我读研时的研究方向是智能问答，不是搞BERT那种不灵活的抽取式问答，是结合RAG来做创新（改进检索算法等）、工程化（将创新点集成为问答系统落地），堆工作量😁。

2025年暑假里面就已完成了一部分学位论文相关的内容，当时集成RAG问答系统时前端选择了langchain开源的[agent-chat-ui](https://github.com/langchain-ai/agent-chat-ui)项目，但遇到了一些问题，前端的流式输出总是会一闪而过，紧接着消失。当时用了各种AI工具都没有解决该Bug，自己之后没怎么研究，故一直拖着。但预答辩需要初稿，要想初稿最终的系统部分写起来得心应手，必须解决该Bug，实现创新点的工程化落地Demo展示，这样子论文最后一章的插图等都会水到渠成。

![agent-chat-ui项目没有过时，目前langchain团队专注于deep agents](https://cdn.sa.net/2026/01/09/LeS4pNQdbJAqrau.webp)

于是，让Claude Code搭配Opus 4.5开始解决该Bug，只见Claude Code分别对前端、后端两个文件夹启动了Explore Agent，开始理解前后端项目，最终揪出了该Bug，后端传给前端的数据变量存在问题。这个Bug其实很简单，如果人工仔细研究，应该也能解决。但有了Claude Code等工具，有时难免只想描述清楚现存的问题和自己的需求，让AI帮忙解决。

![Claude Code搭配Opus 4.5解决前端渲染问题](https://cdn.sa.net/2026/01/08/M2rqxWlfwIJLo1u.webp)

当然说到修Bug，就不得不提Codex中的GPT 5.2 xhigh了。后续前端渲染消失的问题再现，这次Claude Opus 4.5捉瞎了。反观GPT 5.2 xhigh，它用curl等工具测试前后端之间的数据交互，发觉是RAG生成端请求Gemini API的返回格式问题，并修正了对应的格式，最终前端正常渲染。（一开始集成系统时RAG生成端用Gemini，主要是为了测试用，贪图中转站2.5 Flash的便宜；自己用vLLM启动微调的开源模型，需要掏钱买算力。最终工程化落地Demo的生成端肯定搞自己大论文中指令微调的开源模型）

![GPT 5.2 xhigh解决前端渲染问题](https://cdn.sa.net/2026/01/08/YVyqeKo8r6MlBSv.webp)

有时候自己的嘟文有些无脑，吹完这个吹那个，主要源于自己丢掉大脑，用AI解决需求的激动与喜悦。

2、论文辅助撰写

最近看到一篇博文—[A Guide to Claude Code 2.0 and getting better at using coding agents](https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/)，里面就提及Claude Opus 4.5写作能力很强，而且最接近人类。

![Opus 4.5的写作能力很强，而且接近人类](https://cdn.sa.net/2026/01/08/vKVh6Yo4aIxpFEM.webp)

我用其辅助撰写学位论文的后续章节时，发现文笔确实不错。之前让我感觉最有人味的模型是Gemini 2.5 Pro。舍友也用Claude Opus 4.5给他搞定了满足毕业要求的小论文。

![Opus 4.5分析实验数据头头是道](https://cdn.sa.net/2026/01/08/rNOetPBHyTboSl5.webp)

而且Claude不仅文笔出色，还能直接为你的论文生成对应的配图文件，我一般用draw.io来绘制论文配图，而舍友则用visio来绘制，Claude都能根据用户描述，生成对应的配图文件。

![Opus 4.5能直接生成配图文件](https://cdn.sa.net/2026/01/08/NvYPVJ39kHx1rsO.webp)

3、Claude For Chrome是贫富分水岭

前一阵子，看到Claude For Chrome对于Pro用户开放，一开始以为利好Pro用户，结果用自己的Pro账号尝试后发现，模型固定死了Haiku 4.5模型，Anthropic真小气，连Sonnet 4.5都不给Pro用户用。该模型执行任务拉垮，用过的都清楚。

![目前Claude For Chrome Pro用户只能用Haiku 4.5模型](https://cdn.sa.net/2026/01/08/ZO6to2cEkXKavwf.webp)

附上一些过去使用Claude For Chrome的案例。

A. 用Claude For Chrome在侧边栏辅助学习，省去了截图的步骤。

![用Claude For Chrome在侧边栏辅助学习](https://cdn.sa.net/2026/01/08/waY9zvXBPis4Tpb.webp)

B. 使用Claude For Chrome操作VNC解决NAT VPS网络问题。

![使用Claude For Chrome操作VNC解决NAT VPS网络问题](https://cdn.sa.net/2026/01/08/bZr3vAePM7cY1uy.webp)

C. 使用Claude For Chrome调研小红书。但有时会被风控。

![使用Claude For Chrome调研小红书](https://cdn.sa.net/2026/01/08/Tl8vnFDdUhtJA9L.webp)

![使用Claude For Chrome调研小红书，有时会被风控](https://cdn.sa.net/2026/01/08/qKIwsHmPMFarQhJ.webp)

4、Claude Code利好自动化任务

暑假期间，用Claude Code等工具辅助我整理了微调开源LLM的指令数据、带元数据的文档知识库数据等等，当时用CLAUDE.md实现一个工作流，让这些Code CLI借助工具如Web Search、MCP等，来实现元数据的获取，完成相应字段的填充，进而完成语料数据的整理。

![Claude Code辅助我整理数据](https://cdn.sa.net/2026/01/08/uBItYo3lxJXT7Sb.webp)

前一阵子试用了Claude Code中自定义Command、Skills等，外加用Google的Antigravity中的Gemini 3 Pro（High）来进行冗余内容的移除，这一套工作流下，需要人工做的就真的只剩下检查内容了，之前还需要进行移除冗余元素、移动文件等操作。

![Antigravity中的Gemini 3 Pro模型进行语料数据冗余内容移除](https://cdn.sa.net/2026/01/08/Hhos8i34Cw9Rc16.webp)

前一阵子，VPS商家免费给我的主力大鸡升级CPU，但需要我自己进行迁移，主力大鸡上基本上都是Docker服务，我就让Claude Code对原始VPS上Docker服务全部暂停，紧接着打成一个个压缩包，让新VPS上的Claude Code远程拉取压缩包，紧接着恢复对应的服务，中间遇到了如权限等问题也让Claude Code解决。全程我只需做提示和指导工作。

![用Claude Code进行VPS迁移](https://cdn.sa.net/2026/01/08/CBXmAQz6GeoMYx1.webp)

5、Claude Code帮助我完成网络日志站点的国际化

最近看到《潮流周刊》作者用Gemini Flash完成周刊的国际化。Gemini 2.5 Flash模型的确是经济实惠的模型，之前我预处理数据时也用这款模型解决问题，外加中转站的白菜价，性价比拉满。

![国际化站点的灵感来源](https://cdn.sa.net/2026/01/09/qhmNtoMzuiK3Cld.webp)

之前自己也有过类似的国际化想法，于是乎指导Claude Code中的Opus 4.5模型完成了全站的国际化。全部文章均由Opus 4.5翻译，国际化的对应代码，引导其浏览Hugo的官方国际化文档进行操作。一步到位肯定是不可能的，多轮沟通，描述现存问题，让Claude Code一点点修复，直至完成全站的国际化。可能还存在Bug，但目前为止个人觉得完成度还可以。

![用Claude Code进行网络日志站点的国际化](https://cdn.sa.net/2026/01/09/1aXI2pwjmHSqcNW.webp)

## 总结 

Claude Code是2025年LLM发展史一个较为关键的节点，karpathy将其称为[居住在电脑上的小精灵](https://karpathy.bearblog.dev/year-in-review-2025/)，simonwillison将其称为[2025年最具影响力的事件](https://simonwillison.net/2025/Dec/31/the-year-in-llms/)。

Claude Code在2月份发布之初，由于需要接入API，并没有被重视，我也认为它是玩具，但其后续支持Claude账号登录，共享账号额度后，外加有了Opus 4的加持，开始慢慢被关注。6、7月时刷L站，满屏的Claude Code，最终不得不用一下，逐渐被其魅力所吸引。

Claude模型是目前最佳的Vibe Coding模型，搭配上Claude Code，在[SWE-rebench基准测试](https://swe-rebench.com/)上排名第一。

![Claude Code在SWE-rebench基准测试上排名第一](https://cdn.sa.net/2026/01/09/A5nZ2rdziXj4eBK.webp)

当然，基准测试不是绝对的，在前端方面，Gemini 3 Pro有时可能更加优秀，Codex搭配上GPT 5.2 xhigh模型由于其更新的知识截止日期（2025年8月），修复Bug、编写健壮代码能力比Claude Code+Claude Opus 4.5更加出色。

Claude的限制很严格，虽然Opus 4.5模型在Claude Code中对于Pro用户开放，但这种烧Token的方式注定需要Max会员才能玩得尽兴，需求大的用户，估计Max 20x套餐都不够用。

![Claude限制严格](https://cdn.sa.net/2026/01/08/lziBTaAqXN8bQ2G.webp)

对于我而言，5x套餐正好够我一个人使。这个月套餐结束后，下个月是否还会继续续费？不一定，毕竟论文初稿搞定后，需求减少了。

而且开了Max会员总会想着卡准5小时的时间限制，比如我一般会在早上6点～7点间，给Claude发送「hi」，以确保第一个5小时区间是早上6点到上午11点，以此类推，有时一整天可以搞4个5小时区间，晚上睡觉时脖子后方右侧的斜方肌有些酸胀，高强度用需要注意时不时抬头活动，不然得颈椎病了，得不偿失。

与此同时，目前的这种自然语言编码，就算是最强大的模型，依然需要你有较好的引导。比如之前所提及的Hugo站点全站国际化，如果不引导其先浏览相关资源再进行编码，估计Claude一开始编码就会走上歧途。AI代替程序员？代替不了，还是需要在程序员的指引下，一步步迭代。

最近看到Claude Code装上[Ralph Loop](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/ralph-loop)插件，可以自循环迭代，貌似编码智能体真可以自动档了，但其实还是需要清晰明确的提示引导，而并不是所有人都能一次性写出完美的提示词，但凡有一点偏差，最终的效果就有可能千差万别。

![迭代优化CLAUDE.md](https://cdn.sa.net/2026/01/09/o6dxHKqvMJZGsp5.webp)

比如我项目中的CLAUDE.md就是一步步迭代优化完成的，最终才放心让Claude依据提示，针对项目完成某个工作流。

就先写这么多，后续积累了更多的真实案例继续分享。最后再补充一点：目前这篇文章的审阅工作也是Claude Code + Claude Opus 4.5完成的。