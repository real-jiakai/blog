(function () {
    var toggle = document.getElementById('theme-toggle');
    var iconSun = document.getElementById('theme-icon-sun');
    var iconMoon = document.getElementById('theme-icon-moon');

    function getTheme() {
        var stored = localStorage.getItem('theme');
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function updateIcons(theme) {
        if (theme === 'dark') {
            iconSun.style.display = 'inline';
            iconMoon.style.display = 'none';
        } else {
            iconSun.style.display = 'none';
            iconMoon.style.display = 'inline';
        }
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-bs-theme', theme);
        updateIcons(theme);
    }

    function switchUtterancesTheme(theme) {
        var utterancesFrame = document.querySelector('.utterances-frame');
        if (utterancesFrame) {
            var utterancesTheme = theme === 'dark' ? 'github-dark' : 'github-light';
            utterancesFrame.contentWindow.postMessage(
                { type: 'set-theme', theme: utterancesTheme },
                'https://utteranc.es'
            );
        }
    }

    // Apply on load
    var currentTheme = getTheme();
    applyTheme(currentTheme);

    // Toggle on click
    if (toggle) {
        toggle.addEventListener('click', function () {
            var theme = document.documentElement.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
            localStorage.setItem('theme', theme);
            applyTheme(theme);
            switchUtterancesTheme(theme);
        });
    }

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
        if (!localStorage.getItem('theme')) {
            var theme = e.matches ? 'dark' : 'light';
            applyTheme(theme);
            switchUtterancesTheme(theme);
        }
    });
})();
