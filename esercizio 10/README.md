# Esercizio 10
Chiedi all'utente di inserire i suoi voti. Stampa la media

## Ragionamento
- numero di voti = 0
- somma dei voti = 0
    - Chiediamo all'utente di inserire un voto
    - Sommiamo il voto inserito alla somma totale
    - Aggiungiamo 1 al numero di voti
- Continua FINCHE' l'utente non inserisce "0"
- Calcoliamo la media (somma = somma/numero voti)
- Stampiamo la media

## Codifica
``` js
let votes = 0;
let sum = 0;
let userNumber;

do {
    userNumber = Number(prompt("Inserisci il voto"));
    sum = sum + userNumber;
    votes++;
} while (userNumber != 0);

const media = Math.floor(sum / --votes);
console.log("La media é", media);

```