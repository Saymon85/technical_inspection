const expandWorkItem = document.querySelectorAll('.work-item__expand');
const sliderArrowLeft = document.querySelector('.slider-arrow--left');
const sliderArrowRight = document.querySelector('.slider-arrow--right');
const closeButton = document.querySelector('.modal-close-btn');
let sliderOffset = 0;

function openModal(e) {
  const modalItem = document.querySelectorAll('.modal-item');
  const slider = document.querySelector('.modal-slider');

  sliderOffset -= modalItem[e.target.id].offsetLeft;
  slider.style.transform = `translateX(${sliderOffset}px)`;
  gsap.to('.modal', {
    transform: 'scale(1,1)',
    duration: 0.8,
    ease: 'power2.inOut',
  });
}

function closeModal() {
  gsap.to('.modal', {
    transform: 'scale(0,0)',
    duration: 0.4,
    ease: 'power4',
  });
  sliderOffset = 0;
  sliderArrowLeft.classList.remove('slider-arrow--disabled');
  sliderArrowRight.classList.remove('slider-arrow--disabled');
}

sliderArrowRight.addEventListener('click', (e) => {
  const slider = document.querySelector('.modal-slider');
  sliderOffset -= slider.offsetWidth;

  if (sliderOffset <= 5 * -slider.offsetWidth) {
    sliderArrowRight.classList.add('slider-arrow--disabled');
    gsap.to('.modal-slider', {
      transform: `translateX(${sliderOffset}px)`,
      duration: 1,
      delay: 0.1,
      ease: 'back',
    });
  } else {
    gsap.to('.modal-slider', {
      transform: `translateX(${sliderOffset}px)`,
      duration: 0.8,
      ease: 'sine',
    });
  }
  sliderArrowLeft.classList.remove('slider-arrow--disabled');
});

sliderArrowLeft.addEventListener('click', (e) => {
  const slider = document.querySelector('.modal-slider');
  sliderOffset += slider.offsetWidth;
  if (sliderOffset > -slider.offsetWidth) {
    gsap.to('.modal-slider', {
      transform: `translateX(0px)`,
      duration: 1,
      delay: 0.1,
      ease: 'back',
    });
    sliderArrowLeft.classList.add('slider-arrow--disabled');
    sliderOffset = 0;
  } else {
    gsap.to('.modal-slider', {
      transform: `translateX(${sliderOffset}px)`,
      duration: 0.8,
      ease: 'sine',
    });
  }
  sliderArrowRight.classList.remove('slider-arrow--disabled');
});

expandWorkItem.forEach((item) => item.addEventListener('click', openModal));
closeButton.addEventListener('click', closeModal);
