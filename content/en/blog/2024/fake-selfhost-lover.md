---
title: "The Fake Self-Hosting Enthusiast"
date: 2024-04-08T16:18:17+08:00
tags: ["self-hosting"]
slug: "fake-selfhost-lover"
summary: Introducing common reasons why self-hosted projects end up gathering dust.
showtoc: true
---

## Background

"Self-hosting enthusiasts" typically refers to those who like to host and manage their own software and services.

This may include running your own servers, managing your own email, file storage, websites, etc. The benefit is complete control over your data and services without depending on third-party service providers. However, this also requires certain technical knowledge and time investment.

As of April 2024, my main domain (gujiakai.top) has reached 130+ Cloudflare DNS resolution entries, with roughly 50+ self-hosted services.

![gujiakai.top CF DNS resolution count](https://cdn.sa.net/2024/04/08/DOICdJQ6hvxaEpe.webp)

Whenever I feel like I have nothing to do, I always pull out the [awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) list, find some interesting projects to tinker with, and pass the time.

But I've noticed the self-hosted services I frequently use are fewer than 20. Most self-hosted projects, once set up, rarely get touched again.

My roommate, whom I introduced to VPS, has the same situation.

Some examples:

- In the first semester of graduate school, my close roommate and I communicated on my self-hosted RocketChat. By the second semester, our communication was basically on QQ.

- Both my roommate and I set up Nextcloud All-in-One, but we basically don't put our daily files in Nextcloud. Nextcloud usage is quite low.

- Photos I take are usually uploaded to Google Photos, OneDrive, TG private channel, and I don't immediately think of uploading to Nextcloud.

- The Piscur image hosting project I self-hosted last year hasn't had a single image uploaded.

![Piscur image hosting project, gathering dust](https://cdn.sa.net/2024/04/08/zyvAR3h4mIoEsWb.webp)

And so on. Some other projects are the same—once set up, they gather dust.

Sometimes I think, am I a fake self-hosting enthusiast? The other day when chatting with my roommate, I jokingly said we're all fake self-hosting enthusiasts.

After pondering during leisure time, it's time to summarize why some self-hosted projects gather dust.

## 1. No Actual Need

Last semester when I brought my roommate into buying VPS and becoming a server enthusiast, I'd always tell him: "No need? Create the need. More servers the better."

But this is actually a fallacy—a common mistake server enthusiasts make.

I remember in February this year, I bought a v.ps San Jose vpack machine for 250+ RMB. The machine still had 10 months until expiration.

After completing the transaction and getting the machine, I used the history command to see what the previous owner had done. They only ran a one-click v2ray server setup script and nothing else. Maybe they thought this premium machine for proxy use was too luxurious, so they sold it at a discount.

Self-hosted projects are the same logic. Without actual need, with a purely "let's play with it" mentality, aiming only for the sense of achievement after setup—projects built this way will definitely gather dust.

## 2. Projects Not as Good as Some SaaS Services

SaaS stands for Software as a Service. This is a software distribution model where applications are hosted by service providers and delivered to users over the internet. Users typically subscribe to these services without needing to install and maintain software themselves. Advantages include lower initial costs, faster deployment, scalability, and easy upgrades and maintenance.

For example, my main RSS reader Inoreader, bookmark tool Raindrop, etc.—these are hard to replace with self-hosted projects.

Inoreader has built-in like/share features and supports generating RSS for websites without RSS. While I know Fresh RSS's XML+XPath can also generate RSS for websites without RSS, it lacks like, share, comment features, so it can only serve as my reader for following celebrity updates, while Inoreader becomes my main RSS reader for tech news, personal blogs, etc.

![Fresh RSS's XML+XPath can generate RSS for websites without RSS](https://cdn.sa.net/2024/04/08/6M7xSmsKwNfQ8In.webp)

Raindrop's advanced features include webpage snapshots, daily backups, and other worry-free features that make it irreplaceable.

![Raindrop comprehensive features](https://cdn.sa.net/2024/04/08/VcJma5T4oxBilhW.webp)

Although I've deployed open-source projects Linkding and Linkwarden, their features aren't as complete as Raindrop, so they've been neglected by me.

![Linkwarden features not as complete as Raindrop](https://cdn.sa.net/2024/04/08/oK2iFHX13OIbptV.webp)

![Linkding features not as complete as Raindrop](https://cdn.sa.net/2024/04/08/DzaF3JKE29kqA1x.webp)

## Summary

Of course, there are other factors causing self-hosted projects to gather dust. For me, the two major reasons mentioned above are the main causes.

Self-hosting still has great charm. I'll continue self-hosting, but in the future when I have time, I'll gradually destroy projects I don't use.

Being a true self-hosting enthusiast doesn't mean setting up a pile of projects from the awesome-selfhosted list, but actually using self-hosted projects in daily life and improving life efficiency.

The charm of tinkering isn't just the satisfaction at the moment of completion, but that the thing you tinkered benefits yourself.

Self-hosting enthusiasts can set up projects they don't need, but after setup and getting that sense of achievement, why not destroy it? Subtract from projects, keep only the commonly used ones.
