$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    responsiveClass: true,
    responsive: {
        0:{
            items: 1,
        },
        768:{
            items: 2,
        },
        1100:{
            items: 3,
        },
        1400:{
            items: 4,
            loop: false,
        }
    }
});


    // JavaScript to add sticky class to the navbar
    document.addEventListener('DOMContentLoaded', function() {
        var navbar = document.querySelector('.navbar');
        var sticky = navbar.offsetTop;

        function stickyNavbar() {
            if (window.pageYOffset >= sticky) {
                navbar.classList.add('sticky');
            } else {
                navbar.classList.remove('sticky');
            }
        }

        window.onscroll = function() {
            stickyNavbar();
        };
    });

