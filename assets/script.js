var startButton = document.getElementById("mainButton");
var timeLeft = 60;
var mainContainer = document.getElementById("main-container");
var answerContainer = document.getElementById("buttonContainer");
var questionContainer = document.getElementById("questionContainer");
var questionTitle = document.getElementById("question");
var choice0 = document.getElementById("button0");
var choice1 = document.getElementById("button1");
var choice2 = document.getElementById("button2");
var choice3 = document.getElementById("button3");
var questionArray = 0;
var checkAns = document.getElementById("answer-check");
var check = document.getElementById("check");
var timeInterval;
var game = document.getElementById("endGame");
var finalScore = document.getElementById("finalScore");

const questions = [
    {
        question: "This is question 1",
        choices: ["1. a", "2. b", "3. c", "4. d"],
        answer: "1. a",
    },
    {
        question: "This is question 2",
        choices: ["1", "2", "3", "4"],
        answer: "2",
    },
    {
        question: "This is question 3",
        choices: ["1", "2", "3", "4"],
        answer: "3",
    },
    {
        question: "This is question 4",
        choices: ["1", "2", "3", "4"],
        answer: "4",
    },
    {
        question: "This is question 5",
        choices: ["1", "2", "3", "4"],
        answer: "1",
    },
]

startButton.addEventListener("click", function () {
    var timerEl = document.getElementById("timer");
    mainContainer.style.display = "none";
    questionContainer.style.display = "block";

  
    function countdown() {
      timeInterval = setInterval(timer, 1000);
  
      function timer() {
        timeLeft -= 1;
        timerEl.textContent = "Time: " + timeLeft + " sec";
  
        if (timeleft <= 0) {
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
    { check.textContent = "correct";
    } else {
      check.textContent = "wrong";
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
    finalScore.textContent = "Your final score is " + timeLeft + "!";
    clearInterval(timeInterval);
}