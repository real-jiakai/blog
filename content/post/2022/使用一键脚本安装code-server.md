---
title: "使用一键脚本安装code-server"
date: 2022-08-17T15:40:02+08:00
draft: false
tags: ['github']
slug: use-script-to-install-code-server
summary: 使用一键脚本安装code-server，更改b站视频粗糙的安装部署操作
---



## 1.文章背景

近期，我为了更好地查看今日校园签到情况，采用了python的schedule库+email库，每天定时定点检查日志文件的内容，并将检查结果发送至我的邮箱中，方便自己查验。由于需要后台运行此python脚本，于是我想到了去年夏天做的b站视频里面涉及到的一个技术点—screen会话。新建一个screen会话，在这个会话中运行python脚本，接着再将该会话与linux终端分离，即可让该会话24小时在后台运行。

在摸索screen会话的过程中，我看了一下GitHub上code-server的使用说明。发现说明上讲述的是采用一键安装脚本的方式。于是准备更新一下code-server的安装部署流程。

***



## 2.使用一键脚本安装code-server

官方github仓库给出的是一键安装脚本的方法，如下：

```shell
curl -fsSL https://code-server.dev/install.sh | sh
```

关于脚本的解释

```
# curl是一种命令行工具，作用是发出网络请求，然后得到和提取数据，显示在"标准输出"（stdout）上面。
##################################################################################
# 关于-fsSl的解释：
# -f (--fail) 表示在服务器错误时，阻止一个返回的表示错误原因的 html 页面，而由 curl 命令返回一个错误码 22 来提示错误。
# -s,--silent：安静模式。不显示进度表或错误信息。使curl静音。它仍然会输出您请求的数据，甚至可能输出到终端stdout，除非您对它进行重定向。
# -S,--show-error：当与-s，--silent一起使用时，它会使curl在失败时显示错误消息。
# -L,--location:如果服务器报告请求的页面已移动到其他位置（用location:header和3xx响应代码），此选项将使curl在新位置上重新执行请求。
##################################################################################
# curl -FsSL 网址链接：该命令通常用于下载文件。
##################################################################################
# | 是linux中的管道符，管道符之前命令的输出会作为管道符命令之后的输入。
##################################################################################
# sh代表shell，作用是让shell来执行shell脚本。
##################################################################################
# 以上命令的意思是通过curl这一命令行工具来下载.sh后缀的shell脚本，并执行这段脚本。
```

[curl的用法指南](https://www.ruanyifeng.com/blog/2019/09/curl-reference.html)

[curl man page](https://curl.se/docs/manpage.html) 

[Linux Pipe Command with Examples](https://linuxhint.com/linux-pipe-command-examples/) 

[sh Linux man page](https://man7.org/linux/man-pages/man1/sh.1p.html)

[what does adding sh do?](https://askubuntu.com/questions/263504/what-does-adding-sh-do)

[What's a .sh file](https://stackoverflow.com/questions/13805295/whats-a-sh-file) 


***



### 2.1.关于`curl -fsSL https://code-server.dev/install.sh`执行效果的演示

<script id="asciicast-515442" src="https://asciinema.org/a/515442.js" async></script>

可以看到curl -fsSL仅仅是将shell脚本的内容输出到了终端上。

再加上管道符|，可以将shell脚本的文件内容作为后续命令的输入，调用shell执行shell脚本的内容。

官方GitHub仓库README文件中还有一条命令如下，该命令可以预览在安装过程中会发生什么，简单来讲就是将shell脚本的执行命令及流程在终端上呈现出来，而不执行该shell脚本。

```shell
# -s选项表明从标准输入中读取命令
# --标志着选项的结束，任何在--后面的参数都会被当做文件名和参数
# --dry-run，意为干运行，即打印将要执行的命令，但并不执行该命令(除了在特殊情况下会执行。)
curl -fsSL https://code-server.dev/install.sh | sh -s -- --dry-run
```

[make Linux man page](https://man7.org/linux/man-pages/man1/make.1.html)

[what does "sh -" mean?](https://unix.stackexchange.com/questions/423501/what-does-sh-mean) 


***



### 2.2.`curl -fsSL https://code-server.dev/install.sh | sh -s --dry-run`执行效果的演示

<script id="asciicast-515473" src="https://asciinema.org/a/515473.js" async></script>


```shell
+ mkdir -p ~/.cache/code-server
+ curl -#fL -o ~/.cache/code-server/code-server_4.5.2_amd64.deb.incomplete -C - https://github.com/coder/code-server/releases/download/v4.5.2/code-server_4.5.2_amd64.deb
+ mv ~/.cache/code-server/code-server_4.5.2_amd64.deb.incomplete ~/.cache/code-server/code-server_4.5.2_amd64.deb
+ dpkg -i ~/.cache/code-server/code-server_4.5.2_amd64.deb
```

该shell脚本一共执行了4条命令。具体含义如下：

```
第一条命令意为创建目录，-p参数，意为创建多级目录的时候，如果创建的目录存在父目录且父目录不存在的话，会一同创建。
##################################################################################
第二条命令中的#fL参数解释
#：用一个简单的进度条来显示传输进度。
-f (--fail) 表示在服务器错误时，阻止一个返回的表示错误原因的 html 页面，而由 curl 命令返回一个错误码 22 来提示错误。
# -L,--location:如果服务器报告请求的页面已移动到其他位置（用location:header和3xx响应代码），此选项将使curl在新位置上重新执行请求。
##################################################################################
-o：将输出写入文件
##################################################################################
-C -：-C参数表示在给定的偏移处继续之前的文件传输，使用-C -参数告诉curl要从哪个位置开始恢复传输。
总结：将code-server的github软件包，写入指定位置的文件中。
##################################################################################
第三条命令，用来给code-server软件包改名。
##################################################################################
第四条命令，用来安装code-server。
dpkg是Debian家族的包管理工具，-i参数意为安装。
```

[dpkg man page](https://man7.org/linux/man-pages/man1/dpkg.1.html) 

[Linux mv命令](https://www.runoob.com/linux/linux-comm-mv.html) 

[mkdir man page](https://man7.org/linux/man-pages/man1/mkdir.1.html) 

[apt man page](https://manpages.ubuntu.com/manpages/xenial/man8/apt.8.html) 


***



### 2.3.`curl -fsSL https://code-server.dev/install.sh | sh`执行效果的演示

<script id="asciicast-515449" src="https://asciinema.org/a/515449.js" async></script>

由于之前执行过，故再次执行速度会很快，第一次执行会有一个安装过程。

***



## 3.配置操作

![执行完一键脚本的终端提示](https://vip2.loli.io/2022/08/17/PYDEU9yBGRArMav.png)

执行完一键脚本后，可以看到如上图所示的终端提示。

这段话的意思是说，如果你想要在后台让code-server一直运行的话，可以执行以下命令

```shell
# systemctl是一个控制systemed系统以及服务的管理工具。
# systemd是Linux系统工具，用来启动守护进程，已成为大多数发行版的标准配置。
# enable --now搭配使用可以在启用code-server单元实例的同时，启动该实例。
# 该命令会创建一个软链接。
sudo systemctl enable --now code-server@$USER
```

[Systemd 入门教程：命令篇](https://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html) 

[systemctl man page](https://man7.org/linux/man-pages/man1/systemctl.1.html) 

如果你不需要一个后端服务，你可以仅仅运行`code-server`命令。

一开始运行`code-server`命令后，开放了服务器的8080端口，结果在浏览器地址栏输入ip:8080的形式，访问失败。

这时需更改配置文件，配置文件的位置是`~/.config/code-server/config.yaml`。配置文件的路径，在你运行`code-server`命令的时候，终端会有提示。

`vi ~/.config/code-server/config.yaml`，用vim编辑器编辑code-server的配置文件，将里面的password更改成自己熟知的密码，以及将127.0.0.1更改成0.0.0.0。在服务器中，0.0.0.0指的是本机上的所有ipv4地址。如果在一台主机开启的一个服务绑定侦听的地址是0.0.0.0:端口，那么通过该服务器的公网ip:端口号，就能访问该服务。

[0.0.0.0](https://en.wikipedia.org/wiki/0.0.0.0) 



### 3.1.`sudo systemctl enable --now code-server@$USER`执行效果的演示

<script id="asciicast-515465" src="https://asciinema.org/a/515465.js" async></script>

接着，只要你确保服务器开机，确保服务器端口打开，就能通过地址栏ip地址:端口的形式访问了。

***



### 3.2.通过域名直接访问code-server，而非域名:端口

可以在DNS解析控制台添加一条A记录，主机记录为*，记录值为你服务器的ip地址。代表凡是发起对\*.example.com的请求，如A.example.com、B.example.com，均转发到你的服务器。

接着我们可以在服务器上安装nginx反向代理服务器，来反向代理对服务器的请求。可以根据不同的域名主机记录值来转发到不同的端口，提供相对应的服务。可以在nginx的配置文件中添加一块如下的配置（这段配置意为将请求的A.example.com，转发至本服务器的code-server服务端口，这样你就能收到code-server的响应了）：

```nginx
http{
    server{
        listen 80;
        server_name xxx域名(如A.example.com);
      
        location /{
            proxy_pass http://0.0.0.0:xxxcode-server服务的端口号;
        }
}
```

***



### 3.3.如何彻底删除code-server

```shell
# 删除软件包以及配置文件
# remove仅会移除软件包，但会保留用户配置文件
# purge会将软件包以及用户配置文件一起移除
sudo apt purge code-server
# 强制删除刚才创建软链接。
# 即删除运行sudo systemctl enable --now code-server@$USER后生成的两个后缀为.service的文件
rm -rf /etc/systemd/system/default.target.wants/code-server@root.service
rm -rf /lib/systemd/system/code-server@.service
# 强制删除code-server目录
rm -rf cd ~/cache/code-server
```

