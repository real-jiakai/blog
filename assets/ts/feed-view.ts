(function () {
    'use strict';

    // feed 是 application/xml 文档：这里的 createElement 只会造出无命名空间的普通 XML 元素，
    // 浏览器不会把它当 HTML 渲染，所以界面元素必须显式建在 XHTML 命名空间里。
    const XHTML = 'http://www.w3.org/1999/xhtml';
    const ATOM = 'http://www.w3.org/2005/Atom';
    const BLOG = 'https://blog.gujiakai.top/ns/rss';
    const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const HELP_WHAT_IS = 'https://www.rss.style/what-is-a-feed.html';
    const HELP_READERS = 'https://www.rss.style/newsreaders.html';

    // currentScript 只在脚本同步执行期间有值，必须在这里取，不能留到回调里。
    const script = document.currentScript as HTMLScriptElement | null;
    const labels: DOMStringMap = script ? script.dataset : {};

    function create<K extends keyof HTMLElementTagNameMap>(tag: K, className?: string, text?: string): HTMLElementTagNameMap[K] {
        const node = document.createElementNS(XHTML, tag) as HTMLElementTagNameMap[K];
        if (className) node.className = className;
        if (text) node.textContent = text;
        return node;
    }

    function link(href: string, text: string): HTMLAnchorElement {
        const anchor = create('a', undefined, text);
        anchor.href = href;
        return anchor;
    }

    // 只看直接子元素：channel 与 item 各有一套 title / link / description。
    function child(parent: Element, name: string, namespace: string | null = null): Element | null {
        for (let node = parent.firstElementChild; node; node = node.nextElementSibling) {
            if (node.localName === name && node.namespaceURI === namespace) return node;
        }
        return null;
    }

    function childText(parent: Element, name: string, namespace: string | null = null): string {
        const node = child(parent, name, namespace);
        return node ? (node.textContent || '').trim() : '';
    }

    function selfURL(channel: Element): string {
        for (let node = channel.firstElementChild; node; node = node.nextElementSibling) {
            if (node.localName === 'link' && node.namespaceURI === ATOM && node.getAttribute('rel') === 'self') {
                return node.getAttribute('href') || '';
            }
        }
        return '';
    }

    // pubDate 是 RFC 822（Tue, 25 Aug 2026 00:37:13 -0700）。按字面取日期、不经 Date 换算时区，
    // 这样无论读者在哪个时区，看到的都是文章页上的那个发布日期。
    function isoDate(pubDate: string): string {
        const match = /(\d{1,2}) ([A-Z][a-z]{2}) (\d{4})/.exec(pubDate);
        if (!match) return '';
        const month = MONTHS.indexOf(match[2]) + 1;
        if (!month) return '';
        return match[3] + '-' + String(month).padStart(2, '0') + '-' + match[1].padStart(2, '0');
    }

    function fillContent(target: HTMLElement, html: string, postURL: string, idPrefix: string): void {
        // XML 文档的 innerHTML 走 XML 解析器，而正文是 HTML5（<img>、<br> 不闭合），直接赋值会抛
        // SyntaxError。先用 DOMParser 按 text/html 解析，再把节点收编进当前文档。
        // 这样解析出的 <script> 不会执行；行内事件处理器另有 CSP 的 script-src-attr 'none' 拦截。
        const parsed = new DOMParser().parseFromString(html, 'text/html');

        parsed.querySelectorAll('img').forEach(function (image) {
            // 文章页把首图标成 eager + 高优先级（那是它的 LCP）；在这里它只是展开后的一张普通图片。
            image.loading = 'lazy';
            image.removeAttribute('fetchpriority');
            // sizes 是按文章页的两栏布局写的；预览页只有一栏，正文最宽 760px。
            if (image.srcset) image.sizes = '(max-width: 820px) calc(100vw - 40px), 760px';
        });
        parsed.querySelectorAll('h1, h2, h3, h4, h5').forEach(function (heading) {
            // 条目标题已经是 h2：正文里的小节标题在语义上降一级，标签不动以保留字号。
            heading.setAttribute('aria-level', String(Number(heading.localName.charAt(1)) + 1));
        });
        parsed.querySelectorAll('script[src^="https://asciinema.org/a/"]').forEach(function (embed) {
            // 终端录屏靠这段脚本插入播放器，而收编进来的脚本不会执行；换成指向录屏的链接。
            const recording = (embed.getAttribute('src') || '').replace(/\.js$/, '');
            const paragraph = parsed.createElement('p');
            const anchor = parsed.createElement('a');
            anchor.href = recording;
            anchor.textContent = recording;
            paragraph.appendChild(anchor);
            embed.replaceWith(paragraph);
        });
        // 一页里会展开多篇文章，各篇的标题 id、脚注 id 互相重复：统一加上条目前缀，
        // 脚注这类页内锚点随之改写；落点不在正文里的锚点改为跳到原文。
        parsed.querySelectorAll('[id]').forEach(function (node) {
            node.id = idPrefix + node.id;
        });
        parsed.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
            const fragment = (anchor.getAttribute('href') || '').slice(1);
            let id = fragment;
            try {
                id = decodeURIComponent(fragment);
            } catch (error) {
                // 不是合法的百分号编码：按字面当作 id。
            }
            const local = id !== '' && parsed.getElementById(idPrefix + id) !== null;
            anchor.setAttribute('href', local ? '#' + idPrefix + fragment : postURL + '#' + fragment);
        });

        const nodes = document.createDocumentFragment();
        while (parsed.body.firstChild) nodes.appendChild(document.adoptNode(parsed.body.firstChild));
        target.appendChild(nodes);
    }

    function renderItem(item: Element, index: number, allDetails: HTMLDetailsElement[], onToggle: () => void): HTMLElement {
        const article = create('article', 'feed-item');
        const url = childText(item, 'link');
        const title = childText(item, 'title');

        const heading = create('h2');
        heading.appendChild(link(url, title));
        article.appendChild(heading);

        const pubDate = childText(item, 'pubDate');
        if (pubDate) {
            const iso = isoDate(pubDate);
            const time = create('time', undefined, iso || pubDate);
            if (iso) time.dateTime = iso;
            const date = create('p', 'feed-date');
            date.appendChild(time);
            article.appendChild(date);
        }

        const summary = childText(item, 'summary', BLOG);
        if (summary) article.appendChild(create('p', 'feed-summary', summary));

        const description = child(item, 'description');
        if (description && description.textContent) {
            const details = create('details', 'feed-full');
            const toggle = create('summary', undefined, labels.readFull || 'Read the full post');
            const content = create('div', 'feed-content');
            // 二十个按钮的文案一模一样，读屏用户需要知道展开的是哪一篇。
            toggle.appendChild(create('span', 'visually-hidden', ': ' + title));
            details.appendChild(toggle);
            details.appendChild(content);
            // 正文在第一次展开时才解析成 DOM：一个 feed 的全文里有五百多张图片，
            // 预先全部实例化的代价由每一位只想复制订阅地址的访客承担。
            details.addEventListener('toggle', function () {
                if (details.open && !content.hasChildNodes()) {
                    fillContent(content, description.textContent || '', url, 'post-' + index + '-');
                }
                onToggle();
            });
            allDetails.push(details);
            article.appendChild(details);
        }

        return article;
    }

    function renderHeader(channel: Element, title: string, expander: HTMLElement | null): HTMLElement {
        const header = create('header');

        const badge = create('p', 'feed-badge', 'RSS');
        badge.setAttribute('aria-hidden', 'true');
        header.appendChild(badge);
        header.appendChild(create('h1', undefined, title));

        const description = childText(channel, 'description');
        if (description) header.appendChild(create('p', undefined, description));
        if (labels.intro) header.appendChild(create('p', undefined, labels.intro));

        const label = create('label', 'visually-hidden', labels.urlLabel || 'Feed URL');
        const input = create('input');
        label.htmlFor = 'feedurl';
        input.id = 'feedurl';
        input.type = 'url';
        input.readOnly = true;
        input.value = selfURL(channel) || location.href;
        input.addEventListener('focus', function () { input.select(); });
        header.appendChild(label);
        header.appendChild(input);

        // 只有带正文的 feed 才提示「可展开全文」：标签总览 feed 的条目是标签，没有正文。
        if (expander) {
            const hint = create('p', 'feed-hint');
            if (labels.introFull) hint.appendChild(create('span', undefined, labels.introFull));
            hint.appendChild(expander);
            header.appendChild(hint);
        }

        const links = create('p', 'feed-links');
        const siteURL = childText(channel, 'link');
        if (siteURL && labels.visitSite) links.appendChild(link(siteURL, labels.visitSite));
        if (labels.whatIs) links.appendChild(link(HELP_WHAT_IS, labels.whatIs));
        if (labels.readers) links.appendChild(link(HELP_READERS, labels.readers));
        if (links.hasChildNodes()) header.appendChild(links);

        return header;
    }

    // 「全部展开」让读者能用浏览器的页内查找搜到所有正文（折叠着的正文还不在 DOM 里）。
    function renderExpander(allDetails: HTMLDetailsElement[]): { button: HTMLButtonElement; sync: () => void } {
        const expandLabel = labels.expandAll || 'Expand all';
        const collapseLabel = labels.collapseAll || 'Collapse all';
        const button = create('button', 'feed-expander', expandLabel);
        button.type = 'button';

        function allOpen(): boolean {
            return allDetails.every(function (details) { return details.open; });
        }

        button.addEventListener('click', function () {
            const open = !allOpen();
            allDetails.forEach(function (details) { details.open = open; });
        });

        return {
            button: button,
            // 读者也会逐篇开合，按钮文案跟着实际状态走。
            sync: function () { button.textContent = allOpen() ? collapseLabel : expandLabel; },
        };
    }

    function render(): void {
        const rss = document.documentElement;
        if (!rss || rss.localName !== 'rss' || rss.namespaceURI) return;
        const channel = child(rss, 'channel');
        if (!channel) return;

        const title = childText(channel, 'title');
        const html = create('html');
        const language = childText(channel, 'language');
        if (language) html.lang = language;

        // feed 里那个 <meta name="viewport"> 会随 <rss> 一起被换下，这里要重新声明。
        const head = create('head');
        const viewport = create('meta');
        viewport.name = 'viewport';
        viewport.content = 'width=device-width, initial-scale=1';
        head.appendChild(viewport);
        head.appendChild(create('title', undefined, title));
        html.appendChild(head);

        const allDetails: HTMLDetailsElement[] = [];
        const expander = renderExpander(allDetails);
        const main = create('main');
        let index = 0;
        for (let node = channel.firstElementChild; node; node = node.nextElementSibling) {
            if (node.localName === 'item' && !node.namespaceURI) {
                main.appendChild(renderItem(node, index, allDetails, expander.sync));
                index += 1;
            }
        }
        if (labels.count) main.appendChild(create('p', 'feed-count', labels.count));

        const body = create('body');
        body.appendChild(renderHeader(channel, title, allDetails.length ? expander.button : null));
        body.appendChild(main);
        html.appendChild(body);

        // 样式表由 feed 开头的 xml-stylesheet 处理指令加载，它们挂在文档节点上，
        // 换掉根元素后依然生效；被换下的 <rss> 仍由各条目的闭包引用，供展开时取正文。
        document.replaceChild(html, rss);
    }

    function start(): void {
        try {
            render();
        } catch (error) {
            // 渲染失败时什么都不动：feed.css 的兜底视图会照常显示标题与摘要。
            console.error(error);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start, { once: true });
    } else {
        start();
    }
})();
