---
title: "ls > list命令的执行流程"
date: 2023-01-13T20:01:31+08:00
tags: ["linux"]
slug: "the-execution-process-ls->-list"
summary: 介绍ls > list命令的执行流程
---

## 提问

![提问](https://vip2.loli.io/2023/01/13/lUe7vE2SH8GOdLy.webp)

译文：

```shell
root@VM-0-11-debian:~/linux/2023/01# ls
root@VM-0-11-debian:~/linux/2023/01# ls > list
root@VM-0-11-debian:~/linux/2023/01# ls
list
root@VM-0-11-debian:~/linux/2023/01# cat list 
list
```

我知道`>`符号会将标准输出重定向至一个文件中，如果文件不存在它会创建该文件，否则会替换这个文件。

我想询问的是shell命令`ls > list`的执行流程是否如下我所描述的那样。

1）因为文件名为list的文件不存在，所以首先会创建一个名为list的文件。

2）ls命令将列举出目录中的内容(list)，列举的内容将被送入到标准输出中。

3）以替换添加的方式，将标准输出中的内容(list)添加到文件名为list的文件中。

我个人对于执行流程的理解如上所述，我希望你们能给我一些指点，谢谢。



## 回答

![回答](https://vip2.loli.io/2023/01/13/SDzKNMrwpI2bvCh.webp)

译文：

文件重定向操作符 > 由 shell 处理并且在启动二进制文件（ls）之前，将您所写入的任何文件创建/截断。这就是为什么您可以在文件内容中看到文件名list: 在 ls 进程启动之前已经创建了文件。

是的，你的理解是正确的。

这就是为什么不可能执行诸如 sort txt > txt 之类的操作— sort 读取文件之前，文件名为 txt的文件 将被截断。您最终将得到一个空文件。（注：sort命令用于对文本文件中所有行进行排序）



## 总结

`ls > list`的执行流程：

1）`> list`创建文件名为list的文件

2）`ls`命令列举目录的内容（结果为list）

3）结果list将以替换式写入的方式写入到文件名为list的文件中。

shell命令/linux命令还是有很多值得探究的地方的。今天看到一篇文章[What happens when you open a terminal and enter ‘ls’](https://www.warp.dev/blog/what-happens-when-you-open-a-terminal-and-enter-ls)，文章讲述了当你打开终端，输入`ls`命令会发生什么。自己浏览过后，发现有很多概念和名字都看不懂，阅读这篇文章对我而言有些痛苦，但这正好指出了我以后努力的方向。

[问题来源](https://stackoverflow.com/questions/74993370/query-of-the-execution-step-of-shell-command-ls-list)
