
$(document).ready(function () {
//show/hide next page
  $("#toName").click(function() {
    $("#intro").hide();
    $("#nameExp").show();
  });
  $("#toQ1").click(function() {
    $("#nameExp").hide();
    $("#question1").show();
  });
  $("#toQ2").click(function() {
    $("#question1").hide();
    $("#question2").show();
  });
  $("#toQ3").click(function() {
    $("#question2").hide();
    $("#question3").show();
  });
  $("#toQ4").click(function() {
    $("#question3").hide();
    $("#question4").show();
  });
  $("#toQ5").click(function() {
    $("#question4").hide();
    $("#question5").show();
  });
  $("#toResults").click(function() {
    $("#question5").hide();
    $("#results").show();
  });

  $("form#suggestedTrack").submit(function(event) {
    event.preventDefault();

    var q1 = parseInt($("input:radio[name=q1]:checked").val());
    var q2 = parseInt($("input:radio[name=q2]:checked").val());
    var q3 = parseInt($("input:radio[name=q3]:checked").val());
    var q4 = parseInt($("input:radio[name=q4]:checked").val());
    var q5 = parseInt($("input:radio[name=q5]:checked").val());
    var track = q1 + q2 + q3 + q4 + q5 ;
    var name = $("input#name").val();

    $("#name").text(name);

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
