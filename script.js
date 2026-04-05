function openForm(roomName){
  document.getElementById("formBox").classList.add("active");
  document.getElementById("room").value = roomName;
}

function closeForm(){
  document.getElementById("formBox").classList.remove("active");
}

function sendWhatsApp(){
  let name = document.getElementById("name").value;
  let mobile = document.getElementById("mobile").value;
  let email = document.getElementById("email").value;
  let date = document.getElementById("date").value;
  let guests = document.getElementById("guests").value;
  let room = document.getElementById("room").value;

  let msg = `Hotel Booking:
Name: ${name}
Mobile: ${mobile}
Email: ${email}
Date: ${date}
Guests: ${guests}
Room: ${room}`;

  let url = "https://wa.me/91XXXXXXXXXX?text=" + encodeURIComponent(msg);
  window.open(url, "_blank");
}
