const categoriesEl = document.querySelectorAll(".item");
console.log("Number of categories: ", categoriesEl.length);

const categoriesItems = categoriesEl.forEach((category) => {
  console.log("Category: ", category.firstElementChild.textContent);
  console.log("Elements: ", category.querySelectorAll("li").length);
});
