const wordEl = document.getElementById("word");
const wrongLettersEL = document.getElementById("wrong-letters");
const playAgain = document.getElementById("play-button");
const popUp = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const figureParts = document.querySelectorAll(".figure-part");

// initiating the random game numbers and also its length
const words = [
  "application",
  "wizard",
  "programming",
  "interface",
  "messi",
  "codebook",
  "javascript",
];
const selectedWords = words[Math.floor(Math.random() * words.length)];

// we need two arrays to store both the correct  and incorrect letters

const wrongLetters = [];
const correctLetters = [];

//  SHOW HIDDEN WORDS
function displayWord() {
  wordEl.innerHTML = `${selectedWords
    .split("")
    .map(
      (letter) => `<span class="letter">
    ${correctLetters.includes(letter) ? letter : ""}
    </span>`
    )
    .join("")}`;

  const innerword = wordEl.innerText.replace(/\n/g, "");

  if (innerword === selectedWords) {
    finalMessage.innerText = "Congratulations! You Won 🤑";
    popUp.style.display = "flex";
  }
}

// The KeyDown event (we will be able to press any keys on our keyboard)
window.addEventListener("keydown", function (e) {
//   console.log(e.keyCode); the keycode is
//    used to get number position of a keyboard element on the DOM
if()
});

displayWord();