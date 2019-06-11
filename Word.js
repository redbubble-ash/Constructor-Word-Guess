var Letter = require("./Letter");


function Word(newWord){
    
    this.letters = [];
    var newWordArr = newWord.split();
    for (var i=0; i<this.newWordArr.length; i++){
      letters.push(new Letter(newWordArr[i]));
    }

    this.toString = function(){
        var wordGuess = "";
        for(var i=0; i<this.letters.length; i++ ){
            wordGuess += letters[i].display();
        }
        return wordGuess;
    };

    this.ifGuessed = function(char){
        for(var j=0; j<this.letters.length; j++){
            letters[j].check(char);
        }
    }
} 

// var test = new Word("city");
// test.ifGuessed("c");
// console.log(test+" ");

