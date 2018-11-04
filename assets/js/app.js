//create an array of questions, answers;
countdown clock function that triggers gameover();
start button function to begin the countdown clock and display the questions;
game over function when clock is 0, checks correct answers and displays them;

var questions = [
  {question: "What is the capital of Wales?",
  choices: ["Warsaw", "Cardiff", "Seattle", "Lisbon"],
  answer: "Cardiff"
}, {question: "What is the capital of Wales?",
choices: ["Warsaw", "Cardiff", "Seattle", "Lisbon"],
answer: "Cardiff"
}, {question: "What is the capital of Wales?",
choices: ["Warsaw", "Cardiff", "Seattle", "Lisbon"],
answer: "Cardiff"
}, {question: "What is the capital of Wales?",
choices: ["Warsaw", "Cardiff", "Seattle", "Lisbon"],
answer: "Cardiff"
}, {question: "What is the capital of Wales?",
choices: ["Warsaw", "Cardiff", "Seattle", "Lisbon"],
answer: "Cardiff"
}, {question: "What is the capital of Wales?",
choices: ["Warsaw", "Cardiff", "Seattle", "Lisbon"],
answer: "Cardiff"
}, {question: "What is the capital of Wales?",
choices: ["Warsaw", "Cardiff", "Seattle", "Lisbon"],
answer: "Cardiff"
}, {question: "What is the capital of Wales?",
choices: ["Warsaw", "Cardiff", "Seattle", "Lisbon"],
answer: "Cardiff"
}
]

var gameQuestion = $("game-question")

var clock;

var game = {
  right: 0,
  wrong: 0,
  time: 100,

  timer: function() {
    game.time--;
    $"#counter-number").html(game.time);
    if (game.time === 0) {

      console.log("Times up!");
      game.gameover();
    }

  }
  start: function () {
    clock = setInterval(game.timer, 1000);

    $("#sub-wrapper").prepend("Time Remaining: <div id='counter-number'>100<div> Seconds");
$("$start").remove();

  for (var i = 0; i < question.length; i++) {
    gameQuestion.append(questions[i].question);
    for (var j = 0; j < questions[i].answers.length; j++) {

      gameQuestion.append("<input type='radio' name='" + i +
      "' value='" + questions[i].answers[j] + "'>" + questions[i].answers[j])
    }
  }
  gameQuestion.append("<button id='submit'>Done</button>")
},

gameover: function() {

for (var k = 0; k < questions.length; k++) {

  $.each($("input[name='" + [k] + "']:checked"), function () {
    if ($(this).val() === questions[k].answer) {
      game.right++;
    }
    else {
      game.wrong++;
    }
  })

}

this.result();

}

result: function() {


}

}
