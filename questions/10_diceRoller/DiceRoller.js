// Create a class called DiceRoller
// It should contain a roll method and a
// history property which outputs all of the previous rolls

class DiceRoller {
    constructor (sides, numDice){
        if(typeof sides !== 'number' || typeof numDice !== 'number'){
          throw new Error ('Error')
        }
        this.history = [];
        this.sides = sides;
        this.numDice = numDice;
    }
    roll (){
        this.sides 
    }
}

module.exports = { DiceRoller };
