const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 3.5;

const circles = [];
const numCircles = 10;

// Erstelle zufällige Kreise
for (let i = 0; i < numCircles; i++) {
    circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 20 + 10, // Zufälliger Radius zwischen 10 und 30
        speedX: Math.random() * 4 - 2, // Zufällige Geschwindigkeit in X-Richtung
        speedY: Math.random() * 4 - 2, // Zufällige Geschwindigkeit in Y-Richtung
        color: `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})` // Zufällige Farbe
    });
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let circle of circles) {
        // Kreis zeichnen
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = circle.color;
        ctx.fill();

        // Linie zeichnen
        ctx.beginPath();
        ctx.moveTo(circle.x, circle.y);
        ctx.lineTo(circle.x + circle.speedX * 10, circle.y + circle.speedY * 10);
        ctx.strokeStyle = circle.color;
        ctx.lineWidth = 2;
        ctx.stroke();

        // Kreisbewegung aktualisieren
        circle.x += circle.speedX;
        circle.y += circle.speedY;

        // Randüberprüfung, um die Kreise im Canvas zu halten
        if (circle.x < 0 || circle.x > canvas.width) {
            circle.speedX *= -1;
        }
        if (circle.y < 0 || circle.y > canvas.height) {
            circle.speedY *= -1;
        }
    }

    requestAnimationFrame(draw);
}

draw();