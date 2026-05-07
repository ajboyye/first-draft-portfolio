// This shows a message in the browser's console (F12 to see it)
console.log("Portfolio loaded successfully!");

// This adds a simple greeting based on the time of day
const hour = new Date().getHours();
let greeting;

if (hour < 12) {
  greeting = "Good Morning!";
} else if (hour < 18) {
  greeting = "Good Afternoon!";
} else {
  greeting = "Good Evening!";
}

// alert(greeting + " Welcome to my electronic portfolio.");

const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});