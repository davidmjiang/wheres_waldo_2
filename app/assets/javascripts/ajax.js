var APP = APP || {}



APP.ajax = (function() {

  var makeTag = function(name, tag) {
    var coords = tag.split("-");
    var x = coords[0];
    var y = coords[1];
    $.ajax({
      url: '/tags',
      type: "POST",
      data: {
        tag: {
          name: name,
          x: x,
          y: y
        }
      },
      dataType: "script"
    });
  }

  var getAllTags = function() {
    $.ajax({
      url: '/tags',
      type: "GET",
      dataType: "script",
      success: function(){APP.waldo.clearTags();}
    });
  }

  var makeScore = function(name, score, pictureId) {
    $.ajax({
      url: pictureId + '/scores',
      type: "POST",
      data: {
        score: {
          name: name,
          points: score
        }
      },
      dataType: "script"
    });
  }



  return {
    makeTag: makeTag,
    getAllTags: getAllTags,
    makeScore: makeScore
  }

})();
