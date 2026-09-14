document.addEventListener('DOMContentLoaded', () => {

    /* Animations */

    const animationElements = document.querySelectorAll('.fadeInDown, .fadeInUp');

    const animationObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    // Stop observing once the animation has played
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    animationElements.forEach(element => {
        animationObserver.observe(element);
    });


    /* Navbar links */

    const navbar = document.querySelector('.navbar');

    if (navbar) {

        const updateNavbar = () => {
            navbar.classList.toggle(
                'scrolled',
                window.scrollY > 40
            );
        };

        window.addEventListener(
            'scroll',
            updateNavbar,
            { passive: true }
        );

        // Set the correct state when the page first loads
        updateNavbar();
    }

});


/* Navbar Transparent to Solid */

// $(document).ready(function() {
// 	$(window).scroll(function() {
// 		if($(this).scrollTop() > 300) {
// 			$('.navbar').addClass('solid');
// 			$('.navbar-brand').addClass('solid');
// 		} else {
// 			$('.navbar').removeClass('solid');
// 			$('.navbar-brand').removeClass('solid');
// 		}
// 	});
// });

/* Close Mobile Nav OnClick */

// $(document).ready(function() {
// 	$(document).click(function(event) {
// 		var clickover = $(event.target);
// 		var isOpened = $(".navbar-collapse").hasClass("show");
// 		if (isOpened === true && !clickover.hasClass("navbar-toggler")) {
// 			$(".navbar-toggler").click();
// 		}
// 	});
// });

/* Smooth Scrolling to Links */

// $(document).ready(function() {
// 	$("a").on('click', function(event) {
// 		if (this.hash !== "") {
// 			event.preventDefault();
// 			var hash = this.hash;
// 			$('html, body').animate( {
// 				scrollTop: $(hash).offset().top
// 			}, 800, function() {
// 				window.location.hash = hash;
// 			});
// 		}
// 	});
// });

/* Bouncing Down Arrow */

// $(document).ready(function() {
// 	$(window).scroll(function() {
// 		$(".arrow").css("opacity", 1 - $(window).scrollTop() / 500);
// 	});
// });

/* Loading Animation */

/*
$(window).on("load", function(){
	$(".loading-animation").fadeOut("slow");
});
*/