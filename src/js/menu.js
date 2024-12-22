const burgerButton = document.querySelector('.js-burger-button');
const mobileMenu = document.querySelector('.mobile-menu-js');
const backdrop = document.querySelector('.backdrop-js');
const closeButton = document.querySelector('.mobile-menu-close-js');

const closeMenu = () => {
  mobileMenu.style.transform = 'translateX(100%)';

  setTimeout(() => {
    backdrop.style.opacity = 0;
    backdrop.style.visibility = 'hidden';
  }, 300);
};

burgerButton.addEventListener('click', () => {
  backdrop.style.visibility = 'visible';
  backdrop.style.opacity = 1;
  mobileMenu.style.transform = 'translateX(0%)';
});

closeButton.addEventListener('click', closeMenu);

backdrop.addEventListener('click', event => {
  if (event.target === backdrop) {
    closeMenu();
  }
});

document.addEventListener('keydown', event => {
  if (
    event.key === 'Escape' &&
    mobileMenu.style.transform === 'translateX(0%)'
  ) {
    closeMenu();
  }
});
