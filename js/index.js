$(document).ready(function () {

   var username = localStorage.getItem("username");
   var nationality = localStorage.getItem("nationality")
   document.getElementById("inputEmail").focus();
   document.getElementById("inputUsername").disabled = true;
   document.getElementById("inputEmailSign").disabled = true;
   document.getElementById("inputPasswordSign").disabled = true;
   document.getElementById("inputPasswordConferma").disabled = true;
   document.getElementById("countries").disabled = true;
   document.getElementById("signup").disabled = true;   

   if (username !== null){
       window.location.href = "menu.php";
   }

   //BOTTONE ALERT
   document.getElementById("btn-alert").onclick = function() {
      console.log("ok has been clicked");     
      $('.shadow').toggleClass('shadowUp');
  };

  $(".switchButton").click(function() {
     toggle();   
   });

  $("#loginForm").submit(function (event) {
    console.log("Submit has been clicked!");


    var email = $("#inputEmail").val();
    var password = $("#inputPassword").val();

    $.ajax({
      type: "POST",
      url: "../php/controllo_login.php",
      data: {
         'inputEmail':email,
         'inputPassword':password
      },
      dataType: "json",
      encode: true,
    })
      .done(function (data) {
        console.log(data);
        if(data.success){
          console.log("login successful");
          localStorage.setItem("username", data.user.username);     
          window.location.href = "menu.php";
        }
        else{
          document.getElementById("login_error").style.display = "block";
          console.log("login not successful");
        }
      })
      .fail(function (data) {
        console.log("Something is wrong...");
        console.log(data);
      });
    event.preventDefault();
  });

  $("#sign_upForm").submit(function (event) {
    console.log("REGISTER has been clicked!");

    var username = $("#inputUsername").val();
    var email = $("#inputEmailSign").val();
    var password = $("#inputPasswordSign").val();
    var passwordConferma = $("#inputPasswordConferma").val();
    var country = $("#countries").val();

    $.ajax({
      type: "POST",
      url: "../php/controllo_sign_up.php",
      data: {
         'inputUsername':username,
         'inputEmailSign':email,
         'inputPasswordSign':password,
         'inputPasswordConferma':passwordConferma,
         'countries':country
      },
      dataType: "json",
      encode: true,
    })
      .done(function (data) {
         //RIMUOVE TUTTI I PRECEDENTI ERRORI
         document.querySelectorAll('.error').forEach(e => e.remove());
         console.log("registrazione partita");
         console.log(data);

         if (!data.success){
            if (data.errors.username) {
               //APPENDO PRIMA DI inputUsernameWrapper LA DIV CON IL MESSAGGIO
               $("#inputUsernameWrapper").prepend(
                  '<div class="error signUpError"><i class="fas fa-exclamation-triangle"></i>  ' + data.errors.username + "</div>"
               );
            }

            if (data.errors.email) {
               $("#inputEmailSignWrapper").prepend(
                  '<div class="error signUpError"><i class="fas fa-exclamation-triangle"></i>  ' + data.errors.email + "</div>"
               );
            }

            if (data.errors.password) {
               $("#inputPasswordWrapper").prepend(
                  '<div class="error signUpError"><i class="fas fa-exclamation-triangle"></i>  ' + data.errors.password + "</div>"
               );
            }

            if (data.errors.passwordConferma) {
               $("#inputPasswordConfermaWrapper").prepend(
                  '<div class="error signUpError"><i class="fas fa-exclamation-triangle"></i>  ' + data.errors.passwordConferma + "</div>"
               );
            }

            if (data.errors.countries) {
               $("#countriesWrapper").prepend(
                  '<div class="error signUpError"><i class="fas fa-exclamation-triangle"></i>  ' + data.errors.countries + "</div>"
               );
            }
         }
         else
         {
            console.log("Registrazione avvenuta con successo");
            //PASSAGGIO SIGN UP A LOGIN
            toggle();

            //ABBASSAMENTO ALERT DI SIGN UP
            $('.shadow').toggleClass('shadowUp');    
            //RIMOZIONE EVENTUALE ERRORE SU LOGIN
            document.getElementById("login_error").style.display = "none";        
            $("#sign_upForm")[0].reset();
         }
      })
      .fail(function (data) {
         console.log(data);
        console.log("Registrazione fallata");
      });
    event.preventDefault();
  });

  //VUE PER IL CARICAMENTO DELLE NAZIONI
  var app = new Vue({
   el: '#app',
   data: {
      nazioni: null
   },
   mounted: function () {
       var self = this;
       $.ajax({
           url: '../php/load_nazioni.php',
           method: 'GET',
           success: function (data) {
               self.nazioni = JSON.parse(data);
           },
           error: function (data) {
               console.log(data);
           }
       });
   }
   
   });


});

function toggle(){
   $('.login').toggleClass('moveLeft');
   $('.sign_up').toggleClass('moveLeft');
   $('.switchButton').toggleClass('moveUp');  

   if(document.getElementById("inputUsername").disabled){
      document.getElementById("inputEmail").disabled = true;
      document.getElementById("inputPassword").disabled = true;
      document.getElementById("loginbutton").disabled = true;

      document.getElementById("inputUsername").disabled = false;
      document.getElementById("inputEmailSign").disabled = false;
      document.getElementById("inputPasswordSign").disabled = false;
      document.getElementById("inputPasswordConferma").disabled = false;
      document.getElementById("countries").disabled = false;
      document.getElementById("signup").disabled = false;   
   }
   else{
      document.getElementById("inputEmail").disabled = false;
      document.getElementById("inputPassword").disabled = false;
      document.getElementById("loginbutton").disabled = false;

      document.getElementById("inputUsername").disabled = true;
      document.getElementById("inputEmailSign").disabled = true;
      document.getElementById("inputPasswordSign").disabled = true;
      document.getElementById("inputPasswordConferma").disabled = true;
      document.getElementById("countries").disabled = true;
      document.getElementById("signup").disabled = true;   
   }
};