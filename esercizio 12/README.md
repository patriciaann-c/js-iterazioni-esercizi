# Esercizio 12
Il computer pensa a un numero tra 1 e 100. L'utente indovina. Dopo ogni tentativo sbagliato, il computer dice "Troppo alto" o "Troppo basso" per aiutare l'utente.

## Ragionamento
- Chiediamo con Math.floor(Math.random() * 101) un numero al computer a caso
- Chiediamo all'utente di indovinare il numero
- SE il numero dell'utente é minore o maggiore del numero del computer
    - stampiamo "Troppo basso" o "Troppo alto"

## Codifica
``` js
let compNumber = Math.floor(Math.random() * 100);
let isGuess = false;

while (isGuess == false) {
    let userNumber = Number(prompt("Indovina un numero da 1 a 100"));

    if (userNumber < compNumber) {
        console.log("Troppo basso");
    } else if (userNumber > compNumber) {
        console.log("Troppo alto");
    } else {
        console.log("Complimenti! Hai trovato il numero");
        isGuess = true
    }
}

```