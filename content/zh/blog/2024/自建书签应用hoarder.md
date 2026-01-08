---
title: "自建书签应用—Karakeep(原Hoarder)"
date: 2024-10-05T15:53:21+08:00
tags: ["bookmark"]
slug: "self-hosted-bookmark-app-hoarder"
summary: 分享自建书签应用Karakeep(原Hoarder)的经验。
showtoc: true
---

## 更新(2025.4.7)

hoarder应用更名为了karakeep。由于商标纠纷，开发者被迫更名重塑品牌。

相关链接:

- https://www.reddit.com/r/selfhosted/comments/1i29pi1/hoarder_the_name_is_being_stolen_from_me/

- https://lemmy.world/post/27844912

- https://github.com/karakeep-app/karakeep

## 背景故事

今年的10月4号，我的raindrop会员正式到期。消费水平降级，我不打算续费会员。之后的许多会员服务，大概率也会被我抛弃掉。虽然SaSS服务，大概率会比开源替代品更加好用。

2024年的我，更倾向于将消费集中于AI服务【ChatGPT会员和Claude会员】、高质量代理【下期介绍目前我获取AI服务的配置】、假期吃喝玩乐等方面。

不知不觉，我的raindrop书签数量也已经来到了5k+，每当我看到有趣的网站，我就收藏一下。等到自己要用的时候，直接搜索即可。

![raindrop书签数量来到了5k+](https://cdn.sa.net/2024/10/05/ZORLiEmIJKYpaHn.webp)

raindrop也成了我写月刊的灵感来源，我的月刊里面会有“有趣”、“链享”等模块，这些模块的素材全部来自于raindrop。

![月刊部分模块灵感来源取自raindrop](https://cdn.sa.net/2024/10/05/frbh7t843onuSMJ.webp)

到期后，我开始寻找书签应用的替代品。正好前几天，看到Youtuber—[DBTech](https://www.youtube.com/@DBTechYT)分享了hoarder的自建的[视频](https://youtu.be/dklvlJ4YDtM?si=87y0zTS8T3B1nIwH)，看了视频演示感觉不错，于是乎我准备将其定为我的raindrop开源替代品。

## 自建过程

项目地址：[https://github.com/hoarder-app/hoarder](https://github.com/hoarder-app/hoarder)

文档地址：[https://docs.hoarder.app/](https://docs.hoarder.app/)

```bash
# 进入用户主目录，新建hoarder文件夹，进入新建的文件夹。
cd && mkdir hoarder && cd hoarder
# 下载docker compose文件
wget https://raw.githubusercontent.com/hoarder-app/hoarder/main/docker/docker-compose.yml

# 我调整后的docker-compose.yml文件内容如下：
# 和官方给的demo的不同点：
# 1、使用绑定挂载而不是卷
# 2、宿主机的端口仅允许本机访问，由反向代理来反代
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

# 编辑环境变量
vim .env

# 环境变量
# 具体设置见https://docs.hoarder.app/Installation/docker
# 文档详细得很
HOARDER_VERSION=release
NEXTAUTH_SECRET=xxx
MEILI_MASTER_KEY=xxx
NEXTAUTH_URL=https://hoarder.example.com
MAX_ASSET_SIZE_MB=1024

# 启动 Docker Compose 定义的所有服务
docker compose up -d

# 编辑caddy的配置文件
vim /etc/caddy/Caddyfile
# 反向代理caddy配置
hoarder.example.com {
        reverse_proxy localhost:3600
}

# 去cloudflare添加DNS A记录

# 重载caddy
systemctl reload caddy
```

紧接着，访问`hoarder.example.com`注册一个账号。

![在hoarder网页端注册账号](https://cdn.sa.net/2024/10/05/7b2tzURYvSdyaTK.webp)

在settings里面导入raindrop导出的书签。

![将书签导入hoarder](https://cdn.sa.net/2024/10/05/dk2nclQvt1Jjf5p.webp)

5000多个书签导了差不多1个小时。

手机端的hoarder app、浏览器插件都装一下，方便收集趣站或者查找书签。浏览器插件我绑定了原本raindrop浏览器插件的快捷键，这样子收藏网页还是原本的工作流。

hoarder查找功能，还算ok。

![hoarder查找功能还算ok](https://cdn.sa.net/2024/10/05/Q6akGeibmZgFCxY.webp)

最后当然是关闭注册了，一个人独享hoarder😁。

```bash
# 修改docker-compose.yml文件
vim docker-compose.yml

# 和原本docker-compose.yml文件的不同点
# 添加了DISABLE_SIGNUPS环境变量
# 你如果需要AI给你打tag，也可以配置AI相关的环境变量
# 对我来说，自己手打的tag更容易搜索
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

# 停止并删除 Docker Compose 定义的所有容器、网络和卷，
# 然后重新创建和启动所有服务
docker compose down && docker compose up -d
```

![hoarder关闭注册功能](https://cdn.sa.net/2024/10/05/59wbdGuIXVczD4s.webp)

## 总结

raindrop对不起，不是你的功能不行，而是我的钱包不够鼓了。自从买了10欧元/月的bero host，就注定了SaSS服务要远离了。哎😑。我不是富哥。

开源项目也不是不能用，只不过确实打不过raindrop。app端也还行，只要能搜索，就满足了基本需求。

![hoarder的app也还行](https://cdn.sa.net/2024/10/05/Y9JF8Sg6yIULi3v.webp)

就这样吧，之后的SaSS服务，如readwise、inoreader这些继续用开源项目替代。

我已经竭尽所能，去利用bero host的机器了，但奈何这机器的配置实在是太高了，够我继续折腾下去。

![bero host的机器配置太高，够我继续折腾](https://cdn.sa.net/2024/10/05/P3c7zJAwref2xhu.webp)

最后，请允许我打个广告，具体广告可见[via](https://19130104.xyz/@jiakai/113252544619836649)，今天DMIT全线产品补货。想自建节点的小伙伴，抓紧机会入手。

![DMIT广告](https://cdn.sa.net/2024/10/05/8RvPqygxFBhVJlU.webp)

有了优质的优化线路美西机器，再搭配上家宽落地，访问AI服务更稳定，不惧封号。这也是下期博客要分享的目前我访问AI服务的配置。




