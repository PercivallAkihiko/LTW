<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700&amp;display=swap" rel="stylesheet">
        <script src="https://kit.fontawesome.com/63209a46b9.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" type="text/css" href="css/menu.css">
        <title>Menu</title>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
        <script src="/js/menu.js"></script>
    </head>
    <body>
        <video autoplay muted loop id="background" class="background">
            <source src="assets/background.mp4" type="video/mp4">
        </video>
        <div class="page">
            <div class="top_bar">
                <div class="top_bar_wrapper">
                <div class="logo" onclick="window.location.href = 'index.php';">
                    <img src="assets/logo.png">
                    <testo_logo> SPOTME </testo_logo>
                </div>
                <div class="menu">
                    <a href="tutorial.html">TUTORIAL</a>
                    <a href="ranking.html">RANKING</a>
                    <a id="open_option">PROFILO</a>
                    <div class="logout" id="logout">LOGOUT</div>
                </div>
                </div>
            </div>                      
            <div class="play" id="play">
                PLAY
            </div>
        </div>
        <div class="option left">
            <i class="fas fa-chevron-left" id="close_option"></i>
            <div class="option_wrapper">
                <img src="assets/flags/italia.png" id="user_profile">
                <div class="user_div" id="user_div">USERNAME</div>
            </div>
        </div>
    </body>
</html>