// Find the button element by its ID
const homeButton = document.getElementById("homeBtn");

// Add a click event listener to the button
homeButton.addEventListener("click", function() {
    // Redirect to the '/home' URL
    window.location.href = "/home";
});