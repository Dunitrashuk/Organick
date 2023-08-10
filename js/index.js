//SELECTORS
const menuIcon = document.querySelector(".header__icon");
const header = document.querySelector("header");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu__item");
const body = document.querySelector("body");

//   ./assets/sprite-a4e1a03c.svg#Burger

//FUNCTIONS
function toggleMenu() {
  let isClosed = menuIcon.classList[1];
  let icon = menuIcon.children[0];

  if (isClosed) {
    icon.setAttribute("href", "./assets/sprite-a4e1a03c.svg#Burger");
    body.style.overflow = "auto";
  } else {
    icon.setAttribute("href", "./assets/sprite-a4e1a03c.svg#Cross");
    menu.style.height = `calc(100vh - ${header.offsetHeight}px)`;
    body.style.overflow = "hidden";
  }

  menuIcon.classList.toggle("open");
  menu.classList.toggle("menu--open");
}

function navigateToSection() {
  toggleMenu();
  body.style.overflow = "auto";
}

//EVENTS
menuIcon.addEventListener("click", toggleMenu);
menuLinks.forEach((link) => {
  link.addEventListener("click", navigateToSection);
});
