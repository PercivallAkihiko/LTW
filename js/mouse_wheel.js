window.addEventListener("wheel", (event) => // Funzione per permettere di zoomare con la rotella del mouse durante il gioco.
{
    var delta = -event.deltaY / 120 / 10; // Variabile che controlla il cambiamento della rotella.
    var mycam = document.getElementById("cam").getAttribute("camera"); // Prendo l'attributo camera dell'a-entity.
    var finalZoom = document.getElementById("cam").getAttribute("camera").zoom + delta; // Sommo il delta alla variabile.
    if (finalZoom < 1) finalZoom = 1; // Limito inferiormente il zoom.
    if (finalZoom > 3) finalZoom = 3; // Limito superiormente il zoom.
    mycam.zoom = finalZoom; // Modifico la variabile.
    document.getElementById("cam").setAttribute("camera", mycam); // Salvo la variabile.
});