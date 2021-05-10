<?php
     $dbconn = pg_connect("host=localhost port=5432 dbname=progetto user=postgres password=ciaomondo") or die("Could not connect: " . pg_last_error());


     //$str = file_get_contents('names.json');
     //$json = json_decode($str, true);

     //echo $json[0];

     //pg_free_result($result);
     //pg_close($dbconn);


     //rename("ciao.txt", "cane.txt");

     $files = scandir("../../assets/flags");
     //$files = scandir("./flags");


     foreach(array_slice($files, 2) as $file)
     {
          if(str_contains($file, "-") and !str_contains($file, " "))
          {               
               $str = strstr($file, '-');
               $name = trim(substr($str, 1));               
               $path = "assets/flags/" . $file;               
               $name = strtok($name, '.');
               $name = ucwords($name);

               echo "NAME: " . $name . "</br>PATH: " . $path . "</br>-------------</br>";
               $query= "insert into nazioni values ($1, $2)";
               $result= pg_query_params($dbconn, $query, array($name, $path));
               pg_free_result($result);
          }
          else
          {
               echo "NO " . $file ."</br>-------------</br>";
          }
     }

     pg_close($dbconn);
?>
