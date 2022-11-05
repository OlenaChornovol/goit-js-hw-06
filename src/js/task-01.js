const categoriesItemRef = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesItemRef.length}`);

console.log("");

categoriesItemRef.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  const listRef = item.lastElementChild;
  console.log(`Elements: ${listRef.children.length}`);
  console.log("");
});
