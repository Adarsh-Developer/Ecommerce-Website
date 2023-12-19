/* Code to create a working Slidebar */
const slideBtn = document.querySelector(".slide__btn");
const closeBtn = document.querySelector(".close__btn");
const slideBar = document.querySelector(".navbar");

slideBtn.addEventListener("click", () => {
  slideBar.style.right = 0;
  closeBtn.addEventListener("click", () => {
    slideBar.style.right = "-250px";
  });
});

/* Code to go the product details page */
let proProduct = document.querySelectorAll(".pro");
proProduct.forEach(function (e) {
  e.addEventListener("click", function () {
    window.location.href = "sproduct.html";
  });
});