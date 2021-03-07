const words = [
   "HORSE",
   "PIG",
   "HOUSE",
   "DOCTOR",
   "TREE",
   "BOTTLE",
   "CELLPHONE",
   "GIRAFFE",
   "PEN",
   "BRAZIL",
   "MUSIC",
   "COPPER",
   "SKETCH",
   "DESK",
   "NOTEBOOK",
   "PIG",
   "MAP",
   "LIVERPOOL",
   "WASTEBASKET",
];
const letterInput = document.querySelector(".letter-input");

const lettersContainer = document.querySelector(".letters-box");

const sendBtn = document.querySelector(".letter-send");

const errors = [];

function chooseWord(words) {
   const chosenWord = words[Math.floor(Math.random() * words.length)];
   printChosenWord(chosenWord);
}
chooseWord(words);

function printChosenWord(word) {
   let i = 0;
   let letters = word.length;
   const lettersWord = [...word];
   for (i; i < letters; ++i) {
      const letterBox = document.createElement("div");
      letterBox.setAttribute("class", "letter-box");

      const letter = document.createElement("p");
      letter.setAttribute("class", `letter letter-${lettersWord[i]}`);
      letter.innerHTML = lettersWord[i];

      letterBox.appendChild(letter);

      lettersContainer.appendChild(letterBox);

      sendBtn.onclick = () => checkLetterInput(lettersWord);
   }
}
function checkLetterInput(letters) {
   if (letters.includes(letterInput.value)) {
      // document.querySelector(`.letter-${letterInput.value.toUpperCase()}`).style.display = "block";
      // points.innerHTML = 1++;
      [...document.getElementsByClassName(`letter-${letterInput.value.toUpperCase()}`)].map(
         (i) => (i.style.display = "block")
      );
      checkWordCompleted(letters);
   } else {
      errors.push("error");
      errors.map((err) => {
         document.querySelector(`.limb-${errors.length}`).style.visibility = "visible";
      });
      checkGameLost(errors);
   }
}

let count = localStorage.getItem("points");
const points = document.querySelector(".points");
points.innerHTML = count;
function checkWordCompleted(letters) {
   const boxLetters = [...document.getElementsByClassName("letter")];
   const test = boxLetters.filter((item) => item.style.display === "block");
   if (test.length === letters.length) {
      alert("OH YEAR!!");
      const points = document.querySelector(".points");
      count++;
      localStorage.setItem("points", count);
      points.innerHTML = localStorage.getItem("points");
      console.log(count);
      location.reload();
   }
}

function checkGameLost(errors) {
   if (errors.length >= 6) {
      const points = document.querySelector(".points");
      count = count - 3;
      localStorage.setItem("points", count);

      points.innerHTML = localStorage.getItem("points");

      location.reload();
   }
}
