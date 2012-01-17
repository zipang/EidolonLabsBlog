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
    // find hidden title in quotes to display them as permalink
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
    // fancy animation on droplet for 404 page
    // $(".droplet:empty").addClass("warning").flipflap("{Arrrghh#?!*%!$Xx}", 100);
});
