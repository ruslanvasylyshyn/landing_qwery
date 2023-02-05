const burger = document.querySelector('#burger');
const mobileNav = document.querySelector('#mobile-nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('hero-section__burger-active');
  mobileNav.classList.toggle('hero-section__navigation-mobile-active');
});
