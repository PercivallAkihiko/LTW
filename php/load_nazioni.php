<?php
     $dbconn = pg_connect("host=localhost port=5432 dbname=progetto user=postgres password=ciaomondo") or die("Could not connect: " . pg_last_error());
     $nazioni = [];

     $query="select * from nazioni ORDER BY nazione";
     $result = pg_query($query) or die('Query failed: ' . pg_last_error());
     while ($row = pg_fetch_row($result)) {
          $name = $row[0];
          $path = $row[1];
          
          $nazione = [
               "name" => $name,
               "path" => $path
          ];
          
          array_push($nazioni, $nazione);
     }
     
     pg_free_result($result);
     pg_close($dbconn);

     //CONVERSIONE LISTA IN JSON
     echo json_encode($nazioni);
?>
