'use strict';

document.getElementById('Emery').onclick = function(){

  question0();
  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7();

  alert('Good work ' + userName + ' you guessed ' + correctAnswer + ' out of 7 answers to be correct'); //alert user of their score
  console.log('Good work ' + userName + ' you guessed ' + correctAnswer + ' out of 7 answers to be correct');

};

var correctAnswer = 0;

function question0() {
  var userName = (prompt('Enter your name to start the game!'));
  console.log('Usersname is ' + userName);
}

// question #1
function question1() {

  var transportation = (prompt('Do I ride a bike to Code Fellows? Yes or No?')).toLowerCase();

  if (transportation === 'yes' || transportation === 'y') {
    alert('Your wrong, I ride the bus to CF');
    console.log('User guessed incorrectly, I ride the bus to CF');
  } else{
    alert('You\'re correct, I ride the bus to CF');
    console.log('You\'re correct, I ride the bus to CF');
    correctAnswer++;
  }
}

// question #2
function question2() {
  var oldEnough = (prompt('Am I old enough to drive a car? Y or N?')).toLowerCase();

  if (oldEnough === 'yes' || oldEnough === 'y') {
    alert('You\'re correct! I am legally old enough to drive a car');
    console.log('User guessed correctly, I am old enough to drive a car');
    correctAnswer++;
  } else{
    alert('Wrong answer! I am old enough to drive legally');
    console.log('Wrong answer, I am old enough to drive legally');
  }
}

// question #3
function question3() {
  var travel = (prompt('Does traveling the world excite me? Yes or No?')).toUpperCase();

  if (travel === 'YES' || travel === 'Y') {
    alert('You\'re amazing, I love to travel!');
    console.log('Correct, I love to travel!');
    correctAnswer++;
  } else {
    alert('Wrong answer, traveling the world causes a rush of excitement within me');
    console.log('Wrong answer, traveling the world is a favorite hobby for me');
  }
}
// question #4
function question4() {
  var married = (prompt('Do you think I am married?')).toLowerCase();

  if (married === 'yes' || married === 'y') {
    alert('Correct answer, I have been married for 1 year.');
    console.log('Correct answer, I have been married for 1 year');
    correctAnswer++;
  } else {
    alert('Wrong answer, I have been married for 1 year');
    console.log('Wrong answer, I have been married for 1 year');
  }
}
// question #5
function question5() {
  var codePro = (prompt('Am I a professional coder? Yes or No? and be careful of your response...')).toLowerCase();

  if (codePro === 'yes' || codePro === 'y') {
    alert('Thanks for the confidence boost but I am not a pro yet');
    console.log('Thanks for the confidence boost but I am not a pro yet');
  } else if (codePro === 'no' || codePro === 'n'){
    alert('You\'re right, I am not a pro but am striving to be one soon');
    console.log('You\'re right, I am not a pro but am striving to be one soon');
    correctAnswer++;
  } else {
    alert('I dont recognize that response... you might want to guess again.');
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
    } else {
      userNum = parseInt(prompt('I didnt recognize any input, guess again'));
      randGuess++;
    }
  }
  alert('You\'re out of guesses, better luck next time!'); //alert the user game is over
  console.log('You\'re out of guesses, better luck next time!');
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
      // break //stop the loop once the count = 6
    }

    for(var j = 0; j < favColor.length; j++){ //use for loop to iterate through the length of the array favColor

      if (userColor === favColor[j]){ //if user input is equal to an element in the array
        alert('You\'re right, my 4 favorite colors are ' + favColorUX); //alert the user youre correct if this condition is met
        console.log('You\'re right, my 4 favorite colors are ' + favColorUX);
        guessCount++; //increment the guess count
        correctAnswer++;
        answer = false; //flip the value of answer to true if the for loop evaluates to be true
      }
    }
  }
}