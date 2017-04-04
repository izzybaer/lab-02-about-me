'use strict';

var izzyGame = prompt('Let\'s play a game, and see if you read my page! Is my favorite NFL team the Seahawks?');
  if(izzyGame.trim().toLowerCase() =='yes'){
    alert('Hey! You read what I wrote! You\'re so cool!');
  } else {
    alert('You didn\t get this one, but you have four more tries to answer correctly!');
  }
  console.log('izzyGame',izzyGame);

var careerChoice = prompt('Did I work in the restaurant industry before attending Code Fellows?');
  if(careerChoice.trim().toLowerCase() == 'yes') {
    alert('I sure did! It sucked BAD!');
  } else {
    alert('ENH! wrong again! Man, you either really don\'t like me or you absolutely cannot read!');
  }
  console.log('careerChoice',careerChoice);

var arabicLanguage = prompt('Did I learn to speak Arabic in college?');
  if(arabicLanguage.trim().toLowerCase() == 'yes') {
    alert('Ayeeewah! That means yes in informal Arabic.');
  } else {
    alert('I sure hope you can math, cause you are not gonna be J.K.Rowling, probably ever.');
  }
  console.log('arabicLanguage',arabicLanguage);

var alaskaLiving = prompt('Did I live in Alaska?');
  if(alaskaLiving.trim().toLowerCase() == 'yes') {
    alert('Yes! I\'m still cold and I could see Russia from my house.')
  } else {
    alert('You\'ve got one more chance to get an answer right, don\t mess this up dude!');
  }
  console.log('alaskaLiving',alaskaLiving);



//
// Your JS file contains a 'use strict' declaration at the top. Always.
// Design a guessing game about you that involves FIVE yes/no questions. Be creative and fun and whimsical. Or not. It's up to you! It's your project!
// The questions in the guessing game must require a mix of yes/no answers, and user input must accept either y/n or yes/no responses, with either .toUpperCase() or .toLowerCase() used to validate the user input and accommodate users entering all-caps YES/NO answers, too.
// Useful and descriptive console.log() messages in the JS are well written and correctly displaying to the browser console for each question of the guessing game.
