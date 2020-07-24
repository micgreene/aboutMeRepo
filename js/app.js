'use strict'

function welcomeUser() {
  //welcomes user and stores their name
  var userName = prompt('Hi! Welcome to the site! What\'s your name?')
  console.log('User\'s name is ' + userName + '.');

  alert('Nice to meet you, ' + userName + '! Now let\'s get down to business. I\'m really excited you\'re here, because I wanted to test your knowledge of one of my favorite subjects, if you wanted.');

  //challenges user to one of 3 quizzes
  var takingQuiz = prompt('So, ' + userName + ', would you be willing to display some of your Professional Boxing knowledge? Yes or No?')
  console.log(userName + ' has selected the ' + quizType + ' quiz.');

  //converts response string to all lowercase to make responses uniform for the if/else statements
  var takingQuizLowercase = takingQuiz.toLowerCase();

  //checks response to see which quiz to call
  if (takingQuizLowercase == 'yes') {
    return document.write('<h2>' + userName + ' has selected to TAKE the quiz!</h2>');
    boxingQuiz();
  } else if (takingQuizLowercase == 'no') {
    alert('Oh....well they can\'t really grade me unless you say yeah, so...');
    welcomeUser();
    return document.write('<h3>' + userName + ' has selected to NOT TAKE the quiz! Boooooooo!!!</h3>');
  }
  else {
    alert('What? It\s a YES or NO question!');
    welcomeUser();
    return;
  }
}

function boxingQuiz() {
  alert('Awesome. I knew you were my dude, ' + userName + '! Here are 5 true or false questions to prove your knowledge. Type only "True" or "False" as your responses, please. Let\'s get started!');

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
  var bqQuestion1Lower = bqQuestion1.toLowerCase();
  var bqQuestion2Lower = bqQuestion2.toLowerCase();
  var bqQuestion3Lower = bqQuestion3.toLowerCase();
  var bqQuestion4Lower = bqQuestion4.toLowerCase();
  var bqQuestion5Lower = bqQuestion5.toLowerCase();



  //checks to see what user answered for each question
  if (bqQuestion1Lower == true) {
    alert('Question 1: My all time favorite fighter; was Tommy Hearns\' nickname was "The Iceman"? You answered: ' + bqQuestion1 + '. Are you serious? This was a gimme!!!');
  } else {
    alert('Question 1: My all time favorite fighter; was Tommy Hearns\' nickname was "The Iceman"? You answered: ' + bqQuestion1 + '. Correct! Tommy Hearns was known as the HITMAN. Notable fights include brawls versus Roberto Duran and "Marvelous" Marvin Hagler.');
  }

  if (bqQuestion2Lower == true) {
    alert('Question 2: Does Wladimir Klitschko hold the record for the longest cumulative heavweight title reign of all time? You answered: ' + bqQuestion2 + '. Correct! Klitschko reigned for an astounding 4,382 cumulative days as heavyweight champion, barely edging out Joe Louis by about 2 months.');
  } else {
    alert('Question 2: Does Wladimir Klitschko hold the record for the longest cumulative heavweight title reign of all time? You answered: ' + bqQuestion2 + '. Well, I guess I can\'t blame you for being a boxing fan who knows nothing about the arugably strongest heavyweight champ of the modern era...can I?');
  }

  if (bqQuestion3Lower == true) {
    alert('Question 3: Was Muhammed Ali\'s birthname Cassius Clay? You answered: ' + bqQuestion3 + '. Correct! Ali changed his name to show support for the Muslim Brotherhood movement and as an act to show independence of identity as a black man during a turbulent time in our country\'s history.');
  } else {
    alert('Question 3: Was Muhammed Ali\'s birthname Cassius Clay? You answered: ' + bqQuestion3 + '. Oof, how did you not know that?!');
  }

  if (bqQuestion4Lower == true) {
    alert('Question 4: Does a professional welterweight use 8 ounce gloves when competing? You answered: ' + bqQuestion4 + '. Correct! Welterweights and below use 8 oz gloves while super welterweights and above fight with 10 ounce gloves.');
  } else {
    alert('Question 4: Does a professional welterweight use 8 ounce gloves when competing? You answered: ' + bqQuestion4 + '. Ok, that was tricky! Welterweights and below use 8 oz gloves while super welterweights and above fight with 10 ounce gloves.');
  }

  if (bqQuestion5Lower == true) {
    alert('Question 5: There are 17 weight divisions in men\'s boxing. You answered: ' + bqQuestion5 + '. Correct! From Minimumweight to Heavyweight, there\'s a place for everyone at the table!');
  } else {
    alert('Question 5: There are 17 weight divisions in men\'s boxing. You answered: ' + bqQuestion5 + '. Wrong! Since so many body types exist, there needs to be a suitable range of competing weights so each type of fighter may prosper and grow as necessary!');
  }

  return document.write('<h3>Thanks for playing, ' + userName + '! Have a great day!</h3>');
}

welcomeUser();