<?php
     // Connessione con il DB
     $dbconn = pg_connect("host=localhost port=5432 dbname=progetto user=postgres password=ciaomondo") or die("Could not connect: " . pg_last_error());
     $users = [];
     $data = [];

     //Query per listare tutti gli utenti ordinati per HIGHSCORE
     $query="select username, nationality, total_matches, highscore, row_number() OVER (ORDER BY highscore DESC) from users ORDER BY highscore DESC";
     $result = pg_query($query) or die('Query failed: ' . pg_last_error());
     while ($row = pg_fetch_row($result)) {          
          //Recupero info del singolo utente
          $username = $row[0];
          $nationality = $row[1];
          $totale_matches = $row[2];
          $highscore = $row[3];       
          $ranking = $row[4];
                         
          $user = [
               "username" => $username,
               "nationality" => $nationality,
               "totale_matches" => $totale_matches,
               "highscore" => $highscore,
               "ranking" => $ranking
          ];
          
          //Inserimento utente nella lista utenti
          array_push($users, $user);
     }

     //Formattazione JSON
     echo json_encode($users)
?>
