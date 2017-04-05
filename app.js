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

var goldMiner = prompt('Have I ever been a gold miner?');
  if(goldMiner.trim().toLowerCase() == 'yes') {
    alert('That\'s right! Talk about well rounded!');
  } else {
    alert('Yoda: \'Hope for you, there is none\'');
  }
  console.log('goldMiner', goldMiner);

var correctAge = '27';
var guessCorrect = true;

var guessMyAge;
  for(var guessNumber = 4; guessNumber > 0 && guessCorrect; guessNumber --) {
    var guessMyAge = prompt('How old do you think I am? I\'ll give you four guesses!');

  if(guessMyAge == correctAge){
    alert('Yes! You guessed the correct age!');
    guessCorrect = false;
  } else if (guessNumber < correctAge) {
    alert('I know I have a baby face, but I\'m not that young!');
  } else (guessNumber > correctAge) {
    alert('I\'m definitely not that old, dude!');
  } else {
    alert('Just keep guessing, just keep guessing..');
    }
  }





// add a sixth question that takes numeric input by prompting a user to guess a number
// then indicates to the user whether the guess is 'too high' or 'too low'
// give the user four opportunities to get the correct answer
// showcase your fancy programming skillz

// add seventh question that has multiple correct answers
// the multiple correct answer possibilities are stored in an array
// ex: Can you guess a state that I have lived in besides Washington?
// how will you structure your seventh question?
// structure this question so that the user has 6 tries to get a single correct answer
// if the user has used up those 6 tries OR gotten a correct answer
// then display a message to the user indicating all of the possible correct answers


// As a developer, I want to keep a tally of the total number of correct answers given by the user, and at the end of the game, tell the user how well they did with a personalized custom message that includes the number of correct answers and also addresses the user by name, e.g. "You got 4 out of 7 questions correct, Bobbi! Better luck next time."

// var correctNumber = '12';
// get prompt to run 4 times
// var notDone = true;
// var guess;
// for (var guesses = 3; guesses > 0 && notDone; guesses--) {
// guess = prompt('whats my favorite number?');
// if (guess === correctNumber) {
//  alert('you guessed the right number');
// notDone = false;
//   } else {
// alert('guess again!');
//  }
// }
//
