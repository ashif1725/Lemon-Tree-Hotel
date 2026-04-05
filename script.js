function bookNow(room){
  let msg = "I want to book " + room;
  let url = "https://wa.me/917509797627?text=" + encodeURIComponent(msg);
  window.open(url);
}
