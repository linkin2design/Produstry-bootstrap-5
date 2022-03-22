$(document).ready(function () {
    // banner slider =========
    'use strict';
    $('.banner-slider').slick({
        autoplay: false,
        speed: 800,
        lazyLoad: 'progressive',
        prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',
        responsive: [
            {
                breakpoint: 576,
                settings: {
                    dots: false,
                    arrows: false,
                },
            }, {
                breakpoint: 768,
                settings: {
                    dots: false,
                    arrows: false,
                },
            }, {
                breakpoint: 992,
                settings: {
                    dots: false,
                    arrows: false,
                },
            }, {
                breakpoint: 1400,
                settings: {
                    dots: false,
                    arrows: false,
                },
            },

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    }).slickAnimation();


    // blog slider =========

    $('.blog-slider').slick({
        prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',
        centerMode: true,
        autoplay: true,
        centerPadding: '0px',
        pushOnHover: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    dots: false,
                    arrows: false,
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    arrows: false,
                }
            },

            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]

        // brand slider 


    });



    // Testmonial slider 

    $('.text-slider').slick({
        asNavFor: '.image-slider',
        prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',
        autoplay: false,
        slidesToShow: 1,
        arrows: true,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
            }
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
            }
        },



        ],


    });

    // image slider 
    $('.image-slider').slick({
        asNavFor: '.text-slider',
        centerMode: true,
        centerPadding: '0',
        arrows: false,
        slidesToShow: 3,

    });


    $('.brand-slider').slick({
        prevArrow: '<i class="fas fa-chevron-left left-arrow"></i>',
        nextArrow: '<i class="fas fa-chevron-right right-arrow"></i>',
        centerMode: true,
        autoplay: true,
        centerPadding: '20px',
        arrows: true,
        slidesToShow: 5,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },

            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },

            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
            },



        ],

    });


    // counter up 
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // scroll 

    ScrollReveal({
        reset: true,
        distance: '60px',
        duration: 2000,
        delay: 200

    });
    ScrollReveal().reveal('.section-title, options', { delay: 200, origin: 'bottom' });
    ScrollReveal().reveal('.tagline, options', { delay: 200, origin: 'bottom' });
    ScrollReveal().reveal('.service-provide, image', { delay: 200, origin: 'bottom' });
    ScrollReveal().reveal('.tab-content', { delay: 200, origin: 'bottom' });
    ScrollReveal().reveal('.pr-1', { delay: 200, origin: 'bottom' });
    ScrollReveal().reveal('.pr-2', { delay: 200, origin: 'top' });
    ScrollReveal().reveal('.pr-3', { delay: 200, origin: 'bottom' });
    ScrollReveal().reveal('.pr-4', { delay: 200, origin: 'top' });
    ScrollReveal().reveal('.f1', { delay: 200, origin: 'top' });
    ScrollReveal().reveal('.f2', { delay: 200, origin: 'bottom' });
    ScrollReveal().reveal('.f3', { delay: 200, origin: 'top' });
    ScrollReveal().reveal('.f4', { delay: 200, origin: 'bottom' });
    ScrollReveal().reveal('.ft1', { delay: 200, origin: 'bottom' });
    ScrollReveal().reveal('.ft2', { delay: 200, origin: 'bottom' });
    ScrollReveal().reveal('.ft3', { delay: 200, origin: 'bottom' });
    ScrollReveal().reveal('.ft4', { delay: 200, origin: 'bottom' });
    ScrollReveal().reveal('.cpy', { delay: 200, origin: 'top' });

    // veno box 
    new VenoBox({
        selector: '.venobox'

    });

    // preloader 
    $(".loader-container").fadeOut(5000);




});


// back to top
// back to top button


$(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    // back to top
    if (scrolling > 500) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
    // nav fix

    if (scrolling > 1000) {
        $('nav').addClass('nav-fix');
    } else {
        $('nav').removeClass('nav-fix')
    }
});

$('.back-to-top').click(function () {
    $('html,body').animate({
        scrollTop: '0px',
    }, 2000);
})


// manu part js

$('.nav_icon').click(function () {
    $('#navbarSupportedContent .nav-link').fadeToggle(500);
    $(this).find("i").toggleClass('fa-bars fa-times');
    $('#navbarSupportedContent .nav-link').css("display", "inline-block");
    $('#navbarSupportedContent .navbar-nav').css("height", "35px");
});


$('.nav_icon').click(function () {
    $('.navbar-brand').toggleClass('logo_move');
});




