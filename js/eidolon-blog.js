/**
 * Tumblr extensions
 * (c) 2011, Christophe Desguez - EIDOLON LABS
 * Licensed under the MIT license.
 */
if (!Object.keys) Object.keys = function (o) {
    var keys = [];
    for (var k in o) if (o.hasOwnProperty(k)) keys.push(k);
    return keys;
}

$(function whenLoaded() {

    // find hidden titles    in quotes to display them as permalink
    $('blockquote div.title').each(function () {
        var title = $(this).text(), quote = $(this).parent();
        var quoteID = quote.attr('id').substr(5);
        $('#title' + quoteID).text(title);
    });

    // execute the embedded code in articles
    $("article.article code.runnable").each(function () {
        var code = $(this).text();
        $("<script>", {type: "text/javascript"})
            .text(code)
            .insertAfter(this);
    });
    // fancy animation on empty droplet for 404 page
    if ($.fn.flipflap) $(".droplet:empty").addClass("warning").flipflap("{Arrrghh#?!*%!$Xx}", 100);

    // Change the current underlined item in the navigation bar according to the url
    var locationParts = window.location.split('/'); // extract
    if (locationParts.length < 2) return; // no extra subpath
    var pageName = locationParts[2];
    $("#navigation a").removeClass("current");
    $("#navigation a[href=/" + pageName + "]").addClass("current");
});
