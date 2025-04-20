const menuBtn = document.querySelector("#menu-btn");
const navbar = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
