---
title: "使用docker自建proxigram"
date: 2023-10-13T16:36:49+08:00
tags: ['rss']
slug: "use-docker-compose-to-build-proxigram"
summary: 介绍使用docker自建proxigram的方法。
showtoc: true
---

## 故事背景

今天下午清理邮箱时，发现了all about rss github项目issue有了新的动态。all about rss项目作者指出有人发现了一个instagram to rss的解决方案—proxigram。

![all about rss项目issue邮件提醒](https://vip2.loli.io/2023/10/13/9CYO6NZjUg4nm8k.webp)

于是，我去到all about rss的tg群组中查看信息，发现有位大哥在10月9日分享了自己的新发现—instagram to rss新的解决方案proxigram。[via](https://t.me/allaboutrss/13588)

![网友分享自己的新发现—proxigram](https://vip2.loli.io/2023/10/13/EsABNULSTGZnrMx.webp)

all about rss的频道主在今天(2023年10月13日)正式在其tg频道分享instagram to rss新的解决方案proxigram。[via](https://t.me/aboutrss/1376)

![all about rss频道主分享proxigram](https://vip2.loli.io/2023/10/13/71S4BUs5a2m9eAM.webp)

从proxigram的项目介绍中，可以看出这个项目的初衷是为了保护用户的隐私。其充当用户和instagram之间的中介，获取instagram的数据，并将数据返回给用户查看。rss功能并不是其主要目的。

## 搭建过程

官方文档的README中关于部署的说明已经讲得很清楚了。我主要提一下其中的.env配置文件的设置。

```bash
# 一键安装docker
curl https://get.docker.com | bash
# 克隆proxigram仓库
git clone https://codeberg.org/ThePenguinDev/proxigram.git
# 进入proxigram文件夹
cd proxigram
# 将.env.example文件复制一份，并将复制品命名为.env
cp .env.example .env
# 启动并在后台运行docker容器
docker compose up -d
```

.env文件的介绍如下：

```bash
# Server:

## Change this to your own domain/ip.
## Example -> https://example.com or http://127.0.0.1:3000
# 设置proxigram的url
URL=https://proxigram.example.com

# CACHE:

## Set to false to disable cache (not recommended).
# 允许缓存
CACHE=true

## Redis url, example -> redis://127.0.0.1:6379
## If using docker -> redis:6379
# redis的url
REDIS_URL=redis:6379

## Don't keep it too high!
## 7|m|h|d
# rss过期时间
EXPIRE_TIME_FOR_RSS=6h
# No more than 2d, images and videos will break
# 帖子(post)的过期时间
EXPIRE_TIME_FOR_POST=6h
# 帖子(posts)的过期时间
EXPIRE_TIME_FOR_POSTS=6h
# profile的过期时间
EXPIRE_TIME_FOR_PROFILE=6h
# 故事的过期时间
EXPIRE_TIME_FOR_STORIES=6h

# 设置代理
# Proxy:

## Proxy all the images and videos through the instance.
## If set to false, images and videos will be loaded from the provider server decreasing privacy for the end user.
PROXY=false

# Providers:

## Fetch the providers URLs remotly.
## If set to false, it will cached the list of providers once. New providers will have to be added manually
# 获取第三方ins应用的内容
FETCH_PROVIDERS=true

## If FETCH_PROVIDERS is set to true, provide how often you want to re-fetch;
## 7|m|h|d
# 每隔6小时重新获取第三方ins应用的内容
FETCH_PROVIDERS_EVERY=6h

## Add a custom remote providers list.
## OFFICIAL: https://codeberg.org/ThePenguinDev/proxigram-providers/raw/branch/main/providers.json
# 添加官方的第三方ins应用列表的url
PROVIDERS_LIST_URL=https://codeberg.org/ThePenguinDev/proxigram-providers/raw/branch/main/providers.json

## If set to false, providers which depends on a headless browser will not be used.
## If set to true, you should run one of the next commands to install the chromium binary.

## npm install playwright-chromium@1.34.3
## pnpm add playwright-chromium@1.34.3
## yarn add playwright-chromium@1.34.3
# 不使用无头浏览器
USE_HEADLESS_PROVIDERS=false

# RSS:

## Set to false to disable RSS.
# 允许rss
RSS=true

## Maximum 12.
# 设置每条rss的item数量
ITEMS_PER_RSS=12

## In ms.
# 每次请求的间隔时间设置为400ms
SLEEP_TIME_PER_REQUEST=400
```

docker.compose.yml文件中的端口映射最好使用`127.0.0.1:xxx:3000`的形式，避免对外暴露太多端口，使用caddy或nginx这类反向代理服务器，来反代本机的xxx端口，以对外提供proxigram服务。

```yaml
---
version: "2.1"
services:
  proxigram:
    # Currently no docker image so building one
    image: proxigram:latest
    build:
      dockerfile: Dockerfile
    container_name: proxigram
    # 3000 is the container internal port, 8080 is the external access port, change if necessary.
    ports:
      - '127.0.0.1:3000:3000'
    restart: unless-stopped
    # Copy .env.example to .env and change accordingly.
    env_file: .env

  # When using this compose file, use REDIS_URL=redis:6379 at the env file
  redis:
    image: redis:alpine
    container_name: redis
    restart: unless-stopped
```

在cloudflare这类的域名提供商处解析域名至搭建proxigram的服务器ip上。

最后就是设置反向代理服务器，使用域名对外提供服务。

caddy的Caddyfile中添加如下的一条记录。

```bash
proxigram.exmaple.top {
    reverse_proxy localhost:xxx
}
```

接着重载caddy服务器。

```bash
systemctl reload caddy
```

这样子，访问proxigram.example.com就能看到应用的界面了，

![成功访问自建的proxigram应用](https://vip2.loli.io/2023/10/13/dZehzmPGj7MF81a.webp)

输入ins用户的handle(用户名)，就能获取到该用户名的相关数据。

比如我输入yua_mikami(三上老师的ins handle)，选中搜索结果中的第一位的用户，就能获取到她最新的动态了，右上角有rss图标，点击该图标，就能获取到atom格式的rss url了。

![三上老师的动态在proxigram上呈现的样例](https://vip2.loli.io/2023/10/13/yOETb9JUKVwQnvR.webp)

将该url导入rss阅读器中，就能在自己空闲时，查看她的近况了。

下图展示proxigram生成的有关布莱泽奥特曼女主角—捣宫姬奈(ins handle：himenachaaaaan)动态的rss导入feedbro rss阅读器中的效果。

![捣宫姬奈动态的rss导入feedbro的效果](https://vip2.loli.io/2023/10/13/LSjWgfyHv1rzMIo.webp)

最后提几点注意事项：

- ins的帖子噪声太大了，建议和博客文章这类rss放置在不同的rss软件中食用。

- Proxigram的docker环境变量文件中有这样一些选项，可以大概猜测这个项目的工作原理应该还是类似rssbridge中的picuki bridge一样，通过自己的vps，去访问provider list中标明的instagram第三方应用内容。获取内容频繁的话可能会被instagram的第三方应用屏蔽掉ip。【还需等待时间来检验我的猜想】

![.env中的一些配置项](https://vip2.loli.io/2023/10/13/mhAzNZ8dCMu52JO.webp)

- 建议使用类似aws lightsail这类能免费换ip的vps来部署Proxigram。
当然你也可以购买一些代理，添加到环境变量的Proxy Providers选项中，但购买代理的价格开销还是挺大的。

这个开源的新生儿，给instagram to rss提供了新的解决方案。我自己也部署了一个实例。但是一般情况下，我还是更倾向于使用tg机器人Feed Reader Bot作者的rss bridge中的picuki bridge来获取instagram用户的动态。

这个bot的作者给他的rss bridge设置了动态代理，因此不用担心picuki会屏蔽实例的ip。机器人有一定的免费额度，我是去年年底花了100欧元买断了pro版本，目前买断pro的价格涨到了150欧元。不建议购买，价格有些昂贵。

开源项目proxigram使得rss的世界变得更加美好，希望这个项目的寿命能活得长一些。

## 思考

互联网应用服务提供商越是想要将用户的数据困在他们建好的后花园中，某些用户群体就会觉醒，用开源技术挣脱施加在他们身上的枷锁。当提供商们无所不用其极，堵住最后能戳破围墙的光芒时，用户们不妨转身离去，用脚投票，让平台损失用户。

从马斯克掌管社交媒体x(原twitter)后，就开始慢慢地学习中国的科技巨头筑起围墙，加速摧毁这本该开放的互联网世界。这是非常可悲的一件事情。

所幸还有mastodon这类分布式社交网络的项目，让用户拥有更多的自由和控制权。避免被中心化的平台审查或剥削。

虽然这些去中心化的社交网络可能无法取代用户基数庞大的老牌社交平台，但至少它们的出现，让这个世界多了一份开放，未来这些巨头持续作恶时，让想逃离的用户多一种选择。