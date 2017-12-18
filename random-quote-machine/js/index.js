$(document).ready(function() {
  var api="https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?"
  $("#getQuote").click(function(){
    $(".btn-group").effect("shake",{times:2}, 1000 ,"up" );
    $.getJSON(api, function getQuote(data) {
      $(".quote").html(data.quoteText +"<br>"+"-"+data.quoteAuthor);  
    });
  });
$("#tweetOut").click(function(){   
      window.open("https://twitter.com/intent/tweet?text="+$(".quote").text());
    }); 
});