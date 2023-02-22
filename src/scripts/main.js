const burger = document.querySelector('#burger');
const mobileNav = document.querySelector('#mobile-nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('hero-section__burger-active');
  mobileNav.classList.toggle('hero-section__navigation-mobile-active');
});

const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
