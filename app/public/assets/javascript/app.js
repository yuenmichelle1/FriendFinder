var score = [];
var userData;
function survey() {
  $("#submit").on("click", function(event) {
    event.preventDefault();
    grabScore();
    console.log(userData);
  });
}
//will store user's Score and make a new user
function grabScore() {
  if ($("select").val() === "" || $("input").val() === "") {
    alert("Need to answer all questions");
  } else {
    $("select").each(function() {
      if ($(this).val() != "") {
        score.push($(this).val());
      }
    });
    defineNewUser();
  }
}

function defineNewUser() {
  userData = {
    name: $("#name").val(),
    photo: $("#photo").val(),
    score: score
  };
  postUserData();
}

function postUserData() {
  // .post(url, data, callback)
  $.post("/api/friends", userData, function(data) {
    console.log(data);
  });
}

survey();
