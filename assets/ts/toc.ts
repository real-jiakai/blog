/*
 * 文章目录（左栏树形节导航）的滚动跟踪：把当前阅读的章节标记为 toc-active
 * 并维护 aria-current。导航常驻、无展开收起，此脚本只做 scrollspy。
 */
(function () {
    'use strict';

    function initTocScrollSpy(): void {
        /* 判空后的收窄不会跨进下方的函数声明（声明会提升），
           与 search.ts 相同，用重新赋值的非空别名。 */
        const tocEl = document.getElementById('TableOfContents');
        if (!tocEl) return;
        const toc: HTMLElement = tocEl;

        const links = Array.prototype.slice.call(
            toc.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
        ) as HTMLAnchorElement[];
        const items: { link: HTMLAnchorElement; heading: HTMLElement }[] = [];

        links.forEach(function (link) {
            const raw = (link.getAttribute('href') || '').slice(1);
            let id: string;
            try {
                id = decodeURIComponent(raw);
            } catch (error) {
                id = raw;
            }
            const heading = document.getElementById(id) || document.getElementById(raw);
            if (heading) items.push({ link: link, heading: heading });
        });
        if (!items.length) return;

        let ticking = false;

        function updateActiveLink(): void {
            ticking = false;
            // 窄屏时整个左栏 display:none，跳过计算
            if (toc.offsetParent === null) return;

            let active = items[0];
            for (let index = 0; index < items.length; index += 1) {
                if (items[index].heading.getBoundingClientRect().top <= 100) {
                    active = items[index];
                } else {
                    break;
                }
            }

            // 滚到页底时最后一章视为当前章节（短末章永远滚不过 100px 线）
            const root = document.documentElement;
            if (root.scrollHeight > window.innerHeight + 2 &&
                window.innerHeight + window.scrollY >= root.scrollHeight - 2) {
                active = items[items.length - 1];
            }

            items.forEach(function (item) {
                const isActive = item === active;
                item.link.classList.toggle('toc-active', isActive);
                if (isActive) {
                    item.link.setAttribute('aria-current', 'location');
                } else {
                    item.link.removeAttribute('aria-current');
                }
            });
        }

        function scheduleUpdate(): void {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(updateActiveLink);
        }

        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate, { passive: true });
        updateActiveLink();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initTocScrollSpy, { once: true });
    } else {
        initTocScrollSpy();
    }
})();
