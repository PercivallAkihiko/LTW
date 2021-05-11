<!DOCTYPE html>
<html lang="it">
<head>
  <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>  
  <script type="text/javascript" src="/js/vue.js"></script>
  <script src="/js/index.js"></script>
  <script src="/js/ranking.js"></script>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&amp;display=swap" rel="stylesheet">
  <script src="https://kit.fontawesome.com/63209a46b9.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" type="text/css" href="css/mainstyle.css">    
  <title>SpotMe</title>  

</head>
  <body>
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
      <video autoplay muted loop id="background" class="background">
        <source src="assets/background.mp4" type="video/mp4">
      </video>
      <div class="wrapper">
          <div class="top_bar">
            <div class="top_bar_wrapper">
              <div class="logo">
                  <img src="assets/logo.png">
                  <testo_logo> SPOTME </testo_logo>
              </div>
              <div class="menu">
                  <a href="tutorial.html">TUTORIAL</a>
                  <a onClick="ranking()">RANKING</a>
                  <a class="switchButton">SIGN UP</a>
                  <a class="switchButton moveUp">LOGIN</a>
              </div>
            </div>
          </div>
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
                  <div class="btn-tutorial">
                    Tutorial
                  </div>
                </div>
                <div class="login" id="login">
                  <form action="../php/controllo_login.php" method="POST" class="login_content" id="loginForm">
                    <loginTop>Login</loginTop>
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
                    <input type="submit" value="Login" class="btn-login" name="loginButton">
                    <iconwrapper>
                      <i class="fab fa-facebook-f"></i>
                      <i class="fab fa-twitter"></i>
                      <i class="fab fa-instagram"></i>
                    </iconwrapper>
                  </form>
                </div>
                <div class="sign_up moveLeft" id="sign_up">
                  <form action="php/controllo_sign_up.php" method="post" class="sign_up_content" id="sign_upForm">
                    <sign-upTop>Sign up</sign-upTop>
                    <div class="inputbox" id="inputUsernameWrapper">
                      <i class="fas fa-user"></i>
                      <input type="string" placeholder="Username" class="txt" name="inputUsername" id="inputUsername">
                    </div>
                    <div class="inputbox" id="inputEmailSignWrapper">
                      <i class="fas fa-envelope"></i>
                      <input type="email" placeholder="Email" class="txt" name="inputEmail" id="inputEmailSign">
                    </div>
                    <div class="inputbox" id="inputPasswordWrapper">
                      <i class="fas fa-lock"></i>
                      <input type="password" placeholder="Password" class="txt" name="inputPassword" id="inputPasswordSign">
                    </div>
                    <div class="inputbox" id="inputPasswordConfermaWrapper">
                      <i class="fas fa-lock"></i>
                      <input type="password" placeholder="Repeat Password" class="txt" name="inputPasswordConferma" id="inputPasswordConferma">
                    </div>
                    <div class="nazione">
                      <div class="inputbox" id="countriesWrapper">
                        <i class="fas fa-globe"></i>
                        <div class="scelta" id="scelta">
                        <select name="countries" id="countries" class="icon-menu">
                            <option value="" disabled selected class="naz">Nazione</option>
                              <?php
                                $dbconn = pg_connect("host=localhost port=5432 dbname=progetto user=postgres password=ciaomondo") or die("Could not connect: " . pg_last_error());
                                
                                $query="select * from nazioni ORDER BY nazione";
                                $result = pg_query($query) or die('Query failed: ' . pg_last_error());
                                while ($row = pg_fetch_row($result)) {
                                    $nazione = $row[0];
                                    $path = $row[1];
                                    echo "<option value=" .$path .">". $nazione ."</option>";
                                }
                              ?>
                      </select>
                      </div>
                    </div>
                  </div>

                    <input type="submit" value="Signup" class="btn-sign_up" name="sign_upButton">
                    <iconwrapper>
                      <i class="fab fa-facebook-f"></i>
                      <i class="fab fa-twitter"></i>
                      <i class="fab fa-instagram"></i>
                    </iconwrapper>
                  </form>
                </div>
              </div>
            </div>
            <div id="app">
            <div class="leaders cane" id="leaders">              
              <div class="leaders_wrapper">
                <h1>Leaderboards</h1>
                <div class="leader" v-for="user in users.slice(0, 3)">
                  <div class="top_leader">                            
                    <img v-bind:src="user.nationality" class="user_profile">
                    <img v-bind:src="user.medal" class="user_medal">
                  </div>
                  <div class="username">{{user.username}}</div>
                  <div class="score">Highscore: {{user.highscore}}</div>
                  <div class="low_bar">{{user.totale_matches}}</div>
                </div>
              </div>
            </div>
            <div class="players cane">
              <div class="players_wrapper">
                <div class="player">
                  <div class="title_low">Posizione</div>
                  <div class="title_low title_center">Profilo</div>
                  <div class="title_low">Username</div>
                  <div class="title_low title_center">Highscore</div>
                  <div class="title_low title_center">Partite totali</div>
                </div>
                <div class="line"></div>
                <div class="player" v-for="user in users.slice(3, 50)">
                  <div class="position_low">#{{user.ranking}}</div>
                  <img class="user_profile_low" v-bind:src="user.nationality"></img>
                  <div class="username_low">{{user.username}}</div>
                  <div class="highscore_low">{{user.highscore}}</div>
                  <div class="total_matches_low">{{user.totale_matches}}</div>
                </div>
              </div>                              
            </div>
            </div>          
            <div class="footer">
              <div class="footer_wrapper">
                <div class="col1">Michele si inventi qualcosa per il footer...</div>
                <div class="col2">Michele si inventi qualcosa per il footer...</div>
                <div class="col3">Michele si inventi qualcosa per il footer...</div>
              </div>
            </div>
          </div>
      </div>
  </body>
</html>
