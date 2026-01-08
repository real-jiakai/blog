---
title: "Experience Sharing on Ikihost IP Change Ordeal"
date: 2024-03-17T15:01:23+08:00
tags: ["vps"]
slug: "experience-sharing-on-ikihost-ip-change-ordeal"
summary: Sharing experiences gained from the Ikihost IP change ordeal.
showtoc: true
---

## Event Timeline

A few days ago I received an email from Ikihost VPS provider saying they would perform maintenance and change IPs in a few days. I didn't take it to heart at the time because after the IP change, I only needed to update DNS resolution records.

![Ikihost announces IP change completion](https://cdn.sa.net/2024/03/17/FpD3I7AGEZHVdfL.png)

Yesterday I received the notification email from Ikihost announcing IP change completion, so I immediately went to Cloudflare's DNS resolution, searched for the old IP address, and changed the search results' DNS record values to the new IP address.

After completing the operation, I found all websites were down, and SSH connection also failed. Logging into the vendor's VirtFusion VPS console, the VPS was still running, so I used VNC to log in and check, only to see this error message:

![VPS error message](https://cdn.sa.net/2024/03/17/i4NGxJTMoKeHE8X.webp)

Sending the image to AI tools plus my own searching, I couldn't find repair methods I could try, so I opened a ticket hoping to get support.

While opening the ticket, I also started preparing to extract the data inside.
Unfortunately, I searched all over the VirtFusion VPS console but couldn't find a rescue mode button.

Yesterday's battle with customer service got a reply that I could insert an ISO image and use rescue mode to extract any of my data anytime.

![Customer service reply](https://cdn.sa.net/2024/03/17/h3iNPLyZOmjnwsS.webp)

But I found the vendor's VirtFusion panel didn't provide pre-made ISO images for rescue mode to extract data—I needed to customize the ISO image.

![Vendor's VirtFusion panel didn't provide pre-made ISO images for rescue mode](https://cdn.sa.net/2024/03/17/MC2Hq7AoxJOSbdT.webp)

So my last reply to customer service yesterday expressed that I would wait patiently and let them fix it slowly.

![Reply expressed I would wait patiently and let them fix it slowly](https://cdn.sa.net/2024/03/17/xDkUM95QBOmarz2.webp)

This morning, on a whim, I prepared to set up a custom ISO, enter rescue mode, access the filesystem, and extract files from my four sites. Below is my experience sharing from today's tinkering.

## Extracting Files in Rescue Mode

Set custom CD/DVD, link: `https://gemmei.ftp.acc.umu.se/debian-cd/current/amd64/iso-cd/debian-12.5.0-amd64-netinst.iso`, click Insert. Since this VPS runs Debian 12, I chose the Debian 12 CD image.

Set boot order to CD/DVD, click Apply, then shutdown and restart.

![Customize CD/DVD-ROM. Adjust boot order](https://cdn.sa.net/2024/03/17/ByxChtvYN43knKA.webp)

Open VNC interface. Select `Advanced options`.

![Select `Advanced options`](https://cdn.sa.net/2024/03/17/VaLF2uEXgt1rcS9.webp)

In the next interface, select `Rescue mode`.

For manual network configuration, get the info from the VPS's VirtFusion panel network page.

![Manual network configuration info can be found on VPS's VirtFusion panel network page](https://cdn.sa.net/2024/03/17/DePYJHLdifXQvyV.webp)

Then select `/dev/vda1` as the filesystem.

![Select `/dev/vda1` as filesystem](https://cdn.sa.net/2024/03/17/osqfXy5Ag2BLkDz.webp)

Select `Execute a shell in /dev/vda1` option.

![Select `Execute a shell in /dev/vda1` option](https://cdn.sa.net/2024/03/17/V6dEbstvTYeyBp1.webp)

Successfully entered filesystem.

![Successfully entered filesystem](https://cdn.sa.net/2024/03/17/fzgmxo4Gj5dXSqp.webp)

Since network is configured, internet access is available now.

![Since network is configured, internet access is available now](https://cdn.sa.net/2024/03/17/9bEBOranjqhD5R1.webp)

Use rsync command to sync files to remote server. Example:

```bash
# Use rsync to sync local /opt/file_share/ directory to remote server's /opt directory
# -a, --archive               archive mode, equals -rlptgoD (no -H), preserve file attributes
# -v, --verbose               verbose output
# -z, --compress              compress data during transfer
# -P                          equals --partial --progress, show transfer progress, allow partial file transfer
# /opt/file_share/            local directory path, source directory to sync
# root@ip_address:/opt        target directory path, format: username@server_IP:target_directory
# If remote VPS SSH port isn't 22, add -e "ssh -p ssh_port"
rsync -avzP /opt/file_share/ root@ip_address:/opt
```

After successfully bringing all four sites online on the remote server, it's time to say goodbye to Ikihost! Machine performance isn't bad, but this incident made me wary. Plus I have plenty of server resources on hand, so I won't renew this Ikihost!

![rm -rf /* farewell](https://cdn.sa.net/2024/03/17/Xc4zZPd8fSgQCnU.webp)

Offline for nearly two days, still not fixed. Vendor repair efficiency needs improvement.

![Offline for nearly two days, still not fixed. Vendor repair efficiency needs improvement](https://cdn.sa.net/2024/03/17/IECQ4NTOrx7BwHV.webp)

Deleted Ikihost-related info from Nezha panel.

![Deleted Ikihost-related info from Nezha panel](https://cdn.sa.net/2024/03/17/ez4Sr1bgC8wqRQM.webp)

Customer service hasn't replied today either. This ticket efficiency is concerning. All four sites have been transferred to RackNerd's Black Friday big VPS.

![Customer service ticket efficiency is concerning](https://cdn.sa.net/2024/03/17/8KvfdsEHDYTgrIW.webp)

RackNerd 23 Black Friday big VPS already had CyberPanel installed. Today I briefly tried CyberPanel—not bad. Especially OpenLiteSpeed web server's auto index feature for displaying file lists—I really like it, with the minimalist beauty of Caddy's file_server.

![OpenLiteSpeed web server's auto index feature for file list display—I really like it](https://cdn.sa.net/2024/03/17/eUplBEyG3iFSDAV.webp)

## Summary

This incident further reminds me to do good backup work for server-related files. Today I successfully retrieved files through VNC rescue mode. If someday files can't be recovered due to VPS provider failures, that would be a big loss.

Also, important files or sites must choose reliable VPS providers for hosting. Of course I'm not saying Ikihost is completely unreliable, just from my personal experience, Ikihost has some distance from being reliable. Ticket speed, service quality—these are VPS providers' foundation. If not done well enough, they can't be called reliable.
