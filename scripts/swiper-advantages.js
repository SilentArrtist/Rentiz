import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'

const swiper = new Swiper('.swiper-advantages', {
  autoHeight: true,
  // Optional parameters

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.swiper_advantages_next',
    prevEl: '.swiper_advantages_prev',
  },
});