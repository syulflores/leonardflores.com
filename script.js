const animationElements = document.querySelectorAll('.fadeInDown, .fadeInUp');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');


/* Animations */

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

/* Scroll Spy */

const navObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }

            navLinks.forEach(link => {
                link.classList.toggle(
                    'active',
                    link.getAttribute('href') === `#${entry.target.id}`
                );
            });
        });
    },
    {
        rootMargin: '-20% 0px -60% 0px'
    }
);

sections.forEach(section => {
    navObserver.observe(section);
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