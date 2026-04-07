<script>

// 📦 ROOMS DATA (13 Rooms)
const rooms = [
  {name:"Deluxe Room", price:2199, old:6280, img:"images/room1.jpg"},
  {name:"Deluxe Plus", price:2500, old:5000, img:"images/room2.jpg"},
  {name:"Family Room", price:3500, old:7000, img:"images/room3.jpg"},
  {name:"Premium Room", price:12400, old:15500, img:"images/room4.jpg"},
  {name:"Suite Room", price:25000, old:30000, img:"images/room5.jpg"},
  {name:"Executive Room", price:18500, old:20000, img:"images/room6.jpg"},
  {name:"King Room", price:20000, old:25000, img:"images/room7.jpg"},
  {name:"Queen Room", price:19000, old:23000, img:"images/room8.jpg"},
  {name:"Twin Room", price:13000, old:15000, img:"images/room9.jpg"},
  {name:"Couple Room", price:14000, old:18000, img:"images/room10.jpg"},
  {name:"Presidential", price:40000, old:50000, img:"images/room11.jpg"},
  {name:"Villa", price:35000, old:45000, img:"images/room12.jpg"},
  {name:"Luxury AC", price:1299, old:3711, img:"images/room13.jpg"}
];

// 🔢 RANDOM FUNCTION
function random(min,max){
  return Math.floor(Math.random()*(max-min)+min);
}

// ❤️ FAVOURITE TOGGLE
function toggleFav(event, el){
  event.stopPropagation(); // card click na ho
  el.classList.toggle("active");
}

// 📲 WHATSAPP BOOKING FUNCTION (ROOM CLICK)
function openRoom(room){
  let number = "917509797627"; // +91 number
  let message = "Hello, I want to book " + room;

  let url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

// 📲 MENU WHATSAPP BUTTON
function openWhatsApp(){
  let number = "917509797627";
  let message = "Hello, I want to book a room";

  let url = "https://wa.me/" + number + "?text=" + encodeURIComponent(message);
  window.open(url, "_blank");
}

// 🏨 GENERATE ALL ROOMS
const container = document.getElementById("roomContainer");

rooms.forEach(room=>{
  let rating = (Math.random()*1+4).toFixed(1); // 4–5
  let customers = random(500,3500);

  let stars = "⭐".repeat(Math.floor(rating));

  let card = `
  <div class="card" onclick="openRoom('${room.name}')">
    <div style="position:relative;">
      <img src="${room.img}">
      <div class="badge">${stars} (${rating}) • ${customers} customers</div>

      <div class="heart" onclick="toggleFav(event,this)">
        <i class="fa fa-heart"></i>
      </div>
    </div>

    <div class="content">
      <div class="hotel">
        <img src="logo.png">
      </div>

      <div class="title">${room.name}</div>

      <div class="location">India</div>

      <span class="old">₹${room.old}</span>
      <span class="new"> ₹${room.price}</span>
    </div>
  </div>
  `;

  container.innerHTML += card;
});

</script>
<script>
function openMenu(){
  document.getElementById("sideMenu").classList.add("active");
}

function closeMenu(){
  document.getElementById("sideMenu").classList.remove("active");
}
</script>
<script>
// 🔥 Firebase Config (example - apna replace karna)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
};

firebase.initializeApp(firebaseConfig);

// GOOGLE LOGIN
function loginWithGoogle(){
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider)
  .then((result)=>{
    let user = result.user;
    alert("Welcome " + user.displayName);
  })
  .catch((error)=>{
    alert(error.message);
  });
}
</script>
