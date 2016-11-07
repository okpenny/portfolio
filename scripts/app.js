$(document).ready(function() {
  var $menu = $("#sidebar-wrapper");

  $(document)
    .on("click", ".js-menu-open", function() {
      $menu.addClass("open");

      return false;
    })
    .on("click", ".js-menu-close", function() {
      $menu.removeClass("open");

      return false;
    });

  getWeather();

  function getWeather() {
    $.ajax({
      url : "http://api.wunderground.com/api/c0391ed882a08ecb/geolookup/conditions/q/76107.json",
      dataType : "jsonp",
      success : function(parsed_json) {
        var conditions = parsed_json.current_observation.weather;
        loadImage(conditions);
      }
    });
  }

  function getTimeOfDay() {
    var time = new Date();
    var hours = time.getHours();
    var timeOfDay;

    if(hours > 17) {
      timeOfDay = "night";
    } else if (hours > 12) {
      timeOfDay = "afternoon";
    } else {
      timeOfDay = "morning";
    }

    return timeOfDay;
  }

  function loadImage(conditions) {
    var imageSRC = "img/weather/hero-"
    var validConditions = ["clear", "cloudy", "rain", "snow"];
    var timeOfDay = getTimeOfDay();
    conditions = conditions.toLowerCase();

    if (validConditions.indexOf(conditions) == -1) {
      conditions = "cloudy";
    }

    imageSRC = imageSRC + conditions + "-" + timeOfDay + ".jpg";
    $("#intro").css("background-image", "url("+ imageSRC + ")");
  }

});
