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
    score -= timeDiff/1000
    $("#score").text("Your score: " + Math.floor(score));
  }

  var checkAllCharacters = function(){
    return APP.waldo.getChosenCharacters().length === 5;
  }

  var gameOver = function(gameLoop) {
    clearInterval(gameLoop);
  }


  return {
    init: init
  }

})()
