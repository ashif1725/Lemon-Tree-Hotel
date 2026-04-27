const allTimezones = Intl.supportedValuesOf("timeZone");

let savedCities = JSON.parse(localStorage.getItem("cities")) || ["Asia/Kolkata"];

const container = document.getElementById("clockContainer");

// Create clock UI
function renderClocks() {
  container.innerHTML = "";

  savedCities.forEach((zone, index) => {
    const div = document.createElement("div");
    div.className = "clock";

    div.innerHTML = `
      <span class="remove" onclick="removeCity(${index})">❌</span>
      <div class="city">${zone}</div>
      <div class="time" id="time-${index}"></div>
      <canvas id="clock-${index}" width="120" height="120"></canvas>
    `;

    container.appendChild(div);
  });
}

function updateClocks() {
  savedCities.forEach((zone, index) => {
    const now = new Date();

    const time = now.toLocaleTimeString("en-US", {
      timeZone: zone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });

    document.getElementById(`time-${index}`).textContent = time;

    drawAnalogClock(`clock-${index}`, new Date(now.toLocaleString("en-US", { timeZone: zone })));
  });
}

// Analog clock
function drawAnalogClock(id, date) {
  const canvas = document.getElementById(id);
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const radius = canvas.width / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.translate(radius, radius);

  ctx.beginPath();
  ctx.arc(0, 0, radius - 5, 0, 2 * Math.PI);
  ctx.stroke();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  hour = hour % 12;

  drawHand(ctx, (hour * Math.PI / 6), radius * 0.5, 4);
  drawHand(ctx, (minute * Math.PI / 30), radius * 0.7, 3);
  drawHand(ctx, (second * Math.PI / 30), radius * 0.9, 2);

  ctx.setTransform(1, 0, 0, 1, 0, 0);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}

// Add city
function addCity() {
  const input = document.getElementById("search").value.trim();

  const match = allTimezones.find(tz => 
    tz.toLowerCase().includes(input.toLowerCase())
  );

  if (match && !savedCities.includes(match)) {
    savedCities.push(match);
    localStorage.setItem("cities", JSON.stringify(savedCities));
    renderClocks();
  } else {
    alert("City not found or already added");
  }
}

// Remove city
function removeCity(index) {
  savedCities.splice(index, 1);
  localStorage.setItem("cities", JSON.stringify(savedCities));
  renderClocks();
}

// Theme toggle
function toggleTheme() {
  document.body.classList.toggle("light");
}

// Init
renderClocks();
setInterval(updateClocks, 1000);
updateClocks();
