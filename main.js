const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-navbar-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-navbar-container");

const selectWrapper = document.querySelector('.select-wrapper');
const select = selectWrapper.querySelector('select');
const selectSpan = selectWrapper.querySelector('span');

menuIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("active");
});

selectWrapper.addEventListener('focusin', () => {
  select.style.opacity = '1';
  selectSpan.textContent = 'Select an option';
});

selectWrapper.addEventListener('focusout', () => {
  select.style.opacity = '0';
  selectSpan.textContent = select.value;
});
