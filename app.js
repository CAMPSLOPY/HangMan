const wordEl = document.getElementById("word");
const wrongLettersEL = document.getElementById("wrong-letters");
const playAgain = document.getElementById("play-button");
const popUp = document.getElementById("popup-container");
const notification = document.getElementById("notification-container");
const finalMessage = document.getElementById("final-message");
const figureParts = document.querySelectorAll(".figure-part");
const popCard = document.querySelector(".popup");
// initiating the random game numbers and also its length
const words = [
  "application",
  "wizard",
  "programming",
  "interface",
  "messi",
  "codebook",
  "javascript",
  "telecommunication",
  "api",
  "proxy",
  "administration",
];
let selectedWords = words[Math.floor(Math.random() * words.length)];

// we need two arrays to store both the correct  and incorrect letters

const wrongLetters = [];
const correctLetters = [];

//  SHOW HIDDEN WORDS
function displayWord() {
  wordEl.innerHTML = `${selectedWords
    .split("")
    .map(
      (letter) => `<span class="letter">${
        correctLetters.includes(letter) ? letter : ""
      }
    </span>`
    )
    .join("")}`;

  const innerword = wordEl.innerText.replace(/\n/g, "");

  if (innerword === selectedWords) {
    finalMessage.innerText = "Congratulations! You Won 🤑";
    popUp.style.display = "flex";
    popCard.style.backgroundColor = "green";
    confetti.start(400, 50, 150);
  }
}

// The KeyDown event (we will be able to press any keys on our keyboard)
window.addEventListener("keydown", function (e) {
  //   console.log(e.keyCode); the keycode is
  //    used to get number position of a keyboard element on the DOM
  if (e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;

    if (selectedWords.includes(letter)) {
      if (!correctLetters.includes(letter)) {
        correctLetters.push(letter);
        displayWord();
      } else {
        showNotification();
      }
    } else {
      if (!wrongLetters.includes(letter)) {
        wrongLetters.push(letter);
        updateWrongLettersEl();
      } else {
        showNotification();
      }
    }
  }
});

// show notification functions
function showNotification() {
  notification.classList.add("show");

  //   set Timeout takes in a function and also a time duration
  setTimeout(() => {
    notification.classList.remove("show");
  }, 500);
}

// update the wrong info
function updateWrongLettersEl() {
  // Display  the wrong letters
  wrongLettersEL.innerHTML = `${wrongLetters.length > 0 ? "<p>Wrong</p>" : ""}
    ${wrongLetters.map((letter) => `<span>${letter}</span>`)}`;

  // update the figure part
  figureParts.forEach((part, index) => {
    const errors = wrongLetters.length;
    if (index < errors) {
      part.style.display = "block";
    } else {
      part.style.display = "none";
    }
  });

  //   check if lost
  if (wrongLetters.length === figureParts.length) {
    finalMessage.innerText = "Sorry You Have Lost. ☹️";
    popUp.style.display = "flex";
    popCard.style.backgroundColor = "red";
  }
}

// play game again

playAgain.addEventListener("click", () => {
  // we have to empty the arrays
  correctLetters.splice(0);
  wrongLetters.splice(0);
  //
  selectedWords = words[Math.floor(Math.random() * words.length)];

  displayWord();

  updateWrongLettersEl();

  popUp.style.display = "none";
});

displayWord();
