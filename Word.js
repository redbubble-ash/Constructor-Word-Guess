var Letter = require("./Letter");


function Word(){

    this.letters = Letter.character;
    this.toString = function(){
        Letter.display;
    };

    this.guess = function(char){
        Letter.check(char);
    }
} 