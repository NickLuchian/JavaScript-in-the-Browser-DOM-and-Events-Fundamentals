'use strict';
/*
console.log(document.querySelector('.message').textContent); //select class from html and the text
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 10;
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 20;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1; //random return a number between 0 and 1 that's why we nedd to multiply it with highest number that we are looking for. trunc remove decimals
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  //first argument is event that is listened for
  //second argument is event handler (what is done in case of that event)
  //this function will only be called when the event happens
  const guess = Number(document.querySelector('.guess').value);
  //document.querySelector('.message').textContent = 'Correct Number!';
  //whenever we get something from the ui it will be a string so we converted value to a number using Number function

  //first case is to actually check if there is a value
  if (!guess) {
    //document.querySelector('.message').textContent = 'Please type a number';
    displayMessage('Please type a number');
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green'; //if we manipulate with styles we need to specify a string
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //refactoring
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //document.querySelector('.message').textContent =
      displayMessage(
        guess > secretNumber ? 'Number is too high' : 'Number is too low'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
  /*
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Number is too low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = 'You lost the game';
    document.querySelector('.score').textContent = 0;
  }*/
});

//also we can create a functions for all reapeating functionality

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  //document.querySelector('.message').textContent = 'Please type a number';
  displayMessage('Please type a number');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222'; //if we manipulate with styles we need to specify a string
  document.querySelector('.number').style.width = '15rem';
});
