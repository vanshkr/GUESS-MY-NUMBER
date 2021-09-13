'use strict';

let message = document.querySelector('.message');
let correct = document.querySelector('.number');
let myScore = document.querySelector('.score');
let score = 20;
let highScore = document.querySelector('.highscore');
const g = document.querySelector('.guess');
const x = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.check').addEventListener('click', function () {
  const guess = g.value;
  if (score) {
    if (!guess) message.textContent = 'INVALID INPUT';
    else if (guess > 20 || guess < 1)
      message.textContent = 'ENTER BETWEEN 1 AND 20';
    else if (guess > x) {
      myScore.textContent = --score;
      message.textContent = 'TOO HIGH !';
    } else if (guess < x) {
      myScore.textContent = --score;
      message.textContent = 'TOO LOW !';
    } else {
      message.textContent = 'CORRECT GUESS';
      correct.textContent = x;
      highScore.textContent = score;
      document.body.style.backgroundColor = 'green';
    }
  } else {
    message.textContent = 'YOU LOST THE GAME';
    document.body.style.backgroundColor = 'red';
  }
});

document.querySelector('.again').addEventListener('click', function () {
  location.reload();
});
