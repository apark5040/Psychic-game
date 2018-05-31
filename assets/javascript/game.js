var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'x', 'z'];

var wins = 0;
var misses = 0;
var guesses = 10;

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


var guessList = [];

document.onkeyup = function (event) {

    var userGuess = event.key.toLowerCase();

    function reset() {
        guesses = 10;
        guessList.length = 0;
    }


    if (userGuess == computerGuess) {
        wins++;
        alert("You got it right! The correct answer was: " + computerGuess);
        guesses = 10;
        reset(guessList);
    }
    else {
        guesses--;
        guessList.push(userGuess);
        if (guesses == 0) {
            misses++;
            reset(guessList);
            alert("Game Over");
        }
    }



    var html =
        "<p>Guess what letter I am guessing</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + misses + "</p>" +
        "<p>Number of Guesses: " + guesses + "</p>" +
        "<p>Guesses so far: " + guessList + "</p>";

    document.querySelector("#game").innerHTML = html;

}