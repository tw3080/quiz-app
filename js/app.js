var $ = require('jquery');

var quizApp = function() {
  $(document).ready(function() {
    // Objects
    var score = 0;
    var quiz = {
      currentQuestionIndex: 0,
      container: $('#question-box'),
      questionElement: $("#question-p"),
      progressElement: $(".progress"),
      showPage: function(id) {
          $('section.page').hide();
          $('section.page#' + id).fadeIn();
      },
      init: function() {
        this.showPage('intro');
      },
      load: function() {
        this.currentQuestionIndex = 0;
        this.showQuestion();
        this.showPage('question');
      },
      evaluateChoice: function(selectedAnswer) {
        var question = this.questions[this.currentQuestionIndex];
        var clickedButton = $('[data-choice="'+selectedAnswer+'"]');
        if (selectedAnswer === question.answer) {
          clickedButton.addClass('win');
          score++;
        } else {
          clickedButton.addClass('fail');
        }
      },
      showQuestion: function() {
        var question = this.questions[this.currentQuestionIndex];
        $(this.questionElement).text(question.question);
        for (var i = 0; i < question.choices.length; i++) {
          $('li[data-choice="' + i + '"]', this.choicesElement).text(question.choices[i]);
        }
      },
      moveForward: function() {
        var totalQuestions = quiz.questions.length;
        this.currentQuestionIndex++;
        if (this.currentQuestionIndex > totalQuestions - 1) {
          $('#results-text').html("You answered <strong>" + score + "</strong> out of <strong>10</strong> questions correctly! Click the button below to play again.");
          this.showPage('results');
          this.currentQuestionIndex = 0;
        }
        this.showQuestion();
        var progress = (this.currentQuestionIndex / totalQuestions) * 100;
        this.progressElement.css("width", progress + "%");
        $('ul.choices li').removeClass('win fail');
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
        choices: ["に", "ご", "し・よん", "きゅう・く"],
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
        quiz.load();
    });

    $("ul.choices li").click(function() {
      var choiceNumber = $(this).data("choice");
      quiz.evaluateChoice(choiceNumber);
      function questionDelay() {
        quiz.container.removeClass('show').addClass('hide');
        function questionTransition() {
          quiz.moveForward();
          quiz.container.removeClass('hide').addClass('show');
        }
        setTimeout(questionTransition, 150);
      }
      setTimeout(questionDelay, 800);
    });

    $('#new-game').click(function() {
      quiz.load();
      score = 0;
    });

    quiz.init();
  });
};

module.exports = quizApp;
