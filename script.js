// Menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');
menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

// Carousel Function
let slideIndex = 0;
const slides = document.querySelectorAll('.carousel img');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

function showSlide(n){
  slides.forEach((slide, i)=> slide.classList.remove('active'));
  slideIndex = (n + slides.length) % slides.length;
  slides[slideIndex].classList.add('active');
}

nextBtn.addEventListener('click', ()=> showSlide(slideIndex + 1));
prevBtn.addEventListener('click', ()=> showSlide(slideIndex - 1));

// Initialize first slide
showSlide(slideIndex);
