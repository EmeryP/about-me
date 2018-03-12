'use strict';

document.getElementById('Emery').onclick = function(){

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

  alert('Good work ' + userName + ' you guessed ' + correctAnswer + ' out of 7 answers to be correct'); //alert user of their score
  console.log('Good work ' + userName + ' you guessed ' + correctAnswer + ' out of 7 answers to be correct');


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
    var bali = (prompt('Do you think I have traveled to Bali?')).toLowerCase();

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
    var codePro = (prompt('Am I a professional coder? and be careful of your response...')).toLowerCase();

    if (codePro === 'yes' || codePro === 'y') {
      alert('Thanks for the confidence boost but not yet!');
      console.log('Thanks for the confidence boost but not yet!');
    } else {
      alert('Sadly you\'re right, I need a few more hours behind a keyboard before I reach that level');
      console.log('Sadly you\'re right, I need a few more hours behind a keyboard before I reach that level');
      correctAnswer++;
    }
  }

  // Question #6
  function question6(){ //creating function6

    var userNum = parseInt(prompt('Guess any number between 1 - 10')); //prompt user to guess a number
    var randNum = Math.floor(Math.random() * 10 + 1); //generate a random number between 1 and 10
    console.log(randNum);
    var randGuess = 0; //create guess counter

    while (randGuess >= 0 && randGuess < 4) { //run the following code while these expressions are true
      if (userNum < randNum) { //if user guess is lower than random number, run the following code
        userNum = parseInt(prompt('Too low, guess again')); //prompt user to guess again
        randGuess++; //increase guesses counter by 1
      } else if (userNum > randNum) { //if user guess is higher than random number, run the following code
        userNum = parseInt(prompt('Too high, guess again')); //prompt user to guess again
        randGuess++; //increase guesses counter by 1
      } else if(userNum === randNum){ //if user guess is equal to random number, run the following code
        alert('You nailed it!'); //alert the user they guessed correctly
        console.log('You nailed it!'); //log the result
        correctAnswer++;
        break;
      } else {
        userNum = parseInt(prompt('I didnt recognize any input, guess again'));
        randGuess++;
      }
    }
    if (randGuess <= 4 && userNum !== randNum){
      alert('You\'re out of guesses, better luck next time!'); //alert the user game is over
      console.log('You\'re out of guesses, better luck next time!');
    }
  }

  // Question #7
  function question7() {
    var favColor = ['red', 'blue', 'orange', 'green']; //est var array
    var favColorUX = ['red, blue, orange, and green']; //create readable var for UX

    var answer = true; //set answer to true
    var guessCount = 0; //set # of guesses to 0

    while (answer === true){ //while answer = 0, run this code

      if(guessCount === 0){ //if guess count = 0, run the following code
        var userColor = prompt('Can you guess 1 of my 4 favorite colors?').toLowerCase(); // prompt user and store as var
        guessCount++; //update guessCount var by adding 1
      } else if(guessCount < 6 && guessCount > 0) { //else if guessCount is less than 6 and greater than 0, run the following code
        userColor = prompt('Nope guess again').toLowerCase(); //prompt user to answer question, store answer in var
        guessCount++; //update guessCount var by adding 1 each time this code runs
      } else if(guessCount === 6){ //else if count === 6, run the following code
        alert('Close but no cigar, my 4 favorite colors are ' + favColorUX); //alert the user if this condition is met
        console.log('Close but no cigar, my 4 favorite colors are ' + favColorUX);
        answer = false;
      }

      for(var j = 0; j < favColor.length; j++){ //use for loop to iterate through the length of the array favColor

        if (userColor === favColor[j]){ //if user input is equal to an element in the array
          alert('You\'re right, my 4 favorite colors are ' + favColorUX); //alert the user youre correct if this condition is met
          console.log('You\'re right, my 4 favorite colors are ' + favColorUX);
          guessCount++; //increment the guess count
          correctAnswer++;
          answer = false; //flip the value of answer to false
        }
      }
    }
  }
};