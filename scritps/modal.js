const expandWorkItem = document.querySelectorAll('.work-item__expand');
const sliderArrowLeft = document.querySelector('.slider-arrow--left');
const sliderArrowRight = document.querySelector('.slider-arrow--right');
const closeButton = document.querySelector('.modal-close-btn');
expandWorkItem.forEach((item) => item.addEventListener('click', openModal));
let sliderOffset = 0;

function openModal(e) {
  const modalItem = document.querySelectorAll('.modal-item');
  const slider = document.querySelector('.modal-slider');
  const modal = document.querySelector('.modal');
  console.log(sliderOffset);
  sliderOffset -= modalItem[e.target.id].offsetLeft;
  slider.style.transform = `translateX(${sliderOffset}px)`;
  setTimeout(() => modal.classList.add('modal--active'), 300);

  /*console.log(modalItem[0].offsetLeft);
  console.log(modalItem[1].offsetLeft);
  console.log(modalItem[2].offsetLeft);
  console.log(modalItem[3].offsetLeft);
  console.log(modalItem[4].offsetLeft);
  console.log(modalItem[5].offsetLeft); */
}

sliderArrowRight.addEventListener('click', (e) => {
  const slider = document.querySelector('.modal-slider');
  //const modalwrap = document.querySelector('.modal-wrap');
  sliderOffset -= slider.offsetWidth;
  slider.style.transform = `translateX(${sliderOffset}px)`;
  if (sliderOffset == 5 * -slider.offsetWidth) {
    e.target.parentElement.style.pointerEvents = 'none';
    e.target.style.opacity = '0.3';
  }
});

sliderArrowLeft.addEventListener('click', (e) => {
  const slider = document.querySelector('.modal-slider');
  slider.style.transform = 'translateX(0px)';
  sliderOffset = 0;
  sliderArrowRight.firstElementChild.style.opacity = '1';
  sliderArrowRight.style.pointerEvents = 'auto';
});

/* function closeModal(modal) {
  
} */

closeButton.addEventListener('click', () => {
  const modal = document.querySelector('.modal');
  modal.classList.remove('modal--active');
  sliderOffset = 0;
});
