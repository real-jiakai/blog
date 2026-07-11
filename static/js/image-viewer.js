(function () {
    'use strict';

    function initializeImageViewer() {
        var links = Array.prototype.slice.call(document.querySelectorAll('a[data-lightbox="article"]'));
        if (!links.length) return;

        var labels = document.body.dataset;
        var dialog = document.createElement('dialog');
        dialog.className = 'article-lightbox';

        var stage = document.createElement('figure');
        stage.className = 'article-lightbox-stage';
        var image = document.createElement('img');
        image.className = 'article-lightbox-image';
        image.decoding = 'async';
        var caption = document.createElement('figcaption');
        caption.className = 'article-lightbox-caption';
        stage.appendChild(image);
        stage.appendChild(caption);

        function makeButton(className, label, text) {
            var button = document.createElement('button');
            button.type = 'button';
            button.className = className;
            button.setAttribute('aria-label', label);
            button.textContent = text;
            return button;
        }

        var closeButton = makeButton('article-lightbox-close', labels.lightboxCloseLabel || 'Close image viewer', '×');
        var previousButton = makeButton('article-lightbox-previous', labels.lightboxPreviousLabel || 'Previous image', '‹');
        var nextButton = makeButton('article-lightbox-next', labels.lightboxNextLabel || 'Next image', '›');
        dialog.appendChild(closeButton);
        dialog.appendChild(previousButton);
        dialog.appendChild(stage);
        dialog.appendChild(nextButton);
        document.body.appendChild(dialog);

        var current = 0;
        var opener = null;
        function showImage(index) {
            current = (index + links.length) % links.length;
            var link = links[current];
            var alt = link.dataset.alt || link.querySelector('img')?.alt || '';
            var title = link.dataset.title || '';
            image.src = link.href;
            image.alt = alt;
            caption.textContent = title;
            caption.hidden = !title;
            dialog.setAttribute('aria-label', alt || title || (labels.lightboxCloseLabel || 'Image viewer'));
            previousButton.hidden = links.length < 2;
            nextButton.hidden = links.length < 2;
        }

        function openViewer(index) {
            opener = links[index];
            showImage(index);
            document.body.classList.add('lightbox-open');
            if (typeof dialog.showModal === 'function') dialog.showModal();
            else dialog.setAttribute('open', '');
            closeButton.focus();
        }

        function closeViewer() {
            if (typeof dialog.close === 'function' && dialog.open) {
                dialog.close();
                return;
            }
            dialog.removeAttribute('open');
            finishClose();
        }

        function finishClose() {
            document.body.classList.remove('lightbox-open');
            image.removeAttribute('src');
            if (opener) opener.focus();
        }

        links.forEach(function (link, index) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                openViewer(index);
            });
        });
        closeButton.addEventListener('click', closeViewer);
        previousButton.addEventListener('click', function () { showImage(current - 1); });
        nextButton.addEventListener('click', function () { showImage(current + 1); });
        dialog.addEventListener('click', function (event) {
            if (event.target === dialog) closeViewer();
        });
        dialog.addEventListener('close', finishClose);
        dialog.addEventListener('keydown', function (event) {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeViewer();
                return;
            }
            if (event.key === 'ArrowLeft' && links.length > 1) showImage(current - 1);
            if (event.key === 'ArrowRight' && links.length > 1) showImage(current + 1);
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeImageViewer, { once: true });
    } else {
        initializeImageViewer();
    }
}());
