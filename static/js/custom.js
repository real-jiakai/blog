$(document).ready(function() {
    $("img").each(function() {
        var currentImage = $(this);
        currentImage.wrap("<a href='" + currentImage.attr("src") + "' data-fancybox='gallery' data-caption='" + currentImage.attr("alt") + "'></a>");
    });
});