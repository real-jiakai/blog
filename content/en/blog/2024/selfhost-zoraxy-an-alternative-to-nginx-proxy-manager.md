---
title: "Self-Host Zoraxy: An Alternative to Nginx Proxy Manager"
date: 2024-05-12T19:36:34+08:00
tags: ["reverse-proxy", "zoraxy"]
slug: "selfhost-zoraxy-an-alternative-to-nginx-proxy-manager"
summary: Self-hosting Zoraxy as an alternative to Nginx Proxy Manager.
showtoc: true
---

A while ago, I saw a new reverse proxy project—[Zoraxy](https://github.com/tobychui/zoraxy/). After a brief trial, it felt similar to Nginx Proxy Manager.

This project also supports docker deployment, and adding reverse proxy rules is done visually in a backend management interface.

Zoraxy deployment result looks like this:

![Zoraxy deployment result](https://cdn.sa.net/2024/05/12/HPg7p4fihI2B9nt.webp)

## 1. Self-Hosting Steps

### 1.1. Prerequisites

Install docker and docker compose.

If not installed, use a one-click script:

```bash
# Use one-click script to install docker and docker compose
curl https://get.docker.com | bash
```

### 1.2. Self-Host Zoraxy

```bash
# Go to user directory
cd
# Create directory named zoraxy and enter
mkdir zoraxy && cd zoraxy
# Use vim editor to create and open compose.yml file
vim compose.yml
```

Add the following content:

```bash
services:
  zoraxy-docker:
    image: zoraxydocker/zoraxy:latest
    container_name: zoraxy
    ports:
      - 80:80
      - 443:443
      - 8005:8000/tcp
    volumes:
      - ./Zoraxy:/opt/zoraxy/config/
    environment:
      ARGS: '-noauth=false'
    restart: always
```

Let Claude3 briefly explain the above configuration.

![Claude3 explanation](https://cdn.sa.net/2024/05/12/SsYlH1EoO9k6g2F.webp)

Initially enable container port 8000 mapping to host port 8005. After configuring domain access to zoraxy backend, you can remove this port mapping.

For more zoraxy docker configuration info, see: [zoraxy/docker](https://github.com/tobychui/zoraxy/tree/main/docker).

Then execute the following command to start and run the container in background.

```bash
# Use docker compose to start service and run in background
docker compose up -d
```

![Start and run zoraxy container in background](https://cdn.sa.net/2024/05/12/YilhoFcHtk4dOPq.webp)

Now enter `http://your_vps_ip_address:8005` in browser address bar to access zoraxy backend. [Note: if VPS has firewall enabled, temporarily allow port 8005 first. After setting up domain access for zoraxy backend, remove this port allowance]

![Create account](https://cdn.sa.net/2024/05/12/k4GRPKJpWBjgXl8.webp)

Enter username and password to create account.

![Login to zoraxy backend](https://cdn.sa.net/2024/05/12/P8FvwVDbfhoKBN1.webp)

Then enter the username/password just created to login to zoraxy backend.

![Successfully entered zoraxy backend](https://cdn.sa.net/2024/05/12/OrQNa6EfClHcuUj.webp)

Successfully entered zoraxy backend.

### 1.3. Zoraxy Configuration

In the Status page of the backend, modify the inbound port in Global Settings to 443, and check all the options below:

- Use TLS to serve proxy request
- Enable HTTP server on port 80 (Only apply when TLS enabled and not using port 80)
- Force redirect HTTP request to HTTPS

![Global Settings configuration](https://cdn.sa.net/2024/05/12/jLQfbs5grEVuR8A.webp)

Leave the Default Site page unchanged—when encountering unknown hostname, let zoraxy use built-in static page to handle requests.

![Default Site page unchanged](https://cdn.sa.net/2024/05/12/8PsD4WXt7rRVA6a.webp)

Static page can be found in Static Web Server.

![Static page location](https://cdn.sa.net/2024/05/12/oFlOCn7fRSY3dtB.webp)

Default static page looks like this:

![Default static page](https://cdn.sa.net/2024/05/12/B1dOQSAYmU6jLqu.webp)

Next configure domain access for zoraxy backend. Using domain `zoraxy.example.com` as example.

First go to cloudflare's DNS records for domain `example.com`, add an A record with name zoraxy and value as zoraxy server's IP address.

Then return to zoraxy backend's Create Proxy Rules page.

Matching Keyword / Domain: fill in `zoraxy.example.com`;

Target IP Address or Domain Name with port: fill in `zoraxy:8000`;

Check Require Basic Auth, enter basic auth username and password.

Click Create Endpoint.

![Create zoraxy proxy rule](https://cdn.sa.net/2024/05/12/aZmoMIf5C4sklrw.webp)

Then go to TLS/SSL certificates page.

![TLS/SSL certificates page](https://cdn.sa.net/2024/05/12/LeakiSBMlEcbTmh.webp)

Scroll to bottom, fill ACME Email with your common email. Click Save Settings.

![Fill ACME Email](https://cdn.sa.net/2024/05/12/hrvW264IHDEngzp.webp)

Then click Open Acme Tool at bottom, fill ACME Email with your common email, enable Certificate Auto Renew toggle. In Generate New Certificate's Domain(s) input, fill `zoraxy.example.com`, click Get Certificate.

![Request certificate with ACME](https://cdn.sa.net/2024/05/12/8KZ1W6RVHBjDplX.webp)

Open HTTP Proxy page, click `zoraxy.example.com` to access zoraxy backend via domain.

![HTTP Proxy page](https://cdn.sa.net/2024/05/12/9iPmvo7zD3Xl8Mp.webp)

Enter basic auth credentials to pass verification.

![Enter basic auth credentials to pass verification](https://cdn.sa.net/2024/05/12/vLmZ9ROgizfY64u.webp)

If basic auth doesn't work, go to HTTP Proxy page and edit the proxy rule just created.

![If basic auth doesn't work, edit the proxy rule](https://cdn.sa.net/2024/05/12/AoiF6ZKwXtWbvCm.webp)

Click Basic Auth's Edit Credentials, add username and password in Basic Auth Credential.

![Click Edit Credentials, add username and password](https://cdn.sa.net/2024/05/12/92MXv5FVJ1GZyzi.webp)

After passing basic auth, you can access zoraxy backend via domain.

![After passing basic auth, access zoraxy backend via domain](https://cdn.sa.net/2024/05/12/l5BTV7nzKgZjcIk.webp)

For security, minimize exposed ports. Modify zoraxy's compose.yml file, remove the 8005:8000/tcp port mapping, then use `docker compose down && docker compose up -d` to redeploy zoraxy container.

Brief list of other pages:

- Virtual Directory provides path mapping and other functions—explore on your own.

- TCP Proxy has some relay flavor—haven't used it yet.

- Redirection Rules for adding redirect rules.

- Access Control for access control, provides useful features like country blacklist. If you have such needs, I recommend setting up corresponding WAF rules in Cloudflare instead.

![Access Control country blacklist](https://cdn.sa.net/2024/05/12/Lhdltczpm3gNiVD.webp)

- Global Area Network—haven't used yet.

- Service Expose Proxy—feature still in development.

- Uptime Monitor—check reverse proxy target uptime.

- Network Tools—provides common network tools like domain whois lookup.

- Statistical Analysis—displays website access statistics.

- Utilities—provides password change, toolbox, and other functions.

### 1.4. Providing Reverse Proxy for Other Services

Using recently seen dashboard project—[glance](https://github.com/glanceapp/glance)—as example.

Official docker compose file:

```yaml
services:
  glance:
    image: glanceapp/glance
    volumes:
      - ./glance.yml:/app/glance.yml
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    ports:
      - 8080:8080
    restart: unless-stopped
```

Can be modified to:

```yaml
services:
  glance:
    image: glanceapp/glance
    volumes:
      - ./glance.yml:/app/glance.yml
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    networks:
      - zoraxy_default
    restart: unless-stopped

networks:
  zoraxy_default:
    external: true
```

Add glance service to zoraxy_default external network so zoraxy can reach glance service via glance:8080. Detailed explanation from Claude3. Note: zoraxy_default network is created by zoraxy by default—check via `docker network ls`.

![Claude3 detailed explanation](https://cdn.sa.net/2024/05/12/JjSUz3ZIF5fOyoR.webp)

Can reference nginx proxy manager's [Best Practice: Use a Docker network](https://nginxproxymanager.com/advanced-config/#best-practice-use-a-docker-network) for comparison learning.

Then create glance.yml file in the same directory as glance's compose.yml. Specific configuration see [Preconfigured page](https://github.com/glanceapp/glance/blob/main/docs/configuration.md#preconfigured-page).

Directory structure looks like:

![glance directory structure](https://cdn.sa.net/2024/05/12/qo41rMGjTxizsnp.webp)

In glance folder execute `docker compose up -d` to start and run container in background.

Following operations same as creating proxy rules before.

- First add an A record in Cloudflare domain DNS records, name `glance`, value `example.com`.

- Then go to zoraxy backend's Create Proxy Rules page. Matching Keyword / Domain: fill `glance.example.com`; Target IP Address or Domain Name with port: fill `glance:8080`; click Create Endpoint to complete proxy rule creation.

- A popup appears at bottom right for SSL certificate request—click to request directly.

- After request completes, visit `glance.example.com` to successfully access glance service. To customize glance dashboard, modify glance.yml file then execute `docker compose down && docker compose up -d` to redeploy glance.

![Successfully accessed glance service](https://cdn.sa.net/2024/05/12/TMEsqKLxUGIRyDe.webp)

## 2. Summary

Zoraxy reverse proxy basically meets docker service reverse proxy needs, similar to nginx proxy manager. If you have a VPS without reverse proxy installed, give it a try.

Of course among reverse proxies I've used, the simplest and most convenient is still Caddy—auto HTTPS + simple configuration. Those who've used Caddy all say it's good.

Finally attaching the zoraxy author's introduction of their project—hear about the author's usage approach.

[Author's video sharing on coscup platform](https://youtu.be/SnAIN7oaLW4?si=bOyLCvjIUZ_6N0QO)

![Author's video sharing on coscup platform](https://cdn.sa.net/2024/05/12/cLFtoJXB1Ihanku.webp)

Today's experiment machine for this blog post is from techvm, a Chinese one-man operation. I saw techvm's owner had unclear dealings with recently absconded Tu'an Cloud, so last night I migrated all services from techvm's big server to rackerd's Black Friday machine. After finishing blog demo tonight, letting this monthly server expire naturally.

Although 4 cores, 12GB RAM, 50GB disk, 9929 routing at 35 RMB/month VPS looks tempting, after Tu'an Cloud's incident I no longer trust Chinese one-man operations—nor foreign one-man operations. Buy VPS from reputable vendors and big providers.

I originally had Tu'an Cloud's West Coast 133 package + New Year 299 package. Fortunately on May 11th I received partial refunds for both packages. Plus no important data on Tu'an Cloud machines—this experience serves as a wake-up call. Be a rational VPS enthusiast—staying away from one-man operations is the right path!
