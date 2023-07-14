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

// переключение icon с плюса на минус
const collapsibleBtns = document.querySelectorAll(".collapsible-btn");

collapsibleBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const plusIcon = this.querySelector(".plus-icon");
    const minusIcon = this.querySelector(".minus-icon");

    plusIcon.classList.toggle("hidden-icon");
    minusIcon.classList.toggle("hidden-icon");
  });
});
