---
title: "归档"
url: "/archive/"
layout: "archive"
# 本页（归档页）自身只输出 HTML；不带这行时下方 cascade 也会作用于本页，
# 导致 Hugo 为归档页寻找不存在的 MarkdownRaw 模板而报警告
outputs:
  - HTML
cascade:
  outputs:
    - HTML
    - MarkdownRaw
---