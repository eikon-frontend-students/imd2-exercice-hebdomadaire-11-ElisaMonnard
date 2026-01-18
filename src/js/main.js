var togglebtn = document.querySelector(".togglebtn");
var number = document.querySelector(".count");
let counter = Number(number.textContent);
togglebtn.addEventListener("click", function () {
  togglebtn.classList.toggle("is-active");
  number.classList.toggle("is-active");
  setTimeout(() => {
    togglebtn.classList.remove("is-active");
    number.classList.remove("is-active");
  }, 2000);
});
