function updateClocks() {
    // ... (same as previous JavaScript code)
}

// Update the clocks initially and start the clock interval
updateClocks();
setInterval(updateClocks, 1000);

// Open the clock dialog when the button is clicked
const openClockButton = document.getElementById("open-clock-dialog");
const clockDialog = document.getElementById("clock-dialog");
const closeClockButton = document.getElementsByClassName("close")[0];

openClockButton.addEventListener("click", function () {
    clockDialog.style.display = "block";
});

closeClockButton.addEventListener("click", function () {
    clockDialog.style.display = "none";
});

// Close the clock dialog when clicking outside the modal content
window.addEventListener("click", function (event) {
    if (event.target === clockDialog) {
        clockDialog.style.display = "none";
    }
});
