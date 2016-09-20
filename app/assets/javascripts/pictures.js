$(document).ready(function() {
  APP.waldo.init();
})

var APP = APP || {}


APP.waldo = (function() {

  function Placer(x, y) {
    this.x = x;
    this.y = y;
  }

  var CHARACTERS = ["Waldo", "Wenda", "Odlaw", "Wizard Whitebeard", "Woof"];

  var chosenCharacters = [];

  var WIDTH = '100';

  var init = function() {
    setClickListeners();
    setHoverListeners();
    setListListener();
    APP.ajax.getAllTags();
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
    var $tag = $li.parent().parent().parent();    APP.ajax.makeTag(name, $tag.attr("data-id"));
    $tag.remove();
  }

  var onClick = function(event) {
    var x = event.pageX;
    var y = event.pageY;
    t = new Placer(x, y)
    $tagDisplay = placeTag(t);
    $tagDisplay.append(buildDropdown());
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
      .attr("data-id", tag.x + "-" + tag.y);
    $("#image-container").append($tagDisplay);
    return $tagDisplay
  }


  var buildDropdown = function() {
    var $dropDown = $('<div>').css("background-color", "white");
    var $list = $("<ul>");
    characters.forEach(function(character) {
      var $listItem = $("<li>").text(character);
      $list.append($listItem);
    })
    $dropDown.append($list);
    return $dropDown;
  }

  return {
    init: init,
    placeTag: placeTag,

  }


})();
