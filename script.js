'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20; 
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//check button functionality
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  //no guess
  if (!guess) {
    displayMessage('⛔ No Number!');

    //correct guess
  } else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number!!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //wrong guess
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('😔 You Lose');
    document.querySelector('.score').textContent = 0;
  }
});

//again button functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
