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


/*Rainbow Button*/
let earthFace = document.getElementById("earth-face-container");
let earthFaceText = document.getElementById("earth-face-text");
let earthFaceOverlay = document.getElementById("earth-face-overlay");
const colorArray = ['rgba(255,0,0,0.5)','rgba(255,128,0,0.5','rgba(255,255,0,0.5)','rgba(0,128,0,0.5)', 'rgba(0,0,255,0.5)','rgba(75,0,130,0.5)','rgba(238,130,238,0.5)'];
const textArray = ['Red Planet','Orange Planet','Yellow Planet','Green Planet', 'Blue Planet', 'Indigo Planet','Violet Planet'];
let randomNumber;
let planetText;
let overlayColor;

function generateRandomNumber(){
    return Math.floor(Math.random() * 7);   
}

function generatePlanetText(){
planetText = textArray[randomNumber];
}

function generateOverlayColor(){
overlayColor = colorArray[randomNumber];
}

function changeText(){
generateRandomNumber();
randomNumber = generateRandomNumber();
generatePlanetText();
generateOverlayColor();
earthFaceText.innerHTML = planetText;
earthFaceOverlay.style.background = overlayColor;
}


earthFace.onclick = changeText;