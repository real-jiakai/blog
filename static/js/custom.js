// const re = /.{32}(\w+).?(jpg|gif|png|webp)/

// function replacer(match,p1,p2){
//     return p1;
// }

$(document).ready(function() {
    $("article img").each(function() {
        var currentImage = $(this);
        // var uniq_name = currentImage.attr("src").replace(re,replacer)
        currentImage.wrap("<a href='" + currentImage.attr("src") + "' data-lightbox='lightbox' data-title='" + currentImage.attr("alt") + "'></a>");
    });
});