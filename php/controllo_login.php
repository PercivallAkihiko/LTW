<?php
     // Connessione con il DB
     $dbconn = pg_connect("host=localhost port=5432 dbname=progetto user=postgres password=ciaomondo") or die("Could not connect: " . pg_last_error());

     //Inizializzazione dati
     $data = [];
     $user = [];
     $email = $_POST["inputEmail"];
     $password= $_POST['inputPassword'];
     
     $q1="select * from users where email= $1 and password=$2";
     $result=pg_query_params($dbconn, $q1, array($email, $password));
     if (!($line=pg_fetch_array($result, null, PGSQL_ASSOC))){
          //Login fallito        
          $data['success'] = false;          
     }

     else {
          //Login effettuato con successo
          $data['success'] = true;
          $user['username'] = $line['username'];
          $user['password'] = $line['password'];
          $user['nationality'] = $line['nationality'];
     }

     //Inserimento utenti in dati
     $data['user'] = $user;

     //Formattazzione json
     echo json_encode($data);
     pg_free_result($result);
     pg_close($dbconn);
?>
