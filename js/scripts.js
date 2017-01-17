
$(document).ready(function () {
  $("form#suggestedTrack").submit(function(event) {
    $("#results").show();
    $("#suggestedTrack").hide();

    var q1 = parseInt($("input:radio[name=q1]:checked").val());
    var q2 = parseInt($("input:radio[name=q2]:checked").val());
    var q3 = parseInt($("input:radio[name=q3]:checked").val());
    var q4 = parseInt($("input:radio[name=q4]:checked").val());
    var q5 = parseInt($("input:radio[name=q5]:checked").val());
    var track = q1 + q2 + q3 + q4 + q5 ;
    var name = $("input#name").val();
      $(".yourName").text(name);

    if (track >= 5) {
      $(".cSharp").show();

    } else if (track >= 6 && track <= 10) {
      $(".java").show();

    } else if (track >= 11 && track <= 15) {
      $(".php").show();

    }else if (track >= 16) {
      $(".ruby").show();
    }

    event.preventDefault();
  });
});
