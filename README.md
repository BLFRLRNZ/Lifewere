# Rete Viva

Una rete neurale spiking che cresce mentre vive, come web app per il telefono.

- **Sensi**: vista a eventi dalla fotocamera (vede solo ciò che si muove), udito dal microfono in 16 bande, tatto con quattro pulsanti.
- **Impulsi**: ogni neurone accumula potenziale e scarica quando supera la soglia; l'impulso viaggia lungo le sinapsi verso gli altri neuroni.
- **Sinapsi**: i neuroni che scaricano uno dopo l'altro rafforzano la connessione (regola STDP con traccia che svanisce in circa mezzo secondo); quelle non usate si indeboliscono e spariscono.
- **Sensi bilanciati**: vista, udito e tatto pesano allo stesso modo quando sono attivi.
- **Aspettative**: quando un impulso arriva lungo una sinapsi, "annuncia" che quel neurone sta per scaricare. Se entro 0,7 secondi lo fa, la sinapsi si rafforza; se no, si indebolisce e la rete registra un'attesa tradita.
- **Sorpresa**: nasce sia dalla novità (qualcosa di mai visto) sia dalle attese tradite.
- **Crescita**: la sorpresa si accumula; quando supera una soglia, il neurone più vicino all'esperienza si divide in due.
- **Potatura**: i neuroni che non scaricano per 5 minuti di vita vengono eliminati. Massimo 300 neuroni.
- **Memoria**: si salva da sola sul telefono ogni 10 secondi e quando la chiudi; "Salva file" esporta una copia in `.json`.

Apri `index.html` da un indirizzo https (per esempio GitHub Pages) e scegli "Aggiungi a schermata Home".
