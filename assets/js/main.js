(function ($) {
	"use strict";

    // jQuery(document).ready(function($){


    //     $(".embed-responsive iframe").addClass("embed-responsive-item");
    //     $(".carousel-inner .item:first-child").addClass("active");
        
    //     $('[data-toggle="tooltip"]').tooltip();


    // });

	$(document).ready(function(){

	  $(".top-slider").owlCarousel({
				items: 1,
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                nav: true,
                dots: false,
                responsiveClass:true,
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	  });

	  $(".single-carousel").owlCarousel({
				items: 3,
                loop: true,
                autoplay: true,
                autoplayTimeout: 5000,
                nav: true,
                dots: false,
                margin: 15,
                responsiveClass:true,
                responsive:{
                    0:{
                        items:1,
                        nav:true
                    },
                    480:{
                        items:2,
                        nav:true
                    },
                    768:{
                        items:3,
                        nav:true
                    }
                },
                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
	  });

	});

    jQuery(window).load(function(){

        
    });


}(jQuery));	