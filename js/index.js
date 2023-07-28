
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

    if (window.innerWidth <= 1100) {
        let headerContacts = document.querySelector('.header__info__container');
        let menuContactsContainr = document.querySelector('.dropdown__contacts');
        menuContactsContainr.innerHTML = headerContacts.innerHTML;
        headerContacts.remove();

        let mainMenu = document.querySelector('.js-mobile');
        let mobileMenuContainer = document.querySelector('.mobile__menu');

        mobileMenuContainer.innerHTML = mainMenu.innerHTML;
        mainMenu.remove();


        let btnsShowMenu = document.querySelectorAll('.menu__rectangle__container');

        btnsShowMenu.forEach(el => {
            el.addEventListener('click', function (e) {
                e.preventDefault();
                el.closest('.header__item-dropdown').classList.toggle('active');
            })
        })
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

    if (document.querySelector('.about__swiper')) {
        const aboutSwiper = new Swiper('.about__swiper', {
            lazy: true,
            lazyPreloadPrevNext: 2,
            navigation: {
                nextEl: '.about__swiper-button-next',
                prevEl: '.about__swiper-button-prev',
            },
            pagination: {
                el: '.about__swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.15,
                    spaceBetween: 30
                },
                375: {
                    slidesPerView: 1.35,
                    spaceBetween: 30
                },
                420: {
                    slidesPerView: 1.5,
                    spaceBetween: 30
                },
                520: {
                    slidesPerView: 1.8,
                    spaceBetween: 30
                },
                620: {
                    slidesPerView: 2.2,
                    spaceBetween: 30
                },
                690: {
                    slidesPerView: 2.5,
                    spaceBetween: 30
                },
                769: {
                    slidesPerView: 1.8,
                    spaceBetween: 30
                },
                860: {
                    slidesPerView: 2,
                    spaceBetween: 30
                },
                980: {
                    slidesPerView: 2.3,
                    spaceBetween: 30
                },
                1100: {
                    slidesPerView: 2.5,
                    spaceBetween: 30
                },
                1300: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }
        });
    }

    let aboutShowMore = document.querySelectorAll('.about__show');
    if (aboutShowMore.length > 0) {
        aboutShowMore.forEach(el => {
            el.addEventListener('click', () => {
                let textBtn = el.querySelector('span');

                if (textBtn.textContent.trim() === 'Показать подробности') {
                    textBtn.innerHTML = 'Скрыть'
                } else if (textBtn.textContent.trim() === 'Скрыть') {
                    textBtn.textContent = 'Показать подробности';
                }

                if (textBtn.textContent.trim() === 'Раскрыть текст') {
                    textBtn.innerHTML = 'Скрыть текст'
                } else if (textBtn.textContent.trim() === 'Скрыть текст') {
                    textBtn.textContent = 'Раскрыть текст';
                }

                el.previousElementSibling.classList.toggle('active');
                el.classList.toggle('active');
            })
        })
    }

    let inputTels = document.querySelectorAll("input[type='tel']");

    inputTels.forEach(input => {
        var inputMask = new Inputmask("+7 (999)-999-99-99", {
            showMaskOnHover: false,
            alias: 'phone'
        });
        inputMask.mask(input);
    });



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

    let contactsForms = document.querySelectorAll('.feedback__form');

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

    contactsForms.forEach(form => {
        const inputs = form.querySelectorAll('input');
        const backFormPopup = document.querySelector('#backFormPopup');


        form.addEventListener('submit', (e) => {
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

            if (ch === inputs.length) {
                fetch('send.php', {
                    method: 'POST',
                    body: new FormData(form),
                })
                    .then((res) => {
                        if (!res.ok) {
                            throw new Error(res.statusText);
                        }
                        return res.json();
                    })
                    .then(result => {
                        if (result != 'error') {
                            backFormPopup.classList.add('popup__opened');
                            requestCallPopup.classList.remove('popup__opened');
                            backFormPopup.querySelector('.popup__text').innerHTML = '<div class="popup__message"><div class="popup__color">Спасибо!</div>Мы скоро свяжемся с вами</div>';
                            inputs.forEach(el => {
                                el.value = '';
                            });
                        }
                    })
                    .catch((err) => {
                        backFormPopup.classList.add('popup__opened');
                        requestCallPopup.classList.remove('popup__opened');
                        backFormPopup.querySelector('.popup__text').innerHTML = '<div class="popup__message"><div class="popup__color">Что-то пошло не так!</div>Попробуйте снова</div>';
                    });
            }
        });
    });

    let requestCallBtn = document.querySelector('.header__call');
    let requestCallPopup = document.getElementById('requestCall');

    requestCallBtn.addEventListener('click', () => {
        requestCallPopup.classList.add('popup__opened');
    })


    let callModalCity = document.querySelector('.select__city');
    let popupSelectCity = document.getElementById('selectCity');

    callModalCity.addEventListener('click', () => {
        popupSelectCity.classList.add('popup__opened');
    })

    let serviceBtnShow = document.querySelector('.description__service__show');

    if (serviceBtnShow) {
        let serviceInvisible = document.querySelector('.description__service__invisible');

        serviceBtnShow.addEventListener('click', () => {
            (serviceBtnShow.textContent.trim() === 'Подробнее об услуге') ? serviceBtnShow.innerHTML = '<span>Скрыть</span>' : serviceBtnShow.innerHTML = '<span>Подробнее об услуге</span>';
            serviceInvisible.classList.toggle('active');
            serviceBtnShow.classList.toggle('active');
        })
    }

    let accordeons = document.querySelectorAll('.accordeon__head');

    if (accordeons.length > 0) {
        accordeons.forEach(el => {
            el.addEventListener('click', () => {
                el.parentNode.classList.toggle('open');
            })
        })
    }

    let callModalPrices = document.querySelectorAll('.price__card__button');

    if (callModalPrices.length > 0) {

        let pricePopupContent = document.getElementById('pricePopupContent');

        callModalPrices.forEach(el => {
            el.addEventListener('click', () => {
                pricePopupContent.innerHTML = el.nextElementSibling.innerHTML;
                pricePopupContent.closest('.popup').classList.add('popup__opened');
            })
        })
    }


    let equpmentCardItem = document.querySelectorAll('.equipment__item');


    if (equpmentCardItem.length > 0) {

        let equipmentModals = document.querySelectorAll('.equipment__item__contaner');

        if (window.innerWidth <= 768) {
            equipmentModals.forEach(el => {
                el.addEventListener('click', function (e) {
                    if (e.target.classList.contains('equipment__modal')) {
                        el.closest('.equipment__item__contaner').classList.remove('active');
                    }
                })
            })
        }

        let equipmentCloseBtns = document.querySelectorAll('.equipment__close');
        equipmentCloseBtns.forEach(el => {
            el.addEventListener('click', () => {
                el.closest('.equipment__item__contaner').classList.remove('active');
            })
        })

        equpmentCardItem.forEach(el => {
            el.addEventListener('click', () => {
                equpmentCardItem.forEach(el => {
                    el.closest('.equipment__item__contaner').classList.remove('active');
                })
                el.closest('.equipment__item__contaner').classList.add('active');
            })
        })
    }

})