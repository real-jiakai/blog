---
title: "Unlocking ChatGPT for VPS in Non-OpenAI Service Regions"
date: 2023-06-01T11:15:46+08:00
tags: ['vps','chatgpt','openai']
slug: "unlock-chatgpt-when-vps-been-judged-cn-by-cloudflare"
summary: Sharing how to use secondary proxy to unlock ChatGPT for VPS in non-OpenAI service regions.
showtoc: false
---

A while ago, I was busy with my graduation project and reading daily tech news, so blog updates were less frequent. I've been wanting to write this article for a while. I own VPS with CMI and CN2 routes in Hong Kong.

However, since Hong Kong is not in OpenAI's service region, Hong Kong IPs cannot access OpenAI services.

To make nodes built on Hong Kong VPS unlock ChatGPT, you can't use WARP wrapping, because Cloudflare will route Hong Kong VPS traffic to nearby Cloudflare nodes (also Hong Kong IPs), which will still be blocked.

Of course, if a VPS in a service region is identified by Cloudflare as being in a non-OpenAI service region, the same situation occurs.

For example, my Digital Virt US West 9929 VPS purchased during May Day was identified as CN by Cloudflare for a while, preventing ChatGPT unlock. As of writing (2023.6.1), their VPS IP is now correctly identified as US by Cloudflare, naturally having the ability to unlock ChatGPT.

For VPS identified as CN by Cloudflare, even with WARP wrapping, Cloudflare will route VPS traffic to CF nodes in the identified region (CN), and mainland China is not in OpenAI's service area - thus still unable to unlock ChatGPT.

Overall, VPS in service regions blocked by OpenAI can use WARP wrapping to unlock ChatGPT (though CF nodes after WARP wrapping might also not unlock ChatGPT - this situation exists). The only way for VPS in non-service regions is to use secondary proxy to unlock ChatGPT.

Currently, I prefer using secondary proxy for both situations to solve the issue of VPS in service regions being blocked by OpenAI and VPS in non-service regions not unlocking ChatGPT.

For secondary proxy methods, refer to Buliang Lin's tutorials - [Comprehensive Transit Speed-up Tutorial](https://www.youtube.com/watch?v=AEqP8x_tILw) and [Complete Netflix Unlock Methods](https://www.youtube.com/watch?v=Vj4TGd9IaQc)

Just follow the latter video for secondary proxy setup. Of course, you can also try other solutions mentioned by Buliang Lin.
