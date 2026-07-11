(function () {
    'use strict';

    var loader = document.currentScript;
    if (!loader) return;

    var mount = document.getElementById(loader.dataset.target || 'utterances-comments');
    if (!mount || mount.dataset.utterancesLoaded === 'true') return;
    mount.dataset.utterancesLoaded = 'true';

    var pageUrl = new URL(window.location.href);
    var session = pageUrl.searchParams.get('utterances');
    if (session) {
        localStorage.setItem('utterances-session', session);
        pageUrl.searchParams.delete('utterances');
        history.replaceState(undefined, document.title, pageUrl.href);
    }

    function activeTheme() {
        return document.documentElement.getAttribute('data-bs-theme') === 'dark'
            ? 'github-dark'
            : 'github-light';
    }

    var canonical = document.querySelector('link[rel="canonical"]');
    var descriptionMeta = document.querySelector('meta[name="description"]');
    var ogTitleMeta = document.querySelector('meta[property="og:title"], meta[name="og:title"]');
    var description = descriptionMeta ? descriptionMeta.content : '';
    var encodedDescriptionLength = encodeURIComponent(description).length;
    if (encodedDescriptionLength > 1000) {
        description = description.slice(0, Math.floor(description.length * 1000 / encodedDescriptionLength));
    }

    var params = new URLSearchParams({
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

    var container = document.createElement('div');
    container.className = 'utterances';

    var frame = document.createElement('iframe');
    frame.className = 'utterances-frame';
    frame.title = 'Comments';
    frame.loading = 'lazy';
    frame.setAttribute('scrolling', 'no');
    frame.src = 'https://utteranc.es/utterances.html?' + params.toString();
    container.appendChild(frame);
    mount.appendChild(container);

    function syncTheme() {
        frame.contentWindow.postMessage(
            { type: 'set-theme', theme: activeTheme() },
            'https://utteranc.es'
        );
    }

    var readyThemeSynced = false;
    frame.addEventListener('load', syncTheme, { once: true });
    window.addEventListener('message', function (event) {
        if (event.origin !== 'https://utteranc.es' || event.source !== frame.contentWindow) return;
        var data = event.data;
        if (!data || data.type !== 'resize' || !data.height) return;
        container.style.height = data.height + 'px';
        if (!readyThemeSynced) {
            readyThemeSynced = true;
            syncTheme();
        }
    });
}());
