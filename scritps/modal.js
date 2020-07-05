const expandWorkItem = document.querySelectorAll('.work-item__expand');
const sliderArrowLeft = document.querySelector('.slider-arrow--left');
const sliderArrowRight = document.querySelector('.slider-arrow--right');
const closeButton = document.querySelector('.modal-close-btn');
let sliderOffset = 0;

function openModal(e) {
  const slider = document.querySelector('.modal-slider');
  sliderOffset = -e.target.id * slider.offsetWidth;

  if (document.body.offsetWidth < 800) return; // don't open modal for display width lesser than 800px
  if (sliderOffset === 0)
    sliderArrowLeft.classList.add('slider-arrow--disabled');
  if (sliderOffset === -5 * slider.offsetWidth)
    sliderArrowRight.classList.add('slider-arrow--disabled');
  document.body.addEventListener('keyup', attachKeyboardControls); // Add keyboard controls for slider

  gsap.to('.modal-slider', {
    transform: `translateX(${sliderOffset}px)`,
    duration: 0.1,
  });
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
  document.body.removeEventListener('keyup', attachKeyboardControls);
}

function moveSlideRight() {
  const slider = document.querySelector('.modal-slider');
  sliderOffset -= slider.offsetWidth;

  if (sliderOffset <= 5 * -slider.offsetWidth) {
    gsap.to('.modal-slider', {
      transform: `translateX(${sliderOffset}px)`,
      duration: 1.2,
      delay: 0.1,
      ease: 'back',
    });
    sliderArrowRight.classList.add('slider-arrow--disabled');
  } else {
    gsap.to('.modal-slider', {
      transform: `translateX(${sliderOffset}px)`,
      duration: 0.8,
      ease: 'sine',
    });
  }
  sliderArrowLeft.classList.remove('slider-arrow--disabled');
}

function moveSlideLeft() {
  const slider = document.querySelector('.modal-slider');
  sliderOffset += slider.offsetWidth;
  if (sliderOffset > -slider.offsetWidth) {
    gsap.to('.modal-slider', {
      transform: `translateX(0px)`,
      duration: 1.2,
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
}

function attachKeyboardControls(e) {
  if (e.code === 'ArrowRight') moveSlideRight();
  if (e.code === 'ArrowLeft') moveSlideLeft();
  if (e.code === 'Escape') closeModal();
}

expandWorkItem.forEach((item) => item.addEventListener('click', openModal));
closeButton.addEventListener('click', closeModal);
sliderArrowRight.addEventListener('click', moveSlideRight);
sliderArrowLeft.addEventListener('click', moveSlideLeft);
