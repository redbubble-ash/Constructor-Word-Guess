var Word = require("./Word");

var inquirer = require('inquirer');
inquirer
    .prompt([
        {
            message: "Guess a letter!",
            name: "letters"
        },
    ])
    .then(answers => {
        var remaining = 5;
        var aNewWord = "Seattle";
        var guessACity = new Word(aNewWord);
        if (guessACity.ifGuessed(answers.letters)) {
            console.log("CORRECT!")
        }
        else {
            remaining -= 1;
            console.log("INCORRECT!")
            console.log(remaining + " guesses remaining!")
        }

        console.log(guessACity.toString());


        Word.prototype.checkIfWordGuessed = function () {
            var ifWord = true;
            for (var j = 0; j < this.letters.length; j++) {
                //call Letter.check function.
                if (!this.letters[j].guess) {
                    ifWord = false;
                }
            }
            return ifWord;
        }

       
        if (guessACity.ifGuessed(answers.letters)) {
            console.log("CORRECT!")
        }
        else {
            remaining -= 1;
            console.log("INCORRECT!")
            console.log(remaining + " guesses remaining!")
        }

    });

   var checkIfWordGuessed = true;

    while (!checkIfWordGuessed && remaining){

        for (var n=0; n<aNewWord.length; n++){
            if(!guessACity.letters[n].guess){
                checkIfWordGuessed = false;
            }
        }
        
                                                                                    

            
    }
