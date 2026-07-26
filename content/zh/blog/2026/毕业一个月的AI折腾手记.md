---
title: "毕业一个月的AI折腾手记"
date: 2026-07-25T00:31:49-07:00
lastmod: 2026-07-25T00:31:49-07:00
tags: ['ai','anthropic','claude','gpt','kimi']
slug: "ai-notes-one-month-after-graduation"
# translationKey 用于关联中英互译文章：必须与 slug 相同，且中英两篇的值一致。
# 英文文件名即 slug 时默认值已正确；中文文章请手动改成与 slug 相同的英文值。
translationKey: "ai-notes-one-month-after-graduation"
summary: 毕业一个月里折腾Claude、GPT、Kimi与自部署Agent（养龙虾）的体验心得。
showtoc: true
---

## 写在前面

毕业已经接近一个月了。过去一个月，我折腾了许多AI，有挺多想分享的感悟，故动笔写下了这篇文章。

## AI趋势感悟

目前各家AI厂商给我的感觉是越来越注重代码、智能体相关的基准测试成绩，一些AI厂商已经因为这类测试成绩不好看，延期发布模型了。其中一个例子就是Google的Gemini 3.5 Pro模型。

![因代码能力不行，Gemini 3.5 Pro推迟发布](https://i.see.you/2026/07/18/w4Hu/20260718004829276.webp)

个人觉得目前这种看重代码、智能体的趋势，体现了市场、大众对于模型能力的期待，不仅仅要模型能聊天答疑解惑，更要求模型能利用各项工具，帮助完成任务。

我自己在上半年也深深地被这些智能体类产品震撼过多次。

比如论文声明页要插入我和导师的签名，但拍照得到的并不是可直接插入的无底色版本，这时常规的做法可能是去小红书搜索无底色签名制作技巧，接着自己手动制作完毕后再插进去，而更先进的做法则是直接把签名发送给智能体类产品，让这些AI去制作无底色签名。

![智能体类产品制作无底色签名](https://i.see.you/2026/07/18/hd7K/20260718010322716.webp)

能力强的Agent类产品应该都能稳稳接住这项任务，我当时分别交给了Codex中的GPT 5.5模型和Claude Cowork中的Claude Opus 4.8模型，它们都较好地制作出了无底色签名，Claude Cowork中的Claude Opus 4.8模型更轮椅一些（意为“保姆级、无需操心”），一步到位，Codex中的GPT 5.5则更为谨慎，还要追问我需求，但最终两者效果都是好的。

再比如让Agent类产品部署CLIProxyAPI（CPA）这一中转反代项目。我当时用了下图这段提示词让Claude模型给我部署了反代项目并加了Web UI展示，开启Claude Code中的Auto Mode让其自动干活，最终的效果很不错。如果没这类Agent，我还需要手动进行新建文件夹→写配置文件→启动容器等相关操作。研究生舍友用类似的提示词，成功让Codex搭配GPT 5.5模型部署了CPA中转反代项目。

![指导Claude部署CPA项目的提示词](https://i.see.you/2026/07/18/q5Dd/20260718011604275.webp)

![CPA项目Web UI展示](https://i.see.you/2026/07/18/3Uxo/20260718011316169.webp)

最近的例子发生在7月18日：我自部署OpenClaw并配置OpenCode中的Kimi K3模型，却显示模型不可用。一开始我以为是OpenCode虚假宣传，压根不提供这个模型；最终在Claude Code（搭配Claude Opus 4.8）的帮助下查明，根本原因是OpenClaw当时还没适配OpenCode渠道的Kimi K3，模型目录缺少相应条目。Claude新增条目后，报错就消失了。

![OpenClaw配置OpenCode中的Kimi K3报错解决](https://i.see.you/2026/07/25/siZ4/20260724200842560.webp)

![Claude Code搭配Claude Opus 4.8模型解决了模型不可用报错](https://i.see.you/2026/07/18/9rqL/20260718012610312.webp)

## Claude

过去一个月，最让我疯狂的是Claude模型。

为了不为Claude Fable 5额度发愁，6月10日我在闲鱼商家处花了400元代充了Max 5x。刚用了2～3天，就遇到了Claude Fable 5禁令。记得那天我去参加了广西区直事业单位面试，体验完打车回家的路上，看到了禁令的推送。原本我还打算在车上开一个Claude模型的5小时窗口，看到禁令后，直接没心情了。7月2日，Fable 5解封，继续爽用该Max 5x会员直至到期。

7月2日当天又在闲鱼花400元代充了一个新的Max 5x，这次就没那么幸运了，用了24小时左右遇到了封号。

![闲鱼第二次代充Claude Max 5x，24小时左右遭遇封号](https://i.see.you/2026/07/18/3eFv/20260718015223423.webp)

商家封号不质保，血亏。事后也在[L站发帖](https://linux.do/t/topic/2520143)分享了这次伤心的经历，自己真像舔狗。

![因封号在L站分享伤心经历](https://i.see.you/2026/07/18/Q3ho/20260718015719955.webp)

但没办法，谁让Fable 5迄今为止依旧是各方面综合来看最佳的模型呢？对Dario、Anthropic中指竖归竖，用还是得用。自己反检测做到位一点就行。

封号后的第2天，我在[chirou大佬](https://chirou.ai/cat/37)的网站上花480元买了一个Claude Max 5x账号，这个账号目前还健在，没在中国大陆任何机器上登录过。全程挂在美国Windows电脑上，也用CPA做了反代，也在德国的VPS上使用。

在2024年我写过一篇[《Claude封号的解决方案》](https://blog.gujiakai.top/2024/11/Claude-account-suspension-resolution/)，目前来看依旧适用：想稳定用，买一个美国VPS，Claude服务全程在上面用。商家有Windows模板的话，直接用商家的模板，没模板的话，先装Debian再DD成Windows；如果觉得速度不行，就用DMIT等优化线路中转。

![在美国Windows电脑上使用Claude服务](https://i.see.you/2026/07/18/z6Qf/20260718021013526.webp)

我在今年4月初，也被Anthropic封过1个号，那个号的封号原因是用了Sub2API项目，在此之后我便不再用该项目了。记得当时我从Claude Relay Service项目迁移到Sub2API项目，刚配置完开始用，没一会就显示账号不存在了😅。本地环境没问题的话，一般不推荐用反代，反代的话可能会被封号，但不绝对。

![2026年4月使用Sub2API项目反代Claude账号，露头就秒](https://i.see.you/2026/07/19/b5aY/20260719011238426.webp)

![使用Sub2API项目反代Claude账号被封后，在mastodon感慨](https://i.see.you/2026/07/19/J1dz/20260719011309839.webp)

记得当时Claude Fable 5解封的那段时间，开了Ultra Code模式，Fable 5有时启动了80+的子Agent，我直接叫停。[Simon Willison大神](https://simonwillison.net/2026/Jul/3/judgement/)也分享了相关的Prompt，让Fable 5负责规划，把执行交给更弱的模型以节约额度：`For all coding tasks use your judgement to decide an appropriate lower power model and run that in a subagent`。我个人觉得一般限制子Agent的数量就行，比如限制子Agent数量不超过5个，将任务交给弱模型有时反而无法一击即中。

过去一个月，我用Claude模型做的一些有趣的事：

1、审查了个人几乎所有的GitHub项目

比如目前的这个Hugo博客，用Claude Fable 5、GPT 5.6 Sol Ultra分别检查了好几轮。不仅仅修复了代码问题，还修复了SEO相关问题。代码我基本上已经不怎么看了，以结果为导向。只要展示的效果好，就认定代码没问题。😁

![利用SOTA模型审查个人所有GitHub项目](https://i.see.you/2026/07/25/4Zgz/20260725004429881.webp)

写代码的门槛确实降低了，但还需你自己有真功夫方能指哪打哪，不然模型能力强了，会有死板情况发生。

比如我特意让Fable 5去审查了前几年我用AI写的RSSHub的学校通知公告代码，Fable 5翻出了“10年前的页面元素已不符合现行抓取规则”的问题，发Pull Request修复。结果有些改动直接被开源维护者回怼了，可见AI还是比较死板的。在下图的情形中，我只充当消息的搬运工，全程都是Fable 5和开源维护者对话，最终代码被合并进了主分支。建议不要学我，要好好钻研技术，看懂了代码再提Pull Request，不然会增加开源维护者的负担。这个情景仅仅用于测试Fable 5模型的能力边界。

![Fable 5模型有时会过于死板](https://i.see.you/2026/07/25/8Lor/20260725004922557.webp)

2、Fable 5多次传出要被移出套餐又暂缓，最终只保留在最高档会员中。在7月初以为Fable 5会在7月7日下线，于是乎用了Suno v5.5模型Cover了一首《念肥波5》，歌词是Fable 5写的，感觉和B站上的《念Fable 5》AI歌曲有差距。via: https://suno.com/s/2SUuwIM3PvMtfnfy

![念肥波5](https://i.see.you/2026/07/25/bO8a/20260725010007994.webp)

3、Fable 5开发了一款电驴风云游戏。做这个游戏的本意：嘲讽南宁电驴难骑，路况复杂得很。所有AI模型当中，Fable 5开发的初版游戏是最像暴力摩托游戏的。

体验地址: https://scooter-rush-nanning.pages.dev

我的初版提示词：

```txt
hi, claude.

new a folder, then help me build a game.

I want to develop a racing game featuring electric scooters—something like *Road Rash*, but without the violence. The main theme is poking fun at the sheer number of electric scooters in Nanning. Once you pick a character, their scooter is encased in a protective shield; any vehicle or pedestrian that tries to get too close automatically explodes. 😂

There are just so many electric scooters in Nanning; sometimes the traffic conditions leave me speechless.
```

![Claude Fable 5开发的电驴风云游戏](https://i.see.you/2026/07/25/3tuJ/20260725011109937.webp)

这种用一个prompt让模型完成任务的方式，并不能很客观地检验出模型的能力，但确实能初步窥见模型对现实世界理解的端倪，在这方面Fable 5完爆其余模型。

总体而言，当Claude Fable 5/Claude Opus 5不因敏感内容降级时，它是最强的。

![Claude系列模型敏感降级官方说明](https://i.see.you/2026/07/25/9oKc/20260725014338344.webp)

## GPT

7月10日GPT 5.6发布。当天我用ChatGPT英国48个月Team优惠账号开了GPT 5.6 Sol Ultra模式（类似Claude Code中的Ultra Code Dynamic Workflows），结果任务一个都没执行完就达到了5小时限额，于是又在chirou大佬的网站上花640元买了一个GPT Pro 5x账号。后续OpenAI暂时取消了5小时限额，这一做法值得点赞，不用再刻意卡5小时窗口了。

我个人使用GPT 5.6 Sol系列的总体感觉是不如Fable 5。有时GPT 5.6 Sol Ultra检查项目代码并修复，直接乱加功能。比如目前的这个Hugo博客，GPT 5.6 Sol Ultra卖力的时候，直接检查了每一篇文章，揪出并修复了Claude Opus 4.5当时完成i18n国际化功能时写错的图片URL等错误（相应错误Claude Fable 5可没发现），但后来它自作主张，在每篇文章下新增了“相关文章”栏目。当然还有一些自作主张的时刻，GPT 5.6 Sol莫名其妙给我的博客加了一个隐私页面，我只好指导它移除（见下图）。它没Claude让人省心，我个人比较喜欢用轮椅型SOTA模型进行Vibe Coding。😁

![GPT模型喜欢自作主张，没Claude让人省心](https://i.see.you/2026/07/19/9Dub/20260719020235262.webp)

论对用户的态度，OpenAI其实更厚道：Tibo一直大方地重置额度，对中国用户的歧视也没Anthropic那么严重。但在这个关注编码、智能体的时代，引领者已然是Anthropic，不是OpenAI。ChatGPT Work比Claude Cowork晚了将近半年，虽然两者本质上就是面向普通用户的有界面加持的Codex和Claude Code。

当Claude Fable 5/Opus 5因敏感内容降级、Kimi K3又报429错误时，我觉得GPT 5.6 Sol是我最喜欢的模型。

1、用GPT 5.6 Sol Ultra给我配置Xray。

Xray项目很贴心地给出了AI提示词，我照着把任务丢给GPT 5.6 Sol，让它全自动干活；回头一验收，节点都能连通。那一刻不由得感慨GPT 5.6 Sol牛逼。

![Xray项目提供了AI提示词，方便用户配置](https://i.see.you/2026/07/25/W0id/20260725015757908.webp)

2、Codex中的GPT 5.5帮我下载学位授予仪式全部图片。

学校给学位授予仪式提供了图片直播网址。当时我想下载所有的图片用于纪念。我把这个任务分别交给了豆包的任务模式（Seed 2.1 Pro）和Codex里的GPT 5.5。

![Codex中的GPT 5.5帮我下载学位授予仪式全部图片](https://i.see.you/2026/07/25/y1Ad/20260725020243474.webp)

我还帮豆包扫了码，但其依旧无法完成任务。反观GPT 5.5，在我都没扫码的情况下，它直接分析了网页源码和接口，找到了图片托管地址，一口气将图片下载下来，并进行了压缩打包操作。豆包在生活场景里用着挺好，但任务执行和写代码这块，跟GPT 5.5差了不止一档。

3、分析豆瓣上的短评和长影评，判断《功夫女足》值不值得看。

![GPT 5.6 Sol分析《功夫女足》豆瓣短评影评](https://i.see.you/2026/07/25/bZf0/20260725021047647.webp)

最终的分析用ChatGPT Site呈现，网址: https://kungfu-women-football-analysis.jaya.chatgpt.site/

ChatGPT Pro会员网页端比ChatGPT Business会员多了xhigh的推理强度选择。4月份买低价Pro的时候，Pro比Business多出来的还是Heavy推理强度。

![ChatGPT Pro会员网页版多一个xhigh推理强度选择](https://i.see.you/2026/07/25/6xaI/20260725021739693.webp)

GPT 5.6 Sol Ultra和Claude Fable 5一样参与了我的所有项目代码审查，之前也提到了，有惊喜也有失望。还是那句话：Claude敏感时，GPT 5.6便是最棒的模型。

网页版的GPT 5.6 Sol Pro实力也不容小觑，以下图的提问为例，它能从网页中的大段文字中找寻到Claude Fable 5/Claude Opus 5模型降级的规则。

![网页版的GPT 5.6 Sol Pro实力也不容小觑](https://i.see.you/2026/07/25/j2Ni/20260725022616204.webp)

## 养龙虾

在618那段时间，我买了ArkClaw、Coze两个服务，并接入飞书平台使用。我觉得Coze服务还行，ArkClaw很垃圾，反应速度很慢。搭配CPA中转，可在Coze中接入自定义模型；在模型ID后面加括号填入推理强度，即可自定义模型的推理强度。

![在Coze中接入自定义模型](https://i.see.you/2026/07/25/Z5to/20260725033934736.webp)

Coze的个人高阶版套餐可以开一台云电脑和一台云手机。云手机可以登录小红书账号，接着就可以做一些自动化操作，如监控某些账号的帖子更新等。当然云电脑和云手机有诸多问题，如无法卖力调研，点开几个帖子或者几个网页就草草结束任务，最终的回复虽然有模有样，但差点意思；与此同时云电脑提取网页内容也很艰难，只能通过OCR，或全选复制文字、经剪贴板来识别网页内容。

暂时两个套餐都不再续费了，我自己原本就有高配的VPS，直接全面转战自部署的Hermes Agent和OpenClaw，并接入Telegram。

我养龙虾的主要用途：监控Reddit某些社区的帖子，定期汇总整理给我。

![养龙虾监控Reddit某些社区的帖子](https://i.see.you/2026/07/25/f3rE/20260725042308046.webp)

部署龙虾遇到问题，全权交给Codex中的GPT模型或Claude Code中的Claude模型。

我还发现这些龙虾类软件可以实现诸如“Claude模型搭配SuperGrok的X搜索”这样的神奇操作。

![龙虾类软件可实现如Claude模型搭配SuperGrok中X搜索的神奇操作](https://i.see.you/2026/07/25/cb9N/20260725043313928.webp)

Hermes Agent可以用Claude订阅登录接入Claude模型。

![Hermes Agent可以用Claude订阅登录接入Claude模型](https://i.see.you/2026/07/25/fWi7/20260725055221401.webp)

养龙虾适合用于监控类任务，不适合写代码，日常询问勉勉强强，使用越多越懂你。

## Kimi

2026年7月16日发布的Kimi K3模型是中国开源模型的一大胜利，在6月份Kimi K2.7 Code上线的时候我就在官方帖子底下表达了自己的看法：不扩大参数规模、一直停留在1万亿，是很难追上Fable 5的。没想到一个月后，理想照进了现实。

![Kimi K2.7 Code上线时我在官方帖子下方的留言](https://i.see.you/2026/07/25/3gxN/20260725045253139.webp)

我买了199元/月的套餐，试了一下，Kimi K3能像GPT、Claude的最新模型那样，不联网也知道如何调用Gemini API的最新Python SDK。

![Kimi K3不联网知道调用Gemini API的最新Python SDK](https://i.see.you/2026/07/25/1Vkp/20260725045836878.webp)

Kimi K3成功通过了五子棋测试。

![Kimi K3成功通过了五子棋测试](https://i.see.you/2026/07/25/O9ku/20260725050141262.webp)

偷偷告诉你，Kimi的云电脑能打开Google哦。

![Kimi的云电脑能打开Google](https://i.see.you/2026/07/25/lPj7/20260725050257717.webp)

有些朋友可能是因为K3的发布才开通的会员，我早在几个月前就开过会员。当时忙着求职，需要时不时用AI来分析国内相关网页通知，用Kimi K2.6 Agent解决了很多相应的需求。那时我就对Kimi抱有极大的期望。国产AI中，面向个人用户的Agent服务里，任务完成度最好的就是Kimi。

![我订阅Kimi会员的历史](https://i.see.you/2026/07/25/j5fN/20260725050659308.webp)

Kimi服务也有缺点：用户的数据默认会被用于改进模型，不提供退出训练选项。

![Kimi服务的缺点：不提供退出训练选项](https://i.see.you/2026/07/25/2qRc/20260725055436658.webp)

注重隐私的朋友，Kimi服务可能并不适合你。但Kimi K3会在2026年7月27日正式开源，到时可以选择保护用户隐私的托管商的API服务。当前这个时代，没有绝对的隐私可言，就算商家提供退出模型训练选项，我觉得也不一定会遵守得很好。Anthropic经济指数哪来的，不就是分析用户数据得来的嘛😁。

在个人项目上，近期我有刷网课的需求。当Claude和GPT都敏感时，我让Kimi K3搭配Kimi WebBridge插件分析网页结构给我写了一个油猴脚本，接着再让Claude Fable 5和Kimi讨论多轮，最终Kimi K3交付了油猴脚本，并将该脚本在Greasy Fork发布，目前网课已经刷了一下午了，只要浏览器打开对应页面，自动开刷。

![Kimi K3搭配Kimi WebBridge分析网课网页结构给我写了一个油猴脚本](https://i.see.you/2026/07/26/k9Ko/20260726011215933.webp)

有些时候不由得感慨Anthropic、OpenAI自废武功，太过封闭，只允许通过了网络安全认证的用户解锁相关安全能力。

## 总结

我心目中的LLM编程与智能体选型排行如下图所示：

![我心目中的LLM编程与智能体选型排行](https://i.see.you/2026/07/26/xE9z/20260726011058320.webp)

过去一个月的AI折腾手记差不多就是这些。之后有新的感悟，会继续分享。

