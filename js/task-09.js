const refs = {
  body: document.querySelector("body"),
  button: document.querySelector(".change-color"),
  span: document.querySelector(".color"),
};

const changeBodyColor = () => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  refs.body.style.backgroundColor = getRandomHexColor(); //изменяет цвета фона элемента <body> через инлайн стиль
  refs.span.textContent = refs.body.style.backgroundColor; // выводит значение цвета в span.color.
};
refs.button.addEventListener("click", changeBodyColor); //изменяет цвета фона элемента  при клике на кнопку
