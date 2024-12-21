// Select the elements from the DOM
const burgerButton = document.querySelector('.burger-button');
const mobileMenu = document.querySelector('.mobile-menu');
const backdrop = document.querySelector('.backdrop');
const closeButton = document.querySelector('.mobile-menu-close');

burgerButton.addEventListener("click", () => {
  backdrop.classList.add("is-active");
  mobileMenu.classList.add("is-active");
});

closeButton.addEventListener("click", () => {
  backdrop.classList.remove("is-active");
  mobileMenu.classList.remove("is-active");
});

// Optional: Close backdrop when clicking outside
document.addEventListener("click", (e) => {
  if (!backdrop.contains(e.target) && !burgerBtn.contains(e.target)) {
    backdrop.classList.remove("is-active");
    mobileMenu.classList.remove("is-active");
  }
});