const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit); // Обработка отправки формы form.login-form должна быть по событию submit.

function handleSubmit(event) {
  event.preventDefault(); // При отправке формы страница не должна перезагружаться.
  const {
    elements: { email, password },
  } = event.currentTarget; // Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!"); // Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
  }

  console.log(`Login: ${email.value}, Password: ${password.value}`); // Выведи обьект с введенными данными в консоль
  event.currentTarget.reset(); //  очисти значения полей формы методом reset.
}
