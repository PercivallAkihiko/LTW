<?php
   $dbconn = pg_connect("host=localhost port=5432 dbname=progetto user=postgres password=ciaomondo") or die("Could not connect: " . pg_last_error());

   $errors = [];
   $data = [];
   $data['success'] = false;

   if (empty($_POST['inputUsername'])) {
       $errors['username'] = 'Il campo username è vuoto!';
   }

   if (empty($_POST['inputEmailSign'])) {
       $errors['email'] = 'Il campo email è vuoto!';
   }

   if (empty($_POST['inputPasswordSign'])) {
       $errors['password'] = 'Il campo password è vuoto!';
   }
   elseif(empty($_POST['inputPasswordConferma'])) {
       $errors['passwordConferma'] = 'Ripeti la password!';
   }
   elseif($_POST['inputPasswordConferma'] != $_POST['inputPasswordSign'] ){
      $errors['password'] = 'Le due password non coincidono!';
   }

   if ($_POST['countries'] == "") {
       $errors['countries'] = 'Inserisci una nazione!';
   }

   if (empty($errors)){
      $email = $_POST['inputEmailSign'];
      $q1="select * from users where email= $1";
      $result=pg_query_params($dbconn, $q1, array($email));
      if ($line=pg_fetch_array($result, null, PGSQL_ASSOC)){
         $errors['email'] = 'Questa email è già registrata!';
      }

      else {
         $username= $_POST['inputUsername'];
         $q1="select * from users where username= $1";
         $result=pg_query_params($dbconn, $q1, array($username));
         if ($line=pg_fetch_array($result, null, PGSQL_ASSOC)){
            $errors['username'] = 'Questa username esiste già!';
         }
         else {
            $email = $_POST['inputEmailSign'];
            $password= $_POST['inputPasswordSign'];
            $nazione= $_POST['countries'];
            $q2= "insert into users values ($1, $2, $3, $4)";
            $resq= pg_query_params($dbconn, $q2, array($username, $email, $password, $nazione));
            if ($resq){
               $data['success'] = true;
            }
         }

      }
   }

   $data['errors'] = $errors;
   echo json_encode($data);
   pg_free_result($result);
   pg_close($dbconn);
?>
