---
title: "RSS-Bridge Setup Guide"
date: 2023-02-20T10:27:14+08:00
tags: ['rss','rssbridge']
slug: "use-docker-compose-to-build-rssbridge"
summary: Introducing how to set up RSS-Bridge.
showtoc: true
---

> Note: Self-hosting RSS-Bridge is purely for using its Picuki bridge to track celebrity Instagram. Public instances' Picuki bridge gets blocked by Picuki due to too many users.

![Picuki 403 forbidden](https://vip2.loli.net/2023/02/20/XvYH4i3h7SN5tWr.webp)

Prerequisites:

+ A foreign VPS (the following installation steps assume Debian system is installed; other systems are similar, adapt accordingly)
+ A domain name

Due to space constraints, 1) purchasing a foreign VPS and 2) SSH connecting to VPS are omitted.

## 1. Install Docker

See Docker's [official documentation](https://docs.docker.com/engine/install/debian/)

```bash
# Install Docker from repository
# Update package index
sudo apt-get update
# Install some prerequisite tools to ensure Docker is correctly installed and configured
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

# Add Docker's official GPG key
sudo mkdir -m 0755 -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Add Docker official software source to Ubuntu system for downloading and installing Docker packages
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update package index
sudo apt-get update
# Install Docker packages and related plugins in Ubuntu system for running and managing Docker containers
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

<script async id="asciicast-561073" src="https://asciinema.org/a/561073.js"></script>

## 2. RSS-Bridge Installation

```bash
# Note: All demonstration operations below are performed in the root directory.
# Create rssbridge folder
mkdir rssbridge
# Enter rssbridge folder
cd rssbridge
# Edit docker-compose.yml file
vi docker-compose.yml

# docker-compose.yml file content
# Map local /root/rssbridge/config folder to /config folder in Docker container
# Map local port 3001 to container port 80
version: '2'
services:
  rss-bridge:
    image: rssbridge/rss-bridge:latest
    volumes:
      - /root/rssbridge/config:/config
    ports:
      - 3001:80
    restart: unless-stopped
```

Next, open port 3001 on the server. If the VPS provider's management panel doesn't have a firewall, check the VPS firewall status. The demo machine uses DigitalOcean's VPS, which by default has no firewall, so opening local port 3001 is optional.

```bash
# Start container in background
docker compose up -d
```

<script async id="asciicast-561074" src="https://asciinema.org/a/561074.js"></script>

Access server IP:3001 to see RSS-Bridge.

![rssbridge](https://vip2.loli.net/2023/02/20/FB1OATP2I6p8ujf.webp)

## 3. Enable Picuki in RSS-Bridge

By default, RSS-Bridge doesn't enable Picuki bridge. You need to use a whitelist to enable it. See the official documentation's [description of whitelisting](https://rss-bridge.github.io/rss-bridge/For_Hosts/Whitelisting.html).

Create a file `whitelist.txt` in the config folder under rssbridge folder, and add `Picuki + newline` inside.

<script async id="asciicast-561078" src="https://asciinema.org/a/561078.js"></script>

Restart Docker container to apply the configuration.

```bash
# Enter rssbridge folder
cd ~/rssbridge
# Remove containers, networks, and volumes created by services defined in docker compose file
docker compose down
# Start container in background
docker compose up -d
```

![rssbridge enable picuki](https://vip2.loli.net/2023/02/20/sSIjzWH9cFQ3Dgr.webp)

## 4. Modify Timezone

Download the default configuration file from RSS-Bridge GitHub repository

```bash
# Download rssbridge default configuration file
wget https://raw.githubusercontent.com/RSS-Bridge/rss-bridge/master/config.default.ini.php
# Rename file
mv config.default.ini.php config.ini.php
# Edit file
vi config.ini.php

# Change timezone in file to Asia/Shanghai
timezone = "Asia/Shanghai"

# Enter rssbridge folder
cd ~/rssbridge
# Remove containers, networks, and volumes created by services defined in docker compose file
docker compose down
# Start container in background
docker compose up -d
```

<script async id="asciicast-561079" src="https://asciinema.org/a/561079.js"></script>

## 5. Add Your Domain + Caddy Reverse Proxy

After completing the above work, when you excitedly try to add a celebrity's Instagram username in Picuki, you find a 503 error. The error reason will be explained later.

The current issue is that RSS-Bridge is set up, but Picuki bridge isn't working. Let's pause and first bind a domain to the RSS-Bridge service.

![Picuki bridge error](https://vip2.loli.net/2023/02/20/MeGbR7FN4cLXk8l.webp)

At your domain host, add an A record pointing to your VPS's IPv4 address.

![Add A record](https://vip2.loli.net/2023/02/20/QeTXysPr8tYUF2W.webp)

I'm using Cloudflare as my domain host.

Finally, let's configure the reverse proxy server. You can choose nginx, apache, caddy, etc. I'm choosing Caddy as the reverse proxy server because Caddy natively supports HTTPS—it automatically handles SSL certificate application and configuration without manual intervention; plus Caddy's configuration file is extremely simple. You can also use nginx as a reverse proxy server to proxy RSS-Bridge's port 3001. For nginx SSL certificate application and installation, you can use the acme script.

Caddy forwards external requests to local port 3001. We enter `rssbridge.example.com` in the browser address bar, Caddy receives the external request and forwards it to local port 3001, which happens to serve RSS-Bridge, and we get the RSS-Bridge service response.

Install Caddy ([official documentation](https://caddyserver.com/docs/install))

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
systemctl status caddy
```

Find Caddy's default configuration file location `/etc/caddy/Caddyfile` and add the following configuration [note formatting].

```bash
rssbridge.example.com {
        reverse_proxy localhost:3001
}
```

Restart Caddy.

```bash
systemctl restart caddy
```

Wait a moment, then enter `rssbridge.example.com` in the browser address bar to see the HTTPS-secured RSS-Bridge website.

![rssbridge https](https://vip2.loli.net/2023/02/20/evPFklhIiqrXCH4.webp)

However, I found the Picuki bridge in RSS-Bridge still errored. This made me ponder.

![image-20230220133633621](https://vip2.loli.net/2023/02/20/nKBy48VuXMozj7s.webp)

Fortunately, I have several foreign VPS. I also set up RSS-Bridge on AWS Lightsail, where Picuki bridge works normally.

![AWS rssbridge picuki works normally](https://vip2.loli.net/2023/02/20/5SUWr6EtvcYaXAd.webp)

My guess is that setting up RSS-Bridge on DigitalOcean and getting Picuki bridge errors is because DigitalOcean's IP might have been used by a previous VPS that also hosted RSS-Bridge, and that RSS-Bridge was used by many people, accessing Picuki too frequently, causing that IP to be blocked by Picuki. Of course, this is just my speculation.

DigitalOcean's pay-as-you-go consumption model makes demonstrating features from scratch very convenient. But it also leads to impure IP addresses—who knows what the previous customer did with this IP.

## 6. Add Instagram Bridge

See [official documentation](https://rss-bridge.github.io/rss-bridge/Bridge_Specific/Instagram.html) description.

```bash
# Edit rssbridge whitelist
vi ~/rssbridge/config/whitelist.txt
# Add instagram
Add Instagram + newline
# Edit configuration file
vi ~/rssbridge/config/config.ini.php

# Add instagram related info at end of configuration file
[InstagramBridge]
session_id = "xxx"
ds_user_id = "xxx"
cache_timeout = "216600"
```

The method for getting session_id and ds_user_id is detailed in the documentation link above. Summary: log into Instagram, F12 open developer tools, Application—>Cookies—>get related data. Add to config.ini.php file.

![Get session_id and ds_user_id](https://vip2.loli.net/2023/02/20/IhUdSbDH45gFQjs.webp)

## 7. Summary

RSSHub also has Instagram-related parameter configuration methods. After configuration, you can use RSSHub's Instagram RSS subscription, but as mentioned in last month's blog post, after using this method for a while, Instagram will verify the account.

Predictably, using RSS-Bridge's Instagram bridge will also encounter this situation. So when getting session_id and ds_user_id, it's best to use a registered Instagram alt account. If the alt gets identity verification requests, no fear of bans.

In 2023, RSS looks outdated, being killed off by various social platforms. Social platforms like to keep users in their walled gardens, making users create value for them.

Sharing a personal interesting experience: at the beginning of the year, I deactivated my blog on China's CSDN. The reason was previous posts had flaws. But surprisingly, deactivating the account doesn't equal deleting it—my CSDN blog homepage still exists. The so-called account deactivation just changed the name to "Deactivated." At that moment, I finally understood the importance of personal websites. Various websites provide services while controlling the data you create—as long as you use their services, content created with those services belongs to them, not you.

RSS-Bridge is an excellent project. In the RSS world, below RSSHub is RSS-Bridge.

Finally, sharing a rant from the RSS-Bridge project homepage.

![rssbridge-rant](https://vip2.loli.net/2023/02/20/4FdheiOKMJC9luf.webp)

## 8. Update

### 2023.3.7

I've now abandoned self-hosted solutions in favor of the RSS-Bridge set up by [thefeedreaderbot](https://thefeedreaderbot.com/index.html) founder. If financially able, you can pay €100 for lifetime premium of this bot.

![rssbridge 403](https://vip2.loli.net/2023/03/07/c5Txu3q8nj1leMz.webp)

I also asked the author which proxy they purchased to make their RSS-Bridge avoid Picuki blocks. The author told me they use dynamic proxy IPs from [webshare](https://www.webshare.io/), with domain authorization, putting the obtained address in RSS-Bridge's config.ini.php file, like `url = "http://p.webshare.io:xxxx"`.

![TG conversation screenshot](https://vip2.loli.net/2023/03/07/nFUR8Cj5P4L2WtB.webp)

I roughly calculated that webshare's cheapest annual plan costs nearly $30, so I ultimately decided to abandon RSS-Bridge and use the RSS-Bridge set up by [thefeedreaderbot](https://thefeedreaderbot.com/index.html) author. For the specific RSS-Bridge address, see thefeedreaderbot website's [help rssbridge](https://thefeedreaderbot.com/helpRssBridge.html) page.
