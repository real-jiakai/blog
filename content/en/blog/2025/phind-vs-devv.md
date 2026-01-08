---
title: "Phind VS Devv"
date: 2025-03-25T14:21:17+08:00
tags: ['ai', 'programming', 'search','phind','devv']
slug: "phind-vs-devv"
summary: Sharing my experience with AI programming search tools Phind and Devv.
showtoc: true
---

## Update (2025.3.25)

Having Claude Pro doesn't make Devv redundant. For programming questions requiring internet search, I usually ask Devv directly. Devv searches the internet paired with Claude 3.7 Sonnet Thinking model to help me.

Devv experience is really good. Recommend friends with budget who can't get Claude Pro but want Claude models to subscribe. My afternoon writing might have been a bit biased. Devv renewal might continue next month, but Phind membership is cancelled.

## Background Story

At the end of February, I subscribed to Phind. After that, I also subscribed to Devv. After nearly a month of use, sharing my personal experience with both.

Price-wise, Phind has no student discount—$20/month. Devv has student discount—after email verification with student ID, 20% off—$16/month.

I was willing to try Phind because I encountered a Huggingface TRL library issue, and among various AI searches, only Phind's free 70B model found the solution from GitHub Issues through search.

Though if I manually searched, I probably could find the solution after some browsing. But this good experience promoted my later paid attempt.

First time trying Phind was during the GPT-4 explosion in 2023. Phind marketed itself as a programmer search engine. Back then Phind combined GPT-4 with web search—provided lots of help for my programming learning. I remember my old Windows computer's Edge browser homepage was even set to Phind.

In 2024, I didn't pay much attention to Phind. In February 2025, a Hacker News post—[Phind 2: AI search with visual answers and multi-step reasoning](https://news.ycombinator.com/item?id=43039308) caught my interest. Phind 2 released, officially claiming to reshape AI search with visual answers and multi-step reasoning. Saw the official [blog](https://www.phind.com/blog/)—was tempted but held back.

Devv, this AI programming search, I registered or bookmarked in late 2023—URL is in my bookmarks but never used seriously. This is a Chinese developer's overseas AI programming search. Saw V2EX and other platform users' reviews—all praised Devv's user experience.

Both AI programming searches initially offered free GPT-4+web search. After attracting users with free strategy, commercial attempts began. Free is unsustainable—especially with expensive frontier model API prices. But commercialization inevitably loses some users. After late 2024, basically no more user experience shares for these two.

## Phind

Pro membership claimed features:

![Phind Pro membership claimed features](https://cdn.sa.net/2025/03/25/hjP3rRaDgoAJeQS.webp)

- Unlimited Phind series model searches
- Multi-query search mode
- Analyze images, PDFs, CSVs
- 500 daily GPT-4o, Claude 3.7 Sonnet, 10 Claude Opus
- Chat data opt-out training option
- Run code in browser

### Cons

1. Phind 2's claimed visual search only supports Phind series models. GPT, Claude series don't support.

When I subscribed, it was right before Claude 3.7 Sonnet release. Initially chose Claude 3.5 Sonnet, searched a few times and found no visualization effects. Switched to Phind series—visualization appeared.

2. Phind 2.0 only supports image upload for Phind series models. GPT, Claude series don't support.

I specifically asked in Phind Discord group. Reply: Phind 2.0 only supports image upload for Phind series models.

![Phind 2.0 only supports image upload for Phind series models](https://cdn.sa.net/2025/03/22/2dqQtiTDx1csHeL.webp)

No image upload support seriously limits my expression. This month's experience was truly frustrating.

3. Phind series models are weak

Based on Llama 3.1 series fine-tuning. Those who know, know. Meta's open-source model experience isn't great—even foreigners abandoned Llama in 2024, embracing Qwen.

[Zuckerberg watching you use Qwen instead of LLaMA. 😁](https://www.reddit.com/r/LocalLLaMA/comments/1hlzci9/zuckerberg_watching_you_use_qwen_instead_of_llama/)

![Zuckerberg watching you use Qwen instead of LLaMA. 😁](https://cdn.sa.net/2025/03/22/N2Mv6S8y3dOJPs1.webp)

Running code in browser—testing showed only Phind series models support it. Really weak.

![Running code in browser—only Phind series models support, really weak](https://cdn.sa.net/2025/03/25/igyc2DtEepI6jQf.webp)

4. Chinese questions search Chinese internet

![Chinese questions search Chinese internet](https://cdn.sa.net/2025/03/22/RLxbG4cT2ZKPNlg.webp)

I modified Answer Profile prompts and asked everything in English—barely got some experience.

![Modified Answer Profile prompts and asked in English—barely got some experience](https://cdn.sa.net/2025/03/22/onMfLF6cZmzRVtl.webp)

5. Claude 3.7 Sonnet has no Thinking mode—only regular mode. Not all problems need Thinking, but Thinking mode should exist.

6. Limited context

Estimated 32K context window. Someone in Phind Discord group shared expectations for Phind development—shows current Phind is declining.

Seeing foreigners' crazy obsession with uncensored DeepSeek R1 makes me laugh. Want less censorship—just use Grok. Musk's model has least censorship. Wanting open-source models with less censorship is impossible—every country has its stance and situation. Open-sourcing relatively completely already shows enough sincerity.

![Foreigner's expectations for Phind development](https://cdn.sa.net/2025/03/25/KaHUgDbvzr5STdE.webp)

### Pros

Seems no pros. Even if Claude and GPT models are authentic with many daily uses—experience is just marginal. Phind 2 years ago with internet connection had some advantage, but now with all major LLM providers integrating search—Phind is truly worthless now, though the 70B model once gave me a glimmer of light.

![Phind product pros hard to find](https://cdn.sa.net/2025/03/22/hTtv9lgWH5FycC1.webp)

### Other

Phind supports image generation, video generation—probably using open-source solutions. AI programming search with these fancy features is totally unnecessary.

![Phind supports image generation](https://cdn.sa.net/2025/03/22/RNQkl3PpCgzsfSh.webp)

![Phind supports video generation](https://cdn.sa.net/2025/03/22/aUY3kIjB8gNDKC6.webp)

Video generation link: https://www.phind.com/search/cm8k4gno200003b6syi9uwty5

Phind reportedly has VS Code extension—too lazy to install and try. Current AI programming extensions pale compared to Cursor, Windsurf.

In Phind's Discord group, I even encountered BLM. Speechless.

![In Phind's Discord group, I even encountered BLM. Speechless.](https://cdn.sa.net/2025/03/22/gRKPCYtnyEZGrT2.webp)

- Supplementary case—showing Hacker News latest

At that time [March 12, 2025 afternoon] I tested many models—only Phind and GPT search could get Hacker News top Gemma3 release discussion. ChatGPT still has strength—user experience is well done. Didn't try Claude with MCP to fetch Hacker News.

![Phind search can get Hacker News top Gemma3 release discussion](https://cdn.sa.net/2025/03/12/tfKS6pYUiWBaE2C.webp)

![Phind search can get Hacker News top Gemma3 release discussion](https://cdn.sa.net/2025/03/12/UWylMADXuq6HtIa.webp)

![ChatGPT can get Hacker News top Gemma3 release discussion](https://cdn.sa.net/2025/03/12/r2Z5Yk9wh4LxBGv.webp)

![Hacker News Top](https://cdn.sa.net/2025/03/12/hDQrRstlIv9waAW.webp)

With different prompts, Devv can also fetch Gemma3 release discussion.

![With different prompts, Devv can also fetch Gemma3 release discussion](https://cdn.sa.net/2025/03/12/eW5ghJTRrnmaSUw.webp)

Recently Claude launched search—unfortunately integrated Brave Search. Brave Search quality definitely isn't as good as Google Search. For this case, prompts failed—couldn't get real-time Hacker News info, searched content from days ago.

![Claude search can't get real-time Hacker News info](https://cdn.sa.net/2025/03/22/GOoFknRIBwHv7Cf.webp)

Tried March 25, 2025 afternoon—Claude 3.7 Sonnet Thinking still can't properly show Hacker News real-time info? Point is: Brave Search is weak. Really hope Anthropic finds a better search engine partner.

![March 25, 2025 afternoon try—Claude 3.7 Sonnet Thinking still can't properly show Hacker News real-time info?](https://cdn.sa.net/2025/03/25/v68FXeRnrgitlaK.webp)

![March 25, 2025 afternoon Hacker News real-time info](https://cdn.sa.net/2025/03/25/pPKSEzasgiJxhQL.webp)

I admit Anthropic adding search to Claude improved capabilities, but must point out existing flaws. Sometimes I sigh—Claude's strongest form should be Claude Desktop+MCP Google Search/Kagi Search/SearXNG/other high-quality search engines.

![Mistral AI search also integrates Brave Search](https://cdn.sa.net/2025/03/25/R9WLd3Z45OVJGBn.webp)

### Summary

Phind iteration is too slow. Phind 2's claimed visual search just uses web-scraped images and Mermaid code for charts and flowcharts—such visual search is too basic. Promotion vs actual experience gap is too big.

I definitely won't renew. This month's membership fee was paid with dollars from selling VPS traffic—doesn't hurt.

## Devv

Compared to Phind, Devv has more merits.

Pro membership claimed features:

![Devv membership claimed features](https://cdn.sa.net/2025/03/25/UQijnMhz8CIE9eb.webp)

- Unlimited search
- Advanced model access
- Search and GitHub mode support
- Unlimited advanced model access
- Image upload support (max 4 images at once, 50 daily image searches)
- Extended memory context
- 36K input window

### Cons

1. 36K input window

![36K input window is a Devv con](https://cdn.sa.net/2025/03/25/Pw7ZAszW9UkpdnD.webp)

With membership, single input limit is 36000—can't compare to Claude official site.

![Claude official site's single input limit crushes Devv](https://cdn.sa.net/2025/03/25/uxL6MlQvfpU9GFt.webp)

2. GitHub mode model can only see part of repository content.

Would be better if it could see entire repository, then query relevant files based on user questions and explain corresponding code.

![Devv GitHub mode model can only see part of repository content](https://cdn.sa.net/2025/03/25/MriRUXZeluy5N2b.webp)

During this month's trial, I basically never used this mode. Adding personal repo needs time for Devv to index.

![Devv GitHub mode indexing repository](https://cdn.sa.net/2025/03/25/KeyQrW5s7ARz2EO.webp)

3. Not general search

General question search not as good as Perplexity—can't really call it a con since they market as developer search engine.

4. Sometimes has hallucinations

Current Devv's Claude 3.7 Sonnet is the Thinking version, but not all problems need thinking.

Even with thinking, sometimes has hallucinations—can be misled by web info.

Remember once asking Devv's Claude 3.7 Sonnet about Ollama config—result had wrong info.

### Pros

1. After setting user preferred language, can ask in Chinese, search in English, reply in Chinese.

![Devv after setting user preferred language can ask Chinese, search English, reply Chinese](https://cdn.sa.net/2025/03/25/ZyUWJkNLmuspbRl.webp)

2. Devv Contexts

Devv Contexts lets developers select and include programming languages, platforms, tools, libraries, and frameworks for focused accurate search results.

![Devv Contexts lets developers select programming languages, platforms, tools, libraries, frameworks](https://cdn.sa.net/2025/03/25/hnmt9pdGivouD6w.webp)

Actually I rarely use @ symbol to limit scope. Devv's model is definitely authentic—created HTML page truly has Claude's aesthetics!

![Devv's model is definitely authentic—created HTML page truly has Claude's aesthetics!](https://cdn.sa.net/2025/03/25/6o5thSe2CzvAON3.webp)

3. Unlimited advanced model access

This is more generous. Average person probably maxes at 50 questions/day. Vendors know normal people can't ask many questions—unlimited isn't really a loss.

Think about it—average user asks at most 10 questions/day, nearly 300 questions/month. Claude API probably can't spend $20. Unless constantly chatting in one conversation, rapidly consuming tokens—$20 definitely can't be used up.

4. Web search toggle

Phind etc. also have toggles—turning off search means using advanced models with limited context and input length.

Devv with web search has Devv Agent planning; without web search, it's authentic LLM models.

Paired with Claude 3.7 Sonnet Thinking—good experience.

![Devv Agent+Claude 3.7 Sonnet Thinking](https://cdn.sa.net/2025/03/25/8K5l6LAIscmRy7D.webp)

![Claude 3.7 Sonnet Thinking in Devv](https://cdn.sa.net/2025/03/25/uHTZwy3qW2mj5eC.webp)

### Summary

Don't think less space on Devv review means I didn't care—actually Phind just has too many complaints.

Devv author's experience sharing posts on V2EX, X are worth reading.

![Devv author's experience sharing posts on V2EX, X are worth reading](https://cdn.sa.net/2025/03/25/8ZKXYo3rFEIwu5h.webp)

For users who can't subscribe to Claude Pro—paying for Devv is a good choice.

![For users who can't subscribe to Claude Pro—paying for Devv is a good choice](https://cdn.sa.net/2025/03/25/AzlvZDYc1P8n5BG.webp)

Friends wanting to try Devv can use my referral—mutual $10. via: https://devv.ai/referral?code=d47llwog7gn4

![Friends wanting to try Devv can use my referral—mutual $10](https://cdn.sa.net/2025/03/25/vmUC9EGwYf7KPr2.webp)

For Claude Pro users—paying for Devv is slightly redundant. Claude official experience is already quite good. Though Brave Search is sometimes lacking, most of the time the boost to Claude is obvious.

Yesterday I discovered another point where Anthropic leads others: can search even with attachments!

![Claude can search even with attachments image 1](https://cdn.sa.net/2025/03/25/QxWiufwnUH9oh2b.webp)

![Claude can search even with attachments image 2](https://cdn.sa.net/2025/03/25/9adg6XQ73RGs4y1.webp)

## Summary

Claude official site is the one true god. Devv is decent. Phind currently looks like a defective product.

![Claude official site is the one true god. Devv is decent. Phind currently looks like a defective product.](https://cdn.sa.net/2025/03/25/K3frH5cNYIeGxuZ.webp)
