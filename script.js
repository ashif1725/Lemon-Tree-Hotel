// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Carousel Functionality for 13 Rooms
let slideIndex = {};

function showSlide(id, n) {
  const slides = document.querySelectorAll(`#carousel${id} img`);
  if(!slideIndex[id]) slideIndex[id] = 0;
  slideIndex[id] = (n + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.style.display = (i === slideIndex[id] ? 'block' : 'none');
  });
}

function nextSlide(id) {
  showSlide(id, slideIndex[id] + 1);
}

function prevSlide(id) {
  showSlide(id, slideIndex[id] - 1);
}

// Initialize all carousels
for(let i = 1; i <= 13; i++) {
  showSlide(i, 0);
}
