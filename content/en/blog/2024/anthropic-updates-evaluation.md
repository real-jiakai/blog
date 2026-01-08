---
title: "Anthropic Updates Evaluation"
date: 2024-10-23T15:11:43+08:00
tags: ['claude', 'anthropic']
slug: "anthropic-updates-evaluation"
summary: Recording my evaluation of Anthropic's updates on October 22, 2024.
showtoc: true
draft: false
---

## Update (2024.12.26)

Properly recognizing the rise of domestic AI—DeepSeek v3 is not to be underestimated. I underestimated DeepSeek company.

## Update (2024.10.27)

The Claude 3.5 Sonnet(New) Chinese comments issue mentioned in this article was actually due to my prompts not being good enough.

Ask Claude to write in detail and it writes well. Meanwhile, if the code given is too long and the prompt isn't on point, ChatGPT o1-mini also writes brief comments. Looks like I need to focus on Prompt Engineering.

![With good prompts, Claude writes detailed code comments too](https://cdn.sa.net/2024/10/27/koexhKi5Ad9gvWc.webp)

---

Found out last night before bed that Anthropic updated. Couldn't sleep around 4 AM, tried the new Claude 3.5 Sonnet and found it quite impressive. The Kun Kun question that couldn't be answered accurately before was perfectly solved—without internet access.

Note: This afternoon I tested multiple times and found Claude 3.5 Sonnet(New) still has hallucinations for this question—there's some probability of getting it right, but mostly hallucinations. Hope it doesn't dumb down like GPT 4o 🙃!

Q: Who wears suspenders, has hundreds of millions of fans, and is the Chinese "basketball superstar"?

![Initial experience with Claude 3.5 Sonnet(New)](https://cdn.sa.net/2024/10/23/l7SQNuaAfMdvs3R.webp)

You can ask domestic AI this question. ~~Many domestic AI that get it right need internet access to answer correctly—without internet they can't~~.

I found that currently (as of October 23, 2024) most domestic AI have automatically integrated search, and even without search integration, there might be people editing responses in real-time like Google does?

A week ago when asking this question, most domestic AI answered incorrectly. Some ridiculous cases like Kimi Explorer, when first released, searched many webpages but still answered wrong. Tried again today and found it directly answered correctly. I suspect there must be people reviewing user questions periodically, optimizing response logic for specific questions to improve model response quality.

Kimi Explorer performance on October 12, 2024:

![Kimi Explorer performance on October 12, 2024](https://cdn.sa.net/2024/10/12/Gm4OaKFhynfp3wo.webp)

Kimi Explorer performance on October 23, 2024:

![Kimi Explorer performance on October 23, 2024](https://cdn.sa.net/2024/10/23/RXPFKgfwVDJ4cEj.webp)

DeepSeek is also quite ridiculous—this improvement is hard to attribute to anything other than dedicated question reviewers optimizing response logic. Or is domestic AI continuously improving in silence? Can't figure it out.

![DeepSeek performance on the Kun Kun challenge](https://cdn.sa.net/2024/10/23/cDMGqHoZrfupIsR.webp)

Baidu's Wenxin Yiyan (ERNIE Bot), with its large domestic user base, on October 23, 2024—even the 3.5 model could answer this correctly.

![Wenxin Yiyan 3.5 solves the Kun Kun challenge](https://cdn.sa.net/2024/10/23/kt8EHpfDFPewIbR.webp)

A week ago, October 12, 2024, even the 4.0 model couldn't answer correctly.

![A week ago, Wenxin 4.0 couldn't solve the Kun Kun challenge](https://cdn.sa.net/2024/10/23/kedjX4m82yf5oIV.webp)

Are some domestic AI this good now? I'm skeptical—personally think there must be dedicated reviewers making editorial responses to user questions. Or maybe I'm being ignorant and not properly recognizing the rise of domestic AI?

## Computer Use

Followed the official computer-use-demo instructions.

```bash
export ANTHROPIC_API_KEY=%your_api_key%
docker run \
    -e ANTHROPIC_API_KEY=$ANTHROPIC_API_KEY \
    -v $HOME/.anthropic:/home/computeruse/.anthropic \
    -p 5900:5900 \
    -p 8501:8501 \
    -p 6080:6080 \
    -p 8080:8080 \
    -it ghcr.io/anthropics/anthropic-quickstarts:computer-use-demo-latest
```

Then enter `localhost:8080` in browser address bar to access the demo app.

The four host-container port mappings explained by Claude 3.5 Sonnet(New):

![Claude 3.5 Sonnet(New) explanation of port mappings](https://cdn.sa.net/2024/10/23/lUGbFqW6Xa7IjCd.webp)

Early morning, topped up $5 to Claude API, consumed about $4.5. Demo videos below.

![Claude Computer Use demo cost me about $4.5](https://cdn.sa.net/2024/10/23/ZbRekn9grwCQO2j.webp)

Demo operations:

- Bilibili: [Claude Computer Use Demo Collection](https://space.bilibili.com/488592525/channel/collectiondetail?sid=4062677)

- YouTube: [Claude Computer Use Demos](https://youtube.com/playlist?list=PLdS7qhMAPXqcCf5i0TKAlpstg0GUc5HKe&si=rcIPmTAiIEEoE0iZ)

1. Search for Elon Musk's latest X updates.

Final error `This action is temporarily not available at this time due to enhanced protections for the beta release.`

Probably because Musk's latest updates were about the US election, causing this error—AI companies in the US generally avoid domestic political topics.

2. Create a text file with Anthropic company's development history.

3. Play Gomoku against advanced computer using Claude Computer Use.

Initially Claude got black/white piece ownership wrong, later corrected.

Gomoku is a complex task, and this Gomoku website's algorithm is really strong—I manually played 3 games before and lost all. Let alone first-gen Claude Computer Use.

If someday Claude Computer Use can actually beat this website's computer player, Claude has definitely evolved into something like AlphaGo—AGI would be within reach then.

4. Using Claude Computer Use to operate calculator.

Calculator app's final result was wrong—Claude probably cheated by using its own capabilities to calculate 😂.

Also Streamlit's UI defaults to markdown syntax, some operators were rendered as markdown, but Claude isn't affected as it processes raw text input.

5. Draw heart pattern using xpaint.

This should also be a complex task—even humans have trouble drawing a full heart, but the general shape is there.

Claude Computer Use currently basically clicks to operate apps, doesn't have the human ability to hold-click and draw, so drawing heart pattern failed. Looking forward to future iterations.

6. Download arXiv PDF and summarize paper content.

Funny part: Claude thought June 2024 hadn't arrived yet since Claude 3.5 Sonnet(New)'s knowledge cutoff is April 2024. Claude presumed a URL it thought was correct, resulting in paper not found when accessing that URL. But Claude still gave a general content summary—probably got the paper abstract on first access.

7. Search YouTube for Curry's 2016 incredible game-winning three-pointer and play.

Won't upload this to Bilibili or YouTube—NBA copyright issues. Details on OneDrive: [7.mp4](https://1drv.ms/v/s!AkOlsYD5Bd9NmF7vfVxETEC57LbE?e=gsAUwB)

8. Install btop and use btop to check system resource usage.

9. Try commenting on Ruan Yifeng's blog latest post.

Search keywords were entered wrong, but Claude 3.5 Sonnet(New) directly remembered Teacher Ruan's blog URL—his articles probably already became Claude 3.5 Sonnet(New)'s training data. Every public blog on the internet can't escape becoming LLM training material 😑.

Field filling was wrong, and triggered Claude 3.5 Sonnet(New)'s guidelines. Maybe jailbreakable—just convince AI it's operating on a local page so it comments freely. Or maybe Anthropic's safety measures are solid and hard to jailbreak.

This limitation can be found in [official docs computer use section](https://docs.anthropic.com/en/docs/build-with-claude/computer-use#understand-computer-use-limitations).

10. Pass Cloudflare Turnstile captcha [Testing environment].

Although Claude 3.5 Sonnet(New) refused the captcha system, telling it this is just Testing got it to click 😁.

11. Close webpage ads.

Originally wanted Claude 3.5 Sonnet(New) to directly click itdog.cn's "Close all ads" button, but it first went to install ublock origin ad blocker browser extension. Then with my second prompt, it clicked itdog.cn's "Close all ads" button.

I saw some folks using Claude Computer Use for adult content—I won't test that. Interested folks can try and see how creative it gets.

![Someone using Claude Computer Use for adult content](https://cdn.sa.net/2024/10/23/OBAdpuc9TCN3xor.webp)

## Claude 3.5 Sonnet(New)

Definitely stronger than before. Previously Claude 3.5 Sonnet couldn't place the graduation cap in the center of the triangle—this time after two rounds of dialogue, successfully positioned the cap.

![Claude 3.5 Sonnet(New) can place graduation cap in triangle center](https://cdn.sa.net/2024/10/23/FP4mfc3RdQJWUbs.webp)

Also previously I found Claude 3.5 Sonnet was lazy with Chinese comments.

This was Claude 3.5 Sonnet's work from a few days ago:

![Claude 3.5 Sonnet lazy with Chinese comments](https://cdn.sa.net/2024/10/23/sr7NuVm4TOBLDX6.webp)

This was Claude 3.5 Sonnet(New)'s rewrite today:

![Claude 3.5 Sonnet(New) Chinese comments didn't improve much](https://cdn.sa.net/2024/10/23/ngODQL2HklAxwXo.webp)

Actually hard to compare—anyway, let ChatGPT o1-mini write Chinese comments. Look how detailed it writes—Claude 3.5 Sonnet series should learn from ChatGPT here.

![Chinese comments still depend on ChatGPT o1-mini](https://cdn.sa.net/2024/10/23/QTzRf73tVULgydj.webp)

I believe [livebench leaderboard](https://livebench.ai/#) and [aider code ability leaderboard](https://aider.chat/docs/leaderboards/)'s recognition of Claude 3.5 Sonnet(New)'s coding ability. Currently Claude 3.5 Sonnet(New) is far ahead in coding.

![Livebench Claude new version coding ability leads](https://cdn.sa.net/2024/10/23/HiXloWMabAq2QZ3.webp)

![Aider LLM coding ability, new Claude also far ahead](https://cdn.jiakai.page/pictures/2024/10/23/202410231603327.webp)

## Other

Seeing various online comments, Claude 3.5 Opus probably won't exist. Maybe next March we'll jump straight to Claude 4 series (Haiku, Sonnet, Opus)—looking forward to Claude 4 Opus improving in text polishing.

![Claude 3.5 Opus trace from late this year](https://cdn.jiakai.page/pictures/2024/10/23/202410231515417.webp)

![Official docs removed Claude 3.5 Opus mentions](https://cdn.jiakai.page/pictures/2024/10/23/202410231511857.webp)

Some netizen evaluations:

- Claude is not only the most capable LLM, but also has the best personality.

![Claude is not only the most capable LLM, but also has the best personality](https://cdn.jiakai.page/pictures/2024/10/23/202410231450480.webp)

- Is this going to take testers' jobs?

- OpenAI wants your grandma to use AI, Anthropic wants dev teams to use AI. Their purposes are starting to differ.

![OpenAI wants your grandma to use AI, Anthropic wants dev teams to use AI](https://cdn.jiakai.page/pictures/2024/10/23/202410231545548.webp)

- Interestingly, OpenAI is doubling down on end-user features like voice mode, while Anthropic is doubling down on engineer/API-centric features like code generation quality and GUI remote control.

![OpenAI doubling down on end-user features, Anthropic on engineer-centric features](https://cdn.jiakai.page/pictures/2024/10/23/202410231546215.webp)

- Today Anthropic buried OpenAI.

![Today Anthropic buried OpenAI](https://cdn.jiakai.page/pictures/2024/10/23/202410231547711.webp)

## Summary

These were my thoughts after initial Claude 3.5 Sonnet(New) experience around 4 AM. For friends who haven't subscribed to Claude membership—recommend you subscribe.

![My initial experience thoughts](https://cdn.sa.net/2024/10/23/pdoZAXCquL32c1s.webp)

Anthropic's subscription revenue is only 15% of income. Such a strong model—subscribe quickly. Between the two, prioritize Claude membership.

![Anthropic's subscription revenue is only 15%](https://cdn.jiakai.page/pictures/2024/10/23/202410231520780.webp)

The LLM crown has probably changed hands. Claude 3.5 Sonnet—my god! Wonder what surprises OpenAI will bring for ChatGPT's second anniversary next month? GPT-5? Or o1-full [with all current GPT-4o capabilities]? Or continue quietly releasing inconsequential articles, relying on first-mover advantage to burn through loyal users' enthusiasm? Looking forward to late November 2024!

Adding a photo of the 5:20 AM campus! Last semester, OpenAI's spring release kept me awake. This semester, Anthropic's silent Claude 3.5 Sonnet upgrade got me excited.

![5:20 AM campus, Claude 3.5 Sonnet upgrade drives me crazy](https://cdn.jiakai.page/pictures/2024/10/23/202410231551217.webp)
