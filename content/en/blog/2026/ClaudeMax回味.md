---
title: "Reflections on Claude Max"
date: 2026-01-08T16:46:40-08:00
tags: ["claude", "anthropic"]
slug: "claude-max-aftertaste"
summary: Sharing my experience with my second Claude Max subscription.
showtoc: true
---

In December 2025, I subscribed to Claude Max 5x again for my master's thesis pre-defense at the end of the month. Under the Claude Pro plan, the Opus 4.5 quota in Claude Code was pitifully small and ran out quickly. I successfully subscribed using 100,000 Naira (bought for 550 RMB) on the Nigerian Apple Store, and this time it didn't require the 48-hour wait for payment to process like my first time.

I know many proxy services exist, but for more stable usage, I chose to subscribe directly to the official service.

![Subscribing directly to the official plan is more stable than using proxy services](https://cdn.sa.net/2026/01/08/rAkDgLSQovZFOIq.webp)

## Reflections

1. Thesis System Integration and Innovation Demo Implementation

My research direction during graduate school was intelligent question-answering - not the inflexible extractive QA using BERT, but innovation with RAG (improving retrieval algorithms, etc.), engineering (integrating innovations into a QA system for deployment), essentially piling up workload.

I had already completed part of my thesis work during the summer of 2025. When integrating the RAG QA system, I chose langchain's open-source [agent-chat-ui](https://github.com/langchain-ai/agent-chat-ui) project for the frontend, but encountered some problems - the frontend's streaming output would flash briefly and then disappear. I tried various AI tools at the time but couldn't solve this bug, and I didn't research it further afterward, so it kept getting delayed. However, the pre-defense required a draft, and to write the final system section smoothly, I had to solve this bug and implement the engineering demo of my innovations - then the figures for the final chapter would fall into place naturally.

![The agent-chat-ui project isn't outdated - the langchain team is currently focused on deep agents](https://cdn.sa.net/2026/01/09/LeS4pNQdbJAqrau.webp)

So I had Claude Code with Opus 4.5 start solving this bug. Claude Code launched Explore Agents for both the frontend and backend folders, began understanding the projects, and eventually identified the bug - there was an issue with the data variables passed from backend to frontend. This bug was actually quite simple; careful manual investigation could have solved it too. But with tools like Claude Code, sometimes you just want to describe the existing problem and your needs clearly and let AI handle it.

![Claude Code with Opus 4.5 solving the frontend rendering issue](https://cdn.sa.net/2026/01/08/M2rqxWlfwIJLo1u.webp)

Speaking of bug fixing, I must mention GPT 5.2 xhigh in Codex. The frontend rendering disappearance issue reappeared later, and this time Claude Opus 4.5 was stumped. In contrast, GPT 5.2 xhigh used curl and other tools to test the data exchange between frontend and backend, discovered it was a format issue with the RAG generation endpoint's Gemini API response, and corrected the corresponding format, finally getting the frontend to render properly. (I initially used Gemini for the RAG generation endpoint during system integration mainly for testing purposes, attracted by the cheap 2.5 Flash prices from proxy services; running my fine-tuned open-source model with vLLM requires paying for compute. The final engineering demo's generation endpoint will definitely use my own instruction fine-tuned open-source model from my thesis.)

![GPT 5.2 xhigh solving the frontend rendering issue](https://cdn.sa.net/2026/01/08/YVyqeKo8r6MlBSv.webp)

Sometimes my posts on Mastodon are a bit mindless, praising one thing then another, mainly stemming from the excitement and joy of turning off my brain and letting AI solve my needs.

2. Thesis Writing Assistance

I recently saw a blog post - [A Guide to Claude Code 2.0 and getting better at using coding agents](https://sankalp.bearblog.dev/my-experience-with-claude-code-20-and-how-to-get-better-at-using-coding-agents/) - which mentioned that Claude Opus 4.5 has excellent writing capabilities and is closest to human writing.

![Opus 4.5 has excellent writing capabilities and is close to human](https://cdn.sa.net/2026/01/08/vKVh6Yo4aIxpFEM.webp)

When I used it to help write subsequent chapters of my thesis, I found the writing quality was indeed good. Previously, the model that felt most human to me was Gemini 2.5 Pro. My roommate also used Claude Opus 4.5 to help him complete a small paper meeting graduation requirements.

![Opus 4.5 analyzes experimental data with clarity](https://cdn.sa.net/2026/01/08/rNOetPBHyTboSl5.webp)

Moreover, Claude not only writes well but can also directly generate corresponding diagram files for your papers. I usually use draw.io to create thesis diagrams, while my roommate uses Visio - Claude can generate the corresponding diagram files based on user descriptions for both.

![Opus 4.5 can directly generate diagram files](https://cdn.sa.net/2026/01/08/NvYPVJ39kHx1rsO.webp)

3. Claude For Chrome Creates a Divide Between Haves and Have-Nots

A while ago, I saw that Claude For Chrome was opened to Pro users. I initially thought this was good news for Pro users, but after trying it with my Pro account, I found that the model was locked to Haiku 4.5. Anthropic is really stingy - they won't even let Pro users use Sonnet 4.5. This model performs poorly at tasks, as anyone who's used it knows.

![Currently Claude For Chrome only allows Pro users to use the Haiku 4.5 model](https://cdn.sa.net/2026/01/08/ZO6to2cEkXKavwf.webp)

Here are some past use cases with Claude For Chrome.

A. Using Claude For Chrome in the sidebar to assist with learning, eliminating the need for screenshots.

![Using Claude For Chrome in the sidebar to assist with learning](https://cdn.sa.net/2026/01/08/waY9zvXBPis4Tpb.webp)

B. Using Claude For Chrome to operate VNC and solve NAT VPS network issues.

![Using Claude For Chrome to operate VNC and solve NAT VPS network issues](https://cdn.sa.net/2026/01/08/bZr3vAePM7cY1uy.webp)

C. Using Claude For Chrome to research on Xiaohongshu (Little Red Book). However, it sometimes gets flagged by risk control.

![Using Claude For Chrome to research on Xiaohongshu](https://cdn.sa.net/2026/01/08/Tl8vnFDdUhtJA9L.webp)

![Using Claude For Chrome to research on Xiaohongshu - sometimes gets flagged by risk control](https://cdn.sa.net/2026/01/08/qKIwsHmPMFarQhJ.webp)

4. Claude Code Benefits Automation Tasks

During summer vacation, I used Claude Code and other tools to help organize instruction data for fine-tuning open-source LLMs, document knowledge base data with metadata, etc. At that time, I used CLAUDE.md to implement a workflow, letting these Code CLIs use tools like Web Search, MCP, etc. to obtain metadata, complete the corresponding field filling, and thus complete the corpus data organization.

![Claude Code helping me organize data](https://cdn.sa.net/2026/01/08/uBItYo3lxJXT7Sb.webp)

A while ago, I tried custom Commands and Skills in Claude Code, plus using Gemini 3 Pro (High) from Google's Antigravity to remove redundant content. With this workflow, all that's left for humans to do is really just content review - previously I still needed to remove redundant elements, move files, and other operations.

![Gemini 3 Pro model in Antigravity removing redundant content from corpus data](https://cdn.sa.net/2026/01/08/Hhos8i34Cw9Rc16.webp)

A while back, my VPS provider upgraded the CPU of my main server for free, but I needed to do the migration myself. My main server basically runs Docker services, so I had Claude Code on the original VPS pause all Docker services, then compress them into individual archives, had Claude Code on the new VPS remotely pull the archives, then restore the corresponding services. Issues like permissions that came up along the way were also handled by Claude Code. I only needed to provide prompts and guidance throughout the process.

![Using Claude Code for VPS migration](https://cdn.sa.net/2026/01/08/CBXmAQz6GeoMYx1.webp)

5. Claude Code Helped Me Internationalize My Blog

Recently I saw the author of "Trendy Weekly" use Gemini Flash to internationalize the weekly newsletter. The Gemini 2.5 Flash model is indeed an economical model - I also used this model to solve problems when preprocessing data, plus the bargain prices from proxy services, maximizing cost-effectiveness.

![Inspiration for site internationalization](https://cdn.sa.net/2026/01/09/qhmNtoMzuiK3Cld.webp)

I had similar internationalization ideas before, so I guided the Opus 4.5 model in Claude Code to complete the site-wide internationalization. All articles were translated by Opus 4.5, and for the internationalization code, I guided it to browse Hugo's official internationalization documentation before proceeding. It's definitely impossible to get it right in one shot - multiple rounds of communication, describing existing problems, letting Claude Code fix things bit by bit until the site-wide internationalization was complete. There might still be bugs, but I think the completion level is acceptable so far.

![Using Claude Code to internationalize the blog](https://cdn.sa.net/2026/01/09/1aXI2pwjmHSqcNW.webp)

## Summary

Claude Code is a rather key milestone in the development of LLMs in 2025. Karpathy called it a [little gremlin living on your computer](https://karpathy.bearblog.dev/year-in-review-2025/), and Simon Willison called it the most impactful event of 2025.

When Claude Code was first released in February, it wasn't taken seriously because it required API access. I also thought it was a toy, but after it later supported Claude account login and shared account quotas, plus with the addition of Opus 4, it gradually gained attention. In June and July, browsing Lobsters was filled with Claude Code posts, and I finally had to try it, gradually becoming attracted by its charm.

Claude models are currently the best Vibe Coding models, and paired with Claude Code, they rank first on the [SWE-rebench benchmark](https://swe-rebench.com/).

![Claude Code ranks first on the SWE-rebench benchmark](https://cdn.sa.net/2026/01/09/A5nZ2rdziXj4eBK.webp)

Of course, benchmarks aren't absolute. For frontend work, Gemini 3 Pro is sometimes better. Codex with the GPT 5.2 xhigh model, due to its more recent knowledge cutoff (August 2025), has better bug-fixing and robust code-writing capabilities than Claude Code + Claude Opus 4.5.

Claude's limits are strict. Although the Opus 4.5 model is available to Pro users in Claude Code, this token-burning approach means you need a Max subscription to enjoy it fully. Users with heavy needs probably won't find even the Max 20x plan sufficient.

![Claude's strict limits](https://cdn.sa.net/2026/01/08/lziBTaAqXN8bQ2G.webp)

For me, the 5x plan is just right for personal use. Will I continue renewing after this month's subscription ends? Not necessarily - after finishing my thesis draft, my needs will decrease.

Also, having a Max subscription makes you want to maximize the 5-hour time limits. For example, I usually send "hi" to Claude between 6-7 AM to ensure the first 5-hour window is from 6 AM to 11 AM, and so on. Sometimes I can squeeze in four 5-hour windows in a single day. At night, the trapezius muscle on the right side of my neck feels sore and tight - you need to remember to look up and move around from time to time during intensive use, otherwise you'll get cervical spondylosis, which isn't worth it.

At the same time, even with the most powerful models, natural language coding still requires good guidance from you. For example, with the Hugo site-wide internationalization I mentioned earlier, if I hadn't guided it to browse relevant resources before coding, Claude would probably have gone down the wrong path from the start. Will AI replace programmers? It can't - it still needs to iterate step by step under programmer guidance.

Recently I saw that Claude Code with the [Ralph Loop](https://github.com/anthropics/claude-plugins-official/tree/main/plugins/ralph-loop) plugin can self-iterate, making it seem like coding agents can truly run on autopilot. But it still requires clear and precise prompts for guidance - not everyone can write perfect prompts on the first try, and any deviation can lead to vastly different results.

![Iteratively optimizing CLAUDE.md](https://cdn.sa.net/2026/01/09/o6dxHKqvMJZGsp5.webp)

For example, the CLAUDE.md in my project was completed through step-by-step iteration and optimization. Only then did I feel comfortable letting Claude follow the prompts to complete certain workflows for the project.

That's all for now - I'll continue sharing more real cases as I accumulate them. One final note: the review of this article was also completed by Claude Code + Claude Opus 4.5.
