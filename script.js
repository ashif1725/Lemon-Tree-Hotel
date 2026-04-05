let menu = document.querySelector(".menu-btn");
let side = document.querySelector(".side-menu");
let close = document.querySelector(".close-btn");

menu.onclick = () => side.classList.add("active");
close.onclick = () => side.classList.remove("active");

// Booking
let bookBtn = document.querySelector(".book-btn");
let form = document.querySelector(".booking-form");
let closeForm = document.querySelector(".close-form");

bookBtn.onclick = () => form.classList.add("active");
closeForm.onclick = () => form.classList.remove("active");
