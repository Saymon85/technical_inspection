const header = document.querySelector('.header');
const hamburgerBtn = document.querySelector('.menu-toggle');
const menuItems = header.querySelectorAll('.navigation-list__item');
const scrollToTop = document.querySelector('.btn-scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 15) {
    scrollToTop.style.opacity = 1;
  } else {
    scrollToTop.style.opacity = 0;
  }
});

scrollToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
});

hamburgerBtn.addEventListener('click', () => {
  header.classList.toggle('menu-active');
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    header.classList.remove('menu-active');
  });
});

const regex = /^([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])$/;
