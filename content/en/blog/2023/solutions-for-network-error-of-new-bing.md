---
title: "Solutions for New Bing Network Error: Sorry, looks like your network settings are preventing access to this feature"
date: 2023-03-26T16:29:47+08:00
tags: ['bing']
slug: "solutions-for-network-error-of-new-bing"
summary: Solutions for resolving New Bing network issues.
---

## Update

The warp-go script GitHub repository was banned by GitHub, and the warp-go script has been migrated to a GitLab repository.

- [via](https://t.me/ProjectWARP/89)

- [warp-go script GitLab repository](https://gitlab.com/fscarmen/warp)

***

Recently when accessing New Bing, I got this error message: `Sorry, looks like your network settings are preventing access to this feature`

![New Bing error](https://vip2.loli.net/2023/03/26/yLqhMwZKmBOtoi6.webp)

4 days ago, after encountering this problem, I found this post on Reddit's Bing community. [via](https://www.reddit.com/r/bing/comments/11xzumu/comment/jd6xxhb/)

At that time, I found that the sidebar New Bing worked fine, but accessing the New Bing chat full-screen webpage showed a network error.
So I replied to that person suggesting they could use the sidebar as a workaround.

Later, I saw people in Telegram groups with similar issues. The solution was to clear browser cache and re-login to the Bing interface with your account. That's how I solved the New Bing network issue 4 days ago.

Early this morning, I opened New Bing and encountered the issue again. I recalled a [post](https://www.v2ex.com/t/926788) I saw on V2EX yesterday. The discussion yielded two solutions: one was the classic Header Editor extension, and the other was installing the WARP client on Linux with SOCKS5 proxy mode enabled. I chose the latter.

- [warp-go script website](https://github.com/fscarmen/warp/blob/main/README.md#warp-go-%E8%BF%90%E8%A1%8C%E8%84%9A%E6%9C%AC)

> Update (2023.6.1): You can install the non-global WARP network interface from the start. There's no need to install global WARP first and then convert it to non-global like I did - that's redundant.

1. Run the warp-go script

```bash
# Download script and install WARP dual-stack
wget -N https://raw.githubusercontent.com/fscarmen/warp/main/warp-go.sh && bash warp-go.sh d
```

![Figure 1](https://vip2.loli.net/2023/03/26/schJ6VPHYf4SWzN.webp)

Select language.

![Figure 2](https://vip2.loli.net/2023/03/26/7hPlX6NOfKH8d2G.webp)

Select account type. Teams account is recommended.

![Figure 3](https://vip2.loli.net/2023/03/26/nEz1sP2YRocdOiF.webp)

Now you need to enter the Teams Token. To get this value, you must register for a Cloudflare Zero Trust account. See YouTuber Yong Ge's [video](https://www.youtube.com/watch?v=Se5kI07k9eA) for the Teams account registration section.

Enter Teams Token, select priority level 3-default.

![Figure 4](https://vip2.loli.net/2023/03/26/YwsOWNL8dBgfV9z.webp)

```bash
# Enter warp-go script configuration interface
warp-go
```

Select 3 to convert the VPS WARP network interface to non-global.

Then run `warp-go` again to see the following interface. Select 0 to exit the script.

![Figure 5](https://vip2.loli.net/2023/03/26/aSsKd6mxIuzkfnA.webp)

```bash
# Display information about all network interfaces on the system
ip a
# Use WARP network interface to access ip.gs, returning the IP address obtained through WARP interface
curl --interface WARP ip.gs
```

![Figure 6](https://vip2.loli.net/2023/03/26/WcyTPiZfV8Nlnhp.webp)

You can see an additional WARP virtual network card. Specifying the WARP virtual network card to access the IP site returns a completely different IP address from the VPS's own IP.

As for why specifying the WARP network interface returns a different IP than the local IP?

See ChatGPT-4's answer:

![ChatGPT-4's answer](https://vip2.loli.net/2023/03/26/MDkSofwOW2g4Lch.webp)

Since I already had the X-UI panel installed on this VPS. For X-UI panel installation, refer to YouTuber Buliang Lin's [video](https://www.youtube.com/watch?v=s90feRmdr9A).

Log into the X-UI admin panel and modify the default Xray configuration template.

![X-UI admin interface](https://vip2.loli.net/2023/03/26/9v5jfux1DiPXgJZ.webp)

> Update (2023.6.1): You can directly update geo data, then specify geosite:openai and geosite:bing in the outbound rules. The following rules are incomplete. Just follow the last section of this article.

Replace the default configuration with the following content, save the configuration, and restart the panel. Route traffic for www.bing.com and chat.openai.com through the WARP virtual network interface.

Other traffic goes through the main network interface (like eth0).

```json
{
  "api": {
    "services": [
      "HandlerService",
      "LoggerService",
      "StatsService"
    ],
    "tag": "api"
  },
  "inbounds": [
    {
      "listen": "127.0.0.1",
      "port": 62789,
      "protocol": "dokodemo-door",
      "settings": {
        "address": "127.0.0.1"
      },
      "tag": "api"
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",
      "settings": {},
      "tag": "direct"
    },
    {
      "protocol": "freedom",
      "settings": {},
      "streamSettings": {
        "sockopt": {
          "tcpFastOpen": true,
          "interface": "WARP"
        }
      },
      "tag": "warp"
    },
    {
      "protocol": "blackhole",
      "settings": {},
      "tag": "blocked"
    }
  ],
  "policy": {
    "system": {
      "statsInboundDownlink": true,
      "statsInboundUplink": true
    }
  },
  "routing": {
    "rules": [
      {
        "inboundTag": [
          "api"
        ],
        "outboundTag": "api",
        "type": "field"
      },
      {
        "domain": [
          "chat.openai.com",
          "www.bing.com"
        ],
        "outboundTag": "warp",
        "type": "field"
      },
      {
        "ip": [
          "geoip:private"
        ],
        "outboundTag": "blocked",
        "type": "field"
      },
      {
        "outboundTag": "blocked",
        "protocol": [
          "bittorrent"
        ],
        "type": "field"
      }
    ]
  },
  "stats": {}
}
```

> Note: Xray configuration template from ChatGPT-4.

After the above operations, using X-UI panel nodes allows access to chat.openai.com and www.bing.com.

References

- [v2ray + warp-go Non-global Cloudflare WARP to Unlock New Bing](https://blog.skyju.cc/post/v2ray-warp-go-unlock-new-bing/)

## Updated Version

```bash
# Update predefined domain rules
wget https://github.com/v2fly/domain-list-community/releases/latest/download/dlc.dat -O /usr/local/x-ui/bin/geosite.dat
```

Then replace the default Xray configuration template.

```json
{
  "api": {
    "services": [
      "HandlerService",
      "LoggerService",
      "StatsService"
    ],
    "tag": "api"
  },
  "inbounds": [
    {
      "listen": "127.0.0.1",
      "port": 62789,
      "protocol": "dokodemo-door",
      "settings": {
        "address": "127.0.0.1"
      },
      "tag": "api"
    }
  ],
  "outbounds": [
    {
      "protocol": "freedom",
      "settings": {},
      "tag": "direct"
    },
    {
      "protocol": "freedom",
      "settings": {},
      "streamSettings": {
        "sockopt": {
          "tcpFastOpen": true,
          "interface": "WARP"
        }
      },
      "tag": "warp"
    },
    {
      "protocol": "blackhole",
      "settings": {},
      "tag": "blocked"
    }
  ],
  "policy": {
    "system": {
      "statsInboundDownlink": true,
      "statsInboundUplink": true
    }
  },
  "routing": {
    "rules": [
      {
        "inboundTag": [
          "api"
        ],
        "outboundTag": "api",
        "type": "field"
      },
      {
        "domain": [
          "geosite:openai",
          "geosite:bing"
        ],
        "outboundTag": "warp",
        "type": "field"
      },
      {
        "ip": [
          "geoip:private"
        ],
        "outboundTag": "blocked",
        "type": "field"
      },
      {
        "outboundTag": "blocked",
        "protocol": [
          "bittorrent"
        ],
        "type": "field"
      }
    ]
  },
  "stats": {}
}
```

Save the configuration and restart the X-UI panel to route OpenAI and Bing traffic through the WARP virtual network interface.
