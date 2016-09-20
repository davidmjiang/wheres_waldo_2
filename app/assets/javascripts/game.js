var APP = APP || {}


APP.game = (function() {

  var score;

  var init = function() {
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
    score -= 1;
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

  var checkAccuracy = function(name, coords){
    name = name.replace(/\s/, '-');
   if($('meta[name=' + name + ']').length){
      var c = coords.split("-");
      var realX = $('meta[name=' + name + ']').attr("x");
      var realY = $('meta[name=' + name + ']').attr("y");
      var distance = Math.sqrt(Math.pow((realX - c[0]),2) + Math.pow((realY - c[1]),2))
      score += (1000/distance);
    }
  }

  var getHighScore = function() {
    var highScore = $('meta[class="score"]').last().attr("score")
    return parseInt(highScore);
  }


  return {
    init: init,
    checkAccuracy: checkAccuracy
  }

})()
