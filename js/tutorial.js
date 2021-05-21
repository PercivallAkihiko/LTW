$(document).ready(function()
{
    var username = localStorage.getItem("username");
    if (username != null)
    {
        document.getElementById("button").innerHTML = "MENU";
    }
 });