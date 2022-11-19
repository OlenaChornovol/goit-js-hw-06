const categoriesItemRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItemRef.length}`);

console.log("");

categoriesItemRef.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  const listRef = item.lastElementChild;
  console.log(`Elements: ${listRef.children.length}`);
  console.log("");
});

//Напиши скрипт который:
// Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
//Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
