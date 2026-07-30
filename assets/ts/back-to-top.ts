(function () {
    'use strict';

    function initializeBackToTop(): void {
        const button = document.getElementById('back-to-top');
        if (!button) return;

        let ticking = false;
        function updateVisibility(): void {
            ticking = false;
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
            const documentHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            const mobile = window.matchMedia('(max-width: 767.98px)').matches;
            const longEnough = documentHeight > viewportHeight * (mobile ? 2.5 : 1.5);
            const threshold = mobile ? Math.max(800, viewportHeight * 1.5) : 300;
            button!.classList.toggle('show', longEnough && window.scrollY > threshold);
        }

        function scheduleUpdate(): void {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(updateVisibility);
        }

        window.addEventListener('scroll', scheduleUpdate, { passive: true });
        window.addEventListener('resize', scheduleUpdate);
        button.addEventListener('click', function () {
            const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
            const main = document.getElementById('main-content');
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
