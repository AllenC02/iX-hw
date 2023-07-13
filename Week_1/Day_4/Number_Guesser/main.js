let randomNumber = Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10

function guess() {
  let userGuess = document.querySelector('#guess-input').value;
  let output = document.querySelector('#output');

  if (userGuess == randomNumber) {
    output.textContent = "Congratulations! You've guessed the right number. Please play again!";
    output.className = 'alert alert-success';
    // Generate a new random number and reset user input
    randomNumber = Math.floor(Math.random() * 10) + 1;
    document.querySelector('#guess-input').value = '';
  } else if (userGuess > randomNumber) {
    output.textContent = "Too high! Try again.";
    output.className = 'alert alert-danger';
  } else if (userGuess < randomNumber) {
    output.textContent = "Too low! Try again.";
    output.className = 'alert alert-danger';
  } else {
    output.textContent = "Please enter a number.";
    output.className = 'alert alert-warning';
  }
}

// Reset the game
document.querySelector('#guess-input').addEventListener('input', function() {
  document.querySelector('#output').textContent = '';
});
