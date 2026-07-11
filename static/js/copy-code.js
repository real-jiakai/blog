(function () {
    'use strict';

    function legacyCopy(text) {
        return new Promise(function (resolve, reject) {
            var textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.className = 'visually-hidden';
            textarea.setAttribute('aria-hidden', 'true');
            document.body.appendChild(textarea);
            textarea.select();

            try {
                if (!document.execCommand('copy')) throw new Error('Copy command failed');
                resolve();
            } catch (error) {
                reject(error);
            } finally {
                textarea.remove();
            }
        });
    }

    function copyWithFallback(text) {
        if (navigator.clipboard && window.isSecureContext) {
            try {
                var timeout = new Promise(function (resolve, reject) {
                    window.setTimeout(function () { reject(new Error('Clipboard request timed out')); }, 750);
                });
                return Promise.race([Promise.resolve(navigator.clipboard.writeText(text)), timeout]).catch(function () {
                    return legacyCopy(text);
                });
            } catch (error) {
                return legacyCopy(text);
            }
        }

        return legacyCopy(text);
    }

    function initializeCopyButtons() {
        var labels = document.body.dataset;
        var copyLabel = labels.copyLabel || 'Copy';
        var copiedLabel = labels.copiedLabel || 'Copied!';
        var errorLabel = labels.copyErrorLabel || 'Copy failed';

        document.querySelectorAll('.highlight').forEach(function (highlight) {
            if (highlight.querySelector('.copy-code-button')) return;

            var button = document.createElement('button');
            button.className = 'copy-code-button';
            button.type = 'button';
            button.textContent = copyLabel;
            button.setAttribute('aria-label', copyLabel);

            button.addEventListener('click', function () {
                var code = highlight.querySelector('table td:last-child code') || highlight.querySelector('code');
                var text = code ? code.textContent : '';

                copyWithFallback(text).then(function () {
                    button.textContent = copiedLabel;
                    button.setAttribute('aria-label', copiedLabel);
                    button.classList.add('copied');
                }).catch(function () {
                    button.textContent = errorLabel;
                    button.setAttribute('aria-label', errorLabel);
                }).finally(function () {
                    window.setTimeout(function () {
                        button.textContent = copyLabel;
                        button.setAttribute('aria-label', copyLabel);
                        button.classList.remove('copied');
                    }, 2000);
                });
            });

            highlight.prepend(button);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeCopyButtons, { once: true });
    } else {
        initializeCopyButtons();
    }
})();
