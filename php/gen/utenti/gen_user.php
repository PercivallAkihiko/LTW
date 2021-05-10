<?php
     $dbconn = pg_connect("host=localhost port=5432 dbname=progetto user=postgres password=ciaomondo") or die("Could not connect: " . pg_last_error());


     $str = file_get_contents('data.json');
     $data = json_decode($str, true);

     foreach($data as $user)
     {
        echo "USERNAME: " . $user["username"] . "</br>";
        echo "EMAIL: " . $user["email"] . "</br>";
        echo "PASSWORD: " . $user["password"] . "</br>";
        echo "TOTALE MATCHES: " . $user["total_matches"] . "</br>";
        echo "HIGHSCORE: " . $user["highscore"] . "</br>";    

        $query = "select path from nazioni ORDER BY RANDOM() LIMIT 1";
        $result = pg_query($query);
        $row = pg_fetch_row($result);
        $path = $row[0];
        pg_free_result($result);

        echo "PATH: " . $path . "</br>"; 
        echo "----------------------</br>";

        $username = $user["username"];
        $email = $user["email"];
        $password = $user["password"];
        $total_matches = $user["total_matches"];
        $highscore = $user["highscore"];

        $query = "INSERT INTO users  (username, email, password, nationality, total_matches, highscore) VALUES ('$username', '$email','$password','$path','$total_matches','$highscore')";
        $resq = pg_query($query);      
        pg_free_result($resq);
     }

     pg_close($dbconn);
?>
