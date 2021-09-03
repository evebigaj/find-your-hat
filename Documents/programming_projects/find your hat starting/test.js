//todo: put this inside the class so that you can run game on a constructor?

const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field){
      this.field = field
    }
    print(){
      for(let i = 0; i< this.field.length; i++){
        console.log(this.field[i].join(''))
      }
    }
/* * in top lh corner
^ in just one place
w and h random but <15
random number of other things
*/
    static generateField(){
        //let width = Math.floor(Math.random()*15+1);
        let width = 1
        let height =Math.floor(Math.random()*15+1);
       
        let xHat = Math.floor(Math.random()*width);
        let yHat = Math.floor(Math.random()*height);
        let field = [];
        //q: what happens with width 0?
        for(let i = 0; i < height; i++){
            field[i] = [];
            for(let j = 0; j< width; j++){
                let random = Math.floor(Math.random()*2);
                let element = ''
                switch(random){case 0: element = hole;
                    break;
                    case 1: element = fieldCharacter;
                    break;
                }
            
                field[i].push(element)
            }
        }
        field[yHat][xHat] = hat;
        field[0][0] = '*';
        return field

        
    }
    
  }

  
  
  // When a user runs main.js,
    // prompt for input 
   //they specify which direction they’d like to “move”.
// then see a printed result of their current field map 
// * stands for all tiles visited
// prompt for next move until user
// Wins by finding their hat.
// Loses by landing on (and falling in) a hole.
// Attempts to move “outside” the field.
//these terminate the game with game over message

//const myField = new Field();

let testField = Field.generateField()
console.log(testField[7][0])
myField = new Field(testField);
myField.print()