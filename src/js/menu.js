// Select the elements from the DOM
const burgerButton = document.querySelector('.burger-button');
const mobileMenu = document.querySelector('.mobile-menu');
const backdrop = document.querySelector('.backdrope');
const closeButton = document.querySelector('.mobile-menu-close');

// Function to open the mobile menu
function openMobileMenu() {
  mobileMenu.style.transform = 'translateX(0)';
  backdrop.style.display = 'block';
}

// Function to close the mobile menu
function closeMobileMenu() {
  mobileMenu.style.transform = 'translateX(100%)';
  backdrop.style.display = 'none';
}

// Add event listeners
burgerButton.addEventListener('click', openMobileMenu);
closeButton.addEventListener('click', closeMobileMenu);
backdrop.addEventListener('click', closeMobileMenu);

// Initial state
mobileMenu.style.transform = 'translateX(100%)';
backdrop.style.display = 'none';
