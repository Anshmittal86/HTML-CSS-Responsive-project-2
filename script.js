const navLinks = document.querySelector("#nav-links");
const menu = document.querySelector(".menu");
const close = document.querySelector(".close");

menu.addEventListener("click", function () {
  navLinks.classList.toggle("active")
})
close.addEventListener("click", function () {
  navLinks.classList.toggle("active")
})