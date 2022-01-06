# HW4-CodingQuiz

## Description

My motivation to build this Code Quiz was to test my skills in HTML, CSS, and JavaScript. I also wanted to provide the user with a responsive and kind-of fun application to test their coding knowledge.

I built this site to ask the user 5 unique multiple-choice quiz questions within 60 seconds. If the user selects the correct choice, a box appears that says "right!", and they move on to the next question. If the user selects an incorrect choice, the same box will say "wrong!", they move on to the next question, and their timer will be penalized by 10 seconds. The user receives a score at the end of the quiz, which is just the amount of time they had remaining when they answered the last question. NOTE: The score cannot be lower than 0. For example: if the user has 9 seconds remaining and chooses an incorrect answer on the final question, the final score will not be -1. 

My skills in HTML and CSS were definitely improved with this project. I had a much easier time working on the visual and creative elements, rather than the technical and "behind-the-scenes" elements. I spent a lot of time styling this site to look good with the favicon I selected. I'm really happy with the flexboxes, hover effects, color scheme, button styling, etc. I know I need to study JavaScript units to gain a better understanding of localStorage, functions, etc. as I was not able to get my quiz functioning as intended. I plan to start over on my JavaScript file once my knowledge of its usage improves.


## Usage 

User needs to load page. Then, user needs to click "Start Quiz" button to start the quiz. Then, a question and multiple-choice button container will appear. User will need to click on a specific button to select their answer. Depending on question being right or wrong, box will appear telling user "right!" or "wrong!". Next question will populate on the page, user will again select an answer. User will be asked a total of 5 questions. Once user has completed quiz, or timer runs out, a new box, "All Done!" will appear. "All Done!" box will display user's final score, as well as a form where user will submit their initials. User will type initials in form and click "submit" button. (the following usage is not currently working)... Once submit button is clicked, page will load "Highscores" page. User's most recent score/initial combination will be stored, along with any previous score/initial submissions. If user selects "View Highscores" in corner, "Highscores" page will show any scores stored in the local storage.

![gif of coding quiz in action](https://github.com/sabhanson/HW4-codeQuiz/blob/main/assets/CodingQuiz.gif)

## Badges

![GitHub followers](https://img.shields.io/github/followers/sabhanson?style=social)
