(function () {
    'use strict';

    function initializeImageViewer(): void {
        var links: HTMLAnchorElement[] = Array.prototype.slice.call(document.querySelectorAll<HTMLAnchorElement>('a[data-lightbox="article"]'));
        if (!links.length) return;

        var labels = document.body.dataset;
        var dialog = document.createElement('dialog');
        dialog.className = 'article-lightbox';

        var stage = document.createElement('figure');
        stage.className = 'article-lightbox-stage';
        var image = document.createElement('img');
        image.className = 'article-lightbox-image';
        image.decoding = 'async';
        stage.appendChild(image);

        // SVG paths are drawn centered in the 24x24 viewBox; text glyphs
        // (‹, ›, ×) sit off-center in their em box, so they cannot be used
        // if the icon is to land on the exact middle of the round button.
        function makeButton(className: string, label: string, iconPath: string): HTMLButtonElement {
            var button = document.createElement('button');
            button.type = 'button';
            button.className = className;
            button.setAttribute('aria-label', label);
            button.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">'
                + '<path d="' + iconPath + '" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>'
                + '</svg>';
            return button;
        }

        var previousButton = makeButton('article-lightbox-previous', labels.lightboxPreviousLabel || 'Previous image', 'M15.25 5.5 8.75 12l6.5 6.5');
        var nextButton = makeButton('article-lightbox-next', labels.lightboxNextLabel || 'Next image', 'M8.75 5.5 15.25 12l-6.5 6.5');

        // Toolbar: counter · title · close. The close control is a real
        // icon button — the blog's screenshots are mostly of application
        // windows, so the viewer must not imitate window chrome
        // (traffic-light dots) that blends into the image below it.
        var titleBar = document.createElement('div');
        titleBar.className = 'article-lightbox-titlebar';
        var counter = document.createElement('div');
        counter.className = 'article-lightbox-counter';
        var titleText = document.createElement('div');
        titleText.className = 'article-lightbox-title';
        var closeButton = makeButton('article-lightbox-close', labels.lightboxCloseLabel || 'Close image viewer', 'M7 7l10 10M17 7 7 17');
        titleBar.appendChild(counter);
        titleBar.appendChild(titleText);
        titleBar.appendChild(closeButton);

        dialog.appendChild(titleBar);
        dialog.appendChild(previousButton);
        dialog.appendChild(stage);
        dialog.appendChild(nextButton);
        document.body.appendChild(dialog);

        var current = 0;
        var opener: HTMLAnchorElement | null = null;
        function showImage(index: number): void {
            current = (index + links.length) % links.length;
            var link = links[current];
            var innerImage = link.querySelector('img');
            var alt = link.dataset.alt || (innerImage ? innerImage.alt : '') || '';
            var title = link.dataset.title || '';
            image.src = link.href;
            image.alt = alt;
            titleText.textContent = title || alt;
            counter.textContent = (current + 1) + ' / ' + links.length;
            counter.hidden = links.length < 2;
            dialog.setAttribute('aria-label', alt || title || (labels.lightboxCloseLabel || 'Image viewer'));
            previousButton.hidden = links.length < 2;
            nextButton.hidden = links.length < 2;
        }

        function openViewer(index: number): void {
            opener = links[index];
            showImage(index);
            document.body.classList.add('lightbox-open');
            if (typeof dialog.showModal === 'function') dialog.showModal();
            else dialog.setAttribute('open', '');
            closeButton.focus();
        }

        function closeViewer(): void {
            if (typeof dialog.close === 'function' && dialog.open) {
                dialog.close();
                return;
            }
            dialog.removeAttribute('open');
            finishClose();
        }

        function finishClose(): void {
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
