---
title: "windows git bash conda激活环境报错UnicodeDecodeError: 'gbk' codec can't decode byte 0xaf in position 271: illegal multibyte sequence的解决方案"
date: 2023-09-30T15:50:09+08:00
tags: ['python','conda']
slug: "conda-activation-error-unicode-decode-gbk"
summary: "介绍windows git bash conda激活环境报错UnicodeDecodeError: 'gbk' codec can't decode byte 0xaf in position 271: illegal multibyte sequence的解决方案。"
showtoc: true
---

## 背景介绍

研一开学，我拿着一台新的windows电脑上学，这台windows电脑上什么环境都没装，anaconda的安装也是开学才装的。

趁中秋、国庆假期，我准备将sm.ms这个图床服务上的照片做一次备份。上大学时，我每隔一个月就会对sm.ms进行备份。

于是我拉取我github仓库中的sm.ms python脚本，用conda新建一个python环境，当我激活该python环境的时候，终端报错：“UnicodeDecodeError: 'gbk' codec can't decode byte 0xaf in position 271: illegal multibyte sequence”。

![conda激活环境报错](https://vip2.loli.io/2023/09/30/9FSwu4Kif5zJpk3.webp)

一看就是编码问题。

## 解决方案

最终在我的一番搜索和尝试下，在c盘的用户目录下的.condarc文件中（如果没有该文件可以新建一个），添加如下一行，解决了该报错。

```bash
# 告诉Python解释器，在处理文本数据时，默认使用UTF-8编码
export PYTHONUTF8=1
```

关于这行GPT4的解释

![GPT4解释](https://vip2.loli.io/2023/09/30/2t4InxYCfBNTdm7.webp)

成功激活python环境。(下图展示的为在git bash终端export，是临时生效的，要想永久生效，建议操作配置文件.condarc)

![成功激活python环境](https://vip2.loli.io/2023/09/30/UXJEGRHSg8xacQv.webp)

可以愉快地备份图床图片了。

![](https://vip2.loli.io/2023/09/30/tMDPoIFbZY2lQrg.webp)

## 补充

一开始我更改Windows上的"Language for non-Unicode programs"（非Unicode程序的语言）设置，将其改为English（United States），也能解决该编码问题，但是我发现picgo软件直接黑屏了，当我再次将其更改回Chinese（Simplified,Singapore）后，picgo软件就不再黑屏。

![更改Windows上的"Language for non-Unicode programs"（非Unicode程序的语言）设置](https://vip2.loli.io/2023/09/30/etKHScM4YgVQIC5.webp)

## 参考链接

- [How do I set the PYTHONUTF8 environment variable to enable UTF-8 encoding by default in Python?](https://stackoverflow.com/questions/50933194/how-do-i-set-the-pythonutf8-environment-variable-to-enable-utf-8-encoding-by-def)

- [Can not activate/deactivate conda environment due to cmder lambda character not handled in conda encoder/decoder #7445](https://github.com/conda/conda/issues/7445)

- [Anaconda prompt fail to launch: UnicodeEncodeError: 'utf-8' codec can't encode character '\udd8e': surrogates not allowed](https://stackoverflow.com/questions/69130762/anaconda-prompt-fail-to-launch-unicodeencodeerror-utf-8-codec-cant-encode-c)






