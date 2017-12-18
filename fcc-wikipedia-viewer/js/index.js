$(document).ready(function() {
  
  $("#search_icon").click(function hey(){   
    ajax($("#search").val());
  });
  
 $("#search").keyup(function(event) {
    if (event.keyCode === 13) {
        ajax($("#search").val());
    }
});

  function ajax(term) {
    $.ajax({
      url:
        "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +
        term +"&format=json&callback=?",
      async:false,
      dataType: "json",
      success: function(response) {
        console.log(response);
        for(let i=0;i<response[1].length;i++){
          $("#output").prepend("<li class='list-group-item'><a href="+response[3][i]+">"+response[1][i]+"</a><br><span>"+response[3][i]+"</span><br><p>"+response[2][i]+"</p></li>")     
        } 
        $("#search").val("");
      },
      error: function() {
        alert("Error retrieving search results, please refresh the page");
      }
    });
  }      
});