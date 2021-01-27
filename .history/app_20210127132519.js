const wordEl = document.getElementById("word");
const wrongLettersEL = document.getElementById("wrong-letters");
const playAgain = document.getElementById("play-button");
const popUP = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const figureParts = document.querySelectorAll(".figure-part");

// initiating the random game numbers and also its length
const words = ['application','wizard',];
const selectedWords = words[Math.floor(Math.random() * words.length)];

// we need two arrays to store both the correct  and incorrect letters

const wrongLetters = [];
const correctLetters = [];

//  SHOW HIDDEN WORDS
function displayWord() {
  wordEl.innerHTML = `${selectedWords
    .split('')
    .map(
      (letter) => `<span class ="letter">
    ${correctLetters.includes(letter) ? letter : ""}
    </span>`
    )
    .join('')}`;

  // split() turns a string to an array...
  // map() is used to return an array element with a func...
  // .join() is used to return array into a string...
}

displayWord();
