let numberToGuess = Math.round(Math.random() * 100);
let tries = 0;
function guessTheNumber() {
    tries = tries + 1;
    displayTries.innerHTML = 'Versuche: ' + tries;

    if(numberToGuess == myNumber.value) {
        headline.innerHTML = 'Du hast gewonnen!';
    }

    if(numberToGuess < myNumber.value) {
        headline.innerHTML = 'Die Zahl ist kleiner!';
    }

    if(numberToGuess > myNumber.value) {
        headline.innerHTML = 'Die Zahl ist größer!';
    }
    myNumber.value = '';

}

let Number = Math.round(425,37);
    console.log(Number)
