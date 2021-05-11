function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
  }


var data2;
var data4;
var myQuestions;
var numero_foto;

function funzione_iniziale(){
  readTextFile("assets/cities.json", function(text){
    var data =  JSON.parse(text);
    data2= data;
    if (data2.country != undefined)
    {
      readTextFile("assets/city_file.json", function(text1){

        var data3 =  JSON.parse(text1);
        data4= data3;
        myQuestions = data4.mlml;
        if (myQuestions != undefined)
        { 
          numero_foto=myQuestions.length;
          funzione_gioco2();
        }
    });
    }
});
}
  