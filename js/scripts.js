// register service worker
// Only trigger if service workers are supported in browser.
if ('serviceWorker' in navigator) {
    // Wait until window is loaded before registering.
    window.addEventListener('load', () => {
        // Register the service worker with "/" as it's scope.
        navigator.serviceWorker.register("service-worker.js", { scope: '/' })
            // Output success/failure of registration.
            .then(() => console.log('SW registered'))
            .catch(() => console.error('SW registration failed'));
    });
}


window.addEventListener('DOMContentLoaded', event => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };
    // Shrink the navbar 
    navbarShrink();
    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        })
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

//loading hide function
function preloaderFadeOutInit() {
    $('.loader').fadeOut('slow');
    $('body').attr('id', '');
    $(' html, body').css({
        overflow: 'auto'
    });
}
// Window load function
jQuery(window).on('load', function () {
    (function ($) {
        preloaderFadeOutInit();
    })(jQuery);
});

//Animate photo on scroll
var images = document.getElementsByClassName('photo');
var offset = window.screen.height - 65; // offset to trigger the colorize effect
window.addEventListener('scroll', function () {
    if (window.scrollY >= offset || window.scrollY <= -offset) {
        [].forEach.call(images, function (image) {
            image.classList.add('photo-colorize');
        });
    } else {
        [].forEach.call(images, function (image) {
            image.classList.remove('photo-colorize');
        });
    }
});