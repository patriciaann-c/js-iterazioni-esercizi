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

