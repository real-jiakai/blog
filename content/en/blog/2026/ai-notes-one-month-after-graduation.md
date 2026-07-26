---
title: "AI Tinkering Notes, One Month After Graduation"
date: 2026-07-25T00:31:49-07:00
lastmod: 2026-07-25T00:31:49-07:00
tags: ["ai", "anthropic", "claude", "gpt", "kimi"]
slug: "ai-notes-one-month-after-graduation"
translationKey: "ai-notes-one-month-after-graduation"
summary: "Lessons from a month of post-graduation tinkering with Claude, GPT, Kimi, and self-hosted agents (raising lobsters)."
showtoc: true
---

## Preface

It's been nearly a month since I graduated. Over the past month I've tinkered with a lot of AI and piled up quite a few thoughts worth sharing, so I sat down and wrote this article.

## Thoughts on AI Trends

My impression right now is that AI vendors care more and more about coding and agent benchmark scores - some have already delayed model releases because those scores didn't look good. One example is Google's Gemini 3.5 Pro model.

![Gemini 3.5 Pro's release delayed over weak coding ability](https://i.see.you/2026/07/18/w4Hu/20260718004829276.webp)

Personally, I think this emphasis on coding and agents reflects what the market and the public now expect from models: not just chatting and answering questions, but using all kinds of tools to help get tasks done.

I myself was deeply stunned by these agent products more than once in the first half of the year.

For example, my thesis declaration page needed my signature and my advisor's inserted, but what we got from taking photos wasn't a background-free version that could be inserted directly. The conventional approach here might be to search Xiaohongshu (Little Red Book) for tips on making background-free signatures, then produce them by hand and insert them; the more advanced approach is to send the signatures straight to an agent product and let the AI make the background-free versions.

![An agent product making background-free signatures](https://i.see.you/2026/07/18/hd7K/20260718010322716.webp)

Any capable agent product should handle this task with ease. I gave it to both GPT 5.5 in Codex and Claude Opus 4.8 in Claude Cowork, and both produced good background-free signatures. Claude Opus 4.8 in Claude Cowork was more of a "wheelchair" (meaning nanny-level, nothing for you to worry about) and nailed it in one step, while GPT 5.5 in Codex was more cautious and kept asking follow-up questions about my requirements, but in the end both delivered good results.

Another example: having an agent product deploy CLIProxyAPI (CPA), a relay reverse-proxy project. I used the prompt in the image below to have a Claude model deploy the reverse proxy for me and add a web UI display, switching on Auto Mode in Claude Code so it worked on its own, and the final result was very good. Without this kind of agent, I would have had to manually create the folder, write the config file, start the container, and so on. My grad school roommate used a similar prompt and successfully had Codex with GPT 5.5 deploy the CPA relay reverse-proxy project.

![The prompt guiding Claude to deploy the CPA project](https://i.see.you/2026/07/18/q5Dd/20260718011604275.webp)

![The CPA project's web UI](https://i.see.you/2026/07/18/3Uxo/20260718011316169.webp)

The most recent example happened on July 18: I self-hosted OpenClaw and configured the Kimi K3 model from OpenCode, only to be told the model was unavailable. At first I thought OpenCode was falsely advertising and didn't offer the model at all; in the end, with the help of Claude Code (with Claude Opus 4.8), I found the root cause: OpenClaw hadn't yet adapted to Kimi K3 through the OpenCode channel, and its model catalog was missing the corresponding entry. Once Claude added the entry, the error disappeared.

![Fixing the error when configuring OpenCode's Kimi K3 in OpenClaw](https://i.see.you/2026/07/25/siZ4/20260724200842560.webp)

![Claude Code with the Claude Opus 4.8 model solving the model-unavailable error](https://i.see.you/2026/07/18/9rqL/20260718012610312.webp)

## Claude

Over the past month, the thing that drove me craziest was Claude models.

To stop worrying about Claude Fable 5 quota, on June 10 I paid 400 yuan to a seller on Xianyu (Chinese secondhand marketplace) for a Max 5x plan topped up through the reseller. After just 2-3 days of use, the Claude Fable 5 ban hit. I remember that day I had gone to an interview for a Guangxi provincial-level public institution job, and on the taxi ride home afterward I saw the push notification about the ban. I had been planning to open a 5-hour Claude window in the car; after seeing the ban, the mood was simply gone. On July 2, Fable 5 was unbanned, and I went back to happily using that Max 5x membership until it expired.

That same day, July 2, I spent another 400 yuan on Xianyu for a new reseller-topped-up Max 5x. This time I wasn't so lucky: after about 24 hours of use, the account got banned.

![Second reseller top-up of Claude Max 5x on Xianyu, account banned after about 24 hours](https://i.see.you/2026/07/18/3eFv/20260718015223423.webp)

The seller offers no warranty against bans - a brutal loss. Afterward I [posted on the LINUX DO forum](https://linux.do/t/topic/2520143) to share this heartbreaking experience. I really am a simp.

![Sharing my heartbreak on the LINUX DO forum after the ban](https://i.see.you/2026/07/18/Q3ho/20260718015719955.webp)

But what can you do? To this day, Fable 5 is still the best model overall, all things considered. The middle finger stays raised at Dario and Anthropic, but use it I must. Just make sure your own anti-detection is done thoroughly enough.

On the second day after the ban, I spent 480 yuan on the site of the legendary [chirou](https://chirou.ai/cat/37) for a Claude Max 5x account. That account is still alive and well today, and it has never been logged into from any machine in mainland China. It stays parked on a US Windows machine the whole time; I've also set up a CPA reverse proxy for it, and I use it on a German VPS as well.

Back in 2024 I wrote a post, [Claude Account Suspension Resolution](https://blog.gujiakai.top/en/2024/11/claude-account-suspension-resolution/), and it still applies today: for stable use, buy a US VPS and run your Claude services on it the whole time. If the provider has a Windows template, use it directly; if not, install Debian first and then dd-reinstall the disk into Windows. If the speed feels lacking, relay through an optimized route such as DMIT.

![Using Claude services on a US Windows machine](https://i.see.you/2026/07/18/z6Qf/20260718021013526.webp)

In early April this year, I also had one account banned by Anthropic. That ban came from using the Sub2API project, and I haven't used it since. I remember migrating from the Claude Relay Service project to Sub2API: I had just finished configuring it and started using it when, moments later, it said the account didn't exist 😅. If your local environment is fine, I generally don't recommend reverse proxies - a reverse proxy can get you banned, though not always.

![Reverse-proxying a Claude account with the Sub2API project in April 2026: banned the moment it surfaced](https://i.see.you/2026/07/19/b5aY/20260719011238426.webp)

![Venting on Mastodon after the Sub2API-proxied Claude account got banned](https://i.see.you/2026/07/19/J1dz/20260719011309839.webp)

I remember during the stretch right after Claude Fable 5 was unbanned, with Ultra Code mode on, Fable 5 sometimes launched 80+ subagents, and I called a halt on the spot. The great [Simon Willison](https://simonwillison.net/2026/Jul/3/judgement/) also shared a related prompt that has Fable 5 do the planning while handing execution to weaker models to save quota: `For all coding tasks use your judgement to decide an appropriate lower power model and run that in a subagent`. Personally I think capping the number of subagents is usually enough - say, at no more than 5 - since handing tasks to a weaker model sometimes means it can't nail them in one hit.

Some fun things I did with Claude models over the past month:

1. Reviewed nearly all of my personal GitHub projects

Take this very Hugo blog: I ran it through several rounds of checks with Claude Fable 5 and GPT 5.6 Sol Ultra separately. They fixed not only code issues but SEO-related issues too. I barely look at the code anymore - I go by results. As long as what's displayed looks good, I declare the code fine. 😁

![Using SOTA models to review all my personal GitHub projects](https://i.see.you/2026/07/25/4Zgz/20260725004429881.webp)

The barrier to writing code really has come down, but you still need real skill of your own to make it hit exactly where you point; otherwise, strong as the models are, you'll still hit moments where they're weirdly rigid.

For example, I deliberately had Fable 5 review the RSSHub school-announcement code I'd written with AI a few years back. Fable 5 dug up the problem that "page elements from 10 years ago no longer match the current scraping rules" and filed a Pull Request to fix it. Some of the changes got pushback straight from the open-source maintainer, which shows AI is still fairly rigid. In the scenario in the image below, I served purely as the message courier - the whole conversation was between Fable 5 and the open-source maintainer - and the code was eventually merged into the main branch. My advice is not to copy me: study the craft properly and understand the code before opening a Pull Request, or you'll add to the open-source maintainers' burden. This scenario was purely for testing the capability boundaries of the Fable 5 model.

![The Fable 5 model can sometimes be too rigid](https://i.see.you/2026/07/25/8Lor/20260725004922557.webp)

2. Word got out several times that Fable 5 would be removed from the plans, each time postponed; in the end it's kept only in the top-tier membership. In early July I thought Fable 5 would go offline on July 7, so I used the Suno v5.5 model to cover a song, "Missing Fei Bo 5" (Fei Bo, a nickname for Fable), with lyrics written by Fable 5; I feel it falls short of the "Missing Fable 5" AI song on Bilibili. via: https://suno.com/s/2SUuwIM3PvMtfnfy

![Missing Fei Bo 5](https://i.see.you/2026/07/25/bO8a/20260725010007994.webp)

3. Fable 5 built Scooter Rush, an electric-scooter mayhem game. The whole point of making it: to mock how hard electric scooters are to ride in Nanning, where the road conditions are absurdly complicated. Of all the AI models, the first version Fable 5 built was the one most like Road Rash.

Play it here: https://scooter-rush-nanning.pages.dev

My initial prompt:

```txt
hi, claude.

new a folder, then help me build a game.

I want to develop a racing game featuring electric scooters—something like *Road Rash*, but without the violence. The main theme is poking fun at the sheer number of electric scooters in Nanning. Once you pick a character, their scooter is encased in a protective shield; any vehicle or pedestrian that tries to get too close automatically explodes. 😂

There are just so many electric scooters in Nanning; sometimes the traffic conditions leave me speechless.
```

![The Scooter Rush electric-scooter game built by Claude Fable 5](https://i.see.you/2026/07/25/3tuJ/20260725011109937.webp)

Having a model finish a task from a single prompt like this isn't a very objective test of its abilities, but it does give an early glimpse of how well a model understands the real world, and there Fable 5 crushes every other model.

All in all, when Claude Fable 5/Claude Opus 5 isn't being downgraded over sensitive content, it is the strongest.

![The official explanation of sensitive-content downgrading for Claude models](https://i.see.you/2026/07/25/9oKc/20260725014338344.webp)

## GPT

GPT 5.6 was released on July 10. That day I used my UK 48-month discounted ChatGPT Team account to turn on GPT 5.6 Sol Ultra mode (similar to Ultra Code Dynamic Workflows in Claude Code), only to hit the 5-hour limit without finishing a single task, so I spent another 640 yuan on the legendary chirou's site for a GPT Pro 5x account. OpenAI has since temporarily removed the 5-hour limit - a move that deserves a thumbs up; no more deliberately timing the 5-hour windows.

My overall feeling from using the GPT 5.6 Sol series is that it falls short of Fable 5. Sometimes GPT 5.6 Sol Ultra, while checking and fixing project code, just recklessly bolts on features. Take this very Hugo blog: when GPT 5.6 Sol Ultra was going all out, it went through every single article and caught and fixed errors such as the image URLs Claude Opus 4.5 had written wrong back when it did the i18n internationalization (errors Claude Fable 5 never spotted, mind you) - but then it took the liberty of adding a "Related Posts" section under every article. There were other moments of acting on its own too: GPT 5.6 Sol inexplicably added a privacy page to my blog, and I had to guide it through removing it (see the image below). It's not as worry-free as Claude; I personally prefer doing Vibe Coding with a wheelchair-grade SOTA model. 😁

![GPT models like taking liberties and are not as worry-free as Claude](https://i.see.you/2026/07/19/9Dub/20260719020235262.webp)

On attitude toward users, OpenAI is actually the more decent one: Tibo keeps generously resetting quotas, and the discrimination against Chinese users is nowhere near as severe as Anthropic's. But in this era focused on coding and agents, the leader is already Anthropic, not OpenAI. ChatGPT Work came almost half a year later than Claude Cowork, even though the two are essentially Codex and Claude Code with a UI on top for ordinary users.

When Claude Fable 5/Opus 5 is downgraded over sensitive content and Kimi K3 keeps throwing 429 errors, I'd say GPT 5.6 Sol is my favorite model.

1. Had GPT 5.6 Sol Ultra configure Xray for me.

The Xray project thoughtfully provides an AI prompt. I followed it, tossed the task to GPT 5.6 Sol, and let it work fully on its own; when I came back to inspect, every node connected. In that moment I couldn't help marveling at how badass GPT 5.6 Sol is.

![The Xray project provides an AI prompt to make configuration easy](https://i.see.you/2026/07/25/W0id/20260725015757908.webp)

2. GPT 5.5 in Codex downloaded all the degree-conferral ceremony photos for me.

The university provided a live photo-stream site for the degree-conferral ceremony. I wanted to download all the photos as keepsakes, so I gave the task to both Doubao's task mode (Seed 2.1 Pro; Doubao is ByteDance's AI assistant) and GPT 5.5 in Codex.

![GPT 5.5 in Codex downloading all the degree-conferral ceremony photos for me](https://i.see.you/2026/07/25/y1Ad/20260725020243474.webp)

I even scanned the QR code for Doubao, and it still couldn't finish the task. GPT 5.5, by contrast, without me scanning anything at all, went straight to analyzing the page source and the APIs, found where the images were hosted, downloaded them all in one go, and compressed them into an archive. Doubao is quite nice for everyday-life scenarios, but on task execution and coding it's more than a tier behind GPT 5.5.

3. Analyzed the short comments and long reviews on Douban (China's film review community) to judge whether Kung Fu Women's Football (功夫女足) is worth watching.

![GPT 5.6 Sol analyzing Douban comments and reviews of Kung Fu Women's Football](https://i.see.you/2026/07/25/bZf0/20260725021047647.webp)

The final analysis is presented as a ChatGPT Site. URL: https://kungfu-women-football-analysis.jaya.chatgpt.site/

On the web, a ChatGPT Pro membership has an xhigh reasoning-effort option that ChatGPT Business doesn't. Back in April when I bought a cheap Pro, the Pro-over-Business extra was still the Heavy reasoning effort.

![ChatGPT Pro on the web has an extra xhigh reasoning-effort option](https://i.see.you/2026/07/25/6xaI/20260725021739693.webp)

Like Claude Fable 5, GPT 5.6 Sol Ultra took part in the code review of all my projects - as mentioned above, with surprises and disappointments both. It comes back to the same line: when Claude gets sensitive, GPT 5.6 is the best model there is.

The web version of GPT 5.6 Sol Pro is nothing to sneeze at either. Take the question in the image below: it fished the downgrade rules for the Claude Fable 5/Claude Opus 5 models out of huge walls of text on a webpage.

![The web version of GPT 5.6 Sol Pro is nothing to sneeze at either](https://i.see.you/2026/07/25/j2Ni/20260725022616204.webp)

## Raising Lobsters

Around the 618 mid-year shopping festival, I bought two services, ArkClaw and Coze, and hooked them into the Feishu (Lark) platform. Coze is decent, I think; ArkClaw is garbage, painfully slow to respond. With CPA as a relay, you can plug custom models into Coze; append the reasoning effort in parentheses after the model ID and you can customize the model's reasoning effort.

![Plugging custom models into Coze](https://i.see.you/2026/07/25/Z5to/20260725033934736.webp)

Coze's personal premium plan lets you spin up one cloud computer and one cloud phone. The cloud phone can log into a Xiaohongshu account and then run some automation, such as monitoring certain accounts for new posts. Of course, the cloud computer and cloud phone have plenty of problems: they don't really dig deep when researching, opening just a few posts or webpages before hastily wrapping up the task, and the final replies, while looking the part, fall a bit short. Meanwhile, the cloud computer also struggles to extract webpage content - it can only read pages through OCR, or by select-all copying the text through the clipboard.

For now I'm not renewing either plan. I already had a high-spec VPS of my own anyway, so I've gone all in on self-hosted Hermes Agent and OpenClaw, hooked into Telegram.

My main use for raising lobsters (slang for running self-hosted claw agents such as OpenClaw): monitoring posts in certain Reddit communities and periodically compiling digests for me.

![Raising lobsters to monitor posts in certain Reddit communities](https://i.see.you/2026/07/25/f3rE/20260725042308046.webp)

Any problem while deploying the lobsters gets handed wholesale to the GPT models in Codex or the Claude models in Claude Code.

I also found that these lobster programs can pull off magic like "a Claude model paired with SuperGrok's X search."

![Lobster software enabling magic like a Claude model paired with X search in SuperGrok](https://i.see.you/2026/07/25/cb9N/20260725043313928.webp)

Hermes Agent can hook into Claude models via Claude subscription login.

![Hermes Agent can hook into Claude models via Claude subscription login](https://i.see.you/2026/07/25/fWi7/20260725055221401.webp)

Raising lobsters suits monitoring-type tasks; it's not for writing code, and it's merely passable for everyday questions - the more you use it, the better it knows you.

## Kimi

The Kimi K3 model released on July 16, 2026 is a major victory for Chinese open-source models. Back in June when Kimi K2.7 Code went live, I left my take under the official post: without scaling up the parameter count - staying stuck at 1 trillion - it would be very hard to catch up with Fable 5. Little did I expect that a month later, the ideal would become reality.

![My comment under the official post when Kimi K2.7 Code went live](https://i.see.you/2026/07/25/3gxN/20260725045253139.webp)

I bought the 199 yuan/month plan and gave it a try: like the latest GPT and Claude models, Kimi K3 knows how to call the latest Python SDK for the Gemini API without web access.

![Kimi K3 knows the latest Gemini API Python SDK without web access](https://i.see.you/2026/07/25/1Vkp/20260725045836878.webp)

Kimi K3 passed the Gomoku test.

![Kimi K3 passed the Gomoku test](https://i.see.you/2026/07/25/O9ku/20260725050141262.webp)

A little secret between us: Kimi's cloud computer can open Google.

![Kimi's cloud computer can open Google](https://i.see.you/2026/07/25/lPj7/20260725050257717.webp)

Some of you may have subscribed only because of the K3 release; I'd already subscribed a few months earlier. I was busy job hunting back then and needed AI now and then to analyze notices on Chinese webpages, and the Kimi K2.6 Agent solved a lot of those needs. Even then I held huge expectations for Kimi. Among homegrown Chinese AI, of the agent services aimed at individual users, Kimi has the best task completion.

![My history of Kimi membership subscriptions](https://i.see.you/2026/07/25/j5fN/20260725050659308.webp)

The Kimi service has a drawback too: user data is used to improve the model by default, with no option to opt out of training.

![Kimi's drawback: no opt-out from model training](https://i.see.you/2026/07/25/2qRc/20260725055436658.webp)

If you value privacy, the Kimi service may not be for you. But Kimi K3 will be officially open-sourced on July 27, 2026, and then you can pick an API service from a hosting provider that protects user privacy. In this day and age there's no absolute privacy to speak of; even when a vendor offers an opt-out from model training, I doubt it's honored all that faithfully. Where does the Anthropic Economic Index come from? From analyzing user data, of course 😁.

On the personal-project front, I recently needed to auto-grind online course videos. With Claude and GPT both being sensitive about it, I had Kimi K3 with the Kimi WebBridge extension analyze the page structure and write me a Tampermonkey userscript, then had Claude Fable 5 and Kimi discuss it over multiple rounds. In the end Kimi K3 delivered the userscript and published it on Greasy Fork. The course videos have been grinding away for a whole afternoon now - as long as the browser has the right page open, the grind starts automatically.

![Kimi K3 with Kimi WebBridge analyzing the course page structure and writing me a Tampermonkey userscript](https://i.see.you/2026/07/26/k9Ko/20260726011215933.webp)

Sometimes I can't help lamenting that Anthropic and OpenAI are hamstringing themselves - far too closed off, unlocking the relevant security capabilities only for users who have passed a cybersecurity certification.

## Summary

My personal ranking of LLMs for coding and agent use is shown below:

![My personal ranking of LLMs for coding and agent use](https://i.see.you/2026/07/26/xE9z/20260726011058320.webp)

That's about it for this past month of AI tinkering notes. As new insights come along, I'll keep sharing.
