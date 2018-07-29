
$(document).ready(function(e) {
    "use strict";

    var $technical = $('.contact'),
        $window = $(window),
        $document = $(document),
        $totop = $('.totop'),
        $homeLink = $('.homeLink a'),
        $menuItem = $('.menuItem a'),
        $navbarBrand = $('.navbar-brand'),
        $navbarCollapse = $('.navbar-collapse');

    var $banner = $('#banner');
    $banner.show().superslides({
        animation: 'fade',
        play: 2000
    });


    function changeBanner() {
        var windowWidth = $window.width(),
            windowHeight = $window.height();

        if (windowWidth <= 767) {

            $banner.css({
                'height': windowHeight - '50'
            });

            console.log($banner.css('height'))
        } else {
            console.log(windowHeight - '140');
            $banner.css({
                'height': windowHeight - '140'
            });
        }
    }

    changeBanner();
    $window.resize(function() {
        changeBanner();
    });

    var windowWidth = $window.width();

    if (windowWidth <= 767) {
        $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
                console.log(1);
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top - 30
                        }, 1000);
                        return false;
                    }
                }
            });
        });
    } else if (windowWidth >= 768) {
        $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
                console.log(1);
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                    console.log(target)

                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });
    }
});
