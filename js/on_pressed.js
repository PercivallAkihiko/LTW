window.addEventListener('keydown', (event) => {
    if (event.key === '1' && vite_rimanenti>0)
    {
        document.getElementById("risultato_a").checked = true;
    }
    if (event.key === '2' && vite_rimanenti>0)
    {
        document.getElementById("risultato_b").checked = true;
    }
    if (event.key === '3' && vite_rimanenti>0)
    {
        document.getElementById("risultato_c").checked = true;
    }
    if (event.key === '4' && vite_rimanenti>0)
    {
        document.getElementById("risultato_d").checked = true;
    }
    if (event.key === 'Enter' && giusto_sopra==true)
    {
        document.getElementById("fakeAnchor").focus();
        risposta_giusta();
    }
    else if (event.key === 'Enter' && sbagliato_sopra==true)
    {
        document.getElementById("fakeAnchor2").focus();
        risposta_sbagliata();
    }
    else
    {
        document.getElementById("bottone_invia").focus();
    }
});