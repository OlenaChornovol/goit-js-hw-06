const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("ul#ingredients");
if (ingredientsRef) {
  const titleIngredientsRef = ingredients.map((ingredient) => {
    //Напиши скрипт, который для каждого элемента массива ingredients:
    const newTagRef = document.createElement("li"); //Создаст отдельный элемент <li>
    newTagRef.textContent = title; //Добавит название ингредиента как его текстовое содержимое.
    newTagRef.classList.add("item"); // Добавит элементу класс item.
    return newTagRef;
  });
  listElement.append(...titleIngredientsRef); // После чего вставит все <li> за одну операцию в список ul#ingredients.
}
