<?php
     $dbconn = pg_connect("host=localhost port=5432 dbname=progetto user=postgres password=ciaomondo") or die("Could not connect: " . pg_last_error()); // Connessione con il DB.
     $streak = $_POST["streak1"]; // Riceve con post il punteggio ottenuto dal giocatore. 
     $username= $_POST['username']; // Riceve con post l'username grazie al LocalStorage. 
     $query="select * from users where username= $1"; // Selezioniamo l'utente dal DB.
     $result=pg_query_params($dbconn, $query, array($username)); // Esecuzione della query.

     if (!($line=pg_fetch_array($result, null, PGSQL_ASSOC))){ // In caso di errore.
          echo "errore!";                
     }
     else // Se va tutto bene.
     {
          $highscore = $line['highscore']; // Salvo la variabile highscore del DB.
          $partite_giocate = $line['total_matches'] + 1; // Aumento la variabile total_matches di 1.
     }

     if($streak > $highscore) $highscore = $streak; // Se il risultato ottenuto dal giocatore è maggiore del suo risultato salvato nel DB lo aggiorniamo.

     $query="UPDATE users SET total_matches='$partite_giocate', highscore='$highscore' WHERE username='$username'"; // Esecuzione dell'UPDATE.
     $result=pg_query($dbconn,$query); // Esecuzione della query.

     pg_free_result($result);
     pg_close($dbconn); // Terminiamo la connessione.

     $link = $_POST['link']; // Ci salviamo una variabile che viene utilizzata per reindirizzare l'utente a seconda della sua scelta.
     header("location: $link"); // Esecuzione del reindirizzamento.
?>
