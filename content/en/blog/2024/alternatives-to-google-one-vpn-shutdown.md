---
title: "Alternatives to Google One VPN Shutdown"
date: 2024-04-19T18:08:18+08:00
tags: ["google one vpn"]
slug: "alternatives-to-google-one-vpn-shutdown"
summary: Introducing alternatives to the Google One VPN shutdown.
showtoc: true
---

## Update (2025.01.06)

Locked the bootloader today—eSIM not affected. Locking bootloader just cleared app data.

Not sure why, but feel disillusioned with Google One VPN. After all, AI services now require real residential IPs—dual ISP machines are kind of useless now.

![Half a year later, connected to Google One VPN again](https://cdn.sa.net/2025/01/06/vnsx8AyFXGKcUtq.webp)

## Update (2024.07.22)

Today I tinkered with checking VPS traffic routing and IP quality of exit machines. Had the urge to buy residential IP again, but ultimately decided against it—I'm not willing to use WARP IP, dual ISP machines are good enough.

Sometimes I wonder if sharing these channels is appropriate? After all, with more people, even real residential IPs get dirty, let alone dual ISP.

Currently I have three routing machines.

One is Lisa's US West dual ISP, IP quality check results:

![Lisa host IP quality check results](https://cdn.sa.net/2024/07/22/RjkSqrAMX79K35c.webp)

Streaming unlock status:

![Lisa host streaming unlock status](https://cdn.sa.net/2024/07/22/AvBXRnLOoQ5JMcC.webp)

Another is Aiyun's US West dual ISP, IP quality check results:

![Aiyun IP quality check results](https://cdn.sa.net/2024/07/22/19PsB4TWZ8ElRaA.webp)

Streaming unlock status:

![Aiyun streaming unlock status](https://cdn.sa.net/2024/07/22/Hf5UW8eDYy7EcGP.webp)

Also one from ipraft—single ATT US East machine, IP quality check results:

![ipraft IP quality check results](https://cdn.sa.net/2024/07/22/zqJgnyA3l5PDB1I.webp)

Streaming unlock status:

![ipraft streaming unlock status](https://cdn.sa.net/2024/07/22/GE8qlQDM7Kvabrf.webp)

For AI service routing alone, dual ISP is more than enough, though they're pseudo-residential. Other things like Instagram copyright audio unlock—I rarely use that. Reddit I'm always logged in, basically don't need Reddit unlock [unlock lets you view content without logging in].

Better to spend money on what matters. May, June, July—I had both GPT and Claude subscriptions [$40/month total]. Actually I've been wanting to cancel GPT subscription, Claude is my current necessity. Will continue both subscriptions for now—using AI for learning is way cheaper than training institutions.

## Update (2024.07.01)

Recently after updating Pixel 7 phone, VPN is indeed built-in, but I found using a frontend proxy couldn't connect.
Until a few nights ago watching Yongge's livestream, I learned that rooted devices and unlocked bootloader devices may not be able to use Google VPN. Details at [Connect to VPN by Google on your Pixel device](https://support.google.com/pixelphone/answer/2819573).

![Requirements for using Google VPN](https://cdn.sa.net/2024/07/01/8XicSpQrmu2yfaH.webp)

Device loses root whenever system updates. Currently my Pixel 7's bootloader is unlocked. Originally wanted to relock, but after seeing Claude's explanation, decided to give up—after all this phone has too much stuff, don't want to start over at all.

![Claude's explanation about relocking bootloader](https://cdn.sa.net/2024/07/01/Maw3bWhjf4cI5Bp.webp)

## Update (2024.06.24)

Goodbye Google One VPN For Windows.

![Google One VPN For Windows final connection before shutdown](https://cdn.sa.net/2024/06/24/l6E3zOchPSbaxrU.webp)

![Google One VPN For Windows completely shut down](https://cdn.sa.net/2024/06/24/9wF361y7MVgvSlJ.webp)

## Update (2024.06.17)

Today afternoon I organized solutions mentioned in this blog post plus some unmentioned supplements into a Google Sheet. Welcome to check the spreadsheet alongside this blog post. [link](https://docs.google.com/spreadsheets/d/1G3zJ6BPfYlom30NFIH0wgnpj01JCl56SgAFW9zFdspU/edit?usp=sharing)

## Update (2024.06.16)

Watched Yongge's livestream recently. Yongge bought a Google Pixel 8 phone and showed connecting to Google One VPN during the stream.

After Google One VPN shutdown, Pixel 7 and above phones can still enjoy Google One VPN service.

Image shows my Pixel 7 backup phone bought last year successfully connecting to Google One VPN through frontend proxy.

![My Pixel 7 backup phone from last year successfully connected to Google One VPN through frontend proxy](https://cdn.sa.net/2024/06/16/Qph4YqWDaF5xido.webp)

If you still want to use Google One VPN, suggest buying a Pixel 7 or above phone as backup from e-commerce platforms like Pinduoduo [think twice before buying—Pixel series phones are a bit lacking].

This morning saw Japan residential ISP provider sososo's shared rooms were in short supply—got one of their $9.9/month machines. Their machines are true residential, and if you have local IPv6 address, the proxy to mainland China has nice latency. Currently using this machine to route unlock AI services for my Hong Kong machine. Their homepage: [sososo Japan residential](https://sales.sososo.io/)

![](https://cdn.sa.net/2024/06/17/FASRHMi5tzKka6x.webp)

## Update (2024.05.24)

Adding another provider selling US AT&T residential—[wirecat's ResNet VPS](https://billing.wirecat.net/order/main/packages/resnet/?group_id=15)

![](https://cdn.sa.net/2024/05/24/ryUObfsixvgQP9m.webp)

Minimum $50/month, still pricey. Unless shared, individual use rarely maximizes value.

## Update (2024.05.16)

Heard [soladrive](https://www.soladrive.com/support/aff.php?aff=192) and [aait](https://www.aait.io/?aff=QDAQDPFV) are true residential.

Soladrive's residential minimum is $25/month, aait's residential minimum is 299 RMB/month. Without special business needs, individuals can barely afford. If sharing with 5-10 people [focused on streaming, AI unlock], still workable—premise is 10 people don't abuse it, only use true residential for unlocking, or high IP quality environments like PayPal account nurturing.

![soladrive residential machines](https://cdn.sa.net/2024/05/16/Wkqwy1jOgVEQYLh.webp)

![aait residential machines](https://cdn.sa.net/2024/05/16/s9Rlq1fb6W5egNH.webp)

Friends interested in residential can watch this YouTuber's intro video—[TikTok Network Top Choice, AaIT Provides True US Static Residential IP, Real US Physical Broadband, Own a US Remote Computer, Amazon, PayPal, ChatGPT Network All Solved, Customers Also Get 0 Card Fee 0 Processing Fee Credit Card Benefits](https://www.youtube.com/watch?v=kls2v-oW2ac).

My current countermeasures for Google One VPN shutting down mid-year [already implemented]:

- ~~Azure student pack US region machine, Azure dynamic IP shows Business type on ipinfo.io~~

- Lisa host dual ISP machine

- Aiyun dual ISP machine

- ipraft Virginia single ISP ATT machine [isp+business]

- ~~viie's discontinued US residential machine [stability not OK]~~

- ~~zgovps international line machine~~

- ~~littlecreekhosting pseudo-ISP~~

- ~~crunchbits pseudo-ISP~~

These machines will serve as my xray balance configuration's AI service routing exits. Sometimes I wonder if I really need so many unlock exits? Definitely not. For individual use, one unlock machine is enough. Or if your belief is "WARP unlocks everything," that's fine too—currently AI risk control is only strict for Claude from what I've seen online, others have mostly opened up. I'm sharing my solution just as a reference—no need to copy me.

## Update (2024.05.02)

Bulianglin's latest video mentioned methods to find dual ISP providers—[Cross-border E-commerce: Build TikTok Dedicated Nodes for Any Region, Watch TikTok Without Removing SIM, Dual ISP Node Setup, Node Transit Speed-up, Finding Clean IPs, Solving IP-DNS Location Mismatch](https://youtu.be/du1G5dG1qPQ). Can reference the tutorial to find suitable dual ISP providers.

## Update (2024.04.21, 2024.05.08)

![](https://cdn.sa.net/2024/05/08/gqeSCvQWZRcLV64.webp)

Google One VPN shutting down mid-year [ps: shutdown date changes whenever—originally June 10, now June 20]. "Later this year" apparently means mid-year. via: [What's happening to VPN by Google One?](https://support.google.com/googleone/answer/14806901)

## Background

On April 12, 2024 [GMT+8], when I saw the news that Google One VPN would shut down at year end, I had mixed feelings. Will never enjoy such clean IPs again.

![Google One VPN year-end shutdown news](https://cdn.sa.net/2024/04/19/hRgFZYmdXp6BCVy.webp)

Currently my self-hosted nodes have 3 Google One VPN exits for AI service routing.

## Alternatives

> Note: Below are all VPS service recommendations. If you're a proxy service user wanting ISP-type IP nodes, consider high-end service—[TAG](https://tagss04.pro/#/auth/j6c8uF3k), their premium plans include residential nodes + Starlink nodes.

> VPS services below without optimized routing aren't recommended for direct connection—recommend using as landing machines [routing operations].

> If free Cloudflare WARP meets your needs, just add WARP to VPS, then route specific sites' traffic to WARP as outbound. No need to rush into solutions below.

1. Dual ISP VPS

Listing providers I know selling dual ISP VPS:

- [Lisa Host](https://lisahost.com/aff.php?aff=889)

Select dual ISP machines from annual special VPS page. They sell Taiwan, Singapore, US region dual ISP machines.

> Permanent 10% off code: `TS-CBP205DQJE`

Currently I have a "US 4837 Triple-Network Mainland Return Optimized - Dual ISP Residential US Native IP" machine—excellent streaming unlock, and [ipinfo.io](https://ipinfo.io) shows IP type as ISP.

Machine runs smoothly. Rating: ⭐⭐⭐⭐ [Only downside is YouTube might get geo-restricted to China by bad neighbors]

![Lisa Host annual special VPS page](https://cdn.sa.net/2024/04/19/RuVlpAPQak9zvew.webp)

- [Ipraft](https://ipraft.com/?i6679af)

![Ipraft machine order page](https://cdn.sa.net/2024/04/19/3M76KGwBJeN2tSj.webp)

Their advantage is IP recognized as residential broadband by [ping0.cc](https://ping0.cc/). Image 1 is Lisa host's ping0.cc result, image 2 is ipraft's. Both show ISP type on ipinfo.io.

I've used their Virginia dual ISP machine—unlocks fine, but machine smoothness isn't as good as Lisa host. Their dual ISP regions are quite rich.

Rating: ⭐⭐⭐ [Downside might be Virginia machine I tried was laggy, poor performance—just my opinion]

Currently using their Virginia single ISP ATT machine—very smooth. Rating can increase to 4 stars.

![Lisa host ping0.cc result](https://cdn.sa.net/2024/04/19/TWLFOvbmdEDP6Ng.webp)

![Ipraft ping0.cc result](https://cdn.sa.net/2024/04/19/LRsNSPAK2chrujY.webp)

- [wepc.au](https://wepc.au/aff.php?aff=305)

Haven't used, but know their US West machines claim ISP—ipinfo.io shows IP type as ISP. US West 4837 dual ISP minimum annual seems only 100+ RMB.

![wepc.au machine order page](https://cdn.sa.net/2024/04/19/AvkO3KlnjUV74XG.webp)

Rating: ⭐⭐⭐ [Haven't tried, but looks OK, plus VPS community hasn't complained much about them]

- [Risky viie](https://idc.viie.io/)

If you want ISP-type IPs with "use it while it lasts" and bargain-hunting mentality, can try—but be cautious.

Their VPS regions are rich—Hong Kong, Macau, Taiwan, Europe, Singapore, US residential packages.

![Risky viie package page](https://cdn.sa.net/2024/04/19/xArsDpf5V2KZCn7.webp)

Rating: ⭐⭐ [Tickets basically unanswered, lots of black history—search online, nodeseek has many VPS enthusiasts complaining about their service]

Since viie maintenance = delete and recreate machine, rating changed to zero stars.

- [Aiyun](https://iaclouds.com/aff.php?aff=1805)

Aiyun's 2024 New Year special ISP CN2 GIA is also good.

![](https://cdn.sa.net/2024/04/22/Chby58vH3YcgUzR.webp)

Rating: ⭐⭐⭐⭐

- Some niche provider VPS with IP type recognized as ISP by ipinfo.io.

Like my [littlecreekhosting](https://www.littlecreekhosting.com/) machine—located US East, excellent unlock, IP type recognized as ISP by ipinfo.io.

Can buy last year's Black Friday package from their quote post. via: [Can't Wait for BF | Double RAM Starting at $3.50 | KVM | NVME Storage | Linux and Windows](https://lowendtalk.com/discussion/189963/cant-wait-for-bf-double-ram-starting-at-3-50-kvm-nvme-storage-linux-and-windows/p1). Comment order number in quote post to double RAM.

Rating: ⭐⭐⭐⭐ [Have one, experience is OK. Only downside is location—US East is too far, US West routing to US East has at least 30ms latency, plus US West to mainland China at least 150ms—speed is somewhat lacking]

- Other IDCs

Like megalayer, 66cloud, etc.—won't mention. Prices are there, not worth it for individuals.

Rating: ⭐

2. VPS with hosting IP type but excellent unlock

- [zgovps](https://clients.zgovps.com)

Actually all the ISP types identified by ipinfo.io listed above are pseudo-residential. True residential costs more than regular users can afford monthly.

As time passes, it's easy to notice OpenAI and other AI services no longer ban datacenter IPs like before. So no need to pursue ISP-type IPs.

Recommended zgovps LA international line machines—excellent streaming unlock, suitable as landing. Minimum annual $12.9—reasonable price. I also have a zgo international line machine specifically for landing.

![zgovps machine order page](https://cdn.sa.net/2024/04/19/8WQ9w6YLPqltvok.webp)

Rating: ⭐⭐⭐⭐ [Would be perfect if IP type were ISP]

## Impact

Impact on me: Windows machines in Google One VPN supported regions became less cost-effective. Without Google One VPN to play with, Windows machines lost a tinkering project.

## Summary

![Killed by Google website](https://cdn.sa.net/2024/04/19/ZROjWtqkLpH6GE5.webp)

via: [Killed by Google](https://killedbygoogle.com/)

Big companies are like this—once a project can't generate sustained economic benefits, it may get Killed.

![Wikipedia description of Google One VPN](https://cdn.sa.net/2024/04/19/O3xgnEAGfhjJ2st.webp)

via: [Wikipedia Google One](https://en.wikipedia.org/wiki/Google_One)

![The Verge's commentary on Google One VPN shutdown](https://cdn.sa.net/2024/04/19/v7tcaKGWC9z3Hnq.webp)

via: [The Google One VPN service is heading to the Google graveyard](https://www.theverge.com/2024/4/12/24128177/google-one-vpn-service-shutdown-announcement-graveyard)

In this AIGC era, Google added AI Premium plan to Google One, while Google One VPN is being terminated due to supposedly low usage.

In Google One VPN's four years of existence, I enjoyed about 1 year of service (2023.5~2024.6). Finally, a thank you to Google One VPN—thanks for helping me smoothly access various AI services.
