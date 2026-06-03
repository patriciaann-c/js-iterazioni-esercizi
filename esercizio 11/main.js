const correct_password = "1234"
let isCorrect = false;

for (let i = 1; i <= 3 && isCorrect === false; i++) {
    let userPassword = prompt("Inserisci la password:");

    if (userPassword === correct_password) {
        isCorrect = true;
        // break;
    }
}

if (isCorrect) {
    console.log("Benvenuto!");
} else {
    console.error("Accesso bloccato");
}