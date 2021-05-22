var avanti_streak = 0; // Variabile che tiene traccia del punteggio del giocatore.
var vite_rimanenti = 3; // Variabile che tiene traccia del numero di vite rimanenti.
var randomnumber; // Variabile usata per generare numeri random.
var controllo_foto = new Array(); // Array utilizzato per tener traccia delle foto passate cosi da non farle ripetere.
var giusto_sopra = false; // Variabile che controlla se l'alert della risposta giusta sta su schermo.
var sbagliato_sopra = false; // Variabile che controlla se l'alert della risposta sbagliata sta su schermo.

$(document).ready(function () // Funzione che controlla se l'utente è loggato.
{
    var username = localStorage.getItem("username"); // Dal localStorage controllo se ci sta l'item username.
    if (username == null)
    {
      window.location.href = "index.php"; // Se non ci sta l'utente viene reindirizzato all'index del sito.
    }
});

function risposta_giusta() // Funzione che si avvia quando l'alert della risposta giusta viene chiuso (JQuery).
{ 
    $('#giusto').toggleClass('up'); // Togliamo la classe.
    avanti_streak++;
    document.getElementById('streak').innerHTML = avanti_streak;
    document.getElementById("streak1").value = avanti_streak; // Nascosto per il php.
    document.getElementById("streak2").innerHTML = avanti_streak; // Aggiorno il risultato attuale.
    funzione_gioco2(); // Chiamo la funzione per cambiare le foto e i risultati.
}

function risposta_sbagliata()
{
  $('#sbagliato').toggleClass('up'); // Funzione che si avvia quando l'alert della risposta sbagliata viene chiuso (JQuery).
  vite_rimanenti--;  
  document.getElementById('vite_rimaste').innerHTML = vite_rimanenti; // Aggiorno le vite.
  funzione_gioco2(); // Chiamo la funzione per cambiare le foto e i risultati.
}

function funzione_gioco() // Funzione che si avvia on click sul pulsante sotto a destra, quando avviene la scelta della risposta. Non si avvia al primo turno.
{
  var checkato = document.querySelector('input[name = "quizzolo"]:checked'); // Controlla quale risposta è stata checkata.
  if (document.getElementById(checkato.id+"1").innerHTML == myQuestions[randomnumber-1].correctAnswer) // Se è stata checkata quella giusta.
  {
    giusto_sopra = true;
    $('#giusto').toggleClass('up');
  }
  else
  {
    document.getElementById('risposta_esatta').innerHTML = myQuestions[randomnumber-1].correctAnswer;
    sbagliato_sopra = true;
    $('#sbagliato').toggleClass('up');
  }
}

function funzione_gioco2() // Funzione che si carica ad ogni turno. Nel primo grazie alla funzione funzione_iniziale e in seguito grazie alla chiusura degli alert giusto o sbagliato.
{
  giusto_sopra = false;
  sbagliato_sopra = false;

  if (vite_rimanenti > 0)
  {

    randomnumber = Math.floor(Math.random() * (numero_foto)) + 1; // Numero random scelto per la foto.
    while (controllo_foto.includes(randomnumber) == true) // Controllo se la foto sta nell' array delle foto visualizzate in passato.
    {
      randomnumber = Math.floor(Math.random() * (numero_foto)) + 1; 
    }
    controllo_foto.push(randomnumber); // Aggiungo la foto all'array delle foto visualizzate.
    if (controllo_foto.length - 1 == numero_foto - 1) // Se abbiamo visto tutte le foto.
    {
      controllo_foto = new Array(); // Resetto l'array per farle ricapitare.
    }

    var vecchio_panorama = document.getElementById('panorama'); // Prendo la vecchia foto.
    vecchio_panorama.parentNode.removeChild(vecchio_panorama); // Elimino la vecchia foto.
    var nuovo_panorama = document.createElement('a-sky'); // Creo un nuovo elemento a-sky.
    nuovo_panorama.setAttribute('id', "panorama"); // Gli assegno l'id.
    nuovo_panorama.setAttribute('src', myQuestions[randomnumber-1].file); // Gli assegno la foto.
    nuovo_panorama.setAttribute('rotation', "0 -90 0"); // Gli assegno la rotazione.
    document.getElementById("scenetta").appendChild(nuovo_panorama); // Aggiungo tale elemento.

    var alphabet = "abcd"; // Lettere usate per le risposte del quiz.
    var lettera = alphabet[Math.floor(Math.random() * alphabet.length)]; // Scelgo una lettera random dall'alfabeto.
    document.getElementById("risultato_"+lettera+"1").innerHTML = myQuestions[randomnumber-1].correctAnswer; // Assegno a una risposta random la risposta esatta.
    for (i = 0; i < alphabet.length; i++) // Mi occupo delle restanti tre risposte random sbagliate.
    {
      if (alphabet.charAt(i) != lettera) // Prendo le lettere restanti.
      {
        do
        {
          randomnumber2 = Math.floor(Math.random() * ((file_city.country.length-1))) + 1;
        }while(file_city.country[randomnumber2] == myQuestions[randomnumber-1].correctAnswer); // Controllo se la città sbagliata scelta a random non è la stessa di quella giusta.
        document.getElementById("risultato_"+alphabet.charAt(i)+"1").innerHTML= file_city.country[randomnumber2]; // Assegno la città sbagliata.
      }
    }
  }
  else // Sono finite le vite.
  {
    var username = localStorage.getItem("username"); // Utilizzato per passare al php il nome dell'utente che ha effettuato la partita.
    $('.shadow').toggleClass('up'); // Mostro su schermo la schermata di fine partita.
    document.getElementById("username").value = username; // Assegno l'username alla fake form.
  }
}