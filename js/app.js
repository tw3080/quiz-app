// TODO: add transition animations between questions

$(document).ready(function() {
  // Objects
  var quiz = {
    currentQuestionIndex: 0,
    questionElement: $("#question-p"),
    // idElement: $('[data-choice="question.answer"]'),
    buttonElement: $(".button"),
    progressElement: $(".progress"),
    choicesElement: $("ul.choices"),
    resultsElement: $("#results"),
    load: function() {
      this.showQuestion();
    },
    evaluateChoice: function(selectedAnswer) {
      /*
      TODO: 1: make correct answer background green; if selected answer is incorrect change its background color to red
      2: pause with colored buttons to show correct/incorrect answer, then switch to next
      question and make all buttons gray again
      3: fill up progress bar by 10% for each question answered
      */
      var question = this.questions[this.currentQuestionIndex];
      this.progressElement.css("background-color", "#7F7F7F");
      this.progressElement.css("width", "10%");
      if (selectedAnswer === question.answer) {
        this.idElement.css("background-color", "green");
      } else {
        this.buttonElement.css("background-color", "red");
      }
    },
    /*
    evaluateChoice: function(selectedAnswer) {
      var question = this.questions[this.currentQuestionIndex];
      if (selectedAnswer === question.answer) {
        this.resultsElement.text("Correct!");
      } else {
        this.resultsElement.text("Incorrect!");
      }
    },
    */
    showQuestion: function() {
      var question = this.questions[this.currentQuestionIndex];
      this.questionElement.text(question.question);
      for (var i = 0; i < question.choices.length; i++) {
        $('li[data-choice="' + i + '"]', this.choicesElement).text(question.choices[i]);
      }
    },
    moveForward: function() {
      var totalQuestions = quiz.questions.length;
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex > totalQuestions - 1) {
        this.currentQuestionIndex = 0;
      }
      this.showQuestion();
    }
  };

  quiz.questions = [{
      // Q1
      question: "三",
      choices: ["に", "さん", "ろく", "じゅう"],
      answer: 1
    },
      // Q2
    {
      question: "四",
      choices: ["し・よん", "いち", "なな・しち", "ご"],
      answer: 0
    },
      // Q3
    {
      question: "九",
      choices: ["はち", "ろく", "さん", "きゅう・く"],
      answer: 3
    },
      // Q4
    {
      question: "七",
      choices: ["いち", "し・よん", "じゅう", "なな・しち"],
      answer: 3
    },
      // Q5
    {
      question: "一",
      choices: ["いち", "ろく", "はち", "ご"],
      answer: 0
    },
      // Q6
    {
      question: "十",
      choices: ["さん", "じゅう", "きゅう・く", "に"],
      answer: 1
    },
      // Q7
    {
      question: "八",
      choices: ["し・よん", "ろく", "はち", "いち"],
      answer: 2
    },
      // Q8
    {
      question: "二",
      choices: ["に", "ご", "よん", "きゅう・く"],
      answer: 0
    },
      // Q9
    {
      question: "五",
      choices: ["ろく", "なな・しち", "ご", "じゅう"],
      answer: 2
    },
      // Q10
    {
      question: "六",
      choices: ["し・よん", "ろく", "いち", "さん"],
      answer: 1
  }];

  // Events
  $("#start").click(function() {
    $(this).hide();
    $("#intro-container").hide();
    $("#question-box").show();
    $("#progress-bar").show();
    quiz.load();
  });

  $("ul.choices li").click(function() {
    var choiceNumber = $(this).data("choice");
    quiz.evaluateChoice(choiceNumber);
    quiz.moveForward();
  });
});

  /*
  function hide() {
    $(this).css("display", "none");
  }

  function show() {
    $(this).css("display", "inline");
  }

  $(document).ready(function() {
    $("#start").click(function() {
      $(this).hide();
      $("#intro-container").hide();
      $("#question-1").show();
      $("#progress-bar").show();
    });
  });
  */
