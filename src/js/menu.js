// Menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.header__menu-button');
    const closeButton = document.querySelector('.mobile-menu-close');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu-nav-link');

    function toggleMenu() {
        mobileMenu.classList.toggle('is-active');
        document.body.style.overflow = mobileMenu.classList.contains('is-active') ? 'hidden' : '';
    }

    function closeMenu() {
        mobileMenu.classList.remove('is-active');
        document.body.style.overflow = '';
    }

    // Toggle menu on burger button click
    menuButton.addEventListener('click', toggleMenu);

    // Close menu on close button click
    closeButton.addEventListener('click', closeMenu);

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
        if (e.target === mobileMenu) {
            closeMenu();
        }
    });

    // Close menu when clicking on a link
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('is-active')) {
            closeMenu();
        }
    });
});