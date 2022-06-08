feather.replace();

function toogleMenuMobile() {
   var element = document.getElementById("menu-mobile");
   element.classList.toggle("active");
}

$(document).ready(function(){
    $('#carousel-home').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav:false
            }
        }
    });
    $('#carousel-products-a').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            570:{
                items:2
            },
            820:{
                items:3
            },
            1024:{
                items:4
            }
        }
    });
    $('#carousel-products-b').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        merge:true,
        responsive:{
            0:{
                items:1
            },
            570:{
                items:2
            },
            820:{
                items:3
            },
            1024:{
                items:4
            }
        }
    });
    $('#carousel-products-c').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            570:{
                items:2
            },
            820:{
                items:3
            },
            1024:{
                items:4
            }
        }
    });
    $('#carousel-products-d').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            570:{
                items:2
            },
            820:{
                items:3
            },
            1024:{
                items:4
            }
        }
    });
});