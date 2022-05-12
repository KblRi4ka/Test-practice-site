let row = document.querySelector(".project__row");
let projectOver = document.querySelector('.project-over');
let projectOverRow = document.querySelectorAll('.project-over__item');


row.addEventListener('click', (event) => {
   if (event.target.className == "project__row") return;

   let item = event.target.closest(".project__item").id.slice(-1);

   setClass(item);  

   
});

projectOver.addEventListener("click", () => {
   projectOverRow.forEach(item => {
      item.classList.remove("project-over__item--active");
   });
   projectOver.classList.remove("project-over--active");
});

function setClass(numElem) {
   projectOverRow[numElem - 1].classList.toggle("project-over__item--active");
   projectOver.classList.toggle("project-over--active");
}
