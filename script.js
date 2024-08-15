$(document).ready(function(){
    var owl = $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10, // Adjust the margin as needed
        responsiveClass: true,
        responsive: {
            0: {
                items: 2, // Adjust number of items for small screens
            },
            600: {
                items: 3, // Adjust number of items for medium screens
            },
            1000: {
                items: 5, // Show 5 items on larger screens
            }
        }
    });

    // Custom navigation buttons within the flash sale section
    $('.flash-sale-nav .owl-prev').click(function() {
        console.log('Previous button clicked'); // Debug log
        owl.trigger('prev.owl.carousel');
    });
    $('.flash-sale-nav .owl-next').click(function() {
        console.log('Next button clicked'); // Debug log
        owl.trigger('next.owl.carousel');
    });
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



    // cart
    document.getElementById('cartIcon').addEventListener('click', function() {
        const cartPopup = document.getElementById('cartPopup');
        cartPopup.style.display = cartPopup.style.display === 'none' || cartPopup.style.display === '' ? 'block' : 'none';
    });


    // popuppp
    document.getElementById('shopNowBtn').addEventListener('click', function() {
        document.getElementById('loginPopup').style.display = 'flex';
    });

    document.getElementById('closePopup').addEventListener('click', function() {
        document.getElementById('loginPopup').style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === document.getElementById('loginPopup')) {
            document.getElementById('loginPopup').style.display = 'none';
        }
    });




    // add to cart
    document.addEventListener('DOMContentLoaded', () => {
        const notification = document.getElementById('notification');
        const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                notification.style.display = 'block';
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 2000); // Hide the notification after 2 seconds
            });
        });
    });