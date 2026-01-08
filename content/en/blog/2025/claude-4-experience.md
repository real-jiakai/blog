---
title: "Claude 4 Experience"
date: 2025-05-23T07:56:34+08:00
tags: ["claude","anthropic"]
slug: "claude-4-experience"
summary: Sharing my Claude 4 usage experience.
showtoc: true
---

## Update (2025.7.23)

Claude Code is no longer a toy. With Claude 4 series models online, Max membership paired with Opus 4 model is just too good. Those who know, know—the strongest AI programming tool!!! In just 1-2 months, successfully turned Cursor from sweetheart to has-been. Only Anthropic entering the arena could do this.

## Update (2025.5.23)

Future updates for this Claude 4 article moved to Flarum post—[Claude 4 Experience Blog Update Summary](https://bbs.gujiakai.top/d/13-claude-4)

---

![If you follow AI news, every day feels like time is compressed.](https://cdn.sa.net/2025/05/23/fKErWMURgA4kVxG.webp)

via: https://x.com/testingcatalog/status/1925606824662679917

If you follow AI news, every day feels like time is compressed. Monotonous repetitive life passes exceptionally fast when following AI's pace.

![Claude Opus 4's explanation of the tweet](https://cdn.sa.net/2025/05/23/n1Bc2psbXF7u5CH.webp)

Claude 4 released early this morning. Anthropic chose not to release models in toothpaste-squeezing fashion with decimal version increments anymore.

This change largely stems from Claude's market being heavily eroded by ChatGPT and Gemini recently. If OpenAI's GPT4.1 and Google's Gemini 2.5 series coding abilities still had significant gaps with Claude 3.7 Sonnet, Anthropic would likely release Claude 3.8 Sonnet and continue hiding the Opus model to improve Sonnet.

> Note: Actually coding benchmarks only provide a general direction. Before Claude 4's release, Claude 3.7 could still compete evenly with Gemini 2.5 Pro—not every coding scenario would be won by Gemini 2.5 Pro. Anthropic develops models for real needs, destined to have significant contrast between benchmark and user experience.

Claude series models' biggest impression on me is concise, non-redundant replies, sometimes with soul. Like recently I was reviewing for the Software Designer intermediate exam, reviewing my comprehensive knowledge mistakes. For options I didn't understand clearly, I had ChatGPT 4o/o3, Gemini 2.5 Pro, Claude 3.7 Sonnet answer. Sometimes Claude 3.7 Sonnet's answers were concise with details, sometimes Claude 3.7 Sonnet performed poorly among these models—knowledge breadth not matching the other two.

Last time I used Claude 3 Opus was second half of last year. Remember being assigned to review seniors' thesis proposals. I directly sent all text parts from proposals to Opus model for improvement suggestions. Never used it again after, because Claude 3 Opus's writing ability somewhat couldn't keep up with Claude 3.5 Sonnet series.

If Anthropic had released Claude Opus 4 in February this year, 2025 graduates' theses would have had one more excellent option. Opus model is customized for writing. Though I haven't tested Claude Opus 4's writing ability, predicted text human-feel is very high.

## Claude 4

1. Latest model cutoff date

Compared to Gemini 2.5 series models' knowledge cutoff of January 2025, Claude Opus 4 and Claude Sonnet 4 knowledge cutoff reached March 2025. Though current LLMs mostly have internet access, newer knowledge cutoff is always better.

![Claude 4 model has latest knowledge cutoff](https://cdn.sa.net/2025/05/23/5Mkgar23nqHB8Zu.webp)

2. Extended thinking with tool use (beta)

With thinking and search buttons enabled, Claude can use search tools. After getting search tool response, continues thinking, iterating, then gives reply. The example below demonstrates this feature.

![Claude 4 Extended thinking with tool use (beta)](https://cdn.sa.net/2025/05/23/cY7wjlsBCEATqJ2.webp)

Previously with both thinking and search buttons on, when Claude felt it needed internet search, it would use search tools, then directly give reply after search—wouldn't think again based on tool call results.

Anthropic Developer Relations Lead Alex Albert's tweet demonstrating this feature: https://x.com/alexalbert__/status/1925591751118684258

3. New model capabilities, Claude Code GA

![Official blog introduction of new model capabilities, Claude Code GA](https://cdn.sa.net/2025/05/23/qaEKzSOmAnTvkeJ.webp)

More precise instruction following and other new features are good—benefits Agents. Claude Code section will be expanded later with my new experience impressions.

4. New API features

This part will also be expanded later.

5. Pricing, access tiers

Claude 4 series models pricing same as Claude 3 series—at this price, no matter how strong the model, hard to be widely adopted.

Claude Opus 4 in GitHub Copilot only for Pro+ users. Claude Opus 4 in Cursor requires enabling Max mode. Cost-effectiveness king Gemini 2.5 is a hurdle Claude can't easily overcome.

![Claude Opus 4's introduction to Cursor Max mode](https://cdn.sa.net/2025/05/23/5UKjYPxGipBohl2.webp)

Sonnet 4 open to free users, Opus 4 exclusively for paid users. Friends with means wanting to experience Opus—recommend getting Pro membership. API not worth it. Will also introduce low-cost Claude membership paths I know.

6. Benchmarks

Benchmarks look great—wouldn't release if they didn't look great. Now every LLM release self-claims current SOTA (State Of The Art).

Personally agree with Anthropic CEO's statement that benchmarks are meaningless. Benchmarks definitely have distortion but roughly compare model capability strengths.

This image shows Claude 4 far ahead on SWE benchmark.

![Claude 4 far ahead on SWE benchmark](https://cdn.sa.net/2025/05/23/4GzRlUrID768gQc.webp)

This image shows Claude 4 becoming current LLM SOTA.

![Claude 4 becoming current LLM SOTA](https://cdn.sa.net/2025/05/23/bFT6NxuX1PmR8On.webp)

On livebench.ai, Claude Opus 4 currently holds first place among classic LLMs. Reasoning models suit benchmark gaming, classic LLMs suit users' daily questions.

![On livebench.ai, Claude Opus 4 is currently classic LLM king](https://cdn.sa.net/2025/05/23/pSfFRHNJbWVdXEn.webp)

For classic LLMs, Google has already combined reasoning models with classic LLMs. OpenAI's strongest classic LLM is actually the official site's ChatGPT 4o—with various rich tools assisting, user experience is also first-class.

Currently my first choice for classic LLM: Claude Opus 4 on Claude official site and ChatGPT 4o on ChatGPT official site.

## Claude Code

Selected these two new commands to experience:

```bash
/install-github-app
/vibe
```

See ChatGPT o3's introduction to `/install-github-app` command.

![ChatGPT o3's introduction to `/install-github-app` command](https://cdn.sa.net/2025/05/23/sN8CK1FOogUkHuB.webp)

Possibly useful commands:

```bash
# Update package manager and install GitHub CLI tool
apt update && apt install gh -y

# Authenticate login using GitHub CLI
gh auth login

# Follow prompts, create a `personal access token (classic)` in GitHub,
# check `repo`, `workflow`, `admin:org`, `admin:public_key` 4 options.
```

Professional programmers can try using Claude Code GitHub Actions for various tasks. I won't bother.

via:

https://github.com/anthropics/claude-code-action

https://docs.anthropic.com/en/docs/claude-code/github-actions#quick-start

`/vibe` command contains a vibe coding Easter egg.

![`/vibe` command contains a vibe coding Easter egg.](https://cdn.sa.net/2025/05/23/jiJyxbDo78VluEB.webp)

Seeing Claude Opus 4's explanation include Dao De Jing, can't help but marvel at Chinese culture's depth, though Anthropic CEO is extremely anti-China.

![Claude Opus 4's analysis of /vibe command Easter egg](https://cdn.sa.net/2025/05/23/vSczFl7ixmK8gd2.webp)

The Way Of Code website: https://www.thewayofcode.com/

Used Claude Code to improve the Hungry Bear game's visual effects and sound effects I made last time. via: https://bear.gujiakai.top/

Related operation screenshots:

![Claude Code improving Hungry Bear screenshot 1](https://cdn.sa.net/2025/05/23/qfNZ9zYT1XctdAe.webp)

![Claude Code improving Hungry Bear screenshot 2](https://cdn.sa.net/2025/05/23/wmlAZE9joy2Rhu8.webp)

My mind was blank, didn't review the code, just kept pressing Enter `Yes` to confirm.

![Final Hungry Bear effect after improvement](https://cdn.sa.net/2025/05/23/yIJtREf8sQDpcu6.webp)

Learn programming well—the stronger you are, the stronger you + AI become. Otherwise using Claude Code you'll have little inspiration.

![The stronger you are, the stronger you + AI become](https://cdn.sa.net/2025/05/23/1bMx35gDpoIqBO6.webp)

Recommend experiencing Claude Code on US VPS. Today's release also included IDE tool (VS Code, etc.) integration—won't experience that. Domestic machines not recommended for touching any Claude products—carelessness will get your account banned. Masters confident in traffic splitting and able to appeal after bans—go ahead and experience.

## Claude API

1. Code execution tool

2. MCP connector

3. File API

4. Extended prompt caching

Official related tweet demo: https://x.com/AnthropicAI/status/1925633118104416587

A while ago I experienced similar code execution tools in Gemini API. Can only say Anthropic released this feature somewhat late. OpenAI's code execution tool API was supported 1 year ago. File API is similar situation.

via: https://www.anthropic.com/news/agent-capabilities-api

## Other

1. Claude Invite campaign

Claude's new referral campaign. via: https://claude.ai/invite

More referrals = higher chance of winning 4 months Claude Max plan.

Interestingly the Claude referral campaign restricts some US regions. See Claude Opus 4's explanation.

![Claude Opus 4's explanation of Claude referral campaign US region restrictions](https://cdn.sa.net/2025/05/23/ZqQUEnchwFrit1G.webp)

Friends reading this who haven't registered Claude accounts can consider using my referral link to give me a tiny chance at free 4 months Max plan. via: https://claude.ai/referral/_0IX9uZm2w

Actually just look at this kind of lottery—regular users refer themselves, do a few and done (I got one entry). No need to max out 100. There will definitely be cases where someone with 100 referrals doesn't win while someone with 1 referral wins. Getting that many referrals and coming up empty-handed would be devastating.

![Claude referral campaign I got 1 entry.](https://cdn.sa.net/2025/05/23/tKs7EcVgM93x2zW.webp)

via: https://support.anthropic.com/en/articles/11408405-claude-4-invite-contest

2. Cursor, Windsurf, GitHub Copilot and other third-party integration

![Windsurf CEO crying—Claude 4 model not provided to Windsurf immediately.](https://cdn.sa.net/2025/05/23/dRUiQFPsvNEfCOB.webp)

Windsurf CEO crying—Claude 4 model not provided to Windsurf immediately. Windsurf's user base will probably be slightly affected. Currently writing this blog post in Cursor editor—got a free year with US edu recently. Cursor, GitHub Copilot, etc. integrated Claude 4 immediately.

via: https://x.com/_mohansolo/status/1925605908287250939

3. Some good resource links, references

a. Claude 4 official blog: https://www.anthropic.com/news/claude-4

b. Simon Willison's Live Blog on Claude launch: https://simonwillison.net/2025/May/22/code-with-claude-live-blog/

Attending the event in person gets three months of Max plan. Envious.

![Attending the event in person gets three months of Max plan. Envious.](https://cdn.sa.net/2025/05/23/8f7NPkBxaDwiq6s.webp)

c. Definition of Agent: https://simonwillison.net/2025/May/22/tools-in-a-loop/

Agents are models using tools in a loop.

d. Claude model comparison: https://simonwillison.net/2025/May/22/updated-anthropic-models/

e. Tweets from Claude official X accounts:

https://x.com/alexalbert__/status/1925591741924876781

https://x.com/AnthropicAI/status/1925591505332576377

f. Tibor Blaho's Anthropic launch summary tweet: https://x.com/btibor91/status/1925641897369797038

g. Vibe Check: Claude Opus 4 blog: https://every.to/chain-of-thought/vibe-check-claude-4-sonnet

h. Anthropic official livestream: https://www.youtube.com/watch?v=EvtPBaaykdo

Other livestreams: https://www.youtube.com/@anthropic-ai/streams

i. Claude 4 System Card: https://www-cdn.anthropic.com/6be99a52cb68eb70eb9572b4cafad13df32ed995.pdf

## Recommendations

If you encountered Claude account suspension, recommend reading two previous blog posts. Most recommended is using US Windows VPS remote desktop to reduce suspension probability.

- [Claude Account Suspension Resolution](https://blog.gujiakai.top/2024/11/claude-account-suspension-resolution/)

- [Self-Hosted Kasm Workspaces](https://blog.gujiakai.top/2025/03/self-hosted-kasm-workspaces/)

If you don't want to deal with Claude environment hassles, personally recommend searching `Claude` on Taobao for corresponding plans. There's a shop called `claude克劳德小屋`—experience is good, new customers can try 24 hours for 1 RMB.

This relay site completely mirrors Claude official site—probably borrowed from L Site admin's Fuclaude project. Like if I want to experience Research feature only open to Max, Team, Enterprise—I use this site at very low cost. Of course this Research definitely can't match ChatGPT or Gemini's Deep Research.

![Taobao purchase Claude relay service to experience Research feature](https://cdn.sa.net/2025/05/23/dwS3Ob2M8JPj6Ht.webp)

Another option is buying cheap $1/month Claude accounts [lasts 3 months]. Late February this year Claude had a $1/month for 12 months edu discount for specific US edu—if you caught that, also very nice.

![Claude $1/month edu plan](https://cdn.sa.net/2025/05/23/o2T45YfFwxzusDj.webp)

Best option is definitely getting an edu email partnered with Claude, like Northeastern University—free Claude Enterprise account.

![Schools partnered with Claude provide free Claude Enterprise accounts](https://cdn.sa.net/2025/05/23/NmU3wxHIkdnVhcl.webp)

## Summary

For Claude web usage, generally don't recommend enabling Extended thinking. Daily use classic LLM is enough—only consider enabling thinking when classic LLM replies are unsatisfactory.

Though Claude Sonnet 4's SWE benchmark is slightly better than Claude Opus 4, and some benchmark code evaluations show Claude Sonnet 4 is better than Claude Opus 4, on Claude Web I'll definitely prioritize Claude Opus 4 without thinking. For writing, code-related tasks in the future, first choice Claude Opus 4 is definitely excellent—only consider asking Claude Sonnet 4 if Opus 4's reply is unsatisfactory.

Claude 4 is out—can GPT 5 be far behind? Looking forward to seeing GPT 5 model in mid-late 2025.
