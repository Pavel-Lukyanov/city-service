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


    if (document.querySelector('.technique__swiper_1')) {
        const techniqueSwiper1 = new Swiper('.technique__swiper_1', {
            slidesPerView: 4,
            spaceBetween: 35,
            lazy: true,
            lazyPreloadPrevNext: 2,
            navigation: {
                nextEl: '.technique__swiper-button-next_1',
                prevEl: '.technique__swiper-button-prev_1',
            },
            pagination: {
                el: '.technique__swiper-pagination_1',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 10
                },
                500: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1100: {
                    slidesPerView: 4,
                    spaceBetween: 35,
                }
            }
        });
    }

    if (document.querySelector('.technique__swiper_2')) {
        const techniqueSwiper2 = new Swiper('.technique__swiper_2', {
            slidesPerView: 4,
            spaceBetween: 35,
            lazy: true,
            lazyPreloadPrevNext: 2,
            navigation: {
                nextEl: '.technique__swiper-button-next_2',
                prevEl: '.technique__swiper-button-prev_2',
            },
            pagination: {
                el: '.technique__swiper-pagination_2',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 10
                },
                500: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1100: {
                    slidesPerView: 4,
                    spaceBetween: 35,
                }
            }
        });
    }

    if (document.querySelector('.technique__swiper_3')) {
        const techniqueSwiper3 = new Swiper('.technique__swiper_3', {
            slidesPerView: 4,
            spaceBetween: 35,
            lazy: true,
            lazyPreloadPrevNext: 2,
            navigation: {
                nextEl: '.technique__swiper-button-next_3',
                prevEl: '.technique__swiper-button-prev_3',
            },
            pagination: {
                el: '.technique__swiper-pagination_3',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.5,
                    spaceBetween: 10
                },
                500: {
                    slidesPerView: 2,
                    spaceBetween: 20
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30
                },
                1100: {
                    slidesPerView: 4,
                    spaceBetween: 35,
                }
            }
        });
    }

    let tabSliders = document.querySelectorAll('.swiper__tab');
    let tabBtnsSlider = document.querySelectorAll('.equipment__btn');

    if (tabBtnsSlider.length > 0 && tabSliders.length > 0) {
        tabBtnsSlider.forEach(el => {
            el.addEventListener('click', () => {
                tabBtnsSlider.forEach(el => {
                    el.classList.remove('active');
                })
                el.classList.add('active');

                let targetSlider = el.dataset.targetslider;

                tabSliders.forEach(el => {
                    el.classList.remove('active');

                    if (el.dataset.slider === targetSlider) {
                        el.classList.add('active');
                    }
                })
            })
        })
    }


    if (document.querySelector('.swiper__reviews')) {
        const reviewsSwiper = new Swiper('.swiper__reviews', {
            lazy: true,
            lazyPreloadPrevNext: 2,
            navigation: {
                nextEl: '.reviews__swiper-button-next',
                prevEl: '.reviews__swiper-button-prev',
            },
            pagination: {
                el: '.reviews__swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 10
                },
                375: {
                    slidesPerView: 1.5,
                    spaceBetween: 10
                },
                450: {
                    slidesPerView: 1.8,
                    spaceBetween: 10
                },
                500: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },
                630: {
                    slidesPerView: 2.5,
                    spaceBetween: 10
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 23
                },
                1000: {
                    slidesPerView: 4,
                    spaceBetween: 23
                },
                1300: {
                    slidesPerView: 5,
                    spaceBetween: 23,
                }
            }
        });
    }

    if (document.querySelector('.swiper__parners')) {
        const techniqueSwiper = new Swiper('.swiper__parners', {
            lazy: true,
            lazyPreloadPrevNext: 2,
            loop: true,
            navigation: {
                nextEl: '.parners__swiper-button-next',
                prevEl: '.parners__swiper-button-prev',
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 40
                },
                370: {
                    slidesPerView: 2.5,
                    spaceBetween: 40
                },
                475: {
                    slidesPerView: 2.8,
                    spaceBetween: 40
                },
                630: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                850: {
                    slidesPerView: 4,
                    spaceBetween: 40
                },
                1100: {
                    slidesPerView: 5,
                    spaceBetween: 77,
                }
            }
        });
    }

    let aboutShowMore = document.querySelector('.about__show');
    if (aboutShowMore) {
        let aboutInvisibleContent = document.querySelector('.about__invisible');
        let textBtn = aboutShowMore.querySelector('span');

        aboutShowMore.addEventListener('click', () => {
            (textBtn.textContent.trim() === 'Показать подробности') ? textBtn.innerHTML = 'Скрыть' : textBtn.textContent = 'Показать подробности';
            aboutInvisibleContent.classList.toggle('active');
            aboutShowMore.classList.toggle('active');
        })
    }

    let inputTel = document.querySelector("input[type='tel']");
    var im = new Inputmask("+7 (999)-999-99-99",
        {
            showMaskOnHover: false,
            alias: 'phone'
        }
    );
    if (inputTel) {
        im.mask(inputTel);
    }

    let inputs = document.querySelectorAll('.form__input');

    if (inputs.length > 0) {
        inputs.forEach(el => {
            el.addEventListener('focus', () => {
                el.previousElementSibling.classList.add('active');
            })
        })

        inputs.forEach(el => {
            el.addEventListener('blur', () => {
                if (el.value == '') {
                    el.previousElementSibling.classList.remove('active');
                }
            })
        })

        inputs.forEach(el => {
            el.addEventListener('input', () => {
                el.classList.remove('error')
                el.nextElementSibling.classList.remove('active');
                el.nextElementSibling.textContent = '';
            })
        })
    }

    let backFormPopup = document.getElementById('backForm');

    let contactsForm = document.getElementById('form');

    let closePopup = document.querySelectorAll('.popup__close');

    closePopup.forEach(el => {
        el.addEventListener('click', () => {
            el.closest('.popup').classList.remove('popup__opened');
        })
    })

    let popups = document.querySelectorAll('.popup ');

    popups.forEach(el => {
        el.addEventListener('click', function (e) {
            if (e.target == el) {
                el.classList.remove('popup__opened');
            }
        })
    })

    contactsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let ch = 0;
        inputs.forEach(el => {
            switch (el.type) {
                case 'text':
                    if (el.value.trim().length < 2) {
                        el.classList.add('error')
                        el.nextElementSibling.classList.add('active');
                        el.nextElementSibling.textContent = 'Поле обязательно для заполнения!';
                    } else {
                        ch++;
                    }
                    break;
                case 'tel':
                    if (el.value.includes('_') || el.value == '') {
                        el.classList.add('error')
                        el.nextElementSibling.classList.add('active');
                        el.nextElementSibling.textContent = 'Телефон обязателен для заполнения!';
                    } else {
                        ch++;
                    }
                    break;
            }
        })

        if (ch === inputs.length - 1) {
            sendForm();
        }
    })

    function sendForm() {
        fetch('send.php', {
            method: 'POST',
            body: new FormData(contactsForm),
        }).then((res) => res.json()).then(result => {
            if (result != 'error') {
                backFormPopup.classList.add('popup__opened');
                backFormPopup.querySelector('.popup__text').innerHTML = '<div class="popup__message">Ваша заявка принята!<br><br>Мы свяжемся с вами в ближайшее время.</div>';
                inputs.forEach(el => {
                    el.value = '';
                });
            }
        }).catch((err) => {
            backFormPopup.classList.add('popup__opened')
            backFormPopup.querySelector('.popup__text').innerHTML = '<div class="popup__message">Что-то пошло не так!<br><br>Попробуйте снова.</div>';
        });
    }

    let callModalCity = document.querySelector('.select__city');
    let popupSelectCity = document.getElementById('selectCity');

    callModalCity.addEventListener('click', () => {
        popupSelectCity.classList.add('popup__opened');
    })

})