<?php
     // Connessione con il DB
     $dbconn = pg_connect("host=localhost port=5432 dbname=progetto user=postgres password=ciaomondo") or die("Could not connect: " . pg_last_error());
     $nazioni = [];
     
     //Query per listare tutte le nazioni ordinate per ordine alfabetico
     $query="select * from nazioni ORDER BY nazione";
     $result = pg_query($query) or die('Query failed: ' . pg_last_error());
     while ($row = pg_fetch_row($result)) {
          //Recupero info della nazione
          $name = $row[0];
          $path = $row[1];
          
          $nazione = [
               "name" => $name,
               "path" => $path
          ];
          
          //Inserimento della nazione nella lista nazioni
          array_push($nazioni, $nazione);
     }
     
     pg_free_result($result);
     pg_close($dbconn);

     //Formattazione JSON
     echo json_encode($nazioni);
?>
