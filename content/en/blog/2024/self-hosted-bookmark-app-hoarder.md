---
title: "Self-Hosted Bookmark App—Karakeep (formerly Hoarder)"
date: 2024-10-05T15:53:21+08:00
tags: ["bookmark"]
slug: "self-hosted-bookmark-app-hoarder"
summary: Sharing my experience self-hosting the bookmark app Karakeep (formerly Hoarder).
showtoc: true
---

## Update (2025.4.7)

Hoarder app renamed to Karakeep. Due to trademark disputes, the developer was forced to rebrand.

Related links:

- https://www.reddit.com/r/selfhosted/comments/1i29pi1/hoarder_the_name_is_being_stolen_from_me/

- https://lemmy.world/post/27844912

- https://github.com/karakeep-app/karakeep

## Background Story

On October 4th this year, my Raindrop membership officially expired. Downgrading consumption, I won't renew membership. Many future membership services will probably be abandoned by me. Although SaaS services are likely better than open-source alternatives.

In 2024, I prefer concentrating spending on AI services [ChatGPT and Claude memberships], high-quality proxies [next post introduces my current AI service configuration], holiday food and fun, etc.

Unknowingly, my Raindrop bookmark count has reached 5k+. Whenever I see interesting websites, I bookmark them. When I need them, just search.

![Raindrop bookmark count reached 5k+](https://cdn.sa.net/2024/10/05/ZORLiEmIJKYpaHn.webp)

Raindrop also became my inspiration source for writing monthly newsletters. My newsletter has "Interesting" and "Link Share" modules—materials all from Raindrop.

![Newsletter module inspiration from Raindrop](https://cdn.sa.net/2024/10/05/frbh7t843onuSMJ.webp)

After expiration, I started looking for bookmark app alternatives. Just saw YouTuber [DBTech](https://www.youtube.com/@DBTechYT) share a hoarder self-hosting [video](https://youtu.be/dklvlJ4YDtM?si=87y0zTS8T3B1nIwH) a few days ago. Video demo looked good, so I decided to make it my Raindrop open-source alternative.

## Self-Hosting Process

Project: [https://github.com/hoarder-app/hoarder](https://github.com/hoarder-app/hoarder)

Docs: [https://docs.hoarder.app/](https://docs.hoarder.app/)

```bash
# Go to home directory, create hoarder folder, enter new folder
cd && mkdir hoarder && cd hoarder
# Download docker compose file
wget https://raw.githubusercontent.com/hoarder-app/hoarder/main/docker/docker-compose.yml

# My adjusted docker-compose.yml content:
# Differences from official demo:
# 1. Using bind mounts instead of volumes
# 2. Host port only allows localhost access, reverse proxy handles external access
services:
  web:
    image: ghcr.io/hoarder-app/hoarder:${HOARDER_VERSION:-release}
    restart: unless-stopped
    volumes:
      - ./data:/data
    ports:
      - 127.0.0.1:3600:3000
    env_file:
      - .env
    environment:
      MEILI_ADDR: http://meilisearch:7700
      BROWSER_WEB_URL: http://chrome:9222
      DATA_DIR: /data
  chrome:
    image: gcr.io/zenika-hub/alpine-chrome:123
    restart: unless-stopped
    command:
      - --no-sandbox
      - --disable-gpu
      - --disable-dev-shm-usage
      - --remote-debugging-address=0.0.0.0
      - --remote-debugging-port=9222
      - --hide-scrollbars
  meilisearch:
    image: getmeili/meilisearch:v1.6
    restart: unless-stopped
    env_file:
      - .env
    environment:
      MEILI_NO_ANALYTICS: "true"
    volumes:
      - ./meilisearch:/meili_data

# Edit environment variables
vim .env

# Environment variables
# See https://docs.hoarder.app/Installation/docker for details
# Docs are very detailed
HOARDER_VERSION=release
NEXTAUTH_SECRET=xxx
MEILI_MASTER_KEY=xxx
NEXTAUTH_URL=https://hoarder.example.com
MAX_ASSET_SIZE_MB=1024

# Start all services defined by Docker Compose
docker compose up -d

# Edit caddy config file
vim /etc/caddy/Caddyfile
# Reverse proxy caddy config
hoarder.example.com {
        reverse_proxy localhost:3600
}

# Add DNS A record in Cloudflare

# Reload caddy
systemctl reload caddy
```

Then visit `hoarder.example.com` to register an account.

![Register account on hoarder web](https://cdn.sa.net/2024/10/05/7b2tzURYvSdyaTK.webp)

Import Raindrop exported bookmarks in settings.

![Import bookmarks to hoarder](https://cdn.sa.net/2024/10/05/dk2nclQvt1Jjf5p.webp)

5000+ bookmarks took about 1 hour to import.

Install mobile hoarder app and browser extension for easy collecting or searching. I bound the extension to my original Raindrop extension shortcut—same workflow for bookmarking.

Hoarder search function is OK.

![Hoarder search function is OK](https://cdn.sa.net/2024/10/05/Q6akGeibmZgFCxY.webp)

Finally close registration—enjoy hoarder solo 😁.

```bash
# Modify docker-compose.yml file
vim docker-compose.yml

# Differences from original docker-compose.yml
# Added DISABLE_SIGNUPS environment variable
# If you need AI to tag for you, can configure AI-related environment variables
# For me, manual tags are easier to search
services:
  web:
    image: ghcr.io/hoarder-app/hoarder:${HOARDER_VERSION:-release}
    restart: unless-stopped
    volumes:
      - ./data:/data
    ports:
      - 127.0.0.1:3600:3000
    env_file:
      - .env
    environment:
      MEILI_ADDR: http://meilisearch:7700
      BROWSER_WEB_URL: http://chrome:9222
      DATA_DIR: /data
+     DISABLE_SIGNUPS: true
  chrome:
    image: gcr.io/zenika-hub/alpine-chrome:123
    restart: unless-stopped
    command:
      - --no-sandbox
      - --disable-gpu
      - --disable-dev-shm-usage
      - --remote-debugging-address=0.0.0.0
      - --remote-debugging-port=9222
      - --hide-scrollbars
  meilisearch:
    image: getmeili/meilisearch:v1.6
    restart: unless-stopped
    env_file:
      - .env
    environment:
      MEILI_NO_ANALYTICS: "true"
    volumes:
      - ./meilisearch:/meili_data

# Stop and remove all containers, networks and volumes defined by Docker Compose,
# then recreate and start all services
docker compose down && docker compose up -d
```

![Hoarder registration disabled](https://cdn.sa.net/2024/10/05/59wbdGuIXVczD4s.webp)

## Summary

Sorry Raindrop—it's not that your features are weak, but my wallet isn't thick enough. After buying €10/month Bero Host, SaaS services were destined to go. Sigh 😑. I'm not rich.

Open-source projects aren't unusable—just can't beat Raindrop. App is OK too—as long as it can search, basic needs met.

![Hoarder app is also OK](https://cdn.sa.net/2024/10/05/Y9JF8Sg6yIULi3v.webp)

That's it. Future SaaS services like Readwise, Inoreader will continue being replaced by open-source projects.

I've tried my best to utilize Bero Host machine, but this machine's specs are too high—enough for me to keep tinkering.

![Bero Host machine specs too high, enough to keep tinkering](https://cdn.sa.net/2024/10/05/P3c7zJAwref2xhu.webp)

Finally, allow me to advertise—details at [via](https://19130104.xyz/@jiakai/113252544619836649). Today DMIT restocked all products. Friends wanting to self-host nodes, grab the chance.

![DMIT advertisement](https://cdn.sa.net/2024/10/05/8RvPqygxFBhVJlU.webp)

With quality optimized route US West machine plus residential landing, accessing AI services is more stable—no fear of bans. This is also next blog's topic—my current AI service access configuration.
