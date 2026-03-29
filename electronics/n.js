const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let time = 0;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 🔵 AC Wave
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);

  for (let x = 0; x < canvas.width; x++) {
    let y = canvas.height / 2 + 
            80 * Math.sin((x + time) * 0.02);
    ctx.lineTo(x, y);
  }

  ctx.strokeStyle = "cyan";
  ctx.lineWidth = 2;
  ctx.stroke();

  // 🔴 DC Line
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 4);
  ctx.lineTo(canvas.width, canvas.height / 4);

  ctx.strokeStyle = "red";
  ctx.lineWidth = 2;
  ctx.stroke();

  time += 5;
  requestAnimationFrame(draw);
}

draw();