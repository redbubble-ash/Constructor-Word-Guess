var Word = require("./Word");

var inquirer = require('inquirer');
var remaining = 5;
var aNewWord = "New York";
var guessACity = new Word(aNewWord);



// while ((!guessACity.checkIfWordGuessed()) && (remaining > 0)) {

//     // const userInput = await inquirer
//     //     .prompt([
//     //         {
//     //             message: "Guess a letter!",
//     //             name: "letters"
//     //         },
//     //     ])
//     //     .then(answers => {

//     //         if (guessACity.ifGuessed(answers.letters)) {
//     //             console.log("CORRECT!")
//     //         }
//     //         else {
//     //             remaining -= 1;
//     //             console.log("INCORRECT!")
//     //             console.log(remaining + " guesses remaining!")
//     //         }

//     //         console.log(guessACity.toString());
//     //         if (guessACity.ifGuessed(answers.letters)) {
//     //             console.log("CORRECT!")
//     //         }
//     //         else {
//     //             remaining -= 1;
//     //             console.log("INCORRECT!")
//     //             console.log(remaining + " guesses remaining!")
//     //         }



//     //     }

//     //     )
//     main();
// }


async function main() {
    while ((!guessACity.checkIfWordGuessed()) && (remaining > 0)) {
        const userInput = await inquirer.prompt({
            message: "Guess a letter!",
            name: "letters"

        })
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
            }

            )
    }
}

main();
