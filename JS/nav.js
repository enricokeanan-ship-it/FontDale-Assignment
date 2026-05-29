const hamburger = document.getElementById("hamburgerButton");
const mainNav = document.querySelector(".main-navigation");

hamburger.addEventListener("click", function () {
  mainNav.classList.toggle("open");
});
