(function () {
    'use strict';

    var year = document.getElementById('footer-current-year');
    if (year) year.textContent = String(new Date().getFullYear());
}());
