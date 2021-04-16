$(function () {

    "use strict";
    /* smooth scroll
 -------------------------------------------------------*/
    $.scrollIt({

        easing: 'swing',      // the easing function for animation
        scrollTime: 900,       // how long (in ms) the animation takes
        activeClass: 'active', // class given to the active nav element
        onPageChange: null,    // function(pageIndex) that is called when page is changed
        topOffset: -70,
        upKey: 38,                // key code to navigate to the next section
        downKey: 40          // key code to navigate to the previous section

    });

    var win = $(window);


    win.on("scroll", function () {
        var wScrollTop = $(window).scrollTop();

        if (wScrollTop > 100) {
            $(".navbar").addClass("navbar-colored");
        } else {
            $(".navbar").removeClass("navbar-colored");
        }
    });

    /* close navbar-collapse when a  clicked */
    $(".navbar-nav a").not('.dropdown-toggle').on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    /* close navbar-collapse when a  clicked */
    $('.dropdown').on('click', function () {
        $(this).toggleClass("show");
    });


    /* scroll-top-btn */
    var scrollButton = $('.scroll-top-btn .fa');
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 700) {
            scrollButton.show();
        } else {
            scrollButton.hide();
        }
    });

    /* Click On scroll-top-btn */
    scrollButton.on('click', function () {
        $('html,body').animate({ scrollTop: 0 }, 1200);
    });

    /* wow */
    new WOW().init();

    /* tabs in price-area section */
    $('.price-area ul.tabs li').on('click', function () {
        var myID = $(this).attr('id');
        $(this).addClass('active').siblings().removeClass('active');
        $('#' + myID + '-content').fadeIn(800).siblings().hide();
    });

    $('.price-area-2 ul.tabs li').on('click', function () {
        var myID = $(this).attr('id');
        $(this).addClass('active').siblings().removeClass('active');
        $('#' + myID + '-content').fadeIn(800).siblings().hide();
    });

    /* faqs section */
    $('.faqs .box h6').on("click", function () {
        $(this).toggleClass('blue orange').siblings().removeClass('orange').addClass('blue');
        $(this).next().slideToggle(500);
        $(".faqs .box p").not($(this).next()).slideUp(500);
    });

    $('.faqs-2 .box h6').on("click", function () {
        $(this).toggleClass('blue orange').siblings().removeClass('orange').addClass('blue');
        $(this).next().slideToggle(500);
        $(".faqs-2 .box p").not($(this).next()).slideUp(500);
    });

    $('.faqs-3 .box h6').on("click", function () {
        $(this).toggleClass('green blue').siblings().removeClass('blue').addClass('green');
        $(this).next().slideToggle(500);
        $(".faqs-3 .box p").not($(this).next()).slideUp(500);
    });

    /* welcome-slider slider */
    $('.welcome-slider .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        smartSpeed: 650,
        nav: false
    });

    /* vision-area */
    $('.vision-area .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 2800,
        autoplayHoverPause: true,
        smartSpeed: 650,
        dotsContainer: '.vision-dots'
    });

    /* how-work-2 */
    $('.how-work-2 .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 30,
        autoplay: false,
        autoplayTimeout: 2800,
        autoplayHoverPause: true,
        smartSpeed: 650,
        dotsContainer: '.how-dots'
    });

    /* testimonials */
    $('.testimonials .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        autoplay: false,
        autoplayTimeout: 2800,
        autoplayHoverPause: true,
        smartSpeed: 700,
        mouseDrag: false,
        animateIn: 'fadeIn'
    });

    /* testimonials-2 */
    $('.testimonials-2 .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 80,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 700,
        mouseDrag: true
    });

    /* testimonials-3 */
    $('.testimonials-3 .owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        margin: 80,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 700,
        mouseDrag: true
    });

    /*  leadership-area section  */
    win.on('scroll', function () {
        $(".skills-progress span").each(function () {
            var bottom_of_object =
                $(this).offset().top + $(this).outerHeight();
            var bottom_of_window =
                $(window).scrollTop() + $(window).height();
            var myVal = $(this).attr('data-value');
            if (bottom_of_window > bottom_of_object) {
                $(this).css({
                    width: myVal
                });
            }
        });
    });

});



$(window).on("load", function () {
    $('.load-wrapp').fadeOut(100);
});
//check device

let isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
// set opacity = 1 for mobile
if (isMobile.any()) document.getElementById("img-newspapers1").style.opacity = "1";
if (isMobile.any()) document.getElementById("img-newspapers2").style.opacity = "1";
if (isMobile.any()) document.getElementById("img-newspapers3").style.opacity = "1";
if (isMobile.any()) document.getElementById("img-newspapers4").style.opacity = "1";
if (isMobile.any()) document.getElementById("img-newspapers5").style.opacity = "1";
if (isMobile.any()) document.getElementById("img-newspapers6").style.opacity = "1";

// // use for tracking
// $('#phone-number').click(function(){
//     sendGaEvent('Contact Phone','Landing V3','Click Phone','Click Phone');
// });
// $('#email-support').click(function(){
//     sendGaEvent('Contact Email','Landing V3','Click Email','Click Email');
// });
// $('#read-more').click(function(){
//     sendGaEvent('Read More','Landing V3','Click More','Click Read More');
// });
// $('#get-advice').click(function(){
//     sendGaEvent('Contact advisory','Landing V3','Click advisory','Get advice');
// });


// function sendGaEvent(event_category, event_label ,event_action, event_callback){
//     gtag('event', event_action, {
//         'event_category': event_category,
//         'event_label': event_label,
//         'event_callback': function () {
//             console.log(event_callback)
//         }
//       });
// }
$("#getyear").text( (new Date).getFullYear() );
