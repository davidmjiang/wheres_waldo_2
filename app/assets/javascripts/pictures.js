$(document).ready(function() {
  APP.waldo.init();
  APP.game.init();
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

  var getChosenCharacters = function(){
    return chosenCharacters;
  }

  var init = function() {
    setClickListeners();
    setHoverListeners();
    setListListener();
    APP.ajax.getAllTags();
  }

  var setClickListeners = function() {
    $('img').on("click", onClick);
    $('#image-container').on("click", ".delete-tag", onDelete);
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
    var name = $li.text();
    chosenCharacters.push(name);
    var $tag = $li.parent().parent().parent();    APP.ajax.makeTag(name, $tag.attr("data-id"));
    $tag.remove();
  }

  var onDelete = function(event){
    var name = $(event.target).parent().parent().attr("id");
    for(var i = 0; i < chosenCharacters.length; i++){
      if(chosenCharacters[i] === name){
        chosenCharacters.splice(i,1);
        break;
      }
    }
  }

  var onClick = function(event) {
    $(".active").remove();
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
    CHARACTERS.forEach(function(character) {
      if($.inArray(character, chosenCharacters) < 0){
        var $listItem = $("<li>").text(character);
        $list.append($listItem);
      }
    })
    $dropDown.append($list);
    return $dropDown;
  }

  return {
    init: init,
    placeTag: placeTag,
    getChosenCharacters: getChosenCharacters
  }


})();
