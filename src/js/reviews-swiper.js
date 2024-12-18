import Swiper from 'swiper/bundle';

const swiper = new Swiper('.reviews-swiper-container', {
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
  loop: true,
});