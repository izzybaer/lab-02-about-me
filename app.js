'use strict';
//I am going to move the variables to the top of the page
var numCorrect = 0;
var correctAge = 27;
var guessCorrect = true;
var guessNumber;
var statesILivedIn = ['Alaska','Maryland','Hawaii'];
var userInput;
var userCorrect = false;

//This is the guess questions game

var whatsYourName = prompt('Hi there! I\'m Izabella, Izzy for short. What\'s your name?');
function question01(){
  var izzyGame = prompt('Let\'s play a game, and see if you read my page! Is my favorite NFL team the Seahawks?');
  if(izzyGame){
    if(izzyGame.trim().toLowerCase() ==='yes'){
      alert('Hey! You read what I wrote! You\'re so cool!');
      numCorrect++;
    } else {
      alert('You didn\'t get this one, but you have four more tries to answer correctly!');
    }
    console.log('izzyGame',izzyGame);
  }
}

function question02() {
  var careerChoice = prompt('Did I work in the restaurant industry before attending Code Fellows?');
  if(careerChoice){
    if(careerChoice.trim().toLowerCase() === 'yes') {
      alert('I sure did! It sucked BAD!');
      numCorrect++;
    } else {
      alert('ENH! wrong again! Man, you either really don\'t like me or you absolutely cannot read!');
    }
    console.log('careerChoice',careerChoice);
  }
}

function question03() {
  var arabicLanguage = prompt('Did I learn to speak Arabic in college?');
  if(arabicLanguage){
    if(arabicLanguage.trim().toLowerCase() === 'yes') {
      alert('Ayeeewah! That means yes in informal Arabic.');
      numCorrect++;
    } else {
      alert('I sure hope you can math, cause you are not gonna be J.K.Rowling, probably ever.');
    }
    console.log('arabicLanguage',arabicLanguage);
  }
}

function question04() {
  var alaskaLiving = prompt('Did I live in Alaska?');
  if(alaskaLiving){
    if(alaskaLiving.trim().toLowerCase() == 'yes') {
      alert('Yes! I\'m still cold and I could see Russia from my house.');
      numCorrect++;
    } else {
      alert('You\'ve got one more chance to get an answer right, don\t mess this up dude!');
    }
    console.log('alaskaLiving',alaskaLiving);
  }
}

function question05() {
  var goldMiner = prompt('Have I ever been a gold miner?');
  if(goldMiner){
    if(goldMiner.trim().toLowerCase() == 'yes') {
      alert('That\'s right! Talk about well rounded!');
      numCorrect++;
    } else {
      alert('Yoda says \'Hope for you, there is none\'');
    }
    console.log('goldMiner', goldMiner);
  }
}
//This is how old I am game
function question06() {
  for(var attempts = 4; attempts > 0 && guessCorrect === true; attempts --) {
    guessNumber = prompt('How old do you think I am? I\'ll give you four guesses!');
    guessNumber = parseInt(guessNumber);
    if(guessNumber === correctAge) {
      alert('Yes! You guessed the correct age!');
      guessCorrect = false;
      numCorrect++;
    } else if (guessNumber < correctAge) {
      alert('I know I have a baby face, but I\'m not that young!');
    } else if (guessNumber > correctAge) {
      alert('I\'m definitely not that old, dude!');
    } else {
      alert('Just keep guessing, just keep guessing..');
    }
  }
}
//This is the state guessing game
function question07() {
  for(var userAttempts = 0; userAttempts < 6 && userCorrect === false ; userAttempts++) {

    if(userAttempts === 0) {
      userInput = prompt('What states have I lived in besides Washington? You have six attempts to guess correctly. Please guess one state per try, and write the name of the state in its entirety.');
    } else {
      userInput = prompt('Keep Guessing!');
    }

    for(var i = 0; i < statesILivedIn.length; i++) {

      if(statesILivedIn[i] === userInput) {
        alert('Yes! I did live there! Great Job! All of the possible answers were Alaska, Maryland, and Hawaii.');
        userCorrect = true;
        numCorrect++;
      }
    }

  }

  if(userCorrect === false) {
    alert('I didn\'t want you to know where I lived anyways, so there!');
  }

  alert('Great Job '+ whatsYourName + '!' + ' ' + 'You got' + ' ' + numCorrect + ' correct answers out of 7');
}

question01();
question02();
question03();
question04();
question05();
question06();
question07();
