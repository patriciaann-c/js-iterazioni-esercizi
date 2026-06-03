# Esercizio 8
Il computer sceglie un numero segreto (es. 7). Chiedi all'utente di indovinarlo. Continua finché l'utente non indovina il numero corretto.

## Codifica
``` js
const compNumber = Math.floor(Math.random() * 10);
let isGuess = false;

while (isGuess == false) {
    const userNumber = Number(prompt("Indovina il numero generato"));
    if (userNumber == compNumber) {
        isGuess = true;
    }
}
console.log("Complimenti! Hai indovinato");
```