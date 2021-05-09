window.addEventListener('keydown', (event) => {
    document.getElementById("bottone_invia").focus();
    if (event.key === '1')
    {
        document.getElementById("risultato_a").checked = true;
    }
    if (event.key === '2')
    {
        document.getElementById("risultato_b").checked = true;
    }
    if (event.key === '3')
    {
        document.getElementById("risultato_c").checked = true;
    }
    if (event.key === '4')
    {
        document.getElementById("risultato_d").checked = true;
    }





});