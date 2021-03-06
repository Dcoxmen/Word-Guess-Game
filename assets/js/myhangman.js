//Dave Cox Hangman UCIrvine Assignment
"use strict";

var wordList =
  // Word Guess list
  [
    "function",
    "variable",
    "event",
    "method",
    "ifelse",
    "loops",
    "array",
    "elements",
    "booleans",
    "operators",
    "console",
    "comment",
    "syntax",
    "objects"
  ];

const maxGuesses = 10; // Number of guesses allowed

var lettersGuessed = []; // Stores the letters the user guessed
var currentWordIndex; // Index of the current word array
var wordBeingGuessed = []; // This will be the word we matches the current word
var guessesRemaining = 0; // How many tries the player has left
var finishedGame = false; // Flag to 'game over play again'
var wins = 0; // Holds many wins has the player has

// Game sounds
var keySound = new Audio("./assets/sounds/typewriter-key.mp3");
var winSound = new Audio("./assets/sounds/you-win.mp3");
var loseSound = new Audio("./assets/sounds/you-lose.mp3");

// Reset the game variables
function gameDone() {
  guessesRemaining = maxGuesses;

  // Use Math.floor to round the random number down.
  currentWordIndex = Math.floor(Math.random() * wordList.length);

  // Clear word and letter arrays
  lettersGuessed = [];
  wordBeingGuessed = [];

  // Clear hangman image to default entry image
  document.getElementById("hangmanPic").src = "assets/images/0.png";

  // Build the wordBeingGuessed and clear it
  for (var i = 0; i < wordList[currentWordIndex].length; i++) {
    wordBeingGuessed.push("_");
  }

  // Hide game over and win images/text
  document.getElementById("keyPressPlayAgain").style.cssText = "display: none";
  document.getElementById("gameover-pic").style.cssText = "display: none";
  document.getElementById("youwin-pic").style.cssText = "display: none";

  // Show display
  updateGame();
}

//  Updates the display on index Page
function updateGame() {
  document.getElementById("totalWins").innerText = wins;

  // Display  the word  on screen.
  // Printing the array  we concatenate a string from values of the array.
  var guessingWordText = "";
  for (var i = 0; i < wordBeingGuessed.length; i++) {
    guessingWordText += wordBeingGuessed[i];
  }

  //Display values for the following elements
  document.getElementById("currentWord").innerText = guessingWordText;
  document.getElementById("guessesRemaining").innerText = guessesRemaining;
  document.getElementById("lettersGuessed").innerText = lettersGuessed;
}

// Image updates depending on how many guesses
function updateHangmanPic() {
  document.getElementById("hangmanPic").src =
    "assets/images/" + (maxGuesses - guessesRemaining) + ".png";
}

// This function takes a letter and finds all instances of
// appearance in the string and replaces them in the guess word.
function checkTheGuess(letter) {
  // Array to store positions of letters
  var positions = [];

  // Loop through word finding all instances of letter being guessed, store in an array.
  for (var i = 0; i < wordList[currentWordIndex].length; i++) {
    if (wordList[currentWordIndex][i] === letter) {
      positions.push(i);
    }
  }

  // if there are no matches, remove a guess and update the hangman image
  if (positions.length <= 0) {
    guessesRemaining--;
    updateHangmanPic();
  } else {
    // Loop through and replace the '_' with a letter.
    for (var i = 0; i < positions.length; i++) {
      wordBeingGuessed[positions[i]] = letter;
    }
  }
}
// Checks for a win by seeing if there are any remaining underscores in the wordBeingGuessed.
function theWinner() {
  if (wordBeingGuessed.indexOf("_") === -1) {
    document.getElementById("youwin-pic").style.cssText = "display: block";
    document.getElementById("keyPressPlayAgain").style.cssText =
      "display: block";
    wins++;
    winSound.play();
    finishedGame = true;
  }
}

// Checks for losses
function theLoser() {
  if (guessesRemaining <= 0) {
    loseSound.play();
    document.getElementById("gameover-pic").style.cssText = "display: block";
    document.getElementById("keyPressPlayAgain").style.cssText =
      "display:block";
    finishedGame = true;
  }
}

// Makes a guess
function makeGuess(letter) {
  if (guessesRemaining > 0) {
    // Make sure we didn't use this letter yet
    if (lettersGuessed.indexOf(letter) === -1) {
      lettersGuessed.push(letter);
      checkTheGuess(letter);
    }
  }
}

// On click event
document.onkeydown = function(event) {
  // If we finished a game, clear and reset.
  if (finishedGame) {
    gameDone();
    finishedGame = false;
  } else {
    // Check to make sure a-z was pressed. used keycode standard. set to lower case
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      makeGuess(event.key.toLowerCase());
      keySound.play();
      updateGame();
      theWinner();
      theLoser();
    }
  }
};
