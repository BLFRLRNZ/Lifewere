# Rete Viva

Una rete neurale spiking che cresce mentre vive, come web app per il telefono.

- **Sensi**: vista a eventi dalla fotocamera (vede solo ciò che si muove), udito dal microfono in 16 bande, tatto con quattro pulsanti.
- **Impulsi**: ogni neurone accumula potenziale e scarica quando supera la soglia; l'impulso viaggia lungo le sinapsi verso gli altri neuroni.
- **Sinapsi**: i neuroni che scaricano uno dopo l'altro rafforzano la connessione (regola STDP con traccia che svanisce in circa mezzo secondo); quelle non usate si indeboliscono e spariscono.
- **Sensi bilanciati**: vista, udito e tatto pesano allo stesso modo quando sono attivi.
- **Aspettative**: quando un impulso arriva lungo una sinapsi, "annuncia" che quel neurone sta per scaricare. Se entro 0,7 secondi lo fa, la sinapsi si rafforza; se no, si indebolisce e la rete registra un'attesa tradita.
- **Sorpresa**: nasce sia dalla novità (qualcosa di mai visto) sia dalle attese tradite.
- **Crescita**: la sorpresa si accumula; quando supera una soglia, il neurone più vicino all'esperienza si divide in due.
- **Voce**: 12 note da 200 a 2000 Hz. All'inizio fa versi a caso (lallazione), si ascolta col microfono e i neuroni dell'udito imparano quale nota producono. Poi, quando sente una nota da fuori, prova a rifarla.
- **Potatura**: i neuroni che non scaricano per 5 minuti di vita vengono eliminati.
- **Dimensione**: cresce finché il telefono riesce a calcolarla in tempo (il numero dei neuroni diventa giallo quando è al limite); da lì i nuovi neuroni sostituiscono i meno usati. Tetto di sicurezza: 10.000 neuroni.
- **Memoria**: si salva da sola sul telefono ogni 10 secondi e quando la chiudi; "Salva file" esporta una copia in `.json`.

Apri `index.html` da un indirizzo https (per esempio GitHub Pages) e scegli "Aggiungi a schermata Home".
