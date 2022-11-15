// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// не розумію як то зробити

const refs = {
  input: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

const handleChangeFontSize = (event) => {
  refs.input = Number(event.target.value);
  refs.span.style.fontSize = `${refs.input++}px`;

  refs.input.addEventListener("input", handleChangeFontSize);
};
