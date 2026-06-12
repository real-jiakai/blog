<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="3.0"
	xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
	xmlns:atom="http://www.w3.org/2005/Atom">
	<xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
	<xsl:template match="/">
	<xsl:variable name="owner_url"><xsl:value-of select="/rss/channel/link"/></xsl:variable>
<html lang="zh-CN">
	<head>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta name="referrer" content="unsafe-url" />
		<title><xsl:value-of select="/rss/channel/title"/></title>
		<link rel="stylesheet" href="/xslt/water.min.css" />
	</head>
	<body>
		<h1>
			<img alt="订阅图标" src="https://www.vectorlogo.zone/logos/rss/rss-tile.svg" style="height:1em;vertical-align:middle;" />&#xa0;
			<xsl:value-of select="/rss/channel/title"/>
		</h1>

		<p>
			<xsl:value-of select="/rss/channel/description"/>
		</p>

		<p>这是&#xa0;<a><xsl:attribute name="href">
				<xsl:value-of select="/rss/channel/link"/>
			</xsl:attribute>
			<xsl:value-of select="/rss/channel/title"/></a>&#xa0;网站的&#xa0;<a href="https://www.rss.style/what-is-a-feed.html">RSS 订阅源</a>。
		</p>

		<p>它供&#xa0;<a href="https://www.rss.style/newsreaders.html">RSS 阅读器</a>&#xa0;使用，并非供人直接阅读。请将下方网址复制粘贴到你的 RSS 阅读器中订阅！</p>

		<p>
			<pre>
				<code id="feedurl"><xsl:value-of select="/rss/channel/atom:link/@href"/></code>
			</pre>
			<button
				class="clipboard"
				data-clipboard-target="#feedurl">
				复制到剪贴板
			</button>
		</p>

		<xsl:for-each select="/rss/channel/item">
			<details><summary>
				<a>
					<xsl:attribute name="href">
						<xsl:value-of select="link"/>
					</xsl:attribute>
					<xsl:value-of select="title"/>
				</a>&#xa0;-&#xa0;
				<xsl:value-of select="pubDate" />
				</summary>
				<xsl:value-of select="description" disable-output-escaping="yes" />
				</details>
		</xsl:for-each>
		<p>共&#xa0;<xsl:value-of select="count(/rss/channel/item)"/>&#xa0;篇文章。</p>
		<p><small>由&#xa0;<a href="https://www.rss.style/"><img alt="RSS.Style" referrerpolicy="origin" src="https://www.rss.style/favicon.svg" style="height:1em;padding-right:0.25em;vertical-align:middle;" />RSS.Style</a>&#xa0;提供支持</small></p>
		<script src="https://cdn.jsdelivr.net/npm/clipboard@2.0.11/dist/clipboard.min.js"></script>
		<script>
			new ClipboardJS('.clipboard');
		</script>
	</body>
</html>
	</xsl:template>
</xsl:stylesheet>
