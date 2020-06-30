const expandWorkItem = document.querySelectorAll('.work-item__expand');
const sliderArrowLeft = document.querySelector('.slider-arrow--left');
const sliderArrowRight = document.querySelector('.slider-arrow--right');
const closeButton = document.querySelector('.modal-close-btn');
let sliderOffset = 0;

function openModal(e) {
  const modalItem = document.querySelectorAll('.modal-item');
  const slider = document.querySelector('.modal-slider');
  const modal = document.querySelector('.modal');
  console.log(sliderOffset);
  sliderOffset -= modalItem[e.target.id].offsetLeft;
  slider.style.transform = `translateX(${sliderOffset}px)`;
  modal.classList.add('modal--active');
}

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.classList.remove('modal--active');
  sliderOffset = 0;
}

sliderArrowRight.addEventListener('click', (e) => {
  const slider = document.querySelector('.modal-slider');
  //const modalwrap = document.querySelector('.modal-wrap');
  sliderOffset -= slider.offsetWidth;
  slider.style.transform = `translateX(${sliderOffset}px)`;
  if (sliderOffset == 5 * -slider.offsetWidth) {
    sliderArrowRight.style.pointerEvents = 'none';
    sliderArrowRight.style.opacity = '0.3';
  }
});

sliderArrowLeft.addEventListener('click', (e) => {
  const slider = document.querySelector('.modal-slider');
  if (sliderOffset == 0) return;
  slider.style.transform = 'translateX(0px)';
  sliderOffset = 0;
  sliderArrowRight.style.opacity = '1';
  sliderArrowRight.style.pointerEvents = 'auto';
});
expandWorkItem.forEach((item) => item.addEventListener('click', openModal));
closeButton.addEventListener('click', closeModal);
