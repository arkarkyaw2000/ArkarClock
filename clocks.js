function updateDigitalClock() {
    const digitalClock = document.getElementById("digital-clock");
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    digitalClock.textContent = `${hours}:${minutes}:${seconds}`;
}

function drawAnalogClock() {
    const canvas = document.getElementById("analog-clock");
    const context = canvas.getContext("2d");
    const radius = canvas.width / 2;
    const centerX = radius;
    const centerY = radius;

    // Clear the canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Draw clock circle
    context.beginPath();
    context.arc(centerX, centerY, radius - 10, 0, 2 * Math.PI);
    context.strokeStyle = "#333";
    context.lineWidth = 10;
    context.stroke();

    // Get the current time
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Draw hour hand
    const hourAngle = (hours * 30 + minutes / 2) * (Math.PI / 180);
    const hourHandLength = radius * 0.5;
    const hourHandX = centerX + hourHandLength * Math.cos(hourAngle);
    const hourHandY = centerY + hourHandLength * Math.sin(hourAngle);
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.lineTo(hourHandX, hourHandY);
    context.strokeStyle = "#333";
    context.lineWidth = 8;
    context.stroke();

    // Draw minute hand
    const minuteAngle = (minutes * 6 + seconds / 10) * (Math.PI / 180);
    const minuteHandLength = radius * 0.7;
    const minuteHandX = centerX + minuteHandLength * Math.cos(minuteAngle);
    const minuteHandY = centerY + minuteHandLength * Math.sin(minuteAngle);
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.lineTo(minuteHandX, minuteHandY);
    context.strokeStyle = "#333";
    context.lineWidth = 6;
    context.stroke();

    // Draw second hand
    const secondAngle = (seconds * 6) * (Math.PI / 180);
    const secondHandLength = radius * 0.8;
    const secondHandX = centerX + secondHandLength * Math.cos(secondAngle);
    const secondHandY = centerY + secondHandLength * Math.sin(secondAngle);
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.lineTo(secondHandX, secondHandY);
    context.strokeStyle = "red";
    context.lineWidth = 2;
    context.stroke();

    // Draw center point
    context.beginPath();
    context.arc(centerX, centerY, 5, 0, 2 * Math.PI);
    context.fillStyle = "black";
    context.fill();
}

setInterval(updateDigitalClock, 1000);
setInterval(drawAnalogClock, 1000);

// Initial rendering
updateDigitalClock();
drawAnalogClock();


