<?xml version="1.0" encoding="utf-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:blog="https://blog.gujiakai.top/ns/rss"
  exclude-result-prefixes="atom blog">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="zh-CN">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="referrer" content="strict-origin-when-cross-origin"/>
        <title><xsl:value-of select="/rss/channel/title"/></title>
        <link rel="stylesheet" href="/xslt/water.min.css"/>
        <link rel="stylesheet" href="/xslt/feed.css"/>
      </head>
      <body>
        <header>
          <p class="feed-badge" aria-hidden="true">RSS</p>
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p><xsl:value-of select="/rss/channel/description"/></p>
          <p>
            这是
            <a>
              <xsl:attribute name="href"><xsl:value-of select="/rss/channel/link"/></xsl:attribute>
              <xsl:value-of select="/rss/channel/title"/>
            </a>
            网站的 <a href="https://www.rss.style/what-is-a-feed.html">RSS 订阅源</a>。
          </p>
          <p>请将以下地址复制到 <a href="https://www.rss.style/newsreaders.html">RSS 阅读器</a>中：</p>
          <label class="visually-hidden" for="feedurl">订阅源网址</label>
          <input id="feedurl" type="url" readonly="readonly" value="{/rss/channel/atom:link/@href}"/>
        </header>

        <main>
          <xsl:for-each select="/rss/channel/item">
            <article class="feed-item">
              <h2>
                <a>
                  <xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute>
                  <xsl:value-of select="title"/>
                </a>
              </h2>
              <p class="feed-date"><xsl:value-of select="pubDate"/></p>
              <p><xsl:value-of select="blog:summary"/></p>
            </article>
          </xsl:for-each>
          <p>共 <xsl:value-of select="count(/rss/channel/item)"/> 篇文章。</p>
        </main>

        <footer>
          <p><small>样式参考 <a href="https://www.rss.style/">RSS.Style</a>。</small></p>
        </footer>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
