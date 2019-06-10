function Letter(character) {

    // A string value to store the underlying character for the letter
    this.character = character;
    // A boolean value that stores whether that letter has been guessed yet
    this.guess = false;
    // A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed
    this.display = function () {
        if (this.guess) {
            return this.character;
        }
        else {
            return "_";
        }
    }
    //  A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    this.check = function (char) {
        if (char === this.character) {
            this.guess = true;
        }
    }

}

module.exports = Letter;

// code test:
// var test = new Letter ("k");
// test.check("m");
// console.log(test.guess);
