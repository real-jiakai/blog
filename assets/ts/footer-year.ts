(function () {
    'use strict';

    const year: HTMLElement | null = document.getElementById('footer-current-year');
    if (year) year.textContent = String(new Date().getFullYear());
}());
