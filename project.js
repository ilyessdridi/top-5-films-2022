$(".btnAction").click(function(){
    $("#horror").hide();
    $("#romantic").hide();
    $("#action").show() ; 
  });
  $(".btnRomantic").click(function(){
    $("#horror").hide();
    $("#action").hide();
    $("#romantic").show()
  });
  $(".btnHorror").click(function(){
    $("#action").hide();
    $("#romantic").hide() ; 
    $("#horror").show() ; 
  }); 




