'use strict';

var transportation = (prompt('Do I ride a bike to Code Fellows? Yes or No?')).toLowerCase();

if (transportation === 'yes' || transportation === 'y') {
  alert('Your wrong, I ride the bus');
  console.log('User answered incorrectly');
} else{
  alert('You\'re correct, I ride the bus');
  console.log('User answered correctly');
}




