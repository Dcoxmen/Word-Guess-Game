# Word-Guess-Game

Coding Assignment - Hangman Game

Word Guess Game (Challenge - Recommended)
Explanation of javascript and functions.

---

This project uses vanilla javascript. (Desktop Version Only not responsive).

All variables were defined and organinzed to initialize objects
needed like the numbers, sounds and arrays for future use.

The wordlist variable is the answer key for the game.

Now the functions are used to build sequence and flow of events.

The gameDone function determines the criteria for what ends the game then resets.

The updateGame function updates the DOM on the index page with every action taken.

The updateHangmanPic function changes image with each guess.

The checkTheGuess function is the real logic. Creates positions array
then loops through and finds all letter instances to store.
if there are no matches it removes guess and updates image and replaces letter
using variables.

TheWinner function checks remaining empty spaces and and determines winner,plays sound and finishes Game.

TheLoser function compares image sequence to guesses remaining to determine loser.

The makeGuess function figures out guesses remaining and if you already used a letter.

The document.onkeydown function, using an an event, uses all the other functions in an
if/else statement to assign interactivity.

All results are displayed on index.html in the DOM object.

## This is the criteria of the assignment. All were met.

Choose a theme for your game! In the demo, we picked an 80s theme: 80s questions, 80s sound and an 80s aesthetic. You can choose any subject for your theme, though, so be creative!

Use key events to listen for the letters that your players will type.

Display the following on the page:

Press any key to get started!

Wins: (# of times user guessed the word correctly).

If the word is madonna, display it like this when the game starts: \_ \_ \_ \_ \_ \_ \_.

As the user guesses the correct letters, reveal them: m a d o \_ \_ a.

Number of Guesses Remaining: (# of guesses remaining for the user).

Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).

After the user wins/loses the game should automatically choose another word and make the user play it.

Word Guess Game Bonuses

Play a sound or song when the user guesses their word correctly, like in our demo.
Write some stylish CSS rules to make a design that fits your game's theme.

HARD MODE: Organize your game code as an object, except for the key events to get the letter guessed. This will be a challenge if you haven't coded with JavaScript before, but we encourage anyone already familiar with the language to try this out.
Save your whole game and its properties in an object.
Save any of your game's functions as methods, and call them underneath your object declaration using event listeners.
Don't forget to place your global variables and functions above your object.

Remember: global variables, then objects, then calls.
