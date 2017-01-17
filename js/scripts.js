
$(document).ready(function () {
//toggle question pages
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
  });

  $("form#suggestedTrack").submit(function(event) {
    event.preventDefault();

    var value1 = parseInt($("input:radio[name=q1]:checked").val());
    var value2 = parseInt($("input:radio[name=q2]:checked").val());
    var value3 = parseInt($("input:radio[name=q3]:checked").val());
    var value4 = parseInt($("input:radio[name=q4]:checked").val());
    var value5 = parseInt($("input:radio[name=q5]:checked").val());
    var track = q1 + q2 + q3 + q4 + q5 ;
    var name = $("input#name").val();

    $("#results").text(name);

    if (track >= 5) {
      $("#cSharp").show();

    } else if (track >= 6 && track <= 10) {
      $("#java").show();

    } else if (track >= 11 && track <= 15) {
      $("#php").show();

    }else if (track >= 16) {
      $("#ruby").show();
    }
  });
});
