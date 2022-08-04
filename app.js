const menuToggle = document.querySelector("#menu-toggle");
const navLinks = document.querySelector(".nav-links");

const toggleMenu = () => {
  navLinks.classList.toggle("open");
};

menuToggle.addEventListener("click", toggleMenu);
