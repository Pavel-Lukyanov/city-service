document.addEventListener('DOMContentLoaded', () => {

    let burgerMenu = document.getElementById('burger');
    if (burgerMenu) {
        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('opened');
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