---
title: "Lightsail Migration to IPv6-only Instance Process Record"
date: 2024-01-28T18:29:40+08:00
tags: ["vps","lightsail"]
slug: "migrating-to-ipv6-only-instance-on-lightsail"
summary: Recording the process of migrating Lightsail to IPv6-only instance.
showtoc: true
---

AWS Lightsail is about to raise prices. For IPv6-only machines, the price remains $3.5/month. This afternoon I had time and migrated my Lightsail instance to an IPv6-only model. Recording this here.

![AWS Lightsail about to raise prices](https://cdn.sa.net/2024/01/28/boYyrR541mcPqFS.webp)

## 1. Migration Steps

Create a snapshot on the original Lightsail instance page.

![Create snapshot on original Lightsail instance page](https://cdn.sa.net/2024/01/28/DHpevcA2goFzU9x.webp)

Then create a new IPv6-only instance from the snapshot.

![Create new IPv6-only instance from snapshot](https://cdn.sa.net/2024/01/28/aEjquHp1N9WwCev.webp)

## 2. Issues Encountered During Migration

### 2.1 SSH Connection

After migrating to the new IPv6-only instance, SSH connection requires your local network to have an IPv6 address.

If your local network doesn't have an IPv6 address, only IPv4, you need to connect through something like a jump server (with IPv4+IPv6 dual-stack).

![SSH to IPv6-only machine requires local network to have IPv6 address](https://cdn.sa.net/2024/01/28/PnZIVJ8YTurWg2S.webp)

Since my home WiFi network has a soft router between the modem and router, and I disabled IPv6 on the soft router, my computer connected to this network also doesn't have an IPv6 address.

My solutions:

- Computer connects to phone data hotspot. Phone data hotspot shares network with IPv6 address, so SSH connection works.

- Use relay service like NNR. Add a forwarding rule in NNR relay service management console, then use NNR's provided IP:port for SSH connection. [Because NNR relay machines are IPv4+IPv6 dual-stack, my local connects to NNR's relay machine, NNR's relay machine accesses my Lightsail IPv6-only instance.]

![Add forwarding rule in NNR relay service management console](https://cdn.sa.net/2024/01/28/BcDNvTRUzJI41Pi.webp)

After clarifying my thoughts, I encountered trouble during actual operation—SSH couldn't connect, and pinging my Lightsail IPv6-only instance's IPv6 address from anywhere in the world failed [I had already allowed the corresponding ports in Lightsail management interface networking—ICMP and SSH ports were both allowed]

![Allowed corresponding ports in Lightsail IPv6-only management interface networking](https://cdn.sa.net/2024/01/28/91cOTVSBy8vnQYL.webp)

Both solutions above failed. Just when I was at a loss, I remembered disabling Lightsail's IPv6 in the first half of the year. I saw a post online saying route optimization providers generally only optimize IPv4, not IPv6, so I used this one-liner script to disable IPv6 on Lightsail:

```bash
echo -e "net.ipv6.conf.all.disable_ipv6=1\nnet.ipv6.conf.default.disable_ipv6=1\nnet.ipv6.conf.lo.disable_ipv6=1" >> /etc/sysctl.conf
```

With IPv6 disabled, of course I couldn't connect. Now I had to first enable IPv6 on the original Lightsail [IPv4+IPv6 dual-stack], recreate a snapshot, then create an IPv6-only instance from the snapshot.

![Disabling IPv6 caused SSH connection failure](https://cdn.sa.net/2024/01/28/WC5UeMHEFXR4bKV.webp)

After enabling IPv6 [changing the disable IPv6 parameters in sysctl.conf to 0 or deleting them], recreate the snapshot. The IPv6-only instance created from the new snapshot can be successfully connected using the two solutions mentioned above.

### 2.2 Changing Cloudflare DNS Records

Changed the original A record to AAAA record, updated record value to the new IPv6-only Lightsail machine's IPv6 address, cleared Cloudflare cache, waited a moment then accessed the domain, only to find web server is down.

![Changed DNS resolution but found web server is down](https://cdn.sa.net/2024/01/28/dJirjweo5Vbft97.webp)

At first I thought it was a cache issue, so I went to eat dinner and take a shower. Coming back to the computer and accessing again, still the same error.

Time to ask GPT for ideas.

![GPT providing ideas](https://cdn.sa.net/2024/01/28/6lZ2epsJx3bCzDH.webp)

The server port configuration point mentioned made a lot of sense, because when I manually wrote an nginx reverse proxy config file for local ports, I was only listening on ports 80 and 443 on IPv4 addresses, not on IPv6 addresses. Following GPT's hint, I added fields to listen on ports 80 and 443 on IPv6 addresses in the original config file's server block:

- listen [::]:80;

- listen [::]:443 ssl http2;

After reloading nginx and accessing the domain again, I successfully got the domain's corresponding service.

![After adding nginx listening on IPv6 ports 80 and 443, successfully got RSS-Bridge service](https://cdn.sa.net/2024/01/28/E2MtL9bHRBGPgOs.webp)

### 2.3 Enhancing IPv4 Access Capability

Use WARP script to add IPv4 outbound to VPS.

```bash
wget -N https://gitlab.com/fscarmen/warp/-/raw/main/menu.sh && bash menu.sh
```

![Use WARP script to add IPv4 outbound](https://cdn.sa.net/2024/01/28/LXmZgzPvVIbfDNn.webp)

Or use NAT64 service, changing the IPv6-only VPS's DNS server to the DNS64 server address provided on the NAT64 page.

![NAT64 service can also enhance IPv6-only machine's IPv4 access capability](https://cdn.sa.net/2024/01/28/OVbXdRqEc2B3nKs.webp)

Choose either method. I used the WARP script to add IPv4 outbound to enhance my IPv6-only Lightsail's ability to access IPv4 addresses.

## 3. Summary

After migration, don't forget to delete the snapshot and the previous IPv4+IPv6 dual-stack machine!

Lightsail's original $3.5 plan: 1 vCPU, 512MB RAM, 20GB disk, IPv4+IPv6 dual-stack.

After price increase, the $5 plan: 2 vCPU, 512MB RAM, 20GB disk, IPv4+IPv6 dual-stack. The new $3.5 plan: 2 vCPU, 512MB RAM, 20GB disk, IPv6-only.

![Lightsail's new plans have price increases alongside spec improvements](https://cdn.sa.net/2024/01/28/y1c7Fr54oIdpqJQ.webp)

The new VPS instances have improvements in CPU cores, threads, frequency, and instruction set support—worth praising. AWS's IPv4 charging measure will further promote IPv6 adoption and might inspire competitors to follow suit.

I originally opened Lightsail because of its excellent feature of automatically changing IPv4 address on machine restart. Now my motivation to continue renewing is that my AWS credits haven't run out. Maybe when I exhaust my discount credits, I won't renew Lightsail anymore.

![My AWS discount credits haven't run out, motivating me to continue renewing Lightsail](https://cdn.sa.net/2024/01/28/M8cB4ZjnQ3LPEHG.webp)

That's all for now. If I have new insights during future tinkering, I'll supplement this.
