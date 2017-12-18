$(document).ready(function() {
  var lat;
  var lon;
  var api;
  var unit = "c";
  var tempC, tempF;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(pos) {
      lat = pos.coords.latitude;
      lon = pos.coords.longitude;
      api =
        "https://fcc-weather-api.glitch.me/api/current?lat=" +
        lat +
        "&lon=" +
        lon +
        "";
      $.getJSON(api, function(data) {
        $("#description").html(data.weather[0].description);
        $("#icon").attr("src", data.weather[0].icon);
        $("#city").html(data.name);
        $("#country").html(data.sys.country);
        $("#temperature").html(data.main.temp);
        tempC = data.main.temp;
        tempF = tempC * 9 / 5 + 32;
        $("#wind").html(data.wind.speed);
      });
    });
    $("#convert").on("click", function() {
      if ($("#convert").html() == "Fahrenheit") {
        $("#temperature").html(tempF);
        $("#convert").html("Celsius");
        $("#unit").html("F");
      } else {
        $("#temperature").html(tempC);
        $("#convert").html("Fahrenheit");
        $("#unit").html("C");
      }
    });
  }else {
        $("#head").html("Geolocation is not supported by this browser.");
    }
});