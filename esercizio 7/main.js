let N = parseInt(prompt("Inserisci un numero"));
let somma = 0;

for (let i = 1; i <= N; i++) {
    somma = somma + i;
}

console.log("La somma dei numeri da 1 a", N, "é", somma);
