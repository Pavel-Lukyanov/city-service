const burgerButton = document.querySelector(".burger-menu__button");
const burgerContent = document.querySelector(".burger-menu__wrapper");
const burgerOpen = document.querySelector(".burger-open");
const burgerClose = document.querySelector(".burger-close");
const body = document.querySelector("body");

burgerButton.addEventListener("click", () => {
  burgerContent.classList.toggle("burger-menu__content--active");
  burgerOpen.classList.toggle("burger-open--hidden");
  burgerClose.classList.toggle("burger-close--hidden");
  body.classList.toggle("scroll-lock");
});

try {
  var myMap;
  ymaps.ready(init);

  function init() {
    myMap = new ymaps.Map("map", {
      center: [61.253078, 73.422183],
      zoom: 17,
    });
  }
} catch (error) {}

try {
  var myMap1;
  ymaps.ready(init);

  function init() {
    myMap1 = new ymaps.Map("map1", {
      center: [60.940092, 76.546209],
      zoom: 17,
    });
  }
} catch (error) {}

try {
  var myMap2;
  ymaps.ready(init);

  function init() {
    myMap2 = new ymaps.Map("map2", {
      center: [60.940092, 76.546209],
      zoom: 17,
    });
  }
} catch (error) {}

function toggleMenu() {
  const menuWrapper = document.getElementById("menuWrapper");
  menuWrapper.classList.toggle("show");
}

const collapsibleBtns = document.querySelectorAll(".collapsible-btn");

collapsibleBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const plusIcon = this.querySelector(".plus-icon");
    const minusIcon = this.querySelector(".minus-icon");

    plusIcon.classList.toggle("hidden-icon");
    minusIcon.classList.toggle("hidden-icon");
  });
});

const btnSelectMobile = document.querySelectorAll(
  ".btn-select-description-mobile"
);

btnSelectMobile.forEach((arrow) => {
  arrow.addEventListener("click", function () {
    const arrowDown = this.querySelector(".arrow-about-company-mobile-down");
    const arrowUp = this.querySelector(".arrow-about-company-mobile-up");

    arrowDown.classList.toggle("hidden-arrow-mobile-description");
    arrowUp.classList.toggle("hidden-arrow-mobile-description");
  });
});

const arrowHeader = document.querySelectorAll(".arrow-header");
const arrowHeaderMobile = document.querySelectorAll(".arrow-header-mobile");

arrowHeader.forEach((arrow) => {
  arrow.addEventListener("click", function () {
    const arrowDown = this.querySelector(".arrow-header-down");
    const arrowUp = this.querySelector(".arrow-header-up");

    arrowDown.classList.toggle("arrow-hidden-header");
    arrowUp.classList.toggle("arrow-hidden-header");
  });
});

arrowHeaderMobile.forEach((arrow) => {
  arrow.addEventListener("click", function () {
    const arrowDown = this.querySelector(".arrow-header-down");
    const arrowUp = this.querySelector(".arrow-header-up");

    arrowDown.classList.toggle("arrow-hidden-header");
    arrowUp.classList.toggle("arrow-hidden-header");
  });
});

// Получаем ссылки на элементы
const modal = document.getElementById("myModal");
const priceButtons = document.querySelectorAll(".item-cart-price-btn");
const spanPriceBtn = document.querySelectorAll(".span-price-btn");
const closeBtn = document.getElementsByClassName("close")[0];

function openModal() {
  modal.style.display = "block";
  document.body.classList.add("overflow-hidden");
}

// Функция для закрытия модального окна
function closeModal() {
  modal.style.display = "none";
  document.body.classList.remove("overflow-hidden");
}

try {
  // Обработчики событий для кнопок
  closeBtn.addEventListener("click", closeModal);
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      closeModal();
    }
  });

  // Добавляем обработчик событий для каждой кнопки
  priceButtons.forEach(function (button) {
    button.addEventListener("click", openModal);
  });

  spanPriceBtn.forEach(function (span) {
    span.addEventListener("click", openModal);
  });
} catch (error) {
  console.log(error);
}

/* swiper price list clients */

try {
  const swiperPriceListClients = new Swiper(
    ".swiper-liceses-price-list-corporate",
    {
      // Optional parameters
      direction: "horizontal",
      loop: true,
      /* freeMode: true, */
      centeredSlides: true,
      loopAdditionalSlides: 10,

      breakpoints: {
        // when window width is >= 320px
        280: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        320: {
          slidesPerView: 1.5,
          spaceBetween: 20,
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1000: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
      // If we need pagination
      pagination: {
        el: ".swiper-pagination ",
        clickable: true,
      },
      slidesPerView: 5,
      spaceBetween: 30,

      // Navigation arrows
      navigation: {
        nextEl: ".swiper__button__container-next",
        prevEl: ".swiper__button__container-prev",
      },
    }
  );
} catch (error) {}

//

try {
  const swiperInventory = new Swiper(".swiper-inventory", {
    direction: "horizontal",

    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 1.5,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1060: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper__button__inventory-next",
      prevEl: ".swiper__button__inventory-prev",
    },
  });
} catch (error) {}

//
try {
  const swiperServices = new Swiper(".swiper-services", {
    direction: "horizontal",
    // loop: true,

    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
    },

    // pagination: {
    //   type: "fraction",
    // },

    navigation: {
      nextEl: ".swiper__button__inventory-next",
      prevEl: ".swiper__button__inventory-prev",
    },
  });
} catch (error) {}

try {
  document.querySelector(".slider-1").addEventListener("click", function (e) {
    e.preventDefault();
    swiperServices.slideTo(0, 1);
  });

  document.querySelector(".slider-2").addEventListener("click", function (e) {
    e.preventDefault();
    swiperServices.slideTo(1, 2);
  });

  document.querySelector(".slider-3").addEventListener("click", function (e) {
    e.preventDefault();
    swiperServices.slideTo(2, 3);
  });

  document.querySelector(".slider-4").addEventListener("click", function (e) {
    e.preventDefault();
    swiperServices.slideTo(3, 4);
  });
} catch (error) {}
try {
  const swiperCompany = new Swiper(".swiper-company", {
    // Optional parameters
    direction: "horizontal",

    breakpoints: {
      280: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      320: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2.5,
        spaceBetween: 30,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 10,
      },

      700: {
        slidesPerView: 3.5,
        spaceBetween: 10,
      },

      866: {
        slidesPerView: 4,
        spaceBetween: 10,
      },

      1060: {
        slidesPerView: 5,
        spaceBetween: 10,
      },
    },

    navigation: {
      nextEl: ".swiper__button__inventory-next",
      prevEl: ".swiper__button__inventory-prev",
    },
  });
} catch (error) {}

try {
  const swiperAboutCompany = new Swiper(".swiper-about-company", {
    direction: "horizontal",

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      350: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },

      552: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      1232: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper__button__inventory-next",
      prevEl: ".swiper__button__inventory-prev",
    },
  });
} catch (error) {}
