var APP = APP || {}


APP.game = (function() {

  var clock
  var score

  var init = function() {
    clock = Time.now();
    score = 1000;
    gameLoop();
  }

  var gameLoop = setInterval(function() {
    updateScore();
    if (score <= 0) {
      gameOver();
    }
  }, 1000)

  var updateScore = function() {
    var timeDiff = Time.now().get() - clock.get();
    score -= timeDiff/1000
  }

  var gameOver = function() {
    clearInterval(gameLoop);
  }


  return {
    init: init
  }

})()
