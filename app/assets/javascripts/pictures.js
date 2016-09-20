$(document).ready(function() {
  APP.waldo.init();
})

var APP = APP || {}


APP.waldo = (function() {

  function Tag(x, y) {
    this.x = x;
    this.y = y;
  }

  var CHARACTERS = ["Waldo", "Wenda", "Odlaw", "Wizard Whitebeard", "Woof"];

  var WIDTH = '100';

  var init = function() {
    setClickListeners();
    setHoverListeners();
    setListListener();
  }

  var setClickListeners = function() {
    $('img').on("click", onClick);
  }

  var setListListener = function() {
    $("#image-container").on("click", ".tag li", listClick)
  }

  var setHoverListeners = function() {
    $('#image-container').mouseover(showTags);
    $('#image-container').mouseout(hideTags);
  }

  var listClick = function(event) {
    var $li = $(event.target);
    var name = $li.text()
    var $tag = $li.parentsUntil(".active");
    APP.ajax.makeTag(name, $tag.attr("data-id");
    $li.siblings().remove();
    $tag.removeClass("active");
  }

  var onClick = function(event) {
    var x = event.pageX;
    var y = event.pageY;
    t = new Tag(x, y)
    placeTag(t);
  }

  var showTags = function() {
    $(".tag").show();
  }

  var hideTags = function() {
    $(".tag").hide();
  }

  var placeTag = function(tag) {
    var $tagDisplay = $('<div>')
      .addClass("tag active")
      .css({
        left: tag.x - WIDTH / 2,
        top: tag.y - WIDTH / 2
      })
      .attr("data-id", tag.x+"-"+tag.y);
    $("#image-container").append($tagDisplay);
    var dropdown = buildDropdown();
    $tagDisplay.append(dropdown);
  }


  var buildDropdown = function() {
    var $dropDown = $('<div>').css("background-color", "white");
    var $list = $("<ul>");
    CHARACTERS.forEach(function(character) {
      var $listItem = $("<li>").text(character);
      $list.append($listItem);
    })
    $dropDown.append($list);
    return $dropDown;
  }

  return {
    init: init,

  }


})();
