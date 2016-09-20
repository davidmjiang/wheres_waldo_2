

APP = APP || {}


APP.waldo = (function(){

  function Tag(x, y) {
    this.x = x;
    this.y = y;
  }

  var WIDTH = '25';

  var init = function() {

  }

  var setClickListeners = function() {
    $('img').on("click", onClick);
  }




  var onClick = function(event) {
    var x = event.pageX;
    var y = event.pageY;
    t = new Tag(x, y)
    showTag(t);
  }


  var showTag = function(tag) {
    $tagDisplay = $('<div>')
      .addClass("tag")
      .css({left: tag.x - WIDTH/2, top: tag.y - WIDTH/2})

  }

  return {
    init: init,

  }


})();


$
