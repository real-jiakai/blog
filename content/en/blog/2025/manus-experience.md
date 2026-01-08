---
title: "Manus Experience"
date: 2025-07-17T14:33:10+08:00
tags: ["manus"]
slug: "manus-experience"
summary: Complaining about Manus experience.
showtoc: true
draft: false
---

## Update (2025.7.19)

With ChatGPT Agent's release, Manus has become more active, like sharing dry goods articles on building Agents: [Context Engineering for AI Agents: Lessons from Building Manus](https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus). Pressure from new competitors creating motivation is good.

Manus leaving China is a helpless move. Product has drawbacks but also advantages. Agent products definitely have many flaws—after all, Agent's biggest problem is instability.

Remember early this year, using Claude 3.5 Sonnet as Agent framework base model, tools could be called stably within the same workflow. When Claude 3.7 Sonnet came out in February, after base model upgrade, the model started overthinking, sometimes not calling tools. Recently using Claude Desktop with MCP protocol calling external tools—even the strongest Claude Opus 4 doesn't perfectly execute the same flow every time.

Give Agent products some time.

## 0 Introduction

A while ago I was learning about Agents. At that time, non-membership Manus experience felt very dumb. So on July 4, 2025, I used WildCard to subscribe to Manus Basic membership. Unexpectedly a week later WildCard shut down. After WildCard website came back online, I quickly spent the remaining balance on my virtual card. Also a week after subscribing, Manus left mainland China—this news received much criticism.

This post shares Manus Basic membership experience.

## 1 First Things First

First, Manus as a product—non-paying user experience is very poor.

Non-paying Manus accounts—the Agent base model probably isn't Claude. During deep experience, free Manus Agent has extremely high error rate—among the worse free Agent products. Below shows asking free Manus to verify if Q&A pairs are accurate—only did one search. Needless to say, answers were inadequate.

![Free Manus experience is poor](https://cdn.sa.net/2025/07/04/zbdmvYRFQ85MqEJ.webp)

After paying for Basic membership, Agent preference automatically switches to Quality.

![After paying for Basic membership, Agent preference automatically switches to Quality](https://cdn.sa.net/2025/07/04/ph9vMeWSwxcu5mQ.webp)

Now Manus Agent's effort level has qualitatively improved.

When using, recommend adding a Knowledge entry to Manus Knowledge as shown below—otherwise Chinese questions searching CSDN and such sites would be awkward.

![Add a Knowledge entry to Manus for prioritizing English search](https://cdn.sa.net/2025/07/17/PEOx2k4UnbZs7Iz.webp)

After adding this Knowledge, generally Manus does Knowledge recall before searching internet, ensuring English search first. Only when English internet truly lacks resources does it search in Chinese.

![Manus does Knowledge recall before searching internet](https://cdn.sa.net/2025/07/17/d5aguhyQj89UMEX.webp)

## 2 Pros

### 2.1 Beautiful PPT creation

![Thanks to OpenAI GPT Image 1 model integration, Manus-generated PPT is richly illustrated](https://cdn.sa.net/2025/07/17/mfDzkdLHSPQhlWa.webp)

Thanks to OpenAI GPT Image 1 model integration, generated PPT is richly illustrated [though PPT also has inaccurate statements]. Tiangong/Skywork-generated PPT is also beautiful—images are cached from internet, not AI-generated [below shows Tiangong PPT agent's PPT, but unfortunately has wrong information]. Z.ai, Genspark-generated PPTs are also nice but text-heavy without images—not my taste.

![Tiangong/Skywork-generated PPT is also beautiful, but PPT has wrong information](https://cdn.sa.net/2025/07/17/aeOZuIT2BVKigL1.webp)

Heard OpenAI is also releasing Agent Mode soon—can directly edit PPT. If combined with OpenAI's strongest text-to-image model, Manus probably becomes irrelevant.

### 2.2 Mini computer interaction is trendy but struggles with anti-crawling

Manus right-side mini computer interaction is trendy—I really like this experience.

![Manus right-side mini computer interaction is trendy](https://cdn.sa.net/2025/07/17/C3sP2phSyxRd7b5.webp)

But must point out current agent computer operation drawbacks: can't pass human verification.

![Minimax Agent blocked by Google human verification](https://cdn.sa.net/2025/07/17/UmKhxMXV5LtFqvj.webp)

Above shows Minimax Agent blocked by Google human verification. Remember when Manus mini computer encountered Cloudflare Turnstile, I manually controlled the mini computer multiple times, clicking Cloudflare's human verification button—kept spinning in infinite loop. Shows Cloudflare's human verification is really impressive.

## 3 Cons

### 3.1 Poor public web data discernment

Since public internet materials vary in quality, Manus can't properly distinguish correct from incorrect—accepting everything or fragmentarily understanding articles. Final result is flaws in replies.

Below shows paid Manus misunderstanding public internet material content, giving flawed reply.

![Paid Manus misunderstood public internet material content, giving flawed reply](https://cdn.sa.net/2025/07/04/dnRyqrmJfWe63Kz.webp)

At this point, adding user clarification can make Manus correct. Below shows Manus successfully correcting after my clarification guidance.

![Manus successfully correcting after my clarification guidance](https://cdn.sa.net/2025/07/04/KDrHj9xa6OkSUqM.webp)

Same question—Minimax Agent, ChatGPT o3, Flowith trial membership all properly identified errors in original Q&A pairs. In this case, Manus Basic membership lost to these products. Below shows Minimax Agent identifying errors in original Q&A pairs in one go.

![Minimax Agent identifying errors in original Q&A pairs in one go](https://cdn.sa.net/2025/07/04/gaj6OiNsq9MfD2U.webp)

### 3.2 Non-transparent models

What base models for Adaptive, Agent, Chat modes—completely unmarked. Not much info online about Manus's models either.

![Manus mode base models non-transparent](https://cdn.sa.net/2025/07/17/WphUsbGtNIT2wZ9.webp)

In Manus Discord group, late June, users guessed Manus Agent base model is Claude 3.7 Sonnet, Chat model is Gemini 2.5 Pro. Probably still the same mid-July—Agent base model not yet switched to Claude 4. Can't rule out already switched to Claude 4 possibility. Either way, Manus needs to improve model transparency.

![Manus Discord group users guessing Manus base model](https://cdn.sa.net/2025/07/17/65Uea4WQRlfEcKN.webp)

Gemini 2.5 Pro's best experience is AI Studio + enabling Grounding with Google Search. Nobody would want Manus's Chat.

### 3.3 Other cons

Scheduled tasks not as clear as Grok's. Cloud browser—I currently have no use case. Official tweet example shown below. Text-to-image I prefer directly using ChatGPT. Text-to-video has Veo3 in Gemini App...

![Manus cloud browser official example](https://cdn.sa.net/2025/07/17/tuKs1F6SjDnaI3X.webp)

## 4 Summary

Manus feels like pure hype—hosting various events worldwide periodically, but very few features serve as moat. Events even in Nepal—quite surprising.

![Manus events even in Nepal](https://cdn.sa.net/2025/07/17/gW8YJ26hPVbofvX.webp)

I'm pessimistic about Manus's future. Given current trend of LLM vendors natively providing Agent LLMs, Manus will be in the same boat as Perplexity. Nearly $20/month for ChatGPT is better value.

![Manus membership fee not worth it](https://cdn.sa.net/2025/07/17/Fk86bZO9fKaTqgl.webp)

Tools are Agent products' moat. Like Grok can connect to X platform.

![Tools are Agent products' moat.](https://cdn.sa.net/2025/07/17/QFhVnt1ocmbwuqX.webp)

Meanwhile, Agent products are easily disturbed by variable-quality internet information. Chinese internet is essentially composed of various private domains (WeChat Official Accounts, Xiaohongshu, etc.). Public internet has less high-quality information. If Agent products' models have weak discernment, getting disturbed by low-quality info leads to replies seriously citing wrong information.

A recent blog post [After Kimi K2 Release: No Longer Just ChatBot](https://bigeagle.me/2025/07/kimi-k2/) had a statement that resonated with me: `The vast majority of Agent products, without Claude, are nothing`. Reality is indeed so. Claude leads by far in Agents. Looking forward to Anthropic upgrading web Extended Thinking to Agent in the second half of the year after Claude Code programming Agent, while maintaining classic LLM.
