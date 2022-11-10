import * as flsFunctions from "./modules/function.js";
import bootstrap from 'bootstrap'
import Swiper, { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper';
flsFunctions.isWebp();
// const swiper = new Swiper();
var swiper = new Swiper(".mySwiper", {
  modules: [Navigation, Pagination, EffectCoverflow, Autoplay],
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 110,
    depth: 500,
    modifier: 1,
    slideShadows: false,
  },
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    0: {
      updateOnWindowResize: true,
      centeredSlides: false,
      slidesPerView: 1,
      speed: 1000,
      spaceBetween: 20,
    

    },

    768: {
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        stretch: 110,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      speed: 1000,
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      loop: true,
      autoplay: {
        delay: 5000,
      },
      coverflowEffect: {
        rotate: 0,
        stretch: 110,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
    }
  }
});