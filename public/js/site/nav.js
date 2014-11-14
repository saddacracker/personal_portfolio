$(function () {
    $(".navbar-brand").hide();
    
    $(document).on( 'scroll', function(){
        console.log('scroll top : ' + $(window).scrollTop());
        if($(window).scrollTop()>=$(".nav-top").height())
        {
             $(".navbar").addClass("navbar-fixed-top");
             $(".navbar-brand").show();
        }

        if($(window).scrollTop()<$(".nav-top").height())
        {
             $(".navbar").removeClass("navbar-fixed-top");
             $(".navbar-brand").hide();
        }
    });
});