const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//Не зрозуміла, як тут використати шаблонні рядки

const galleryImageRef = document.querySelector(".gallery");

// const makeGalleryRef = images.map(
//   (image) => `<li><img src = ${image.url} alt = ${image.alt} /> /></li>`
// );
// galleryImageRef.insertAdjacentHTML("afterbegin", vmakeGalleryRef);

const makeGallery = (options) => {
  return options.map((option) => {
    const newList = document.createElement("li");
    newList.classList.add(".list-style");
    const newImage = document.createElement("img");
    newImage.classList.add(".image-style");
    newImage.src = option.url;
    newImage.textContent = option.alt;
    newList.appendChild(newImage);
    return newList;
    return newImage;
  });
};
const elements = makeGallery(images);
galleryImageRef.insertAdjacentHTML("beforeend", makeGallery);

galleryImageRef.append(...elements);
console.log(elements);
