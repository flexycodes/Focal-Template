jQuery(document).ready(function($) {

    "use strict";

    /* ---------------------------------------------------------------------- */
    /* -------------------------------- menu ---------------------------- */
    /* ---------------------------------------------------------------------- */

    // Select all links with hashes
    $('.navbar--menu a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });

    /* ---------------------------------------------------------------------- */
    /* -------------------------------- skillbar ---------------------------- */
    /* ---------------------------------------------------------------------- */

    $(window).scroll(function() {
       var hT = $('#skills').offset().top,
           hH = $('#skills').outerHeight(),
           wH = $(window).height(),
           wS = $(this).scrollTop();
       if (wS > (hT+hH-wH)){
            $('.skills--skillbar').each(function() {
                $(this).find('.skills--skillbar-bar').width(0);
            });

            $('.skills--skillbar').each(function() {
                $(this).find('.skills--skillbar-bar').animate({
                    width: $(this).attr('data-percent')
                }, 2000);
            });
       }
    });

    /* ---------------------------------------------------------------------- */
    /* ---------------------------- testimonials ---------------------------- */
    /* ---------------------------------------------------------------------- */

    $('#testimonials--client-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 1,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1170: {
            items: 1
          }
        }
    });


    $('.portfolios--items .portfolios--item:gt(-4)').addClass("last-element");
  

});