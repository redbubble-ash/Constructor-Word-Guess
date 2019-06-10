function Letter(character) {

    this.character = character;
    this.guess = false;
    this.display = function () {
        if (this.guess) {
            return this.character;
        }
        else {
            return "_";
        }
    }

    this.check = function (char) {
        if (char === this.character) {
            this.guess = true;
        }
    }

}

var test = new Letter ("k");
test.check("m");
console.log(test.guess);
