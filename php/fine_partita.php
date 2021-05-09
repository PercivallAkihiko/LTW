<?php
     $dbconn = pg_connect("host=localhost port=5432 dbname=progetto user=postgres password=ciaomondo") or die("Could not connect: " . pg_last_error());
     $streak = $_POST["streak1"];
     $username= $_POST['username'];
     $query="select * from users where username= $1";
     $result=pg_query_params($dbconn, $query, array($username));

     if (!($line=pg_fetch_array($result, null, PGSQL_ASSOC))){
          echo "errore!";                
     }
     else 
     {
          $highscore = $line['highscore'];
          $partite_giocate = $line['total_matches'] + 1;
     }

     if($streak > $highscore) $highscore = $streak;

     $query="UPDATE users SET total_matches='$partite_giocate', highscore='$highscore' WHERE username='$username'";
     $result=pg_query($dbconn,$query);

     pg_free_result($result);
     pg_close($dbconn);

     $link = $_POST['link'];
     header("location: $link");
?>
