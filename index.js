$(document).ready(function(){

    $("#banner-area .owl-carousel").owlCarousel({
        dots:true,
        items:1,
        loop:true
    })


    $("#top-sale .owl-carousel").owlCarousel({

        loop:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
   
    var $grid=$(".grid").isotope({

itemSelector:'.grid-item',
layoutMode:'fitRows'
    });
    $(".button-group").on("click","button",function(){
var filterValue =$(this).attr('data-filter');
$grid.isotope({filter:filterValue});
    });
    $("#new-phones .owl-carousel").owlCarousel({

        loop:true,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $("#blogs .owl-carousel").owlCarousel({

        loop:false,
        nav:true,
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
          
        }
    })
   
});