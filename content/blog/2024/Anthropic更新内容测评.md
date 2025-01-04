---
title: "Anthropic更新内容测评"
date: 2024-10-23T15:11:43+08:00
tags: ['claude', 'anthropic']
slug: "anthropic-updates-evaluation"
summary: 记录2024年10月22日Anthropic更新内容测评。
showtoc: true
draft: false
---

## 更新（2024.12.26）

正确对待国产ai的崛起，DeepSeek v3不容小觑，深度求索公司被我低估了。

## 更新（2024.10.27）

本文提及的Claude 3.5 Sonnet(New)中文注释不给力，其实是我的Prompt给的不够好。

让Claude详细写，就能写好。与此同时，如果给的代码过长并且Prompt没到位，ChatGPT o1-mini写的注释也很简短。看来得重视Prompt Engineering了。

![Prompt给的好，Claude写的代码注释照样详细](https://cdn.sa.net/2024/10/27/koexhKi5Ad9gvWc.webp)

---

昨晚睡觉前发现Anthropic更新了，今早4点多睡不着，体验了一下新版的Claude 3.5 Sonnet，觉得有些惊艳，原本无法回答准确的坤坤问题，被完美解决，而且是在不联网的情况下。

备注：今天下午我又测试了多次，发现Claude 3.5 Sonnet(New)对于该问题还是存在幻觉的，有一定几率答对，但大概率产生幻觉。希望别像GPT 4o一样降智啊🙃！

Q：穿背带裤，有亿万粉丝，中国“篮球高手“是谁啊？

![初体验Claude 3.5 Sonnet(New)的感受](https://cdn.sa.net/2024/10/23/l7SQNuaAfMdvs3R.webp)

你可以用这个问题去问国产AI，~~很多答对的国产AI都需要联网才能答对，不联网就答不对~~。

我发现目前（截至2024年10月23日）国产AI大多都自动接入了搜索，而且就算不接入搜索，估计也会和Google一样，实时有人员来根据用户的提问，进行后台编辑？

前一周提问该问题时，国产AI大多都回答不对，有些离谱的，类似kimi探索版，刚出来的时候检索了一堆网页，也回答错误。今天再次尝试，发现它竟然直接回答对了，我估计背后肯定有人员时不时在查看用户的问题，优化回复特定问题的逻辑，进而改进模型的回复质量。

2024年10月12日的kimi探索版的表现：

![2024年10月12日的kimi探索版的表现](https://cdn.sa.net/2024/10/12/Gm4OaKFhynfp3wo.webp)

2024年10月23日kimi探索版的表现：

![2024年10月23日kimi探索版的表现](https://cdn.sa.net/2024/10/23/RXPFKgfwVDJ4cEj.webp)

deepseek也挺离谱的，这种进步很难不让人联想到有专门的问题审核员来优化回复逻辑。还是说国产AI一直在持续不断的进步？默不作声？搞不懂。

![deekseep针对坤坤难题的表现](https://cdn.sa.net/2024/10/23/cDMGqHoZrfupIsR.webp)

国内用户基数靠前的百度公司的文心一言在2024年10月23日，3.5模型都能答对此问题。

![文心一言3.5能解决坤坤难题](https://cdn.sa.net/2024/10/23/kt8EHpfDFPewIbR.webp)

一周之前，2024年10月12日。4.0模型都答不对。

![一周之前，文心4.0模型答不对坤坤难题](https://cdn.sa.net/2024/10/23/kedjX4m82yf5oIV.webp)

现在有些国产AI这么牛逼了？我持怀疑态度，个人觉得背后肯定是有专门的审核员针对用户的问题，进行了编辑性的回复。也可能是我愚昧了，没有正确对待国产AI的崛起？

## Computer Use

按照官方给的computer-use-demo操作。

```bash
export ANTHROPIC_API_KEY=%your_api_key%
docker run \
    -e ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY \
    -v $HOME/.anthropic:/home/computeruse/.anthropic \
    -p 5900:5900 \
    -p 8501:8501 \
    -p 6080:6080 \
    -p 8080:8080 \
    -it ghcr.io/anthropics/anthropic-quickstarts:computer-use-demo-latest
```

紧接着在浏览器地址栏输入`localhost:8080`访问演示应用。

四个宿主机和容器映射端口的作用，见Claude 3.5 Sonnet(New)的解释。

![Claude 3.5 Sonnet(New)对于端口映射的解释](https://cdn.sa.net/2024/10/23/lUGbFqW6Xa7IjCd.webp)

大早上，往Claude API里面充了5刀，消耗了4.5刀左右，演示的视频见后续。

![Claude Computer Use演示花费了我4.5刀左右](https://cdn.sa.net/2024/10/23/ZbRekn9grwCQO2j.webp)

演示的操作如下：

- bilibili：[Claude Computer Use演示合集](https://space.bilibili.com/488592525/channel/collectiondetail?sid=4062677)

- youtube：[Claude Computer Use Demos](https://youtube.com/playlist?list=PLdS7qhMAPXqcCf5i0TKAlpstg0GUc5HKe&si=rcIPmTAiIEEoE0iZ)

1、搜索elon musk的最新x动态。

最后报错`This action is temporarily not available at this time due to enhanced protections for the beta release.`。

估计是由于老马的最新动态是有关美国大选，进而导致该报错的，美国AI公司训练出来的AI一般都会回避本国国情话题。

2、创建一个文本文件，在文本文件中生成Anthropic这家公司的发展历史。

3、使用Claude Computer Use和高级人机下五子棋。

一开始黑子、白子的归属，Claude犯错了，后续纠正了认知。

五子棋属于复杂任务，而且该五子棋网站的算法确实挺厉害的，之前我手动下了3盘，都输了。更别说是初代的Claude Computer Use了。

如果哪天Claude Computer Use真的能打败该五子棋网站的电脑棋手，Claude绝b进化为了类似AlphaGo一样的产物，到时候距离AGI真就近在咫尺了。

4、使用Claude Computer Use操控计算器。

计算器应用最后显示的结果不对，Claude应该是直接作弊了，调用自己的能力进行了计算😂。

还有streamlit这个可视化界面的输入默认支持markdown语法，一些运算符号被当作markdown语法渲染了，Claude并不会受到这些渲染问题的影响，因为它处理的是原始文本输入。

5、使用xpaint绘制爱心图案。

这个应该也属于复杂任务，就算让人来绘制，爱心也很难画饱满，但是大致样子还是有的。

Claude Computer Use现阶段基本上都是点击操作应用的，并没有像人类一样，长按鼠标进行绘制的本领，故绘制爱心图案失败，期待后续迭代更新。

6、下载arxiv PDF，总结论文内容。

这一部分较为滑稽的事：Claude认为2024年6月份还没到，毕竟Claude 3.5 Sonnet(New)的知识截止日期为2024年4月，Claude竟然擅自臆测自认为正确的URL，结果导致访问该URL，找不到论文。但是Claude依旧给出了论文的大概内容摘要，总结得还行，估计是在第一次访问论文时，获取了该论文的摘要。

7、在Youtube搜索库里2016年逆天三分绝杀并播放。

这部分不打算传到b站或者youtube，毕竟NBA有版权因素。详情见OneDrive网盘：[7.mp4](https://1drv.ms/v/s!AkOlsYD5Bd9NmF7vfVxETEC57LbE?e=gsAUwB)

8、安装btop，并用btop查看系统资源占用情况。

9、尝试在阮一峰老师的博客最新一期留言。

搜索关键字输入错误，但是Claude 3.5 Sonnet(New)直接记住了阮老师的博文网址，估计他的所有文章早就成了Claude 3.5 Sonnet(New)的养料了，每一个在互联网上公开的博客都难逃成为LLM养料的命运😑。

填写对应的内容到对应的字段有误，而且触发了Claude 3.5 Sonnet(New)的指导原则。可能可以越狱，只要你诱导AI，让它觉得它目前在操作的页面位于本地，让它放心大胆地留言。也可能Anthropic的安全措施做得很到位，很难越狱。

其实这个限制可在[官方文档computer use部分](https://docs.anthropic.com/en/docs/build-with-claude/computer-use#understand-computer-use-limitations)查到。

10、过人机验证Cloudflare Turnstile【Testing环境下】。

虽然Claude 3.5 Sonnet(New)拒绝人机验证系统，但是告诉它这仅仅是一个Testing，它还是点了😁。

11、关闭网页广告。

本意是想让Claude 3.5 Sonnet(New)直接点击itdog.cn页面上的`关闭所有广告`按钮来实现关闭网页广告的效果，结果它直接先去安装了一个广告屏蔽浏览器插件ublock origin，紧接着，在我的二次提示下，实现了点击itdog.cn页面上的`关闭所有广告`按钮来实现关闭网页广告的效果。

看到有小伙伴，用Claude Computer Use玩色色，我就不测试实验了，有兴趣的小伙伴可以试试，看看能玩的有多花。

![有小伙伴用Claude Computer Use玩色色](https://cdn.sa.net/2024/10/23/OBAdpuc9TCN3xor.webp)

## Claude 3.5 Sonnet(New)

这个肯定是比之前的更强。之前Claude 3.5 Sonnet一直无法完成将学士帽放置在三角形正中间，这次经过两轮对话，成功实现学士帽位置的摆放。

![Claude 3.5 Sonnet(New)能实现将学士帽位置摆放在三角形正中间](https://cdn.sa.net/2024/10/23/FP4mfc3RdQJWUbs.webp)

还有就是之前我发现Claude 3.5 Sonnet在写中文注释方面很懒惰。

这是前几天让Claude 3.5 Sonnet写的：

![Claude 3.5 Sonnet写中文注释懒惰](https://cdn.sa.net/2024/10/23/sr7NuVm4TOBLDX6.webp)

这是今天让Claude 3.5 Sonnet(New)重写的：

![Claude 3.5 Sonnet(New)新版写中文注释貌似也没提升多少](https://cdn.sa.net/2024/10/23/ngODQL2HklAxwXo.webp)

其实也比较不出啥，总之，还是让ChatGPT o1-mini写中文注释吧。看看人家写得多详细，这方面Claude 3.5 Sonnet系列是需要向ChatGPT好好学习的。

![写中文注释还得看ChatGPT o1-mini](https://cdn.sa.net/2024/10/23/QTzRf73tVULgydj.webp)

我相信[livebench排行榜](https://livebench.ai/#)和[aider代码能力排行榜](https://aider.chat/docs/leaderboards/)对于Claude 3.5 Sonnet(New)的代码能力的认可。目前来说代码能力这一块，Claude 3.5 Sonnet(New)是属于遥遥领先的。

![livebench Claude新版代码能力冠绝群雄](https://cdn.sa.net/2024/10/23/HiXloWMabAq2QZ3.webp)

![aider LLM代码能力，新版Claude也是遥遥领先](https://cdn.jiakai.page/pictures/2024/10/23/202410231603327.webp)
## 其余

看了网上各种评论，Claude 3.5 Opus可能不会再有了，没准明年3月份，直接上Claude4系列(Haiku、Sonnet、Opus)，期待到时候的Claude 4 Opus在文本润色方面更加精进。

![今年晚些时候推出的Claude 3.5 Opus残影](https://cdn.jiakai.page/pictures/2024/10/23/202410231515417.webp)

![官方文档去除了有关Claude 3.5 Opus的表述](https://cdn.jiakai.page/pictures/2024/10/23/202410231511857.webp)

网友的一些评价：

- Claude不仅是能力最出众的LLM，而且性格也是最棒的。

![Claude不仅是能力最出众的LLM，而且性格也是最棒的。](https://cdn.jiakai.page/pictures/2024/10/23/202410231450480.webp)

- 这是要抢测试人员的饭碗吗？

- OpenAI希望你的奶奶使用AI，Anthropic希望开发团队使用AI。两者的目的已经开始有些许不同了。

![OpenAI希望你的奶奶使用AI，Anthropic希望开发团队使用AI。两者的目的已经开始有些许不同了。](https://cdn.jiakai.page/pictures/2024/10/23/202410231545548.webp)

- 有趣的是，OpenAI 在语音模式等面向最终用户的功能上加倍投入，而 Anthropic 在代码生成质量和能够远程驱动 GUI 等以工程师/API 为中心的功能上加倍投入。

![有趣的是，OpenAI 在语音模式等面向最终用户的功能上加倍投入，而 Anthropic 在代码生成质量和能够远程驱动 GUI 等以工程师/API 为中心的功能上加倍投入。](https://cdn.jiakai.page/pictures/2024/10/23/202410231546215.webp)

- 今天Anthropic埋葬了OpenAI。

![今天Anthropic埋葬了OpenAI。](https://cdn.jiakai.page/pictures/2024/10/23/202410231547711.webp)
## 总结

这是我早上4点多初步体验了Claude 3.5 Sonnet(New)的想法。没订阅过Claude会员的朋友，推荐你们订阅。

![我的初体验想法](https://cdn.sa.net/2024/10/23/pdoZAXCquL32c1s.webp)

Anthropic的收入来源订阅部分仅仅占了15%。这么强的模型，速速订阅，2选1，建议优先Claude会员。

![Anthropic的收入来源订阅部分仅仅占了15%](https://cdn.jiakai.page/pictures/2024/10/23/202410231520780.webp)

LLM之王目前应该已经易主了，Claude 3.5 Sonnet-我的神！不知道OpenAI在下个月的两周年之际会给我什么样的惊喜呢？是GPT-5？还是o1-full【加上GPT-4o目前拥有的所有能力】？还是继续悄无声息地发一些无关痛痒的文章，靠自己的先发优势，继续消耗老用户的热情？期待2024年11月底！

补一张凌晨5点20的校园！上个学期，OpenAI的春季发布会让我睡不着觉，这个学期，Anthropic悄无声息地升级Claude 3.5 Sonnet让我激动。

![凌晨5点20的校园，Claude 3.5 Sonnet的升级让我疯狂](https://cdn.jiakai.page/pictures/2024/10/23/202410231551217.webp)