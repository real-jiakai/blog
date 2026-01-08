---
title: "Self-Hosted Kasm Workspaces"
date: 2025-03-31T8:40:02+08:00
tags: ['kasmworkspaces']
slug: "self-hosted-kasm-workspaces"
summary: Sharing my experience self-hosting Kasm Workspaces.
showtoc: true
---

## Update (2025.4.15)

- About seamless clipboard

Seamless clipboard supports copying images directly from local clipboard to Chrome browser in Kasm Workspaces. Attaching images doesn't need file upload as described below.

![Seamless clipboard supports copying images directly from local clipboard to Kasm Workspaces Chrome browser](https://cdn.sa.net/2025/04/15/XhQre1ZIlTD5up3.webp)

Supplement: Sometimes this method works, sometimes fails—feels unstable. This seamless clipboard has bugs.

- About datacenter IPs

OpenAI indeed dumbs down models based on datacenter IPs. Example: I logged into ChatGPT on a garbage VPS from Colocrossing's Windows VPS, asked o3-mini-high to think and write code comments—thought for 7s. Used common dumbing-down detection prompt: `summarize your tool in a markdown table with availability.` Found only 4 tools (missing US election tool). Non-dumbed-down ChatGPT has at least as many tools as below. Immediately decided not to renew Colocrossing this year.

If your VPS IP isn't clean, don't set up Kasm Workspaces to play with AI.

![OpenAI non-dumbed-down tools display](https://cdn.sa.net/2025/04/15/1PLhTjb6zVEvBct.webp)

On a lesser-known US datacenter VPS [US East machine], logged into ChatGPT, asked o3-mini-high to think and write code comments—thought for over 2 minutes.

Indeed for OpenAI AI services, not just US residential IPs get full power—obscure clean datacenter IPs can also shine.

![Non-dumbed-down o3-mini-high takes long time thinking for code comments](https://cdn.sa.net/2025/04/15/y7rztVh8gHFmfbZ.webp)

## Update (2025.4.3)

Actually this solution's experience isn't as good as remote Windows desktop. Even with datacenter IP, remote Windows desktop's proxy characteristics basically only have IP type issues—other characteristics are eliminated.
Plus if it's California machine, latency is low—good experience. Copying images, uploading files etc. much easier than Kasm Workspaces.

Kasm Workspaces suits friends who don't want VPS as Windows but want good disguise for AI. Using overseas AI on East Asia timezone computers—might get telemetry detected someday.
Traffic splitting isn't foolproof. Fingerprint browsers also feel lacking.

![Remote desktop is the best solution](https://cdn.sa.net/2025/04/03/W1HzaxjCUeugF8P.webp)

## Background

First time using Kasm Workspaces was 2023. Set up non-Docker version on a HostHatch Singapore machine but didn't dig deep—just set up, tried various Workspaces like Chrome, Ubuntu desktop.

![First time using Kasm Workspaces was 2023](https://cdn.sa.net/2025/03/31/2K4GinvjZqeswzo.webp)

Let Claude 3.7 Sonnet briefly introduce Kasm Workspaces.

![Claude 3.7 Sonnet briefly introduces Kasm Workspaces](https://cdn.sa.net/2025/03/31/kyHpLFqZOPRGXNt.webp)

Desktop-as-a-service is actually very practical use case.

Then let Gemini 2.5 Pro explain the Workspaces concept.

![Gemini 2.5 Pro explains Workspaces concept](https://cdn.sa.net/2025/03/31/2tENKUhbDknJZdy.webp)

## Prerequisites

- Preferably a VPS with IPv4 address and decent specs (4GB+ RAM)

IPv6-only VPS—I found during setup that after completing Kasm Workspaces installation wizard, couldn't login to Kasm Workspaces page despite correct credentials. Didn't investigate this bug—might only trigger in my test, not necessarily on IPv6-only machines.

Official docs list minimum requirements: 2 cores, 4GB, 50GB[^1].

![Official minimum requirements for installing Kasm Workspaces](https://cdn.sa.net/2025/03/31/SDyKwL3nXvIGqQo.webp)

- Preferably a clean Linux system

Some VPS providers' Linux templates aren't great—Docker-based KasmWorkspaces encounters various strange issues. Initially on my high-spec machine, self-hosting KasmWorkspaces had almost no issues. But while writing this article, testing machine had various bugs—process was frustrating. Recommend friends wanting to self-host choose a dd'd clean Linux system.

## Setup Process

Setup follows docker-kasm project[^2].

```bash
# Create kasm directory and enter
mkdir kasm && cd kasm
# Use vim to open or create compose.yml
vim compose.yml
```

compose.yml [note host ports 8443, 3000 are free]:

```yaml
---
services:
  kasm:
    image: lscr.io/linuxserver/kasm:latest
    container_name: kasm
    privileged: true
    environment:
      - KASM_PORT=8443
    volumes:
      - ./data:/opt
      - ./profiles:/profiles
    ports:
      - 8443:8443
      - 3000:3000
    restart: unless-stopped
```

```bash
# Start services defined in compose.yml in background (detached mode)
docker compose up -d
```

Visit `https://your_ip:3000` to enter Kasm Workspaces installation wizard.

![Visit `https://your_ip:3000` to enter Kasm Workspaces installation wizard](https://cdn.sa.net/2025/03/29/O2bA7ZXreJRqoMP.webp)

Enter admin password, continue.

![Enter admin password, continue](https://cdn.sa.net/2025/03/29/iYjXuLwvCTo1qW7.webp)

Choose Chrome, Edge, or Brave browser [pick one], click install.

![Choose Chrome, Edge, or Brave browser, click install](https://cdn.sa.net/2025/03/29/zplkWPdDKBm8VCA.webp)

After download completes.

![Wait for image download to complete](https://cdn.sa.net/2025/03/29/Ai3KSdOGZE5tJXW.webp)

Visit `https://your_ip:8443/` to reach Kasm Workspaces login page.

Enter username `admin@kasm.local` and password from installation wizard to login.

## User Settings

First thing after entering—don't immediately Launch app Session. Do user settings first.

Can run this command on VPS to get timezone.

```bash
# Get VPS IP info
curl ipinfo.io/json
```

For example I got `"timezone": "America/New_York"`.

Then in Kasm Workspaces, click admin avatar at top right for Edit Profile.

![Click admin avatar at top right for Edit Profile](https://cdn.sa.net/2025/03/30/oTUyXQ5Ia8VM7sx.webp)

Set Kasm UI Language to `English`;

Set Kasm Session Language to `English: United States of America`;

Set Kasm Session Timezone to VPS's timezone.

![User settings](https://cdn.sa.net/2025/03/30/V5TrI3sYNd8RlMx.webp)

Other settings as needed, like two-factor auth.

## Persistent Profiles

Reason for persistent profiles—Kasm Workspaces by default doesn't save user Profiles config[^3]. For example, if I login to ChatGPT in this Session, next Session requires re-login. With persistent profiles, only need to login ChatGPT first Session—next Session ChatGPT is already logged in.

Click `ADMIN` at top for related settings.

Click Workspaces—>Workspaces on left. My demo initially installed Brave browser. Click Brave browser's Edit button.

![Edit Brave browser](https://cdn.sa.net/2025/03/31/GoxPaLXZpivDRez.webp)

In `Persistent Profile Path` enter `/profiles/brave/{username}/`. If default app is Chrome, can set `/profiles/chrome/{username}`. Then click Save to update Workspace settings.

![Enter `/profiles/brave/{username}/` in Persistent Profile Path and save](https://cdn.sa.net/2025/03/31/58LUZdmXgFOGiMA.webp)

Now when Launching Brave browser, you'll see `Persistent Profile` option. Enable it.

![Enable Persistent Profile option](https://cdn.sa.net/2025/03/31/an6bUZQLYFoD94N.webp)

Now launch Brave browser, login ChatGPT.

![Launch Brave browser, login ChatGPT](https://cdn.sa.net/2025/03/31/WHAJVZMBmhNaRtf.webp)

Then Delete Session from left control panel.

![Delete Session from left control panel](https://cdn.sa.net/2025/03/31/m6Br91h2wgte48o.webp)

Next time launching Brave browser, ChatGPT is still logged in—this is the magic of persistent profiles.

![Next launch Brave browser, ChatGPT still logged in—magic of persistent profiles](https://cdn.sa.net/2025/03/31/sxrOLcWG5DCVYoE.webp)

## Other

In ADMIN—>Access Management—>Users, can add and delete users.

![Add and delete users in Users option](https://cdn.sa.net/2025/03/31/QrMSf2Fky8eKZdb.webp)

I deleted user@kasm.local and added custom user.

Can open Kasm Workspaces page (`https://your_ip:8443`) in another local browser, login with new custom user credentials.

New user's first thing after login—still do user settings [refer to earlier section for language, timezone settings].

Then we can login Claude account in this Session.

![Login Claude account in this Session](https://cdn.sa.net/2025/03/31/nDv3m9pRwhxigdy.webp)

Since we enabled persistent user config, deleting this Session and reopening—Claude still logged in.

![Since persistent user config enabled, deleting Session and reopening—Claude still logged in](https://cdn.sa.net/2025/03/31/DnCa9oYkNjdU2wl.webp)

## Cleanup

Set Zone Proxy Port to 0 [needed for reverse proxy][^4]:

ADMIN—>Infrastructure—>Zones—>default—Edit

![Edit default Zone](https://cdn.sa.net/2025/03/31/Io3ilGN6tQedOzh.webp)

Change Proxy Port from 8443 to 0 and Save.

![Change Proxy Port from 8443 to 0 and Save](https://cdn.sa.net/2025/03/31/uqg6NV3o4p1QtXd.webp)

Caddy reverse proxy config [make sure domain has proper A record][^5]:

```Caddyfile
kasm.example.com {
    reverse_proxy https://127.0.0.1:8443 {
      transport http {
        tls_insecure_skip_verify
      }
    }
}
```

```bash
# Reload caddy
systemctl reload caddy
```

Then access Kasm Workspaces via domain `kasm.example.com`.

Update Kasm Workspaces compose.yml to reduce exposed ports:

```yaml
services:
  kasm:
    image: lscr.io/linuxserver/kasm:latest
    container_name: kasm
    privileged: true
    environment:
      - KASM_PORT=8443
    volumes:
      - ./data:/opt
      - ./profiles:/profiles
    ports:
      - 127.0.0.1:8443:8443
    restart: unless-stopped
```

```bash
# Stop and remove all containers, networks, volumes and images created by Docker Compose, start services in background
docker compose down && docker compose up -d
```

To install other Workspaces, select from ADMIN—>Workspaces—>Registry.

![To install other Workspaces, select from ADMIN—>Workspaces—>Registry](https://cdn.sa.net/2025/03/31/Ch9c7q42iXlVeIA.webp)

For AI queries, text content uses copy-paste. Kasm supports seamless clipboard for Chromium-based browsers[^6].

For copying images and other files—use left control panel's Upload plus AI chat interface's Upload feature.

![For copying images and other files—use left control panel's Upload plus AI chat interface's Upload feature. Image 1](https://cdn.sa.net/2025/03/31/Gm1OWgksjvMlnFK.webp)

![For copying images and other files—use left control panel's Upload plus AI chat interface's Upload feature. Image 2](https://cdn.sa.net/2025/03/31/HYFrbXaEGITZ6gP.webp)

After uploaded images accumulate, can clean up in profiles-related folders.

![After uploaded images accumulate, can clean up in profiles-related folders](https://cdn.sa.net/2025/03/31/HDX3dAFbrUPmVzs.webp)

## Use Cases

- ChatGPT, Claude and other network-sensitive scenarios
- AI account sharing
- ......

My current use case—one local browser opens Kasm Workspaces ChatGPT, another opens Kasm Workspaces Claude. Used for over a week—experience is decent.

## Summary

Current AI services don't necessarily need residential IP—not just residential IP avoids bans. I've given up on residential IP. Datacenter IP works fine as long as your datacenter isn't Chinese-heavy [especially US West], IP isn't too dirty. For example, ensure [proxydetect.live](https://proxydetect.live/) detects only 2 proxy characteristics—greatly reduces dumbing-down and ban risks.

![Fewer proxy characteristics greatly reduces dumbing-down and ban risks](https://cdn.sa.net/2025/03/29/8MCub5apfF1incQ.webp)

Of course using local proxy for overseas AI services with East Asia timezone characteristics might not be detected. But accessing OpenAI via Kasm Workspaces Chrome browser definitely eliminates this characteristic.

Both ChatGPT and Claude Kasm Workspaces running—nearly 4GB memory consumption.

![Both ChatGPT and Claude Kasm Workspaces running—nearly 4GB memory consumption](https://cdn.sa.net/2025/03/31/6EaNyGbTO8KJYWh.webp)

OpenAI—that villain—in a February report already more or less revealed how they conduct so-called security activities[^7]. Chinese prompts, Chinese working hours are significant characteristics. Not saying can't use Chinese prompts—there are many Chinese Americans, can't stare at Chinese forever.

![OpenAI is villain image 1](https://cdn.sa.net/2025/03/31/xcir1CuhjI3oVXp.webp)

OpenAI is truly a villain—curse them, still use them.

![OpenAI is villain image 2](https://cdn.sa.net/2025/03/31/TxMbBDwNtzJPS23.webp)

Eliminate obvious proxy characteristics via Kasm Workspaces, regularly clear chat history, destroy evidence—OpenAI definitely doesn't prioritize these accounts.

Recommend friends with high-spec machines wanting stable ChatGPT, Claude access to set this up.

[^1]: https://kasmweb.com/docs/latest/install/system_requirements.html#resource-requirements

[^2]: https://docs.linuxserver.io/images/docker-kasm

[^3]: https://kasmweb.com/docs/latest/guide/persistent_data.html#persistent-data

[^4]: https://kasmweb.com/docs/latest/how_to/reverse_proxy.html#update-zones

[^5]: https://kasmweb.com/docs/latest/how_to/reverse_proxy.html#example-caddy-config

[^6]: https://kasmweb.com/cloud-personal/docs/latest/control_panel.html#clipboard

[^7]: https://cdn.openai.com/threat-intelligence-reports/disrupting-malicious-uses-of-our-models-february-2025-update.pdf
