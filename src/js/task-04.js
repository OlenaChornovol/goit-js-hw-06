//Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
//Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
//Обновляй интерфейс новым значением переменной counterValue.
const buttonDecrement = document.querySelector(
  'button[data-action="decrement"]'
);

const buttonIncrement = document.querySelector(
  'button[data-action="increment"]'
);

const value = document.querySelector("#value");
const counter = document.querySelector("#counter");

let counterValue = 0;

buttonDecrement.addEventListener("click", decrement);

buttonIncrement.addEventListener("click", increment);

function decrement() {
  counterValue -= 1;

  value.textContent = counterValue;
}
function increment() {
  counterValue += 1;

  value.textContent = counterValue;
}
