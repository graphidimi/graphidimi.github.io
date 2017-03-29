var albumsAlreadyVisited = [];
var alreadyUnlocked = false;
var lastAlbum = $('a[href="#album-5"]');

$('.control-button--back').click(function() {
    if (alreadyUnlocked)
        return;

    var currentAlbum = $('.single--current').attr('id');
    if (albumsAlreadyVisited.indexOf(currentAlbum) == -1)
        albumsAlreadyVisited.push(currentAlbum);
        
    if (albumsAlreadyVisited.length == 4) {
        alreadyUnlocked = true;
        lastAlbum.removeClass('cursor-blocked');
        lastAlbum
            .find('.img--grid')
            .attr('src', 'img/queen.png')
        ;
        lastAlbum.animate({ opacity: 1 }, 500);
    }
});

lastAlbum.click(function(e) {
    if (!alreadyUnlocked) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }
});

$(document).ready(function() {
    window.setInterval(function() {
        if (!alreadyUnlocked)
            lastAlbum.animate({ opacity: 0.2 }, 500);
    }, 1000);
});
