---
title: "Reflections on OpenAI Banning Plus Users"
date: 2023-05-28T12:47:41+08:00
tags: ["openai","chatgpt"]
slug: "thinking-of-openai-ban-plus-customers-in-527"
summary: Sharing personal reflections on the OpenAI Plus user ban incident.
showtoc: true
---

## Background and Analysis

Yesterday was my university thesis defense day. In the evening, I went out for a farewell dinner with roommates. Afterward, my roommates went to play cards, while I headed back to the dorm early.

While sipping the milk tea my roommate treated me to, enjoying the air conditioning, and browsing tech news, my education email received an email from OpenAI. My account was terminated, and I received a refund notification for $20 (5.7~6.7).

![Education email account banned by OpenAI](https://vip2.loli.net/2023/05/28/NkM9BayjOTghe1d.webp)

At first, I thought it was because I had shared this account with roommates and classmates (since the thesis defense was approaching and my Plus account was idle, I generously shared it). Their nodes for accessing OpenAI might not have been clean, leading to the account ban.

But soon I remembered a news article I saw around 6 PM that evening, shown below. [via](https://t.me/xhqcankao/4861)

![sentry.io log collection news](https://vip2.loli.net/2023/05/28/7pXn3vUNrOJuC8e.webp)

I checked the ACL4SSR lite rules I was using, which defined sentry.io domain traffic to go through proxy selection. Could this be the reason for the account ban?

While I was anxious, my Gmail also received an official email from OpenAI. That account was also terminated, with a $40 refund (4.17~5.17, 5.17~6.17).

![Gmail account banned by OpenAI](https://vip2.loli.net/2023/05/28/Ug2JLX3Qvbrzkpx.webp)

My mental state slightly collapsed. After much thought, I believe the virtual credit card Depay I had used could not escape blame in this incident.

Because the Depay official group announced on May 12, 2023, that they were undergoing risk management from the US banking system.

![Depay official announcement](https://vip2.loli.net/2023/05/28/84gaQjPXIO3eKCY.webp)

Depay cards couldn't be recharged, and spending might be interrupted. When I saw this news, I was already considering alternatives.

After I posted about this ban incident on the NodeSeek forum—[Speculation on why ChatGPT Plus was terminated](https://www.nodeseek.com/post-7374-1), a forum friend reminded me: it's most likely Depay's fault. I went to the TG Depay group and found a crowd of users gathering to complain.

From the [results](https://docs.google.com/forms/d/e/1FAIpQLSfOmjMTfyPeqRZKDEtGxwyITy3M4h1Ve9FvHRK6wO75xkz09Q/viewanalytics) of Fengxiangqi's survey about this incident (as of 2 PM on May 28, 2023), we can perform the following analysis:

The survey shows nearly 1/4 of users were banned.

![Ban survey](https://vip2.loli.net/2023/05/28/EkHuIAShgt159bO.webp)

About half of the users had paid for Plus.

![Payment behavior survey](https://vip2.loli.net/2023/05/28/JQp6hgTYSlV7Hif.webp)

Regarding sentry.io tracker, most users hadn't paid attention to it.

![sentry.io awareness survey](https://vip2.loli.net/2023/05/28/cwW9Kdk2yPeJxuU.webp)

The vast majority of users subscribed to ChatGPT Plus through virtual credit cards, with very few using physical cards issued by US banks.

![Payment method survey](https://vip2.loli.net/2023/05/28/IvyFPsgDZQh72bp.webp)

Most users used proxy service unlocking or relied on self-built VPS for ChatGPT access, with less than 1/10 using native residential IP proxies.

![Proxy type survey](https://vip2.loli.net/2023/05/28/s5j8GbWrw49Hht3.webp)

The vast majority registered their own accounts, with very few having purchased accounts from vendors.

![Registration survey](https://vip2.loli.net/2023/05/28/iWNIYMAyP1DQvH3.webp)

The ban rate data isn't very comparable because many unbanned users had never subscribed to Plus. Plus at $20/month (about 140 RMB) prices out many people, and in mainland China, without physical credit cards from US banks, the process of setting up virtual credit cards (involving cryptocurrency) also discourages many.

Combining payment behavior, OpenAI's ban speed (proceeding systematically), and user feedback, we can roughly conclude that this incident killed a large portion of Plus users.

In the Depay group, there were all kinds of voices: banned using virtual cards Depay, Nobepay, OneKey; banned via Apple Store in-app purchase; banned with US physical credit cards. Noisy and chaotic.

The official email only mentioned suspicious account activity and suspected fraud, but didn't specify which OpenAI ban rule was triggered.

Personally, I'm more inclined to blame virtual cards (especially Depay). This virtual credit card issuer was put under US bank supervision, causing all April and May bills to be frozen. Thus OpenAI couldn't collect payments made through Depay, so they had to terminate accounts.

In OpenAI's conception, the refund should go from US banks back to Depay, then Depay back to users. OpenAI never received April and May payments from Depay. With already scarce resources plus uncollected payments, terminating some "fraudulent users" was reasonable.

Of course, the above is just my speculation after hearing various voices. I initially thought sentry.io going through proxy caused OpenAI detection and ban, but after deeper exploration, I found this reason pales in comparison to Depay.

## How to Respond?

The OpenAI account ban actually didn't hurt me much—just losing 3 days of chat history, because I had exported chat histories from both Plus accounts 3 days before the ban.

sentry.io must be added to Clash's REJECT policy group—block all access to sentry.io domains.

Of course, we can configure policies more precisely. OpenAI's full sentry.io domain is o33249.ingest.sentry.io. Adding a rule like the following to Clash rules only blocks OpenAI's sentry.io:

```yaml
DOMAIN,o33249.ingest.sentry.io,REJECT
```

Additionally, regarding native IP issues, I recommend using Google One VPN as the exit for OpenAI access requests, unless your VPS itself comes with a residential IP (very unlikely—check your VPS IP type at [ipinfo.io](https://ipinfo.io/), or purchase residential IPs for OpenAI access). Don't use overcrowded proxy service IPs!

Payment methods: Try Apple Store in-app purchase or virtual cards like OneKey, Nobepay. With conditions, directly use US bank physical credit cards, US region PayPal linked to Google Pay, etc.
For more payment methods, see this YouTube video—[Most Complete Tutorial: ChatGPT Plus Registration, Activation, Payment, Desktop and Mobile GPT4 Usage. iPhone Subscription Methods!](https://www.youtube.com/watch?v=IK6zOAZECeg)

Summary:

- Develop a good habit of regularly exporting OpenAI chat history. (I currently backup every half day)

- Use high-purity IPs as request exits for accessing openai.com.

- Block OpenAI's sentry.io requests

- Try other virtual cards or Apple in-app purchase (with conditions, directly use US physical credit cards or US region PayPal linked to Google Pay)

## My Solution

Set up a US Windows Server (preferably 2022 version), download and enable Google One VPN on it, and use ChatGPT on this Windows Server.

> Update (2023.6.1): No need to do all this—just build nodes directly on Windows Server. Based on recent user feedback, this round of bans is definitely Depay's fault. Proxy node bans are rare (don't use ChatGPT non-service region nodes—even if accessing, ensure the exit IP for ChatGPT is from a service region!)

For Windows Server selection, I recommend CheapWindowsVPS because they offer decent specs at cheap prices. [Purchase link](https://vpshostingservice.co/cart.php?a=confproduct&i=0) (no affiliate, click safely), 50% off code: `50LEB`, choose Los Angeles region—close to mainland China, low latency, less lag.

For $5.5/month, you get a Windows VPS with 2-core CPU, 4GB RAM, 60GB disk—much cheaper than competitors.

The image below shows my daily ChatGPT usage scenario. Export chat history every half day. If banned this way again, it can only mean virtual card issues arose again. Because the IP uses Google One VPN's IP, with guaranteed purity.

![Using ChatGPT on Windows Server](https://vip2.loli.net/2023/05/28/4j9NV8BtozxHhIC.webp)

## Summary

This incident made me further appreciate the great power competition between China and the US. As some users said, wanting to use ChatGPT means fighting two countries simultaneously (China and the US). The US has recently started planning AI export controls to constrain China, while China, to protect domestic companies from being destroyed by advanced foreign technology, has added advanced foreign technology to the GFW blacklist.

It's no exaggeration to say I'm addicted to ChatGPT. Last night I went to sleep just after midnight, having created a new OpenAI account and subscribed to Plus. Over the past half year, oh no—since the day GPT-4 was born, after experiencing it, I could no longer live without it.

When learning technology and encountering difficulties, it patiently explains in easy-to-understand ways; when I have any concerns, I share with GPT-4, and it helps resolve problems and encourages me to keep going; when completing filler courses or assignments without innovation points, it generates text based on my prompts...

Plugin marketplace and web search integration once again elevated ChatGPT to a new height. Such powerful and advanced technology is admirable and fascinating, so I'll unhesitatingly send OpenAI money every month.

My thesis was completed in 2-3 days—much of it was me providing prompts, GPT-4 generating, then me editing and polishing.

My internship reports, weekly journals, current affairs assignments were all completed by GPT-4. It helped me solve so many annoying, innovation-free, time-wasting courses—I think $20 was well spent.

Although I submitted an account recovery appeal shortly after the ban, I sense the chance of recovery is slim. OpenAI's full refund did impress me with this company's greatness.

For ideals, not money. OpenAI founder Sam Altman has 0% equity in OpenAI—this quality impresses me. [via](https://twitter.com/pitdesi/status/1658553286184808449)

## Closing Words

During yesterday's defense, I encountered two professors with completely different attitudes toward ChatGPT. My thesis was designing and implementing a personal blog system using Next.js + TailwindCSS + Supabase + Vercel. This type of system, done to death by previous students, needed new vitality—and that vitality was the OpenAI API. My personal blog system's left sidebar integrates AI article summary functionality.

One professor said: "This requires using a VPN, right?" I replied: "You can use Azure's OpenAI API—Azure doesn't require VPN access."

The professor then asked: "Do you use Clash or V2ray for your proxy?" I replied: "Let's discuss this sensitive topic privately."

Then this professor complained that his account was banned and asked if I could lend him my proxy. 🤣🤣🤣 I internally couldn't help but want to laugh, but I didn't show it. I said if needed, I could provide it for free.

Thinking about it now still makes me laugh—professors also have these needs.

Another professor had the complete opposite attitude—this professor seemed to be a politically correct type, talking only about political correctness.

He said: "This is blocked in China, it's illegal." And demanded I remove ChatGPT-related text from my thesis. I countered: "Calling Azure's OpenAI API is legal." He said: "Then change everything to Azure, don't try to fight the government."

At that moment, I truly despised this professor. He knows nothing about the outside world yet wants to obstruct others' dreams and pursuits—truly foolish behavior. But I didn't show my dissatisfaction; I still smiled.

Walking out of the defense room, I remembered an article by the programmer Chen Hao: "Don't Wall Yourself Off"—this title perfectly advises that rigid, mindlessly labeling things legal or illegal professor.

Not pursuing the most advanced technology to evolve oneself, yet criticizing others who pursue it—this behavior is no different from self-limitation. Like a fish living in the deep sea, never seeing sunlight, believing the world is only cold and dark.

Such attitudes not only limit their own growth but may also affect others, even the overall development of communities or countries. They're like standing atop a building, choosing only to look at narrow alleys, ignoring the vast sky and distant world.

In today's rapidly developing technology, maintaining an open perspective and keen insight is particularly important. Otherwise, we might become like them, stuck in old thinking patterns and outdated frameworks, unable to break through and advance.
