//create an array of questions, answers;
// countdown clock function that triggers gameover();
// start button function to begin the countdown clock and display the questions;
// game over function when clock is 0, checks correct answers and displays them;

var questions = [
//   {question: "What is the capital of Wales?",
//   choices: ["Warsaw", "Cardiff", "Seattle", "Lisbon"],
//   answer: "Cardiff"
// }, {question: "What is the capital of Wales?",
// choices: ["Warsaw", "Cardiff", "Seattle", "Lisbon"],
// answer: "Cardiff"
// }, {question: "What is the capital of Wales?",
// choices: ["Warsaw", "Cardiff", "Seattle", "Lisbon"],
// answer: "Cardiff"
// }, {question: "What is the capital of Wales?",
// choices: ["Warsaw", "Cardiff", "Seattle", "Lisbon"],
// answer: "Cardiff"
// }, {question: "What is the capital of Wales?",
// choices: ["Warsaw", "Cardiff", "Seattle", "Lisbon"],
// answer: "Cardiff"
// }, {question: "What is the capital of Wales?",
// choices: ["Warsaw", "Cardiff", "Seattle", "Lisbon"],
// answer: "Cardiff"
// },
{question: "What is the capital of Wales?",
choices: ["Warsaw", "Cardiff", "Seattle", "Lisbon"],
answer: "Cardiff"
}, {question: "What is the capital of Wales?",
choices: ["Warsaw", "Cardiff", "Seattle", "Lisbon"],
answer: "Cardiff"
}
]
console.log(questions)

var gameQuestion = $("#quiz-area")

var clock;

var game = {
  right: 0,
  wrong: 0,
  time: 120,

  timer: function() {
    game.time--;
    $("#counter-number").html(game.time);
    if (game.time === 0) {

      console.log("Times up!");
      game.gameover();
    }

  },
  start: function () {
    clock = setInterval(game.timer, 1000);

    $("#sub-wrapper").prepend("<h2>Time Remaining: <div id='counter-number'>100<div> Seconds</h2>");
$("$start").remove();

  for (var i = 0; i < questions.length; i++) {
    gameQuestion.append("<h2>" + questions[i].question + "</h2>");
    for (var j = 0; j < questions[i].answers.length; j++) {

      gameQuestion.append("<input type='radio' name='" + i +
      "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j])
    }
  }
  gameQuestion.append("<button id='done'>Done</button>")
},

gameover: function() {

// for (var k = 0; k < questions.length; k++) {
//
//   $.each($("input[name='" + [k] + "']:checked"), function () {
//     if ($(this).val() === questions[k].answer) {
//       game.right++;
//     }
//     else {
//       game.wrong++;
//     }
//   })
//
// }

$.each($("input[name='0']:checked"), function () {
  if ($(this).val() === questions[0].answer) {
    game.right++;
  }
  else {
    game.wrong++;
  }
})

$.each($("input[name='1']:checked"), function () {
  if ($(this).val() === questions[1].answer) {
    game.right++;
  }
  else {
    game.wrong++;
  }
})

this.result();

},

result: function() {

  clearInterval(clock);

  $("#sub-wrapper h2").remove();

  gameQuestion.html("<h2>All Done!</h2>");

  gameQuestion.append("<h3>Correct Answers: " + this.right + "</h3>");
  gameQuestion.append("<h3>Incorrect Answers: " + this.wrong + "</h3>");
  gameQuestion.append("<h3>Unanswered: " + (questions.length - (this.wrong + this.right)) + "</h3>");

}

}

$(document).on("click", "#start", function() {
  game.start();
})

$(document).on("click", "#done", function() {
  game.gameover();
})
