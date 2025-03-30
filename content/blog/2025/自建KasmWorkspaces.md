---
title: "自建KasmWorkspaces"
date: 2025-03-25T16:40:02+08:00
tags: []
slug: ""
summary: 
showtoc: false
draft: true
---

## 自建流程

```bash
mkdir kasm && cd kasm

vim compose.yml
```

compose.yml:

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
docker compose up -d
```

访问`https://your_ip:8443`，进入kasmweb安装向导。

![](https://cdn.sa.net/2025/03/29/O2bA7ZXreJRqoMP.webp)

输入管理员密码，继续下一步。

![](https://cdn.sa.net/2025/03/29/iYjXuLwvCTo1qW7.webp)

选择Chrome浏览器，点击安装。

![](https://cdn.sa.net/2025/03/29/zplkWPdDKBm8VCA.webp)

下载完毕后。

![](https://cdn.sa.net/2025/03/29/Ai3KSdOGZE5tJXW.webp)

访问`https://your_ip:8443/`，来到kasm workspaces的登录界面。

输入用户名`admin@kasm.local`，以及刚才在安装向导中输入的密码，进行登陆。

## 持久化配置文件

## 用户设置

## 总结

目前的AI服务并不一定需要家宽的加持，并不是只有家宽才不会被封号。机房IP照样能正常使用。比如确保在[proxydetect.live](https://proxydetect.live/)网站上检测到代理选项仅有2个特征，可以大大降低自己的AI服务账号降智、封号的风险。

![](https://cdn.sa.net/2025/03/29/8MCub5apfF1incQ.webp)

当然时区特征搞成东八区也不一定会被检测到。但通过kasm workspaces的chrome浏览器访问openai绝对可以消除这一特征。

## 参考资料

- [linuxserver docker-kasm](https://docs.linuxserver.io/images/docker-kasm)