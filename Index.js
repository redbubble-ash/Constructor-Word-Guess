var Word = require("./Word");

var inquirer = require('inquirer');
inquirer
  .prompt([
    {
        message: "Guess a letter!",
        name:"letters"
      },
  ])
  .then(answers => {
    var aNewWord = "Seattle";
    var guessACity = new Word (aNewWord);
    guessACity.ifGuessed(answers.letters);
    console.log(guessACity.toString());

  });