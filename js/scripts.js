$(document).ready(function () {
  $("#toName").click(function() {
    $("#intro").toggle();
    $("#nameExp").toggle();
  });
  $("#toQ1").click(function() {
    $("#nameExp").toggle();
    $("#question1").toggle();
  });
  $("#toQ2").click(function() {
    $("#question1").toggle();
    $("#question2").toggle();
  });
  $("#toQ3").click(function() {
    $("#question2").toggle();
    $("#question3").toggle();
  });
  $("#toQ4").click(function() {
    $("#question3").toggle();
    $("#question4").toggle();
  });
  $("#toQ5").click(function() {
    $("#question4").toggle();
    $("#question5").toggle();
  });
  $("#toResults").click(function() {
    $("#question5").toggle();
    $("#results").toggle();
  })
});
