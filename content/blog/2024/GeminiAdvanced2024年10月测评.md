---
title: "Gemini Advanced 2024年10月测评"
date: 2024-11-02T10:04:48+08:00
tags: ["Gemini","Google"]
slug: "Gemini-advanced-2024-october-review"
summary: 记录自己使用Gemini Advanced的体验感受。
showtoc: true
---

## 更新【2024/11/16】

已经续费了，因为近期合租的土区Google One+Youtube Premium翻车了【Google打击跨区的铁拳终究还是砸到了我的身上】。我觉得这20刀主要用于付费Google One福利，Gemini App顺带用一用。

![续费Google One AI Premium套餐](https://cdn.sa.net/2024/11/16/Y964c82gdwXeU5L.webp)

虽然Gemini注定在编程方面无法给我带来类似Claude的体验。

--- 

注：本文章发布于2024年11月2日，痛定思痛后决定不能再拖了，不然等到下个月Gemini再来一个大升级，这篇文章就啥也不是了。

## 更新【2024/11/1、2024/11/2】

- 2024/11/1

昨晚Gemini产品又tm更新了，下文的体验是十月份后半个月至更新前的个人体会。

![Gemini App更新公告](https://cdn.sa.net/2024/11/02/Vm5h2rkZ7M8aLpu.png)

- 2024/11/2

昨天（2024/11/1）在Google Studio中体验了Grounding功能，与此同时也在Colab中调用了一下。给我的感觉：现阶段的Grounding功能还是搭配英文使用，Google搜中文搜出来的低质内容太多了。

![Gemini Grounding搭配英文使用效果较好](https://cdn.sa.net/2024/11/02/T3AxyjZIRCEdw91.webp)

英文的回复都对，中文的回复塔图姆的得分错误。

![凯尔特人最新比赛的得分](https://cdn.sa.net/2024/11/02/fVmc68rn3JLotBS.webp)

暂时搜不出我的博客。

![搜不出我的博客](https://cdn.sa.net/2024/11/02/tRb8xrMSwLeVjFX.webp)

估计是自己的网站权重不够，在Google上排名太低的缘故导致Grounding响应为空数组。

![可能是网站权重太低，导致Grounding响应为空数组](https://cdn.sa.net/2024/11/02/VDiJmxfNRkr9Xg3.webp)

个人感觉，结合RAG的应用再增加一条接入Google Grounding的查找路径【加入外部搜索】，是一个不错的选择，毕竟搜索引擎里面的老大是Google。

当然Google Grounding依旧会像Gemini API free tier一样收集用户数据。不要太在意啦，数据是LLM的养料，每个科技巨头都会为了强大的LLM，牺牲掉用户的隐私。就比如Elon Musk的X，从11月15日开始，会拿所有用户的数据对Grok进行训练，还无法像之前一样给出一个退出Grok训练的选项。

我一开始还打算注销X的，但是后来想想，几乎所有的科技巨头都会拿用户数据去训练LLM，有些是明面上的，有些是暗中进行的，训练就训练吧，我已经对于隐私有些摆烂了，LLM时代，隐私很难独善其身，一些敏感的信息不被用于训练LLM即可，个人一些公开的数据无所谓啦。

![Google Grounding会收集用户数据改进产品](https://cdn.sa.net/2024/11/02/4qFvZ7TMNX1BYAL.webp)

下文的排版可能有些凌乱【时间线有错乱】，我在体验Gemini Advanced半个月时间里面，一有想法就在语雀中记录，难免排版有些错乱。

还有就是下文所述的一些比如代码注释、坤坤难题不具备代表性，不能很好地体现某一个模型的能力强弱。仅仅是当时我体验时的瞬间感想罢了。

有些时候模型的愚蠢回复，也可能是当时我比较懒，prompt不到位，进而导致拿不到理想的回复。大家在使用LLM时，如果希望LLM能给出令人满意的回复，提问必须清晰地描述清楚自己的需求。

--- 

## API的弊端

付费API不用于模型训练。

![付费API不用于模型训练](https://cdn.sa.net/2024/11/02/8oQqmJTkv3sLtSP.webp)

免费API会被用于改进产品。

![免费API会被用于改进产品](https://cdn.sa.net/2024/11/02/exoFBiUuD2Vh3Cp.webp)

via: [https://ai.google.dev/gemini-api/terms](https://ai.google.dev/gemini-api/terms)

具体可见Simonwillison大神对于Gemini隐私问题的[推文](https://x.com/simonw/status/1846749984504664341)。

别以为谷歌是大善人，API免费用，人家把你的对话都拿去训练了。就像Simonwillison大神推文评论区的这位老哥说的：如果你不为产品付费，你就是产品。直戳当前的互联网的现状，无论你用百度或者谷歌等国内外的产品，你在享受免费额度的同时，你的相关数据（俗称养料）也会被用于改进产品。

![如果你不为产品付费，你就是产品。](https://cdn.sa.net/2024/11/02/upLlJ4DG3r6Axks.webp)

有没有可能上午笨笨的Gemini advanced，下午突然开窍就是因为人工审查的缘故，仔细想想有些细思极恐。

![Gemini的聊天记录会被审查](https://cdn.sa.net/2024/11/02/VoD7FNafk5GBnKC.webp)

姑且信它一次，关闭活动就不会拿我的数据喂给AI训练。反正这扩展对我而言其实也可有可无。

![曾经尝试过关闭Gemini活动](https://cdn.sa.net/2024/11/02/hLvjKENHfGbJFos.webp)

对比其他产品，如ChatGPT或者Claude，人家可以保存聊天记录，退出训练，不清楚到底是否会遵守与用户之间的协议，在AI浪潮中，谁掌握了数据，谁就掌握了先发优势。Google是直接不装了，你要么把你的聊天记录给我用于改进AI，要么你的聊天记录就别保存。

其实挺奇怪的，有部分老外对于谷歌不感冒，觉得它会作恶，隐私有问题，而有部分国人对于谷歌貌似很青睐，All in Google，Pixel垃圾手机、Google One AI Premium、Youtube Premium全开了，觉得产品好用，但用久了或多或少也发现Google存在的隐私问题，用你的数据改进人家的产品。

隐私和便利是矛盾的，果然没错。我目前还是将活动关闭了，反正有用的回复，我都会第一时间记笔记截图保存。

**更新**

**还是开了，没准后续会用到。况且现在这波AI浪潮，你的数据都会被用来训练AI，就比如马斯克的X、国内的这些商家也会这么干，字节跳动的pixeldance难道会放过抖音或者tiktok海量的视频。哎****😑****，安心接受被训练的宿命吧，或者觉得不爽的话，开个X小号，污染grok的训练素材等。**

![字节的pixeldance可能会用短视频数据训练模型](https://cdn.sa.net/2024/11/02/LrkfqFJd3vglReA.webp)

看看linkedin更新的用户协议，也开始用用户数据训练AI。

![linkedin也开始用用户数据训练AI](https://cdn.sa.net/2024/11/02/LNlWf8zvTMRSj7q.webp)

## 使用技巧

提问中文互联网的问题，直接用中文提问即可。提问一些技术或者需要去外网搜索的问题，建议用英文提问。

或者干脆直接全部用英文提问，接着再让沉浸式翻译翻译英文回复即可。毕竟让Gemini使用Google Double Check，还是英文网站靠谱一些，你应该也不希望Google的Double Check去到CSDN上检查吧😁。

## 亮点

Gemini Advanced邀请好友可以让好友白嫖4个月。

![Gemini Advanced邀请好友可以让好友白嫖4个月](https://cdn.sa.net/2024/11/02/YIao5H47rjAfRzi.webp)

9.9刀，直接体验5个月，自己的大号，第一个月订阅，第二个月取消，在第一个月订阅末尾，邀请自己的小号，小号获得4个月的Google One AI Premium权益，美滋滋。但是如果这一个月体验良好的话，下个月我就继续续费。

![Gemini和Google生态高度绑定](https://cdn.sa.net/2024/11/02/kWslJvbDICaL78g.webp)

和Google生态高度绑定。Youtube想看的视频太多了，没工夫看，就看个摘要得了，让Gemini advanced总结Youtube视频。

![Gemini Advanced可以用来总结Youtube视频](https://cdn.sa.net/2024/11/02/lhJY78LQrAT3kE1.webp)

总结Youtube视频摘要Gemini API不支持，只有Gemini应用支持。

![Gemini API不支持总结Youtube视频摘要](https://cdn.sa.net/2024/11/02/hYdKc8ZrlExPaeg.webp)

信息过载且爆炸的年代，我越来越难以静下心来，去欣赏创作者们的长视频。以后的Youtube非实操型的视频，估计我大部分都会先让Gemini Advanced来总结了。

![非实操性质的Youtube视频，以后我都会用Gemini帮我总结](https://cdn.sa.net/2024/11/02/y4JvfHrDtA7wquE.webp)

不开会员也能总结Youtube视频。只不过拿的模型不是最先进的模型。摘要主打的是看个大概，模型总结详细或者简略，都大差不差。

![不开会员，基础的Gemini也能总结Youtube视频](https://cdn.sa.net/2024/11/02/UpqQYIrKCfM5mTF.webp)

连讲师的美好生活都能总结，不得不佩服Gemini 1.5 pro的视频处理能力。

![利用Gemini Advanced总结讲师的美好生活](https://cdn.sa.net/2024/11/02/iYNxvdsEXzgWoj3.webp)

注意看，原版的讲师视频并没有cc字幕。多模态的Gemini厉害啊。

![Gemini总结YouTube视频不借助字幕，而是靠多模态能力](https://cdn.sa.net/2024/11/02/ArNBoI6UPjLnRQG.webp)

一口气拿Gemini把稍后观看的视频基本上全总结完了，留了1～2个实操类型的视频等有空了实操。舒服，爽！

果然当时稍后观看=稍后不看，哪有这么多精力，1天24小时，消化不了的知识你还指望未来能细细品味？

上下文窗口最大。

![Gemini模型的多模态能力无敌](https://cdn.sa.net/2024/11/02/vn9UGqwelmEQtxP.webp)

## 匪夷所思

上午体验了Gemini Advanced后，对于Google有些失望。午休醒了以后，我直接退出了自己的Google账号，重登了一下，紧接着发现Gemini Advanced的智商回来了。没准开通了会员，第一时间，并不提供最新的模型给你使用。

坤哥难题可解。

![Gemini Advanced可解坤坤难题](https://cdn.sa.net/2024/11/02/OJ65g7wqc1UY3mx.webp)

代码注释分段也能吐完。

![Gemini Advanced代码注释部分也能给全](https://cdn.sa.net/2024/11/02/s8xdSm1cEYIO72L.webp)

## 拉垮的地方

+ 政治敏感

不管是总结Youtube视频摘要，还是一些常规的美国大选提问都拒绝，保守的谷歌害怕在大选上犯错。

![Gemini对于美国大选敏感](https://cdn.sa.net/2024/11/02/jPTveNZmHXuYkCt.webp)

+ 支持的文件类型不如GPT、Claude

比如不支持.ipynb文件的上传。

![Gemini不支持.ipynb文件上传](https://cdn.sa.net/2024/11/02/HFmGXS9uy5WeEJT.webp)

从Google Drive上传Colab的.ipynb文件，结果直接显示文件夹为空。

![Gemini不支持.ipynb文件](https://cdn.sa.net/2024/11/02/DsNkYGHmtodAaOW.webp)

实则Colab Notebooks文件夹并不空。

![Gemini不支持.ipynb文件](https://cdn.sa.net/2024/11/02/iD4V92GFIyzfMZb.webp)

当然，以不支持.ipynb文件来贬低Gemini还是太过了。毕竟GPT 4o、Claude也是蠢蛋。

GPT 4o给的注释版本，每一行注释都一样的。

![GPT 4o给的注释版本，每一行注释都一样的](https://cdn.sa.net/2024/11/02/OMQepikTU3cmVyr.webp)

Claude给的也是残次品。

![Claude也无法给出.ipynb文件完整的代码注释](https://cdn.sa.net/2024/11/02/V76d1PZ2l8cJQxA.webp)

看来llm对于.ipynb文件的解析还是存在改进的空间的。

解决方案肯定是先将.ipynb的文件转为py文件，紧接着再上传给llm写注释喽。

你以为Gemini Advanced就可以给你写很棒的注释？

写了一小段就截断了。

![Gemini Advanced一开始写代码注释，一小段就截断了](https://cdn.sa.net/2024/11/02/wJrHZh4FTcotjkz.webp)

反观api控制台，woc，真的将所有行的注释都呈现了。

![api控制台，Gemini将所有行的代码注释都呈现了](https://cdn.sa.net/2024/11/02/gAd1YhCimrOaLUK.webp)

Claude写注释，超出了上下文窗口。但是能接上去。

![Claude写注释，超出了上下文窗口。但是能接上去](https://cdn.sa.net/2024/11/02/XGYNlJtz35pDOgw.webp)

如果要用Google的Double Check，建议不要用中文提问，特别是编程类问题，大概率check的网站是CSDN。

Gemini蠢蛋回复：

![Gemini蠢蛋回复](https://cdn.sa.net/2024/11/02/Z3YdLDFKeSmCWxs.webp)

![Gemini蠢蛋回复](https://cdn.sa.net/2024/11/02/qiwAcxpMumld23I.webp)

![GPT 4o能理解上下文](https://cdn.sa.net/2024/11/02/VGiomMTNuE5Pa9S.webp)

有些时候我都开始怀疑，Gemini到底怎么搞的上下文，中文理解能力有些拉。

写中文注释还得是GPT，Claude和Gemini都很懒。

![Gemini写中文注释有时也有些懒惰](https://cdn.sa.net/2024/11/02/4GhiORfDu18FoyU.webp)

Gemini Advanced简直就是一个蠢逼。

![Gemini Advanced犯糊涂了，无法提供代码注释](https://cdn.sa.net/2024/11/02/LUEKm7hsYvpHCzM.webp)

看看o1-mini的回复，多饱满。

![o1-mini代码注释给的很饱满](https://cdn.sa.net/2024/11/02/VOsg6vtEU7FDMY5.webp)

Imagen3无法生成人物? 我记得是免费版本不支持生成人物，Advanced版本是支持的啊。

![Imagen3无法生成人物?](https://cdn.sa.net/2024/11/02/WkL6bRxhIT4icwP.webp)

蠢蛋Gemini，论文都无法访问。

![Gemini无法访问arxiv](https://cdn.sa.net/2024/11/02/s1mSiBQrnhIvOd8.webp)

一次只能传一张image，限制我的表达能力。

![Gemini一次只能传一张图片](https://cdn.sa.net/2024/11/02/hSuRf9lXWw2EgPn.webp)

控制台比Gemini App好用多了，垃圾Gemini。Google做Gemini App一点都不用心。

![控制台可以传多图](https://cdn.sa.net/2024/11/02/EDfiLaP5IhUJvOg.webp)

Gemini理解能力有待改进。

![Gemini理解能力堪忧](https://cdn.sa.net/2024/11/02/8XZnvIGuMloVq4x.webp)

转换提问方式，又能正常响应了。

![转换提问方式，又能正常响应了](https://cdn.sa.net/2024/11/02/FmiZRN42AgVkeBv.webp)

## 其他

看到reddit上一个有趣的讨论：[https://www.reddit.com/r/Bard/comments/1g8ktp7/Gemini_is_the_worst_ai_product_in_the_market/](https://www.reddit.com/r/Bard/comments/1g8ktp7/Gemini_is_the_worst_ai_product_in_the_market/)

## 展望

![取消了Google One AI Premium订阅](https://cdn.sa.net/2024/11/02/bCJajLMXFAEyntN.webp)

取消订阅了。Gemini和ChatGPT【备注：出了Search，GPT又订阅回来了，毕竟月底OpenAI二周年没准有啥惊喜】我都取消了订阅，等到年底，有王炸，再订阅ChatGPT。Gemini App真没必要订阅，虽然包含了Google One套餐，但是Gemini App及其拉垮，还不如直接控制台白嫖【也可以选择订阅，拿强大的模型总结Youtube、享受Gemini最先进模型的同时，还能享受Google One福利，这个20刀/月的含金量挺值的，虽然模型可能和Claude、GPT之间略微差一些，可能比4o强】。

![年底的惊喜](https://cdn.sa.net/2024/11/02/PsMnrkwVg8lOYJU.webp)

via: [https://www.theverge.com/2024/10/25/24279600/Google-next-Gemini-ai-model-openai-december](https://www.theverge.com/2024/10/25/24279600/Google-next-Gemini-ai-model-openai-december)

临近年底，越来越期待，OpenAI、Gemini甚至是Elon Musk的Grok能给我带来更多的惊喜。 

