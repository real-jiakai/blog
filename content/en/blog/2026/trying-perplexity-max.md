---
title: "Trying Out Perplexity Max"
date: 2026-06-08T18:05:58+08:00
lastmod: 2026-06-08
tags: ['perplexity']
slug: "trying-perplexity-max"
translationKey: "trying-perplexity-max"
summary: A one-month hands-on review of Perplexity Max, including Model Council, Computer, research tools, and mobile use.
showtoc: true
---

## Backstory

In February 2026, Perplexity launched features like Model Council, but restricted them to Max subscribers only. Over the following months in March and April, I spotted some discounted Perplexity Enterprise Max listings on Xianyu (a Chinese secondhand marketplace), but I was too busy to pull the trigger. After the May Day holiday, cheap Perplexity Max memberships popped up again on Xianyu and other resale platforms, so I spent 600 RMB (~$82 USD) to try Perplexity Max for one month. [Note: I later saw listings under 500 RMB — early adopters pay more, latecomers get discounts.]

![Discounted Perplexity Max memberships on Xianyu](https://i.see.you/2026/06/08/c0lI/20260607184008997.webp)

## TL;DR

Perplexity Max has its merits, but not many. Perhaps because I'd already been wowed by Claude Cowork and Codex, Perplexity Max's features didn't really move the needle for me.

If you want a low-cost way to experience something like Model Council, check out [Model Fusion](https://openrouter.ai/fusion) on OpenRouter.

![Model Fusion on OpenRouter](https://i.see.you/2026/06/08/fL7v/20260607184417788.webp)

If you want the model council to have better context from web searches, Perplexity Max might be worth trying. Perplexity is the OG of AI search after all, and the quality of its web retrieval layer is a genuine moat. Note: OpenRouter's Model Fusion can also enable web access and adjust reasoning intensity.

![Perplexity Model Council vs OpenRouter Model Fusion](https://i.see.you/2026/06/08/zr4O/20260607190332768.webp)

When using Perplexity's regular Search, I recommend querying in English (you can use the Immersive Translate extension + triple-space tap to quickly convert Chinese input to English) and setting the model reply preference to Chinese. After all, nobody wants Perplexity citing content from low-quality sources like CSDN.

I also tried personalized custom instructions, but GPT 5.5 Thinking and Claude Opus 4.8 Thinking in Perplexity's regular Search don't always follow them well. They see you asking in Chinese and start searching for Chinese content, even when English would yield better results for the query. Computer, on the other hand, follows custom instructions much more reliably.

![PPLX Computer follows instructions better than regular Search](https://i.see.you/2026/06/08/Mx4w/20260607185345395.webp)

My Perplexity custom instructions are shown below, written by the Claude Opus model within Perplexity. The main goal is to prioritize high-quality English sources.

```bash
Search Strategy:
1. Regardless of the language I use to ask, ALWAYS translate my query into English first and run the web search in English as the primary search.
2. Prioritize high-quality English-language sources (official docs, reputable media, academic sites, GitHub, Stack Overflow, Reddit, etc.).
3. Only run a Chinese-language search as a supplementary pass when the topic is China-specific (local policy, domestic products, Chinese celebrities, etc.) or when English sources are insufficient.
4. Always reply to me in 简体中文, but keep proper nouns, technical terms and quotes in their original English form.
5. When citing, prefer English sources; clearly mark which citations come from Chinese sources.
```

The Claude Opus model inside Perplexity appears to be genuine (Claude models don't distinguish between Chinese and English quotation marks), but the reasoning intensity feels low. Even though I often assigned the same tasks to Perplexity Computer, I still ended up preferring results from Claude Cowork and Codex.

## Perplexity Computer Key Specs

- The cloud machine is a headless Linux server with 2 CPU cores, ~8GB RAM, and ~20GB disk.
- Each Computer session gets a dedicated VM, destroyed after the task completes.
- The cloud machine IP is an AWS US IP (i.e., Perplexity running in a US IP environment).
- The machine comes pre-loaded with tools like Python 3 and curl.
- Claude Code and Codex are installed but not logged in.

## Highlights and Interesting Use Cases

1. Cross-validation with Model Council when things are ambiguous

A typical Model Council response consists of four parts: `Where Models Agree`, `Where Models Disagree`, `Unique Discoveries` (shown when a model has a unique finding), and `Comprehensive Analysis`.

According to users on the r/perplexity_ai subreddit, the monthly Model Council quota is likely 50 or 100 uses. After a month, I never hit the limit — in practice, there just aren't that many ambiguous questions that warrant a committee discussion. I used it most when preparing for a computer science teaching certification exam, reviewing university-level CS knowledge and cross-checking things I was unsure about.

![Model Council helping with exam prep](https://i.see.you/2026/05/14/6zwJ/20260514042732615.webp)

When your own knowledge can't verify whether a single model's response is accurate, having models brainstorm and debate with each other to produce a comprehensive and more trustworthy analysis is genuinely valuable.

2. Perplexity Computer orchestrating a Code CLI for programming

![Using ChatGPT Team device authorization to log into Codex within Perplexity Computer](https://i.see.you/2026/06/08/rN9v/20260607194815243.webp)

I set the Computer's orchestration model to Claude Opus 4.8, had it update Codex and set the Codex model to 5.5 xhigh, then assisted it with my ChatGPT Team device authorization login.

From there, it was Claude Opus 4.8 directing GPT 5.5 in Codex to handle the coding task.

The task was building a birthday celebration website — a single-page site featuring birthday wishes, a letter, a photo gallery, and interactive candle lighting. The final result turned out quite nice.

![The birthday site turned out great](https://i.see.you/2026/06/08/G3zo/20260607194402828.webp)

But is it really necessary to use Perplexity Max's Computer for this kind of nesting? Obviously not — you could just develop locally with Claude Code and have Codex supervise each step.

3. Perplexity Mac client controlling WeChat to chat with contacts

On the first day I got the Perplexity Max account, I tested whether it could operate apps like WeChat. After running for quite a while, Computer managed to send WeChat messages to contacts. The screenshot shows it messaging the vendor who sold me the Perplexity Max account.

![Perplexity Mac client controlling WeChat](https://i.see.you/2026/06/08/2hBr/20260607225837987.webp)

But the whole process was noticeably less smooth than Claude Cowork — scripted app control was slow. Claude Cowork is the smoothest AI tool I've used for operating WeChat, with Codex coming in second.

After installing the Perplexity Mac client, you can use your local Mac as Perplexity Computer's work environment. I didn't explore this much, since I trust Claude Cowork and Codex more.

4. Using Perplexity Computer for scheduled website monitoring

![Using Perplexity Computer for scheduled website monitoring](https://i.see.you/2026/06/08/4Bze/20260607231048761.webp)

During a recent job search, I needed to watch for new announcements on a website. To get notified immediately when new postings appeared, I had Perplexity Computer check the announcement list every hour and push notifications to a Telegram bot.

The underlying model for scheduled tasks is GPT 5.2 — presumably to save costs, since GPT 5.2 is cheaper than 5.4 and 5.5.

![GPT 5.2 is cheaper than 5.4 and 5.5](https://i.see.you/2026/06/08/tlX3/20260607231820833.webp)

5. Perplexity Computer drawing on tldraw

![Perplexity Computer drawing on tldraw](https://i.see.you/2026/06/08/ff8B/20260607233134105.webp)

Drawing cats stroke by stroke on the tldraw website — the left is Claude Sonnet 4.6's masterpiece, the right is Claude Opus 4.8's masterpiece.

6. Visualizations in Perplexity

![Visualizations in Perplexity](https://i.see.you/2026/06/08/wj9S/20260608013802897.webp)

Stocks, weather, and other information are presented with visual info cards.

7. Academic database integration

![Academic database integration](https://i.see.you/2026/06/08/Pw1v/20260608014457431.webp)

Researchers can specify sources like Wiley to accelerate their work. I don't do academic research, so I barely used this feature.

## Drawbacks

1. The Perplexity mobile app defaults Computer's orchestration model to Claude Sonnet 4.6

![Perplexity mobile app Computer defaults to Claude Sonnet 4.6](https://i.see.you/2026/06/08/iv9N/20260607192404430.webp)

As of June 8, 2026, the Perplexity mobile app still can't specify the orchestration model for Computer like the web version can — there's simply no model selection option. When probed, the base model turns out to be Claude Sonnet 4.6. Perplexity is being too stingy here.

2. No cloud desktop interface like Manus

![Tasking Perplexity Computer with researching user feedback about Perplexity Max on Xiaohongshu. The login QR code was sent to me as a screenshot.](https://i.see.you/2026/06/08/2Kxx/20260607193028799.webp)

For example, I assigned Perplexity Computer to research user feedback about Perplexity Max on Xiaohongshu (a Chinese social platform). The login QR code was delivered as a screenshot.

![I dislike Perplexity Computer's lack of transparency](https://i.see.you/2026/06/08/Ev0u/20260607193309728.webp)

It's essentially a cloud computer like Manus, but all you get are screenshots at most. The user interaction experience is pretty bad.

3. Limited context window

Remember to enable the extended context window for Computer in settings. Without it, context gets compressed frequently and key information can be lost.

![Remember to enable Computer's extended context window in settings](https://i.see.you/2026/06/08/qr8J/20260608003922810.webp)

From my research, Perplexity's context window appears to be only 32k.

## Final Thoughts

After a month with Perplexity Max, the mystique has worn off. Everything Perplexity Computer can do, Claude Cowork and Codex can also do — and do better. It's similar to OpenClaw and Hermes Agent, which can't match Claude Cowork and Codex in terms of results. Those open-source agents at least have the advantage of being open-source, whereas Perplexity Computer is closed-source.

I've seen some Chinese media outlets flip-flopping on Perplexity: one moment calling it a doomed API wrapper, the next praising Model Council and Computer as proof it's alive and strong. Looking at the trajectory over recent months, I'm not optimistic about the long-term competitiveness of cloud-based agent execution environments like Perplexity Computer. What Computer can do today, Claude Cowork and Codex can largely do as well, and in my experience, often better. The one feature I genuinely appreciate is Model Council — having top-tier models discuss and answer your questions together is a solid experience. Combined with Perplexity's professional academic databases, it might serve academic researchers particularly well.

That said, my conclusion carries personal bias. For non-technical users, Perplexity Computer's "zero-config, works out of the box" approach might actually be quite appealing.

These are my observations from nearly a month of use. If you want to try Perplexity Max, consider grabbing a one-month subscription from a reseller to test the waters. Generally speaking, I wouldn't recommend it — sticking with ChatGPT and Claude is the way to go.
