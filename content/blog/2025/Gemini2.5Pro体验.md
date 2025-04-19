---
title: "Gemini 2.5 Pro体验"
date: 2025-03-30T14:29:10+08:00
tags: ['gemini']
slug: "gemini-2-5-pro-experience"
summary: 分享Gemini 2.5 Pro体验的一些感受。
showtoc: true
---

## 更新(2025.4.19)

Google大撒币给学生群体的官方博文: https://blog.google/products/gemini/google-one-ai-premium-students-free/

## 重要事项(2025.4.18)

家大业大的Google就是牛逼。美国Edu邮箱验证后直接免费15个月。直接薅羊毛！via: https://gemini.google/students/

![Google Advanced对美国学生免费15个月-图1](https://cdn.sa.net/2025/04/18/IgOYdxh9bETfFZD.webp)

![Google Advanced对美国学生免费15个月-图2](https://cdn.sa.net/2025/04/18/G5QBuWjv6ZeEKqJ.webp)

![Google Advanced对美国学生免费15个月-图3](https://cdn.sa.net/2025/04/18/cwIg9JBHPEDYLRt.webp)

不多说，Google牛逼，期待Gemini早晚横扫所有的LLM，一家独大！

## 更新(2025.4.18)

这篇文章就用于记录Gemini 2.5系列模型的更新笔记了。

- Gemini 2.5 Flash早期预览版发布

Google的第一款混合推理模型，开发者可通过`thinking_budget`参数调整模型的思考深度。

AI Studio、Vertex AI、Gemini App均可用。其中在Gemini App中，2.5 Flash替代了原本的2.0 Flash Thinking。

![在Gemini App中，2.5 Flash替代了原本的2.0 Flash Thinking](https://cdn.sa.net/2025/04/18/3YsIZBqWhkTbDFO.webp)

AI Studio中的定价策略，可参考ChatGPT o4-mini-high的解析【不一定准确，一般绑卡用户使用preview模型要注意是否收费】。我一般都是拿没绑卡的AI Studio账号体验的，就怕被收费，自己绑卡的AI Studio账号只有在需要调用API批量处理数据时再使用。

![ChatGPT o4-mini-high有关gemini 2.5 flash ai studio定价策略解析](https://cdn.sa.net/2025/04/18/4j32QwJZMdclSIO.webp)

我肯定不会优先考虑用2.5 Flash，毕竟目前Gemini 2.5 Pro才是Gemini系列最强的模型。

via: 

1. https://developers.googleblog.com/en/start-building-with-gemini-25-flash/

2. https://blog.google/products/gemini/gemini-2-5-flash-preview/

3. https://simonwillison.net/2025/Apr/17/start-building-with-gemini-25-flash/

## 更新(2025.4.17)

- Gemini App中的Gemini 2.0 Flash和2.5 Pro支持Latex渲染

via: https://x.com/joshwoodward/status/1912300138074444095

![Gemini App中的Gemini 2.0 Flash和2.5 Pro支持Latex渲染](https://cdn.sa.net/2025/04/17/UjvGpK7ZSMwEhNr.webp)

- Gemini Live开始向所有的安卓用户逐步推送

via: https://x.com/GeminiApp/status/1912591827087315323

## 更新(2025.4.16)

Veo2逐步向Gemini App中的Advanced用户推出，Veo2在AI Studio中全面推出。

via:

- https://developers.googleblog.com/en/veo-2-video-generation-now-generally-available/

- https://blog.google/products/gemini/video-generation/

早上整理邮件，发现Google又送了我三个月的Gemini Advanced会员。之前这个老号已经试用过Gemini Advanced会员了。只能说Google的产品实在是太实惠了。虽然隐私做得差，免费用的聊天数据都会被用于改进Gemini，但确实物美价廉。相较于OpenAI和Anthropic简直太划算了。

Claude今天推出Research功能，看了演示和新功能不再对Pro用户开放后，我摇了摇头，步OpenAI的老路就是在自掘坟墓，希望Gemini早日把这两家全部打死！

![Google又送了我三个月的Gemini Advanced会员](https://cdn.sa.net/2025/04/16/jZXtqgCT3uP6BAh.webp)

## 更新(2025.4.15)

Gemini 2.5 Pro也有槽点，让推理模型写代码注释，推理模型会改动原本的代码。

## 更新(2025.4.12)

Gemini Advanced中的2.5 Pro应该不是聊天优化版本，非常推荐小伙伴们开通Google One AI Premium套餐，个人体验了这么久，Gemini Advanced体验比之前出色多了。

想低成本持续用Gemini Advanced，可以淘宝、咸鱼买月抛号，我看L站一些小伙伴就是这样子搞的。我目前的Google One AI Premium套餐是美国教育邮箱验证后的9.9刀/月。具体见[Google One Student Discount](https://one.google.com/explore-plan/ai-premium-student)。最近挺多美国教育邮箱学生优惠的AI活动，1刀/月的Claude会员、免费2个月的ChatGPT Plus、免费两个月的Super Grok，美国4大前沿AI都可以低成本白嫖。

Gemini Advanced、AI Studio、Vertex AI Studio三个地方的2.5 Pro模型都可以对比用用。就比如下午我让三处地方的2.5 Pro写代码注释【将近千行，是Colab直接下载下来的Python文件中的代码】，Gemini Advanced表现最佳，Vertex AI输出一大串后直接报错了，AI Studio输出一大串后，直接出现了代码块包裹问题，备注：每次最优回复的出处不一定】。目前写代码注释我开始倾向于Gemini 2.5 Pro了，OpenAI的o3-mini-high感觉不得劲。

![Gemini Advanced完整输出代码注释](https://cdn.sa.net/2025/04/12/73WaeM9DiZsNBY5.webp)

1M的上下文窗口简直无敌，Claude的200K或500K，ChatGPT Plus用户的32K，Pro用户的128K，在Gemini面前全是弟弟。而且Gemini上下文抗衰减能力也一流，真正的LLM King!!!!!

## 更新(2025.4.10)

预计未来AI竞争格局，Google的领先优势会越来越大。

![预计未来AI竞争格局，Google的领先优势会越来越大。](https://cdn.sa.net/2025/04/10/Bt3U1QOFSJNMfP8.webp)

当OpenAI推出高昂的Pro套餐、Anthropic步OpenAI的老路推出昂贵的Max套餐，而Google则继续提供免费白嫖最强大的LLM服务，付费的Gemini Advanced会员除了近乎无限制用外，还包含Google One等一系列服务，这性价比显而易见。

![OpenAI和Anthropic破坏AI平权化](https://cdn.sa.net/2025/04/10/riOslXFdo6kB8WC.webp)

## 更新(2025.4.9)

Gemini App Deep Research由最强大的Gemini 2.5 Pro模型所驱动，Gemini Advanced用户可以体验到。

via: https://blog.google/products/gemini/deep-research-gemini-2-5-pro-experimental/

![Gemini App Deep Research由最强大的Gemini 2.5 Pro模型所驱动，Gemini Advanced用户可以体验到。](https://cdn.sa.net/2025/04/10/Vkp1jHINXAO38tE.webp)

## 更新(2025.4.8)

- Gemini Live进一步向安卓用户推出

中文音色方面不咋滴，但Gemini 2.5 Pro模型能力出众。

via: https://blog.google/products/gemini/gemini-live-android-tips/

- Gemini 2.5 Pro编码能力确实出众

看了很多网友对于Gemini 2.5 Pro的溢美之词，以及结合自身的感受。感觉Gemini 2.5 Pro在编码方面的造诣确实有超越Claude 3.7 Sonnet的趋势，综合来看，Gemini 2.5 Pro已经遥遥领先，不仅横扫各大基准测试，而且用户体验也是一绝。

Gemini 2.5 Pro和Claude 3.7 Sonnet双持，绝对是当下的最优解【由于Gemini 2.5 Pro目前是一款推理模型，推理模型擅长的领域: 逻辑、代码、数学，故其余的一些方面依旧还是不能轻视Claude 3.7 Sonnet的，此外Anthropic不是面向基准测试开发模型，而是基于实际需求，这一点造成了大众对于Claude的低估！】。未来最逼近AGI形态的AI看起来很有可能真的是Gemini。

![未来最逼近AGI形态的AI很有可能是Gemini](https://cdn.sa.net/2025/04/08/d2mbDXvUN4cIGqC.webp)

## 更新(2025.4.5)

- OpenAI延迟GPT-5发布

OpenAI延迟了GPT-5的发布，大概率的原因就是Gemini 2.5 Pro已经达到了GPT-5级别，目前OpenAI整合的GPT-5无法压倒所有的基准测试，无法力压Gemini 2.5 Pro。

试想一下，如果你是Sam Altman，你会允许发布的GPT-5没有做到各方面的遥遥领先？个人预计GPT-5发布的时间在于OpenAI真的开发出了一款能够压倒所有基准测试的模型，要不然GPT-5就永远是一张饼。

![OpenAI推迟GPT-5发布](https://cdn.sa.net/2025/04/05/B5Ups43N9Ghgkoz.webp)

继续发布推理模型是OpenAI苟延残喘的写照，虽然前一阵子发布的GPT-4o原生文生图确实牛逼，但OpenAI基础的非推理模型方面的迭代，个人认为已经有些差强人意了。

面向基准测试开发模型是一个大忌，个人非常欣赏Anthropic面向实际需求开发模型的做法，这才是开发LLM模型的正确姿势。用户体验好了，不怕没人用，就算目前Claude在各大基准测试上已经不再位居榜首，但它较好的用户体验永远吸引着我，目前为止，Agent底层模型较好的选择也是Claude。

最近看了很多有关Gemini 2.5 Pro的文章，概括起来就是Gemini 2.5 Pro最具性价比，可以说是目前最强的模型（LLM之王），价格也控制在较为合理的区间。

别看我貌似一直在在夸Claude，其实Claude也不是万能的，目前的LLM各有千秋。

- Gemini 2.5 Pro推出付费预览版

ID为`gemini-2.5-pro-exp-03-25`的实验模型继续免费提供，ID为`gemini-2.5-pro-preview-03-25`的预览模型开启付费预览，价格相较于OpenAI和Anthropic更具竞争力。具体可参考Simon Willison大神的博文—[Gemini 2.5 Pro Preview pricing](https://simonwillison.net/2025/Apr/4/gemini-25-pro-pricing/)。

![Gemini 2.5 Pro Preview定价](https://cdn.sa.net/2025/04/05/wbUACoZfSXOxp28.webp)

- Gemini 2.0 Pro不复存在

via: https://x.com/OfficialLoganK/status/1908179750536827183

![Gemini 2.0 Pro不复存在](https://cdn.sa.net/2025/04/05/G2hbx3vUAaXFTmO.webp)

## 更新(2025.4.4)

我的Gemini App也拿到了Gemini Live Camera的功能，还是那句话，中文领域的语音看豆包，Gemini Live Camera用英文互动体验较好，中文体验不咋滴。现阶段Gemini App语音转中文貌似都不支持就别指望搭配上Live Camera能有多好的体验了，流利的英文口语表达是获得Gemini Live Camera较好体验的前提！

![Gemini Live Camera差点意思](https://cdn.sa.net/2025/04/05/ZrYlJLCRDx9Pb1S.webp)

## 更新(2025.4.3)

- Gemini 2.0 Pro实验模型下线

AI Studio中的Gemini 2.0 Pro的实验模型已经无了，据L站网友说，目前Vertex AI中还保留，但我个人测试时发现，Vertex AI中的Gemini 2.0 Pro实验版出现了思维链，估计也是被Gemini 2.5 Pro实验版所替换了，名字可能一时半会还保留着。

via: https://ai.google.dev/gemini-api/docs/models#gemini-2.5-pro-exp-03-25

![Gemini 2.5 Pro实验版替换了Gemini 2.0 Pro实验版](https://cdn.sa.net/2025/04/03/NFdEfOgMZ4xKRC9.webp)

![Vertex AI中的Gemini 2.0 Pro实验版出现了思维链](https://cdn.sa.net/2025/04/03/bU1x39ADryLWfuC.webp)

短命的Gemini 2.0 Pro实验版。未来的GPT-5、Gemini 2.5 Pro【估计是在今年5月下旬的Google IO开发者大会这个时间点发布，可能OpenAI会再次与Google竞相发布】可能都将是结合推理和经典LLM的模型，不再需要人为地进行切换。如果遇到不需要推理的提问，就用经典LLM模型进行回复；如果遇到需要推理的场景，则启用思维链。

![Gemini 2.5 Pro也将是一款非推理模型](https://cdn.sa.net/2025/04/03/5b42nmMQJsBLfIV.webp)

- Gemini 2.5 Pro VS Claude 3.7 Sonnet

于此同时，今天在整理之前代办的一些网页时，发现了一个Hackner News帖子—[Gemini 2.5 Pro vs. Claude 3.7 Sonnet: Coding Comparison](https://news.ycombinator.com/item?id=43534029)，该帖子中的链接文章显示Gemini 2.5 Pro和Claude 3.7 Sonnet各有千秋，但总体而言，Gemini 2.5 Pro更具有性价比。

![Gemini 2.5 Pro VS Claude 3.7 Sonnet TL;DR](https://cdn.sa.net/2025/04/03/OolQmjhd1Ckew9R.webp)

帖子网友评论太多了，我直接让ChatGPT Deep Research了一下，相关结果见[Halo博客](https://blog.gujiakai.me/2025/04/gemini-2-5-pro-vs-claude-3-7-sonnet-hacker-news-user-reactions)。

- Gemini Code

发现一个灵感取自Claude Code的Gemini Code项目: https://blossom-tarsier-434.notion.site/Gemini-Code-1c6c13716ff180db86a0c7f4b2da13ab

## 更新(2025.4.2)

深度使用了Gemini App，体验确实不错。写的代码注释挺好、日常解答也够用。

但建议尽量用英文提问，特别是涉及到需要Gemini调用搜索工具时，我发现用中文提问涉及到搜索时，Gemini常常会模拟搜索，
但实际上并没有进行搜索。不精通英文的小伙伴，可以搭配上沉浸式翻译来进行使用：敲击三个空格一键将提问转换为英文+网页英译中。

![Gemini App中文提问，Gemini常常会模拟搜索，但实际上并没有进行搜索。](https://cdn.sa.net/2025/04/02/HzBONDaxnc6dgil.webp)

## 更新(2025.4.1)

![Gemini 2.5 Pro的canvas对于所有用户开放](https://cdn.sa.net/2025/04/01/8XqbknwSZGKozTD.webp)

前脚OpenAI的Sama宣布GPT-4o的原生文生图对所有用户开放，后脚Google的Sundar Pichai宣布 Gemini 2.5 Pro的Canvas功能对所有用户开放。via: https://x.com/sundarpichai/status/1906874604683137285

上半年最激烈的大模型大乱斗已然拉开了帷幕，4、5、6月份会很有趣。总感觉Google的Gemini模型对于RAG研究会产生一定的冲击，上下文窗口大且注意力衰减幅度远远小于其余模型。

## 更新(2025.3.31)

昨晚睡前想起来之前看过的一个证明Gemini 2.5 Pro上下文能力的测评。via: https://fiction.live/stories/Fiction-liveBench-Mar-25-2025/oQdzQvKHw8JyXbN87

![Gemini 2.5 Pro在长上下文中依旧保持非常高的理解准确率。](https://cdn.sa.net/2025/03/31/2qGIdehFfkVoza3.webp)

可以参见Gemini App中Gemini 2.5 Pro对于文章的解析，Gemini 2.5 Pro在长上下文中依旧保持非常高的理解准确率。

## 前言

北京时间2025年3月26日凌晨，Google发布了Gemini 2.5 Pro模型[^1]。距离我上一次写Gemini的博文才过去了一个多月的时间，不由得感慨LLM模型的迭代速度。

Gemini 2.5 Pro在各大排行榜上遥遥领先。经过这些天听自媒体们的吹捧、网友们的评价以及自己的使用体验感受，个人觉得该款模型确实有一定的实力。可以说Google在2025年LLM大乱斗中领先的优势开始初见端倪。

Google为了推Gemini 2.5 Pro直接在AI Studio中下架了`gemini-2.0-pro-exp-02-05`模型，目前仅能从API处调用。

![Google为了推Gemini 2.5 Pro直接在AI Studio中下架了`gemini-2.0-pro-exp-02-05`模型，目前仅能从API处调用。](https://cdn.sa.net/2025/03/30/jsbxRUmrFov6i9D.webp)

今天，Google直接将Gemini App中的Gemini 2.5 Pro向所有用户开放。

![Google直接将Gemini App中的Gemini 2.5 Pro向所有用户开放。](https://cdn.sa.net/2025/03/30/PQCvaDeNbysVKp3.webp)

目前免费用户和Gemini Advanced用户的区别：

- 缺少Gemini 2.5 Pro的Canvas功能
- 速率受到限制【比如Deep Research免费用户每月额度为10次】
- 上下文窗口限制

![Gemini App免费用户存在速率限制](https://cdn.sa.net/2025/03/30/ov4QK7AGnaXhWpP.webp)

Google的这些举措有助于更快地获取用户，同时也能展示其最新的LLM进展。

顺便白嫖用户们的对话来进一步改进Gemini模型，等到2.5 Pro GA(General Availability，正式发布)时，估计能力会更上一层楼。

![Gemini以白嫖换取用户对话数据来改进Gemini模型](https://cdn.sa.net/2025/03/30/9HfTaAOFN6J1qDe.webp)

## 个人体验感受

一开始在25日晚上睡觉前，从海外爆料推文得知，Gemini App出现了Gemini 2.5 Pro的字样。

![Gemini App一开始出现了Gemini 2.5 Pro的字样](https://cdn.sa.net/2025/03/30/YzPBadASe8mhT6G.webp)

第二天一早，其实最先吸引我的是OpenAI的GPT-4o原生文生图能力，早上看了OpenAI的Livestream后，确实如视频中所述的那般: Feel The AGI。

![OpenAI的GPT-4o原生文生图抢去了部分Gemini 2.5 Pro的热度](https://cdn.sa.net/2025/03/30/UhOHNokEIBlDKwf.webp)

不由得感慨：OpenAI真是小人，每次发布都跟谷歌踩点，又一次抢去了部分Gemini的热度。GPT-4o的原生文生图能力也确实牛逼，用过的都说好。越来越期待看到5月份的GPT-5发布遇上Gemini 2.5 Pro正式发布的场面。

一开始，我因Gemini 2.5 Pro是推理模型，并没有对其过多关注，日常我的推理模型的使用场景有限：使用OpenAI的o3-mini-high来写代码注释；一些数学相关的问题，询问元宝中的DeepSeek R1来解答【耐想王—DeepSeek R1的数学能力确实挺牛，更适合中国宝宝体质，有些数学问题只有DeepSeek R1能给出较为准确的解答】；偶尔用Claude 3.7 Sonnet Thinking尝试Claude 3.7 Sonnet无法解决的问题。

![DeepSeek R1的数学能力确实挺牛！](https://cdn.sa.net/2025/03/30/BCK4Ppon2XNaqdr.webp)

不要低估Gemini App中的Gemini 2.5 Pro，毕竟App中的Gemini 2.5 Pro可以使用`Browse`、`Youtube`等工具，AI Studio中的Grounding With Google Search是远远比不了的，尽管Gemini App中的模型可能是经过了对话优化(chat optimized)版本以及App中或多或少存在用户体验糟糕的地方。

我日常询问Gemini时，会给Advanced和AI Studio都发送一份问题，对比择优采纳。

下图让Gemini 2.5 Pro模型总结我的Gemini 2.0体验博文，Gemini App中的模型通过调用`Browse`工具总结了文章的摘要，而AI Studio中的模型由于缺少该工具，总结失败。

![不要低估Gemini App，毕竟里面的模型可以调用工具](https://cdn.sa.net/2025/03/30/KW5VABbdfTHCaO8.webp)

如果不需要调用工具，可以优先考虑AI Studio中的模型。当然目前两处地方都免费提供Gemini 2.5 Pro模型了，可以对比使用，不一定每一个问题都是AI Studio中的回复得更好。

Gemini App中的Gemini政治敏感度貌似在下降，原本对于`美国总统`这类敏感话题都是直接闭口不谈的，目前可以借助外部工具检索得到正确答案。让其总结Youtube政治视频，有些时候会不成功，有些时候可以总结。

![Gemini App中的Gemini政治敏感度貌似在下降](https://cdn.sa.net/2025/03/30/3CIc6HErsDOvMkw.webp)

Gemini 2.5 Pro的知识截止日期来到了2025年1月份，这应该是目前知识截止日期最新的LLM了。

其余的优势：OCR、多模态、最长的上下文窗口、输出令牌限制等，可以看看Simon Willison大神的测评文章[^2]。

## 所见所闻

KCORES 大模型竞技场宣称Gemini 2.5 Pro是目前最好的编程LLM。

![KCORES 大模型竞技场宣称Gemini 2.5 Pro是目前最好的编程LLM](https://cdn.sa.net/2025/03/30/QNUuR32KaCnHDEF.webp)

有老外让Gemini 2.5 Pro玩宝可梦。Twitch直播链接: https://www.twitch.tv/gemini_plays_pokemon

还有很多LLM排行榜，目前大都是Gemini 2.5 Pro高居榜首。

## 总结

编程这一块，Gemini 2.5 Pro和Claude 3.7 Sonnet到底谁强，只有自己多体验才有答案。个人目前觉得Claude 3.7 Sonnet**可能**会更棒一些，毕竟我从Claude 3.5 Sonnet就信赖Claude，唯一能让我放心Vibe Coding，拿到LLM生成的代码直接运行的也就Claude，其余的或多或少都差点意思。

一旦产生了依赖真得很难摆脱Claude，虽然目前LLM发展得很迅速，昨日的宠儿，今日就有可能变为弃子，但我永远会为Claude预留一个位置，不抛弃，除非出现真正能替代Claude的LLM出现，而Gemini 2.5 Pro可能并不是这位替代者。在我心目中，Claude的代码能力、文笔都是第一的存在。

Gemini 2.5 Pro出了以后，使用Grok3的频率下降了，只有在对比Deep Search或者联动X查询时，才会用Grok3。其余大部分日常对话会优先考虑使用Gemini 2.5 Pro。

[^1]: https://blog.google/technology/google-deepmind/gemini-model-thinking-updates-march-2025/

[^2]: https://simonwillison.net/2025/Mar/25/gemini/

