"use strict";
var nav = $("nav");
var navHeight = nav.outerHeight();

$(".navbar-toggler").on("click", function() {
    if (! $('#mainNav').hasClass('navbar-reduce')) {
        $("#mainNav").addClass('navbar-reduce');
    }
});

// Preloader
$(window).on("load", function() {
    if ($('#preloader').length) {
        $('#preloader').delay(100).fadeOut('slow', function() {
            $(this).remove();
        })
    }
})

// Back to Top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 90) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});

// Scroll Top
$('.scrolltop-mf').on("click", function() {
    $('html, body').animate({
        scrollTop: 0
    }, 1000);
})


// Close menu when scroll is clicked

$(".js-scroll").on("click", function () {
    $(".navbar-collapse").collapse('hide');
});

// Active scrollspy

$('body').scrollspy({
    target: '#mainNav',
    offset: navHeight
});

// Navbar Reduce
$(window).trigger('scroll');
$(window).on('scroll', function() {
    let pixels = 50;
    let top = 1200;
    if($(window).scrollTop() > pixels) {
        $('.navbar-expand-md').addClass('navbar-reduce');
        $('.navbar-expand-md').removeClass('navbar-trans');
    } else {
        $('.navbar-expand-md').addClass('navbar-trans');
        $('.navbar-expand-md').removeClass('navbar-reduce');
    }
    if ($(window).scrollTop() > top) {
        $('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
    } else {
        $('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
    }
});

// Typed
if ($('.text-slider').length == 1) {
    let typed_strings = $('.text-slider-items').text();
    let typed = new Typed('.text-slider', {
        strings: typed_strings.split(','),
        typeSpeed: 80,
        loop: true,
        backDelay: 1100,
        backSpeed: 30
    });
}

// Animation
progress = (percent, $el) => {
    $el.css('visibility', 'visible');
    let progressBarWidth = percent * el.width() / 100;

    $el.find('div').animate({ width: progressBarWidth }, 500).html(percent + "%&nbsp;");
}

let globalValues = 0;

let animationProgressBar = () => {
    if (globalValues < 100) {
        // Makes sure the bars are visible
        $("#progress-bar").show();
        globalValues = globalValues + 4;
        progress(globalValues, $('#progress-bar'));
        setTimeout(animationProgressBar, 500);
    } else {
        alert("Done");
        // Set progress to zero and then hide bar
        globalValues = 0;
        progress(globalValues, $('#progress-bar'));
        $("#progress-bar").hide();
    }
}

// animationProgressBar();