/*Times tables quiz*/
let startQuizButton = document.getElementById("start-quiz-button");
let submitButton = document.getElementById("submit-button");
let randNumField = document.getElementById('rand-num-field');
let questionCount = document.getElementById('question-count');
let showArray = document.getElementById('show-array');
let showRandArray = document.getElementById('show-rand-array');
let yourResultsRow = document.getElementById('your-results-row');
let showResultsArray = document.getElementById('show-results-array');

let count = 1;
let randNum;
let correctAnsArray = [];
let answerArray = [];
let randNumArray = [];
let userEncourageArray = [];
let scoreCount = 0;

const generateRandNum =()=>{
    return Math.floor(Math.random() * 13);
}

 const generateNextQuestion=()=>{
        randNum = generateRandNum();
        randNumField.innerHTML = randNum;
        questionCount.innerHTML = `Question ${count})`;
        count ++;
}

const startQuiz = ()=>{
    document.getElementById("start-row").style.display = "none";
    document.getElementById("question-row").style.display = "inline";
    generateNextQuestion();
}

const displayResults = ()=>{
    document.getElementById("question-row").style.display = "none";
    document.getElementById("your-results-row").style.display = "inline";
}

function executeFunction(){
    if (count <= 5) {
    let userInput = document.getElementById('user-input').value;
    answerArray.push(userInput);
    randNumArray.push(randNum);
    
    /*Just for me to check what is going on when I was putting this together*/
    showArray.innerHTML = answerArray;
    showRandArray.innerHTML = randNumArray;  
    
    /*Calculating the correct answer and pushing to the relevant correctAnsArray*/
    let correctAns = randNum * 7;
    correctAnsArray.push(correctAns);
    
    /*The feedback bit for saying well done or revise this one*/
    if (userInput == correctAns){
        userEncourageArray.push('Well done!!!');
        scoreCount ++;
    } else {
        userEncourageArray.push('Maybe revise this one?');
    }

    document.getElementById('user-input').value = "";
    generateNextQuestion();

} else {
    displayResults();

    let userInput = document.getElementById('user-input').value;
    answerArray.push(userInput);
    randNumArray.push(randNum);

     /*Just for me to check what is going on when I was putting this together*/
     showArray.innerHTML = answerArray;
     showRandArray.innerHTML = randNumArray;

    /*Calculating the correct answer and pushing to the relevant correctAnsArray*/
    let correctAns = randNum * 7;
    correctAnsArray.push(correctAns);
   
    /*The feedback bit for saying well done or revise this one*/
    if(userInput == correctAns){
        userEncourageArray.push('Well done!');
        scoreCount ++;
    } else{
        userEncourageArray.push('Maybe revise this one?');
    }
    
       
    yourResultsRow.innerHTML = 
    `For Question 1 you answered... ${randNumArray[0]} x 7 = ${answerArray[0]} <br> The correct answer was ${correctAnsArray[0]} <br> ${userEncourageArray[0]}<br></br>
    For Question 2 you answered... ${randNumArray[1]} x 7 = ${answerArray[1]} <br> The correct answer was ${correctAnsArray[1]} <br> ${userEncourageArray[1]}<br></br>
    For Question 3 you answered... ${randNumArray[2]} x 7 = ${answerArray[2]} <br> The correct answer was ${correctAnsArray[2]} <br> ${userEncourageArray[2]}<br></br>
    For Question 4 you answered... ${randNumArray[3]} x 7 = ${answerArray[3]} <br> The correct answer was ${correctAnsArray[3]} <br> ${userEncourageArray[3]}<br></br>
    For Question 5 you answered... ${randNumArray[4]} x 7 = ${answerArray[4]} <br> The correct answer was ${correctAnsArray[4]} <br> ${userEncourageArray[4]}<br></br><br></br>
    Your FINAL SCORE IS ${scoreCount} out 5`;
   
    
}
}


startQuizButton.onclick = startQuiz;
submitButton.onclick = executeFunction;



/*
    yourResultsRow.innerHTML = 
    `Question 1: ${randNumArray[0]} x 7 = ${answerArray[0]} <br>
    Question 2: ${randNumArray[1]} x 7 = ${answerArray[1]} <br>
    Question 3: ${randNumArray[2]} x 7 = ${answerArray[2]} <br>
    Question 4: ${randNumArray[3]} x 7 = ${answerArray[3]} <br>
    Question 5: ${randNumArray[4]} x 7 = ${answerArray[4]} <br>
  `;
}*/


/*Executefunction here that....
executefunction()


if count > 6{
        bla bla bla .onclick = jjjjj
    }
    let NumQuizQuestions = 5;
let i = 0;

while (i < NumQuizQuestions){
   
}*/
