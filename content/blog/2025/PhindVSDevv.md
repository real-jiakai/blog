---
title: "Phind VS Devv"
date: 2025-03-25T14:21:17+08:00
tags: ['ai', '编程', '搜索','phind','devv']
slug: "phind-vs-devv"
summary: 分享AI编程搜索Phind和Devv的体验。
showtoc: true
---

## 更新(2025.3.25)

在有Claude Pro的前提下，也不能说Devv冗余吧。面对一些需要联网查询的编程问题，我一般会直接向Devv提问，Devv检索互联网，搭配上Claude 3.7 Sonnet Thinking模型给我答疑解惑。

Devv体验真心不错，推荐有经济条件，无法开Claude Pro，但想用Claude模型的小伙伴们开通。下午写文章时，语言可能有些过于偏颇了，下个月Devv的续费可能会继续，但Phind的会员已经取消了。

## 故事背景

在2月底，我订阅了Phind，再此之后，又订阅了Devv。使用快接近1个月了，特分享一下两款软件的个人体验感受。

在价格方面，Phind没有学生优惠，月付20美元；而Devv有学生优惠，邮箱提交学生证后，会有20%的折扣，月付16美元。

之所以愿意付费尝试Phind，是因为当时我遇到了一个Huggingface TRL库相关的问题，但是综合了各大AI搜索，只有Phind免费版70B的模型通过搜索直接将GitHub Issues中的解决方案找到并反馈给了我。

虽然如果我手动搜索，翻阅一会应该也能找到对应的解决方案。但这次良好的体验为之后我的付费尝试起到了促进作用。

第一次体验Phind是在2023年GPT-4爆火的那段日子，Phind主打的是程序员搜索引擎，当时的Phind结合了GPT-4和Web搜索，给我在编程学习方面提供了挺多帮助。记得当年我那台旧Windows电脑Edge浏览器的主页甚至都被我设置为了Phind。

在2024年，我并没有太多关注Phind。2025年2月份，一则Hacker News的帖子-[Phind 2: AI search with visual answers and multi-step reasoning](https://news.ycombinator.com/item?id=43039308)引起了我的兴趣，Phind2发布，官方宣称用视觉答案和多步推理重塑人工智能搜索，当时看了官方的[博客](https://www.phind.com/blog/)，确实很心动但还是忍住了。

Devv这款AI编程搜索，我在23年底注册过或者说收藏过，书签里面有这个网址，但我并没有仔细用过。这是一款国人开发的出海AI编程搜索。看了V站等平台网友的评价，都对于Devv的用户体验表示肯定。

两款AI编程搜索在起家时都提供免费的GPT-4+Web搜索服务，在以免费的策略吸引用户之后，便开始了商业化尝试，免费是不可持续的，特别是AI前沿模型的API价格昂贵，但商业化尝试注定会导致部分用户流失。在2024年后期，基本上，再也没看到有网友分享这两款软件的使用体验。

## Phind

Pro会员宣称的特点

![Phind Pro会员宣称的特点](https://cdn.sa.net/2025/03/25/hjP3rRaDgoAJeQS.webp)

- 无限的Phind系列模型搜索
- 多查询搜索模式
- 分析图像、PDF、CSV
- 每日500次的GPT-4o、Claude 3.7 Sonnet、10次的Claude Opus
- 聊天数据提供退出训练选项
- 在浏览器中运行代码

### 缺点

1、Phind2宣称的视觉搜索仅支持Phind系列模型，其余的GPT、Claude系列模型均不支持。

当时我付费的Phind时恰好在Claude 3.7 Sonnet发布前夕，一开始我选择Claude 3.5 Sonnet，搜索了几次后发现压根见不到任何可视化效果。将模型切换为Phind系列，出现了可视化效果。

2、Phind2.0只有Phind系列模型支持上传图片，其余的GPT、Claude系列模型均不支持。

当时我还特意去Phind Discord群询问，得到的回复：Phind 2.0只有Phind系列模型支持图片上传。

![Phind 2.0只有Phind系列模型支持图片上传](https://cdn.sa.net/2025/03/22/2dqQtiTDx1csHeL.webp)

不支持图片上传，严重限制了我的表达能力。可以说这一个月的体验确实一言难尽。

3、Phind系列模型拉垮

基于Llama3.1系列微调的产物，懂得都懂。Meta的开源模型体验不佳，2024年连老外都抛弃Llama，纷纷拥抱Qwen。

[Zuckerberg watching you use Qwen instead of LLaMA.😁](https://www.reddit.com/r/LocalLLaMA/comments/1hlzci9/zuckerberg_watching_you_use_qwen_instead_of_llama/)

![Zuckerberg watching you use Qwen instead of LLaMA.😁](https://cdn.sa.net/2025/03/22/N2Mv6S8y3dOJPs1.webp)

在浏览器中运行代码实测只有Phind系列模型支持，真得拉垮。

![在浏览器中运行代码实测只有Phind系列模型支持，真得拉垮。](https://cdn.sa.net/2025/03/25/igyc2DtEepI6jQf.webp)

4、中文提问，搜索中文互联网

![中文提问，搜索中文互联网](https://cdn.sa.net/2025/03/22/RLxbG4cT2ZKPNlg.webp)

我更改了Answer Profile中的提示词以及使用时均用英文提问，才勉强有了那么一丝丝体验。

![我更改了Answer Profile中的提示词以及使用时均用英文提问，才勉强有了那么一丝丝体验。](https://cdn.sa.net/2025/03/22/onMfLF6cZmzRVtl.webp)

5、Claude 3.7 Sonnet Thinking模式没有，只有常规的模式，虽然不是所有问题都需要Thinking，但Thinking模式最好有。

6、上下文有限

预计上下文窗口是32K。Phind的Discord群组中的一位[老外](https://discord.com/channels/996538859972214835/1077743365749227630/1345581789242069054)，给出了对Phind发展的期待，就足以见得现阶段的Phind已经在走下坡路了。

看到老外对于DeepSeek R1无审查版疯狂的偏执，不由得想笑，要想较少的审查直接Grok啊，马斯克的模型审查最少。既想要拥抱开源模型，又想要较少的审查，是不可能的，每个国家都有每个国家的立场和国情，能较完整地开源出来就已经彰显了足够的诚意了。

![老外对于Phind发展的期待](https://cdn.sa.net/2025/03/25/KaHUgDbvzr5STdE.webp)

### 优点

貌似没有优点，就算Claude和GPT模型保真，而且每日的次数较多。但使用下来优点确实是聊胜于无。2年前的Phind接入互联网可能还有些许优势，但放在2年后的当下，各大LLM提供商直接给LLM集成搜索了，Phind可以说真的已经有些一无是处了，虽然曾经70B的模型给过我一缕光。

![Phind产品优点难寻](https://cdn.sa.net/2025/03/22/hTtv9lgWH5FycC1.webp)

### 其余

Phind支持生成图片、生成视频，估计也是用的开源解决方案。AI编程搜索搞这么花里胡哨的玩意完全没有必要。

![Phind支持生成图片](https://cdn.sa.net/2025/03/22/RNQkl3PpCgzsfSh.webp)

![Phind支持生成视频](https://cdn.sa.net/2025/03/22/aUY3kIjB8gNDKC6.webp)

视频生成链接: https://www.phind.com/search/cm8k4gno200003b6syi9uwty5

Phind据说还有VS Code扩展，懒得安装体验，现在的AI编程扩展在Cursor、Windsurf等软件面前黯然失色了。

在Phind的Discord群组里面，我还遇见了黑命贵。真无语。

![在Phind的Discord群组里面，我还遇见了黑命贵。真无语。](https://cdn.sa.net/2025/03/22/gRKPCYtnyEZGrT2.webp)

- 补充案例—展示Hacker News最新动态

当时【2025年3月12日下午】我测试了很多模型，只有Phind和GPT的搜索能够获取到Hacker News榜首的Gemma3发布讨论。ChatGPT还是有实力的，用户体验这一块确实做得不错，没尝试Claude联动MCP抓取Hacker News。

![Phind搜索能获取到Hacker News榜首的Gemma3发布讨论](https://cdn.sa.net/2025/03/12/tfKS6pYUiWBaE2C.webp)

![Phind搜索能获取到Hacker News榜首的Gemma3发布讨论](https://cdn.sa.net/2025/03/12/UWylMADXuq6HtIa.webp)

![ChatGPT能获取到Hacker News榜首的Gemma3发布讨论](https://cdn.sa.net/2025/03/12/r2Z5Yk9wh4LxBGv.webp)

![Hacker News Top](https://cdn.sa.net/2025/03/12/hDQrRstlIv9waAW.webp)

尝试不同的提示词，Devv也能抓取Gemma3的发布讨论。

![尝试不同的提示词，Devv也能抓取Gemma3的发布讨论。](https://cdn.sa.net/2025/03/12/eW5ghJTRrnmaSUw.webp)

最近Claude推出了搜索，可惜官方集成的搜索是Brave Search，Brave Search的质量肯定是不及Google Search的。面对这个案例提示词哑火了，无法获取实时Hacker News讯息，搜索得到的还是几天前的内容。

![Claude搜索无法获取实时Hacker News讯息](https://cdn.sa.net/2025/03/22/GOoFknRIBwHv7Cf.webp)

2025年3月25日下午尝试，Claude 3.7 Sonnet Thinking依旧无法较好地展示Hacker News的实时讯息？我想表达的是：Brave Search拉胯，真心希望Anthropic官方能换个更优质的搜索引擎合作伙伴。

![2025年3月25日下午尝试，Claude 3.7 Sonnet Thinking依旧无法较好地展示Hacker News的实时讯息？](https://cdn.sa.net/2025/03/25/v68FXeRnrgitlaK.webp)

![2025年3月25日下午Hacker News实时讯息](https://cdn.sa.net/2025/03/25/pPKSEzasgiJxhQL.webp)

我承认Anthropic官方给Claude加了搜索的确提升了Claude的能力，但也必须指出其存在的缺陷。有些时候也感叹，Claude的最强形态应该是Claude Desktop+MCP Google Search/Kagi Search/SearXNG/其余高质量搜索引擎吧。

![Mistral AI搜索也是集成的Brave Search](https://cdn.sa.net/2025/03/25/R9WLd3Z45OVJGBn.webp)

### 小结

Phind迭代速度太慢了，Phind2宣称的视觉搜索就是用互联网上抓取的图片和Mermaid代码生成图表和流程图，这样的视觉搜索实在是太低级了，宣传和实际体验差距太大。

我肯定不会续费。这一个月的会员费也是我VPS挂机卖流量得的美刀付的，不心疼。

## Devv

相较于Phind，Devv可圈可点的较多。

Pro会员宣称的特点：

![Devv会员宣称的特点](https://cdn.sa.net/2025/03/25/UQijnMhz8CIE9eb.webp)

- 无限搜索
- 高级模型访问权限
- 支持搜索和GitHub模式
- 无限次访问高级模型
- 支持图片上传（一次最多上传4张图片，1天50次带图片搜索）
- 扩展的记忆上下文
- 输入窗口36K

### 缺点

1、输入窗口36k

![输入窗口36k是Devv的一大缺点](https://cdn.sa.net/2025/03/25/Pw7ZAszW9UkpdnD.webp)

开了会员，一次性输入的内容的限制为36000，完全无法和Claude官网比拟。

![Claude官网的一次性输入限制吊打Devv](https://cdn.sa.net/2025/03/25/uxL6MlQvfpU9GFt.webp)

2、GitHub模式模型只能看到仓库的一部分内容。

如果能看到仓库的全部内容，紧接着依据用户的问题去相应的文件查询，并给用户解释对应部分的代码，感觉会更好。

![Devv GitHub模式模型只能看到仓库的一部分内容](https://cdn.sa.net/2025/03/25/MriRUXZeluy5N2b.webp)

在这一个月的体验期内，该模式我基本上没怎么用过。附加个人仓库，需要给Devv一定的时间去索引对应的仓库。

![Devv GitHub模式索引仓库](https://cdn.sa.net/2025/03/25/KeyQrW5s7ARz2EO.webp)

3、非通用搜索

在一些通用问题搜索方面不如Perplexity等搜索，也不好归结为是其缺点，人家本来主打的就是开发者搜索引擎。

4、有些时候存在幻觉

目前的Devv中的Claude 3.7 Sonnet是带Thinking的版本，但并不是所有问题都需要思考。

就算带了思考，有些时候也会存在幻觉，也可能被互联网上的网页信息给误导。

记得之前有一次询问Devv中的Claude 3.7 Sonnet有关Ollama配置相关的问题，给到的结果中存在错误信息。

### 优点

1、设置了用户偏好语言后，可实现中文提问，英文检索，中文回复。

![Devv设置了用户偏好语言后，可实现中文提问，英文检索，中文回复](https://cdn.sa.net/2025/03/25/ZyUWJkNLmuspbRl.webp)

2、Devv Contexts

Devv Contexts 使开发人员能够选择和包含编程语言、平台、工具、库和框架，以获得集中而准确的搜索结果。

![Devv Contexts 使开发人员能够选择和包含编程语言、平台、工具、库和框架](https://cdn.sa.net/2025/03/25/hnmt9pdGivouD6w.webp)

其实我日常也没怎么用过@符号来限定编程语言、框架等范围。Devv的模型肯定是保真的，创建的HTML网页确实是Claude的审美！

![Devv的模型肯定是保真的，创建的HTML网页确实是Claude的审美！](https://cdn.sa.net/2025/03/25/6o5thSe2CzvAON3.webp)

3、无限次访问高级模型

这点确实更加慷慨。普通人我估计一天能提出50个问题就已经是极限了。商家其实也知道一般人一天压根就提不出几个问题，主打无限其实并不亏。

试想一下，普通用户每天撑死询问10个问题，1个月接近300个问题，整Claude API估计也很难花费掉20刀。除非一直在一个对话中聊天，较快地消耗Token，不然20刀肯定是用不完的。

4、Web搜索可开关

其实Phind等搜索也是可开关等，关了搜索就是用限制上下文长度和限制一次性输入长度的高级模型。

Devv开了Web搜索就会有Devv Agent规划；关闭了Web搜索，就是保真的LLM模型。

搭配上Claude 3.7 Sonnet Thinking体验较好。

![Devv Agent+Claude 3.7 Sonnet Thinking](https://cdn.sa.net/2025/03/25/8K5l6LAIscmRy7D.webp)

![Devv中的Claude 3.7 Sonnet Thinking](https://cdn.sa.net/2025/03/25/uHTZwy3qW2mj5eC.webp)

### 小结

别看我测评Devv的篇幅没Phind多就意味着我不上心，其实只是因为Phind的槽点实在太多了。

Devv的作者在V站、X上分享构建Devv的经验帖挺值得阅读的。

![Devv的作者在V站、X上分享构建Devv的经验帖挺值得阅读的。](https://cdn.sa.net/2025/03/25/8ZKXYo3rFEIwu5h.webp)

无法开通Claude Pro的用户而言，付费Devv确实是一个不错的选择。

![无法开通Claude Pro的用户而言，付费Devv确实是一个不错的选择。](https://cdn.sa.net/2025/03/25/AzlvZDYc1P8n5BG.webp)

想体验Devv的小伙伴可以考虑走我的Aff，互得10刀。via: https://devv.ai/referral?code=d47llwog7gn4

![想体验Devv的小伙伴可以考虑走我的Aff，互得10刀。](https://cdn.sa.net/2025/03/25/vmUC9EGwYf7KPr2.webp)

而对于开通了Claude Pro的用户而言，付费Devv其实略微显得多余，Claude官方的体验已经相当不错了。虽然Brave Search有些时候稍显鸡肋，但大部分情况下对于Claude的加持还是非常明显的。

昨天我发现的Anthropic领先于其余商家的另外一个点：添加了附件，依旧能进行搜索操作！

![Claude添加了附件，依旧能进行搜索操作图1](https://cdn.sa.net/2025/03/25/QxWiufwnUH9oh2b.webp)

![Claude添加了附件，依旧能进行搜索操作图2](https://cdn.sa.net/2025/03/25/9adg6XQ73RGs4y1.webp)

## 总结

Claude官网是唯一真神，Devv效果还行，Phind目前来看是个残次品。

![Claude官网是唯一真神，Devv效果还行，Phind目前来看是个残次品。](https://cdn.sa.net/2025/03/25/K3frH5cNYIeGxuZ.webp)


