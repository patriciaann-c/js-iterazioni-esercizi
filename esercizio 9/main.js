let somma = 0;
let prezzo;

do {
    prezzo = Number(prompt("Inserisci il prezzo del prodotto"));
    somma = somma + prezzo;
} while (prezzo != 0);

console.log(somma);
