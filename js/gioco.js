var avanti_streak=0;
var vite_rimanenti=3;
var randomnumber=1;
var primo_round = true;
var controllo_foto = new Array();
const myQuestions = [
  {
    correctAnswer: "New York, United States",
    file: "assets/game/1.jpg"
  },
  {
      correctAnswer: "New York, United States",
      file: "assets/game/2.jpg"
    },
    {
      correctAnswer: "Rome, Italy",
      file: "assets/game/3.jpg"
    },
    {
      correctAnswer: "Washington, United States",
      file: "assets/game/4.jpg"
    },
    {
    correctAnswer: "Washington, United States",
    file: "assets/game/5.jpg"
  },
  {
      correctAnswer: "Chicago, United States",
      file: "assets/game/6.jpg"
    },
    {
      correctAnswer: "Tokyo, Japan",
      file: "assets/game/7.jpg"
    },
    {
      correctAnswer: "Tokyo, Japan",
      file: "assets/game/8.jpg"
    },
    {
      correctAnswer: "Tokyo, Japan",
      file: "assets/game/9.jpg"
    },
    {
      correctAnswer: "New Dehli, India",
      file: "assets/game/10.jpg"
    },
    {
      correctAnswer: "Dubai, United Arab Emirates",
      file: "assets/game/11.jpg"
    },
    {
      correctAnswer: "Oslo, Norway",
      file: "assets/game/12.jpg"
    },
    {
      correctAnswer: "Madrid, Spain",
      file: "assets/game/13.jpg"
    },
    {
      correctAnswer: "Madrid, Spain",
      file: "assets/game/14.jpg"
    },
    {
      correctAnswer: "Madrid, Spain",
      file: "assets/game/15.jpg"
    },
    {
      correctAnswer: "Madrid, Spain",
      file: "assets/game/16.jpg"
    },
    {
      correctAnswer: "Narsarsuaq, Grenland",
      file: "assets/game/17.jpg"
    },
    {
      correctAnswer: "Misato, Japan",
      file: "assets/game/18.jpg"
    },
    {
      correctAnswer: "San Giovanni Gemini, Italy",
      file: "assets/game/19.jpg"
    },
    {
      correctAnswer: "Sund, Norway",
      file: "assets/game/20.jpg"
    },
    {
      correctAnswer: "Moutiers, France",
      file: "assets/game/21.jpg"
    },
    {
      correctAnswer: "Waterville, Ireland",
      file: "assets/game/22.jpg"
    },
    {
      correctAnswer: "Seward, United States",
      file: "assets/game/23.jpg"
    },
    {
      correctAnswer: "Baume-les-Messieurs, France",
      file: "assets/game/24.jpg"
    },
    {
      correctAnswer: "Vilnius, Lithuania",
      file: "assets/game/25.jpg"
    },
    {
      correctAnswer: "Matrubah, Libia",
      file: "assets/game/26.jpg"
    },
    {
      correctAnswer: "L'Aia, Netherlands",
      file: "assets/game/27.jpg"
    },
    {
      correctAnswer: "Tallinn, Estonia",
      file: "assets/game/28.jpg"
    },
    {
      correctAnswer: "Kuala Lumpur, Malaysia",
      file: "assets/game/29.jpg"
    },
    {
      correctAnswer: "New York, United States",
      file: "assets/game/30.jpg"
    },
    {
      correctAnswer: "Boston, United States",
      file: "assets/game/31.jpg"
    },
    {
      correctAnswer: "Antofagasta, Chile",
      file: "assets/game/32.jpg"
    },
    {
      correctAnswer: "Guatemala, Guatemala",
      file: "assets/game/33.jpg"
    },
    {
      correctAnswer: "Josselin, France",
      file: "assets/game/34.jpg"
    },
    {
      correctAnswer: "Minsk, Belarus",
      file: "assets/game/35.jpg"
    },
    {
      correctAnswer: "Santa Cruz de la Sierra, Bolivia",
      file: "assets/game/36.jpg"
    },
    {
      correctAnswer: "Caracas, Venezuela",
      file: "assets/game/37.jpg"
    },
    {
      correctAnswer: "Boston, United States",
      file: "assets/game/38.jpg"
    },
    {
      correctAnswer: "Oklahoma City, United States",
      file: "assets/game/39.jpg"
    },
    {
      correctAnswer: "Canterbury, United Kingdom",
      file: "assets/game/40.jpg"
    },
    {
      correctAnswer: "Nashville, United States",
      file: "assets/game/41.jpg"
    },
    {
      correctAnswer: "Liverpool, United Kingdom",
      file: "assets/game/42.jpg"
    },
    {
      correctAnswer: "Modena, Italy",
      file: "assets/game/43.jpg"
    },
    {
      correctAnswer: "Valencia, Spain",
      file: "assets/game/44.jpg"
    },
    {
      correctAnswer: "Tokyo, Japan",
      file: "assets/game/45.jpg"
    },
    {
      correctAnswer: "Cordova, Spain",
      file: "assets/game/46.jpg"
    },
    {
      correctAnswer: "Luxor, Egypt",
      file: "assets/game/47.jpg"
    },
    {
      correctAnswer: "Wroclaw, Poland",
      file: "assets/game/48.jpg"
    },
    {
      correctAnswer: "Kyoto, Japan",
      file: "assets/game/49.jpg"
    },
    {
      correctAnswer: "Grenoble, France",
      file: "assets/game/50.jpg"
    }
];

var numero_foto=myQuestions.length;

function funzione_gioco(){
  if (primo_round == false)
{
  var valori = document.querySelector('input[name = "quizzolo"]:checked');
  if (document.getElementById(valori.id+"1").innerHTML == myQuestions[randomnumber-1].correctAnswer)
  {
    alert("giusto");
    avanti_streak++;       
    document.getElementById('streak').innerHTML=avanti_streak;
  }
  else
  {
    vite_rimanenti--;  
    document.getElementById('vite_rimaste').innerHTML=vite_rimanenti;
    alert("sbagliato");
  } 
}
  randomnumber = Math.floor(Math.random() * (numero_foto - 1 + 1)) + 1;
  while (controllo_foto.includes(randomnumber) == true)
  {
    randomnumber = Math.floor(Math.random() * (numero_foto - 1 + 1)) + 1;
  }
  console.log(randomnumber);
  controllo_foto.push(randomnumber);
  if (controllo_foto.length == numero_foto)
  {
    controllo_foto = new Array();
  }
  var prova = document.getElementById('panorama1');
  prova.parentNode.removeChild(prova);
  var prova2 = document.createElement('a-sky');
  prova2.setAttribute('id', "panorama1");
  prova2.setAttribute('src', myQuestions[randomnumber-1].file);
  prova2.setAttribute('rotation', "0 -90 0");
  document.getElementById("scenetta").appendChild(prova2);

  //document.querySelector('#panorama1').setAttribute('src', myQuestions[randomnumber-1].file);
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
  if (vite_rimanenti == 0)
  {
    alert("sei una sega hai perso!");
    window.location.replace("localhost");
  }
  primo_round = false;
}


