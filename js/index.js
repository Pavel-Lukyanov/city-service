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


    if (document.querySelector('.tab__slide__container')) {
        const cleanSwiper = new Swiper('.tab__slide__container', {
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 30,
            navigation: {
                nextEl: '.tab__swiper-button-next',
                prevEl: '.tab__swiper-button-prev',
            },
        });


        let slideBtns = document.querySelectorAll('.slide__tab ');

        cleanSwiper.on('slideChange', function () {
            deleteActiveSlide();
            slideBtns[cleanSwiper.activeIndex].classList.add('active');
        });

        slideBtns.forEach(el => {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                deleteActiveSlide();
                let numberSlide = el.dataset.slide;
                cleanSwiper.slideTo(numberSlide, 300);
                el.classList.add('active');
            })
        })

        function deleteActiveSlide() {
            slideBtns.forEach(el => {
                el.classList.remove('active');
            });
        }
    }


})