/*
 * 站内搜索：直接调用自建 Meilisearch 的 REST API，不引任何 SDK。
 * 一次搜索就是一个 POST /indexes/{index}/search，官方 JS SDK 要多带几十 KB —
 * 在一个特意删掉 jQuery 和 lightbox2 的仓库里不划算。
 *
 * CSP 约束（见 netlify.toml）：
 *   - 由 script-url.html 编译成 /js/search.<hash>.js 外链加载，页面无内联 <script>
 *   - 事件一律 addEventListener（script-src-attr 为 'none'，内联 onclick 会被拦）
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
        estimatedTotalHits?: number;
    }

    const app = document.getElementById('search-app');
    if (!app) return;

    const endpoint = (app.dataset.endpoint || '').replace(/\/+$/, '');
    const apiKey = app.dataset.key || '';
    const index = app.dataset.index || '';
    const input = document.getElementById('search-input') as HTMLInputElement | null;
    const form = document.getElementById('search-form') as HTMLFormElement | null;
    const list = document.getElementById('search-results');
    const status = document.getElementById('search-status');

    // 没配 endpoint / key 时模板已渲染「暂不可用」并禁用了输入框，直接退出。
    if (!endpoint || !apiKey || !index || !input || !list || !status) return;

    const results: HTMLElement = list;
    const statusLine: HTMLElement = status;
    const field: HTMLInputElement = input;

    /* Meilisearch 用这两个标记包裹命中片段。这里特意选控制字符：正文里不可能
       出现，切分时没有歧义，也就不必去解析任何受用户输入影响的标记。 */
    const HL_PRE = '';
    const HL_POST = '';

    const SEARCH_DEBOUNCE = 150;   // 重新渲染结果
    const COMMIT_DEBOUNCE = 900;   // 写 URL，见 commitQuery 的说明
    const LIMIT = 20;

    let searchTimer = 0;
    let commitTimer = 0;
    let inflight: AbortController | null = null;
    let lastCommitted: string | null = null;

    /* ------------------------------------------------------------- 渲染 */

    /* 把带高亮标记的字符串切成「普通文本 / <mark> 文本」交替的节点。
       全程 textContent —— 即使正文含有 <script> 之类的字面量也只是文字。 */
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
            li.className = 'search-result';

            const heading = document.createElement('h2');
            heading.className = 'h5 search-result-title';
            const link = document.createElement('a');
            link.href = hit.u;
            highlightInto(link, fmt.t || hit.t || '');
            heading.appendChild(link);
            li.appendChild(heading);

            const meta = document.createElement('p');
            meta.className = 'search-result-meta text-muted';
            if (hit.d) {
                const time = document.createElement('time');
                time.dateTime = hit.d;
                time.textContent = hit.d;
                meta.appendChild(time);
            }
            (hit.g || []).forEach(function (tag) {
                const badge = document.createElement('span');
                badge.className = 'badge bg-secondary search-result-tag';
                badge.textContent = '#' + tag;
                meta.appendChild(badge);
            });
            if (meta.childNodes.length) li.appendChild(meta);

            // 正文片段优先用裁剪并高亮过的 b，没有就退回摘要。
            const snippet = document.createElement('p');
            snippet.className = 'search-result-snippet';
            highlightInto(snippet, fmt.b || fmt.s || hit.s || '');
            if ((snippet.textContent || '').trim()) li.appendChild(snippet);

            frag.appendChild(li);
        });

        results.appendChild(frag);
    }

    function setStatus(text: string): void {
        statusLine.textContent = text;
    }

    /* --------------------------------------------------------- 查询 URL */

    /* umami 和 GA4 都挂了 history.replaceState 并在每次 URL 变化时上报一次
       pageview。若每个按键都写 ?q=，「docker」会变成 6 条 pageview。
       所以渲染和写 URL 用两个独立计时器：结果 150ms 就刷新（手感即时），
       URL 只在输入停下约 900ms、或按回车、或点击结果时才落一次。这样上报流
       恰好是「一次真实搜索一行」，正是想要的 umami 报表。 */
    function commitQuery(q: string): void {
        if (q === lastCommitted) return;
        lastCommitted = q;
        const url = new URL(window.location.href);
        if (q) url.searchParams.set('q', q);
        else url.searchParams.delete('q');
        window.history.replaceState(null, '', url.toString());
    }

    function scheduleCommit(q: string): void {
        window.clearTimeout(commitTimer);
        if (!q || q.length < 2) return;
        commitTimer = window.setTimeout(function () { commitQuery(q); }, COMMIT_DEBOUNCE);
    }

    /* ------------------------------------------------------------- 请求 */

    function run(q: string): void {
        if (inflight) inflight.abort();
        const controller = new AbortController();
        inflight = controller;

        setStatus(app!.dataset.labelSearching || '');

        window.fetch(endpoint + '/indexes/' + encodeURIComponent(index) + '/search', {
            method: 'POST',
            signal: controller.signal,
            headers: {
                'Authorization': 'Bearer ' + apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                q: q,
                limit: LIMIT,
                // 只取展示需要的字段：正文全文有几 KB，跨太平洋回传纯属浪费。
                attributesToRetrieve: ['u', 't', 's', 'g', 'd'],
                attributesToHighlight: ['t', 's', 'b'],
                attributesToCrop: ['b'],
                cropLength: 45,
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
                    setStatus(app!.dataset.labelEmpty || '');
                    return;
                }
                const total = typeof data.estimatedTotalHits === 'number'
                    ? data.estimatedTotalHits
                    : hits.length;
                setStatus((app!.dataset.labelCount || '%d').replace('%d', String(total)));
            })
            .catch(function (err: unknown) {
                // 被下一次输入取消，不是错误
                if (err instanceof Error && err.name === 'AbortError') return;
                results.replaceChildren();
                setStatus(app!.dataset.labelError || '');
            });
    }

    function schedule(q: string): void {
        window.clearTimeout(searchTimer);
        if (!q) {
            if (inflight) inflight.abort();
            results.replaceChildren();
            setStatus('');
            commitQuery('');
            return;
        }
        searchTimer = window.setTimeout(function () { run(q); }, SEARCH_DEBOUNCE);
    }

    /* ------------------------------------------------------------- 事件 */

    field.addEventListener('input', function () {
        const q = field.value.trim();
        schedule(q);
        scheduleCommit(q);
    });

    if (form) {
        form.addEventListener('submit', function (e: Event) {
            e.preventDefault();                 // 结果就在本页，不需要真正提交
            const q = field.value.trim();
            window.clearTimeout(searchTimer);
            window.clearTimeout(commitTimer);
            if (q) { run(q); commitQuery(q); }
        });
    }

    // 点走结果之前把这次查询落进 URL，否则短查询永远进不了统计。
    results.addEventListener('click', function (e: Event) {
        const target = e.target;
        if (target instanceof Element && target.closest('a')) {
            window.clearTimeout(commitTimer);
            commitQuery(field.value.trim());
        }
    });

    /* 支持 /search/?q=xxx 直链：可分享、可回退，也让 umami 的报表直接告诉你
       读者在搜什么。 */
    const initial = new URLSearchParams(window.location.search).get('q');
    if (initial) {
        field.value = initial;
        lastCommitted = initial.trim();
        run(initial.trim());
    }
}());
