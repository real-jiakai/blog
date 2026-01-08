---
title: "Build Your Own Xiaohongshu and Instagram Alternative—Pixelfed"
date: 2024-07-20T09:39:08+08:00
tags: ["pixelfed", "self-hosting"]
slug: "build-your-own-xiaohongshu-instagram-alternative-pixelfed"
summary: Introducing the process of self-hosting Pixelfed.
showtoc: true
---

## Background Story

In the first half of the year during May, June, and July, I got into Xiaohongshu (Little Red Book). I registered multiple accounts with my various international phone numbers and eventually deactivated almost all of them.

Initially with hopes of finding a partner, I documented my graduate school daily life. I remember before deactivating that account, one of my posts reached a peak of 60 likes. [2024.05.25～2024.06.10]

![First Xiaohongshu account with high likes - momo](https://cdn.sa.net/2024/07/21/vAKRbgNCywMqSDY.webp)

Another account posted a meme about school dormitory relocation issues. About 3 days after posting, I personally felt posting wouldn't change reality, so I deleted that post. That post peaked at around 150 likes [the image below shows likes after about 2 days, which I sent to my roommate who also documents grad school life on Xiaohongshu—this post got more likes than all his posts combined. Actually wanted to show off a bit 😂. Before deactivation it really had around 150 likes].

![Second Xiaohongshu account with high likes - Little Blue Whale](https://cdn.sa.net/2024/07/21/JfudImpRl6wkAT1.webp)

The last noteworthy account posted a video about our school's graduation concert [a college student covering singer Hins Cheung's "Youth Forever"—sang beautifully]. That post peaked at over 100 likes. Most likers were fans of singer Hins Cheung, not schoolmates.

![Third Xiaohongshu account with high likes - Little Red Potato](https://cdn.sa.net/2024/07/21/DgPstkXFauZf51B.webp)

The above was my glory record over those three months, but it still couldn't stop my determination to deactivate my Xiaohongshu accounts. Reasons for deactivation:

1. Finding a partner through Xiaohongshu is unrealistic—online romance is risky.

Chat passionately online, meet in person and be greatly disappointed. I didn't meet any internet friends in person, but my roommate whom I introduced went on an outing with a second-year grad senior from our school.
Before their outing, they chatted every day—during that period I had the illusion my roommate was about to find a girlfriend. Unfortunately after meeting and exploring a shop together, they never had that initial enthusiasm again 😂.

2. Sharing daily life and running into acquaintances is embarrassing.

Initially my Xiaohongshu account documenting grad school daily life was recognized by a classmate—I was so embarrassed I wanted to find a hole to crawl into. At that time my Xiaohongshu bio included: "Want to find a partner 😭😭😭."
Directly exposed my contrasting side to classmates. When a classmate from the same lab told me during our third-year graduation dinner about the process of how classmates recognized that Xiaohongshu account was mine,
I was completely stunned. Really embarrassing.

Fortunately my roommate whom I introduced took some heat off me. After I deactivated, everyone's attention focused on him. I think he quite enjoys being liked by others—after all, he's a boy who loves life. [A girl from our school's compliment about him, haha 😄]

3. Self-disciplined daily routines are known to yourself—sharing can deepen anxiety and involution.

I run every day, spend daytime in the library or lab—this monk-like life I know myself, no need to announce it loudly to the Chinese internet. In this generation of involution, understanding the importance of keeping a low profile is crucial. Not saying we shouldn't progress together—I just prefer progressing alone, don't like my progress being observed by others.

These are probably the reasons I deactivated almost all my Xiaohongshu accounts. I kept 1-2 blank accounts for liking my roommate's grad school daily posts.

My other roommate, upon hearing about the roommate sharing grad school life on Xiaohongshu, asked back: "Isn't Xiaohongshu the women's bathroom?" Made me burst out laughing. Haha 🤣, I've indeed seen posts by girls exposing creepy guys there.

Leaving Xiaohongshu, what about using the international version—Instagram? Definitely not. I won't touch Meta's products—serious privacy issues.

So I asked AI—both GPT-4o and Claude 3.5 Sonnet recommended the open-source alternative—Pixelfed.

## Self-Hosting Process

Pixelfed definitely has a docker version too. But I have a German server with the Cloudron panel installed. The panel's app store has a bunch of self-hosted apps. Before self-hosting Pixelfed, my Mastodon instance [decentralized social network, Weibo/X alternative] was one-click installed through this panel. The free version of Cloudron panel only supports installing two apps from its store.
Personally I think choosing Mastodon for one and Pixelfed for the other is a great combination.

![Cloudron panel app store](https://cdn.sa.net/2024/07/21/o6HDykNqFI7x8Rw.webp)

The Cloudron panel self-hosting process is simple—just run the official one-click installation script. The gotcha: if you changed the SSH port earlier, before restarting after running Cloudron-related commands, you need to add the SSH port in Cloudron's firewall config file to avoid losing SSH access [I got locked out once and resolved it via VNC]. See my note—[Solution for SSH login failure after Cloudron panel installation](https://bbs.gujiakai.top/d/3-cloudronmian-ban-an-zhuang-wan-sshdeng-lu-bu-shang-de-jie-jue-fang-an).

If you're tired of modifying yaml files for docker deployments and want to try these decentralized social apps with a VPS around 4GB RAM, give it a shot.

The VPS for these two apps is from German provider [bero-host](https://bero-host.de/affiliate/4z2tbVrYEw)—great experience, high uptime. Recommended for those looking to host websites—watch for their promotions.

Cloudron panel migration is super convenient. Early July I migrated from a free Digital Ocean machine a classmate gave me to my German server [4 cores, 8GB RAM, 100GB disk]. I set up remote self-hosted MinIO bucket backup in Cloudron—on the new machine just uploaded Cloudron's config file, and it automatically downloaded app backups from the remote MinIO bucket and restored them. Since the original config file contained Cloudflare token, DNS records were also updated automatically. Seamlessly smooth.

I've used similar products—YunoHost, Sandbox. Comparing the three, experience ranking: Cloudron > YunoHost > Sandbox [if not considering cost, YunoHost beats Sandbox; free Cloudron only allows two apps]. Of course domestic panels are also improving, like 1Panel with its rich app store.

Self-hosting Pixelfed is also straightforward—click install, wait for completion, register an account, then click the app's web terminal to set the new user as admin. For specific process see official docs—[cloudron pixelfed docs](https://docs.cloudron.io/apps/pixelfed/).

Only after setting user as admin can you access the admin page. Below is an admin page sample.

![Pixelfed admin page](https://cdn.sa.net/2024/07/21/bTIV1OZg6csUWKx.webp)

For closing registration, I modified the `OPEN_REGISTRATION` field to false in the .env file and restarted the app. I found setting registration status to closed in admin page doesn't take effect.

![Pixelfed manually close registration](https://cdn.sa.net/2024/07/21/G6oFXya9WIjOxi2.webp)

The web interface looks similar to Xiaohongshu/Instagram—both display image posts in waterfall layout.

![Pixelfed web interface effect](https://cdn.sa.net/2024/07/21/DSYUetQrbqFv4sc.webp)

For mobile app, I chose Fedilab—searchable in Play Store. After logging into my self-hosted Pixelfed instance, I can happily share life!

![Pixelfed mobile effect](https://cdn.sa.net/2024/07/21/4tJU8wygpaS2HRG.webp)

## Afterword

Of course self-hosting Pixelfed and Mastodon have similar drawbacks—interaction is much less than Xiaohongshu/Instagram, Weibo/X platforms. Most self-posted content gets no attention—self-appreciation only.

Therefore self-hosting suits introverts—documenting life for future self to reminisce. Extroverts who like socializing should start directly with Xiaohongshu/Instagram, Weibo/X. My situation is mostly posting on self-hosted Mastodon and Pixelfed instances,
minimizing posts on social media. I also have a Misskey instance mainly for sharing music I hear.

![Misskey instance](https://cdn.sa.net/2024/07/21/gaRuxtfUYnoBLTK.webp)

These decentralized apps are destined to not become mainstream, but they give introverts a choice to relieve their sharing urge. Finding a partner is impossible—wanting romance is just sex hormones acting up. Release the relevant substances, instantly clear-headed, immediately lose interest in romance [I speak truth].

Solitude is one person's carnival, carnival is a group's solitude. Enjoy one's own freedom, calm down and browse tech news, tinker with VPS, read hosting forum posts, run research experiments, write small papers, consider future prospects and get certifications—such days are good. Quite busy, no time to think about finding a partner.

Looking forward to my roommate creating a miracle through Xiaohongshu! 🤓

Attaching a few recent comments on relationship topics from L Site that reflect my personal thoughts. Also got some recognition from fellow users.

- [How programmers meet the opposite sex](https://linux.do/t/topic/130651)

![How programmers meet opposite sex—my high-liked comment](https://cdn.sa.net/2024/07/20/pwJn715YsTXKyr6.webp)

- [Girlfriend is junior preparing for grad school exams, I'm sophomore. She just broke up with me, what to do…..](https://linux.do/t/topic/152073)

![Girlfriend broke up—my high-liked comment](https://cdn.sa.net/2024/07/20/VnhtLSkZ3jEHM89.webp)

Additionally, my deactivation shows the fragility of the internet—Chinese internet is especially fragile. Useful information vanishes in an instant. Domestic apps' walled garden ecosystems without Internet Archive protection are indeed accelerating collapse.

This also reminds the importance of backup and archiving. When you see good videos, good content, the first thing besides liking is downloading for archive. After experiencing many good contents being deleted and unavailable, I've started to habitually love backing up.

I definitely backed up before deactivating—every Xiaohongshu post I'd send a copy to my self-hosted social blog [using the open-source project [moments](https://github.com/kingwrcy/moments)], so I had the confidence to deactivate 😎.

![Social blog backing up every Xiaohongshu post](https://cdn.sa.net/2024/07/21/QfmOLPx9lnczo5A.webp)
