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

function funzione_iniziale(){
  readTextFile("assets/cities.json", function(text){
    var data =  JSON.parse(text);
    data2= data;
    if (data2.country != undefined)
    {
        funzione_gioco();
    }
});
}
  