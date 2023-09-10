let header = document.querySelector(".header");
let burgerBtn = header.querySelector(".burger-btn");
let burgerMenu = header.querySelector(".burger-menu");
let overlay = document.querySelector(".overlay");
let burgerLinks = burgerMenu.querySelectorAll(".menu__link");

burgerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  toggleMenu();
});

burgerLinks.forEach((link) => {
  link.addEventListener("click", () => toggleMenu());
});

overlay.addEventListener("click", () => toggleMenu());

function toggleMenu() {
  header.classList.toggle("header_fixed");
  burgerBtn.classList.toggle("burger-btn_active");

  burgerMenu.classList.toggle("burger-menu_active");

  if (burgerMenu.classList.contains("burger-menu_active")) {
    overlay.classList.add("overlay_active");
  } else {
    overlay.classList.remove("overlay_active");
  }
}