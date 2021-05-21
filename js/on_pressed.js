window.addEventListener('keydown', (event) => // Funzione che si occupara di accorgersi degli eventi della tastiera.
{
    if (vite_rimanenti > 0 && giusto_sopra == false && sbagliato_sopra == false)
    {
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
    }
    if (event.key === 'Enter' && giusto_sopra == true && vite_rimanenti > 0)
    {
        document.getElementById("bottone_invia").blur(); // Tolgo il focus dal bottone_invia.
        risposta_giusta(); // Chiamo la funzione che si occupa di mostrare l'alert risposta_giusta.
    }
    else if (event.key === 'Enter' && sbagliato_sopra == true && vite_rimanenti > 0)
    {
        document.getElementById("bottone_invia").blur(); // Tolgo il focus dal bottone_invia.
        risposta_sbagliata(); // Chiamo la funzione che si occupa di mostrare l'alert risposta_sbagliata.
    }
    else if (vite_rimanenti < 1)
    {
        document.getElementById("bottone_invia").blur();
    }
    else
    {
        document.getElementById("bottone_invia").focus(); // Altrimenti lascio il focus sul bottone per andare avanti nel gioco.
    }
});