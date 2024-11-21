---
title: "Claude封号的解决方案"
date: 2024-11-21T10:19:03+08:00
tags: ["claude"]
slug: "claude-account-suspension-resolution"
summary: 记录一次个人claude账号被封的经历及解决方案。
showtoc: true
---

## 故事背景

早上和往常一样，清理自己的邮箱，清理gmail时，突然看到一封anthropic的api退款邮件。

![早上收到anthropic api退款邮件](https://cdn.sa.net/2024/11/21/DgMXEQU6vrLFVZy.webp)

我内心有些不安，觉得有不好的事情发生。果然claude账号寄了。第一次被封。

![claude账号第一次被封](https://cdn.sa.net/2024/11/21/9L4IuX6mQsl3xjh.webp)

按照搜索引擎搜出来的申诉教程以及自己的实际情况，填写了claude账号恢复申请。

![填写claude账号恢复申请](https://cdn.sa.net/2024/11/21/fXrMtoiOhsHGkAQ.webp)

但我估计大概率是无法挽回了。我终于知道为啥claude的会员收入只占了总体收入的15%了。封号的概率太高。

## 反思

我也反思了所有可能导致这次账号封禁的原因。主要有以下几点：

1、这个claude账号的api服务绑定了wildcard的虚拟卡，可能是虚拟卡出了问题。这个虚拟卡段主要是国人在用，人一多准没好事。

![claude api绑定的wildcard虚拟卡可能导致claude账号封禁](https://cdn.sa.net/2024/11/21/TfDmOGU6VoeRB5Y.webp)

早上8点多开始，wildcard的TG群陆续有网友反映有claude账号被封的情况。

2、近期使用claude时，ip有变动。我目前手持两个美国真家宽（一个合租的，一个独享的），每当一个家宽延迟高或者离线时，就切另一个。如果两个都离线了（小概率），就整dmit的直连。

![ip变动可能导致claude账号被封禁](https://cdn.sa.net/2024/11/21/icVqt3gEePLyaOp.webp)

3、claude聊天里面充斥了中文提问，我英语水平一般，一般习惯每天在一个新建的txt文档里面，写清楚自己的需求后，发送给claude回复。

![claude里面充斥中文对话可能导致claude账号被封禁](https://cdn.sa.net/2024/11/21/eFRSv9CuWtak2No.webp)

## 解决方案

早上被封后，直接往备用的美区apple id里面充值了20刀，结果发现无法完成claude会员内购【其实原本用了claude被封账号的美区apple id给claude新号充值，结果无法完成支付，所以才用备用的apple id整，结果依旧无法完成支付】。

看了网上一些教程，有人说联系苹果客服可能会导致封禁账号。

![有人说联系苹果客服可能会导致封禁账号](https://cdn.sa.net/2024/11/21/ebr3iGjTE1Rukl5.webp)

有人说多买付费app，就能解风控。我拿这个备用的美区apple id购买了一个Quantumult X，本以为买了一个能解，结果还是无法完成claude会员内购。

![有人说多买付费app，就能解风控](https://cdn.sa.net/2024/11/21/pOAGUJXgxfYDi7j.webp)

又戳戳戳，充值了20刀礼品卡。我看到网上这个教程后，觉得还是有必要联系客服解决。via: https://gvnumber.com/your-purchase-could-not-be-completed/

![联系苹果客服成功解决问题](https://cdn.sa.net/2024/11/21/h6CzMPHKLiqWtUN.webp)

联系了苹果客服，果然好使。

给该客服好评，直接借用讲师的金句: "God Bless You! You are very very gorgeous! 😁"

![用讲师金句给客服好评](https://cdn.sa.net/2024/11/21/KCaLYknQev5yuxr.webp)

![英文评价google翻译](https://cdn.sa.net/2024/11/21/b7tiJexWT9HUg8Z.webp)

目前这个新开的claude会员账号已经不会在国内的任何机器【电脑、手机、平板】上使用了，直接在美国windows vps上挂着，vps上用nekobox开tun模式选择美国家宽，伪装成美国当地人，以后的对话全先翻译为英文，再发给claude回复。

![目前仅在windows远程美鸡上使用，国内不会再登陆claude了](https://cdn.sa.net/2024/11/21/vQiZGEHztBR86r2.webp)

此外，如果要用claude官方的api，建议和claude会员号切割，不然小心连坐，我觉得这次封号主要还是虚拟卡的锅。以后wildcard就付款一些其余的服务吧，openai、claude等AI服务，我是绝对不会再用虚拟卡支付了，老老实实用美区苹果内购即可。

其实你觉得账号封禁无所谓，封号了直接退款白嫖重新注册新号的话，直接无脑wildcard，毕竟支付宝直充，走我邀请码，互相得2美元，我目前的goole one ai premium就是通过这个渠道购买的。via: https://bewildcard.com/i/QAUNNLY4

最近gemini出了类似chatgpt memory类似的玩意。

![最近gemini出了类似chatgpt memory类似的玩意](https://cdn.sa.net/2024/11/21/mYoaugQNlUR5eqO.webp)

折腾了一上午，啥也没干，就为了解决claude会员问题，哎😑。没办法，谁让人家是目前的LLM之王呢。只能卑微地去给人家送钱了。

我记得上一次类似的经历还是2023年5月份，openai因为depay虚拟卡的缘故封我的openai账号。via: https://blog.gujiakai.top/2023/05/thinking-of-openai-ban-plus-customers-in-527

不知不觉已经过去了1年多了，这一年多，claude异军突起，特别是在2024年6月后，就已经成了板上钉钉的LLM之王【我日常使用场景就是代码，所以claude就是我心目中的The King Of LLM】，虽然claude反馈的代码也有bug，但我检查后指出存在的问题，claude基本上都能修正，不能解决的问题，有些时候也能提供比openai更有效的思路。

![claude在代码方面遥遥领先，图片出自livebench.ai](https://cdn.sa.net/2024/11/21/rOaHpGB2S49AvEV.webp)

L站的秦始皇(zhile站长)在一周前也转claude会员了。以下是我的评论【其实我的openai会员并没有断，毕竟快两周年了，而且今天也出了gpt-4o-2024-11-20最新模型，据说提升了写作能力，期待月底的o1-full】。

![我对于秦始皇分享转claude经历的评论](https://cdn.sa.net/2024/11/21/9bCJ3wy8Vd5kPWt.webp)

如果你目前害怕claude被封，可以选择去L站秦始皇(zhile站长)的[oaipro](https://api.oaipro.com/register?aff=v12z)站点或者[openrouter](https://openrouter.ai)购买api，其他的api中转站不一定有这两个靠谱。api搭配上lobechat或者openwebui使用起来非常舒适。

oaipro站点：

![oaipro站点](https://cdn.sa.net/2024/11/21/j1wxBXZFICpf4qM.webp)

openrouter站点：

![openrouter站点](https://cdn.sa.net/2024/11/21/p1xIrLh6PmVYs2y.webp)

api搭配openwebui使用：

![api搭配openwebui使用](https://cdn.sa.net/2024/11/21/8qxGYenlA6vBQ7o.webp)

当然也有一些诸如cursor、github copilot、windsurf等白嫖claude api途径。

当然你可能会好奇，既然有api卖，你为啥还这么执着于开claude会员？肯定是为了更好的体验啊，claude project等功能都非常好用，只买api会错失很多官方一手新功能。

不多说，下午开始继续用claude辅助自己学习。

