//when start quiz button is clicked, first question and answer page loads
    //ADD EVENT LISTENER ON START BUTTON
        //hide main-container id. WITHIN EVENT LISTENER, CHANGE CLASS OF MAIN-CONTAINER TO DISPLAY NONE
        //show questioncontainer id. WITHIN EVENT LISTENER, CHANGE CLASS OF QUESTION CONTAINER TO DISPLAY 
    //start timer
    //populate question in title box
        //show questioncontainer id, NEED RANDOM ARRAY THAT STORES QUESTION/ANSWER COMBOS
    //populate answer in answer buttons
        //show questioncontainer id, NEED RANDOM ARRAY THAT STORES QUESTION/ANSWER COMBOS

//when question is answered correctly, alert pops up "correct"
    //RANDOM ARRAY STORES CORRECT ANSWER
    //moves on to next question
        //iteration loop to cycle through questions ++ until all have been asked
        //i = 0, i < array.length, i++
    //time is not penalized
        //i think this will happen by default.

//when question is answered incorrectly, alert pops up "wrong"
    //RANDOM ARRAY KNOWS CORRECT/INCORRECT CHOICES
    //moves on to next question
        //iteration loop
    //time is penalized by 10 seconds
        //timer function knows if wrong button is clicked, -10 sec from time left


//timer
    //starts at 60 seconds
        //counts down 1 second in real time
    //starts when 'start quiz' button is pressed
    //BUG - final score is showing as 10 seconds when the timer is displaying 20 seconds if the last question is answered incorrectly. it's like the final page is loading too quickly for the timer to subtract anything.
    //quiz ends if timer runs to 0 before all questions are answered



//ARRAY OF OBJECTS
    //QUESTIONS
    //ANSWERS
    //CORRECT ANSWER === USER SELECTION

//all done page
    //change display to visible for this class
    //timer still shown in top right
    //highscores page in top left
    //
























const startBtn = document.querySelector('#startBtn');
var timeLeft = 60;
const mainPage = document.querySelector('#codeQuiz')
var answerContainer = document.getElementById("buttonContainer");
var questionContainer = document.getElementById("questionContainer");
var questionTitle = document.getElementById("question");
var choice0 = document.getElementById("button0");
var choice1 = document.getElementById("button1");
var choice2 = document.getElementById("button2");
var choice3 = document.getElementById("button3");
var questionArray = 0;
var checkAns = document.getElementById("rightWrong");
var check = document.getElementById("check");
var timeInterval;
var game = document.getElementById("allDone");
var finalScore = document.getElementById("finalScore");

const questions = [
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
            "1. expression 1 || expression 2",
            "2. expression 1 && expression 2",
            "3. expression 1 != expression 2",
            "4. expression 1 == expression 2"],
        answer: "1. expression 1 || expression 2",
    },
]

startBtn.addEventListener("click", function () {
    var timerEl = document.getElementById("timer");
    mainPage.style.display = "none";
    questionContainer.style.display = "block";

  
    function countdown() {
      timeInterval = setInterval(timer, 1000);
  
      function timer() {
        timeLeft -= 1;
        timerEl.textContent = "Time: " + timeLeft + " sec";
  
        if (timeleft <= 0 || timeLeft === 0) {
          clearInterval(timeInterval);
        }
      }
    }
  
    countdown();
    runQuestions();
  });
  
  function runQuestions() {
    questionTitle.textContent = questions[questionArray].question;
    choice0.textContent = questions[questionArray].choices[0];
    choice1.textContent = questions[questionArray].choices[1];
    choice2.textContent = questions[questionArray].choices[2];
    choice3.textContent = questions[questionArray].choices[3];
  }



function checkAnswer (answer) {
    check.style.display = "block";
    checkAns.style.display = "";

    if (
        questions[questionArray].answer === questions[questionArray].choices[answer])
    { check.textContent = "right!";
    } else {
      check.textContent = "wrong!";
      timeLeft -= 10;
    }   
    
    questionArray++;

    if(questionArray < questions.length) {
        runQuestions();
    } else {
        gameEnd();
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

function gameEnd () {
    questionContainer.style.display = "none";
    game.style.display = "block";
    finalScore.textContent = "Your final score is " + timeLeft + ".";
    clearInterval(timeInterval);
}