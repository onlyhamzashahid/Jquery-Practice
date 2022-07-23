$(document).ready(function () {
  $("#button1").click(function () {
    $("#div1").fadeIn();
    $("#div2").fadeIn(1000);
    $("#div3").fadeIn(3000);
    $("#div4").fadeIn(5000);
  });
  $("#button2").click(function () {
    $("#div1").fadeOut(5000);
    $("#div2").fadeOut(3000);
    $("#div3").fadeOut(1000);
    $("#div4").fadeOut();
  });
});
