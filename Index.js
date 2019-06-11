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

    
    Word.prototype.checkLetter = function(char){
        var ifLetter = false;
        for (var j = 0; j < this.letters.length; j++) {
            //call Letter.check function.
           if(this.letters[j].character === char){
               ifLetter = true;
           }
        }
        return ifLetter;
    }

        if(guessACity.checkLetter(answers.letters)){
        console.log("CORRECT!")
    }
    else{
        console.log("INCORRECT!")
    }

  });