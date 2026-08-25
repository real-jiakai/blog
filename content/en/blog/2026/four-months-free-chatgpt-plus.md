---
title: "Notes on Getting Four Months of Free ChatGPT Plus"
date: 2026-08-25T00:37:13-07:00
lastmod: 2026-08-25T00:37:13-07:00
tags: ["chatgpt", "openai", "kimi", "grok"]
slug: "four-months-free-chatgpt-plus"
translationKey: "four-months-free-chatgpt-plus"
summary: "How I passed SheerID student verification on the third attempt and got four months of ChatGPT Plus for free, along with everything that went wrong first."
showtoc: true
---

## Backstory

This morning I learned from [PK大神](https://t.me/pk_oa/296)'s Telegram channel that ChatGPT student verification had reopened.

![ChatGPT student verification is open again](https://i.see.you/2026/08/25/eMt2/20260825003755831.webp)

So I set off on another "Done" run ("Done" being LINUX DO forum slang for successfully claiming a freebie).

I submitted images three times in total, and the last attempt actually made it through SheerID.

![Passing SheerID verification](https://i.see.you/2026/08/25/J3hs/20260825004619909.webp)

Still riding the excitement, I'm writing this post to share what worked.

## Lessons Learned

You'll have to source a US .edu email address yourself; I used one I bought back in 2025 to pass this round of verification. You can search the LINUX DO forum for recent write-ups on how people have been getting US .edu addresses.

I started out by using mainstream AI products to look up a model student currently enrolled at the school behind that .edu domain. The AI has to search the web for the key details — first name, last name, date of birth — because SheerID asks for all of them.

Of the mainstream AI products, I liked Kimi K3's answer best: it found all three details for an enrolled student at the matching school.

![Kimi K3 finding the three key details of an enrolled student at the matching US school](https://i.see.you/2026/08/25/pFb0/20260825005319054.webp)

Next I took those three details over to Grok Imagine and generated the matching image.

For the first two failed SheerID attempts, the document type I submitted was `School ID card with expiration date`.

Following the student info Kimi K3 had given me, I grabbed a matching portrait photo; then I pulled a School ID card that an international student at a US .edu school had posted on Xiaohongshu (Little Red Book) to use as a sample; finally I combined the three details, the portrait, and that student-ID demo, and had Grok Imagine generate the card.

Once it was generated, I had Kimi K3 scrub the image's metadata and write in simulated realistic metadata. Along the way Kimi K3 refused my request the way GPT and similar models do; phrase what you want more gently and Kimi K3 will most likely go along with it.

Even though the image Kimi K3 processed looked, on the surface, like it met SheerID's document requirements, it just would not pass.

```text
Your document, or combination of documents, must include:
Your full name as it appears on your school records
The full or abbreviated academic institution name or logo
Proof of current enrollment, shown by one of the following:
A current academic year or current term date
An issue date within the last 90 days
An expiration date that has not passed
```

I had tinkered up to that point in the morning and gave up. After waking from my afternoon nap, I opened the LINUX DO forum and saw someone share a successful run that used a class schedule instead, so I gave it another shot.

This time I fed Grok Imagine the matching model student's information plus a recent class schedule posted by a US .edu student on Xiaohongshu, and had it generate a schedule that met SheerID's requirements.

I had learned my lesson and did not submit it straight away. Instead I uploaded the Kimi K3-scrubbed AI-generated image to ZeroGPT's [AI Image Detector](https://www.zerogpt.com/ai-image-detector), and it immediately flagged the image as 97% likely to be AI-generated.

I then tried adding noise, cropping, re-photographing it with my phone, and more, but the AI score would not come down. Out of ideas, I stitched the header of the Grok Imagine-generated schedule onto the schedule from the Xiaohongshu post and submitted it to ZeroGPT again — this time the AI score was only 10%.

![The stitched image scoring only 10% AI](https://i.see.you/2026/08/25/2koP/20260825010746835.webp)

Before submitting, I had Kimi K3 scrub the metadata on the stitched image once more. Then I submitted the stitched, metadata-scrubbed image for SheerID verification.

![Kimi K3 scrubbing the metadata of the stitched image](https://i.see.you/2026/08/25/vS7o/20260825010840644.webp)

A few minutes later, a pleasant surprise: verification passed.

As for payment, I linked the US PayPal account I had registered earlier.

![Linking a US PayPal account as the payment method](https://i.see.you/2026/08/25/j6tQ/20260825011025440.webp)

Finally I set myself a to-do reminder to cancel the subscription on December 24, 2026. And with that, this "Done" run was complete.

My first look at ChatGPT Plus was disappointing. GPT on the web has none of the xhigh or pro reasoning-effort options that Business and Pro subscribers get.

![ChatGPT Plus on the web lacks the xhigh and pro reasoning-effort options that Business and Pro subscribers get](https://i.see.you/2026/08/25/a0uM/20260825011334373.webp)

Doubao has a [freebie](https://mp.weixin.qq.com/s/SsXHiqKB8RV6bBWzRluGzw) of its own today, a 30-day Standard plan. Don't forget to claim it.

![The Doubao 30-day Standard plan claim page](https://i.see.you/2026/08/25/P1gs/20260825012159041.webp)

Freebie hunting makes me happy!
