# Rete Viva

Una rete neurale spiking che cresce mentre vive, come web app per il telefono.

- **Sensi**: vista a eventi dalla fotocamera (vede solo ciò che si muove), udito dal microfono in 16 bande, tatto con quattro pulsanti.
- **Impulsi**: ogni neurone accumula potenziale e scarica quando supera la soglia; l'impulso viaggia lungo le sinapsi verso gli altri neuroni.
- **Sinapsi**: i neuroni che scaricano uno dopo l'altro rafforzano la connessione (regola STDP); quelle non usate si indeboliscono e spariscono.
- **Crescita**: quando la sorpresa resta alta, il neurone più vicino all'esperienza nuova si divide in due.
- **Potatura**: i neuroni che non scaricano per 5 minuti di vita vengono eliminati. Massimo 300 neuroni.
- **Memoria**: si salva da sola sul telefono ogni 10 secondi e quando la chiudi; "Salva file" esporta una copia in `.json`.

Apri `index.html` da un indirizzo https (per esempio GitHub Pages) e scegli "Aggiungi a schermata Home".
