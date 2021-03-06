<!DOCTYPE html>
<html lang="it">
<head>
  <title>SpotMe</title>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&amp;display=swap" rel="stylesheet">
  <!-- ICONE -->
  <script src="https://kit.fontawesome.com/63209a46b9.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" type="text/css" href="css/mainstyle.css">

  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
  <script type="text/javascript" src="/js/vue.js"></script>
  <script src="/js/index.js"></script>
</head>
  <body>
      <!-- ALERT REGISTRAZIONE -->
      <div class="shadow shadowUp" id="shadow">
        <div class="alert">
          <div class="alertContainer">
            <div class="alertTop">
              <div class="circleWrapper"><i class="fas fa-check circle"></i></div>
            </div>
            <div class="alertTitle">Awesome</div>
            <div class="alertText">La tua registrazione è completa, puoi effettuare il login</div>
            <div class="btn-alert" id="btn-alert">OK</div>
          </div>
          <div class="fakeBack">
            <div class="back1"></div>
            <div class="back2"></div>
          </div>
        </div>
      </div>
      <!-- BACKGROUND VIDEO -->
      <video autoplay muted loop id="background" class="background">
        <source src="assets/background.mp4" type="video/mp4">
      </video>
      <!-- WRAPPER PAGINA -->
      <div class="wrapper">
          <!-- TOPBAR -->
          <div class="top_bar">
            <div class="top_bar_wrapper">
              <div class="logo" onclick="window.location.href = 'index.php';">
                  <img src="assets/logo.png">
                  <testo_logo> SPOTME </testo_logo>
              </div>
              <div class="menu">
                  <a href="tutorial.html">TUTORIAL</a>
                  <a href="ranking.html">RANKING</a>
                  <a class="switchButton">SIGN UP</a>
                  <a class="switchButton moveUp">LOGIN</a>
              </div>
            </div>
          </div>
          <!-- CONTENUTO PAGINA -->
          <div class="page">
            <div class="front">
              <div class="front_wrapper">
                <div class="text-area">
                  <h1>SPOTME</h1>
                  <line></line>
                  <div class="ciao">Spotme è un gioco per Browser di scoperta geografica che richiede ai giocatori di indovinare la posizione nel mondo usando gli indizi visibili.
                    All'utente viene mostrata una foto a 360°, scelta a mano da Google Street View, che ritrae luoghi famosi nelle città come monumenti, attrazioni e location
                    di rilievo. Il giocatore ha a disposizione tre vite e utilizzando la propria padronanza geografica dovrà rispondere attraverso quattro scelte possibili.
                  </div>
                  <div class="btn-tutorial" onclick="window.location.href = 'tutorial.html';">
                    Tutorial
                  </div>
                </div>
                <!-- ZONA LOGIN -->
                <div class="login" id="login">
                  <form method="POST" class="login_content" id="loginForm">
                    <loginTop>Accedi</loginTop>
                    <div class="login_error" id="login_error">
                        <i class="fas fa-exclamation-triangle"></i>
                        Username o password non corretti!
                    </div>
                    <div class="inputbox">
                      <i class="fas fa-envelope"></i>
                      <input type="email" placeholder="Email" class="txt" name="inputEmail" id="inputEmail">
                    </div>
                    <div class="inputbox">
                      <i class="fas fa-lock"></i>
                      <input type="password" placeholder="Password" class="txt" name="inputPassword" id="inputPassword">
                    </div>
                    <input type="submit" value="Login" class="btn-login" name="loginButton" id="loginbutton">
                    <iconwrapper>
                      <i class="fab fa-facebook-f"></i>
                      <i class="fab fa-twitter"></i>
                      <i class="fab fa-instagram"></i>
                    </iconwrapper>
                  </form>
                </div>
                <!-- ZONA SIGN UP -->
                <div class="sign_up moveLeft" id="sign_up">
                  <form method="post" class="sign_up_content" id="sign_upForm">
                    <sign-upTop>Registrati</sign-upTop>
                    <div class="inputbox" id="inputUsernameWrapper">
                      <i class="fas fa-user"></i>
                      <input type="string" placeholder="Username" class="txt" name="inputUsername" id="inputUsername">
                    </div>
                    <div class="inputbox" id="inputEmailSignWrapper">
                      <i class="fas fa-envelope"></i>
                      <input type="email" placeholder="Email" class="txt" name="inputEmailSign" id="inputEmailSign">
                    </div>
                    <div class="inputbox" id="inputPasswordWrapper">
                      <i class="fas fa-lock"></i>
                      <input type="password" placeholder="Password" class="txt" name="inputPasswordSign" id="inputPasswordSign">
                    </div>
                    <div class="inputbox" id="inputPasswordConfermaWrapper">
                      <i class="fas fa-lock"></i>
                      <input type="password" placeholder="Ripeti Password" class="txt" name="inputPasswordConferma" id="inputPasswordConferma">
                    </div>
                    <div class="nazione">
                      <div class="inputbox" id="countriesWrapper">
                        <i class="fas fa-globe"></i>
                        <div class="scelta" id="app">
                        <select name="countries" id="countries" class="icon-menu">
                            <option value="" disabled selected class="naz">Nazione</option>
                            <!-- CARICO LE NAZIONI PRESE DAL DATABASE CON VUE -->
                            <option v-for="nazione in nazioni" v-bind:value="nazione.path">{{nazione.name}}</option>
                        </select>
                      </div>
                    </div>
                  </div>

                    <input type="submit" value="Signup" class="btn-sign_up" name="sign_upButton" id="signup">
                    <iconwrapper>
                      <i class="fab fa-facebook-f"></i>
                      <i class="fab fa-twitter"></i>
                      <i class="fab fa-instagram"></i>
                    </iconwrapper>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
  </body>
</html>
