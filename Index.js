var Word = require("./Word");

var inquirer = require('inquirer');
var remaining = 5;
var aNewWord = "Seattle";
var guessACity = new Word(aNewWord);

// added a constructor Word object to check if word has been guessed
Word.prototype.checkIfWordGuessed = function () {
    var ifWord = true;
    for (var j = 0; j < this.letters.length; j++) {
        //checking if each letter has been guessed.
        if (!this.letters[j].guess) {
            ifWord = false;
        }
    }
    return ifWord;
}


while (!checkIfWordGuessed() && remaining) {

    inquirer
        .prompt([
            {
                message: "Guess a letter!",
                name: "letters"
            },
        ])
        .then(answers => {

            if (guessACity.ifGuessed(answers.letters)) {
                console.log("CORRECT!")
            }
            else {
                remaining -= 1;
                console.log("INCORRECT!")
                console.log(remaining + " guesses remaining!")
            }

            console.log(guessACity.toString());
            if (guessACity.ifGuessed(answers.letters)) {
                console.log("CORRECT!")
            }
            else {
                remaining -= 1;
                console.log("INCORRECT!")
                console.log(remaining + " guesses remaining!")
            }



        }

        )
}






