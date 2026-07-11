(function () {
    'use strict';

    function initializeTableOfContents() {
        var toggle = document.getElementById('tocHeader');
        var content = document.getElementById('tocContent');
        var expandedIcon = document.getElementById('arrow-down');
        var collapsedIcon = document.getElementById('arrow-right');
        if (!toggle || !content) return;

        function setExpanded(expanded) {
            toggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
            if (expandedIcon) expandedIcon.classList.toggle('d-none', !expanded);
            if (collapsedIcon) collapsedIcon.classList.toggle('d-none', expanded);
        }

        toggle.addEventListener('click', function () {
            var expanded = toggle.getAttribute('aria-expanded') === 'true';
            content.classList.toggle('show', !expanded);
            setExpanded(!expanded);
        });
        setExpanded(content.classList.contains('show'));

        var links = Array.prototype.slice.call(content.querySelectorAll('a[href^="#"]'));
        var items = [];

        links.forEach(function (link) {
            var raw = link.getAttribute('href').slice(1);
            var id;
            try {
                id = decodeURIComponent(raw);
            } catch (error) {
                id = raw;
            }
            var heading = document.getElementById(id) || document.getElementById(raw);
            if (heading) items.push({ link: link, heading: heading });
        });
        if (!items.length) return;

        var ticking = false;
        function updateActiveLink() {
            ticking = false;
            if (items[0].heading.offsetParent === null) return;

            var active = items[0];
            for (var index = 0; index < items.length; index += 1) {
                if (items[index].heading.getBoundingClientRect().top <= 100) {
                    active = items[index];
                } else {
                    break;
                }
            }

            var root = document.documentElement;
            if (root.scrollHeight > window.innerHeight + 2 &&
                window.innerHeight + window.scrollY >= root.scrollHeight - 2) {
                active = items[items.length - 1];
            }

            items.forEach(function (item) {
                var isActive = item === active;
                item.link.classList.toggle('toc-active', isActive);
                if (isActive) {
                    item.link.setAttribute('aria-current', 'location');
                } else {
                    item.link.removeAttribute('aria-current');
                }
            });
        }

        function scheduleUpdate() {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(updateActiveLink);
        }

        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate, { passive: true });
        updateActiveLink();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeTableOfContents, { once: true });
    } else {
        initializeTableOfContents();
    }
})();
