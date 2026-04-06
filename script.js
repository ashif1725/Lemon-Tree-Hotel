// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Close mobile menu on link click
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    if(navUl.classList.contains('active')) navUl.classList.remove('active');
  });
});

// Carousel for 13 rooms
let slideIndex = {};

function showSlide(id, n) {
  const slides = document.querySelectorAll(`#carousel${id} img`);
  if(!slides.length) return;
  if(!slideIndex[id]) slideIndex[id] = 0;
  slideIndex[id] = (n + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.style.display = (i === slideIndex[id] ? 'block' : 'none');
  });
}

function nextSlide(id) { showSlide(id, slideIndex[id]+1); }
function prevSlide(id) { showSlide(id, slideIndex[id]-1); }

// Initialize all carousels
document.querySelectorAll('.carousel').forEach(carousel => {
  const id = carousel.id.replace('carousel','');
  showSlide(id,0);
});
