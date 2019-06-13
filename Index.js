var Word = require("./Word");

var inquirer = require('inquirer');
var remaining = 5;
var wordLibrary = ["New York", "Los Angeles", "Chicago", "Seattle", "San Francisco", "Boston", "New Orleans", "Atlanta", "Phoenix", "Detroit", "Las Vegas", "Dallas", "Denver", "Portland", "San Diego", "Miami"]
var aNewWord = wordLibrary[Math.floor(Math.random() * wordLibrary.length)];
var guessACity = new Word(aNewWord);


//*build a async function, so "await" can be added for inquirer.prompt, which is asynchronous
async function main() {
    while ((!guessACity.checkIfWordGuessed()) && (remaining > 0)) {
        //*add "await" to wait until inquirer.promt() is complete with the function call before start another userInput in the whileloop (start a new thread)
        const userInput = await inquirer.prompt({
            message: "Guess a letter for an American city!",
            name: "letters"

        })
            .then(answers => {

                if (guessACity.ifGuessed(answers.letters.toLowerCase())) {
                    console.log("CORRECT!")
                }
                else {
                    remaining -= 1;
                    console.log("INCORRECT!")
                    console.log(remaining + " guesses remaining!")
                }

                console.log(guessACity.toString());
            }

            )
    }
}

main();
