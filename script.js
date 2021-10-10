"use strict";
let input;
let randNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;
const noNumMsg = "⛔️ No number!";
const tooLowMsg = "📉 Too low!";
const tooHighMsg = "📈 Too high!";
const startGuessMsg = document.querySelector(".start-check-para").textContent;
document.querySelector(".score-num").textContent = 20;
let highScore = 0;

// Function that works when check button is clicked
document.querySelector(".check-button").addEventListener("click", function () {
  input = parseInt(document.querySelector(".input-number").value);
  score = document.querySelector(".score-num").textContent;

  console.log(randNum, typeof randNum, input, typeof input);
  if (!input) {
    document.querySelector(".start-check-para").textContent = noNumMsg;
    // return;
  } else if (input == randNum) {
    document.querySelector(".start-check-para").textContent =
      "🎉 Correct Number!";
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".out-value").textContent = randNum;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".high-score-num").textContent = highScore;
    }
    // return;
  } else if (input >= randNum) {
    document.querySelector(".start-check-para").textContent = tooHighMsg;
    score--;
    document.querySelector(".score-num").textContent = score;
    //return;
  } else if (input <= randNum) {
    document.querySelector(".start-check-para").textContent = tooLowMsg;
    score--;
    document.querySelector(".score-num").textContent = score;
    //return;
  }
});

// function that works when again button is clicked
document.querySelector(".again-button").addEventListener("click", function () {
  document.querySelector(".score-num").textContent = 20;
  document.querySelector("body").style.backgroundColor = "#222";

  randNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".start-check-para").textContent = startGuessMsg;
  document.querySelector(".input-number").value = "";
  document.querySelector(".out-value").textContent = "?";
});
