<?php
     $dbconn = pg_connect("host=localhost port=5432 dbname=progetto user=postgres password=ciaomondo") or die("Could not connect: " . pg_last_error());

     $data = [];
     $username = $_GET['username'];
     
     $q1="select * from users where username= $1 ";
     $result=pg_query_params($dbconn, $q1, array($username));
     if (!($line=pg_fetch_array($result, null, PGSQL_ASSOC))){
          //user doesn't exist          
          $data['success'] = false;          
     }
     else {          
          $data['username'] = $line['username'];
          $data['total_matches'] = $line['total_matches'];
          $data['highscore'] = $line['highscore'];
          $data["nationality"] = $line['nationality'];
     }

     echo json_encode($data);
     pg_free_result($result);
     pg_close($dbconn);
?>
