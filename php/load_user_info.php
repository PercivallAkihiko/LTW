<?php
     // Connessione con il DB
     $dbconn = pg_connect("host=localhost port=5432 dbname=progetto user=postgres password=ciaomondo") or die("Could not connect: " . pg_last_error());

     //Inizializzazione dati
     $data = [];
     $username = $_GET['username'];
     
     //Query per il recupero delle info utente
     $q1="select * from users where username= $1 ";
     $result=pg_query_params($dbconn, $q1, array($username));
     if (!($line=pg_fetch_array($result, null, PGSQL_ASSOC))){
          //L'utente non esiste 
          $data['success'] = false;          
     }
     else {          
          //Recupero informazioni utente
          $data['username'] = $line['username'];
          $data['total_matches'] = $line['total_matches'];
          $data['highscore'] = $line['highscore'];
          $data["nationality"] = $line['nationality'];
     }

     //Formattazione JSON
     echo json_encode($data);
     pg_free_result($result);
     pg_close($dbconn);
?>
