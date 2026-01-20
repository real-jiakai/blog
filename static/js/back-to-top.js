// Back to Top Button - Show/hide based on scroll position
$(document).ready(function() {
    var backToTopBtn = $('#back-to-top');
    var scrollThreshold = 300;

    // Check scroll position and toggle button visibility
    function toggleBackToTop() {
        if ($(window).scrollTop() > scrollThreshold) {
            backToTopBtn.addClass('show');
        } else {
            backToTopBtn.removeClass('show');
        }
    }

    // Initial check
    toggleBackToTop();

    // Listen for scroll events (throttled for performance)
    var scrollTimer;
    $(window).on('scroll', function() {
        if (scrollTimer) {
            clearTimeout(scrollTimer);
        }
        scrollTimer = setTimeout(toggleBackToTop, 10);
    });

    // Smooth scroll to top on click
    backToTopBtn.on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 400);
        return false;
    });
});
