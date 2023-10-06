function updateClocks() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Update digital clock
    const digitalClock = document.getElementById("digital-clock");
    const digitalTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    digitalClock.textContent = digitalTime;

    // Update analog clock
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

    // Calculate angles for clock hands
    const hourAngle = ((hours * 30) + (minutes * 0.5)) * (Math.PI / 180);
    const minuteAngle = (minutes * 6) * (Math.PI / 180);
    const secondAngle = (seconds * 6) * (Math.PI / 180);

    // Draw hour hand
    const hourHandLength = radius * 0.5;
    const hourHandX = centerX + hourHandLength * Math.cos(Math.PI / 2 - hourAngle);
    const hourHandY = centerY - hourHandLength * Math.sin(Math.PI / 2 - hourAngle);
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.lineTo(hourHandX, hourHandY);
    context.strokeStyle = "#333";
    context.lineWidth = 8;
    context.stroke();

    // Draw minute hand
    const minuteHandLength = radius * 0.7;
    const minuteHandX = centerX + minuteHandLength * Math.cos(Math.PI / 2 - minuteAngle);
    const minuteHandY = centerY - minuteHandLength * Math.sin(Math.PI / 2 - minuteAngle);
    context.beginPath();
    context.moveTo(centerX, centerY);
    context.lineTo(minuteHandX, minuteHandY);
    context.strokeStyle = "#333";
    context.lineWidth = 6;
    context.stroke();

    // Draw second hand
    const secondHandLength = radius * 0.8;
    const secondHandX = centerX + secondHandLength * Math.cos(Math.PI / 2 - secondAngle);
    const secondHandY = centerY - secondHandLength * Math.sin(Math.PI / 2 - secondAngle);
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

// Update the clocks initially and start the clock interval
updateClocks();
setInterval(updateClocks, 1000);
