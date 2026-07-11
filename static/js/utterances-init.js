(function () {
    'use strict';

    var loader = document.currentScript;
    if (!loader) return;

    var mount = document.getElementById(loader.dataset.target || 'utterances-comments');
    if (!mount || mount.dataset.utterancesLoaded === 'true') return;
    mount.dataset.utterancesLoaded = 'true';

    var effectiveTheme = document.documentElement.getAttribute('data-bs-theme');
    var client = document.createElement('script');
    client.src = 'https://utteranc.es/client.js';
    client.setAttribute('repo', loader.dataset.repo || 'real-jiakai/blog');
    client.setAttribute('issue-term', loader.dataset.issueTerm || 'pathname');
    client.setAttribute('label', loader.dataset.label || 'comment');
    client.setAttribute('theme', effectiveTheme === 'dark' ? 'github-dark' : 'github-light');
    client.setAttribute('crossorigin', 'anonymous');
    client.async = true;
    client.addEventListener('load', function () {
        document.querySelectorAll('head > style').forEach(function (style) {
            if (style.textContent.indexOf('.utterances-frame') !== -1) style.remove();
        });
    }, { once: true });
    mount.appendChild(client);
})();
