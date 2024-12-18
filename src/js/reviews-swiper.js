import Swiper from 'swiper/bundle';

const swiper = new Swiper('.reviews-swiper-container', {
  grabCursor: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 32,
      loop: true,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 32,
      loop: false,
    },
  },
});
