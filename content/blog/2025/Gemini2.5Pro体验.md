---
title: "Gemini 2.5 Pro体验"
date: 2025-03-30T14:29:10+08:00
tags: ['gemini']
slug: "gemini-2-5-pro-experience"
summary: 分享Gemini 2.5 Pro体验的一些感受。
showtoc: true
---

## 更新(2025.4.3)

AI Studio中的Gemini 2.0 Pro的实验模型已经无了，据L站网友说，目前Vertex AI中还保留，但我个人测试时发现，Vertex AI中的Gemini 2.0 Pro实验版出现了思维链，估计也是被Gemini 2.5 Pro实验版所替换了，名字可能一时半会还保留着。

via: https://ai.google.dev/gemini-api/docs/models#gemini-2.5-pro-exp-03-25

![Gemini 2.5 Pro实验版替换了Gemini 2.0 Pro实验版](https://cdn.sa.net/2025/04/03/NFdEfOgMZ4xKRC9.webp)

![Vertex AI中的Gemini 2.0 Pro实验版出现了思维链](https://cdn.sa.net/2025/04/03/bU1x39ADryLWfuC.webp)

短命的Gemini 2.0 Pro实验版。未来的GPT-5、Gemini 2.5 Pro【估计是在今年5月下旬的Google IO开发者大会这个时间点发布，可能OpenAI会再次与Google竞相发布】可能都将是结合推理和经典LLM的模型，不再需要人为地进行切换。如果遇到不需要推理的提问，就用经典LLM模型进行回复；如果遇到需要推理的场景，则启用思维链。

![Gemini 2.5 Pro也将是一款非推理模型](https://cdn.sa.net/2025/04/03/5b42nmMQJsBLfIV.webp)

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

