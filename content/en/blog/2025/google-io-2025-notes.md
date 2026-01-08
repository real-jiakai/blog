---
title: "Google I/O 2025 Notes"
date: 2025-05-21T08:01:38+08:00
tags: ["google", "gemini"]
slug: "google-io-2025-notes"
summary: Recording Google I/O 2025 announcements.
showtoc: true
---

## Update (2025.5.21)

Future updates for this post moved to Flarum post—[Google I/O 2025 Blog Update Summary](https://bbs.gujiakai.top/d/12-google-io-2025).



---

Woke up this morning to see Google released a ton of new stuff. Can't help but marvel at Google's power—the future definitely belongs to Gemini (It's Gemini Season[^1]). Though recently my ChatGPT usage for daily questions far exceeds other AIs.

Google I/O 25 Keynote YouTube video opening animation was all Veo-generated. via: https://youtu.be/o8NiE3XMPrM

![It's Gemini Season!](https://cdn.sa.net/2025/05/21/qyMZeA6hP2OVplD.webp)

Many AI enthusiasts' X posts expressed that Google's updates are overwhelming—hard to keep up. So much information—without organizing now, will miss major updates.

![Google's updates are overwhelming—hard to keep up](https://cdn.sa.net/2025/05/21/9tDsqLUnmac3B27.webp)

via: https://x.com/testingcatalog/status/1924899785355510239

This article aims to be a first-hand Google announcement relay while adding my own thoughts as much as possible.

First, some good Google I/O 2025 summary links:

NotebookLM's Google I/O 2025 summary: https://notebooklm.google.com/notebook/953b658a-579b-4b3c-b280-43b3781babf3

Tibor Blaho's Google I/O 2025 summary tweet: https://x.com/btibor91/status/1924938391478468754

Chubby's Google I/O 2025 summary tweet: https://x.com/kimmonismus/status/1924895087332405554

X's hot comments about 2025 Google I/O: https://x.com/i/events/1922336973353598976

## Gemini App

This section mostly from the full official update blog post[^2] and official [Gemini App Updates page](https://gemini.google.com/updates).

> This section introduces Ultra-exclusive features or models not released immediately but coming to Ultra subscribers soon, so Ultra subscription currently has very low value.

1. Emphasis: English experience > Chinese experience

First must emphasize: Gemini App Chinese experience isn't as good as ChatGPT or domestic Doubao.

English questions get well-reasoned replies with reference citations.

![English questions to Gemini get well-reasoned replies with reference citations.](https://cdn.sa.net/2025/05/21/BFNnIfWCHELQxcp.webp)

Chinese questions get replies without reference citations, sometimes feeling inadequate. Recently saw many L Site posts about Gemini dumbing down—this is actually a misunderstanding. Google with its deep pockets wants to steal all ChatGPT users, won't do sneaky dumbing down. So-called "dumbing down" is actually due to insufficient Gemini App Chinese user support.

![Chinese questions to Gemini get replies without reference citations, sometimes feeling inadequate.](https://cdn.sa.net/2025/05/21/K4BvC89eAth51aJ.webp)

For better Gemini App experience, when Chinese replies aren't satisfying, recommend rephrasing in English. For those not good at English, can pair with "Immersive Translate" browser extension—triple-space to convert native input to English; set shortcut to translate model replies back to native language.

2. New pricing plans

Gemini Advanced/Google One AI Premium renamed to Google AI Pro.

![Gemini App new pricing plans](https://cdn.sa.net/2025/05/21/kvSIeoLyWY8jwAc.webp)

Besides some rate/context length differences, Pro users have over free users: Flow [an AI video creation tool, mentioned later], Gemini in Chrome [similar to Copilot in Edge, mentioned later].

Ultra users have over Pro users: Gemini 2.5 Pro Deep Think model, Veo3 model, Project Mariner [browser Agent], YouTube Premium individual plan, larger storage.

Ultra plan: $125/month for first three months, then $250/month. Initially tempting, but after calming down, no impulse purchase. After all, reasoning models thinking more—often just good benchmark scores. Daily use, classic LLMs are enough. Better reasoning model use cases: logic, math, code.

Heard about Project Mariner last year end. Hearing the name again today feels unfamiliar—browser Agent prototype still feels like a toy.

![ChatGPT o3's introduction to Project Mariner](https://cdn.sa.net/2025/05/21/Jkp2HyZ7DXW8zPK.webp)

As for YouTube membership, few would get US region YouTube membership—usually low-price regions, joining Latin American family groups.

30TB storage is useless for regular people. All my files and photos on Google, accumulated 2-3 years, haven't exceeded 200GB.

Ultra subscription suits wealthy folks or extreme Gemini AI enthusiasts/Google die-hard fans. For students like me, just watch—freeloading up to Pro plan is enough.

via:

https://blog.google/products/google-one/google-ai-ultra/

3. Agent Mode

This feature looks nice, Ultra-only. See Google CEO Sundar Pichai's tweet: https://x.com/sundarpichai/status/1924909900033122466

![ChatGPT o3's introduction to Google Ultra's Agent Mode](https://cdn.sa.net/2025/05/21/NkJUrYITcH91MVu.webp)

4. Gemini 2.5 Pro Deep Think, Gemini 2.5 Flash

Gemini 2.5 Pro Deep Think Ultra-only, benchmark data looks great. 2.5 Pro DeepThink API only open to a small group of trusted testers.

![Gemini 2.5 Pro Deep Think benchmarks](https://cdn.sa.net/2025/05/21/7AtnhOfY5S3M8aj.webp)

Gemini 2.5 Flash cost-effectiveness improved further.

![Gemini 2.5 Flash cost-effectiveness improved further](https://cdn.sa.net/2025/05/21/QkhTvstlG1Cgn8m.webp)

5. Thought Summaries

![Thought Summaries in Gemini App, AI Studio, Vertex AI](https://cdn.sa.net/2025/05/21/DijHGKSdTsx52rN.webp)

Thought summaries aim to further improve model output interpretability.

![ChatGPT o3's explanation of Gemini Thought Summaries](https://cdn.sa.net/2025/05/21/2vzRSwek5fDEB19.webp)

6. Veo3, Imagen4

Veo3's feature is text-to-video with sound—interesting, should be world's first text-to-video with sound model. Only US Ultra subscribers can experience.

Imagen4 open to all Gemini users. Below shows a raccoon holding a sign generated with Imagen4. For text-to-image, GPT-4o native text-to-image and recent Doubao's Seedream 3.0 seem impressive.

![Raccoon holding sign generated by Imagen4](https://cdn.sa.net/2025/05/21/QEij3m1CfVgKRzS.webp)

Grok leads by far in low censorship—this is unique. Few days ago had Doubao generate borderline images—Doubao directly refused for sensitive Chinese prompts. Had Grok translate prompt to Russian [ChatGPT refused translation request for borderline prompts], broke Doubao's guardrails. Sometimes can't help but feel Grok shouldn't be ignored—low censorship is its biggest selling point. Probably Grok 3.5 coming soon—hope it surprises everyone!

![Grok leads by far in low censorship](https://cdn.sa.net/2025/05/21/FfRMKWBlcVaPdHA.webp)

![ChatGPT o3's explanation of Veo3, Imagen4 user types](https://cdn.sa.net/2025/05/21/MPXntjYD786VzBg.webp)

https://x.com/GeminiApp/status/1924893675529900467

https://x.com/GeminiApp/status/1924973242768642433

7. Deep Research creating apps/Canvas updates

After Gemini Deep Research, can create apps. Besides preset operations: Web page, Infographic, Quiz, Audio Overview (podcast), can also create custom apps. Don't recommend custom app creation—custom apps have bugs.

Facing walls of text makes people impatient. This feature directly solves Deep Research products' visualization insufficiency.

![After Deep Research, can create apps.](https://cdn.sa.net/2025/05/21/aUF2qrjNZEnQdy1.webp)

![Quiz app created after Deep Research](https://cdn.sa.net/2025/05/21/7eIQjToYbkNyXDB.webp)

via: https://x.com/GeminiApp/status/1924892563695456675

8. Image and file-based Deep Research

Image-based Deep Research use case I thought of: ~~JAV code Deep Research~~ [Actually too much—Gemini App high censorship, any slightly explicit image gets removed. But if asking to find actors in image (premise: image NSFW content is low), can Deep Research]. Removed related explicit images; guessing locations from photos.

Below shows Gemini guessing location from the same image I gave ChatGPT o3—results lacking. ChatGPT o3 is better at guessing locations from images. Actually had Doubao guess from this image before—Doubao's deep thinking felt jumpy but got the location right first try. For guessing domestic photo locations, domestic AIs are better—giants have tons of Chinese data.

ByteDance's Doubao is already Top 1 domestic AI in my mind. Doubao doesn't offer one-click conversation deletion option—destined that all user data will build Doubao's throne. Almost all AI providers are the same—surface level not violating privacy, not using user data for training, secretly decoupling data from accounts and quietly improving products. Such operations are too common.

![Using Gemini Deep Research to guess location from photo](https://cdn.sa.net/2025/05/21/CD9exYOiAnBaZsP.webp)

Below shows using Gemini Deep Research to study DeepSeek's latest paper—file-based Deep Research should have many practical use cases.

![Using Gemini Deep Research to study DeepSeek's latest paper](https://cdn.sa.net/2025/05/21/9Qf3bacdOPNeGHX.webp)

via: https://x.com/GeminiApp/status/1924892309583458706

9. Other

- Gemini Live free on Android and iOS.

Many are already Google AI Pro users. Friends who haven't claimed the deal—can consider getting a US edu email [no longer limited to US—Brazil, Indonesia, Japan, UK edu emails qualify] and claim this freebie before June 30 this year (https://gemini.google/students/).

via:

https://x.com/GeminiApp/status/1924891940598014359

https://x.com/NewsFromGoogle/status/1924887278008307728

## Gemini API

This section mostly from official blog post[^3].

1. gemini-2.5-flash-preview-05-20

Improved Gemini 2.5 Flash model with better performance.

2. Gemini 2.5 Flash and Gemini 2.5 Pro will be GA (Generally Available) in early June 2025

Google models' inherent release rhythm: Experimental—Preview—GA.

https://x.com/OfficialLoganK/status/1924878626312618323

3. Gemma 3n E4B

![ChatGPT o3's introduction to Gemma 3n E4B](https://cdn.sa.net/2025/05/21/UIFN3wcXzE8xSYp.webp)

Mobile-centric open-source model—good for open source. Regular users have better closed-source options.

via:

https://developers.googleblog.com/en/introducing-gemma-3n/

https://huggingface.co/collections/google/gemma-3n-preview-682ca41097a31e5ac804d57b

https://ai.google.dev/gemma/docs/gemma-3n

https://news.ycombinator.com/item?id=44044199

4. Native audio output and Live API improvements

Related blog section: https://blog.google/technology/google-deepmind/google-gemini-updates-io-2025/#new-capabilities

Stream section added `gemini-2.5-flash-preview-native-audio-dialog` and `gemini-2.5-flash-exp-native-audio-thinking-dialog` models. Both are Gemini 2.5 Flash Native Audio. Early features include Proactive audio, etc.

![Gemini native audio output and Live API improvements](https://cdn.sa.net/2025/05/21/MuZXOLW3jqTeS9H.webp)

Conversational assistant apps can consider integrating—Chinese works well too.

![Conversational assistant apps can consider integrating—Chinese works well too.](https://cdn.sa.net/2025/05/21/KpIiGUcaq9tWAeV.webp)

Generate Media section—>Gemini Speech Generation, added text-to-speech models—`gemini-2.5-flash-preview-tts` and `gemini-2.5-pro-preview-tts`, can generate voice from scripts.

![Gemini added two TTS models](https://cdn.sa.net/2025/05/21/5Ih8oaHmEtNkyKA.webp)

## AI Mode

English only. Kicking Off, Looking At flow to answer user questions—interesting. Previous AI Mode probably didn't have these two prompts.

AI Mode for political figure searches only provides links, no generation.

![AI Mode for political figure searches only provides links, no generation.](https://cdn.sa.net/2025/05/21/tc8zK4Yb1LeBuH2.webp)

New AI Mode features shown at I/O including Deep Search will roll out to AI Mode Labs users over coming weeks and months.

https://blog.google/products/search/google-search-ai-mode-update/

## Gemini Diffusion

Google's text diffusion model. Users with access say: incredibly fast. First commercially deployed diffusion model LLM is [Mercury](https://chat.inceptionlabs.ai/).

Related Waitlist: https://docs.google.com/forms/u/0/d/e/1FAIpQLSdsxa-YU25JIPJGmu-pySJEYeTy6lwbdZAzxlZ11x3GPj6DhA/formResponse

via:

https://blog.google/technology/google-deepmind/gemini-diffusion/

https://x.com/GoogleDeepMind/status/1924888095448825893

https://news.ycombinator.com/item?id=44044080

https://deepmind.google/models/gemini-diffusion/

## Flow

An AI video creation tool. See ChatGPT o3's introduction.

![ChatGPT o3's introduction to Flow](https://cdn.sa.net/2025/05/21/qT9xt1UAkRoL2VB.webp)

Played around and generated a US kitty captain in space.

![Played around and generated a US kitty captain in space.](https://cdn.sa.net/2025/05/21/gcEY1mLrVlMRNhs.webp)

via:

https://labs.google/fx/tools/flow/

## SynthID Detector

Project for quickly and efficiently identifying if AI-generated content contains [SynthID watermark](https://deepmind.google/science/synthid/). See ChatGPT o3's introduction.

![ChatGPT o3's introduction to SynthID Detector project](https://cdn.sa.net/2025/05/21/dVUznDegjOoZ7Kv.webp)

Content generated in Gemini App started having watermarks last year (via: https://deepmind.google/discover/blog/watermarking-ai-generated-text-and-video-with-synthid/). So friends using Gemini for writing assistance—remember to have other LLMs rewrite. Though domestic AIGC detection hasn't added SynthID yet, can't rule out future addition. If added, can self-check with SynthID Detector first.

Related Waitlist: https://docs.google.com/forms/d/e/1FAIpQLSfAYrauHmY-PpUNxL4Fs6coa185CtKWp7TnEXL0tKbAezo4MQ/viewform

via:

https://blog.google/technology/ai/google-synthid-ai-content-detector/

## Stitch

![ChatGPT o3's introduction to Stitch](https://cdn.sa.net/2025/05/21/qDxASG6PMr7nb5i.webp)

AI prototyping tool for design-to-development one-stop flow. I'm not a designer—designer friends can pay more attention.

Has Standard Mode [Gemini 2.5 Flash powered] and Experimental Mode [Gemini 2.5 Pro powered].

Stitch-generated page praising Trump.

![Stitch-generated page praising Trump](https://cdn.sa.net/2025/05/21/TmZzbHhDXs97n3f.webp)

Remember to disable Stitch conversation data training in settings—though Google probably won't strictly comply.

## Google Chrome Gemini

![Google Chrome Gemini similar to Edge Copilot](https://cdn.sa.net/2025/05/21/PvjE6smfSOblqTo.webp)

Similar to Copilot in Edge. Summarizing webpages is a nice option, though it's a bit sticky.

https://x.com/Google/status/1924892719739973640

## Project Astra

Joined the Waitlist last year end—still haven't gotten to experience it. Disappointing. Project Astra demo videos on Google's YouTube channel have high views—shows Project Astra is highly anticipated.

![Project Astra demo videos on Google's YouTube channel have high views](https://cdn.sa.net/2025/05/21/vAEYNaHydlZBQOr.webp)

After watching Project Astra's latest demo videos—[Helping handsome guy assemble bicycle](https://youtu.be/JcDBFAm9PPI?si=M-r0p8ipd0-2msHU), [Helping girl with chemistry learning](https://youtu.be/MQ4JfafE5Wo?si=1vh5bDgPCl3Nm9-v)—I also want such a universal AI assistant.

![ChatGPT o3's introduction to Project Astra](https://cdn.sa.net/2025/05/21/ItZ1auyFBDrHkJn.webp)

via: https://deepmind.google/models/project-astra/

## Try it on

Virtual try-on feature from Google Shopping. Upload full-body photo for virtual try-on.

Grabbed a random beauty full-body photo from Xiaohongshu for experiment—effect is great.

Original:

![Original](https://cdn.sa.net/2025/05/21/aX47Drlhvw9M6FI.webp)

Virtual try-on:

![Virtual try-on](https://cdn.sa.net/2025/05/21/A2uGVQREItkhf1S.webp)

https://blog.google/products/shopping/how-to-use-google-shopping-try-it-on/

## Android XR

Not familiar with this area. See ChatGPT o3's introduction.

![ChatGPT o3's introduction to Android XR](https://cdn.sa.net/2025/05/21/siZy56f9brXgYMn.webp)

https://blog.google/products/android/android-xr/

https://blog.google/products/android/android-xr-gemini-glasses-headsets/

## Google Meet Real-time Translation

Initially supports English and Spanish. See related [demo video](https://www.youtube.com/watch?v=hyXqcsWOONo).

Web comment: Google just ended my translation career. This feature is promising.

![Web comment: Google just ended my translation career](https://cdn.sa.net/2025/05/21/tTLHp9laxWQ3GqJ.webp)

## Other

Still some not covered, like Lyria 2 [Google's music generation model], Google Beam [video conferencing stuff].

As for Jules [Google's AI code Agent], I tried it yesterday—felt average. Still need to learn programming properly. AI-assisted learning speeds up progress. Just Vibe Coding all day—end up being nothing without AI.

Other links:

https://workspace.google.com/blog/product-announcements/new-ways-to-do-your-best-work

https://cloud.google.com/blog/products/ai-machine-learning/expanding-gemini-2-5-flash-and-pro-capabilities

https://blog.google/technology/developers/google-ai-developer-updates-io-2025/

https://blog.google/technology/ai/generative-media-models-io-2025/

https://starline.google/

https://blog.google/outreach-initiatives/education/google-gemini-learnlm-update/

## Summary

Day 1 Google I/O 2025 announcements roughly these. Day 2 usually no major announcements. This week is destined to be extraordinary—whether o3-Pro, Grok 3.5, Claude 4 coming, stay tuned. Anthropic has an event at midnight Beijing time May 23, 2025.

![Day 2 Google I/O 2025 usually no major announcements](https://cdn.sa.net/2025/05/21/8ShLTFs1wvWkxUa.webp)

Google launching Ultra plan shows following OpenAI's path. High pricing means destroying AI democratization. But Google already laid groundwork letting users freebie 15 months Gemini membership—won't criticize high pricing too much.

My most-used AI app has switched to ChatGPT. Though I haven't abandoned Gemini, Claude, etc., overall ChatGPT feels best in all aspects. From earlier text, you saw for new knowledge points, I basically use ChatGPT o3 model for research. This Agent LLM is just too convenient—excellent UX. Unless replies are unsatisfying, generally too lazy to open search engines.

Can say ChatGPT-style Agent LLMs deal a big blow to Perplexity-type AI search wrappers. I believe future Google's similar o3 Agent LLM might directly sentence Perplexity-type products to death. What's Perplexity's moat? Nothing—models are outsourced, web data is outsourced. Eventually will be consumed by these giants.

Some interesting content seen today:

![Gemini is freeloading user feedback, should provide free service to users](https://cdn.sa.net/2025/05/21/GAStXe47wlibfPY.webp)


[^1]: https://x.com/Google/status/1924873580191391918

[^2]: https://blog.google/products/gemini/gemini-app-updates-io-2025/

[^3]: https://blog.google/technology/google-deepmind/google-gemini-updates-io-2025
