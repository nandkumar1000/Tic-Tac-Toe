// Selectors
const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const gameScreen = document.getElementById('gameScreen');
const resultScreen = document.getElementById('resultScreen');
const resultText = document.getElementById('resultText');

// Initialize GSAP animations
function initAnimations() {
    const tl = gsap.timeline();
    tl.from(".container", { duration: 1, opacity: 0, y: -50 })
      .from(".board", { duration: 1, opacity: 0, scale: 0.5 }, "-=0.5")
      .from(".cell", { duration: 0.5, opacity: 0, y: 50, stagger: 0.1 }, "-=0.5")
      .from(".status", { duration: 1, opacity: 0 }, "-=0.5");
}

// Cell click animation
function cellClickAnimation(cell) {
    gsap.fromTo(cell, { scale: 0.8, opacity: 0.5 }, { duration: 0.3, scale: 1, opacity: 1 });
}

// Status update animation
function statusUpdateAnimation() {
    gsap.fromTo(statusText, { opacity: 0 }, { duration: 0.5, opacity: 1 });
}

// Show result screen animation
function showResultScreen() {
    const tl = gsap.timeline();
    tl.to(gameScreen, { duration: 1, opacity: 0 })
      .set(gameScreen, { display: 'none' })
      .set(resultScreen, { display: 'block' })
      .fromTo(resultScreen, { opacity: 0 }, { duration: 1, opacity: 1 });
}

// Hide result screen animation
function hideResultScreen() {
    const tl = gsap.timeline();
    tl.to(resultScreen, { duration: 1, opacity: 0 })
      .set(resultScreen, { display: 'none' })
      .set(gameScreen, { display: 'block' })
      .fromTo(gameScreen, { opacity: 0 }, { duration: 1, opacity: 1 });
}

// Initialize animations on load
document.addEventListener('DOMContentLoaded', initAnimations);

// Example integration with game logic
function makeMove(index) {
    // Example of how to use the animation on cell click
    const cell = cells[index];
    cellClickAnimation(cell);

    // Game logic here...
    cell.textContent = 'X'; // Example

    // Update status with animation
    statusUpdateAnimation();

    // Check for game over
    if (/* game over condition */) {
        resultText.textContent = 'Player X wins!'; // Example result text
        showResultScreen();
    }
}

function resetGame() {
    // Reset game logic here...

    // Hide result screen with animation
    hideResultScreen();

    // Reset cells with animation
    gsap.fromTo(".cell", { scale: 0, opacity: 0 }, { duration: 0.5, scale: 1, opacity: 1, stagger: 0.1 });
}
