'use strict';

document.getElementById('Emery').onclick = function () {

  var correctAnswer = 0;

  var userName = (prompt('Enter your name to start the "Get to Know Me Game" and remember to answer all questions with either a yes or no answer.'));
  console.log('Usersname is ' + userName);

  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7();

  alert('Good work ' + userName + ' you guessed ' + correctAnswer + ' out of 7 answers correctly.');
  console.log('Good work ' + userName + ' you guessed ' + correctAnswer + ' out of 7 answers correctly.');

  // Question #1
  function question1() {

    var coding = (prompt('Does coding excite me?')).toLowerCase();

    if (coding === 'yes' || coding === 'y') {
      alert('Correct! Coding is amazingly powerful and there is so much about it that excites me!');
      console.log('Correct! Coding is amazingly powerful and there is so much about it that excites me!');
      correctAnswer++;
    } else {
      alert('You didnt really think that did you...? Coding is amazing and there is so much about it that excites me!');
      console.log('You didnt really think that did you...? Coding is amazing and there is so much about it that excites me!');
    }
  }

  // Question #2
  function question2() {
    var airplane = (prompt('By looking at my picture would you guess I am certified airplane pilot?')).toLowerCase();

    if (airplane === 'no' || airplane === 'n') {
      alert('You\'re right... I wouldnt trust myself behind the wheel of an airplane either!');
      console.log('You\'re right... I wouldnt trust myself behind the wheel of an airplane either!');
      correctAnswer++;
    } else {
      alert('Looks are decieving and thanks for the ego boost but dont jump in an airplane if I am the pilot!');
      console.log('Looks are decieving and thanks for the ego boost but dont jump in an airplane if I am the pilot!');
    }
  }

  // Question #3
  function question3() {
    var travel = (prompt('Does traveling the world excite me?')).toUpperCase();

    if (travel === 'YES' || travel === 'Y') {
      alert('You\'re amazing, I love to travel!');
      console.log('You\'re amazing, I love to travel!');
      correctAnswer++;
    } else {
      alert('I\'m sure your were just testing me, I love to travel!');
      console.log('I\'m sure your were just testing me, I love to travel!');
    }
  }

  // Question #4
  function question4() {
    var bali = (prompt('Do you think I really have traveled to Bali?')).toLowerCase();

    if (bali === 'yes' || bali === 'y') {
      alert('That\'s right! I spent 2 weeks in Bali a few years ago with some friends and it was awesome!');
      console.log('That\'s right! I spent 2 weeks in Bali a few years ago with some friends and it was awesome!');
      correctAnswer++;
    } else {
      alert('I know its a tough one to guess but its true I spent 2 weeks in Bali a few years ago with some friends and it was awesome!');
      console.log('I know its a tough one to guess but its true I spent 2 weeks in Bali a few years ago with some friends and it was awesome!');
    }
  }

  // Question #5
  function question5() {
    var surfer = (prompt('Does it look like I could actually surf a real live wave??')).toLowerCase();

    if (surfer === 'yes' || surfer === 'y') {
      alert('Yes it\'s true I can successfully surf small waves!');
      console.log('Yes it\'s true I can successfully surf small waves!');
    } else {
      alert('Good guess and I can see why you guessed that but it\'s true I can successfully surf small waves.');
      console.log('Good guess and I can see why you guessed that but it\'s true I can successfully surf small waves.');
      correctAnswer++;
    }
  }

  // Question #6
  function question6() {

    var userNum = parseInt(prompt('Guess any number between 1 - 10'));
    var randNum = Math.floor(Math.random() * 10 + 1);
    console.log(randNum);
    var randGuess = 0;

    while (randGuess >= 0 && randGuess < 4) {
      if (userNum < randNum) {
        userNum = parseInt(prompt('Too low, guess again'));
        randGuess++;
      } else if (userNum > randNum) {
        userNum = parseInt(prompt('Too high, guess again'));
        randGuess++;
      } else if (userNum === randNum) {
        alert('You nailed it!');
        console.log('You nailed it!');
        correctAnswer++;
        break;
      } else {
        userNum = parseInt(prompt('I didnt recognize any input, guess again'));
        randGuess++;
      }
    }
    if (randGuess <= 4 && userNum !== randNum) {
      alert('You\'re out of guesses, better luck next time!');
      console.log('You\'re out of guesses, better luck next time!');
    }
  }

  // Question #7
  function question7() {
    var favColor = ['red', 'blue', 'orange', 'green'];
    var favColorUX = ['red, blue, orange, and green'];

    var answer = true;
    var guessCount = 0;

    while (answer === true) {

      if (guessCount === 0) {
        var userColor = prompt('Can you guess 1 of my 4 favorite colors?').toLowerCase();
        guessCount++;
      } else if (guessCount < 6 && guessCount > 0) {
        userColor = prompt('Nope guess again').toLowerCase();
        guessCount++;
      } else if (guessCount === 6) {
        alert('Close but no cigar, my 4 favorite colors are ' + favColorUX);
        console.log('Close but no cigar, my 4 favorite colors are ' + favColorUX);
        answer = false;
      }

      for (var j = 0; j < favColor.length; j++) {

        if (userColor === favColor[j]) {
          alert('You\'re right, my 4 favorite colors are ' + favColorUX);
          console.log('You\'re right, my 4 favorite colors are ' + favColorUX);
          guessCount++;
          correctAnswer++;
          answer = false;
        }
      }
    }
  }
};