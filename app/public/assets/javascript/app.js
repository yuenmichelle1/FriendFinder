var score = [];
var userData;

function survey() {
  $("#submit").on("click", function (event) {
    event.preventDefault();
    grabScore();
    $("#form_id").trigger("reset");
    console.log(userData);
  });
}


// validate score then push score into score array
function checkFormComplete() {
  var isComplete = true;
  $(".form-control").each(function () {
    if ($(this).val() === "") {
      isComplete = false;
    }
  });
  $("select").each(function () {
    if ($(this).val() === "") {
      isComplete = false;
    }
  });
  return isComplete;
}

//will store user's Score and make a new user
function grabScore() {
  if (checkFormComplete()) {
    $("select").each(function () {
      score.push($(this).val());
    });
    defineNewUser();
  } else {
    alert("Please answer all questions");
  }
}

function defineNewUser() {
  userData = {
    name: $("#name").val(),
    photo: $("#photo").val(),
    scores: score
  };
  postUserData();
  console.log(userData);
}

function postUserData() {
  // .post(url, data, callback)
  $.post("/api/friends", userData, function (data) {
    $("#match-name").text(data.name);
    $("#match-img").html(`<img src =${data.photo}></img>`);
    $("#results-modal").modal("toggle");
  });
}

survey();