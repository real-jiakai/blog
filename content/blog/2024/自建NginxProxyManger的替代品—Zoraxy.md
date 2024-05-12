---
title: "自建Nginx Proxy Manger的替代品—Zoraxy"
date: 2024-05-12T19:36:34+08:00
tags: ["反向代理", "Zoraxy"]
slug: "selfhost-zoraxy-an-alternative-to-nginx-proxy-manager"
summary: 自建Nginx Proxy Manger的替代品—Zoraxy。
showtoc: true
---

前一阵子，看到了一个新的反向代理项目—[Zoraxy](https://github.com/tobychui/zoraxy/)。当时简单试用了一下，给我的感觉是这个反向代理类似Nginx Proxy Manger。

这个项目也支持docker部署，添加反向代理规则也在一个后台管理界面中可视化完成。

Zoraxy部署完成的效果如下图所示：

![Zoraxy部署完成的效果](https://cdn.sa.net/2024/05/12/HPg7p4fihI2B9nt.webp)

## 1、自建步骤

### 1.1、前提条件

安装完docker和docker compose。

没安装的话，可以用一键脚本安装一下：

```bash
# 使用一键脚本安装docker和docker compose
curl https://get.docker.com | bash
```

### 1.2、自建zoraxy

```bash
# 进入用户目录
cd
# 创建名为zoraxy的目录并进入
mkdir zoraxy && cd zoraxy
# 使用vim编辑器创建并打开compose.yml文件
vim compose.yml
```

添加以下内容：

```bash
services:
  zoraxy-docker:
    image: zoraxydocker/zoraxy:latest
    container_name: zoraxy
    ports:
      - 80:80
      - 443:443
      - 8005:8000/tcp
    volumes:
      - ./Zoraxy:/opt/zoraxy/config/
    environment:
      ARGS: '-noauth=false'
    restart: always
```

让claude3来简单介绍一下上述配置。

![claude3讲解](https://cdn.sa.net/2024/05/12/SsYlH1EoO9k6g2F.webp)

一开始先开启容器内的8000端口至宿主机的8005端口映射，等到配置好了域名访问zoraxy后台管理界面后，可以去除掉该端口映射。

更多有关zoraxy的docker配置信息，请见：[zoraxy/docker](https://github.com/tobychui/zoraxy/tree/main/docker)。

接着执行以下命令来启动并在后台运行容器。

```bash
# 使用docker compose启动服务,并在后台运行
docker compose up -d
```

![启动并在后台运行zoraxy容器](https://cdn.sa.net/2024/05/12/YilhoFcHtk4dOPq.webp)

这时在浏览器的地址栏输入：`http://your_vps_ip_address:8005`来访问zoraxy的后台管理界面。【注：vps开启防火墙的话，记得先暂时放行一下8005端口，等到zoraxy后台管理界面设置了域名访问后，再删除该端口的放行】

![创建账户](https://cdn.sa.net/2024/05/12/k4GRPKJpWBjgXl8.webp)

输入用户名和密码来创建账户。

![登陆zoraxy的后台管理界面](https://cdn.sa.net/2024/05/12/P8FvwVDbfhoKBN1.webp)

紧接着输入刚才创建账户的用户名、密码来登陆zoraxy的后台管理界面。

![成功进入zoraxy的后台管理界面](https://cdn.sa.net/2024/05/12/OrQNa6EfClHcuUj.webp)

成功进入zoraxy的后台管理界面。

### 1.3、zoraxy配置

在后台管理界面的Status选项页，将Global Settings中的入栈端口修改为443，下面这些的选项都勾上。

- Use TLS to serve proxy request(使用TLS来服务代理请求)
- Enable HTTP server on port 80(在80端口启用HTTP服务器,仅当启用TLS且未使用80端口时适用)
(Only apply when TLS enabled and not using port 80)
- Force redirect HTTP request to HTTPS(制将HTTP请求重定向到HTTPS)

![Global Settings设置](https://cdn.sa.net/2024/05/12/jLQfbs5grEVuR8A.webp)

Default Site选项页不动，当遇到未知主机名时，让zoraxy使用内置的静态页面来处理请求。

![Default Site选项页不动](https://cdn.sa.net/2024/05/12/8PsD4WXt7rRVA6a.webp)

静态页面，可以在Static Web Server处寻得。

![静态页面位置](https://cdn.sa.net/2024/05/12/oFlOCn7fRSY3dtB.webp)

默认的静态页面如下图所示：

![默认的静态页面](https://cdn.sa.net/2024/05/12/B1dOQSAYmU6jLqu.webp)

接下来配置zoraxy后台管理界面以域名的形式访问。以域名`zoraxy.example.com`为例。

首先来到cloudflare的域名`example.com`的DNS记录界面，添加一条A记录，记录名为zoraxy，记录值为zoraxy所在服务器的ip地址。

紧接着回到zoraxy后台管理界面的Create Proxy Rules选项页。

Matching Keyword / Domain，填写`zoraxy.example.com`；

Target IP Address or Domain Name with port，填写`zoraxy:8000`；

勾选Require Basic Auth，输入basic auth验证的用户名和密码。

点击Create Endpoint。

![创建zoraxy的代理规则](https://cdn.sa.net/2024/05/12/aZmoMIf5C4sklrw.webp)

紧接着，来到TLS/SSL certificates选项页。

![TLS/SSL certificates选项页](https://cdn.sa.net/2024/05/12/LeakiSBMlEcbTmh.webp)

下拉到底部，填写ACME Email为自己的常用邮箱。点击Save Settings保存设置。

![填写ACME Email](https://cdn.sa.net/2024/05/12/hrvW264IHDEngzp.webp)

紧接着，点击底部的Open Acme Tool，填写ACME Email为自己的常用邮箱，开启Enable Certificate Auto Renew按钮，在Generate New Certificate下的Domain(s)输入框里面填写`zoraxy.example.com`，点击Get Certificate来获取证书。

![用acme申请证书](https://cdn.sa.net/2024/05/12/8KZ1W6RVHBjDplX.webp)

打开HTTP Proxy选项页，点击`zoraxy.example.com`，来以域名的形式访问zoraxy的后台管理界面。

![HTTP Proxy选项页](https://cdn.sa.net/2024/05/12/9iPmvo7zD3Xl8Mp.webp)

输入basic auth所需的账号密码来通过验证。

![输入basic auth所需的账号密码来通过验证](https://cdn.sa.net/2024/05/12/vLmZ9ROgizfY64u.webp)

如果basic auth不生效的话，可以来到HTTP Proxy选项页，编辑刚才创建的反向代理记录。

![如果basic auth不生效的话，可以来到HTTP Proxy选项页，编辑刚才创建的反向代理记录。](https://cdn.sa.net/2024/05/12/AoiF6ZKwXtWbvCm.webp)

点击Basic Auth的Edit Credentials，在其中的Basic Auth Credential添加验证所需的用户名和密码。

![点击Basic Auth的Edit Credentials，在其中的Basic Auth Credential添加验证所需的用户名和密码。](https://cdn.sa.net/2024/05/12/92MXv5FVJ1GZyzi.webp)

通过basic auth后，就可以以域名的形式访问到zoraxy的后台管理界面了。

![通过basic auth后，就可以以域名的形式访问到zoraxy的后台管理界面了。](https://cdn.sa.net/2024/05/12/l5BTV7nzKgZjcIk.webp)

为了安全考量，应尽可能少地向外界暴露端口。我们可以修改zoraxy的compose.yml文件，删除其中的8005:8000/tcp的端口映射，紧接着使用`docker compose down && docker compose up -d`命令来重新部署zoraxy容器。

其他的选项页简单罗列一下：

- Virtual Directory提供了路径映射等功能，可以自行琢磨折腾。

- TCP Proxy有点中转的意味，我还没用过。

- Redirection Rules用于添加重定向规则。

- Access Control用于访问控制，提供了比如国家黑名单等实用的功能。当然如果你有这方面的需求，我更建议你在Cloudflare处设置相应的WAF规则。

![Access Control的国家黑名单](https://cdn.sa.net/2024/05/12/Lhdltczpm3gNiVD.webp)

- Global Area Network，还没用过。

- Service Expose Proxy，该功能还在开发中。

- Uptime Monitor，检查反向代理目标的在线率。

- Network Tools，提供了常用的网络工具，如查询域名whois等。

- Statistical Analysis，提供了网站的访问数据统计信息的展示。

- Utilities，提供了修改密码、工具箱等功能

### 1.4、为其他服务提供反向代理

以最近看到的一个仪表盘项目——[glance](https://github.com/glanceapp/glance)为例子。

官方给出的docker compose文件如下：

```yaml
services:
  glance:
    image: glanceapp/glance
    volumes:
      - ./glance.yml:/app/glance.yml
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    ports:
      - 8080:8080
    restart: unless-stopped
```

可以将其改为以下配置：

```yaml
services:
  glance:
    image: glanceapp/glance
    volumes:
      - ./glance.yml:/app/glance.yml
      - /etc/timezone:/etc/timezone:ro
      - /etc/localtime:/etc/localtime:ro
    networks:
      - zoraxy_default
    restart: unless-stopped

networks:
  zoraxy_default:
    external: true
```

将glance服务加入到zoraxy_default的外部网络中，这样子zoraxy可以通过glance:8080来获取到glance服务。具体的解释可以见claude3的详细解释。注：其中的zoraxy_default网络由zoraxy默认创建，可以通过`docker network ls`命令来查得。

![claude3详解](https://cdn.sa.net/2024/05/12/JjSUz3ZIF5fOyoR.webp)

可以参考nginx proxy manager的[Best Practice: Use a Docker network](https://nginxproxymanager.com/advanced-config/#best-practice-use-a-docker-network)的知识点来对照学习。

紧接着在glance的compose.yml的同级目录中创建glance.yml文件，具体的配置见[Preconfigured page](https://github.com/glanceapp/glance/blob/main/docs/configuration.md#preconfigured-page)。

具体的目录结构如下：

![glance目录结构](https://cdn.sa.net/2024/05/12/qo41rMGjTxizsnp.webp)

在glance文件夹下执行`docker compose up -d`启动并在后台运行容器。

接下来的操作，跟刚才创建代理规则一样。

- 先在Cloudflare的域名DNS记录中添加一条A记录，记录名为`glance`，记录值为`example.com`。

- 紧接着来到zoraxy的后台管理界面的Create Proxy Rules选项页，Matching Keyword / Domain填写`glance.example.com`；Target IP Address or Domain Name with port填写`glance:8080`；点击Create Endpoint，来完成代理规则的创建。

- 这时候，右下角有一个申请SSL证书的弹窗，直接点击申请。

- 申请完毕后，访问`glance.example.com`，成功获取到glance服务。如果你要自定义glance仪表盘的话，可以修改glance.yml文件，紧接着再执行`docker compose down && docker compose up -d`命令重新部署glance即可。

![成功访问到glance服务](https://cdn.sa.net/2024/05/12/TMEsqKLxUGIRyDe.webp)


## 2、总结

zoraxy这个反向代理基本满足docker服务的反向代理需求，类似nginx proxy manager，如果自己有一台还没有安装反向代理的vps，可以试一试。

当然到目前为止，我使用过的反向代理中，最简单便捷的还得是caddy，自动https+简单的配置，用过caddy的都说好。

最后附上zoraxy作者对于自己项目的介绍，可以听听作者的使用姿势。

[作者在coscup平台上的视频分享](https://youtu.be/SnAIN7oaLW4?si=bOyLCvjIUZ_6N0QO)

![作者在coscup平台上的视频分享](https://cdn.sa.net/2024/05/12/cLFtoJXB1Ihanku.webp)

今天写这篇博文的实验机器来自techvm，国人oneman，我看techvm的老板跟最近跑路的图安云纠缠不清，故昨晚我将techvm大鸡上的服务全部迁移到了rackerd的黑五机器上。今晚写完博客演示完，让该月付鸡自动过期。

虽然4核、12GB内存、50GB硬盘、9929线路的月付35人民币vps看起来很诱人，但是图安云出事后，我就再也不相信国人oneman了，当然也不相信老外oneman，买vps还得找准口碑好的商家，以及大厂的机器。

我原本有图安云的美西133套餐+新年299套餐，所幸5月11号，两个套餐的部分退款我都收到了，再加上图安云的机器上没啥重要数据，这次经历就当为自己敲响警钟吧，做理智的mjj，远离oneman方为正道！

