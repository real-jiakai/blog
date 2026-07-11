(function () {
    'use strict';

    function initializeSiteControls() {
        var navToggle = document.querySelector('.navbar-toggler');
        var nav = document.getElementById('navbarNav');

        function setNavigationOpen(open) {
            if (!navToggle || !nav) return;
            nav.classList.toggle('show', open);
            navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        }

        if (navToggle && nav) {
            navToggle.addEventListener('click', function () {
                setNavigationOpen(navToggle.getAttribute('aria-expanded') !== 'true');
            });
        }

        var themeButton = document.getElementById('theme-menu-btn');
        var themeMenu = document.getElementById('theme-menu');
        var themeItems = themeMenu ? Array.prototype.slice.call(themeMenu.querySelectorAll('[role="menuitemradio"]')) : [];

        function focusThemeItem(index) {
            if (!themeItems.length) return;
            var normalized = (index + themeItems.length) % themeItems.length;
            themeItems.forEach(function (item, itemIndex) {
                item.setAttribute('tabindex', itemIndex === normalized ? '0' : '-1');
            });
            themeItems[normalized].focus();
        }

        function focusOutsideThemeMenu(backward) {
            var selector = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
            var focusable = Array.prototype.slice.call(document.querySelectorAll(selector)).filter(function (element) {
                return !themeMenu.contains(element) && element.getClientRects().length > 0;
            });
            var triggerIndex = focusable.indexOf(themeButton);
            var target = focusable[triggerIndex + (backward ? -1 : 1)];
            if (target) target.focus();
            else themeButton.focus();
        }

        function setThemeMenuOpen(open, focusIndex) {
            if (!themeButton || !themeMenu) return;
            themeMenu.classList.toggle('show', open);
            themeButton.setAttribute('aria-expanded', open ? 'true' : 'false');
            themeItems.forEach(function (item, index) {
                item.setAttribute('tabindex', open && index === 0 ? '0' : '-1');
            });
            if (open && typeof focusIndex === 'number') {
                focusThemeItem(focusIndex);
            }
        }

        if (themeButton && themeMenu) {
            themeButton.addEventListener('click', function (event) {
                var opening = themeButton.getAttribute('aria-expanded') !== 'true';
                setThemeMenuOpen(opening, opening && event.detail === 0 ? 0 : undefined);
            });
            themeButton.addEventListener('keydown', function (event) {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    var opening = themeButton.getAttribute('aria-expanded') !== 'true';
                    setThemeMenuOpen(opening, opening ? 0 : undefined);
                } else if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    setThemeMenuOpen(true, 0);
                } else if (event.key === 'ArrowUp') {
                    event.preventDefault();
                    setThemeMenuOpen(true, themeItems.length - 1);
                }
            });
            themeMenu.addEventListener('click', function (event) {
                if (event.target.closest('[role="menuitemradio"]')) {
                    setThemeMenuOpen(false);
                    themeButton.focus();
                }
            });
            themeMenu.addEventListener('keydown', function (event) {
                var current = themeItems.indexOf(document.activeElement);
                if (current < 0) return;
                if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    focusThemeItem(current + 1);
                } else if (event.key === 'ArrowUp') {
                    event.preventDefault();
                    focusThemeItem(current - 1);
                } else if (event.key === 'Home') {
                    event.preventDefault();
                    focusThemeItem(0);
                } else if (event.key === 'End') {
                    event.preventDefault();
                    focusThemeItem(themeItems.length - 1);
                } else if (event.key === 'Escape') {
                    event.preventDefault();
                    setThemeMenuOpen(false);
                    themeButton.focus();
                } else if (event.key === 'Tab') {
                    event.preventDefault();
                    setThemeMenuOpen(false);
                    focusOutsideThemeMenu(event.shiftKey);
                }
            });
            themeMenu.addEventListener('focusout', function () {
                window.setTimeout(function () {
                    if (!themeMenu.contains(document.activeElement) && document.activeElement !== themeButton) {
                        setThemeMenuOpen(false);
                    }
                }, 0);
            });
            document.addEventListener('click', function (event) {
                if (!themeButton.contains(event.target) && !themeMenu.contains(event.target)) {
                    setThemeMenuOpen(false);
                }
            });
        }

        document.addEventListener('keydown', function (event) {
            if (event.key !== 'Escape') return;
            var focusWasInNavigation = nav && nav.contains(document.activeElement);
            var focusWasInThemeMenu = themeMenu && themeMenu.contains(document.activeElement);
            setNavigationOpen(false);
            setThemeMenuOpen(false);
            if (focusWasInNavigation && navToggle) navToggle.focus();
            if (focusWasInThemeMenu && themeButton) themeButton.focus();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeSiteControls, { once: true });
    } else {
        initializeSiteControls();
    }
}());
