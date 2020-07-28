'use strict'
var userName;
var bqQuestion1;
var bqQuestion2;
var bqQuestion3;
var bqQuestion4;
var bqQuestion5;
var bqQuestion6;
var bqQuestion1Lower;
var bqQuestion2Lower;
var bqQuestion3Lower;
var bqQuestion4Lower;
var bqQuestion5Lower;
var bqQuestion6Lower;
var answerArray = ['fury', 'joshua'];

var guessChances = 4;
var boxingGuessChances = 6;
var correctAnswers = 0;

function welcomeUser() {
  //welcomes user and stores their name
  userName = prompt('Hi! Welcome to the site! What\'s your name?')
  console.log('User\'s name is ' + userName + '.');

  alert('Nice to meet you, ' + userName + '! Now let\'s get down to business. I\'m really excited you\'re here, because I wanted to test your knowledge of one of my favorite subjects, if you wanted.');

  //challenges user to one of 3 quizzes
  var takingQuiz = prompt('So, ' + userName + ', would you be willing to display some of your Professional Boxing knowledge? Yes or No?')

  //converts response string to all lowercase to make responses uniform for the if/else statements
  var takingQuizLowercase = takingQuiz.toLowerCase();

  //checks response to see which quiz to call
  if (takingQuizLowercase == 'yes') {
    boxingQuiz();
    return document.write('<h2>' + userName + ' has selected to TAKE the quiz!</h2>');
  } else if (takingQuizLowercase == 'no') {
    alert('Oh....well they can\'t really grade me unless you say yeah, so...');
    welcomeUser();
    return document.write('<h3>' + userName + ' has selected to NOT TAKE the quiz! Boooooooo!!!</h3>');
  }
  else {
    alert('What? It\'s a YES or NO question!');
    welcomeUser();
    return;
  }
}

function boxingQuiz() {
  alert('Awesome. I knew you were my dude, ' + userName + '! Here are 5 yes or no questions to prove your knowledge. Type only "Yes" or "No" as your responses, please. Let\'s get started!');

  // 5 questions for the assignment
  var bqQuestion1 = prompt('My all time favorite fighter; was Tommy Hearns\' nickname was "The Iceman"?');
  //console.log(userName + 'answered Question 1 ' + bqQuestion1);
  var bqQuestion2 = prompt('Does Wladimir Klitschko hold the record for the longest cumulative heavweight title reign of all time?');
  //console.log(userName + 'answered Question 2 ' + bqQuestion2);
  var bqQuestion3 = prompt('Was Muhammed Ali\'s birthname Cassius Clay?');
  //console.log(userName + 'answered Question 3 ' + bqQuestion3);
  var bqQuestion4 = prompt('Does a professional welterweight use 8 ounce gloves when competing?');
  //console.log(userName + 'answered Question 4 ' + bqQuestion4);
  var bqQuestion5 = prompt('There are 17 weight divisions in men\'s boxing.');
  //console.log(userName + 'answered Question 5 ' + bqQuestion5);

  //converting answers to lowercase for uniformity
  bqQuestion1Lower = bqQuestion1.toLowerCase();
  bqQuestion2Lower = bqQuestion2.toLowerCase();
  bqQuestion3Lower = bqQuestion3.toLowerCase();
  bqQuestion4Lower = bqQuestion4.toLowerCase();
  bqQuestion5Lower = bqQuestion5.toLowerCase();
  reviewAnswers();
}

function lastBoxingQuestion() {
  if (boxingGuessChances == 6) {
    var bqQuestion6 = prompt('Name one of the two current world heavyweight professional boxing champions from any organization. I\'ll give you 6 chances on this one');
    //console.log(userName + 'answered Question 6 ' + bqQuestion6);
    boxingGuessChances--;
  } else if (boxingGuessChances > 1 && boxingGuessChances < 6) {
    var bqQuestion6 = prompt('Name one of the two current world heavyweight professional boxing champions from any organization. I\'ll give you ' + boxingGuessChances + ' more chances to get it.');
    //console.log(userName + 'answered Question 6 ' + bqQuestion6);
    boxingGuessChances--;
  } else if (boxingGuessChances == 1) {
    var bqQuestion6 = prompt('Name one of the two current world heavyweight professional boxing champions from any organization. I\'ll give you ONE more chance.');
    //console.log(userName + 'answered Question 6 ' + bqQuestion6);
    boxingGuessChances--;
  } else if(boxingGuessChances == 0){
    alert('Nope! Yer outta chances!');
    alert('Tyson Fury is looking to take the remaining WBO, WBA, IBF titles from Anthony Joshua in the heavyweight division!');
    return
  }
  //converting answer to lowercase for uniformity
  bqQuestion6Lower = bqQuestion6.toLowerCase();

  for (i = 0; i < answerArray.length; i++) {
    if (bqQuestion6Lower == answerArray[i]) {
      alert('Question 6: Name one of the two current world heavyweight professional boxing champions from any organization. You answered: ' + bqQuestion6 + '. Correct! Tyson Fury is looking to take the remaining WBO, WBA, IBF titles from Anthony Joshua in the heavyweight division!');
      correctAnswers++;
      guessMyNumber();
      return
    } else {
      alert('Question 6: Name one of the two current world heavyweight professional boxing champions from any organization. You answered: ' + bqQuestion6 + '. Wrong! Try again!');
      lastBoxingQuestion();
      return
    }
  }
}

function guessMyNumber() {
  if (guessChances == 4) {
    var numberGuessed = prompt('Ok last thing, ' + userName + '! I\'m thinking of a number between 1 and 20. Guess what number I\'m thinking of! I\'ll give ya ' + guessChances + ' more chances!');
    guessChances--;
  } else if (guessChances > 1 && guessChances < 4) {
    var numberGuessed = prompt('Nope! Try again, ' + userName + '! I\'m thinking of a number between 1 and 20. Guess what number I\'m thinking of! I\'ll give ya ' + guessChances + ' more chances!');
    guessChances--;
  } else if (guessChances == 1) {
    var numberGuessed = prompt('Nope! Try again, ' + userName + '! I\'m thinking of a number between 1 and 20. Guess what number I\'m thinking of! I\'ll give ya ONE more chance!');
    guessChances--;
  }
  else if (guessChances == 0) {
    alert('Nope! Yer outta chances!');
    alert('The answer was 18! You were close!');
    finalReview();
    return
  }

  //checks to see what the user guessed
  if (numberGuessed == 18 && guessChances == 3) {
    alert('H-how did you do that....!?');
    correctAnswers++;
    finalReview();
    return
  } else if (numberGuessed == 18) {
    alert('Wow! What a good guess!');
    correctAnswers++;
    finalReview();
    return
  } else if (numberGuessed > 18) {
    alert('That\'s too high a number!');
    guessMyNumber();
    return
  } else if (numberGuessed < 18) {
    alert('That\'s too low a number!');
    guessMyNumber();
    return
  } else {
    guessMyNumber();
    return
  }
}

function reviewAnswers() {
  //checks to see what user answered for the first 5 boxing questions
  if (bqQuestion1Lower == 'yes') {
    alert('Question 1: My all time favorite fighter; was Tommy Hearns\' nickname was "The Iceman"? You answered: ' + bqQuestion1 + '. Are you serious? This was a gimme!!!');
    correctAnswers++;
  } else {
    alert('Question 1: My all time favorite fighter; was Tommy Hearns\' nickname was "The Iceman"? You answered: ' + bqQuestion1 + '. Correct! Tommy Hearns was known as the HITMAN. Notable fights include brawls versus Roberto Duran and "Marvelous" Marvin Hagler.');
  }

  if (bqQuestion2Lower == 'yes') {
    alert('Question 2: Does Wladimir Klitschko hold the record for the longest cumulative heavweight title reign of all time? You answered: ' + bqQuestion2 + '. Correct! Klitschko reigned for an astounding 4,382 cumulative days as heavyweight champion, barely edging out Joe Louis by about 2 months.');
    correctAnswers++;
  } else {
    alert('Question 2: Does Wladimir Klitschko hold the record for the longest cumulative heavweight title reign of all time? You answered: ' + bqQuestion2 + '. Well, I guess I can\'t blame you for being a boxing fan who knows nothing about the arugably strongest heavyweight champ of the modern era...can I?');
  }

  if (bqQuestion3Lower == 'yes') {
    alert('Question 3: Was Muhammed Ali\'s birthname Cassius Clay? You answered: ' + bqQuestion3 + '. Correct! Ali changed his name to show support for the Muslim Brotherhood movement and as an act to show independence of identity as a black man during a turbulent time in our country\'s history.');
    correctAnswers++;
  } else {
    alert('Question 3: Was Muhammed Ali\'s birthname Cassius Clay? You answered: ' + bqQuestion3 + '. Oof, how did you not know that?!');
  }

  if (bqQuestion4Lower == 'yes') {
    alert('Question 4: Does a professional welterweight use 8 ounce gloves when competing? You answered: ' + bqQuestion4 + '. Correct! Welterweights and below use 8 oz gloves while super welterweights and above fight with 10 ounce gloves.');
    correctAnswers++;
  } else {
    alert('Question 4: Does a professional welterweight use 8 ounce gloves when competing? You answered: ' + bqQuestion4 + '. Ok, that was tricky! Welterweights and below use 8 oz gloves while super welterweights and above fight with 10 ounce gloves.');
  }

  if (bqQuestion5Lower == 'yes') {
    alert('Question 5: There are 17 weight divisions in men\'s boxing. You answered: ' + bqQuestion5 + '. Correct! From Minimumweight to Heavyweight, there\'s a place for everyone at the table!');
    correctAnswers++;
  } else {
    alert('Question 5: There are 17 weight divisions in men\'s boxing. You answered: ' + bqQuestion5 + '. Wrong! Since so many body types exist, there needs to be a suitable range of competing weights so each type of fighter may prosper and grow as necessary!');
  }
  lastBoxingQuestion();
  return
}

function finalReview(){
  alert('Alright, let\'s tally up your score!');
  alert('You scored ' + correctAnswers + ' out of 7!');
  return document.write('<h3> Thanks for playing, ' + userName + '! Final score: ' + correctAnswers + '</h3>');
}

welcomeUser();