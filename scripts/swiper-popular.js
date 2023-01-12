import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper-popular', {
  slidesPerView: 1,
  spaceBetween: 20,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper_popular_next',
    prevEl: '.swiper_popular_prev',
  },
  breakpoints: {
    993: {
      slidesPerView: 3,
    },
    769: {
      slidesPerView: 2,
    }
  },
});