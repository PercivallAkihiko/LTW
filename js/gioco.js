var avanti_streak=0;
var vite_rimanenti=3;
var randomnumber=1;
var primo_round = true;
var controllo_foto = new Array();

function funzione_gioco(){
  if (primo_round == false)
{
  var valori = document.querySelector('input[name = "quizzolo"]:checked');
  if (document.getElementById(valori.id+"1").innerHTML == myQuestions[randomnumber-1].correctAnswer)
  {
    alert("giusto");
    avanti_streak++;       
    document.getElementById('streak').innerHTML=avanti_streak;
    document.getElementById("streak1").value = avanti_streak;
  }
  else
  {
    vite_rimanenti--;  
    document.getElementById('vite_rimaste').innerHTML=vite_rimanenti;
    alert("sbagliato");
  } 
}
if (vite_rimanenti > 0)
{
  randomnumber = Math.floor(Math.random() * (numero_foto - 1 + 1)) + 1;
  while (controllo_foto.includes(randomnumber) == true)
  {
    randomnumber = Math.floor(Math.random() * (numero_foto - 1 + 1)) + 1;
  }
  console.log(randomnumber);
  controllo_foto.push(randomnumber);
  if (controllo_foto.length - 1 == numero_foto - 1)
  {
    controllo_foto = new Array();
    console.log("---------");
  }
  else
  {
    console.log("LENGHT : " + controllo_foto.length);
  }
  var prova = document.getElementById('panorama1');
  prova.parentNode.removeChild(prova);
  var prova2 = document.createElement('a-sky');
  prova2.setAttribute('id', "panorama1");
  prova2.setAttribute('src', myQuestions[randomnumber-1].file);
  prova2.setAttribute('rotation', "0 -90 0");
  document.getElementById("scenetta").appendChild(prova2);
  var alphabet = "abcd";
  var emptyString = alphabet[Math.floor(Math.random() * alphabet.length)];
  document.getElementById("risultato_"+emptyString+"1").innerHTML=myQuestions[randomnumber-1].correctAnswer;
  for (i = 0; i < alphabet.length; i++) 
  {
    if (alphabet.charAt(i) != emptyString)
    {
      randomnumber2 = Math.floor(Math.random() * (39445 - 1 + 1)) + 1;
      document.getElementById("risultato_"+alphabet.charAt(i)+"1").innerHTML= data2.country[randomnumber2];
    }
  }
}
  if (vite_rimanenti == 0)
  {
    var username = localStorage.getItem("username");
    $('.shadow').toggleClass('up');
    document.getElementById("username").value = username;
  }
  primo_round = false;
}


