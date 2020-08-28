$(document).ready(function () {
    $('#header').fadeIn(1500).removeClass('hidden');
    $('#skill').fadeIn(2000).removeClass('hidden');
    $('#buttonHeader button').fadeIn(2500).removeClass('hidden');
    $("#buttonHeader button").click(function () {
        var x = $("#contactDiv").position(); //gets the position of the div element...
        window.scrollTo(x.left, x.top); //window.scrollTo() scrolls the page upto certain position....
        //it takes 2 parameters : (x axis cordinate, y axis cordinate);
    });
  
});


window.onscroll = function() {myFunction()};
var flag=false;
var flag2=false;

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  console.log(winScroll,"@",height)
  if(winScroll>1030&&winScroll<2300&&flag==false){
    flag2=true;
    $("#htm").addClass("html");
    $("#cs").addClass("css");
    $("#java").addClass("java");
    $("#jqe").addClass("jquery");
    $("#php").addClass("phP");
    $("#djang").addClass("django");
  }else if(winScroll>2400 || winScroll<700){
    
    flag2=false;
    $("#htm").removeClass("html");
    $("#cs").removeClass("css");
    $("#java").removeClass("java");
    $("#jqe").removeClass("jquery");
    $("#php").removeClass("phP");
    $("#djang").removeClass("django");
  }

}