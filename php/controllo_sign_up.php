<?php
   // Connessione con il DB
   $dbconn = pg_connect("host=localhost port=5432 dbname=progetto user=postgres password=ciaomondo") or die("Could not connect: " . pg_last_error());

   //Inizializzazione dati
   $errors = [];
   $data = [];
   $data['success'] = false;   

   //Controllo errori   
   if (empty($_POST['inputUsername'])) {
      //Inserimento dell'errore nella lista con il corrispondente testo di errore      
       $errors['username'] = 'Il campo username è vuoto!';
   }
   elseif(strlen($_POST['inputUsername']) < 5){ 
      $errors['username'] = 'L\'username è troppo corto!';
   }

   if (empty($_POST['inputEmailSign'])) {

       $errors['email'] = 'Il campo email è vuoto!';
   }

   if (empty($_POST['inputPasswordSign'])) {
       $errors['password'] = 'Il campo password è vuoto!';
   }
   elseif(strlen($_POST['inputPasswordSign']) < 5){
      $errors['password'] = 'La password è troppo corta!';
   }
   elseif(empty($_POST['inputPasswordConferma'])) {
       $errors['passwordConferma'] = 'Ripeti la password!';
   }
   elseif($_POST['inputPasswordConferma'] != $_POST['inputPasswordSign'] ){
      $errors['password'] = 'Le due password non coincidono!';
   }

   if (empty($_POST['countries'])) {
       $errors['countries'] = 'Inserisci una nazione!';
   }

   //In caso di eventuale di errori si interrompe
   if (empty($errors)){
      $email = $_POST['inputEmailSign'];
      $q1="select * from users where email= $1";
      $result=pg_query_params($dbconn, $q1, array($email));      
      //Controllo email esistente
      if ($line=pg_fetch_array($result, null, PGSQL_ASSOC)){
         $errors['email'] = 'Questa email è già registrata!';
      }
      else {
         //Controllo utente esistente
         $username= $_POST['inputUsername'];
         $q1="select * from users where username= $1";
         $result=pg_query_params($dbconn, $q1, array($username));
         if ($line=pg_fetch_array($result, null, PGSQL_ASSOC)){
            $errors['username'] = 'Questa username esiste già!';
         }
         else {
            //Inserimento utente nel DB
            $email = $_POST['inputEmailSign'];
            $password= $_POST['inputPasswordSign'];
            $nazione= $_POST['countries'];
            $q2= "insert into users values ($1, $2, $3, $4)";
            $resq= pg_query_params($dbconn, $q2, array($username, $email, $password, $nazione));
            pg_free_result($resq);
            if ($resq){
               $data['success'] = true;
            }
         }
         pg_free_result($result);

      }
   }

   //Inserimento errori in dati
   $data['errors'] = $errors;

   //Formattazione JSON
   echo json_encode($data);

   pg_close($dbconn);
?>
