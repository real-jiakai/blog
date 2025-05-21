---
title: "Google I/O 2025记录"
date: 2025-05-21T08:01:38+08:00
tags: ["google", "gemini"]
slug: "google-io-2025-notes"
summary: 记录Google I/O 2025发布的内容。
showtoc: true
---

早上起来，看到Google发布了一大堆新的内容，不由得感慨Google的强大，未来绝对是Gemini的(It's Gemini Season[^1].)。虽然近些天使用ChatGPT解答日常的频率远高于其余的AI。

Google I/O 25 Keynote Youtube视频开头的动画都是Veo生成的。via: https://youtu.be/o8NiE3XMPrM

![It's Gemini Season!](https://cdn.sa.net/2025/05/21/qyMZeA6hP2OVplD.webp)

一大堆AI爱好者的X推文中都感慨Google的更新内容太多，有些跟不上节奏了。信息多且杂，这个时候不梳理，会错过一些重大更新。

![Google的更新内容太多，有些跟不上节奏了](https://cdn.sa.net/2025/05/21/9tDsqLUnmac3B27.webp)

via: https://x.com/testingcatalog/status/1924899785355510239

本篇文章力求在充当Google一手发布信息源转发器的同时，尽可能多地加入自己的思考。

先给出一些较好的Google I/O 2025的总结链接: 

NotebookLM有关Google I/O 2025的总结: https://notebooklm.google.com/notebook/953b658a-579b-4b3c-b280-43b3781babf3

Tibor Blaho对于Google I/O 2025的总结推文: https://x.com/btibor91/status/1924938391478468754

Chubby对于Google I/O 2025的总结推文: https://x.com/kimmonismus/status/1924895087332405554

X上有关2025年Google I/O大会的热门评论链接: https://x.com/i/events/1922336973353598976

## Gemini App

本部分内容大多源自完整版的官方更新博文[^2]，以及官方的[Gemini App Updates页面](https://gemini.google.com/updates)。

> 本部分介绍Ultra独有的功能或模型并没有第一时间发布，而是即将面向Ultra订阅者发布，因此Ultra订阅现阶段性价比极低。

1、强调: 英文体验>中文体验

首先还得强调的点: Gemini App中文体验是不如ChatGPT或者是国产豆包的。

英文提问，给出的回复有理有据，也带有参考信息引用。

![英文提问Gemini，给出的回复有理有据，也带有参考信息引用。](https://cdn.sa.net/2025/05/21/BFNnIfWCHELQxcp.webp)

中文提问，给出的回复除了不带参考信息引用外，有时给人的感觉也是差强人意的。最近在L站看到很多有关Gemini降智的帖子，这其实是一种误解，Google家大业大巴不得抢走所有的ChatGPT用户，不会搞小动作降智的，所谓的“降智”，其实是Gemini App对于中文用户体验支持力度不够所致。

![中文提问Gemini，给出的回复除了不带参考信息引用外，有时给人的感觉也是差强人意的。](https://cdn.sa.net/2025/05/21/K4BvC89eAth51aJ.webp)

要想获得较好的Gemini App用户体验，中文提问得到的回复不给力时，建议用英文重新提问。英文不好的，可搭配上“沉浸式翻译”浏览器扩展，三个空格连击，一键将母语输入转为英文；设置对应快捷键，一键将模型回复翻译回母语。

2、新的定价计划

Gemini Advanced/Google One AI Premium更名为Google AI Pro。

![Gemini App新的定价计划](https://cdn.sa.net/2025/05/21/kvSIeoLyWY8jwAc.webp)

除去一些速率、上下文长度，Pro用户比免费用户多了Flow【一款AI影片制作工具，之后会提及】、Chrome中的Gemini【类似于Edge中的Copilot，之后会提及】。

Ultra用户比Pro用户多了Gemini 2.5 Pro Deep Think模型、Veo3模型、Project Mariner【浏览器Agent】、YouTube Premium individual plan、更大的存储空间。

Ultra套餐，前三个月每月125刀，后续每月250刀。初看有点心动，但冷静下来后，还是没有冲动消费。毕竟推理模型思考再多，很多时候只是刷榜成绩好看，日常使用场景下，经典的LLM就已经足够了。推理模型较好的使用场景: 逻辑推理、数学、代码。

去年年底关注过Project Mariner相关的新闻，今天再次听到该名字，有些陌生，浏览器Agent原型感觉还是个玩具。

![ChatGPT o3对于Project Mariner的介绍](https://cdn.sa.net/2025/05/21/Jkp2HyZ7DXW8zPK.webp)

至于Youtube会员，应该没多少人会开美区Youtube会员，一般都是开低价区，拉美区账号进家庭组。

30TB的存储空间对于普通人压根用不上，我的一些文件及照片全放在Google处，已经积累了有2、3年了，都没超过200GB。

Ultra订阅适合土豪党或者是极致的Gemini AI爱好者、Google死忠粉，对于我这种学生党看看就好，白嫖上Pro套餐就已经满足了。

via:

https://blog.google/products/google-one/google-ai-ultra/

3、Agent Mode

这功能看起来挺不错，仅限Ultra订阅。可以参见Google CEO-Sundar Pichai的这条推文: https://x.com/sundarpichai/status/1924909900033122466

![ChatGPT o3对于Google Ultra中的Agent Mode介绍](https://cdn.sa.net/2025/05/21/NkJUrYITcH91MVu.webp)

4、Gemini 2.5 Pro Deep Think、Gemini 2.5 Flash

Gemini 2.5 Pro Deep Think仅限Ultra订阅，测评数据很好看。2.5 Pro DeepThink在API方面仅开放给了一小部分可信赖的测试人员使用。

![Gemini 2.5 Pro Deep Think跑分](https://cdn.sa.net/2025/05/21/7AtnhOfY5S3M8aj.webp)

Gemini 2.5 Flash的性价比进一步提升。

![Gemini 2.5 Flash的性价比进一步提升](https://cdn.sa.net/2025/05/21/QkhTvstlG1Cgn8m.webp)

5、Thought Summaries

![Gemini App、AI Studio、Vertex AI中的Thought Summaries(思维链摘要)](https://cdn.sa.net/2025/05/21/DijHGKSdTsx52rN.webp)

思维链摘要力求进一步提升模型输出的可解释性。

![ChatGPT o3对于Gemini Thought Summaries的解释](https://cdn.sa.net/2025/05/21/2vzRSwek5fDEB19.webp)

6、Veo3、Imagen4

Veo3的特色在于文生视频带声音，有点意思，应该是世界上首款文生视频带声音的模型。仅美国的Ultra订阅可体验。

Imagen4对于全体Gemini用户开放，下方展示了用Imagen4生成了一张浣熊举牌图。貌似文生图方面，GPT-4o的原生文生图，以及近期豆包的Seedream 3.0较为牛逼。

![Imagen4生成的浣熊举牌图](https://cdn.sa.net/2025/05/21/QEij3m1CfVgKRzS.webp)

而Grok在低审查方面遥遥领先，这一点是绝无仅有的。前几天让豆包生成擦边图，豆包针对敏感的中文提示，直接拒绝生成，让Grok将提示翻译为毛子的俄语后【ChatGPT在面对擦边提示翻译请求时，拒绝翻译】，破了豆包的防护栏，有些时候不由得感慨不能忽视Grok，低审查是它最大的卖点，估计近些天Grok 3.5也要出来了，希望给大伙一个惊喜！

![Grok在低审查方面遥遥领先](https://cdn.sa.net/2025/05/21/FfRMKWBlcVaPdHA.webp)

![ChatGPT o3对于Veo3、Imagen4开放的用户类型解释](https://cdn.sa.net/2025/05/21/MPXntjYD786VzBg.webp)

https://x.com/GeminiApp/status/1924893675529900467

https://x.com/GeminiApp/status/1924973242768642433

7、Deep Research创建应用/Cavas更新

Gemini Deep Research后，可以进行创建应用，除了预设的应用操作: 创建网页(Web page)、信息图(Infographic)、互动测验(Quiz)、Audio Overview(播客)外，也可以进行自定义应用的创建。不建议自定义应用创建，自定义创建的应用或多或少存在Bug。

面对密密麻麻的文字，有些时候会让人没有耐心看下去，这个功能直接解决了Deep Research类产品可视化效果不足的问题。

![Deep Research后，可以进行创建应用操作。](https://cdn.sa.net/2025/05/21/aUF2qrjNZEnQdy1.webp)

![Deep Research后，创建的Quiz应用](https://cdn.sa.net/2025/05/21/7eIQjToYbkNyXDB.webp)

via: https://x.com/GeminiApp/status/1924892563695456675

8、基于图像和文件的Deep Research

基于图像的Deep Research，我想到的应用场景: 黄片番号Deep Research【没有实操过，找番号困难的好兄弟可以尝试一下，应该效果会很不错😁】；根据图片猜地址。

下图展示让Gemini根据我上次给ChatGPT o3的同款图片，猜测拍摄地址，效果差点意思，ChatGPT的o3根据图片猜测地址更牛逼，其实前一阵子也让豆包根据该图猜测地址，豆包的深度思考感觉有些跳跃，但是一次性就猜对了地点，猜国内拍摄图片的地址还得是国产的AI更胜一筹，毕竟巨头们掌握了一大堆国人的数据。

字节跳动的豆包在我心目中已经是国产AI Top1的存在了，豆包没有提供一键删除对话数据的选项，注定了所有用户的数据都将为豆包的登顶筑基。几乎所有的AI服务提供商都一样，表面上不侵犯用户隐私，不使用用户数据训练模型，背地里将数据与账号脱钩后，悄咪咪地用来改进产品，这样的操作太司空见惯了。

![用Gemini的Deep Research来根据图片猜地址](https://cdn.sa.net/2025/05/21/CD9exYOiAnBaZsP.webp)

下图展示了用Gemini的Deep Research来研究DeepSeek的最新论文，基于文件的Deep Research应该还有很多实用的应用场景。

![用Gemini的Deep Research来研究DeepSeek的最新论文](https://cdn.sa.net/2025/05/21/9Qf3bacdOPNeGHX.webp)

via: https://x.com/GeminiApp/status/1924892309583458706

9、其余

- Gemini Live在Andriod、IOS上免费提供。

相信很多人都已经是Google AI Pro用户了，没有薅羊毛的朋友，可考虑搞一个美国教育邮箱【不再局限于美国，巴西、印尼、日本、英国的教育邮箱都有资格】，在今年6月30日之前，去把这个羊毛薅了(https://gemini.google/students/)。

via:

https://x.com/GeminiApp/status/1924891940598014359

https://x.com/NewsFromGoogle/status/1924887278008307728

## Gemini API

本部分内容大多源自官方博文[^3]。

1、gemini-2.5-flash-preview-05-20

改进版的Gemini 2.5 Flash模型，提升了性能。

2、Gemini 2.5 Flash和Gemini 2.5 Pro将于2025年6月初全面上市(GA, Generally Available)

Google模型固有的发布节奏，Experimental—Preview—GA。

https://x.com/OfficialLoganK/status/1924878626312618323

3、Gemma 3n E4B

![ChatGPT o3对于Gemma 3n E4B介绍](https://cdn.sa.net/2025/05/21/UIFN3wcXzE8xSYp.webp)

以移动端为核心的开源模型，利好开源。普通用户有更好的闭源模型选择。

via:

https://developers.googleblog.com/en/introducing-gemma-3n/

https://huggingface.co/collections/google/gemma-3n-preview-682ca41097a31e5ac804d57b

https://ai.google.dev/gemma/docs/gemma-3n

https://news.ycombinator.com/item?id=44044199

4、原生音频输出和Live API的改进

相关博文中的介绍地址: https://blog.google/technology/google-deepmind/google-gemini-updates-io-2025/#new-capabilities

Stream部分新增了`gemini-2.5-flash-preview-native-audio-dialog`和` gemini-2.5-flash-exp-native-audio-thinking-dialog`模型。两个模型均属于Gemini 2.5 Flash Native Audio(原生音频)。早期功能包括Proactive audio【主动音频】等。

![Gemini原生音频输出和Live API的改进](https://cdn.sa.net/2025/05/21/MuZXOLW3jqTeS9H.webp)

对话助手类应用可以考虑接入，中文效果也是很ok的。

![对话助手类应用可以考虑接入，中文效果也是很ok的。](https://cdn.sa.net/2025/05/21/KpIiGUcaq9tWAeV.webp)

Generate Media部分—>Gemini Speech Generation，新增文本转语音模型—` gemini-2.5-flash-preview-tts`和` gemini-2.5-pro-preview-tts`，可根据脚本来生成对应的语音。

![Gemini新增了两款TTS模型](https://cdn.sa.net/2025/05/21/5Ih8oaHmEtNkyKA.webp)

## AI Mode

仅限英文。Kicking Off(启动)、Looking At(浏览)的流程来回答用户的提问，有点意思，之前的AI Mode应该没有这两个提示。

AI Mode针对政治人物的搜索，只提供链接，不提供生成。

![AI Mode针对政治人物的搜索，只提供链接，不提供生成。](https://cdn.sa.net/2025/05/21/tc8zK4Yb1LeBuH2.webp)

I/O大会上展示的AI Mode新功能包括Deep Search等，将在未来几周和几个月内陆续面向 AI Mode实验室用户推出。

https://blog.google/products/search/google-search-ai-mode-update/

## Gemini Diffusion

Google的文本扩散模型，获得资格的网友评价: 速度快得惊人，首个商用落地的扩散模型LLM是[Mercury](https://chat.inceptionlabs.ai/)。

相关的Waitlist: https://docs.google.com/forms/u/0/d/e/1FAIpQLSdsxa-YU25JIPJGmu-pySJEYeTy6lwbdZAzxlZ11x3GPj6DhA/formResponse

via: 

https://blog.google/technology/google-deepmind/gemini-diffusion/

https://x.com/GoogleDeepMind/status/1924888095448825893

https://news.ycombinator.com/item?id=44044080

https://deepmind.google/models/gemini-diffusion/

## Flow

一款AI影片制作工具，详情见ChatGPT o3对于Flow的介绍。

![ChatGPT o3对于Flow的介绍](https://cdn.sa.net/2025/05/21/qT9xt1UAkRoL2VB.webp)

瞎玩并生成了一只在太空中的美国小猫队长。

![瞎玩并生成了一只在太空中的美国小猫队长。](https://cdn.sa.net/2025/05/21/gcEY1mLrVlMRNhs.webp)

via:

https://labs.google/fx/tools/flow/

## SynthID Detector

用于快速高效地识别AI生成内容是否包含[SynthID水印](https://deepmind.google/science/synthid/)的项目。具体可见ChatGPT o3对于该项目的介绍。

![ChatGPT o3对于SynthID Detector项目的介绍](https://cdn.sa.net/2025/05/21/dVUznDegjOoZ7Kv.webp)

Gemini App里面生成的内容去年就已经开始加水印了(via: https://deepmind.google/discover/blog/watermarking-ai-generated-text-and-video-with-synthid/)，所以用Gemini辅助写作的小伙伴记得用其余的LLM进行改写，虽然目前国内的AIGC检测机制没有加入SynthID，但不排除未来会加入，如果未来加入了该功能，可以先用SynthID Detector自查😁。

相关Waitlist: https://docs.google.com/forms/d/e/1FAIpQLSfAYrauHmY-PpUNxL4Fs6coa185CtKWp7TnEXL0tKbAezo4MQ/viewform

via:

https://blog.google/technology/ai/google-synthid-ai-content-detector/

## Stitch

![ChatGPT o3对于Stitch功能的介绍](https://cdn.sa.net/2025/05/21/qDxASG6PMr7nb5i.webp)

AI原型工具，实现设计—开发一站式流程。我不是设计师，设计师朋友可以多关注一波这个产品。

里面有Standard Mode【Gemini 2.5 Flash驱动】和Experimental Mode【Gemini 2.5 Pro驱动】。

Stitch生成的赞美Trump的页面。

![Stitch生成的赞美Trump的页面](https://cdn.sa.net/2025/05/21/TmZzbHhDXs97n3f.webp)

记得在设置中关闭Stitch对话数据训练，虽然Google应该也不会严格遵守。

## Google Chrome Gemini

![Google Chrome Gemini和Edge Copilot类似](https://cdn.sa.net/2025/05/21/PvjE6smfSOblqTo.webp)

呈现形式类似Edge中的Copilot，总结网页是一个不错的选项，虽然是狗皮膏药。

https://x.com/Google/status/1924892719739973640

## Project Astra

这玩意去年年底我就加入了Waitlist，目前还没轮到我体验，真扫兴。Google的Youtube频道里面有关Project Astra的Demo视频观看量很高，足以说明Project Astra是一个令人期待的项目。

![Google的Youtube频道里面有关Project Astra的Demo视频观看量很高](https://cdn.sa.net/2025/05/21/vAEYNaHydlZBQOr.webp)

看了Project Astra最新的Demo视频—[辅助帅哥组装自行车](https://youtu.be/JcDBFAm9PPI?si=M-r0p8ipd0-2msHU)、[辅助女孩化学学习](https://youtu.be/MQ4JfafE5Wo?si=1vh5bDgPCl3Nm9-v)后，我也想要一个这样子的通用AI助理。

![ChatGPT o3对于Project Astra的介绍](https://cdn.sa.net/2025/05/21/ItZ1auyFBDrHkJn.webp)

via: https://deepmind.google/models/project-astra/

## Try it on

Google Shopping推出的虚拟试衣功能。上传全身照，即可进行虚拟试衣。

去小红书上随便趴了一张美女全身照进行实验😂，效果很不错。

原图:

![原图](https://cdn.sa.net/2025/05/21/aX47Drlhvw9M6FI.webp)

虚拟试衣图:

![虚拟试衣图](https://cdn.sa.net/2025/05/21/A2uGVQREItkhf1S.webp)

https://blog.google/products/shopping/how-to-use-google-shopping-try-it-on/

## Andriod XR

这方面我不熟，可以参见ChatGPT o3对于Andriod XR的介绍。

![ChatGPT o3对于Andriod XR的介绍](https://cdn.sa.net/2025/05/21/siZy56f9brXgYMn.webp)

https://blog.google/products/android/android-xr/

https://blog.google/products/android/android-xr-gemini-glasses-headsets/

## Google Meet实时翻译

初期支持英语和西班牙语。具体可见相关的[Demo视频](https://www.youtube.com/watch?v=hyXqcsWOONo)。

网页评论，Google刚刚结束了我的翻译生涯，这个功能未来可期。

![网页评论，Google刚刚结束了我的翻译生涯](https://cdn.sa.net/2025/05/21/tTLHp9laxWQ3GqJ.webp)

## 其余

当然还有一些没介绍，如Lyria 2【Google的音乐生成模型】、Google Beam【视频会议相关的内容】。

至于Jules【Google的AI代码Agent】，这个我昨天已经体验过了，使用下来的感觉一般，还是得好好学编程，AI辅助学习加快学习进度，整天Vibe Coding，到头来离开了AI啥也不是。

其余一些链接:

https://workspace.google.com/blog/product-announcements/new-ways-to-do-your-best-work

https://cloud.google.com/blog/products/ai-machine-learning/expanding-gemini-2-5-flash-and-pro-capabilities

https://blog.google/technology/developers/google-ai-developer-updates-io-2025/

https://blog.google/technology/ai/generative-media-models-io-2025/

https://starline.google/

https://blog.google/outreach-initiatives/education/google-gemini-learnlm-update/

## 总结

Google I/O 2025第一天的发布差不多就是这些。Day2通常不会再出现重大发布，这一周注定是不平凡的，是否会有o3-Pro、Grok 3.5、Claude 4敬请期待，其中Anthropic会在北京时间2025年5月23日凌晨有一个event活动。

![Google I/O 2025第二天通常不会出现重大发布](https://cdn.sa.net/2025/05/21/8ShLTFs1wvWkxUa.webp)

Google推出Ultra套餐彰显了其步OpenAI的老路，高定价意味着破坏AI平权化，但好在Google前面已经铺垫了让用户白嫖Gemini 15个月会员，高定价我就不批判过多了。

我日常使用频率最高的AI应用已经转为了ChatGPT，虽然Gemini、Claude等，我也没抛弃，但总体而言，ChatGPT给我的感觉各方面最棒。从前面的文字中，你也看到了对于一个新的知识点，我基本上都会用ChatGPT o3模型进行调研，这种Agent LLM实在是太方便了，用户体验极佳，除非得到的答复不满意，一般情况下，我都懒得打开搜索引擎检索相关信息了。

可以说ChatGPT这种Agent LLM对于Perplexity类AI套壳搜索应用的打击是很大的，我相信未来Google打造出的类似o3的Agent LLM可能直接会宣判Perplexity类产品的死刑。Perplexity的应用护城河是啥？啥也不是，模型是外包的，网页数据也是外包的，到最后绝对会被这些巨头给吞噬。

附一些今天看到的有趣内容:

![Gemini在白嫖用户反馈，应该无偿给用户提供服务](https://cdn.sa.net/2025/05/21/GAStXe47wlibfPY.webp)


[^1]: https://x.com/Google/status/1924873580191391918

[^2]: https://blog.google/products/gemini/gemini-app-updates-io-2025/

[^3]: https://blog.google/technology/google-deepmind/google-gemini-updates-io-2025