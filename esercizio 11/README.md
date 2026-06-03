# Esercizio 11
L'utente ha 3 tentativi per indovinare la password. Stampa "Benvenuto" se riesce nei tentativi consentiti, altrimenti "Bloccato"

## Codifica
``` js
const correct_password = "1234"
let isCorrect = false;

for (let i = 1; i <= 3; i++) {
    let userPassword = prompt("Inserisci la password:");

    if (userPassword === correct_password) {
        isCorrect = true;
        break;
    }
}

if (isCorrect) {
    console.log("Benvenuto!");
} else {
    console.error("Accesso bloccato");
}
```