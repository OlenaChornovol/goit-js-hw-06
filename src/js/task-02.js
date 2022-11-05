const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsRef = document.querySelector("#ingredients");

for (const title of ingredients) {
  const newTagRef = document.createElement("li");
  newTagRef.textContent = title;
  newTagRef.classList.add("item");
  ingredientsRef.append(newTagRef);
}
