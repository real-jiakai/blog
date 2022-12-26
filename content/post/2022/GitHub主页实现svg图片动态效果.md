---
title: GitHub主页实现svg图片动态效果
tags: ["GitHub"]
date: 2022-03-03T10:26:09+08:00
slug: github-svg
summary: 本文介绍如何实现GitHub个人主页svg图片动态效果。
---

众所周知，在 GitHub 上新建一个与自己用户名相同的仓库，该仓库中的 README.md 文件会在 GitHub 的个人主页进行展示。

详情请[click me。](https://docs.github.com/cn/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)

但是，在不经意间，我看到了 GitHub 用户名为[MayanDev](https://github.com/Mayandev)大哥的个人主页酷炫的动态打招呼特效。

具体请见以下动态 gif 图片。👇

![](https://vip2.loli.io/2022/12/26/nZ69krXIs7Y8xFN.webp)

非常炫酷，点击动态打招呼特效，会跳转到一个专门生成手写字的[网站](https://www.calligrapher.ai/)。

![](https://vip2.loli.io/2022/12/26/cCaFrwgIUlJbN1T.webp)

可以点击左上角的下载图标，将刚才手写字下载下来。

下载下来是一个后缀名为 svg 的文件。

> what is svg file?

可缩放矢量图形（英语：Scalable Vector Graphics，缩写：SVG）是一种基于可扩展标记语言（XML），用于描述二维矢量图形的图形格式。SVG 由 W3C 制定，是一个开放标准。

双击下载下来的以 svg 为后缀名的文件，在浏览器打开，发现其并没有一开始网站上的动态效果。

![](https://vip2.loli.io/2022/12/26/SsRgQYlFXzpDOT9.webp)

> How to make svg file dynamic?

关于这个问题，我特意询问了[MayanDev](https://github.com/Mayandev)。

这是我和他的邮件交流记录。👉[click me](https://static.gujiakai.top/static/blog/pdf/github-email.pdf)

> Summary：

- 将刚才下载下来的 svg 图片用代码编辑器打开。
- 整理格式(删减不需要的内容)。
- 在开头加一段 css 代码。
- 将 svg 文件用 markdown 语法的超链接语法展示

> 用代码编辑器编辑前的 svg 文件和编辑后的 svg 文件的区别，见以下超链接。

[click me](https://github.com/real-jiakai/real-jiakai/commit/bc3ff7305807b7e4e064e9207e3775ace5ad80d8?diff=split)
