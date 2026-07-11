(function () {
    'use strict';

    function initializeBackToTop() {
        var button = document.getElementById('back-to-top');
        if (!button) return;

        var ticking = false;
        function updateVisibility() {
            ticking = false;
            var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            var documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            var mobile = window.matchMedia('(max-width: 767.98px)').matches;
            var longEnough = documentHeight > viewportHeight * (mobile ? 2.5 : 1.5);
            var threshold = mobile ? Math.max(800, viewportHeight * 1.5) : 300;
            button.classList.toggle('show', longEnough && window.scrollY > threshold);
        }

        function scheduleUpdate() {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(updateVisibility);
        }

        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);
        button.addEventListener('click', function () {
            var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
            var main = document.getElementById('main-content');
            if (main) main.focus({ preventScroll: true });
        });
        updateVisibility();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeBackToTop, { once: true });
    } else {
        initializeBackToTop();
    }
}());
