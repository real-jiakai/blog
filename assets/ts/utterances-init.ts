(function () {
    'use strict';

    const loader = document.currentScript as HTMLScriptElement | null;
    if (!loader) return;

    const mount = document.getElementById(loader.dataset.target || 'utterances-comments');
    if (!mount || mount.dataset.utterancesLoaded === 'true') return;
    mount.dataset.utterancesLoaded = 'true';

    const pageUrl = new URL(window.location.href);
    const session = pageUrl.searchParams.get('utterances');
    if (session) {
        localStorage.setItem('utterances-session', session);
        pageUrl.searchParams.delete('utterances');
        history.replaceState(undefined, document.title, pageUrl.href);
    }

    function activeTheme(): string {
        return document.documentElement.getAttribute('data-bs-theme') === 'dark'
            ? 'github-dark'
            : 'github-light';
    }

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const ogTitleMeta = document.querySelector<HTMLMetaElement>('meta[property="og:title"], meta[name="og:title"]');
    let description = descriptionMeta ? descriptionMeta.content : '';
    const encodedDescriptionLength = encodeURIComponent(description).length;
    if (encodedDescriptionLength > 1000) {
        description = description.slice(0, Math.floor(description.length * 1000 / encodedDescriptionLength));
    }

    const params = new URLSearchParams({
        repo: loader.dataset.repo || 'real-jiakai/blog',
        'issue-term': loader.dataset.issueTerm || 'pathname',
        label: loader.dataset.label || 'comment',
        theme: activeTheme(),
        url: canonical ? canonical.href : pageUrl.origin + pageUrl.pathname + pageUrl.search,
        origin: pageUrl.origin,
        pathname: pageUrl.pathname.length < 2 ? 'index' : pageUrl.pathname.slice(1).replace(/\.\w+$/, ''),
        title: document.title,
        description: description,
        'og:title': ogTitleMeta ? ogTitleMeta.content : '',
        session: session || localStorage.getItem('utterances-session') || ''
    });

    const container = document.createElement('div');
    container.className = 'utterances';

    const frame = document.createElement('iframe');
    frame.className = 'utterances-frame';
    frame.title = 'Comments';
    frame.loading = 'lazy';
    frame.setAttribute('scrolling', 'no');
    frame.src = 'https://utteranc.es/utterances.html?' + params.toString();
    container.appendChild(frame);
    mount.appendChild(container);

    function syncTheme(): void {
        frame.contentWindow!.postMessage(
            { type: 'set-theme', theme: activeTheme() },
            'https://utteranc.es'
        );
    }

    window.addEventListener('message', function (event: MessageEvent) {
        if (event.origin !== 'https://utteranc.es' || event.source !== frame.contentWindow) return;
        // 收到首条消息才说明 utterances 真正加载完成。懒加载的 iframe 在此之前仍是
        // about:blank（同源于本站），过早 postMessage 会报 target origin 不匹配。
        if (frame.dataset.utterancesReady !== 'true') {
            frame.dataset.utterancesReady = 'true';
            syncTheme();
        }
        const data = event.data as { type?: string; height?: number } | null;
        if (!data || data.type !== 'resize' || !data.height) return;
        container.style.height = data.height + 'px';
    });
}());
