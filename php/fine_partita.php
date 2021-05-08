<?php
     $dbconn = pg_connect("host=localhost port=5432 dbname=progetto user=postgres password=ciaomondo") or die("Could not connect: " . pg_last_error());
     $streak = $_POST["streak1"];
     $username= $_POST['username'];
     $query="select total_matches from users where username= $1";
     $result=pg_query_params($dbconn, $query, array($username));


     if (!($line=pg_fetch_array($result, null, PGSQL_ASSOC))){
          echo "errore!";                
     }
     else 
     {
          foreach ($line as $col_value)
          {
               $partite_giocate_nuovo = $col_value+1;
          }
     }
     $query="UPDATE users SET total_matches='$partite_giocate_nuovo' WHERE username='$username'";
     $result=pg_query($dbconn,$query);

     $query="select highscore from users where username= $1";
     $result=pg_query_params($dbconn, $query, array($username));

     if (!($line=pg_fetch_array($result, null, PGSQL_ASSOC))){
          echo "errore!";                
     }
     else 
     {
          foreach ($line as $col_value)
          {
               $higscore_vecchio =  $col_value;
          }
     }

     if ($streak > $higscore_vecchio)
     {
          $query="UPDATE users SET highscore='$streak' WHERE username='$username'";
          $result=pg_query($dbconn,$query);
     }
     pg_free_result($result);
     pg_close($dbconn);
     header("Location: ../menu.php");

?>
