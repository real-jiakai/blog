+++
title = "Hugo博客Bear主题添加Fancybox灯箱"
date = "2022-11-07"
slug = "hugo-bear-theme-add-fancybox"
tags = ["hugo"]
+++

## 1.背景

静态博客，点击图片没有放大效果，对于读者而言，不友好。

有很多解决方案，能解决这一诟病。如Fancybox、Medium Zoom、Light Gallery等。
本文基于Hugo博客Bear主题，略作修改，使博客获得点击图片，图片会放大的功能。



## 2.操作步骤

1. 在Hugo博客的根目录下的static文件夹下新建js文件夹，在里面新建一个js文件。

```
.
├── archetypes
├── content
├── data
├── layouts
├── public
├── resources
├── static
│   └── js
│       └── custom.js
└── themes
```

2. 在新建的js文件中增添以下代码。以下代码采用的是jquery语法，选择所有的img标签，在外面包裹一层a标签。包裹a标签的原因可以见文末Fancybox官方文档的样例。

```javascript
$(document).ready(function() {
    $("img").each(function() {
        var currentImage = $(this);
        currentImage.wrap("<a href='" + currentImage.attr("src") + "' data-fancybox='gallery' data-caption='" + currentImage.attr("alt") + "'></a>");
    });
});
```

3. 根据以下路径，找到baseof.html的位置。

```
themes
└── hugo-bearblog
    └── layouts
        └── _default
            └── baseof.html
```

4. 在head标签末尾引入Fancybox的css样式表；在main标签的末尾，依次引入JQuery文件、Fancybox的js文件以及刚才自定义的js文件。【注意以下代码中前面含`+`号的标识。】

```html
<!DOCTYPE html>
<html lang="{{ with .Site.LanguageCode }}{{ . }}{{ else }}en-US{{ end }}">

<head>
  ......
    
+   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.css"/>
  
</head>

<body>
  <header>
    ......
  </header>
  <main>
    {{- block "main" . }}{{- end }}
+    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
+    <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"></script>
+    <script src="/js/custom.js"></script>
  </main>
  <footer>
   ......
  </footer>
</body>
</html>
```




最终效果：

![测试1](https://lipsum.app/id/47/200x150)

![测试2](https://lipsum.app/id/46/200x150)

## 3.参考链接

[使用 FancyBox 为图片添加放大及相册功能](https://www.hostarr.com/fancybox/)

[Fancybox官方文档](https://fancyapps.com/fancybox/)

