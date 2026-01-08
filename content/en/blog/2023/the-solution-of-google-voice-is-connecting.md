---
title: "Solution for Google Voice Stuck on 'Connecting'"
date: 2023-03-14T09:08:15+08:00
tags: ["google"]
slug: "the-solution-of-google-voice-is-connecting"
summary: Solution for Google Voice stuck on "Connecting" status.
---

Recently, the Google Voice IFTTT number retention method started charging. [via](https://www.zaihua.net/512.html)

![IFTTT keep Google Voice active pro](https://vip2.loli.net/2023/03/14/pajIDBne3y6bkcC.webp)

This morning I saw a V2EX post about [Google Voice mutual keep-alive](https://www.v2ex.com/t/923496).

One user's comment caught my attention:

![V2EX user comment](https://vip2.loli.net/2023/03/14/nBwui7VExPh2dGL.webp)

So I started the number retention process. For making calls, you can refer to this V2EX post: [Some US numbers for GV number retention](https://www.v2ex.com/t/655153).

I chose to call Microsoft customer service for number retention, but found it kept showing "Connecting" status in Chrome browser. I searched online but found no solution.

![Google Voice connecting](https://vip2.loli.net/2023/03/14/E7TULc9Aqrvf8mh.webp)

So I tried calling Microsoft customer service's GV number on my Android phone, and it connected. I went back to PC and tried Edge browser this time - after logging into my Google Voice account and calling Microsoft customer service, it also connected. That's when I realized some Chrome extension must be causing the GV dialing failure. I remembered recently watching Buliang Lin's DNS leak video and installing a Chrome extension called WebRTC Control.

On a hunch, I disabled it and tried calling Microsoft customer service again in Chrome's GV interface - successfully connected.

![WebRTC Control](https://vip2.loli.net/2023/03/14/NuxOakBWCUIs8DY.webp)

As for why disabling WebRTC causes Google Voice calls to fail, see New Bing's response:

> TL;DR
>
> Google Voice uses WebRTC to achieve real-time audio and video communication between endpoints.

![New Bing dial](https://vip2.loli.net/2023/03/14/gW7NhpxZEQ6VdLt.webp)

Afterward, searching online, I found others had encountered this problem:

- [WebRTC Leak Prevent causes Google Voice web version to not work](https://www.52yahuan.com/google-voice.html)
- [disable-webrtc blocks google voice](https://github.com/ChrisAntaki/disable-webrtc-firefox/issues/27)
