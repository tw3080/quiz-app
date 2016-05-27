$(function() {
  /*
  var questions = [{
    // Q1
      question: "三",
      choices: ["に", "さん", "ろく", "じゅう"],
      answer: 1
    },
    // Q2
    {
      question: "四",
      choices: ["し　よん", "いち", "なな　しち", "ご"],
      answer: 0
    },
    // Q3
    {
      question: "九",
      choices: ["はち", "ろく", "さん", "きゅう　く"],
      answer: 3
    },
    // Q4
    {
      question: "七",
      choices: ["いち", "し　よん", "じゅう", "なな　しち"],
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
      choices: ["さん", "じゅう", "きゅう　く", "に"],
      answer: 1
    },
    // Q7
    {
      question: "八",
      choices: ["し　よん", "ろく", "はち", "いち"],
      answer: 2
    },
    // Q8
    {
      question: "二",
      choices: ["に", "ご", "よん", "きゅう　く"],
      answer: 0
    },
    // Q9
    {
      question: "五",
      choices: ["ろく", "なな　しち", "ご", "じゅう"],
      answer: 2
    },
    // Q10
    {
      question: "六",
      choices: ["し　よん", "ろく", "いち", "さん"],
      answer: 1
    }];
  });
  */

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
});
