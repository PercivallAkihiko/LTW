window.addEventListener("wheel", (event) => {
    // small increments for smoother zooming
    var delta = -event.deltaY / 120 / 10;    
    var mycam = document.getElementById("cam").getAttribute("camera");
    var finalZoom = document.getElementById("cam").getAttribute("camera").zoom + delta;
    // limiting the zoom
    if (finalZoom < 1) finalZoom = 1;
    if (finalZoom > 3) finalZoom = 3;
    mycam.zoom = finalZoom;
    document.getElementById("cam").setAttribute("camera", mycam);
  });




