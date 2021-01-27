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
const correctLetters = ["w", "i", "z", "a", "r", "d"];

//  SHOW HIDDEN WORDS
function displayWord() {
  wordEl.innerHTML = `${selectedWords
    .split("")
    .map(
      (letter) => `<span class ="letter">
    ${correctLetters.includes(letter) ? letter : ""}
    </span>`
    )
    .join("")}`;



  const innerword = wordEl.innerText.replace(/\n/g, "");

  if (innerword === selectedWords) {
    finalMessage.innerText = "Congratulations! You Won 🤑";
    popUp.style.display = "flex";
  } else {
    ("");
  }
}

displayWord();