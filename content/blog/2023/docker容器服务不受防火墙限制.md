---
title: "Docker容器服务不受防火墙限制？"
date: 2023-03-07T11:15:46+08:00
slug: "will-docker-container-be-limited-by-firewall"
tags: ["docker","linux"]
summary: 介绍Docker容器服务不受防火墙限制的解决方案。
---

最近在绿云vps上跑docker服务的时候，发现了一个奇怪的现象。如我运行memos容器时，ufw并没有放行相应端口，

但是却可以通过ip地址:5230的形式，访问到memos容器服务。

![memo时能访问](https://vip2.loli.io/2023/03/07/7XokAc2jrZi6spD.webp)

memos的docker-compose.yml文件如下所示。

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

其中我们重点关注ports字段。

```yaml
    ports:
      - "5230:5230"
```

这段代码的意思是将容器的5230端口映射到宿主机的5230端口。这样做可以让宿主机和其他设备可以通过5230端口访问容器内的应用程序。

我能通过ip地址:5230的形式访问到memos应用程序，说明宿主机的5230端口处于开放状态。

采用nmap工具对目标主机的端口开放情况进行探测。

```bash
# 扫描指定ip地址的5230端口是否开放
nmap -p 5230 xx.xx.xx.xx
```

![nmap 5230](https://vip2.loli.io/2023/03/07/4JQk6yeBWGO3R9V.webp)

绿云vps的5230端口处于开放状态。

```bash
# 使用nmap工具对目标IP地址为xx.xx.xx.xx的主机进行全端口扫描，
# 选项-T4表示使用较高的扫描速度（4表示4个线程），选项-p-表示扫描所有端口。
nmap -T4 -p- xx.xx.xx.xx
```

![绿云vps端口开放情况](https://vip2.loli.io/2023/03/07/HycXLsuaOmSErhk.webp)

扫描全端口，发现除了ufw罗列出来的22、80、443端口外，还有3002和5230端口开放着。其中3002端口是chatgpt-web项目docker容器内和主机之间映射的端口。

```bash
# 显示当前防火墙状态
ufw status
```

![ufw状态](https://vip2.loli.io/2023/03/07/YsLXlOP1BMn9K5q.webp)

查看了chatgpt-web的docker-compose.yml文件发现，也同样存在这样的ports字段。

```bash
    ports:
      - 3002:3002
```

stackoverflow上网友们对于此问题也进行了讨论。[Uncomplicated Firewall (UFW) is not blocking anything when using Docker](https://askubuntu.com/questions/652556/uncomplicated-firewall-ufw-is-not-blocking-anything-when-using-docker)

![ufw not block anything](https://vip2.loli.io/2023/03/07/nrUqHlTf5gd6JE4.webp)

高分回答中指明：docker会直接在iptables上做相关的调整，这些调整并不会显示在ufw的状态上。对于用反向代理服务器来代理相应端口的朋友来讲，最好的解决方案是将docker-compose.yml文件中的ports字段调整为如下形式：

```yaml
    # 将主机的3002端口映射到Docker容器内的3002端口上，从而让主机上的应用程序可以通过
    # 127.0.0.1:3002访问Docker容器内的应用程序。
    ports:
      - 127.0.0.1:3002:3002
```

这样可以保证仅允许本主机上的进程访问本主机的3002端口，外界无法获取本主机3002端口上的服务。

借助反向代理服务器，如caddy，让其监听80、443端口，当外部有新的http(s)请求时，caddy接收到相关的请求，并将相关的请求转交给本主机上的相应端口，相应端口接收请求后返回响应，caddy再将代理目标返回的响应转发给用户。 

![caddy反向代理的流程](https://vip2.loli.io/2023/03/07/v7lJoRbcjnN8fM6.webp)

之所以ufw无法管控相应的docker与主机之间的映射端口，是因为docker会直接操作iptables来放行相应的端口。附new bing给出的树形图。

![iptables和ufw](https://vip2.loli.io/2023/03/07/zhb2eKlZfHFxWpd.webp)

为了更好地管控docker与主机之间的映射端口，以后最好将ports字段前加上127.0.0.1，仅允许本主机访问映射端口，即让反向代理服务器去访问相应端口，取回相应内容，并返回给请求方。

修改docker-compose.yml中的ports字段。

![修改ports字段](https://vip2.loli.io/2023/03/07/VnPiSHj9df6mtOF.webp)

并重启由docker-compose.yml文件定义的相关服务。

![重启服务](https://vip2.loli.io/2023/03/07/NJKqarH5cCjAE9O.webp)

这时再次使用ip地址:5230，或使用nmap探测5230端口，会发现已经无法访问，因为这个端口仅允许主机内部访问(127.0.0.1，环回地址在起作用)。

![nmap 5230端口被过滤](https://vip2.loli.io/2023/03/07/KMZD7xbIdgBTAPY.webp)

这时再搭配反向代理服务器，这里以caddy为例。

```bash
# 编辑caddy的默认配置文件
vi /etc/caddy/Caddyfile

# 添加以下内容
memos.gujiakai.top {
 	reverse_proxy localhost:3002
}
# 重新加载caddy
systemctl reload caddy
```

操作完成后，就能通过域名的形式访问到memos服务了。

![成功访问memos](https://vip2.loli.io/2023/03/07/7FozjDCnXIsv2p9.webp)

这样子操作，可以对于端口进行安全控制，减少非必要的端口在互联网上的暴露。

虽然有些大厂的服务器，如阿里云、aws等，会在服务器的外侧再包裹一层防火墙。要放行端口时，还需要到防火墙控制面板进行放行操作。
（这些大厂的vps上使用docker进行端口映射可以不加127.0.0.1的前缀，只要防火墙的控制面板不放行，就不会将服务的端口暴露到互联网上，所有服务的入口均为nginx占用的443端口。）但我建议平时就应该养成好习惯，这样子无论是大厂的vps，还是小众商家的vps，都有规范参照。