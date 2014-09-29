$(window).load(function(){
    // isotope
    $galleryContainer = $('.gallery.container');
    $galleryContainer.isotope({
          itemSelector : '.item-gallery'
    });
    
    //fade
    var items = $('.item');
    items.on('mouseenter mouseleave', function(e) {
        items.not(this).stop(true).fadeTo('fast', e.type=='mouseenter'?0.4:1);
    });
});