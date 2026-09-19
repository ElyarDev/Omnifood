// SHOW COPYRIGHT YEAR
const yearEL = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

// MAKE MOBILE NAV WORK
const btnNavEL = document.querySelector('.btn-mobile-nav');
const headerEL = document.querySelector('.header');

btnNavEL.addEventListener('click', function () {
    headerEL.classList.toggle('nav-open');
})

// SMOOTH SCROLLING ANIMATION
const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const href = link.getAttribute('href');

        // scroll back to top
        if (href === '#') window.scrollTo({
            top: 0,
            behavior: "smooth",
        });

        // scroll into other section
        if (href !== '#' && href.startsWith('#')) {
            const sectionEL = document.querySelector(href);
            sectionEL.scrollIntoView({
                behavior: "smooth",
            });
        };

        // close mobile navigation
        if (link.classList.contains('main-nav-link')) {
            headerEL.classList.toggle('nav-open');
        }
    });
});

// STICKY NAVIGATION
const heroSectionEL = document.querySelector('.hero-section');

const obs = new IntersectionObserver(function (enteries) {
    const ent = enteries[0];
    console.log(ent);

    // adding sticky nav
    if (ent.isIntersecting === false) {
        document.body.classList.add('sticky');
    }

    // removing sticky nav
    if (ent.isIntersecting === true) {
        document.body.classList.remove('sticky');
    }
},
    {
        // in the viewport
        root: null,
        threshold: 0,
        rootMargin: '-80px',
    });

obs.observe(heroSectionEL);

// FIXING FLEXBOX GAP PROPERTY
function checkFlexGap() {
    var flex = document.createElement('div');
    flex.style.display = 'flex';
    flex.style.flexDirection = 'column';
    flex.style.rowGap = '1px';

    flex.appendChild(document.createElement('div'));
    flex.appendChild(document.createElement('div'));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add('no-flexbox-gap');
}

checkFlexGap();