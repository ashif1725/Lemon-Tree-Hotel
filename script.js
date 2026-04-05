function bookNow(room){
  let msg = "I want to book " + room;
  let url = "https://wa.me/917509797627?text=" + encodeURIComponent(msg);
  window.open(url);
}
// Open Modal & Show Photo
function openRoomPopup(src) {
  document.getElementById("roomModal").style.display = "flex";
  document.getElementById("popupImg").src = src;
}

// Close Modal
function closeRoomPopup() {
  document.getElementById("roomModal").style.display = "none";
}
const menuToggle = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

menuToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});
