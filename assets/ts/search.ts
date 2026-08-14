/*
 * 站内搜索浮层（命令面板）：直接调用自建 Meilisearch 的 REST API，不引任何 SDK。
 * 一次搜索就是一个 POST /indexes/{index}/search，官方 JS SDK 要多带几十 KB —
 * 在一个特意删掉 jQuery 和 lightbox2 的仓库里不划算。
 *
 * 用原生 <dialog> + showModal()：焦点陷阱、Esc 关闭、::backdrop、inert 背景全部
 * 由浏览器提供。结果之间用「真实焦点」上下移动，而不是 aria-activedescendant ——
 * 后者在 macOS VoiceOver 与移动端读屏里长期不可靠，真实焦点则处处能用。
 *
 * CSP 约束（见 netlify.toml）：
 *   - 由 script-url.html 编译成 /js/search.<hash>.js 外链加载，页面无内联 <script>
 *   - 事件一律 addEventListener（script-src-attr 为 'none'）
 *   - 结果用 createElement + textContent 构建，绝不用 innerHTML
 *   - 请求目标域名必须在 connect-src 里；Meilisearch 自带 CORS 头并自行响应预检
 */
(function () {
    'use strict';

    interface MeiliFormatted {
        t?: string;
        s?: string;
        b?: string;
    }

    interface MeiliHit {
        u: string;
        t: string;
        s?: string;
        g?: string[];
        d?: string;
        _formatted?: MeiliFormatted;
    }

    interface MeiliResponse {
        hits?: MeiliHit[];
        /* 用 hitsPerPage/page 分页模式请求，返回的是精确的 totalHits。
           默认的 limit/offset 模式只给 estimatedTotalHits，而多词查询会把它显著
           放大：「大模型」实测只有 5 篇字面命中，却报 43（它把 大 / 模型 分别算进
           去了）。排序仍然正确，但界面上直接印 43 会明显不对。 */
        totalHits?: number;
    }

    /* umami 的 track() 是可选的：脚本被拦截或本地开发时不存在。
       这些文件是全局脚本（无 import/export），不能用 declare global，
       所以在这里就地断言。 */
    interface UmamiTracker {
        track: (event: string, data?: Record<string, unknown>) => void;
    }

    /* 判空后的收窄不会跨进下方的函数声明（声明会提升，TS 视其为「可能在
       收窄前被调用」），所以统一用重新赋值的非空别名，而不是在每个用点
       写 ! 断言。 */
    const dialogEl = document.getElementById('search-dialog') as HTMLDialogElement | null;
    const trigger = document.getElementById('search-trigger');
    if (!dialogEl) return;
    const dialog: HTMLDialogElement = dialogEl;

    const endpoint = (dialog.dataset.endpoint || '').replace(/\/+$/, '');
    const apiKey = dialog.dataset.key || '';
    const index = dialog.dataset.index || '';
    const input = document.getElementById('search-input') as HTMLInputElement | null;
    const list = document.getElementById('search-results');
    const status = document.getElementById('search-status');
    if (!endpoint || !apiKey || !index || !input || !list || !status) return;

    const field: HTMLInputElement = input;
    const results: HTMLElement = list;
    const statusLine: HTMLElement = status;

    /* Meilisearch 用这两个标记包裹命中片段。特意选控制字符：正文里不可能出现，
       切分时没有歧义，也就不必解析任何受用户输入影响的标记。 */
    const HL_PRE = '';
    const HL_POST = '';

    const SEARCH_DEBOUNCE = 150;
    const TRACK_DEBOUNCE = 900;
    const LIMIT = 12;

    let searchTimer = 0;
    let trackTimer = 0;
    let inflight: AbortController | null = null;
    let lastTracked = '';

    /* ------------------------------------------------------------- 渲染 */

    /* 把带高亮标记的字符串切成「普通文本 / <mark> 文本」交替的节点。
       全程 textContent —— 即使正文含 <script> 之类的字面量也只是文字。 */
    function highlightInto(parent: HTMLElement, text: string): void {
        if (!text) return;
        const chunks = text.split(HL_PRE);
        parent.appendChild(document.createTextNode(chunks[0]));
        for (let i = 1; i < chunks.length; i++) {
            const parts = chunks[i].split(HL_POST);
            const mark = document.createElement('mark');
            mark.textContent = parts[0];
            parent.appendChild(mark);
            if (parts.length > 1) {
                parent.appendChild(document.createTextNode(parts.slice(1).join(HL_POST)));
            }
        }
    }

    function renderHits(hits: MeiliHit[]): void {
        results.replaceChildren();
        const frag = document.createDocumentFragment();

        hits.forEach(function (hit) {
            const fmt: MeiliFormatted = hit._formatted || {};
            const li = document.createElement('li');

            const link = document.createElement('a');
            link.className = 'search-hit';
            link.href = hit.u;

            const title = document.createElement('span');
            title.className = 'search-hit-title';
            highlightInto(title, fmt.t || hit.t || '');
            link.appendChild(title);

            const snippet = document.createElement('span');
            snippet.className = 'search-hit-snippet';
            highlightInto(snippet, fmt.b || fmt.s || hit.s || '');
            if ((snippet.textContent || '').trim()) link.appendChild(snippet);

            if (hit.d) {
                const meta = document.createElement('span');
                meta.className = 'search-hit-meta';
                meta.textContent = hit.d + ((hit.g && hit.g.length) ? '  ·  #' + hit.g.join(' #') : '');
                link.appendChild(meta);
            }

            li.appendChild(link);
            frag.appendChild(li);
        });

        results.appendChild(frag);
    }

    function setStatus(text: string): void {
        statusLine.textContent = text;
    }

    function hitLinks(): HTMLAnchorElement[] {
        return Array.prototype.slice.call(
            results.querySelectorAll('a.search-hit')
        ) as HTMLAnchorElement[];
    }

    /* ------------------------------------------------------- 统计（可选） */

    /* 浮层没有 URL 可写，所以查询词通过 umami 自定义事件上报，而不是 ?q=。
       仍然分两个计时器：结果 150ms 就刷新，事件只在输入停下约 900ms 后发一次，
       否则「docker」会变成 6 条记录。 */
    function trackQuery(q: string): void {
        if (!q || q === lastTracked || q.length < 2) return;
        lastTracked = q;
        const umami = (window as unknown as { umami?: UmamiTracker }).umami;
        if (umami && typeof umami.track === 'function') {
            umami.track('search', { query: q, lang: index });
        }
    }

    /* ------------------------------------------------------------- 请求 */

    function run(q: string): void {
        if (inflight) inflight.abort();
        const controller = new AbortController();
        inflight = controller;

        setStatus(dialog.dataset.labelSearching || '');

        window.fetch(endpoint + '/indexes/' + encodeURIComponent(index) + '/search', {
            method: 'POST',
            signal: controller.signal,
            headers: {
                'Authorization': 'Bearer ' + apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                q: q,
                hitsPerPage: LIMIT,
                page: 1,
                // 只取展示需要的字段：正文全文有几 KB，跨太平洋回传纯属浪费。
                attributesToRetrieve: ['u', 't', 's', 'g', 'd'],
                attributesToHighlight: ['t', 's', 'b'],
                attributesToCrop: ['b'],
                cropLength: 30,
                highlightPreTag: HL_PRE,
                highlightPostTag: HL_POST
            })
        })
            .then(function (res: Response) {
                if (!res.ok) throw new Error('HTTP ' + res.status);
                return res.json() as Promise<MeiliResponse>;
            })
            .then(function (data: MeiliResponse) {
                const hits = data.hits || [];
                renderHits(hits);
                if (!hits.length) {
                    setStatus(dialog.dataset.labelEmpty || '');
                    return;
                }
                const total = typeof data.totalHits === 'number'
                    ? data.totalHits
                    : hits.length;
                setStatus((dialog.dataset.labelCount || '%d').replace('%d', String(total)));
            })
            .catch(function (err: unknown) {
                // 被下一次输入取消，不是错误
                if (err instanceof Error && err.name === 'AbortError') return;
                results.replaceChildren();
                setStatus(dialog.dataset.labelError || '');
            });
    }

    function schedule(q: string): void {
        window.clearTimeout(searchTimer);
        window.clearTimeout(trackTimer);
        if (!q) {
            if (inflight) inflight.abort();
            results.replaceChildren();
            setStatus(dialog.dataset.labelPrompt || '');
            return;
        }
        searchTimer = window.setTimeout(function () { run(q); }, SEARCH_DEBOUNCE);
        trackTimer = window.setTimeout(function () { trackQuery(q); }, TRACK_DEBOUNCE);
    }

    /* --------------------------------------------------------- 开关浮层 */

    function openSearch(): void {
        if (dialog.open) return;
        if (typeof dialog.showModal === 'function') dialog.showModal();
        else dialog.setAttribute('open', '');
        // classList 而非内联 style —— style-src-attr 是 'none'
        document.body.classList.add('search-open');
        field.focus();
        field.select();
        if (field.value.trim()) schedule(field.value.trim());
        else setStatus(dialog.dataset.labelPrompt || '');
    }

    function closeSearch(): void {
        if (typeof dialog.close === 'function' && dialog.open) dialog.close();
        else dialog.removeAttribute('open');
    }

    dialog.addEventListener('close', function () {
        document.body.classList.remove('search-open');
        window.clearTimeout(searchTimer);
        window.clearTimeout(trackTimer);
        if (inflight) inflight.abort();
        if (trigger) trigger.focus();
    });

    // 点击浮层外的背板关闭（点在 dialog 元素本身即背板区域）
    dialog.addEventListener('click', function (e: Event) {
        if (e.target === dialog) closeSearch();
    });

    dialog.querySelectorAll('[data-search-close]').forEach(function (el) {
        el.addEventListener('click', closeSearch);
    });

    if (trigger) trigger.addEventListener('click', openSearch);

    /* --------------------------------------------------------- 键盘导航 */

    field.addEventListener('input', function () {
        schedule(field.value.trim());
    });

    // 上下键在输入框与结果之间移动真实焦点；Enter 直接进第一条。
    function focusHit(i: number): void {
        const links = hitLinks();
        if (!links.length) return;
        if (i < 0) { field.focus(); return; }
        links[Math.min(i, links.length - 1)].focus();
    }

    dialog.addEventListener('keydown', function (e: KeyboardEvent) {
        if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Enter') return;

        const links = hitLinks();
        const active = document.activeElement;
        const current = active instanceof HTMLAnchorElement ? links.indexOf(active) : -1;

        if (e.key === 'Enter') {
            // 输入框里回车 = 打开第一条结果；焦点已在某条结果上时交给浏览器默认行为
            if (active === field && links.length) {
                e.preventDefault();
                links[0].click();
            }
            return;
        }

        e.preventDefault();
        if (e.key === 'ArrowDown') focusHit(current + 1);
        else focusHit(current - 1);
    });

    /* 全局快捷键。
       Cmd/Ctrl-K 带修饰键，不受 WCAG 2.1.4（单字符快捷键）约束。
       "/" 是单字符，因此必须在输入类元素获得焦点时失效 —— 那正是 2.1.4 的例外 3。 */
    document.addEventListener('keydown', function (e: KeyboardEvent) {
        if (e.key === 'k' && (e.metaKey || e.ctrlKey) && !e.altKey) {
            e.preventDefault();
            if (dialog.open) closeSearch();
            else openSearch();
            return;
        }
        if (e.key === '/' && !e.metaKey && !e.ctrlKey && !e.altKey && !dialog.open) {
            const el = e.target;
            if (el instanceof Element && el.closest('input, textarea, select, [contenteditable]')) return;
            e.preventDefault();   // 否则触发 Firefox 的快速查找
            openSearch();
        }
    });

    // 非 macOS 把 ⌘K 提示换成 Ctrl K
    const hint = document.getElementById('search-kbd-hint');
    if (hint && !/Mac|iPhone|iPad|iPod/.test(navigator.platform)) {
        hint.textContent = 'Ctrl K';
    }
}());
