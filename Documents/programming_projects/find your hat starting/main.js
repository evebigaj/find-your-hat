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

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

  myField.print()



//todo: learn if I can do this with arrow key

// left & right: move within same array
//up and down: move to other array at same index
//how to find index of '*'? 

let testField = myField.field

//array.includes
//array.findIndex

let state = 'alive'
let y = testField.findIndex(array => array.includes('*'))
let x = testField[y].findIndex(element => element === '*')


//var dir = ['j','l','i','k'][Math.floor(Math.random()*4)]
//var dir = 'l'

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
  