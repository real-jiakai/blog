---
title: "Claude Account Suspension Resolution"
date: 2024-11-21T10:19:03+08:00
tags: ["claude"]
slug: "claude-account-suspension-resolution"
summary: Recording my Claude account suspension experience and solution.
showtoc: true
---

## Update (2025.03.13)

![wildcard TG group pinned message](https://cdn.sa.net/2025/03/13/MW3E4HR6aqoLefs.webp)

Reading the pinned message in wildcard TG group moved me deeply. It's true—to use overseas AI, best use remote desktop, best ask in English, otherwise too easy to identify as Chinese user.

## Update (2025.01.07)

Some may wonder why not use fuclaude. I still prefer the official original—fuclaude is also good, just don't plan to use it yet.

For those afraid of local use being detected by Claude official [not confident in routing], can try fuclaude: https://github.com/wozulong/fuclaude

## Update (2024.12.25)

Windows remote desktop is the way. See Bulianglin's latest video: [Proxy Detection: Solutions for Various Proxy Detection Methods, Prevent Account Risk Control, Refuse Bare Connection, TikTok Operations, Cross-border E-commerce Beginners Must Watch | IP Blacklist Detection | Latency Detection | IP Leak Detection | TCP/IP Fingerprint Detection](https://www.youtube.com/watch?v=_EoccSHSiAU)

![Windows remote desktop not detected as proxy](https://cdn.sa.net/2024/12/25/6t3i1VvRMZmO8HG.webp)

Proxy detection site: https://proxy.incolumitas.com/proxy_detect.html

Since using Windows remote desktop with nekobox TUN mode selecting US residential, never been banned again. I suspect last ban was virtual card issue—my environment was actually fine.

## Background Story

This morning like usual, clearing my inbox. While clearing gmail, suddenly saw an Anthropic API refund email.

![Morning received Anthropic API refund email](https://cdn.sa.net/2024/11/21/DgMXEQU6vrLFVZy.webp)

I felt uneasy, sensing something bad happened. Sure enough, Claude account banned. First time being banned.

![Claude account first ban](https://cdn.sa.net/2024/11/21/9L4IuX6mQsl3xjh.webp)

Following appeal tutorials from search engines and my actual situation, I filled out Claude account recovery request.

![Filling Claude account recovery request](https://cdn.sa.net/2024/11/21/fXrMtoiOhsHGkAQ.webp)

But I estimate it's probably unrecoverable. Now I finally understand why Claude's membership revenue is only 15% of total revenue. Ban probability is too high.

## Reflection

I reflected on all possible reasons for this account ban. Main points:

1. This Claude account's API was bound to wildcard virtual card—might be virtual card issue. This card segment is mainly used by Chinese users—more people means trouble.

![Claude API bound to wildcard virtual card may have caused ban](https://cdn.sa.net/2024/11/21/TfDmOGU6VoeRB5Y.webp)

From around 8 AM, wildcard TG group members started reporting Claude account bans.

2. Recently IP changed while using Claude. I currently have two US real residential IPs (one shared, one dedicated). When one has high latency or goes offline, I switch to the other. If both offline (rare), I use DMIT direct connection.

![IP changes may have caused Claude account ban](https://cdn.sa.net/2024/11/21/icVqt3gEePLyaOp.webp)

3. Claude chat was full of Chinese questions. My English is average—usually I write my needs clearly in a new txt document each day, then send to Claude.

![Chinese conversations in Claude may have caused ban](https://cdn.sa.net/2024/11/21/eFRSv9CuWtak2No.webp)

## Solution

After morning ban, I directly topped up $20 to backup US Apple ID, but found I couldn't complete Claude membership in-app purchase [actually I first tried using the banned Claude account's US Apple ID to pay for new Claude account, but payment failed, so tried backup Apple ID—still failed].

Saw some online tutorials saying contacting Apple support might ban account.

![Some say contacting Apple support might ban account](https://cdn.sa.net/2024/11/21/ebr3iGjTE1Rukl5.webp)

Some say buying more paid apps can lift risk control. I bought Quantumult X with this backup US Apple ID, thinking it would work—still couldn't complete Claude membership purchase.

![Some say buying more paid apps can lift risk control](https://cdn.sa.net/2024/11/21/pOAGUJXgxfYDi7j.webp)

Kept trying, topped up another $20 gift card. After seeing this online tutorial, felt contacting support was necessary. via: https://gvnumber.com/your-purchase-could-not-be-completed/

![Contacting Apple support successfully solved the problem](https://cdn.sa.net/2024/11/21/h6CzMPHKLiqWtUN.webp)

Contacted Apple support—worked.

Gave that rep a good review, directly borrowing instructor's golden phrase: "God Bless You! You are very very gorgeous! 😁"

![Used instructor's golden phrase for support review](https://cdn.sa.net/2024/11/21/KCaLYknQev5yuxr.webp)

![English review Google translated](https://cdn.sa.net/2024/11/21/b7tiJexWT9HUg8Z.webp)

Now this new Claude membership account won't be used on any domestic machines [computer, phone, tablet]. Directly using Windows VPS in US, running nekobox TUN mode with US residential, disguised as local American. Future conversations will be translated to English first before sending to Claude.

![Now only using on Windows remote US machine, won't login Claude domestically anymore](https://cdn.sa.net/2024/11/21/vQiZGEHztBR86r2.webp)

Additionally, if using Claude official API, suggest separating from Claude membership account—otherwise beware of collateral damage. I think this ban was mainly virtual card's fault. From now on, wildcard for other services—OpenAI, Claude and other AI services, I'll definitely never use virtual cards again. Just use US Apple in-app purchase.

If you think account bans don't matter—banned means refund and re-register new account—just use wildcard mindlessly. After all, direct Alipay top-up, use my invite code for mutual $2. My Google One AI Premium is purchased this way. via: https://yeka.ai/i/QAUNNLY4

Recently Gemini released something similar to ChatGPT memory.

![Recently Gemini released something similar to ChatGPT memory](https://cdn.sa.net/2024/11/21/mYoaugQNlUR5eqO.webp)

Tinkered all morning, did nothing, just solving Claude membership issue. Sigh 😑. No choice—who made them the current LLM king. Can only humbly pay them.

I remember last similar experience was May 2023 when OpenAI banned my account due to depay virtual card. via: https://blog.gujiakai.top/2023/05/thinking-of-openai-ban-plus-customers-in-527

Unknowingly over 1 year has passed. This year, Claude rose rapidly—especially after June 2024, became the undisputed LLM king [my daily use is coding, so Claude is my The King Of LLM]. Although Claude's code also has bugs, when I check and point out issues, Claude can basically fix them. For problems it can't solve, sometimes provides more effective ideas than OpenAI.

![Claude leads in coding, image from livebench.ai](https://cdn.sa.net/2024/11/21/rOaHpGB2S49AvEV.webp)

L Site's Qin Shi Huang (zhile admin) also switched to Claude membership a week ago. Below is my comment [actually my OpenAI membership isn't cancelled—almost 2 years, plus gpt-4o-2024-11-20 latest model released today, supposedly improved writing ability. Looking forward to o1-full at month end].

![My comment on Qin Shi Huang sharing Claude switch experience](https://cdn.sa.net/2024/11/21/9bCJ3wy8Vd5kPWt.webp)

If you're currently afraid of Claude bans, can choose to buy API from L Site's Qin Shi Huang (zhile admin)'s [oaipro](https://api.oaipro.com/register?aff=v12z) site or [openrouter](https://openrouter.ai). Other API relay sites may not be as reliable as these two. API paired with lobechat or openwebui is very comfortable.

oaipro site:

![oaipro site](https://cdn.sa.net/2024/11/21/j1wxBXZFICpf4qM.webp)

openrouter site:

![openrouter site](https://cdn.sa.net/2024/11/21/p1xIrLh6PmVYs2y.webp)

API paired with openwebui:

![API paired with openwebui](https://cdn.sa.net/2024/11/21/8qxGYenlA6vBQ7o.webp)

Of course there are also free Claude API channels like cursor, github copilot, windsurf.

You might wonder—since APIs are sold, why so insistent on Claude membership? Definitely for better experience. Claude project and other features are very useful—only buying API means missing many official first-hand new features.

Enough said. Afternoon continuing to use Claude for assisted learning.
