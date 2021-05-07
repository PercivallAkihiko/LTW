$(document).ready(function () {

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
          localStorage.setItem("nationality", data.user.nationality);      
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
         document.querySelectorAll('.error').forEach(e => e.remove());
         console.log("registrazione partita");
         console.log(data);

         if (!data.success){
            if (data.errors.username) {
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
            toggle();
            $('.shadow').toggleClass('shadowUp');    
            document.getElementById("login_error").style.display = "none";        
            $("#sign_upForm")[0].reset();
         }
      })
      .fail(function (data) {
        console.log("Registrazione fallata");
      });
    event.preventDefault();
  });


});

function toggle(){
   $('.login').toggleClass('moveLeft');
   $('.sign_up').toggleClass('moveLeft');
   $('.switchButton').toggleClass('moveUp');
};