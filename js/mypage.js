$(document).ready(function () {
    $('#header').fadeIn(1000).removeClass('hidden');
    $('#skill').fadeIn(1500).removeClass('hidden');
    $('#btn1').fadeIn(2000).removeClass('hidden');
	
});

window.onscroll = function() {myFunction()};
var flag=false;
var flag2=false;

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  console.log(winScroll,"@",height)
  if(winScroll>1850&&winScroll<2540&&flag==false){
  	flag2=true;
  	$("#htm").addClass("html");
  	$("#cs").addClass("css");
  	$("#java").addClass("java");
  	$("#jqe").addClass("jquery");
    $("#php").addClass("phP");
  }else if(winScroll>2540 || winScroll<1050){
  	
  	flag2=false;
  	$("#htm").removeClass("html");
  	$("#cs").removeClass("css");
  	$("#java").removeClass("java");
  	$("#jqe").removeClass("jquery");
    $("#php").removeClass("phP");
  }
  
  if(winScroll>2140&&winScroll<2540&&flag==false){
  	flag=true;
  	$("#workparent").addClass("animatedParent");
  	if($("#workparent").addClass("animateOnce")){
  		flag=false;
  	}
  	$("#workparent button").addClass("animated bounceInDown");

  }else if (winScroll>2540 || winScroll<2140) {
  	flag=false;
  	$("#workparent").removeClass("animatedParent");
  	$("#workparent button").removeClass("animated bounceInDown");

  }



}