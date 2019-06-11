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
    this.ifGuessed = function (char) {
        for (var j = 0; j < this.letters.length; j++) {
            //call Letter.check function.
            this.letters[j].check(char);
        }
    }
}

module.exports = Word;

// test:
// var test = new Word("city");
// test.ifGuessed("c");
// console.log(test.toString());

