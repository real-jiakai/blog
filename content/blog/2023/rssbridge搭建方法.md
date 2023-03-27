---
title: "rssbridge搭建方法"
date: 2023-02-20T10:27:14+08:00
tags: ['rss','rssbridge']
slug: "use-docker-compose-to-build-rssbridge"
summary: 介绍rssbridge搭建方法。
showtoc: true
---


> 注：自建rssbridge纯粹是为了使用其里面picuki bridge，以追踪名人ins。公开实例中的picuki bridge，会因为使用人数太多，被picuki屏蔽。

![picuki 403 forbidden](https://vip2.loli.io/2023/02/20/XvYH4i3h7SN5tWr.webp)

准备工作

+ 一台国外的vps（以下安装步骤默认系统安装的是Debian系统，其余系统的操作类似，需要各位自行变通）
+ 一个域名

篇幅缘故，1）国外vps的购买、2）ssh连接vps，这两个点省略。



## 1、安装docker

详情可见docker的[官方文档](https://docs.docker.com/engine/install/debian/)

```bash
# 从仓库安装docker
# 更新软件包索引
sudo apt-get update
# 安装一些前置工具，确保docker正确安装配置
sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release
    
# 添加docker的官方GPG密钥 
sudo mkdir -m 0755 -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# 向ubuntu系统添加docker官方软件源，以便下载和安装docker软件包
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/debian \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 更新软件包索引
sudo apt-get update
# 在ubuntu系统中安装docker软件包及其相关插件，以便于运行和管理docker容器
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

<script async id="asciicast-561073" src="https://asciinema.org/a/561073.js"></script>



## 2、rssbridge安装

```bash
# 注：以下演示操作，我均在root目录下进行。
# 新建rssbridge文件夹
mkdir rssbridge
# 进入rssbridge文件夹
cd rssbridge
# 编辑docker-compose.yml文件
vi docker-compose.yml

# docker-compose.yml文件内容
# 将本机的/root/rssbridge/config文件夹，映射到docker容器中的/config文件夹下
# 将本机的3001端口映射到容器80端口上
version: '2'
services:
  rss-bridge:
    image: rssbridge/rss-bridge:latest
    volumes:
      - /root/rssbridge/config:/config
    ports:
      - 3001:80
    restart: unless-stopped
```

接下来需开放服务器的3001端口，如果vps提供商处的vps管理面板没有防火墙，则可以看看vps的防火墙开放情况，
演示机器使用的是digitalocean的vps，默认情况下，并不存在防火墙，因此开放本机端口3001操作可省略。

```bash
# 在后台启动容器
docker compose up -d
```

<script async id="asciicast-561074" src="https://asciinema.org/a/561074.js"></script>

访问服务器的ip地址:3001，就可以看到rssbridge了。

![rssbridge](https://vip2.loli.io/2023/02/20/FB1OATP2I6p8ujf.webp)



## 3、开启rssbridge中的picuki

默认rssridge并没有开启picuki bridge，需要你使用白名单来启用picuki bridge。具体可见官方文档对于白名单的[叙述](https://rss-bridge.github.io/rss-bridge/For_Hosts/Whitelisting.html)。

在rssbridge文件夹下的config文件夹下新建文件`whitelist.txt`，在里面填入`Picuki+回车`。

<script async id="asciicast-561078" src="https://asciinema.org/a/561078.js"></script>

重启docker容器，让配置文件生效。

```bash
# 进入rssbridge文件夹
cd ~/rssbridge
# 清除docker compose文件中定义的服务所创建的容器、网络、卷
docker compose down
# 后台启动容器
docker compose up -d
```

![rssbridge启用picuki](https://vip2.loli.io/2023/02/20/sSIjzWH9cFQ3Dgr.webp)



## 4、修改时区

下载rssbridge github仓库的默认配置文件

```bash
# 下载rssbridge的默认配置文件
wget https://raw.githubusercontent.com/RSS-Bridge/rss-bridge/master/config.default.ini.php
# 修改文件名
mv config.default.ini.php config.ini.php 
# 编辑文件
vi config.ini.php

# 将文件中时区改为Asia/Shanghai
timezone = "Asia/Shanghai"

# 进入rssbridge文件夹
cd ~/rssbridge
# 清除docker compose文件中定义的服务所创建的容器、网络、卷
docker compose down
# 后台启动容器
docker compose up -d
```

<script async id="asciicast-561079" src="https://asciinema.org/a/561079.js"></script>



## 5、添加自己的域名+caddy反向代理

当你做完上述的工作，兴高采烈地在Picuki中添加名人的ins username的时候，发现报错503。报错原因后续再说。

目前的问题是rssbridge建起来了，但是picuki bridge不可用。暂时先放一放，先给rssbridge服务绑定一个域名。

![Picuki bridge报错](https://vip2.loli.io/2023/02/20/MeGbR7FN4cLXk8l.webp)

在域名托管商处，添加一条A记录，指向自己vps的ipv4地址。

![添加A记录](https://vip2.loli.io/2023/02/20/QeTXysPr8tYUF2W.webp)

这边我选择的域名托管商是cloudflare。

最后我们来配置反向代理服务器，可以选择nginx、apache、caddy等。这边我选择caddy来作为反向代理服务器。因为caddy天生支持https，ssl证书申请、配置等步骤，它会自动完成，无需我们手动进行；而且caddy的配置文件极其简单。你也可以使用nginx来作为反向代理服务器，反代rssbridge的3001端口，至于nginx的ssl证书申请，安装，你可以使用acme脚本。

caddy用来转发外界对于本机3001端口的请求。我们在浏览器的地址栏中输入`rssbridge.example.com`，caddy接收到外界的访问请求，将请求转发到本机的3001端口，而本机的3001端口正好是提供rssbridge的端口，这样我们就得到了rssbridge服务的响应。

安装caddy（[官方文档](https://caddyserver.com/docs/install))

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update
sudo apt install caddy
systemctl status caddy
```

找到caddy默认配置文件的位置`/etc/caddy/Caddyfile`，在里面添加如下配置【注意格式问题】。

```bash
rssbridge.example.com {
        reverse_proxy localhost:3001
}
```

重启caddy。

```bash
systemctl restart caddy
```

稍等片刻在浏览器的地址栏输入`rssbridge.example.com`，就能看到加锁(https)的rssbridge网站了。

![rssbridge https](https://vip2.loli.io/2023/02/20/evPFklhIiqrXCH4.webp)

但是，我发现rssbridge中的picuki bridge依然报错。这令我陷入沉思。

![image-20230220133633621](https://vip2.loli.io/2023/02/20/nKBy48VuXMozj7s.webp)

幸亏我个人有好几台国外的vps，在aws的lightsail上面同样搭建了rssbridge，里面的picuki bridge能正常工作。

![aws rssbridge的picuki工作正常](https://vip2.loli.io/2023/02/20/5SUWr6EtvcYaXAd.webp)

个人猜想在digital ocean上搭建rssbridge，使用picuki bridge报错的原因在于digital ocean的ip，可能绑定该ip的vps以前也搭建过rssbridge的服务，并且这台vps搭建的rssbridge被多人使用，访问picuki次数太多，导致该ip被rssbridge封掉了。当然这也是我的个人猜想。

digital ocean随用随释放的消费模式，使得在vps从零开始演示某个功能非常便捷。但也带来了ip地址的不纯，鬼知道前面一位顾客拿这个ip地址干过啥。



## 6、添加instagram bridge

详情可见[官方文档](https://rss-bridge.github.io/rss-bridge/Bridge_Specific/Instagram.html)的描述。

```bash
# 编辑rssbridge白名单
vi ~/rssbridge/config/whitelist.txt
# 添加instagram
添加Instagram+换行
# 编辑配置文件
vi ~/rssbridge/config/config.ini.php 

# 在配置文件末尾添加instagram的相关信息
[InstagramBridge]
session_id = "xxx"
ds_user_id = "xxx"
cache_timeout = "216600"
```

获取session_id和ds_user_id的方法，上面文档链接里面讲得很详细。总结就是登录instagram，f12打开开发者工具，Application—>Cookies—>获取相关数据。添加进config.init.php文件中即可。

![获取session_id和ds_user_id](https://vip2.loli.io/2023/02/20/IhUdSbDH45gFQjs.webp)



## 7、总结

rsshub也有instagram相关参数配置的方法，配置完毕后，就可以使用rsshub的instragram rss订阅了，但是上个月的博文也介绍过，这种方式使用了一段时间后，instagram会验证账号。

可以预见，使用rssbridge的instagram bridge，也会出现这种情况。因此在获取session_id和ds_user_id的时候，最好使用注册的instagram小号，小号被要求身份验证，不怕封杀。

在2023年的今天，rss看起来已经其貌不扬，被各个社交平台给抹杀。社交平台喜欢将用户圈养在自己的围墙花园里面，让用户为自己创造价值。

分享一则个人的有趣经历，在年初的时候，我将国内的csdn上的博客注销了，注销的原因在于以前的博文有瑕疵。但是令我感到意外的是，注销账号，并不等于删除账号，我的csdn博客主页，依然存在。原来所谓的注销账号仅仅是换了名字，修改为了“已注销”。在那一刻，我终于明白了个人网站的重要性，各大网站给你提供服务的同时，主宰着你创造的数据，只要你用到了它的服务，用其服务创造的内容就是它的了，而不是你的。

rssbridge是一个非常棒的项目，可以说在rss界，rsshub之下便是rssbridge了。

最后分享一则rssbridge项目主页的咆哮。

![rssbridge-rant](https://vip2.loli.io/2023/02/20/4FdheiOKMJC9luf.webp)



## 8、更新

### 2023.3.7

目前我已经弃用自建的解决方案，采用tg机器人[thefeedreaderbot](https://thefeedreaderbot.com/index.html)创始人搭建的rssbridge，经济实力允许的话，可以花100€买断这个机器人的premium版。

![rssbridge 403](https://vip2.loli.io/2023/03/07/c5Txu3q8nj1leMz.webp)

我也尝试询问过作者，他购买了哪家代理才使得其搭建的rssbridge能躲过picuki的block。作者也向我表明，其使用的是[webshare](https://www.webshare.io/)这家网站的动态代理ip，域名授权，将获取到的地址，填入rssbridge的config.ini.php文件中，形如`url = "http://p.webshare.io:xxxx"`。

![tg对话截图](https://vip2.loli.io/2023/03/07/nFUR8Cj5P4L2WtB.webp)

我粗略估算了一下，webshare最便宜的方案，包年也得接近30刀，于是我最终决定放弃rssbridge。使用[thefeedreaderbot](https://thefeedreaderbot.com/index.html)作者搭建的rssbridge。具体的rssbridge地址可参看thefeedreaderbot网站的[help rssbridge](https://thefeedreaderbot.com/helpRssBridge.html)页面。
