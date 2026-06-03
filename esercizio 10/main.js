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
