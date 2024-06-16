# Tic-Tac-Toe Game 🎮✨

# Abstract 🌟
Welcome to the Tic-Tac-Toe Game! This project is a fun and interactive implementation of the classic Tic-Tac-Toe game. 
It's designed with an appealing UI and smooth animations using GSAP, making the game not only enjoyable but also visually engaging.

# Features 🌟✨
Interactive Gameplay 🎮: Enjoy a smooth and responsive Tic-Tac-Toe game.
Dynamic Animations 🎨: Powered by GSAP for a seamless experience.
Score Tracking 🏆: Keeps track of wins, losses, and ties.
Responsive Design 📱: Optimized for both desktop and mobile devices.
Reset Functionality 🔄: Start a new game with a single click.


# Technology Stack 🛠️
HTML 📝: Structure of the game.
CSS 🎨: Styling and layout.
JavaScript ⚙️: Game logic and interactivity.
GSAP 🌟: Animations and transitions.

# Gameplay Instructions 🎮
Start the Game 🎉:

The game begins with Player X.
Click on any empty cell in the grid to make a move.
Switch Turns 🔄:

The current player alternates between X and O after each move.
The status at the bottom updates to show the current player.
Win the Game 🏆:

Align three marks horizontally, vertically, or diagonally to win.
If a player wins, the result screen will display the winner.
If all cells are filled without a winner, the game declares a tie.
Reset the Game 🔁:

Click the "New Game" button to reset the board.
The game board clears, and the game restarts with Player X.


# Detailed Functionality 🛠️
Game Initialization ✨:

The game board is an empty 3x3 grid.
Player X always starts first.
Move Handling 🎲:

When a cell is clicked, it checks if the cell is empty and if the game is active.
If valid, it places the current player's mark in the cell.
The game then checks for a win or a tie.
If neither, the turn switches to the other player.
Winning and Tie Conditions 🎯:

The game checks predefined win patterns (rows, columns, diagonals).
If a win pattern is matched, the game displays the winner and ends.
If all cells are filled and no win pattern is matched, it declares a tie.
Animations 💫:

The game uses GSAP for smooth animations.
Cells animate when clicked, enhancing user interaction.
The status and result screens have fade-in and fade-out effects.
