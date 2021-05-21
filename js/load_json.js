function readTextFile(file, callback) // Funzione per leggere i file Json.
{
  var rawFile = new XMLHttpRequest(); // Inizializzo XMLHttpRequest per recuperare i dati.
  rawFile.overrideMimeType("application/json"); // Dico che si tratta di un file json.
  rawFile.open("GET", file, true); // Specifico il tipo di richiesta e il file.
  rawFile.onreadystatechange = function() // Un evento che si attiva quando l'attributo readyState cambia e avvia la funzione.
  {
    if (rawFile.readyState === 4 && rawFile.status == "200") // Controlla lo stato del file 4 (DONE) e status è 200 se ha caricato (HTTP).
    {
      callback(rawFile.responseText); // Da come output alla funzione esterna il testo del file.
    }
  }
  rawFile.send(null); // Ci sta qualche errore returna null.
}


var file_city; // Variabile con una lista di città (1000+).
var myQuestions; // Variabile che contiene i panorami da indovinare (foto) e la posizione di tale foto.
var numero_foto; // Numero di foto in totale.

function funzione_iniziale() // Funzione che viene chiamata al termine del caricamento della pagina game.html.
{
  readTextFile("assets/cities.json", function(primo_file)
  {
    file_city =  JSON.parse(primo_file);
    if (file_city.country != undefined)
    {
      readTextFile("assets/answer_file.json", function(secondo_file)
      {
        myQuestions =  JSON.parse(secondo_file).data;
        if (myQuestions != undefined)
        { 
          numero_foto=myQuestions.length;
          funzione_gioco2();
        }
      });
    }
  });
}