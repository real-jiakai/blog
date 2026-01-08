---
title: "Failed to parse PID from file /usr/local/nginx/logs/nginx.pid: Invalid argument的解决方案"
date: 2023-01-14T19:29:39+08:00
tags: ['nginx']
slug: "a-solution-about-nginx-problem"
summary: 介绍nginx安装过程中遇到bug的解决方案。
showtoc: true
---

## 问题描述

从源代码安装nginx后，使用如下代码将nginx注册为系统服务。

```shell
# 创建服务脚本
vi /usr/lib/systemd/system/nginx.service 

# nginx.service文件内容
[Unit]
Description=The NGINX HTTP and reverse proxy server
After=syslog.target remote-fs.target nss-lookup.target

[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid
ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop
PrivateTmp=true

[Install]
WantedBy=multi-user.target

# 重新加载配置文件
systemctl daemon-reload
# 启动nginx服务
systemctl start nginx
# 查看nginx服务状态
systemctl status nginx
```

下图是我从源代码来安装nginx，并将nginx添加为系统服务后，查看nginx服务状态的效果图。

![systemctl status nginx](https://vip2.loli.net/2023/01/14/waiVO5Il7BftTKm.webp)

重点关注倒数第2行，报错信息为`nginx.service: Failed to parse PID from file /usr/local/nginx/logs/nginx.pid: Invalid argument`。意思是从文件`/usr/local/nginx/logs/nginx.pid`中解析PID失败。

而路径`/usr/local/nginx/logs/nginx.pid`，在nginx.service文件[Service]区块中定义过：`PIDFile=/usr/local/nginx/logs/nginx.pid`，路径没有错误，这让我摸不着头脑。

stackoverflow上有关于类似问题的讨论：[centos 7: nginx Failed to read PID from file /run/nginx.pid: Invalid argument](https://stackoverflow.com/questions/42544702/centos-7-nginx-failed-to-read-pid-from-file-run-nginx-pid-invalid-argument)。

一共有两个回答，第一个回答说可以忽略日志中的警告（确实可以忽略，因为这个错误并没有导致nginx运行异常）；第二个回答说重启服务器解决了问题，于是我也重启服务器，但是当我重启完服务器后，查看nginx状态时，发现报错信息变成了`nginx.service: New main PID  does not exist or is a zombie.`，意思是新的主进程ID并不存在或者是一个僵尸进程。于是我又重启nginx服务，当我重启完后，新的报错信息又变为了一开始遇到的报错信息：`nginx.service: Failed to parse PID from file /usr/local/nginx/logs/nginx.pid: Invalid argument`。



## 解决方案

最后我结合以下3个网页解决了遇到的问题。

[nginx.service: Failed to read PID from file /run/nginx.pid: Invalid argument](https://bugs.launchpad.net/ubuntu/+source/nginx/+bug/1581864)

[Nginx.service: failed to parse pid from file /run/nginx.pid: invalid argument](https://kodlogs.net/725/nginx-service-failed-to-parse-pid-from-file-run-nginx-pid-invalid-argument)

[nginx.service: Failed to parse PID from file /run/nginx.pid: Invalid argument](https://zhidao.baidu.com/question/720160621097785285.html)

解决措施：在nginx.service文件[Service]区块中新增一行`ExecStartPost=/bin/sleep 0.1`。意思是在systemd启动nginx服务后睡眠0.1s，以保证nginx服务启动完成并已经创建完PIDFile，这样子systemd去读取nginx的pid时，就不会造成读取失败的情况。

注意下面带+号的新增代码。

```shell
# 创建服务脚本
vi /usr/lib/systemd/system/nginx.service 

# nginx.service文件内容
[Unit]
Description=The NGINX HTTP and reverse proxy server
After=syslog.target remote-fs.target nss-lookup.target

[Service]
Type=forking
PIDFile=/usr/local/nginx/logs/nginx.pid
ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
+ ExecStartPost=/bin/sleep 0.1
ExecReload=/usr/local/nginx/sbin/nginx -s reload
ExecStop=/usr/local/nginx/sbin/nginx -s stop
PrivateTmp=true

[Install]
WantedBy=multi-user.target

# 重新加载配置文件
systemctl daemon-reload
# 启动nginx服务
systemctl start nginx
# 查看nginx的状态
systemctl status nginx
# 开机自启
systemctl enable nginx.service
```

关于服务脚本内容解释

```shell
# 定义启动顺序与依赖关系。
[Unit]
# 当前服务的简单描述。
Description=The NGINX HTTP and reverse proxy server
# 启动顺序。
After=syslog.target remote-fs.target nss-lookup.target

# 定义如何启动当前服务。
[Service]
# 定义启动类型。
Type=forking
# 采用引用服务的 PID 文件的路径。
PIDFile=/usr/local/nginx/logs/nginx.pid
# 启动服务之前执行的命令，-t表示测试配置并退出，-c用于指定配置文件。
ExecStartPre=/usr/local/nginx/sbin/nginx -t -c /usr/local/nginx/conf/nginx.conf
# 定义启动进程时执行的命令，-c用于指定配置文件。
ExecStart=/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf
# 启动服务之后执行的命令，在systemed读取PID文件前，让systemd睡眠0.1s。
ExecStartPost=/bin/sleep 0.1
# 重启服务时执行的命令，-s用于给出主进程发送信号。
ExecReload=/usr/local/nginx/sbin/nginx -s reload
# 停止服务时执行的命令，-s用于给出主进程发送信号。
ExecStop=/usr/local/nginx/sbin/nginx -s stop
# 如果为true，则为执行的进程设置一个新的文件系统命名空间，并在其中挂载一个私有/tmp 目录，
# 命名空间之外的进程不会共享该目录。
# 这对于保护对进程临时文件的访问非常有用，但是无法通过/tmp 在进程之间共享。默认为 false。
PrivateTmp=true

# 定义如何安装这个配置文件。
[Install]
# 表示该服务所在的 Target。
WantedBy=multi-user.target
```



## 总结

![网友解释的原因图一](https://vip2.loli.net/2023/01/14/JFTQc74fLC6luxo.webp)

![网友解释的原因图二](https://vip2.loli.net/2023/01/14/S1p3kh5MqzujQFZ.webp)

[图一出处](https://zhidao.baidu.com/question/720160621097785285.html)

[图二出处](https://bugs.launchpad.net/ubuntu/+source/nginx/+bug/1581864)

