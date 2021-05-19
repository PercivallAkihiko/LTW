$(document).ready(function () {
    var username = localStorage.getItem("username");
  
    if (username === null){
        window.location.href = "index.php";
    }
  });