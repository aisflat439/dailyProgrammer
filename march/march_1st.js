'use strict'

// `[8, 1, 6, 3, 5, 7, 4, 9, 2] => true`
// `[2, 7, 6, 9, 5, 1, 4, 3, 8] => true`
// `[3, 5, 7, 8, 1, 6, 4, 9, 2] => false`
// `[8, 1, 6, 7, 5, 3, 4, 9, 2] => false`
const magicNumber = 15;

function magicBoxSolver(magicBox) {
  var mb = true;
  Object.values(magicBox).forEach(row => {
    // console.log(row);
    let valueOfRow = row.reduce((a, b) => {
      return a + b;
    });
    // console.log(valueOfRow);
    if (valueOfRow !== magicNumber) {
      mb = false;
    }
  });
  return mb;
}


function MagicBox(array){
  this.top = [array[0], array[1], array[2]];
  this.middle = [array[3], array[4], array[5]];
  this.bottom = [array[6], array[7], array[8]];
  this.diagonalBT = [array[6], array[4], array[2]];
  this.diagonalTB = [array[0], array[4], array[8]];
  this.column1 = [array[0], array[3], array[6]];
  this.column2 = [array[1], array[4], array[7]];
  this.column3 = [array[2], array[5], array[8]];
}

let mb1 = new MagicBox([8, 1, 6, 3, 5, 7, 4, 9, 2]);
let mb2 = new MagicBox([2, 7, 6, 9, 5, 1, 4, 3, 8]);
let mb3 = new MagicBox([3, 5, 7, 8, 1, 6, 4, 9, 2]);
let mb4 = new MagicBox([8, 1, 6, 7, 5, 3, 4, 9, 2]);

console.log(magicBoxSolver(mb1));
console.log(magicBoxSolver(mb2));
console.log(magicBoxSolver(mb3));
console.log(magicBoxSolver(mb4));
