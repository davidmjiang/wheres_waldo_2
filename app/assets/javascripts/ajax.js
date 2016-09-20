var APP = APP || {}



APP.ajax = (function() {

  var makeTag = function(name, tag){
    var coords = tag.split("-");
    var x = coords[0];
    var y = coords[1];
    $.ajax({
      url: '/tags',
      type: "POST",
      data:{ tag:{
        name: name,
        x: x,
        y:y}
      },
      dataType: "script"
    });
  }
return{
  makeTag: makeTag
}

})();
