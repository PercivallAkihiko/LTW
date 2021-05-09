$(document).ready(function () {

    var username = localStorage.getItem("username");
    var nationality = localStorage.getItem("nationality")

    if (username === null){
        window.location.href = "index.php";
    }
    else{
        console.log(username);
        document.getElementById("username").innerHTML = username;
        document.getElementById("user_div").innerHTML = username;
        document.getElementById("user_profile").setAttribute("src", nationality);
    }

    document.getElementById("open_option").onclick = function() {
        option_toggle();
    };  

    document.getElementById("close_option").onclick = function() {
        option_toggle();
    };  

    document.getElementById("logout").onclick = function() {
        localStorage.clear();   
        window.location.href = "index.php"; 
    };  

    document.getElementById("play").onclick = function() {
        window.location.href = "game.html";
    };  
 
 });

 function option_toggle(){        
     $('.menu').toggleClass('right');
    $('.option').toggleClass('left');
 };