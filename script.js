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

});


/* Navbar Transparent to Solid */

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        document.querySelector('.navbar').classList.add('solid');
        document.querySelector('.navbar-brand').classList.add('solid');
    } else {
        document.querySelector('.navbar').classList.remove('solid');
        document.querySelector('.navbar-brand').classList.remove('solid');
    }
});