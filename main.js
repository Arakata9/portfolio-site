
var blackCircle = document.getElementById("circle");

var h= $(window).height();
var w= $(window).width();

var nameH = $("#name").height();


$("#name").css({"top":h-nameH,  "color": "#333"});

window.addEventListener("load",function(){
  if(h<w){$(".gif").css({"width":w})};
  if(w<h){$(".gif").css({"height":h})};

  $("#circle").animate({"top":h-nameH*0.81},2000,"swing");
  setTimeout(function(){$("#name").fadeIn(800);},2000);
  setTimeout(function(){$("#circle").hide();},2800);
  setTimeout(function(){$(".top span").fadeIn(800);},3000);
  setTimeout(function(){$(".gif").fadeIn(800);},3800);

  setTimeout(function(){$("#name").css({"color": "#eee"});},4000);
  setTimeout(function(){$(".top span").css({"color": "#eee"});},4000);

  setTimeout(function(){$("#name").fadeOut(500)},6000);
  setTimeout(function(){$(".top span").fadeOut(500)},6000);
  setTimeout(function(){$(".gif").attr("src","images/yellowBox.gif")},20000);




})
