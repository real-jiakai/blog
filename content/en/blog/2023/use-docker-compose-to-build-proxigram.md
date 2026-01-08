---
title: "Self-hosting Proxigram with Docker"
date: 2023-10-13T16:36:49+08:00
tags: ['rss']
slug: "use-docker-compose-to-build-proxigram"
summary: Introducing how to self-host Proxigram using Docker.
showtoc: true
---

## Background

This afternoon while cleaning up my inbox, I noticed new activity in the all about rss GitHub project issues. The project author pointed out that someone discovered an Instagram to RSS solution—Proxigram.

![all about rss project issue email notification](https://vip2.loli.net/2023/10/13/9CYO6NZjUg4nm8k.webp)

So I went to the all about rss TG group to check the information and found someone sharing their new discovery on October 9th—a new Instagram to RSS solution called Proxigram. [via](https://t.me/allaboutrss/13588)

![User sharing their new discovery—Proxigram](https://vip2.loli.net/2023/10/13/EsABNULSTGZnrMx.webp)

The all about rss channel owner officially shared the Instagram to RSS solution Proxigram on their TG channel today (October 13, 2023). [via](https://t.me/aboutrss/1376)

![all about rss channel owner sharing Proxigram](https://vip2.loli.net/2023/10/13/71S4BUs5a2m9eAM.webp)

From Proxigram's project description, you can see this project's purpose is to protect user privacy. It acts as an intermediary between users and Instagram, fetching Instagram data and returning it to users. The RSS functionality is not its primary purpose.

## Setup Process

The official README documentation about deployment is already very clear. I'll mainly mention the .env configuration file settings.

```bash
# One-click Docker installation
curl https://get.docker.com | bash
# Clone the Proxigram repository
git clone https://codeberg.org/ThePenguinDev/proxigram.git
# Enter the proxigram folder
cd proxigram
# Copy .env.example and rename the copy to .env
cp .env.example .env
# Start and run the Docker container in the background
docker compose up -d
```

The .env file is explained below:

```bash
# Server:

## Change this to your own domain/ip.
## Example -> https://example.com or http://127.0.0.1:3000
# Set the Proxigram URL
URL=https://proxigram.example.com

# CACHE:

## Set to false to disable cache (not recommended).
# Enable caching
CACHE=true

## Redis url, example -> redis://127.0.0.1:6379
## If using docker -> redis:6379
# Redis URL
REDIS_URL=redis:6379

## Don't keep it too high!
## 7|m|h|d
# RSS expiration time
EXPIRE_TIME_FOR_RSS=6h
# No more than 2d, images and videos will break
# Post expiration time
EXPIRE_TIME_FOR_POST=6h
# Posts expiration time
EXPIRE_TIME_FOR_POSTS=6h
# Profile expiration time
EXPIRE_TIME_FOR_PROFILE=6h
# Stories expiration time
EXPIRE_TIME_FOR_STORIES=6h

# Set proxy
# Proxy:

## Proxy all the images and videos through the instance.
## If set to false, images and videos will be loaded from the provider server decreasing privacy for the end user.
PROXY=false

# Providers:

## Fetch the providers URLs remotly.
## If set to false, it will cached the list of providers once. New providers will have to be added manually
# Fetch third-party Instagram app content
FETCH_PROVIDERS=true

## If FETCH_PROVIDERS is set to true, provide how often you want to re-fetch;
## 7|m|h|d
# Re-fetch third-party Instagram app content every 6 hours
FETCH_PROVIDERS_EVERY=6h

## Add a custom remote providers list.
## OFFICIAL: https://codeberg.org/ThePenguinDev/proxigram-providers/raw/branch/main/providers.json
# Add the official third-party Instagram app list URL
PROVIDERS_LIST_URL=https://codeberg.org/ThePenguinDev/proxigram-providers/raw/branch/main/providers.json

## If set to false, providers which depends on a headless browser will not be used.
## If set to true, you should run one of the next commands to install the chromium binary.

## npm install playwright-chromium@1.34.3
## pnpm add playwright-chromium@1.34.3
## yarn add playwright-chromium@1.34.3
# Don't use headless browser
USE_HEADLESS_PROVIDERS=false

# RSS:

## Set to false to disable RSS.
# Enable RSS
RSS=true

## Maximum 12.
# Set the number of items per RSS feed
ITEMS_PER_RSS=12

## In ms.
# Set request interval to 400ms
SLEEP_TIME_PER_REQUEST=400
```

The port mapping in docker-compose.yml is best written in the format `127.0.0.1:xxx:3000` to avoid exposing too many ports externally. Use a reverse proxy server like Caddy or Nginx to proxy the local xxx port to provide Proxigram service externally.

```yaml
---
version: "2.1"
services:
  proxigram:
    # Currently no docker image so building one
    image: proxigram:latest
    build:
      dockerfile: Dockerfile
    container_name: proxigram
    # 3000 is the container internal port, 8080 is the external access port, change if necessary.
    ports:
      - '127.0.0.1:3000:3000'
    restart: unless-stopped
    # Copy .env.example to .env and change accordingly.
    env_file: .env

  # When using this compose file, use REDIS_URL=redis:6379 at the env file
  redis:
    image: redis:alpine
    container_name: redis
    restart: unless-stopped
```

Set up DNS resolution at your domain provider like Cloudflare to point the domain to your Proxigram server IP.

Finally, configure the reverse proxy server to provide the service via domain.

Add the following record to Caddy's Caddyfile:

```bash
proxigram.exmaple.top {
    reverse_proxy localhost:xxx
}
```

Then reload the Caddy server:

```bash
systemctl reload caddy
```

Now visiting proxigram.example.com will show the application interface.

![Successfully accessing self-hosted Proxigram application](https://vip2.loli.net/2023/10/13/dZehzmPGj7MF81a.webp)

Enter an Instagram user's handle (username) to get their data.

For example, entering yua_mikami (Yua Mikami's Instagram handle) and selecting the first user in the search results will show her latest updates. There's an RSS icon in the top right corner - clicking it will give you the Atom format RSS URL.

![Yua Mikami's updates displayed on Proxigram](https://vip2.loli.net/2023/10/13/yOETb9JUKVwQnvR.webp)

Import that URL into an RSS reader to view her updates during your free time.

The image below shows the effect of importing RSS for Kina Usumiya (Instagram handle: himenachaaaaan), the female lead of Ultraman Blazar, generated by Proxigram into the Feedbro RSS reader.

![Kina Usumiya's RSS imported to Feedbro](https://vip2.loli.net/2023/10/13/LSjWgfyHv1rzMIo.webp)

Finally, some notes:

- Instagram posts have too much noise. I recommend placing them in a different RSS app than blog articles and similar feeds.

- Looking at some options in Proxigram's Docker environment file, you can roughly guess that this project works similarly to the picuki bridge in RSSBridge - using your VPS to access Instagram third-party application content listed in the provider list. Frequent content fetching may get your IP blocked by Instagram third-party applications. [Need time to verify my hypothesis]

![Some configuration options in .env](https://vip2.loli.net/2023/10/13/mhAzNZ8dCMu52JO.webp)

- I recommend using VPS providers like AWS Lightsail that allow free IP changes to deploy Proxigram. Of course, you can also purchase proxies and add them to the Proxy Providers option in environment variables, but proxy costs can be quite significant.

This open-source newcomer provides a new solution for Instagram to RSS. I've deployed an instance myself. But generally, I still prefer using the picuki bridge from the TG bot Feed Reader Bot author's RSS bridge to get Instagram user updates.

The bot author has set up dynamic proxies for their RSS bridge, so there's no need to worry about picuki blocking the instance IP. The bot has a certain free quota. I paid 100 euros for the pro version lifetime access at the end of last year, and now the pro lifetime price has risen to 150 euros. I don't recommend purchasing it - the price is somewhat expensive.

The open-source project Proxigram makes the RSS world a better place. I hope this project lives long.

## Thoughts

The more internet application service providers try to trap user data in their walled gardens, the more certain user groups will awaken and use open-source technology to break free from the shackles placed on them. When providers go to extreme lengths to block the last ray of light that could pierce the wall, users might as well turn away and vote with their feet, causing platforms to lose users.

Since Elon Musk took over social media X (formerly Twitter), he has slowly started learning from Chinese tech giants to build walls, accelerating the destruction of what should be an open internet world. This is a very sad thing.

Fortunately, there are still projects like Mastodon and other distributed social networks that give users more freedom and control, avoiding censorship or exploitation by centralized platforms.

While these decentralized social networks may not be able to replace the established social platforms with massive user bases, at least their existence adds more openness to this world. When these giants continue their harmful practices in the future, users who want to escape will have more choices.
