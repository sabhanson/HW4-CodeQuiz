const startQuizBtn = document.querySelector("#startBtn");
const homePageBox = document.querySelector("#codeQuizContainer");
var liveQuizBox = document.querySelector('#questionContainer');
var timeLeft = 59;
var choice0 = document.querySelector('#button0');
var choice1 = document.querySelector('#button1');
var choice2 = document.querySelector('#button2');
var choice3 = document.querySelector('#button3');
var timerText = document.querySelector('#timer');
var questionArray = 0;
var questionDisplay = document.querySelector('#questionText');
var answerStatus = document.querySelector('#rightWrong');
var doneBox = document.querySelector('#allDone')
var finalScore = document.querySelector('#finalScore');
var submitButton = document.querySelector('.submitBtn');
var nameInput = document.querySelector('#initials');



const quizStack = [
    {
        question: "How do you add a comment in JavaScript?",
        choices: [
            "1. // This is a JavaScript comment",
            "2. <!-- This is a JavaScript comment -->",
            "3. /* This is a JavaScript comment */",
            "4. !-- This is a JavaScript comment --!"],
        answer: "1. // This is a JavaScript comment",
    },
    {
        question: "What does the property 'NaN' stand for?",
        choices: [
            "1. Never a Number",
            "2. Name and Number",
            "3. Not a Number",
            "4. Number all Numerals"],
        answer: "3. Not a Number",
    },
    {
        question: "What is the correct way to reference the class of ''hero'' in CSS?",
        choices: [
            "1. #hero",
            "2. .hero",
            "3. *hero",
            "4. $hero"],
        answer: "2. .hero",
    },
    {
        question: "What is the best background color (according to Joe)?",
        choices: [
            "1. chartruese",
            "2. seagreen",
            "3. cornflowerblue",
            "4. salmon"],
        answer: "4. salmon",
    },
    {
        question: "If we are comparing and need either expression 1 OR expression 2 to be true, what logical operator would we use?",
        choices: [
            "1. (expression 1) || (expression 2)",
            "2. (expression 1) && (expression 2)",
            "3. (expression 1) != (expression 2)",
            "4. (expression 1) == (expression 2)"],
        answer: "1. (expression 1) || (expression 2)",
    },
]



//when startQuizBtn is clicked, function runs: 1. hides homePageBox 2. shows liveQuizBox 3. ru

startQuizBtn.addEventListener("click", function (){
    homePageBox.style.display = "none";
    liveQuizBox.removeAttribute("style");

    runQuestions();

    var timer = setInterval(function(){
        if(timeLeft <= 0) {
            clearInterval(timer);
            timerText.textContent = "out of time!";
            gameEnd();
        } else {
            timerText.textContent = "Time: " + timeLeft + " sec";
        }
        timeLeft -= 1;
        }, 1000);

    });

function runQuestions() {
    questionDisplay.innerHTML = quizStack[questionArray].question;
    choice0.textContent = quizStack[questionArray].choices[0];
    choice1.textContent = quizStack[questionArray].choices[1];
    choice2.textContent = quizStack[questionArray].choices[2];
    choice3.textContent = quizStack[questionArray].choices[3];
}


function checkAnswer (answer) {
    answerStatus.style.display = "block";

    if ((quizStack[questionArray].answer === quizStack[questionArray].choices[answer]) && (timeLeft >=0))
    { answerStatus.textContent = "right!";
    } else if ((quizStack[questionArray].answer !== quizStack[questionArray].choices[answer]) && (timeLeft >=10))
    { answerStatus.textContent = "wrong!";
    timeLeft -= 10;
    }
    else if ((quizStack[questionArray].answer !== quizStack[questionArray].choices[answer]) && (timeLeft <=10)) {
    answerStatus.textContent = "wrong!";
    timeLeft = 0;
    }
    
    questionArray++;

    if(questionArray < quizStack.length) {
        runQuestions();
    } else {
        gameEnd();
        clearInterval(timer);
    }
}


function option0() {
    checkAnswer(0);
}
function option1() {
    checkAnswer(1);
}
function option2() {
    checkAnswer(2);
}
function option3() {
    checkAnswer(3);
}

choice0.addEventListener("click", option0);
choice1.addEventListener("click", option1);
choice2.addEventListener("click", option2);
choice3.addEventListener("click", option3);

function gameEnd (event) {
    var timerStop = timeLeft;
    questionContainer.style.display = "none";
    doneBox.style.display = "block";
    finalScore.textContent = "Your final score is " + timeLeft + ".";
    clearInterval(timer);
    timeLeft = timerStop;


    function newHighScore (){
        var newNameScore = {
            name: nameInput,
            score: timeLeft,
        };
        console.log (newNameScore);
    }


    newHighScore();
}




//TODO: set up localstorage to hold name and score values
// LOCAL STORAGE FOR NAME AND SCORE
// localStorage.setItem("name", "userInput");
// localStorage.setItem("score", "timeLeft");



//TODO: set up clear highscores function/event listener
// WHEN CLEAR HS BUTTON IS PRESSED, LOCAL STORAGE IS CLEARED
// clearHSBtn.addEventListener("click" function() {
//     localStorage.clear();
// })











// function checkAnswer (answer) {
//     check.style.display = "block";
//     checkAns.style.display = "";

//     if (
//         questions[questionArray].answer === questions[questionArray].choices[answer])
//     { check.textContent = "right!";
//     } else {
//       check.textContent = "wrong!";
//       timeLeft -= 10;
//     }   
    
//     questionArray++;

//     if(questionArray < questions.length) {
//         runQuestions();
//     } else {
//         gameEnd();
//     }
// }


// function option0() {
//     checkAnswer(0);
// }
// function option1() {
//     checkAnswer(1);
// }
// function option2() {
//     checkAnswer(2);
// }
// function option3() {
//     checkAnswer(3);
// }

// choice0.addEventListener("click", option0);
// choice1.addEventListener("click", option1);
// choice2.addEventListener("click", option2);
// choice3.addEventListener("click", option3);

// function gameEnd () {
//     questionContainer.style.display = "none";
//     game.style.display = "block";
//     finalScore.textContent = "Your final score is " + timeLeft + ".";
//     clearInterval(timeInterval);
// }