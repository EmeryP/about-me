'use strict';


document.getElementById('Emery').onclick = function(){

// question #1
  var transportation = (prompt('Do I ride a bike to Code Fellows? Yes or No?')).toLowerCase();

  if (transportation === 'yes' || transportation === 'y') {
    alert('Your wrong, I ride the bus to CF');
    console.log('User guessed incorrectly, I ride the bus to CF');
  } else{
    alert('You\'re correct, I ride the bus to CF');
    console.log('You\'re correct, I ride the bus to CF');
  }

// question #2
var oldEnough = (prompt('Am I old enough to drive a car? Y or N?')).toLowerCase();

  if (oldEnough === 'yes' || oldEnough === 'y') {
    alert('You\'re correct! I am legally old enough to drive a car');
    console.log('User guessed correctly, I am old enough to drive a car');
  } else{
    alert('Wrong answer! I am old enough to drive legally');
    console.log('Wrong answer, I am old enough to drive legally');
  }

// question #3
var travel = (prompt('Does traveling the world excite me? Yes or No?')).toUpperCase();

  if (travel === 'YES' || travel === 'Y') {
    alert('You\'re amazing, I love to travel!');
    console.log('Correct, I love to travel!');
  } else {
    alert('Wrong answer, traveling the world causes a rush of excitement within me');
    console.log('Wrong answer, traveling the world is a favorite hobby for me');
  }

// question #4
var married = (prompt('Do you think I am married?')).toLowerCase();

  if (married === 'yes' || married === 'y') {
    alert('Correct answer, I have been married for 1 year.');
    console.log('Correct answer, I have been married for 1 year');
  } else {
    alert('Wrong answer, I have been married for 1 year');
    console.log('Wrong answer, I have been married for 1 year');
  }

// question #5
var codePro = (prompt('Am I a professional coder? Yes or No? and be careful of your response...')).toLowerCase();

  if (codePro === 'yes' || codePro === 'y') {
    alert('Wrong guess, I am a striving to be a pro but not quite a pro yet');
    console.log('Wrong guess, I am striving to be a pro but not quite a pro yet');
  } else {
    alert('Thanks for the confidence boost but I am not a pro yet');
    console.log('Thanks for the confidence boost but I am not a pro yet');
  }

};



