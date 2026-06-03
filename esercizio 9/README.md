# Esercizio 9
Chiedi all'utente di inserire il prezzo di un prodotto. Continua a chiedere prezzi e sommarli al totale finché l'utente non inserisce "0" per terminare. Stampa il totale della spesa.

## Ragionamento
- FINCHE' l'utente non inserisce "0"
    - chiediamo all'utente il prezzo del prodotto
    - sommiamo il prezzo
- stampiamo il totale

## Codifica
``` js
let somma = 0;
let prezzo;

do {
    prezzo = Number(prompt("Inserisci il prezzo del prodotto"));
    somma = somma + prezzo;
} while (prezzo != 0);

console.log(somma);
```