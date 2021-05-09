$(document).ready(function () {
    var username = localStorage.getItem("username");
    var nationality = localStorage.getItem("nationality")
  
    if (username === null){
        window.location.href = "index.php";
    }
  });