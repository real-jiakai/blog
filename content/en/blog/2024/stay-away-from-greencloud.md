---
title: "Stay Away from GreenCloud, Soul Ascending"
date: 2024-10-22T18:11:18+08:00
tags: ["vps"]
slug: "stay-away-from-greencloud"
summary: Recording an experience of VPS data loss.
showtoc: true
---

## Update

GreenCloud was actually hacked, not the so-called disk drive failure. After persistent pestering, got $100 refund from PayPal!

![GreenCloud paid me $100 via PayPal](https://cdn.sa.net/2024/10/23/uOhpofca7ZJt9FK.webp)

via: https://lowendtalk.com/discussion/198766/my-greencloud-vps-got-ransomwared-the-entire-mothership/p1

## Background Story

Yesterday received an email—GreenCloud San Jose failure. Last year I bought a GreenCloud 10th anniversary machine, location chosen was San Jose, California.

![GreenCloud SJC failure](https://cdn.sa.net/2024/10/22/VLcqSyxIfmARvEQ.webp)

Last night browsing hosting forums, I saw posts about GreenCloud failure—couldn't describe how I felt. After all, yesterday afternoon while learning RAG (Retrieval-Augmented Generation) related knowledge, I was still deploying and playing with MaxKB from FineVault (the company that developed 1Panel) on GreenCloud San Jose.

At the time, seeing GreenCloud's CPU and memory were quite idle, I deployed MaxKB on it.

![Yesterday afternoon deployed and played with MaxKB on GreenCloud](https://cdn.sa.net/2024/10/22/fKjOTZ5codn89uE.webp)

When MaxKB was vectorizing documents, it directly maxed out GreenCloud's CPU and even went offline once. After finishing tinkering with MaxKB, my SJC machine's memory reached 80-90%. I remember this machine's specs were 10-core CPU, 10GB RAM, 100GB disk, $100 for 3 years. Shows MaxKB has high server requirements.

![GreenCloud went offline once while tinkering with MaxKB](https://cdn.sa.net/2024/10/22/r84XgzoHK3YJMcW.webp)

Today I was restless all day, fearing GreenCloud would notify data loss. From morning to evening, basically every so often I'd bother GreenCloud customer service, asking about failure resolution progress.

![Battling with GreenCloud customer service](https://cdn.sa.net/2024/10/22/doBDQTXnvpZxft3.webp)

After dinner, browsing hosting forum posts, indeed what I worried about happened.

![What I worried about happened](https://cdn.sa.net/2024/10/22/x8CgVK7scDYPRME.webp)

This afternoon I organized sites on the GreenCloud San Jose machine—18 total. Actually more or less all in dust-gathering state.

![Sites on GreenCloud San Jose machine](https://cdn.sa.net/2024/10/22/uXvf7z6kOyaISp9.webp)

What I regret most is the Flarum forum. It was my dump ground for daily hosting posts/tutorials I couldn't digest in the first half of the year. Also had some of my own study records.

Wallos is also regrettable—after all, it was my configured self-hosted expense tracking software.

Uptime Kuma was used less. The rest, except LobeChat calling Gemini API, were mostly gathering dust.

![Flarum forum in Internet Archive](https://cdn.sa.net/2024/10/22/wxu2MfO7jVyiIc1.webp)

![Flarum forum remnants in Google Search](https://cdn.sa.net/2024/10/22/W1D2E4tBR8IeKij.webp)

To the departed Flarum forum. Fortunately during summer break, I suddenly got enlightened and started throwing daily hosting posts/tutorials I couldn't digest into a TG private channel—otherwise this GreenCloud data loss would have been much more devastating.

![Fortunately after summer break, threw all links into private TG channel, otherwise losses would be worse](https://cdn.sa.net/2024/10/22/8x4EKzeTbv3wPDY.webp)

In the next few days, I'll spend about 2 hours daily rebuilding apps like Wallos on Bero Host.

Bero Host is still stable. My roommate's €8.9/month big VPS that he's not renewing is now mine. Now most of my services are on Bero Host. During Chinese New Year, I'll do another backup of all Bero Host services.

![€8.9/month big VPS is now mine](https://cdn.sa.net/2024/10/22/otzc31bCa4IpKOy.webp)

GreenCloud, this host without backup, I really recommend everyone stay away. Data loss history is its permanent stain. The reason this vendor can still survive in the hosting circle is because it's cheap with seemingly high value—catering to VPS enthusiasts' love of bargains.

## Lessons/Insights

- Don't be lazy, backup VPS regularly.

Especially when storing data on machines from vendors like GreenCloud without backup—particularly need to value data backup.

- Don't like backing up? Choose big providers to reduce data loss probability.

- Stay away from GreenCloud, soul ascending.

Finishing this blog post, heading back to dorm to wash and sleep early. Only sleep can dissolve my frustration :(.
