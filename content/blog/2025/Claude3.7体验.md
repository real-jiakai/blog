---
title: "Claude 3.7 体验"
date: 2025-02-25T07:55:29+08:00
tags: ['claude','anthropic']
slug: "claude-3-7-experience"
summary: 分享Claude 3.7 使用体验。
showtoc: true
---

2025年2月24日【2025年2月25日北京时间凌晨】Claude 3.7横空出世，真正的遥遥领先降临人间!

## 更新内容

首先来看一下官方News的主要内容[^1]，这次选择用Phind中的Claude 3.7 Sonnet来进行总结。

![官方News Phind总结1](https://cdn.sa.net/2025/02/25/hdVIUKTwnB3meoX.webp)

![官方News Phind总结2](https://cdn.sa.net/2025/02/25/l2jwEuYebItxUa1.webp)

仔细阅读完该News后，给我的感觉就是震撼！

我的疑问：官方News中宣称Claude 3.7 Sonnet是市面上第一个混合推理模型？

Phind和Grok3 DeepSearch的想法:

![Phind对于混合推理模型的解释](https://cdn.sa.net/2025/02/25/DMpjBe1JHIF3Pal.webp)

![Grok3 DeepSearch对于混合推理模型的解释](https://cdn.sa.net/2025/02/25/2XYanzfoTFuPOI5.webp)

个人更倾向于认为第一个混合推理模型应该是Grok3，毕竟点击了Think按钮，Grok3在回复前会思考一会。而DeepSeek等的推理模型是新模型，也有可能我的理解有误，毕竟这一观点还存在争议。

官方研究博文—Claude’s extended thinking[^2]，Phind总结如下：

![Phind总结官方研究博文1](https://cdn.sa.net/2025/02/25/DXqWJVi513KEu4k.webp)

![Phind总结官方研究博文2](https://cdn.sa.net/2025/02/25/EWlIL5psUKNTO6X.webp)

和以往推理模型的不同之处：

![Claude 3.7 Sonnet模型与以往推理模型的不同](https://cdn.sa.net/2025/02/25/quJX2E3IN8yMHUY.webp)

Claude 3.7 系统卡片[^3]，Claude 3.7 Sonnet Extended总结：

![Claude 3.7 Sonnet Extended总结其系统卡片](https://cdn.sa.net/2025/02/25/653DqbyzBCNjWe9.webp)

- 集成GitHub

![Claude集成GitHub的功能](https://cdn.sa.net/2025/02/25/9MyusGxcE2AR38X.webp)

直接选中文件/文件夹就能将对应内容添加到Chat中。如果有一个GitHub项目对于你的业务来说至关重要，但是代码不是很看得懂，或者代码需要添加新的功能，可以将对应部分的代码以这种方式添加到Claude Chat中，让Claude帮你出谋划策！实测，私有的代码仓库也行，前提是授予Claude For Github App相关仓库的读取权限。

![添加GitHub仓库文件到Claude Chat中体验](https://cdn.sa.net/2025/02/25/srAKYLuTJpeyMdn.webp)

但仔细琢磨，我的博客content文件夹的大小400多KB，就占据了62%的容量限制，而且在一个对话中，不能再次添加相关GitHub文件，只能在初始阶段添加，还是稍显鸡肋。而且仅仅是给出相应代码的文字讲解或者文字提示，不能操作对应代码。这方面还得看Cursor、Windsurf等AI代码编辑器来更好地全局感知、编辑。

![Claude集成GitHub仅仅针对文件内容聊天，无法操作对应代码](https://cdn.sa.net/2025/02/25/WoDbl9jxkeMdf7n.webp)

- Claude Code[^4]

Phind总结：

![Phind有关Claude Code总结1](https://cdn.sa.net/2025/02/25/dHlp4e5wyQDKM8r.webp)

![Phind有关Claude Code总结2](https://cdn.sa.net/2025/02/25/y7mA5HLaO4ExdlT.webp)

建议搭配VSCode这类编辑器，利用远程SSH连接美国干净IP的Linux VPS进行开发体验。个人感觉这还是个类似于Computer Use的玩具，Money Is All Your Need! Claude的API价格相较于其他LLM更贵，但效果是真得好。

```bash
# 下载并安装 fnm（Fast Node Manager）
curl -fsSL https://fnm.vercel.app/install | bash
# 重新加载 bash 配置以使 fnm 命令可用
source ~/.bashrc
# 安装 Node.js 版本 22.14.0
fnm install 22.14.0
# 将 Node.js 版本 22.14.0 设置为当前使用版本
fnm use v22.14.0
# 全局安装最新的 pnpm 10.x 版本
npm install -g pnpm@latest-10
# 设置 pnpm 配置
pnpm setup
# 再次重新加载 bash 配置以使 pnpm 命令可用
source ~/.bashrc
# 全局安装 Claude Code 命令行工具
pnpm add -g @anthropic-ai/claude-code
# 创建一个名为 claude-test-snake-game-in-terminal 的新目录
mkdir claude-test-snake-game-in-terminal
# 进入新创建的目录
cd claude-test-snake-game-in-terminal
# 启动 Claude Code 命令行工具
claude
```

![Claude Code演示图1](https://cdn.sa.net/2025/02/25/A6uRHGS2irk3twL.webp)

![Claude Code已经满负荷了](https://cdn.sa.net/2025/02/25/FTQDR68NiU2zvCt.webp)

Claude Code目前满负荷了，等有位置了再去体验一下。

据说其中有彩蛋，贴纸仅限在美国境内运送。

![Claude Code据说有彩蛋](https://cdn.sa.net/2025/02/25/wjCK64HbvfDtqlE.webp)

![Gemini对于推文的图片解释](https://cdn.sa.net/2025/02/25/lvkfIrwSdoh4tDA.webp)

via: https://x.com/nrehiew_/status/1894112547873210710

- thinking budget

![Anthropic有关thinking budget的推文](https://cdn.sa.net/2025/02/25/2Vq9JwoWh7aMQtH.webp)

API用户可以通过`thinking`参数精确控制模型思考的深度。这类似于openai o系列模型的`reasoning_effort`。DeepSeek官方文档中也提及到近期会上线`reasoning_effort`参数。今天发现DeepSeek充值渠道恢复了，写文章时冲了50块，以备不时之需。

![DeepSeek官方文档提及reasoning_effort内容](https://cdn.sa.net/2025/02/25/bLI5jWfmkqSzMpu.webp)

- 减少了不必要的拒绝

我主要问代码等学习相关的问题，基本上从来没有遇到过拒绝请求的操作。

via: https://x.com/AnthropicAI/status/1894095494969741358

- 新模型、价格和之前版本的Sonnet保持不变

价格昂贵，但效果极佳！

- 思维链公开

Claude 3.7 Sonnet Extended思维链默认是收缩状态。

目前Deepseek、Qwen等默认是展开状态，国外的ChatGPT o系列模型、Grok3、Gemini Flash Thinking模型、Claude 3.7 Sonnet的思维链默认都是收缩的。两种交互方式都OK，不存在孰优孰劣。

![Claude 3.7 Sonnet Extended思维链默认是收缩状态](https://cdn.sa.net/2025/02/25/jNzPW3kaoiTwUMy.webp)

据说思维链中的有害内容不呈现给用户。

![有害的内容不包含在思维链中](https://cdn.sa.net/2025/02/25/bYILMljKxP2ZpRT.webp)

- 编码和前端web开发遥遥领先

这我就不多说了，看到X上的讨论，全是Claude代码能力碾压其余模型的推文。个人预计代码能力肯定更近了一步，毕竟上一版就是经典LLM中的代码之王，果然能超越Claude的非推理模型也只能是Claude了。

![Claude代码能力遥遥领先](https://cdn.sa.net/2025/02/25/vUon1EyAsklW48O.webp)

细看livebench.ai上的排名，这一版的Sonnet的代码能力评估有提升但不多。别看o3-mini-high的代码跑分这么高，但真实用户体验还得是Claude，OpenAI的o3-mini系列产品印证了一句话：“跑分没输过，用户体验没赢过！”

自行体会下面这则推文，Claude系列模型绝对的遥遥领先！OpenAI的o系列模型简直就是弟中弟。

![Claude在SWE-Bench中断档式领先](https://cdn.sa.net/2025/02/25/HeFjnhGbIzKwogQ.webp)

via: https://x.com/cline/status/1894108194693419450

再来看看Phind中的Claude 3.7 Sonnet对于[aider排行榜](https://aider.chat/docs/leaderboards/)的分析。简直细思极恐，太强了！

![Phind对于aider排行榜的分析](https://cdn.sa.net/2025/02/25/KatRTb8erqHgwzs.webp)

看到有博主说其写作能力下降了，具体我没实测过，目前没有写作任务场景。

只要LLM有一方面是顶级，不怕没人用，不要指望LLM各方面全能，一般而言，LLM能力是此消彼长的，训练的数据中包含了更多的代码数据，有可能会削弱写作能力。

## 发现的改进

- 写代码注释比去年10月份的Sonnet更遵循指令。

这一版的Claude写代码注释，不管是Normal还是Extended，代码注释均能遵循指令在每行代码上方添加。上一版的Sonnet写代码注释追求的是简约美，少即是多。我的偏好是注释能多就多，方便理解。

![Claude写代码注释更遵循指令](https://cdn.sa.net/2025/02/25/GgmRZ958d34ztpf.webp)

## 有趣的案例

- 现任美国总统是谁？

Anthropic满满的求生欲。😁

![有趣的案例1](https://cdn.sa.net/2025/02/25/ol3Pvgmc4qbF7zn.webp)

- 草莓难题

Claude 3.7 Sonnet Normal/Extended，面对草莓难题时均用前端代码展示：

Normal: 

![有趣的案例2-1](https://cdn.sa.net/2025/02/25/5C4IsxJToW8blgc.webp)

Extended: 

![有趣的案例2-2](https://cdn.sa.net/2025/02/25/RZDjXFOl5VQEsdS.webp)

在我的测试中，Normal的前端页面更加棒！

- 旋转小球测试

Normal:

![有趣的案例3-1](https://cdn.sa.net/2025/02/25/mQpB5DFZGN8SK2a.webp)

via: https://claude.ai/share/13475764-f78e-4b1b-8be7-9fb438cd540e

Extended: 

![有趣的案例3-2](https://cdn.sa.net/2025/02/25/vTFjS2WIalOXGzn.webp)

在X上看到有[网友](https://x.com/theo/status/1894101944068641241)说Claude 3.7 Sonnet Extended无法通过旋转小球测试，我测试时是可以通过的。

via: https://claude.ai/share/c5d2f51a-6907-43e7-838e-553b04818de1

pygame在线测试地址: https://trinket.io/features/pygame

- 字母数量测试

Normal: 

![有趣的案例4-1](https://cdn.sa.net/2025/02/25/8pbsND6znJlmUFr.webp)

Extended:

![有趣的案例4-2](https://cdn.sa.net/2025/02/25/4fGrtZzyOmgboE9.webp)

个人主观感觉，这次测试中Normal模式回答这道题目更全面。并不是思考地越多，回答就越好。我用该题目考了考Grok3 Thinking，发现思考3s的回答也很全面，而思考17s的回答类似Claude 3.7 Sonnet Extended。

## 未来可期的点

- web搜索

前些天还有爆料Claude要集成web搜索的，今天并没有如期上架，如果Claude真得集成了Web搜索，并且优化了Web搜索体验，比如去GitHub项目Issues里面拿准确的解决方案，这绝对对于目前的AI搜索是降维打击，目前我发现Perplexity、Phind这类AI搜索面对代码报错信息，相对于ChatGPT Search、Gemini Google Search、Grok3 DeepSearch，能较为准确地拿到解决方案。

## 总结

OpenAI可以说已经死了，今早看完了有关Claude新发布的内容，觉得Anthropic会更快地逼近AGI！据说OpenAI本周会发布GPT4.5，如果发布的模型打不过Claude 3.7 Sonnet Normal估计真得快死透了，前几天发布的PDF文档里面包含了遥测分析中国用户使用ChatGPT的行为，使得目前我也只能远程美国Windows，挂美国家宽，对比OpenAI产品【本地手机、电脑、平板上的ChatGPT应用全卸光了】。

OpenAI、Anthropic两家的产品只能远程美国Windows电脑，挂美国家宽用，本地用的安全性太低。降智、封号这些操作一言难尽！

还有别忘了上个月Antropic发布的Citation功能，这个功能为RAG应用提供了显著的价值。

![Antropic发布的Citation功能为RAG应用提供了显著的价值](https://cdn.sa.net/2025/02/25/jRfige2n69Bbz1O.webp)

虽然近期Anthropic CEO发布了饱含争议的言论，但我觉得他家的产品确实是最耐打的。记得之前有人因为看不惯其的狰狞面目，退订了Claude Pro，我觉得是不值得的，这反而会让你错失使用最强大AI工具的机会。对于普通人而言，哪家的产品优秀就支持哪家，其余的都和我无关！

从刚才几个简单的案例中可以初见并不是所有的问题都是Extended模式更佳，Normal、Extended两个模式各有千秋，多尝试不同模式，方能找到针对某些问题的最佳Claude 3.7 Sonnet回复。

期待未来Anthropic的web搜索和Claude4！预计会和去年发布时间线类似，下一次发布是在6月底！

## 补充

一个对话窗口中仅仅只能限定一个Claude 3.7 Sonnet模式，无法实现类似ChatGPT一个对话窗口中可以切换不同模型的操作。

via: https://mp.weixin.qq.com/s/MedDDltDvKWp1uJTGF9yPg

[^1]: https://www.anthropic.com/news/claude-3-7-sonnet

[^2]: https://www.anthropic.com/research/visible-extended-thinking

[^3]: https://assets.anthropic.com/m/785e231869ea8b3b/original/claude-3-7-sonnet-system-card.pdf

[^4]: https://docs.anthropic.com/en/docs/agents-and-tools/claude-code/overview