---
title: "自建Kasm Workspaces"
date: 2025-03-31T8:40:02+08:00
tags: ['kasmworkspaces']
slug: "self-hosted-kasm-workspaces"
summary: 分享自建Kasm Workspaces的经历。
showtoc: true
---

## 背景

第一次接触使用Kasm Workspaces是在2023年，当时在HostHatch一台新加坡的机器上搭建了非Docker版本，但并没有细究，仅仅是搭建了，尝试了Kasm Workspaces中的各种各样Workspaces，比如Chrome、Ubuntu桌面等。

![第一次接触使用Kasm Workspaces是在2023年](https://cdn.sa.net/2025/03/31/2K4GinvjZqeswzo.webp)

首先来让Claude 3.7 Sonnet简单介绍一下Kasm Workspaces。

![Claude 3.7 Sonnet简单介绍Kasm Workspaces](https://cdn.sa.net/2025/03/31/kyHpLFqZOPRGXNt.webp)

其中的桌面即服务其实是非常实用的用途。

紧接着让Gemini 2.5 Pro介绍一下其中的Workspaces概念。

![Gemini 2.5 Pro介绍其中的Workspaces概念](https://cdn.sa.net/2025/03/31/2tENKUhbDknJZdy.webp)

## 前提条件

- 最好是一台包含IPV4地址的配置稍好（内存4GB以上）的VPS

仅IPv6地址的VPS，我在自建时发现进行完Kasm Workspaces的安装向导后，死活无法登录Kasm Workspaces页面，但账号、密码都是正确的，这个Bug没细究，也可能只在我的测试中触发了，不一定仅IPv6的机器搭建过程中遇到和我一样类似的情景。

官方文档中罗列的最低要求如下：2核、4GB、50GB[^1]。

![安装Kasm Workspaces官方罗列的机器最低要求](https://cdn.sa.net/2025/03/31/SDyKwL3nXvIGqQo.webp)

- 最好是一台纯净的Linux系统

有些VPS商家的Linux系统模版不给力，用Docker自建KasmWorkspaces会遇到各种各样奇怪的问题。一开始，在我的一台高配机上自建KasmWorkspaces基本上没遇上啥问题，但在写文章时，在一台测试机上自建，出现了各种各样的Bug，过程很糟心，建议想要开始自建的小伙伴们最好选一台dd后的纯净Linux系统。

## 自建流程

自建流程参考docker-kasm项目[^2]。

```bash
# 创建一个名为kasm的目录并切换到该目录
mkdir kasm && cd kasm
# 使用vim编辑器打开或创建compose.yml文件
vim compose.yml
```

compose.yml【注意宿主机上的端口8443、3000空闲】:

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
# 使用Docker Compose启动定义在compose.yml中的服务，并在后台运行（分离模式）
docker compose up -d
```

访问`https://your_ip:3000`，进入Kasm Workspaces安装向导。

![访问`https://your_ip:3000`，进入Kasm Workspaces安装向导。](https://cdn.sa.net/2025/03/29/O2bA7ZXreJRqoMP.webp)

输入管理员密码，继续下一步。

![输入管理员密码，继续下一步。](https://cdn.sa.net/2025/03/29/iYjXuLwvCTo1qW7.webp)

选择Chrome浏览器或者Edge浏览器或者Brave浏览器【三选一】，点击安装。

![选择Chrome浏览器或者Edge浏览器或者Brave浏览器【三选一】，点击安装。](https://cdn.sa.net/2025/03/29/zplkWPdDKBm8VCA.webp)

下载完毕后。

![等待相关镜像下载完毕](https://cdn.sa.net/2025/03/29/Ai3KSdOGZE5tJXW.webp)

访问`https://your_ip:8443/`，来到Kasm Workspaces的登录界面。

输入用户名`admin@kasm.local`，以及刚才在安装向导中输入的密码，进行登陆。

## 用户设置

进去第一件事情不要直接就直接Launch应用Session。先进行用户设置。

可以先在VPS的命令行执行以下命令获取时区。

```bash
# 获取VPS IP信息
curl ipinfo.io/json
```

比如我获取到的结果字段为`"timezone": "America/New_York"`。

紧接着回到Kasm Workspaces，点击右上角的管理员头像进行Edit Profile操作。

![点击右上角的管理员头像进行Edit Profile操作](https://cdn.sa.net/2025/03/30/oTUyXQ5Ia8VM7sx.webp)

Kasm UI Language设置为`English`；

Kasm Session Language设置为`English: United States of America`;

Kasm Session Timezone设置为VPS对应的时区。

![进行用户设置](https://cdn.sa.net/2025/03/30/V5TrI3sYNd8RlMx.webp)

其余有需要的地方，可自行设置，比如两步验证等。

## 持久化配置文件

之所以要进行持久化配置操作，主要是因为Kasm Workspaces默认是不保存用户的Profiles配置的[^3]。比如我在这次的Session中登录了ChatGPT账号，下次再启动Session又需要重新登录。而持久化配置后，只需第一次启动Session时登录ChatGPT账号，下次再启动Session时，直接就是ChatGPT账号已登录状态。

点击上方的`ADMIN`来进行相关设置。

点击左侧的Workspaces—>Workspaces。我演示时一开始安装的Workspace是Brave浏览器。点击Brave浏览器的Edit按钮。

![编辑Brave浏览器](https://cdn.sa.net/2025/03/31/GoxPaLXZpivDRez.webp)

在`Persistent Profile Path`处填入`/profiles/brave/{username}/`，如果你默认安装的App是Chrome浏览器，可以设置为`/profiles/chrome/{username}`。之后点击Save更新Workspace设置。

![在`Persistent Profile Path`处填入`/profiles/brave/{username}/`，并保存](https://cdn.sa.net/2025/03/31/58LUZdmXgFOGiMA.webp)

这时候，你再去Launch Brave浏览器时，就会多出一个`Persistent Profile`选项，启用`Persistent Profile`选项。

![启用`Persistent Profile`选项](https://cdn.sa.net/2025/03/31/an6bUZQLYFoD94N.webp)

这时启动Brave浏览器，登录ChatGPT账号。

![启动Brave浏览器，登录ChatGPT账号](https://cdn.sa.net/2025/03/31/WHAJVZMBmhNaRtf.webp)

紧接着你可以通过左侧的控制面板Delete Session。

![通过左侧的控制面板Delete Session](https://cdn.sa.net/2025/03/31/m6Br91h2wgte48o.webp)

下次再启动Brave浏览器，ChatGPT还是已登录状态，这就是持久化配置文件的魅力。

![下次再启动Brave浏览器，ChatGPT还是已登录状态，这就是持久化配置文件的魅力。](https://cdn.sa.net/2025/03/31/sxrOLcWG5DCVYoE.webp)

## 其余

在ADMIN—>Access Management—>Users，可以进行用户的添加和删除。

![在Users选项中进行用户的增删](https://cdn.sa.net/2025/03/31/QrMSf2Fky8eKZdb.webp)

我删除了user@kasm.local用户，添加了一个自定义用户。

可以在本地的另一个浏览器中，打开Kasm Workspaces的页面(`https://your_ip:8443`)，用新添加的自定义用户账号、密码进行登录操作。

新用户登录完的第一件事，还是先进行用户设置【可参见前面部分的介绍进行语言、时区等设置】。

紧接着，我们可以在该Session中登录Claude账号。

![在该Session中登录Claude账号](https://cdn.sa.net/2025/03/31/nDv3m9pRwhxigdy.webp)

由于我们已经启用了持久化用户配置，删除该Session下次再打开，Claude依旧是登录状态。

![由于我们已经启用了持久化用户配置，删除该Session下次再打开，Claude依旧是登录状态。](https://cdn.sa.net/2025/03/31/DnCa9oYkNjdU2wl.webp)

## 扫尾工作

设置Zone Proxy Port为0【反向代理需要】[^4]：

ADMIN—>Infrastructure—>Zones—>default—Edit

![编辑default Zone](https://cdn.sa.net/2025/03/31/Io3ilGN6tQedOzh.webp)

将Proxy Port设置由原本的8443变更为0，并进行Save操作。

![将Proxy Port设置由原本的8443变更为0，并进行Save操作。](https://cdn.sa.net/2025/03/31/uqg6NV3o4p1QtXd.webp)


Caddy反向代理配置【注意域名做好相应的A记录解析】[^5]:

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
# 重载caddy
systemctl reload caddy
```

紧接着可以通过域名`kasm.example.com`来访问Kasm Workspaces服务。

Kasm Workspaces的compose.yml文件修正，以减少对外暴露的端口：

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
# 停止并移除由Docker Compose创建的所有容器、网络、卷和镜像，启动Docker Compose定义的服务，并在后台运行（分离模式）
docker compose down && docker compose up -d
```

要安装其余的Workspaces，可以在ADMIN—>Workspaces—>Registry中选择。

![要安装其余的Workspaces，可以在ADMIN—>Workspaces—>Registry中选择。](https://cdn.sa.net/2025/03/31/Ch9c7q42iXlVeIA.webp)

询问AI时，文字内容，可以通过复制粘贴实现。Kasm 支持基于 Chromium 的浏览器的无缝剪贴板[^6]。

复制图片等文件内容，可以通过左侧的控制面板中的Upload外加AI聊天界面的Upload功能来实现。

![复制图片等文件内容，可以通过左侧的控制面板中的Upload外加AI聊天界面的Upload功能来实现。图1](https://cdn.sa.net/2025/03/31/Gm1OWgksjvMlnFK.webp)

![复制图片等文件内容，可以通过左侧的控制面板中的Upload外加AI聊天界面的Upload功能来实现。图二](https://cdn.sa.net/2025/03/31/HYFrbXaEGITZ6gP.webp)

等到上传的图片积累到一定数量后，可以在profiles下的相关文件夹进行清理操作。

![等到上传的图片积累到一定数量后，可以在profiles下的相关文件夹进行清理操作。](https://cdn.sa.net/2025/03/31/HDX3dAFbrUPmVzs.webp)

## 使用场景

- ChatGPT、Claude等对网络环境要求较高的场景
- AI账号合租共享
- ......

我目前的使用场景，本地的两个浏览器一个浏览器开Kasm Workspaces的ChatGPT、一个浏览器开Kasm Workspaces的Claude。使用了一个礼拜多，体验还算不错。

## 总结

目前的AI服务并不一定需要家宽的加持，并不是只有家宽才不会被封号，我目前已经放弃家宽了。机房IP照样能正常使用，只要你所处的机房不要是中国人扎堆的【尤其是美西机房】，IP特别脏的即可。比如确保在[proxydetect.live](https://proxydetect.live/)网站上检测到代理选项仅有2个特征，可以大大降低自己的AI服务账号降智、封号的风险。

![代理特征尽可能少，可以大大降低自己的AI服务账号降智、封号的风险](https://cdn.sa.net/2025/03/29/8MCub5apfF1incQ.webp)

当然你在本地挂代理访问海外AI服务，时区特征搞成东八区也不一定会被检测到。但通过Kasm Workspaces的Chrome浏览器访问OpenAI绝对可以消除这一特征。

ChatGPT、Claude两者的Kasm Workspaces齐开，内存消耗将近4GB。

![ChatGPT、Claude两者的Kasm Workspaces齐开，内存消耗将近4GB。](https://cdn.sa.net/2025/03/31/6EaNyGbTO8KJYWh.webp)

OpenAI这个小人在今年2月份的一份报告中就已经或多或少地透露出了他们是如何开展所谓的安全活动的[^7]。中文提示、中国工作时间等都是显著的特征，这也并不是说不能用中文提示，美国华人有这么多，不可能紧盯着中文不放的。

![OpenAI是小人图1](https://cdn.sa.net/2025/03/31/xcir1CuhjI3oVXp.webp)

OpenAI是真小人，骂归骂，用归用。

![OpenAI是小人图2](https://cdn.sa.net/2025/03/31/TxMbBDwNtzJPS23.webp)

通过Kasm Workspaces尽可能消除一些明显的代理特征，以及定期清空自己的聊天记录，销毁证据，OpenAI优先注意的肯定不是这类账号。

推荐有高配机器且为了能稳定访问ChatGPT、Claude服务的小伙伴搭建。

[^1]: https://kasmweb.com/docs/latest/install/system_requirements.html#resource-requirements

[^2]: https://docs.linuxserver.io/images/docker-kasm

[^3]: https://kasmweb.com/docs/latest/guide/persistent_data.html#persistent-data

[^4]: https://kasmweb.com/docs/latest/how_to/reverse_proxy.html#update-zones

[^5]: https://kasmweb.com/docs/latest/how_to/reverse_proxy.html#example-caddy-config

[^6]: https://kasmweb.com/cloud-personal/docs/latest/control_panel.html#clipboard

[^7]: https://cdn.openai.com/threat-intelligence-reports/disrupting-malicious-uses-of-our-models-february-2025-update.pdf