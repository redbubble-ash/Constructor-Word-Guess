# Constructor-Word-Guess

In this assignment, I created a Word Guess command-line game using constructor functions.


## Instructions

This game has met the following criteria:

1. using the "inquirer" npm pacakages.

2. * **Letter.js**: Contains a constructor, Letter. This constructor is able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. 

* **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. 

* **index.js**: 
  * The file containing the logic for the course of the game, which depends on `Word.js` and:

  * Randomly selects a word and uses the `Word` constructor to store it

  * Prompts the user for each guess and keeps track of the user's remaining guesses


## How to play the game?

1. When the game starts, the system will randomly select an American city's name for user to guess.

2. User enter a letter on the comment line.

3. If the letter matches one or more letters of the city's name, the comment line will display "CORRECT!"

4. If the letter doesn't match the city's name, it will display "INCORRECT!" and user's remaining time to guess will be reduced by one from five if fail to guess the correct answer. 

## Example_correct guess:
https://cl.ly/a010cf9d0882

## Example_incorrect guess:
https://cl.ly/b69ca1f180c0