window.addEventListener("scroll", () => {
   let header = document.querySelector(".header-top");

   if (window.pageYOffset > 89) {
      header.classList.add("header-top--fixed");
      document.body.style.paddingTop = "89px";
   } else {
      header.classList.remove("header-top--fixed");
      document.body.style.paddingTop = "0";
   }
});