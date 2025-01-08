const canvasLeft = document.getElementById("left-animation");
const ctxLeft = canvasLeft.getContext("2d");
canvasLeft.width = 300;
canvasLeft.height = 150;

let x = 50, y = 50, dx = 2, dy = 2, radius = 20;

function animateLeft() { 
  ctxLeft.clearRect(0, 0, canvasLeft.width, canvasLeft.height);
  ctxLeft.beginPath();
  ctxLeft.arc(x, y, radius, 0, Math.PI * 2);
  ctxLeft.fillStyle = "#ffffff";
  ctxLeft.fill();
  ctxLeft.closePath();

  if (x + radius > canvasLeft.width || x - radius < 0) dx = -dx;
  if (y + radius > canvasLeft.height || y - radius < 0) dy = -dy;

  x += dx;
  y += dy;

  requestAnimationFrame(animateLeft);
}
animateLeft();

// Right Section Animation: Rotating Square
const canvasRight = document.getElementById("bounce-animation");
const ctxRight = canvasRight.getContext("2d");
canvasRight.width = 100;
canvasRight.height = 100;

let angle = 0;

function animateRight() {
  ctxRight.clearRect(0, 0, canvasRight.width, canvasRight.height);
  ctxRight.save();
  ctxRight.translate(canvasRight.width / 2, canvasRight.height / 2);
  ctxRight.rotate(angle);
  ctxRight.fillStyle = "#007bff";
  ctxRight.fillRect(-20, -20, 40, 40);
  ctxRight.restore();

  angle += 0.05;
  requestAnimationFrame(animateRight);
}
animateRight();