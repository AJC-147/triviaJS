//create an array of questions, answers;
// countdown clock function that triggers gameover();
// start button function to begin the countdown clock and display the questions;
// game over function when clock is 0, checks correct answers and displays them;

var questions = [
   {question: "Which critically acclaimed sitcom was dubbed 'a show about nothing'?",
choices: ["Cheers", "Arrested Development", "Friends", "Seinfeld"],
answer: "Seinfeld"
}, {question: "How many licks does it take to get to the center of a tootsie pop? (averaged from 20 volunteers in a Purdue University study)",
choices: ["4", "365", "960", "252"],
answer: "252"
},{question: "Who was elected U.S. President after Richard Nixon? <span class='notice'>(think hard)</span>",
choices: ["Jimmy Carter", "Ronald Reagan", "Gerald Ford", "Lyndon B. Johnson"],
answer: "Jimmy Carter"
}, {question: "Which is not an Unforgivable Curse in the Wizarding World of Harry Potter?",
choices: ["Imperio", "Avada Kedavra", "Sectumsempra", "Crucio"],
answer: "Sectumsempra"
}, {question: "Which member of Led Zeppelin is no longer living?",
choices: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
answer: "John Bonham"
},
{question: "What is the capital of Wales?",
choices: ["Warsaw", "Cardiff", "Seattle", "Lisbon"],
answer: "Cardiff"
}, {question: "Who is the owner of The Washington Post?",
choices: ["Jeff Bezos", "Donald Trump", "Tim Cook", "Meryl Streep"],
answer: "Jeff Bezos"
}
]
console.log(questions)

var gameQuestion = $("#quiz-questions")

var clock;

var game = {
  right: 0,
  wrong: 0,
  time: 100,

  timer: function() {
    game.time--;
    $("#time").html(game.time);
    if (game.time === 0) {

      console.log("Times up!");
      game.gameover();
    }

  },
  start: function () {
    clock = setInterval(game.timer, 1000);

    $("#container").prepend("<h3>Time Remaining: <div id='time'>100<div></h3>");
$("#start").remove();

  for (var i = 0; i < questions.length; i++) {
    gameQuestion.append("<h4>" + questions[i].question + "</h4>");
    for (var j = 0; j < questions[i].choices.length; j++) {

      gameQuestion.append("<label>" + "<input class='with-gap' type='radio' name='" + i +
      "' value='" + questions[i].choices[j] + "' /><span>" + questions[i].choices[j] + "</span></label>")
    }
  }
  gameQuestion.append("<br><br><button class='waves-effect waves-light btn-large' id='done'>Done</button>")
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

},

result: function() {

  clearInterval(clock);

  $("#container h2").remove();

  gameQuestion.html("<h2 id='doneAlert'>Done!</h2>");

  gameQuestion.append("<h3>Right Answers: <span id='correct'>" + this.right + "</span></h3>");
  gameQuestion.append("<h3>Wrong Answers: <span id='wrong'>" + this.wrong + "</span></h3>");
  gameQuestion.append("<h3>Unanswered: " + (questions.length - (this.wrong + this.right)) + "</h3>");

}

}

$(document).on("click", "#start", function() {
  game.start();
})

$(document).on("click", "#done", function() {
  game.gameover();
})
