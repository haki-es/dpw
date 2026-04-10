var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// 1. Gambar persegi panjang merah
ctx.fillStyle = "#FF5733";
ctx.fillRect(20, 20, 150, 80);

// 2. Gambar persegi panjang dengan outline
ctx.strokeStyle = "#FFD700";
ctx.lineWidth = 3;
ctx.strokeRect(20, 120, 150, 80);

// 3. Gambar lingkaran penuh (arc)
ctx.beginPath();
ctx.arc(300, 60, 50, 0, 2 * Math.PI);
ctx.fillStyle = "#00BFFF";
ctx.fill();
ctx.strokeStyle = "white";
ctx.lineWidth = 2;
ctx.stroke();

// 4. Gambar setengah lingkaran
ctx.beginPath();
ctx.arc(300, 200, 50, 0, Math.PI);
ctx.fillStyle = "#FF69B4";
ctx.fill();

// 5. Gambar segitiga menggunakan path
ctx.beginPath();
ctx.moveTo(50, 270);
ctx.lineTo(150, 270);
ctx.lineTo(100, 200);
ctx.closePath();
ctx.fillStyle = "#7CFC00";
ctx.fill();
ctx.strokeStyle = "white";
ctx.lineWidth = 1;
ctx.stroke();

// 6. Gradien linear
var gradient = ctx.createLinearGradient(0, 300, 200, 400);
gradient.addColorStop(0, "#FF8C00");
gradient.addColorStop(1, "#FF1493");
ctx.fillStyle = gradient;
ctx.fillRect(20, 300, 200, 80);

// 7. Teks
ctx.font = "bold 18px Arial";
ctx.fillStyle = "white";
ctx.fillText("HTML HAKI", 220, 350);

// 8. Garis diagonal
ctx.beginPath();
ctx.moveTo(250, 300);
ctx.lineTo(390, 390);
ctx.strokeStyle = "#ADFF2F";
ctx.lineWidth = 3;
ctx.stroke();
