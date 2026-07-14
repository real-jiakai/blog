---
title: GitHub主页实现svg图片动态效果
tags: ["github"]
date: 2022-03-03T10:26:09+08:00
lastmod: 2022-03-03
slug: github-svg
translationKey: "github-svg"
summary: 使用 Calligrapher.ai 生成手写动画 SVG，并将其嵌入 GitHub 个人主页 README。
---

## 复现 GitHub 主页动态效果

众所周知，在 GitHub 上新建一个与自己用户名相同的仓库，该仓库中的 README.md 文件会在 GitHub 的个人主页进行展示。

详情可参考 GitHub 的[管理个人资料 README 指南](https://docs.github.com/cn/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)。

但是，在不经意间，我看到了 GitHub 用户名为[MayanDev](https://github.com/Mayandev)大哥的个人主页酷炫的动态打招呼特效。

具体请见以下动态 gif 图片。👇

![mayandev的github主页](https://vip2.loli.net/2023/01/09/J1fmwEMhozGXOdj.gif)

非常炫酷，点击动态打招呼特效，会跳转到一个专门生成手写字的[网站](https://www.calligrapher.ai/)。

![专门生成手写字的网站](https://vip2.loli.net/2022/12/26/cCaFrwgIUlJbN1T.webp)

可以点击左上角的下载图标，将刚才手写字下载下来。

下载下来是一个后缀名为 svg 的文件。

## 下载的 SVG 为什么没有动画

> what is svg file?

可缩放矢量图形（英语：Scalable Vector Graphics，缩写：SVG）是一种基于可扩展标记语言（XML），用于描述二维矢量图形的图形格式。SVG 由 W3C 制定，是一个开放标准。

双击下载下来的以 svg 为后缀名的文件，在浏览器打开，发现其并没有一开始网站上的动态效果。

![svg文件无动态效果](https://vip2.loli.net/2022/12/26/SsRgQYlFXzpDOT9.webp)

> How to make svg file dynamic?

## 让 SVG 动起来

关于这个问题，我特意询问了[MayanDev](https://github.com/Mayandev)。

这里保留了[我与 MayanDev 的邮件交流记录](https://storage.gujiakai.top/documents/github-email.pdf)。

> Summary：

- 将刚才下载下来的 svg 图片用代码编辑器打开。
- 整理格式(删减不需要的内容)。
- 在开头加一段 css 代码。
- 将 svg 文件用 markdown 语法的超链接语法展示

> 用代码编辑器编辑前的 svg 文件和编辑后的 svg 文件的区别，见以下超链接。

[在 GitHub 提交中对比 SVG 修改前后的差异](https://github.com/real-jiakai/real-jiakai/commit/bc3ff7305807b7e4e064e9207e3775ace5ad80d8?diff=split#diff-baeb116eb5809d84b276b8dd622be650874cd7800065415625e2ef2e0eb0fca9)
