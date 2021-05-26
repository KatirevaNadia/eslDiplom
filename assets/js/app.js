
/* eslint-env jquery */
/* eslint-env browser, node */
/* eslint-disable no-console */

$(function() {
    
    var header = $("#header");
    var introH = $("#intro").innerHeight();//сохраняем высоту блока
    var scrollOffset = $(window).scrollTop();
    
    /*Fixed header*/
    checkScroll(scrollOffset);
    
    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
        
    });
    
    function checkScroll(scrollOffset){
       
        if(scrollOffset >= introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        
    }
    
    /*Smooth scrol*/
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();
        
        var blockId = $(this).data("scroll"),
            blockOffset = $(blockId).offset().top;
        
        $("#nav a").removeClass("active");
        $(this).addClass("active");
        
        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });
    
    /*Menu nav_toggle*/
    $("#nav_toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });
    
    /*Colapse*/
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();
                
        $(this).toggleClass("active");
    });
    
    /* Slider */
    $("[data-slider]").slick({
       infinite: true,
       fade: false,
       slidesToShow: 1,
       slidesToScroll: 1
    });
});



