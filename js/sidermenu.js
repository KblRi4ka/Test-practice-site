const menu = document.querySelector(".header-top__menu");
const slider = document.querySelector(".header-top-slidemenu");

menu.addEventListener("click", () => {
   slider.classList.toggle("header-top-slidemenu--active");
   menu.classList.toggle("header-top__menu--active");
});