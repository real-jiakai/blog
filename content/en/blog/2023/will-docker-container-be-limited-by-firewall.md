---
title: "Are Docker Container Services Not Limited by Firewall?"
date: 2023-03-07T11:15:46+08:00
slug: "will-docker-container-be-limited-by-firewall"
tags: ["docker","linux"]
summary: Solutions for Docker container services bypassing firewall restrictions.
---

Recently when running Docker services on a GreenCloud VPS, I noticed a strange phenomenon. When running a Memos container, UFW didn't allow the corresponding port, but I could still access the Memos container service via IP address:5230.

![Memos accessible](https://vip2.loli.net/2023/03/07/7XokAc2jrZi6spD.webp)

The Memos docker-compose.yml file is shown below:

```yaml
version: '3'
services:
  memos:
    image: neosmemo/memos:latest
    container_name: memos
    ports:
      - "5230:5230"
    volumes:
      - ~/.memos:/var/opt/memos
    restart: always
```

Let's focus on the ports field:

```yaml
    ports:
      - "5230:5230"
```

This code means mapping container port 5230 to host port 5230. This allows the host and other devices to access applications in the container through port 5230.

Being able to access the Memos application via IP address:5230 means the host's port 5230 is open.

Using nmap tool to probe the target host's port status:

```bash
# Scan if port 5230 is open on specified IP address
nmap -p 5230 xx.xx.xx.xx
```

![nmap 5230](https://vip2.loli.net/2023/03/07/4JQk6yeBWGO3R9V.webp)

GreenCloud VPS's port 5230 is open.

```bash
# Use nmap for full port scan on target IP xx.xx.xx.xx
# -T4 uses higher scan speed (4 threads), -p- scans all ports
nmap -T4 -p- xx.xx.xx.xx
```

![GreenCloud VPS port status](https://vip2.loli.net/2023/03/07/HycXLsuaOmSErhk.webp)

Full port scan reveals that besides UFW's listed ports 22, 80, 443, ports 3002 and 5230 are also open. Port 3002 is the mapped port between the chatgpt-web project Docker container and host.

```bash
# Show current firewall status
ufw status
```

![UFW status](https://vip2.loli.net/2023/03/07/YsLXlOP1BMn9K5q.webp)

Checking the chatgpt-web docker-compose.yml file shows the same ports field:

```bash
    ports:
      - 3002:3002
```

Stack Overflow users have discussed this issue: [Uncomplicated Firewall (UFW) is not blocking anything when using Docker](https://askubuntu.com/questions/652556/uncomplicated-firewall-ufw-is-not-blocking-anything-when-using-docker)

![UFW not block anything](https://vip2.loli.net/2023/03/07/nrUqHlTf5gd6JE4.webp)

The top answer explains: Docker makes changes directly to iptables, and these changes don't show in UFW status. For those using reverse proxy servers to proxy corresponding ports, the best solution is to modify the ports field in docker-compose.yml to:

```yaml
    # Map host port 3002 to Docker container port 3002, allowing host applications
    # to access applications in Docker container via 127.0.0.1:3002
    ports:
      - 127.0.0.1:3002:3002
```

This ensures only processes on this host can access port 3002; external parties cannot access services on port 3002.

Using a reverse proxy server like Caddy, listening on ports 80, 443, when new HTTP(S) requests come in, Caddy receives them and forwards them to the corresponding port on this host. The port returns a response, and Caddy forwards the proxy target's response to the user.

![Caddy reverse proxy flow](https://vip2.loli.net/2023/03/07/v7lJoRbcjnN8fM6.webp)

The reason UFW can't control Docker-host mapped ports is that Docker directly operates iptables to allow corresponding ports. Here's New Bing's tree diagram:

![iptables and UFW](https://vip2.loli.net/2023/03/07/zhb2eKlZfHFxWpd.webp)

To better control Docker-host mapped ports, add 127.0.0.1 before the ports field, allowing only this host to access mapped ports - let the reverse proxy server access the corresponding ports, retrieve content, and return it to the requester.

Modify the ports field in docker-compose.yml:

![Modify ports field](https://vip2.loli.net/2023/03/07/VnPiSHj9df6mtOF.webp)

Then restart services defined by docker-compose.yml:

![Restart services](https://vip2.loli.net/2023/03/07/NJKqarH5cCjAE9O.webp)

Now using IP address:5230 or nmap to probe port 5230 shows it's no longer accessible, as this port only allows internal host access (127.0.0.1 loopback address at work).

![nmap 5230 port filtered](https://vip2.loli.net/2023/03/07/KMZD7xbIdgBTAPY.webp)

Then configure with a reverse proxy server, using Caddy as an example:

```bash
# Edit Caddy's default config file
vi /etc/caddy/Caddyfile

# Add the following content
memos.gujiakai.top {
    reverse_proxy localhost:3002
}
# Reload Caddy
systemctl reload caddy
```

After this, you can access the Memos service via domain name.

![Successfully access Memos](https://vip2.loli.net/2023/03/07/7FozjDCnXIsv2p9.webp)

This approach provides port security control and reduces unnecessary port exposure on the internet.

Although some major cloud providers like Alibaba Cloud and AWS wrap an additional firewall layer around servers, requiring port allowance in the firewall control panel, I recommend developing good habits. This way, whether using VPS from major providers or smaller vendors, there's a standard to follow.
