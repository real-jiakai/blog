---
title: "GLM Realtime API Experience"
date: 2025-01-18T15:05:49+08:00
tags: ["glm"]
slug: "glm-realtime-api-experience"
summary: Sharing my GLM Realtime API experience.
showtoc: true
---

## Update (2025.3.1)

Now that Claude's coding ability is so strong, just throw the official documentation at it and code together—you can definitely quickly integrate GLM Realtime API into your use case. Can use AI editors like Cursor or Windsurf with Claude 3.7 Sonnet to assist development.

Don't ask me anything about this project—it's a natural language programming product, aka Vibe Coding. I know nothing about this project—it was entirely written by Claude 3.5 Sonnet and still has many bugs.

![Vibe Coding explanation](https://cdn.sa.net/2025/03/01/eGAXMrRW6S7dq3g.webp)

## Update (2025.1.18)

I'm a clown 🤡—Zhipu Qingyan App already launched Realtime API. Making a call automatically lets GLM sing 7 specific songs a cappella. I was late to realize this 😑.

---

## Background Story

On January 16 afternoon, the "GLM Large Model" public account published a post—[Zhipu Realtime, 4V, Air New Models Released, APIs Simultaneously Launched](https://mp.weixin.qq.com/s/EQiwpOVKoDK_zIfR1qbBEg). The GLM-Realtime a cappella feature attracted me—after all, current AI voices limit singing ability due to music copyright.

![GLM Realtime provides a cappella feature](https://cdn.sa.net/2025/01/18/PTx6mJRInQrZAuS.webp)

Though after actually trying GLM-Realtime API, I found it can only sing simple pop songs—copyrighted music still can't be performed.

ChatGPT and other voice models could sing at first. The May 2024 OpenAI spring release demoing GPT-4o multimodal showed ChatGPT singing "Happy Birthday." via: https://www.youtube.com/watch?v=V6pYxfcDRks&ab_channel=OpenAI

![GPT-4o multimodal singing demo](https://cdn.sa.net/2025/01/18/YlDLpMQVPiAeqgd.webp)

The GPT-4o in that video demo was soulful, full of emotion. I remember after watching that demo video, I fell into endless contemplation—deeply admiring OpenAI.

But later OpenAI became more reserved. Some treasures weren't shared with the world immediately. Some secondary treasures like o1-pro require $200/month to experience—this puts Plus users in an awkward position. Can try OpenAI's new features but they're nerfed versions. The real new features are always exclusively for Pro users.

## Experience

Wanted to try Realtime API but found it currently only callable via API. Zhipu's API platform hasn't listed the real-time voice API interaction yet (no out-of-box real-time voice entry like Google AI Studio).

So I sent Zhipu's official Realtime API documentation to Claude. After back-and-forth with Claude and using Perplexity to debug Claude's code, I finally created the GLM-Realtime API demo: [https://glm-realtime.gujiakai.top](https://glm-realtime.gujiakai.top).

This coding experience deeply taught me the power of programming experts combined with Claude. As a newbie, I can't fully leverage Claude's programming ability. Programming experts can quickly find bugs in Claude's code and direct Claude precisely. Still need to learn programming properly. Zero-foundation coding apps with complex logic—debugging with AI help wastes lots of time.

I still don't favor OpenAI's o-series. First, I'm not rich enough—can't experience o1-pro which is disappointing. Second, personally I think o-series models exist for benchmarks, but actual experience is similar to Claude, even worse in daily use—outdated knowledge thinking more is just dead-loop self-iteration 😄.

Open the webpage, enter a newly created API Key from [Zhipu AI Open Platform](https://www.bigmodel.cn/) to start real-time voice interaction. The GLM-Realtime API demo site still has bugs, but I think it's good enough. Expect Zhipu will soon list GLM Realtime API on the API platform with real-time voice interaction like Google AI Studio, or directly add to ChatGLM App—then this demo becomes worthless.

GLM Realtime API currently can only sing 7 songs—better than nothing, but music copyright remains an insurmountable mountain for AI.

![GLM Realtime API can currently only sing 7 songs](https://cdn.sa.net/2025/01/18/G6PCDHQoeg2nyWv.webp)

Whether these 7 songs are still copyright-protected wasn't deeply researched. See Perplexity's analysis:

![Perplexity's analysis of 7 songs' copyright](https://cdn.sa.net/2025/01/18/ATiq3lnuIYe1m8E.webp)

7 songs demo video:

BiliBili: [https://www.bilibili.com/video/BV1DywAe4EfC/](https://www.bilibili.com/video/BV1DywAe4EfC/)

Youtube: [https://www.youtube.com/watch?v=xsRXGFBHBDg](https://www.youtube.com/watch?v=xsRXGFBHBDg)

Hope domestic AI gets better in 2025. Zhipu is my Top 4 domestic AI—top three are Alibaba's Qwen, DeepSeek, and ByteDance's Doubao.
