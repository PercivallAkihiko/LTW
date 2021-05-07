<?php
    $dbconn = pg_connect("host=localhost port=5432 dbname=progetto user=postgres password=ciaomondo") or die("Could not connect: " . pg_last_error());
    
    $query="select * from nazioni";
    $result = pg_query($query) or die('Query failed: ' . pg_last_error());
    while ($row = pg_fetch_row($result)) {
        $nazione = $row[0];
        $path = $row[1];
        echo "<option value=" .$path .">". $nazione ."</option>";
    }
?>
