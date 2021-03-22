/*What do we want to do....reveal the message....*/
/*THE FIRING EVENT*/
/* Here we are retrieving the HTML element <button> with the #click-me ID assigned in CSS */
let clickMe = document.getElementById('click-me');

/* Here we are retrieving the HTML element <p> with the #special-message ID assigned in CSS*/
let specialMessage = document.getElementById('special-message');

/* This is the event handler function (which is going to start by looking at the HTML element <p> 
with ID #special message which we saved to a variable specialMessage.)  We want the function to change the .display style 
attribute currently set to 'none' (which makes it invisible) and change this to something to make it visible in the DOM*/
function revealMessage (){
    specialMessage.style.display = 'block';
}

/*When will what we want to do happen?*/
/*THE LISTENING EVENT*/
/*We also need to create an event handler that will action the revealMessage function by 
listening to an event (in this case the click of the mouse on a button). The element event that is going to be 
"listened to" is the click-me button.  So we need to retrieve that HTML element*/

/*This is the event handler that will listen to the 'CLICK' and then run the clickMe function*/
clickMe.addEventListener('click', revealMessage);



/*HIDE ME BUTTON*/
let hideMe = document.getElementById('hide-me');
let hideSpecialMessage = document.getElementById('special-message');

function hideMessage (){
    hideSpecialMessage.style.display = 'none';
}
hideMe.addEventListener('click', hideMessage);


/*Rainbow Button Random*/
let earthFace = document.getElementById("earth-face-container");
let earthFaceText = document.getElementById("earth-face-text");
let earthFaceOverlay = document.getElementById("earth-face-overlay");
const colorArray = ['rgba(255,0,0,0.5)','rgba(255,128,0,0.5','rgba(255,255,0,0.5)','rgba(0,128,0,0.5)', 'rgba(0,0,255,0.5)','rgba(75,0,130,0.5)','rgba(238,130,238,0.5)'];
const textArray = ['Red','Orange','Yellow','Green', 'Blue', 'Indigo','Violet'];
let randomNumber;
let planetText;
let overlayColor;

function changeText(){
randomNumber = Math.floor(Math.random() * colorArray.length); 
planetText = textArray[randomNumber];
overlayColor = colorArray[randomNumber];
earthFaceText.innerHTML = planetText;
earthFaceOverlay.style.background = overlayColor;
}

earthFace.onclick = changeText;

/*Times tables quiz*/
let firstButton = document.getElementById('first-button');
let secondButton = document.getElementById('second-button');
let firstQuestion = document.getElementById('first-question');
let secondQuestion = document.getElementById('second-question');

let userAnswer = document.getElementById('user-answer');
let submitButton = document.getElementById('submit-button');
let revealButton = document.getElementById('reveal-button');
let correctAnswer = document.getElementById('correct-answer');

let randNum1;
let randNum2;
let actualAnswer;

function generateRandNum1(){
    return Math.floor(Math.random() * 13);
}

function generateRandNum2(){
    return Math.floor(Math.random() * 13);
}

function generateFirstQuestion(){
    randNum1 = generateRandNum1();
    firstQuestion.innerHTML = randNum1;
}

function generateSecondQuestion(){
    randNum2 = generateRandNum2();
    secondQuestion.innerHTML = randNum2;
}

function revealCorrectAnswer(){
    actualAnswer = randNum1 * randNum2;
    correctAnswer.innerHTML = actualAnswer;
}

function revealUserAnswer(){
    let userInput = document.getElementById('user-input').value;
    userAnswer.innerHTML = userInput;
}

firstButton.onclick = generateFirstQuestion;
secondButton.onclick = generateSecondQuestion;
revealButton.onclick = revealCorrectAnswer;
submitButton.onclick = revealUserAnswer;

