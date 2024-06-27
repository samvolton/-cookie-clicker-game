// Get references to elements
const game = document.getElementById('game');    // The game area
const clock = document.getElementById('clock');    // Displays the remaining time
const scoreboard = document.getElementById('score'); // Displays the score

// Initialize game variables
let time = 20; // Starting time
let score = 0; // Initial score

// Main game loop
function gameLoop() {
    addCookie();    // Add a new cookie
    time--;         // Decrease the remaining time
    clock.textContent = time; // Update the clock display

    // Check if the game is over
    if (time <= 0) {
        clearInterval(timer);          // Stop the game loop
        game.removeEventListener('click', grab);  // Remove the click listener
        game.innerHTML = '';            // Clear the game area
    }
}

// Function to add a random cookie to the game area
function addCookie() {
    // Create a new div element to represent the cookie
    const cookie = document.createElement('div');
    cookie.textContent = '🍪';    // Set the cookie emoji as its text content
    cookie.className = 'cookie';   // Add a class for styling
    
    // Randomly position the cookie within the game area
    cookie.style.top = `${randomInt(200)}px`;
    cookie.style.left = `${randomInt(200)}px`;

    game.appendChild(cookie);    // Add the cookie to the game area
}

// Start the game loop every 500 milliseconds (0.5 seconds)
const timer = setInterval(gameLoop, 500); 

// Event listener for clicking cookies
game.addEventListener('click', grab);

// Function to handle cookie grabbing
function grab(event) {
    if (event.target.className === 'cookie') {  // Check if a cookie was clicked
        score++;                            // Increment the score
        scoreboard.textContent = score;     // Update the scoreboard
        event.target.remove();               // Remove the clicked cookie
    }
}

// Utility function to generate a random integer
function randomInt(lower, upper) {
    // Handle optional upper limit
    if (upper === undefined) {
        upper = lower;
        lower = 1;
    }
    return Math.floor(Math.random() * (upper - lower + 1) + lower);
}
