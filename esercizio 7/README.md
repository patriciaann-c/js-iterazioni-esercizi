# Esercizio 7
Chiedi un numero N all'utente. Calcola la somma di tutti i numeri da 1 a N e stampa il risultato.

## Codifica
``` js
let N = parseInt(prompt("Inserisci un numero"));
let somma = 0;

for (let i = 1; i <= N; i++) {
    somma = somma + i;
}

console.log("La somma dei numeri da 1 a", N, "é", somma);

```