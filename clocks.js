let isDigitalClockVisible = true;

// Get DOM elements
const digitalClock = document.getElementById("digital-clock");
const analogClockCanvas = document.getElementById("analog-clock");
const toggleButton = document.getElementById("toggle-button");

// Function to toggle between digital and analog clocks
function toggleClocks() {
    if (isDigitalClockVisible) {
        digitalClock.style.display = "none";
        analogClockCanvas.style.display = "block";
    } else {
        analogClockCanvas.style.display = "none";
        digitalClock.style.display = "block";
    }
    isDigitalClockVisible = !isDigitalClockVisible;
}

// Initial setup
toggleClocks();

// Add click event listener to toggle button
toggleButton.addEventListener("click", toggleClocks);

// Analog clock code (same as before)
function drawAnalogClock() {
    // ... (previous analog clock code)
}

setInterval(drawAnalogClock, 1000);

// Digital clock code (same as before)
function updateDigitalClock() {
    // ... (previous digital clock code)
}

setInterval(updateDigitalClock, 1000);

