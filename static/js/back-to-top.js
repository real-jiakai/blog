(function () {
    'use strict';

    function initializeBackToTop() {
        var button = document.getElementById('back-to-top');
        if (!button) return;

        var ticking = false;
        function updateVisibility() {
            ticking = false;
            button.classList.toggle('show', window.scrollY > 300);
        }

        function scheduleUpdate() {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(updateVisibility);
        }

        window.addEventListener('scroll', scheduleUpdate, { passive: true });
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
