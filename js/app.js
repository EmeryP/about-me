'use strict';

var correctAnswer = 0;

// Ask user their name
var userName = (prompt('Can you remind me of your name?'));

// question #1
var transportation = (prompt('Do I ride a bike to Code Fellows? Yes or No?')).toLowerCase();

if (transportation === 'yes' || transportation === 'y') {
  alert('Your wrong, I ride the bus to CF');
  console.log('User guessed incorrectly, I ride the bus to CF');
} else{
  alert('You\'re correct, I ride the bus to CF');
  console.log('You\'re correct, I ride the bus to CF');
  correctAnswer++;
}

// question #2
var oldEnough = (prompt('Am I old enough to drive a car? Y or N?')).toLowerCase();

if (oldEnough === 'yes' || oldEnough === 'y') {
  alert('You\'re correct! I am legally old enough to drive a car');
  console.log('User guessed correctly, I am old enough to drive a car');
  correctAnswer++;
} else{
  alert('Wrong answer! I am old enough to drive legally');
  console.log('Wrong answer, I am old enough to drive legally');
}

// question #3
var travel = (prompt('Does traveling the world excite me? Yes or No?')).toUpperCase();

if (travel === 'YES' || travel === 'Y') {
  alert('You\'re amazing, I love to travel!');
  console.log('Correct, I love to travel!');
  correctAnswer++;
} else {
  alert('Wrong answer, traveling the world causes a rush of excitement within me');
  console.log('Wrong answer, traveling the world is a favorite hobby for me');
}

// question #4
var married = (prompt('Do you think I am married?')).toLowerCase();

if (married === 'yes' || married === 'y') {
  alert('Correct answer, I have been married for 1 year.');
  console.log('Correct answer, I have been married for 1 year');
  correctAnswer++;
} else {
  alert('Wrong answer, I have been married for 1 year');
  console.log('Wrong answer, I have been married for 1 year');
}

// question #5
var codePro = (prompt('Am I a professional coder? Yes or No? and be careful of your response...')).toLowerCase();

if (codePro === 'yes' || codePro === 'y') {
  alert('Thanks for the confidence boost but I am not a pro yet');
  console.log('Thanks for the confidence boost but I am not a pro yet');
} else {
  alert('You\'re right, I am not a pro but am striving to be one soon');
  console.log('You\'re right, I am not a pro but am striving to be one soon');
  correctAnswer++;
}

// Question #6

for (var i = 0; i < 4; i++) {

  var cars = parseInt(prompt('How many cars have I owned? You only get 4 guesses so guess wisely!'));

  if (cars === 5 ) {
    alert('Correct!');
    console.log('Correct!');
    correctAnswer++;
    break;
  } else if(cars < 5) {
    alert('Too low, try again');
    console.log('Too low, try again');
  } else if(cars > 5){
    alert('Too high, guess again');
    console.log('Too high, guess again');
  }
}

// Question #7

var favColor = ['red', 'blue', 'orange', 'green'];

var answer = false; //est variable to being false initially
var guessCount = 0; //used to count the number of guesses

while (answer === false){ //run this code as long as answer equals false

  if(guessCount === 0){ //if guess count === 0
    var userColor = prompt('Can you guess 1 of my 4 favorite colors?').toLowerCase(); //prompt user
    guessCount++;
  }
  else if(guessCount < 6 && guessCount > 0) {
    userColor = prompt('Nope guess again').toLowerCase();     
    guessCount++;
  } else if(guessCount === 6){
    break;
  }

  for(var j = 0; j < favColor.length; j++){

    if (userColor === favColor[j]){ //if user input is equal to array length
      alert('You\'re right, my 4 favorite colors are ' + favColor); //alert the user youre correct
      guessCount++; //increment the guess count
      answer = true;
    }
  }
}
alert('Good try ' + userName + ' you guessed ' + correctAnswer + ' out of 7 answers to be correct');


