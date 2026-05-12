// Portfolio loaded message
console.log("Portfolio loaded successfully!");

// Greeting based on time
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