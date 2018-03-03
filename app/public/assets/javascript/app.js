var score= [];
var userData;
function survey(){
    $("#submit").on("click", function(event){
        event.preventDefault();
    
        // grab from user data
        grabScore();
        console.log(userData);
    }) 
}

function grabScore(){
    if ($("select").val === "" || $("input").val() == "" ) {
        alert('Need to answer all questions');
    } else{
        $("select").each(function(){
            if($(this).val() != ""){
                score .push($(this).val());

            } 
        })
        defineNewUser();
    }
}

function defineNewUser() {
    userData = {
        name: $("#name").val(),
        score: score
    }
    postUserData();
}

function postUserData(){
    // .post(url, data, callback)
    $.post("/api/friends", userData, function(data){
        console.log(data);
    })
}

survey();