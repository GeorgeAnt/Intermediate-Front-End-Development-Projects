$(document).ready(function() {
  var streams = [
    "Imaqtpie",
    "Nightblue3",
    "Snutzy",
    "ESL_SC2",
    "esl_csgo",
    "OgamingSC2",
    "cretetion",
    "freecodecamp",
    "storbeck",
    "habathcx",
    "RobotCaleb",
    "noobs2ninjas"
  ];

  for (i = 0; i < streams.length; i++) {
    $.ajax({
      url: "https://wind-bow.glitch.me/twitch-api/channels/" + streams[i] + "",
      success: function(data) {
        let image = data.logo;
        let name = data.display_name;
        let link = data.url;
        let chName = data.name;
        var status;
        $.getJSON(
          "https://wind-bow.glitch.me/twitch-api/streams/" + chName + "",
          function(data1) {
            var status = data1.stream === null ? "offline" : "online";
            
            $("#results").append(
              "<li class='row list list-group-item'><img class='logos col-md-4 col-xs-4' src=" +
                image +
                "><a class='name col-md-4 col-xs-4' href='" +
                link +
                "' target='blank'>" +
                name +
                "</a><p class='name col-md-4 col-xs-4'>" +
                status +
                "</p></li>"
            );
          }
        );
      },
      error: function() {
        $("#results").append(
          "<li class='row list'><img class='logos col-md-4' src='https://www.seeklogo.net/wp-content/themes/seeklogo-2017/images/not-available.jpg'><a class='name col-md-4' href='#'>Channel not found</a><p class='name col-md-4'>N/A</p></li>"
        );
      }
    });
  }

  function showAll() {
    $(".streamer").each(function() {
      $(this).show();
    });
  }

  $(".on").on("click", function() {
    $("li:has('p')").show();
    $("li:has('p'):contains('offline')").hide();
  });
  $(".off").on("click", function() {
    $("li:has('p')").show();
    $("li:has('p'):contains('online')").hide();
  });
  $(".all").on("click", function() {
    $("li:has('p')").show();
  });
});