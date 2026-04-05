
let menu = document.querySelector(".menu-btn");
let side = document.querySelector(".side-menu");
let close = document.querySelector(".close-btn");

if(menu){
  menu.onclick = () => side.classList.add("active");
}

if(close){
  close.onclick = () => side.classList.remove("active");
}

// Booking Form
let bookBtn = document.querySelector(".book-btn");
let form = document.querySelector(".booking-form");
let closeForm = document.querySelector(".close-form");

if(bookBtn){
  bookBtn.onclick = () => form.classList.add("active");
}

if(closeForm){
  closeForm.onclick = () => form.classList.remove("active");
}
