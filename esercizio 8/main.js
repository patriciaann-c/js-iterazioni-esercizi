const compNumber = Math.floor(Math.random() * 10);
let isGuess = false;

while (isGuess == false) {
    const userNumber = Number(prompt("Indovina il numero generato"));
    if (userNumber === compNumber) {
        isGuess = true;
    }
}
console.log("Complimenti! Hai indovinato");