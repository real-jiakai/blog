---
title: "Hugo主题开发日记"
date: 2023-03-16T13:31:46+08:00
tags: ["hugo"]
slug: "hugo-theme-development-diary"
summary: 记录Hugo主题的开发经过。
showtoc: true
---

> 注：本博文采用的便是本人开发的hugo主题。

月初，提交毕设中期报告的时候，我提到放弃Hugo，转而采用Next.js来完成毕设。为了更好地显示Next.js相较于Hugo的优势，于是我准备开发一个Hugo博客主题，已备之后答辩时阐述。

![中期报告片段](https://vip2.loli.io/2023/03/16/JNsfyt9mpVULYuo.webp)

3月14日~3月16日，差不多两天的时间，参照多方教程以及chatgpt、new bing，最终开发出了自己的Hugo博客主题。特此记录一下Hugo博客主题开发的历程。

使用`hugo new theme hugo-simple-theme`命令便会在themes文件夹中生成一个名为hugo-simple-theme的文件夹。

一开始的目录结构如下图所示：

```
hugo-simple-theme（hugo主题）
├── archetypes（hugo主题文章模板）
├── layouts（hugo主题布局文件）
├── static（hugo主题的静态文件）
├── LICENSE（hugo主题的许可证信息）
└── themes.toml（hugo主题的元数据信息）
```

其中，重点关注layouts文件夹。剩余的文件可以慢慢补充。

layouts文件夹的目录结构如下图所示：

```
layouts
├── _default（默认页面布局文件夹）
│   ├── baseof.html（所有页面的基底模板）
│   ├── list.html（列表页面的模板文件）
│   └── single.html（单页面的模板文件）
├── partials（部分页面布局文件夹）
│   ├── head.html（网页头部）
│   ├── header.html（网页的主导航栏）
│   └── footer.html（网页的页脚信息）
├── 404.html（网站的404错误页面）
└── index.html（网站的主页）
```

本次开发，我用到的技术有

- HTML

- CSS

- JavaScript

- [Bootstrap](https://getbootstrap.com/) 

- [Lightbox2 + jQuery](https://github.com/lokesh/lightbox2)

> 本篇博文重点关注layouts/_default文件夹中代码的讲解。

## baseof.html

所有页面的基地模板—baseof.html的代码如下：

```html
<!DOCTYPE html>
<html lang="en">
{{/* html head */}}
{{- partial "head.html" . -}}

<body class="d-flex flex-column min-vh-100">
    {{/* html header */}}
    {{- partial "header.html" . -}}

    {{/* html main */}}
    <div class="flex-fill container-fluid mx-auto mt-3 mb-5">
        <div class="row justify-content-center">
            <div class="col-md-6 offset-md-3">
                {{- block "main" . -}}
                {{- end -}}
            </div>
            <div class="col-md-3">
                {{- partial "sidebar.html" . -}}
            </div>
        </div>
    </div>

    {{/* html footer */}}
    {{- partial "footer.html" . -}}
    {{/* html scripts */}}
    {{- partial "scripts.html" . -}}
    {{/* html analytics */}}
    {{- partial "analytics.html" . -}}
</body>

</html>
```

这部分代码将页面大体拆分为4部分。

- head标签部分

- 页面顶部导航栏

- 页面主体部分

- 页面尾部

body标签上的css类名解释：

`d-flex`是 Bootstrap CSS 类之一，用于指定一个元素为弹性容器（flex container），这样子元素就可以使用flex布局来排列了。

而`flex-column` 是弹性容器的一个子类，用于指定弹性容器的子元素排列方式为纵向。

而`min-vh-100`是 CSS 的 viewport height (vh) 单位，用于指定元素的最小高度为视窗高度的 100%。这通常用于实现满屏效果，即让元素的高度始终占据整个视窗高度。

页面主体部分最外侧的css类名解释：

- flex-fill：将其父元素 .container-fluid 的高度设为100%，填满可用的空间。
- container-fluid：将元素的宽度设置为100%，以占据整个浏览器窗口的宽度。
- mx-auto：将元素居中对齐。
- mt-3 mb-5：设置上下边距，用于垂直方向的定位。

注：这边的min-vh + flex-fill设置得很关键，如果不添加这个组合，则会出现首页内容过少时，尾部元素上浮的情况。
去年我用vue搭建的一个个人站点，就出现了尾部元素上浮的情况。

![vue个人站点尾部元素上浮](https://vip2.loli.io/2023/03/16/G7u1RKSI8FbVmYL.webp)

接着在页面的主体部分，我将页面分为了main块和侧边栏。采用了Bootstrap的网格布局。

最后便是尾部元素以及一些js脚本的载入。

## sidebar.html

在中等屏幕和大屏幕上的显示main块和侧边栏，在小屏幕及超小屏幕上仅仅显示main块。

如果markdown文档首部的front matter部分的notoc参数为true，则不显示侧边栏。

```html
{{ if not .Params.notoc }}
<div class="d-none d-md-block">
    {{ .TableOfContents }}
</div>
{{ end }}
```

## single.html

这部分代码定义了单页面如何展示，即markdown文章页面如何展示。
title部分用边框包裹，末尾加上文章的标签，最后再插入utterences评论。

```html
{{ define "main" }}
<div class="container-md align-items-center">
  <h2 class="text-center border border-primary rounded p-3">{{ .Title }}</h2>
  <br />
  {{ .Content }}
  {{ range .Params.tags}}
  📌 <a href="/tags/{{ . | urlize }}">{{ . }}</a>
  {{ end }}
  {{/* utterances */}}
  {{- partial "utterances.html" . -}}
</div>
{{ end }}
```

## terms.html

在terms.html的主模板中，首先定义了一个$type变量，然后通过range遍历.Data.Terms.Alphabetical这个变量，获取每个分类的名称和数量，并将它们存储在$name和$count变量中。

在每次循环中，使用with语句调用Hugo的GetPage函数来获取特定分类页面的链接，然后使用这个链接生成一个卡片，并将名称和数量插入到卡片的HTML代码中。

在卡片中，使用.Name访问特定页面的名称，使用$count访问该分类的文章数，这两者都将插入到生成的HTML中。由于卡片是在with语句中生成的，因此在这个范围内必须使用.Name来访问特定页面的名称。

```html
{{- define "main" }}
    <div class="row">
        {{- $type := .Type }}
        {{- range $key, $value := .Data.Terms.Alphabetical }}
            {{- $name := .Name }}
            {{- $count := .Count }}
            {{- with site.GetPage (printf "/%s/%s" $type $name) }}
                <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
                    <div class="card">
                        <a href="{{ .Permalink }}" class="card-body text-center">
                            <span class="h5 mb-0">{{ .Name }} <sup><strong>{{ $count }}</strong></sup></span>
                        </a>
                    </div>
                </div>
            {{- end }}
        {{- end }}
    </div>
{{- end }}
```

## list.html

~~由于我决定再首页展示博文列表，因此list.html无需再次定义。~~

由于需要在具体的某个标签下，展示所有含该标签的博文列表，因此list.html是必要的。

这段代码使用无序列表，依次展示某个标签下的所有文章。

```html
{{ define "main" }}
    <div class="container">
        <h1 class="mt-5 mb-4">📌 {{ .Title }}</h1>
        <ul class="list-group">
            {{ range .Data.Pages }}
                <li class="list-group-item">
                    <a href="{{ .Permalink }}">{{ .Title }}</a>
                    <span class="badge bg-primary rounded-pill">{{ .Date.Format "2006-01-02" }}</span>
                </li>
            {{ end }}
        </ul>
    </div>
{{ end }}
```

## rss.xml

照搬别人的RSS全文输出代码。

## 其余

剩余的代码就不再赘述，具体可见我的github仓库[hugo-simple-theme](https://github.com/simple-is-awesome/hugo-simple-theme)，有不懂的多问chatgpt和new bing。

