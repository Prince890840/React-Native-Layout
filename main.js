const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-navbar-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-navbar-container");

menuIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("active");
});