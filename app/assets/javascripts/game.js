var APP = APP || {}


APP.game = (function() {

  var clock;
  var score;

  var init = function() {
    clock = new Date().getTime();
    score = 1000;
    start();
  }

  var start = function(){
    var gameLoop = setInterval(function() {
      updateScore();
      if (score <= 0 || checkAllCharacters()) {
        gameOver(gameLoop);
      }
    }, 1000)
  }

  var updateScore = function() {
    var timeDiff = new Date().getTime() - clock;
    score = 1000 - timeDiff/1000;
    $("#score").text("Your score: " + Math.floor(score));
  }

  var checkAllCharacters = function(){
    return APP.waldo.getChosenCharacters().length === 5;
  }

  var gameOver = function(gameLoop) {
    clearInterval(gameLoop);
    if (score > getHighScore()){
      var name = prompt("New High Score! Please enter your name:")
      APP.ajax.makeScore(name, score, getPictureId());
    }
  }

  var getPictureId = function() {
    return $("#image-container").attr("data-id")
  }

  var getHighScore = function() {
    var highScore = $('meta[class="score"]').last().attr("score")
    return parseInt(highScore);
  }


  return {
    init: init
  }

})()
