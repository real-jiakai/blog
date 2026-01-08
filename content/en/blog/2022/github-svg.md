---
title: "Creating Animated SVG Effects on Your GitHub Profile"
tags: ["github"]
date: 2022-03-03T10:26:09+08:00
slug: github-svg
summary: This article explains how to create animated SVG effects on your GitHub profile page.
---

As we all know, if you create a repository on GitHub with the same name as your username, the README.md file in that repository will be displayed on your GitHub profile page.

For details, please [click here.](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)

However, I happened to notice a cool animated greeting effect on the GitHub profile of a user named [MayanDev](https://github.com/Mayandev).

See the following animated GIF below.

![MayanDev's GitHub profile](https://vip2.loli.net/2023/01/09/J1fmwEMhozGXOdj.gif)

Very cool! Clicking on the animated greeting effect takes you to a [website](https://www.calligrapher.ai/) specifically designed to generate handwritten text.

![Website for generating handwritten text](https://vip2.loli.net/2022/12/26/cCaFrwgIUlJbN1T.webp)

You can click the download icon in the top left corner to download the handwritten text you just created.

The downloaded file has an svg extension.

> What is an SVG file?

Scalable Vector Graphics (SVG) is an XML-based vector image format for describing two-dimensional graphics. SVG is developed by W3C and is an open standard.

When you double-click the downloaded SVG file and open it in a browser, you'll find it doesn't have the dynamic effect seen on the original website.

![SVG file without animation](https://vip2.loli.net/2022/12/26/SsRgQYlFXzpDOT9.webp)

> How to make an SVG file animated?

Regarding this question, I specifically reached out to [MayanDev](https://github.com/Mayandev).

Here's my email exchange with him. [click here](/document/github-email.pdf)

> Summary:

- Open the downloaded SVG file with a code editor.
- Clean up the format (remove unnecessary content).
- Add a CSS code snippet at the beginning.
- Display the SVG file using Markdown hyperlink syntax.

> See the difference between the SVG file before and after editing with a code editor via the following link.

[click here](https://github.com/real-jiakai/real-jiakai/commit/bc3ff7305807b7e4e064e9207e3775ace5ad80d8?diff=split#diff-baeb116eb5809d84b276b8dd622be650874cd7800065415625e2ef2e0eb0fca9)
