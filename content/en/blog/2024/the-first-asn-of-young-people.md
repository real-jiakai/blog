---
title: "A Young Person's First ASN"
date: 2024-06-04T15:36:56+08:00
tags: ["asn"]
slug: "the-first-asn-of-young-people"
summary: Introducing my experience of obtaining an ASN and configuring its corresponding IPv6 address.
showtoc: true
---

## Update (2024.12.24)

Received an ASN-related email on Christmas Eve. Had GPT write a reply, chose to give up the ASN resource. Goodbye AS214948.

![GPT-4o explanation of ASN email](https://cdn.sa.net/2024/12/24/lGXEAzIcpetrkPn.webp)

![Reply to ASN email](https://cdn.sa.net/2024/12/24/eO6j3UXwPqvLmRA.webp)

![Goodbye AS214948](https://cdn.sa.net/2024/12/24/Zuk2owUXnO56NYx.webp)

## Update (2024.06.11)

![c1vhosting price increase notice for ASN](https://cdn.sa.net/2024/06/11/xrbHIZYtmNzUEuC.webp)

Haha, c1vhosting still sent an ASN and IPv6 address segment price increase notice. Can expect that bloggers writing "A Young Person's First ASN" will face increasingly higher costs in the future. 😂

---

This afternoon I originally wanted to polish my review paper, but GPT crashed, so I started writing this blog post I'd been brewing for a while.

## Background

In March this year, I saw Italian provider c1vhosting launch an ASN & IPv6 /48 Subnet package.

![c1vhosting ASN package](https://cdn.sa.net/2024/06/04/q9LPYkfzFjigAeN.webp)

Originally I didn't want to tinker with ASN, but seeing this cabbage price, I quickly placed an order.

## The Process

At that time I referenced some tutorials on NodeSeek and other internet resources. Such as:

- [ASN Registration Guide - RIPE NCC Edition [Tutorial]](https://www.nodeseek.com/post-16272-1)

Went through the following processes:

- Signing contract

- Personal passport information

![Some documents needed for ASN registration](https://cdn.sa.net/2024/06/04/jZGMlBtc1OFLnm7.webp)

- Creating RIPE data

- ......

At that time I also needed two or more Peering Partners—the provider helped me solve this. [To ensure the ASN-allocated IPv6 address worked properly, I specifically bought one of their VPS, all ASN-related configuration was done on this VPS]

After emailing the relevant information, just patiently wait.

While the provider helped me apply for ASN resources and allocate IPv6 subnet, they also had me verify passport information.

![RIPE ASN allocation personal info verification](https://cdn.sa.net/2024/06/04/yQhpSRw29K7NBWr.webp)

Finally, successfully obtained ASN (AS214948).

![Successfully obtained ASN](https://cdn.sa.net/2024/06/04/HWNvSnKAlG45ytX.webp)

## Using bird2 to Configure BGP Session

Some configuration can be found in my [bird2 ASN configuration notes](https://discuz.gujiakai.top/forum.php?mod=viewthread&tid=29)—may not suit your scenario or have omissions.

Actually I was quite confused during configuration. After BGP showed established, I prepared to configure the IPv6 address allocated to the ASN.

At that time I created a dummy0 virtual interface following online blogs, but using dummy0 virtual interface to get IP `curl --interface dummy0 ip.gs` kept failing.

Conversed with GPT-4o for a long time but just couldn't access internet from dummy0 virtual interface.

Got the ASN on May 8th, kept battling with customer service until June 2nd. Finally I couldn't stand it anymore and directly sent the VPS account/password to c1vhosting customer service. Next day customer service said they fixed the dummy0 virtual interface internet access issue.

Tracking customer service's operation history through history command showed they didn't touch anything—just that to access internet from dummy0 virtual interface, the specified interface isn't the name dummy0, but the IPv6 address assigned to dummy0.

Funnily, customer service said it was their side's problem, everything was normal on my side.

![Email screenshot with c1vhosting customer service](https://cdn.sa.net/2024/06/04/xOWXlIKTPaUGhY8.webp)

Although I also wanted to access internet via --interface dummy0 instead of the assigned IPv6 address, I kept failing. Default route and everything was already added.

![Claude3's explanation](https://cdn.sa.net/2024/06/04/BRldmASF6w2siKk.webp)

Currently to surf using my own ASN, I need to specify the dummy0 virtual interface's IPv6 address.

## Afterword

Overall, spent cabbage price to experience the ASN registration process and how to configure the ASN-allocated IPv6 address on VPS.

I won't show off expertise on other matters. This ASN is destined not to live long—see [What's Next for Personal ORG (ASN) After RIPE Updates Annual Fee Standards?](https://www.nodeseek.com/post-114959-1). My fate: just give it up. 🙃

If you're interested in ASN, you can choose a reliable provider to try it out. Be cautious about my provider c1vhosting—their VPS prices are a bit sketchy. Tried for 3 months, experienced 2-3 outages.
