const randomNumber = Math.floor(Math.random() * 100) + 1;

const maxTries = 10;
let tries = 0;

function checkGuess() {

    const userGuess = parseInt(document.getElementById("guessInput").value);

    if (userGuess === randomNumber) {
        displayMessage(`Parabéns! Você acertou o número ${randomNumber}.`);
    } else {

        tries++;

        if (tries === maxTries) {
            displayMessage(`Suas tentativas acabaram. O número correto era ${randomNumber}.`);
        } else {

            const hint = userGuess < randomNumber ? "menor" : "maior";
            displayMessage(`Tente novamente! Seu palpite é ${hint} que o número correto.`);
        }
    }
}

function displayMessage(message) {
    document.getElementById("message").textContent = message;
}