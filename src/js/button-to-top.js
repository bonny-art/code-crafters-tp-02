const toTopButton = document.querySelector('.to-top-btn-js');

window.addEventListener('scroll', () => {
  if (window.scrollY > window.innerHeight / 2) {
    toTopButton.classList.add('active');
  } else {
    toTopButton.classList.remove('active');
  }
});

toTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
