$(document).ready(function () {

    var username = localStorage.getItem("username");
    var nationality = localStorage.getItem("nationality")

    if (username === null){
        window.location.href = "index.php";
    }

    document.getElementById("open_option").onclick = function() {
        option_toggle();
    };  

    document.getElementById("close_option").onclick = function() {
        option_toggle();
    };  

    document.getElementById("logout").onclick = function() {
        console.log("E' stato cliccato");
        localStorage.clear();   
        window.location.href = "index.php"; 
    };  

    document.getElementById("play").onclick = function() {
        window.location.href = "game.html";
    };  

    $.ajax ( {
        url: '../php/load_user_info.php',
        dataType: "json",
        data: jQuery.param({ username: username }),
        success: function (data) {
            document.getElementById("user_div").innerHTML = data.username;
            document.getElementById("score_div").innerHTML = data.highscore;
            document.getElementById("played_div").innerHTML = data.total_matches;
            document.getElementById("user_profile").setAttribute("src", data.nationality);
        },
        error: function (error) {
            console.log("non va");
        }
    } );
 
 });

 function option_toggle(){        
     $('.page').toggleClass('right');
    $('.option').toggleClass('left');
 };