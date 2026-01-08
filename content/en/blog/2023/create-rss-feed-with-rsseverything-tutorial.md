---
title: "Feed43's Successor—RSSEverything RSS Feed Creation Tutorial"
date: 2023-03-31T20:45:17+08:00
tags: ["rss"]
slug: "create-rss-feed-with-rsseverything-tutorial"
summary: Introducing how to create RSS feeds with RSSEverything.
showtoc: true
---

## Background

I hadn't opened Inoreader for several days. Taking advantage of it being Friday, I browsed through my feeds and discovered this [post](https://www.reddit.com/r/rss/comments/125igab/feed43_is_this_the_end/) in the RSS subreddit on Reddit. Feed43's website went down.

![Inoreader RSS subreddit image](https://vip2.loli.net/2023/03/31/rus18NUBJeAEWhF.webp)

A highly upvoted comment pointed out that Feed43 was still accessible via IP address, and also provided an alternative service to Feed43—[RSSEverything](https://rss.stephenslab.top/).

![Reddit user comment 1](https://vip2.loli.net/2023/03/31/TbE9Oq2NArjWLBG.webp)

RSSEverything was released by its author on Reddit in 2022. Thanks to this author for creating a product people wanted.

![Reddit user comment 2](https://vip2.loli.net/2023/03/31/Nclog1G6ipPUaQS.webp)

After Feed43's HTTPS SSL certificate expired last year, I never used it again. I knew this service was in jeopardy. No one knows what happened to Feed43's author. Here are two Reddit posts from last year discussing Feed43:

- [feed43 is no longer supported. I'd be happy to pay if someone made this for me. I have an idea for an RSS feed generator.](https://www.reddit.com/r/rss/comments/xv6y8d/feed43_is_no_longer_supported_id_be_happy_to_pay/)

- [Feed43.com Death Watch](https://www.reddit.com/r/rss/comments/z4uuy6/feed43com_death_watch/)

Before writing this article, I used RSSEverything to create an RSS feed for my personal website. The creation process is exactly the same as Feed43. The syntax uses {%} and {*}.

For detailed explanation, see ChatGPT-4's explanation:

![Explanation of Feed43 template syntax](https://vip2.loli.net/2023/03/31/JTHuLaXNVMKmw1x.webp)

TL;DR: {%} defines capture groups, used to extract content you want to include in the generated RSS feed; {*} is a wildcard that matches any number of any characters, used to skip content you don't need to extract.

## Demonstration

- Step 1: Enter the URL of the website you want to extract, click Load.

![Step 1](https://vip2.loli.net/2023/03/31/qe3TNr4oa8XkFSJ.webp)

Using my [personal website](https://gujiakai.top) as an example (viewing source code using the Chrome extension Quick Source Viewer):

![Personal website source code](https://vip2.loli.net/2023/03/31/3BbpkRD8PSzd4M5.webp)

You can see that each item in the article list is wrapped in an HTML li tag.

```html
<li>
    <span>
        <i>
            <time datetime="2023-02-28" pubdate="">
                2023-02-28
            </time>
        </i>
    </span>
        <a href="https://gujiakai.top/2023/02/weekly-issue-15.html">今天我学了什么 #15</a>
</li>
```

- Step 2: Define extraction rules

So my matching pattern can be written like this:

```html
<li>
{*}
    <a href="{%}">{%}</a>
</li>
```

After clicking extract, you get the URL and article title for each item in the article list.

![Step 2](https://vip2.loli.net/2023/03/31/i1Ikz4uxVKXbDWh.webp)

- Step 3: Define output format

Finally, fill in the corresponding parameters for generating the RSS template. Item Title uses {%2}, Item Link uses {%1}, corresponding to the two options extracted in step 2, then click Preview.

![Step 3](https://vip2.loli.net/2023/03/31/p6unhFmO93dXHWl.webp)

The final result looks like this:

![Final result](https://vip2.loli.net/2023/03/31/F6SUDuaCh18Bepc.webp)

Combined with a full-text RSS reader like Inoreader, you can read the complete article without needing to jump to the website.

![Inoreader fetching full text](https://vip2.loli.net/2023/03/31/vntIJflO6i4yBdC.webp)

While writing this article, I encountered a period where the website was inaccessible. After a while, I tried again and access was restored - it was probably just my network issues.

![Website instability](https://vip2.loli.net/2023/03/31/wI3JxqamzE5UTBG.webp)

## Conclusion

RSSEverything currently (as of March 30, 2023) doesn't have a paid plan, but the website's Introduction mentions there will be paid plans. I estimate they'll consider launching a paid plan after the website gains traction.

![RSSEverything Introduction](https://vip2.loli.net/2023/03/31/okfayZb4P5lMESA.webp)

Additionally, the author's Roadmap includes features like full-text extraction, which is worth looking forward to.

![RSSEverything Soon](https://vip2.loli.net/2023/03/31/KftpkQV46Sg952X.webp)

RSS is an old technology that still has its value in 2023. It helps people track website updates and saves the process of visiting websites to check for updates. I hope this service can be maintained for a long time.
