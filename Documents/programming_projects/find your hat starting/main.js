//todo add percent of holes (and cap it?)
//ambitious todo: make the boards winnable
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
        let width = Math.floor(Math.random()*15+1);
        let height = Math.floor(Math.random()*15+1);
        let xHat = Math.floor(Math.random()*width);
        let yHat = Math.floor(Math.random()*height);
        //range: [0,30)
        let percentHole = Math.random()*30
        let field = [];
       //how to do weighted probability?
       //p(hole) < .3
       //p(fieldCharacter) >= 0.7 
       // one option: take random number from 0 to 100. if it's between
       // 0 and p(hole), make it other 
        for(let i = 0; i < height; i++){ field[i] = [];
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
myField = new Field(testField);
myField.print()




//todo: learn if I can do this with arrow key

// left & right: move within same array
//up and down: move to other array at same index
//how to find index of '*'? 

let state = 'alive'
let y = testField.findIndex(array => array.includes('*'))
let x = testField[y].findIndex(element => element === '*')

do {
    var dir = prompt('Which direction?')
    
/*switch(dir){
    case 'j': dir = 'l'
    console.log(dir)
    break;
    case 'l': dir = 'r'
    break;
    case 'i': dir = 'u'
    break;
    case 'k': dir = 'd'
    break;
}*/

switch(dir){
case 'l': x = x-1;
break;
case 'r': x = x+1;
break;
case 'u': y = y-1;
 break;
case'd': y = y+1;
break;
        }
// change the state so that the location of * gets added to (x,y)
//if you're now at hat,
//todo: make it not prompt you twice for same thing
//current problem: this is undefined if we've gone off the array:
if(x<0|| x>testField[0].length||y<0||y>testField.length||testField[y][x]==='O'){
    console.log('GAME OVER');
    state = 'dead';
break}
//if(testField[y]&&testField[y][x])
if(testField[y][x]=== '^'){
    console.log('YOU FOUND THE HAT');
    state = 'win'}
    testField[y][x] = '*';
myField.print();

} while(state === 'alive')




//j = left
//l = right
//i = up
//k = down



/*let test = testField.forEach(subArray => {if(subArray.indexOf('*')>0))
console.log(test)*/




  
  //myField.print()

 // console.log(`(${x}, ${y})`)
  