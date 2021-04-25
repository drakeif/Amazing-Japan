//fixed menu
(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 140) {
            header.classList.add('header--active');
        } else {
            header.classList.remove('header--active');
        }
    };
}());
//burger menu
(function () {
    const burgerItem = document.querySelector('.burger');
    const menuOpen = document.querySelector('.header__inner-links');
    const menuClose = document.querySelector('.close');
    const menuLinks = document.querySelectorAll('.header__inner-links__link');
    
    burgerItem.addEventListener('click', () => {
        menuOpen.classList.add('header--active2');
    });
    //close menu
    menuClose.addEventListener('click', () => {
        menuOpen.classList.remove('header--active2');
    });
    //close link menu
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i +=1 ) {
            menuLinks[i].addEventListener('click', () => {
                menuOpen.classList.remove('header--active2');
            });
        }
    }
}());
//cole link
/* (function () {
    const closeLink = document.querySelector('.js-scroll');

    closeLink.addEventListener('click', () => {
        menuOpen.classList.remove('header--active2');
    });
}()); */
//scroll
(function () {

    const smoothScroll = function (targetEl, duration) {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };

    const scrollTo = function () {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', function () {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);

            });
        });
    };
    scrollTo();
}());

