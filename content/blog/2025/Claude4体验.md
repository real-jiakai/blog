---
title: "Claude 4体验"
date: 2025-05-23T07:56:34+08:00
tags: ["claude","anthropic"]
slug: "claude-4-experience/"
summary: 分享Claude 4的使用体验。
showtoc: true
---

![如果你关注AI新闻，每天都会感受到时间被压缩了。](https://cdn.sa.net/2025/05/23/fKErWMURgA4kVxG.webp)

via: https://x.com/testingcatalog/status/1925606824662679917

如果你关注AI新闻，每天都会感受到时间被压缩了。单调重复的人生在追随AI脚步的节奏中，过的异常得快。

![Claude 4 Opus对于推文的解释](https://cdn.sa.net/2025/05/23/n1Bc2psbXF7u5CH.webp)

Claude 4在今天凌晨发布，Anthropic这次选择不再以小数点的版本号递增来挤牙膏式发布模型。

这个转变其实很大程度在于近期Claude的市场被ChatGPT、Gemini蚕食严重，倘若OpenAI推出的GPT4.1、Google推出的Gemini 2.5系列模型编码能力依旧与Claude 3.7 Sonnet有较大差距，相信Anthropic会发布Claude 3.8 Sonnet，依旧把Opus模型藏起来继续用于改进Sonnet模型。

> 备注: 其实编码基准测试只提供了一个大方向，Claude 4没发布之前，Claude 3.7依旧能和Gemini 2.5 Pro打得有来有回，不一定每一个编码场景都是Gemini 2.5 Pro胜出，Anthropic面向现实需求开发模型，注定了Claude在基准测试和用户体验方面会有较大的反差。

Claude系列模型给我最大的感触就是回复简洁且不冗余，有时有灵性。比如近期我在复习软件设计师中级考试，回顾自己做的综合知识错题，针对其中某些自己理解不清晰的选项，依次让ChatGPT 4o/o3、Gemini 2.5 Pro、Claude 3.7 Sonnet来解答，有些时候Claude 3.7 Sonnet的解答简洁且包含细节，有些时候Claude 3.7 Sonnet则在这一众模型中表现糟糕，知识的广度不及另外两家模型。

上一次用Claude 3 Opus模型是在去年下半年，记得当时被分配给大四毕业生看开题报告的任务，我tm直接把开题报告中的所有文字按部分发送给Opus模型，让Opus模型给出对应的改进建议。之后就再也没用过了，因为发现Claude 3 Opus的写作能力有些跟不上Claude 3.5 Sonnet系列模型。

Anthropic但凡在今年2月份推出Claude 4 Opus，2025届毕业生的毕业论文就可以多一个更棒的选择。Opus模型专为写作定制，虽然没实测Claude 4 Opus的写作能力，但预计文字含人味很高。

## Claude 4

1、模型截止日期最新

相较于Gemini 2.5系列模型的知识截止日期为2025年1月，Claude Opus 4、Claude Sonnet 4知识截止日期来到了2025年3月份。虽然目前的LLM大多都已经接入了互联网，但知识截止日期更新一些总归是好的。

![Claude 4模型知识截止日期最新](https://cdn.sa.net/2025/05/23/5Mkgar23nqHB8Zu.webp)

2、Extended thinking with tool use (beta)

开了思考、搜索按钮提问Claude，Claude可以使用搜索工具，拿到搜索工具响应后，继续思考，持续迭代，最后再给出对应的回复。下图的例子展示了该功能。

![Claude 4 Extended thinking with tool use (beta)](https://cdn.sa.net/2025/05/23/cY7wjlsBCEATqJ2.webp)

之前思考、搜索两个按钮齐开，提问Claude，Claude觉得需要检索互联网，使用搜索工具检索互联网，检索完毕后就直接给出回复，不会再根据工具调用的结果再进行思考。

Anthropic开发者关系主管Alex Albert有关该功能的推文展示: https://x.com/alexalbert__/status/1925591751118684258

3、模型新能力、Claude Code GA

![模型新能力、Claude Code GA官方博文介绍](https://cdn.sa.net/2025/05/23/qaEKzSOmAnTvkeJ.webp)

更精确遵循指令等新特色总归是好的，利好Agent。Claude Code部分后文会稍加展开说说我的新体验感触。

4、新的API功能

这部分也放到后文展开讲讲。

5、定价、开放层次

Claude 4系列模型和Claude 3系列模型定价一致，这个价位即使模型再强，也很难被广泛采用。

Github Copilot中接入的Claude 4 Opus仅限Pro+用户享受，Cursor中的Claude 4 Opus需要启用Max模式。性价比之王—Gemini 2.5是Claude难以逾越的坎。

![Claude 4 Opus对于Cursor Max模式的介绍](https://cdn.sa.net/2025/05/23/5UKjYPxGipBohl2.webp)

Sonnet 4向免费用户开放，Opus 4则付费用户独享，有条件想体验Opus的朋友们，建议还是开个Pro会员体验，API不值得。后续也会介绍我目前知晓的低成本体验Claude会员的途径。

6、基准测试

基准测试真好看，基准测试不好看也不会发布😁。现在每家发布LLM都自称是目前的SOTA(State Of The Art，最先进水平)。

个人较为认同Anthropic CEO有关基准测试无意义的言论，基准测试肯定存在失真，但大致比较了模型能力的强弱。

这张图展示了Claude 4在SWE基准测试上遥遥领先。

![Claude 4在SWE基准测试上遥遥领先](https://cdn.sa.net/2025/05/23/4GzRlUrID768gQc.webp)

这张图则展示了Claude 4成为目前的LLM SOTA。

![Claude 4成为目前的LLM SOTA](https://cdn.sa.net/2025/05/23/bFT6NxuX1PmR8On.webp)

livebench.ai榜单上，Claude 4 Opus是目前经典LLM的第一把交椅。推理模型适合刷榜，经典LLM更适合用户日常提问。

![livebench.ai榜单上，Claude 4 Opus是目前的经典LLM之王](https://cdn.sa.net/2025/05/23/pSfFRHNJbWVdXEn.webp)

经典LLM方面，Google已经将推理模型和经典LLM结合；OpenAI最强的经典LLM其实是官网的ChatGPT 4o，有了各大丰富工具的辅助，用户体验也是一流的存在。

目前我的经典LLM第一选择: Claude官网的Claude 4 Opus和ChatGPT官网的ChatGPT 4o模型。

## Claude Code

挑选以下两个新命令来体验。

```bash
/install-github-app
/vibe
```

看看ChatGPT o3对于`/install-github-app`命令的介绍。

![ChatGPT o3对于`/install-github-app`命令的介绍](https://cdn.sa.net/2025/05/23/sN8CK1FOogUkHuB.webp)

可能会用到的操作命令: 

```bash
# 更新包管理器并安装GitHub CLI工具
apt upate && apt install gh -y

# 使用GitHub CLI进行身份验证登录
gh auth login 

# 根据提示操作，在github里面新建一个`personal access token (classic)`，
# 勾选`repo`、`workflow`、`admin:org`、`admin:public_key`4个选项。
```

专业程序员可以尝试用Claude Code GitHub Actions完成各种任务，我就不整了。

via:

https://github.com/anthropics/claude-code-action

https://docs.anthropic.com/en/docs/claude-code/github-actions#quick-start

`/vibe`命令里面是一个vibe coding(氛围编码)的彩蛋。

![`/vibe`命令里面是一个vibe coding(氛围编码)的彩蛋。](https://cdn.sa.net/2025/05/23/jiJyxbDo78VluEB.webp)

看到Claude 4 Opus解释中包含道德经，不由得感慨中华文化的博大精深，虽然Anthropic CEO极度反华。

![Claude 4 Opus对于/vibe命令彩蛋的解析](https://cdn.sa.net/2025/05/23/vSczFl7ixmK8gd2.webp)

代码之道(The Way Of Code)网站: https://www.thewayofcode.com/

利用Claude Code给上次整的贪吃熊精进了可视化效果和音效😁。via: https://bear.gujiakai.top/

相关的操作记录截图:

![Claude Code完善贪吃熊截图一](https://cdn.sa.net/2025/05/23/qfNZ9zYT1XctdAe.webp)

![Claude Code完善贪吃熊截图二](https://cdn.sa.net/2025/05/23/wmlAZE9joy2Rhu8.webp)

我脑袋里面一片空白，代码也没审查，就一直按Enter键`Yes`确认下去😂。

![完善后的贪吃熊最终效果](https://cdn.sa.net/2025/05/23/yIJtREf8sQDpcu6.webp)

好好学编程吧，你越强，你加AI越强。不然用Claude Code灵感很少。

![你越强，你加AI越强](https://cdn.sa.net/2025/05/23/1bMx35gDpoIqBO6.webp)

Claude Code建议在美国VPS上体验，今天的发布还包含了对于IDE工具(VS Code等)的集成，这个就不体验了。国内的机器不建议碰Claude相关的任何产品，一个不小心就把你的号扬了。分流自信且封号后有把握申诉解封的大神，尽管体验。

## Claude API

1、代码执行工具

2、MCP连接器

3、文件API

4、扩展提示缓存

官方相关的推文演示: https://x.com/AnthropicAI/status/1925633118104416587

前一段时间，我在Gemini API中体验过类似的代码执行工具，只能说Anthropic推出该功能的时间有些晚。OpenAI的代码执行工具相关的API 1年前就支持了。文件API也是类似的情况。

via: https://www.anthropic.com/news/agent-capabilities-api

## 其余

1、Claude Invite活动

Claude新推出的拉人头活动。via: https://claude.ai/invite

拉的人头越多，中奖4个月Claude Max套餐的几率越大。

有趣的是Claude拉人头活动对于美国本土的一些地区限制。具体可见Claude 4 Opus的答疑。

![Claude 4 Opus对于Claude拉人头活动限制美国部分地区的解答](https://cdn.sa.net/2025/05/23/ZqQUEnchwFrit1G.webp)

看到这篇文章还没注册Claude账号的小伙伴可以考虑走一走我Aff链接，给我免费拿4个月Max套餐增加一丢丢机会🥹。via: https://claude.ai/referral/_0IX9uZm2w

其实这种抽奖活动看看就好，普通用户自己拉自己，搞几个就行（我就搞了一个entry），没必要拉满100个。肯定会有拉了100个人头的老哥没中奖，拉了1个人头的老哥中奖的情况发生，到时候拉了这么多人头，竹篮打水一场空，会很破防。

![Claude拉人头活动我搞了1个entry。](https://cdn.sa.net/2025/05/23/tKs7EcVgM93x2zW.webp)


via: https://support.anthropic.com/en/articles/11408405-claude-4-invite-contest

2、Cursor、Windsurf、Github Copilot等第三方接入情况

![Windsurf CEO哭死，Claude 4模型没有第一时间提供给Windsurf。](https://cdn.sa.net/2025/05/23/dRUiQFPsvNEfCOB.webp)

Windsurf CEO哭死，Claude 4模型没有第一时间提供给Windsurf。估计Windsurf的用户量会略微受到影响。目前我写这篇博文所处的编辑器是Cursor，前一阵子用美国edu白嫖了一年。Cursor、Github Copilot等第一时间就接入了Claude 4模型。

via: https://x.com/_mohansolo/status/1925605908287250939

3、一些较好的链接资源、参考资料

a. Claude 4官方博文: https://www.anthropic.com/news/claude-4

b. Simon Willison大神有关Claude发布会的Live Blog: https://simonwillison.net/2025/May/22/code-with-claude-live-blog/

现场参与这场event，可以享受三个月的Max套餐，有些羡慕。

![现场参与这场event，可以享受三个月的Max套餐，有些羡慕。](https://cdn.sa.net/2025/05/23/8f7NPkBxaDwiq6s.webp)

c. Agent的定义: https://simonwillison.net/2025/May/22/tools-in-a-loop/

Agents are models using tools in a loop.(智能体是循环使用工具的模型。)

d. Claude模型对比: https://simonwillison.net/2025/May/22/updated-anthropic-models/

e. Claude相关X官方账户的推文:

https://x.com/alexalbert__/status/1925591741924876781

https://x.com/AnthropicAI/status/1925591505332576377

f. Tibor Blaho有关Anthropic发布会的总结推文: https://x.com/btibor91/status/1925641897369797038

g. Vibe Check: Claude 4 Opus博文: https://every.to/chain-of-thought/vibe-check-claude-4-sonnet

h. Anthropic官方直播: https://www.youtube.com/watch?v=EvtPBaaykdo

其余直播: https://www.youtube.com/@anthropic-ai/streams

i: Claude 4 System Card: https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf

## 推荐

如果你遇到了Claude账号封号的情况，推荐阅读之前我写过的两篇博文，最推荐利用美国Windows VPS远程桌面来降低被封号的概率。

- [Claude封号的解决方案](https://blog.gujiakai.top/2024/11/claude-account-suspension-resolution/)

- [自建Kasm Workspaces](https://blog.gujiakai.top/2025/03/self-hosted-kasm-workspaces/)

如果你不想被Claude环境折腾，个人推荐去淘宝搜索`Claude`买对应套餐，有一个名为`claude克劳德小屋`的店铺，体验不错，新客可以1人民币体验24小时。

该中转站点完整地镜像了Claude官方站点，应该是借鉴了L站站长的Fuclaude项目。就比如我想体验Claude仅限Max、Team、Enterprise开放的Research功能，就在该站点上用极低的成本体验。当然这个Research肯定是比不上ChatGPT、Gemini的Deep Research的。

![淘宝购买Claude中转服务体验Research功能](https://cdn.sa.net/2025/05/23/dwS3Ob2M8JPj6Ht.webp)

还有一种选择是收低价的1刀/月的Claude账号【持续3个月】。今年2月底Claude当时出过针对特定美国edu的一个1刀/月，持续12个月的教育优惠，如果上了这个活动，也是很不错的。

![Claude 1刀/月 edu套餐](https://cdn.sa.net/2025/05/23/o2T45YfFwxzusDj.webp)

最棒的选择肯定是获得一个与Claude合作的edu邮箱，比如美国东北大学，免费提供Claude Enterprise账号。

![与Claude合作的学校提供免费的Claude Enterprise账号](https://cdn.sa.net/2025/05/23/NmU3wxHIkdnVhcl.webp)

## 总结

Claude系列模型Web端使用，一般情况下，不推荐开Extended thinking，日常使用经典LLM就够了，除非经典LLM得到的回复不理想才会考虑开启thinking。

虽然Claude 4 Sonnet的SWE基准测试要比Claude 4 Opus要好上一丢丢，以及一些基准测试的代码能力评估显示Claude 4 Sonnet要好于Claude 4 Opus，但在Claude Web端我肯定会优先考虑Claude 4 Opus without thinking。以后遇到写作、代码相关的任务，第一时间选择Claude 4 Opus绝对是一个很棒的选择，除非Claude 4 Opus给出的回复不理想，才会考虑去问Claude 4 Sonnet。

Claude 4都出了，GPT 5还会远吗？期待在2025年中后期见到GPT 5模型。

