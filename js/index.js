document.addEventListener('DOMContentLoaded', () => {

    let burgerMenus = document.querySelectorAll('.burger__toggle');
    let mobileMenu = document.querySelector('.js-menu-container');

    if (burgerMenus.length > 0) {

        burgerMenus.forEach(el => {
            el.addEventListener('click', () => {
                mobileMenu.classList.toggle('opened');
                burgerMenus.forEach(el => {
                    el.classList.toggle('opened');
                })
            })
        })
    }

    if (window.outerWidth <= 1100) {
        let headerContacts = document.querySelector('.header__info__container');
        let menuContactsContainr = document.querySelector('.dropdown__contacts');
        menuContactsContainr.innerHTML = headerContacts.innerHTML;
        headerContacts.remove();

        let mainMenu = document.querySelector('.js-mobile');
        let mobileMenuContainer = document.querySelector('.mobile__menu');

        mobileMenuContainer.innerHTML = mainMenu.innerHTML;
        mainMenu.remove();


        let btnsShowMenu = document.querySelectorAll('.menu__arrow');

        btnsShowMenu.forEach(el => {
            el.addEventListener('click', () => {
                el.closest('.header__item-dropdown').classList.toggle('active');
            })
        })
    }















    /* const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 30,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    document
        .querySelector('.slide-1')
        .addEventListener('click', function (e) {
            e.preventDefault();
            swiper.slideTo(0, 0);
        });

    document
        .querySelector('.slide-2')
        .addEventListener('click', function (e) {
            e.preventDefault();
            swiper.slideTo(1, 0);
        });

    document
        .querySelector('.slide-3')
        .addEventListener('click', function (e) {
            e.preventDefault();
            swiper.slideTo(2, 0);
        });
    document
        .querySelector('.slide-4')
        .addEventListener('click', function (e) {
            e.preventDefault();
            swiper.slideTo(3, 0);
        }); */


})