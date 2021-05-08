<?php
     $dbconn = pg_connect("host=localhost port=5432 dbname=progetto user=postgres password=ciaomondo") or die("Could not connect: " . pg_last_error());

     $username = $_POST["inputUsername"];
     $risultato= $_POST['inputRisultato'];
     
     $q1="select highscore from users where username= $1";
     $result=pg_query_params($dbconn, $q1, array($email, $password));
     if (!($line=pg_fetch_array($result, null, PGSQL_ASSOC))){
          //user doesn't exist          
          $data['success'] = false;          
     }

     else {
          //login successful
          $data['success'] = true;
          $user['username'] = $line['username'];
          $user['password'] = $line['password'];
          $user['nationality'] = $line['nationality'];
     }

     $data['user'] = $user;
     echo json_encode($data);
?>
