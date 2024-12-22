import Swiper from 'swiper/bundle';

function initializeSwiper() {
  const swiper = new Swiper('.reviews-swiper-container', {
    grabCursor: true,
    navigation: {
      nextEl: '.reviews-button-next',
      prevEl: '.reviews-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    a11y: {
      enabled: true,
      containerMessage: 'Student reviews carousel',
      itemMessage: 'Review item',
    },
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

  return swiper;
}

initializeSwiper();
