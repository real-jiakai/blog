---
title: "Solution for Windows Git Bash Conda Activation Error 'UnicodeDecodeError: gbk codec can't decode byte'"
date: 2023-09-30T15:50:09+08:00
tags: ['python','conda']
slug: "conda-activation-error-unicode-decode-gbk"
summary: "Introducing the solution for Windows git bash conda activation error 'UnicodeDecodeError: gbk codec can't decode byte 0xaf in position 271: illegal multibyte sequence'."
showtoc: true
---

## Background

Starting graduate school, I brought a new Windows computer. This Windows computer had no environments installed—even Anaconda was only installed after school started.

During the Mid-Autumn and National Day holidays, I planned to back up the photos from the sm.ms image hosting service. During undergraduate, I would back up sm.ms every month.

So I pulled my sm.ms Python script from my GitHub repository, created a new Python environment with conda. When I tried to activate that Python environment, the terminal showed an error: "UnicodeDecodeError: 'gbk' codec can't decode byte 0xaf in position 271: illegal multibyte sequence".

![conda activation error](https://vip2.loli.net/2023/09/30/9FSwu4Kif5zJpk3.webp)

Clearly an encoding issue.

## Solution

After some searching and attempts, I solved the error by adding the following line to the .condarc file in the C drive user directory (create the file if it doesn't exist):

```bash
# Tell Python interpreter to use UTF-8 encoding by default when processing text data
export PYTHONUTF8=1
```

GPT-4's explanation of this line:

![GPT-4 explanation](https://vip2.loli.net/2023/09/30/2t4InxYCfBNTdm7.webp)

Successfully activated Python environment. (The image below shows exporting in git bash terminal, which is temporary. For permanent effect, it's recommended to modify the .condarc configuration file)

![Successfully activated Python environment](https://vip2.loli.net/2023/09/30/UXJEGRHSg8xacQv.webp)

Now I can happily back up my image hosting pictures.

![](https://vip2.loli.net/2023/09/30/tMDPoIFbZY2lQrg.webp)

## Supplement

Initially, I changed the Windows "Language for non-Unicode programs" setting to English (United States), which also solved the encoding issue. But I found the PicGo software went completely black screen. When I changed it back to Chinese (Simplified, Singapore), PicGo no longer had the black screen issue.

![Change Windows "Language for non-Unicode programs" setting](https://vip2.loli.net/2023/09/30/etKHScM4YgVQIC5.webp)

## Reference Links

- [How do I set the PYTHONUTF8 environment variable to enable UTF-8 encoding by default in Python?](https://stackoverflow.com/questions/50933194/how-do-i-set-the-pythonutf8-environment-variable-to-enable-utf-8-encoding-by-def)

- [Can not activate/deactivate conda environment due to cmder lambda character not handled in conda encoder/decoder #7445](https://github.com/conda/conda/issues/7445)

- [Anaconda prompt fail to launch: UnicodeEncodeError: 'utf-8' codec can't encode character '\udd8e': surrogates not allowed](https://stackoverflow.com/questions/69130762/anaconda-prompt-fail-to-launch-unicodeencodeerror-utf-8-codec-cant-encode-c)
