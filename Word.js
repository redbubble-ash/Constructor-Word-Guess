var Letter = require("./Letter");


function Word(newWord) {

    // An array of `new` Letter objects representing the letters of the underlying word
    this.letters = [];
    // convert newWord from string to array
    var newWordArr = newWord.toLowerCase().split("");
    for (var i = 0; i < newWordArr.length; i++) {
        //build each Letter object based on the given newWord array and push each Letter object into the empty arrary (Word object): this.letters
        this.letters.push(new Letter(newWordArr[i]));
    }

    //A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    this.toString = function () {
        var wordGuess = "";
        for (var i = 0; i < this.letters.length; i++) {
            //*this.letter[i] === Letter object, call function: Letter.display(). Concatenating returned character or "_" into string with a space " ".
            wordGuess += this.letters[i].display() + " ";
        }
        return wordGuess;
    };

    //A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
    // check if guessed letter is in the given word, return true if the guess is correct
    this.ifGuessed = function (char) {
        var ifLetter = false;
        for (var j = 0; j < this.letters.length; j++) {
            //call Letter.check function.
            if (this.letters[j].check(char)) {
                ifLetter = true;

            }
        }
        return ifLetter;
    }
}

// added a constructor Word object to check if word has been guessed
Word.prototype.checkIfWordGuessed = function () {
    var ifWord = true;
    for (var j = 0; j < this.letters.length; j++) {
        //checking if each letter has been guessed and it is not a space.
        if (!this.letters[j].guess && this.letters[j].character !== " ") {
            ifWord = false;
        }
    }
    return ifWord;
}


module.exports = Word;

// test:
// var test = new Word("city");
// test.ifGuessed("c");
// console.log(test.toString());

