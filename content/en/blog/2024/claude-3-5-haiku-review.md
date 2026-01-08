---
title: "Claude 3.5 Haiku Review"
date: 2024-11-05T10:11:43+08:00
tags: ['claude', 'anthropic']
slug: "claude-3-5-haiku-review"
summary: Recording my Claude 3.5 Haiku review.
showtoc: false
draft: false
---

1. Ranks 4th on the aider code leaderboard.

![Ranks 4th on aider code leaderboard](https://cdn.sa.net/2024/11/05/7FXzIBTG6NgP3y8.webp)

Pending rankings on livebench and lmarena leaderboards—code capability is expected to not match claude 3.5 sonnet(new).

2. Model API pricing

![Model API pricing](https://cdn.sa.net/2024/11/05/9WTwXv2juqtIokm.webp)

Currently only accessible via API, expected to later replace claude 3 haiku on claude.ai.

3. Claude 3.5 haiku highlights: fast, updated knowledge cutoff date (July 2024—can't help but complain about OpenAI, when will they push their model knowledge cutoff date forward, stuck at October 2023, affecting model accuracy and user experience).

Note: Doesn't support image input.

4. Official main use cases for claude 3.5 haiku [customized the model in lobechat, using the latest haiku model from the official API]:

![Claude 3.5 haiku main use cases](https://cdn.sa.net/2024/11/05/SDu4187N5fQrOYK.webp)

5. Benchmarks—feels like haiku is a distilled version of claude 3.5 sonnet(new)

![Benchmarks](https://cdn.sa.net/2024/11/05/7EpFWwX4Mk6n3s9.webp)

6. Claude 3.5 Sonnet evaluation

+ Knowledge cutoff date test [no political factors involved, purely for testing purposes]

![Knowledge cutoff test image 1](https://cdn.sa.net/2024/11/05/5KQLYSjhRrgIa2s.webp)

Funny thing about claude 3.5 sonnet(new)—initially refused to respond [politically sensitive, cautious], started a new chat and got accurate response.

![Knowledge cutoff test image 2](https://cdn.sa.net/2024/11/05/cNUGDYms5AZwthb.webp)

![Knowledge cutoff test image 3](https://cdn.sa.net/2024/11/05/gN7wVscxDG9nbLq.webp)

What happened? Feels like claude 3.5 sonnet haiku really is a distilled version of claude 3.5 sonnet(new).

![Knowledge cutoff test image 4](https://cdn.sa.net/2024/11/05/KWETG4BYrUtuiCc.webp)

![Knowledge cutoff test image 5](https://cdn.sa.net/2024/11/05/OKyYZabpr5JeS6x.webp)

I specifically checked Anthropic's console logs—it really was requesting the claude 3.5 haiku model.

![Anthropic console logs](https://cdn.sa.net/2024/11/05/VQJrB1m3lHf4AaE.webp)

Tried asking in English—claude 3.5 haiku directly said the cutoff date was February 2024.

![Knowledge cutoff test image 6](https://cdn.sa.net/2024/11/05/GjlyPI2ZYMNU4dS.webp)

![Knowledge cutoff test image 7](https://cdn.sa.net/2024/11/05/6OM3pRKgAfEz4bl.webp)

Instantly lost motivation to continue testing. Actually, a later LLM knowledge cutoff doesn't mean the LLM learned all knowledge from that period—for example, cohere's command r plus has the latest cutoff on lmarena (August 2024), but that model doesn't know comprehensively about events in 2024. Can't help but appreciate the importance of data for LLM training.

![Cohere's command r plus doesn't know comprehensively about 2024 events](https://cdn.sa.net/2024/11/05/l61JPIfnH9L5Ubk.webp)

Maybe I just haven't found claude 3.5 haiku's advantages compared to claude 3.5 sonnet(new) yet. According to Alex Albert (Anthropic's Head of Developer Relations), claude 3.5 haiku still has lots of potential.

![Alex Albert's description of claude 3.5 haiku](https://cdn.sa.net/2024/11/05/RFlE1YLgVuA64qk.webp)

+ Reasoning ability

A pile of shit.

![Reasoning ability test image 1](https://cdn.sa.net/2024/11/05/KCNbL9l7Dx38apM.webp)

Claude 3.5 sonnet(new) also has hallucinations in reasoning.

![Reasoning ability test image 2](https://cdn.sa.net/2024/11/05/uPRL6DGyCZ5rmeq.webp)

![Reasoning ability test image 3](https://cdn.sa.net/2024/11/05/v1Q7MJU23SILjlx.webp)

7. Let's briefly look at Musk's xAI [free $25 monthly quota until year end]. The librechat open-source project supports xai.

![xai test image 1](https://cdn.sa.net/2024/11/05/Ef1vAVkJMsn3Kgt.webp)

![xai test image 2](https://cdn.sa.net/2024/11/05/tpSfuyDmUxEZe6N.webp)

Musk's xai grok was trained on data from X (formerly Twitter), coincidentally covered it? xai's knowledge date shows March 2024 on lmarena—did grok time-travel? And it actually got it right.

![xai test image 3](https://cdn.sa.net/2024/11/05/YtQIeGuJagjSidR.webp)

No motivation to explore further.

![xai test image 4](https://cdn.sa.net/2024/11/05/4O6KhLwWTXRnp3l.webp)

![xai test image 5](https://cdn.sa.net/2024/11/05/DkTUqbIVn1Hly7W.webp)

Better stick with claude 3.5 sonnet(new). What truly excites is always the strongest LLM.

The LLM field is destined to be winner-takes-all. Except for some cost-conscious application scenarios, who would want to waste time chatting with lower-tier LLMs in most other scenarios?

Currently claude 3.5 haiku is so much more expensive than gpt-4o mini—considering costs, I can't find any reason to use claude 3.5 haiku.

![gpt 4o-mini pricing](https://cdn.sa.net/2024/11/05/2ioxFyED3LW8kaP.webp)

As I said, maybe I just don't have any use cases for claude 3.5 haiku currently. If you have scenarios like those described in the image below, you can try using it with prompt caching.

![Alex Albert's promotion of claude 3.5 haiku](https://cdn.sa.net/2024/11/05/6zVnqiG4SNWKp2a.webp)

Of course, cost reductions will come later.

![Claude 3.5 haiku cost reduction coming later](https://cdn.sa.net/2024/11/05/8QDpefN5ynCqciI.webp)

via: https://www.anthropic.com/claude/haiku
