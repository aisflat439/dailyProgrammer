'use strict';

function returnArithmeticSequences(array) {
  if (isArithmeticSequence(array)) {
    return true;
  }
  return 'Not an arithmetic sequence';
}

function isArithmeticSequence(array){
  let sequenceChecker = true;
  if (array.length >= 3) {
    let spread = array[1] - array[0];
    array.forEach((item, index) => {
      if (array[index + 1] !== undefined) {
        if (array[index + 1] - item !== spread) {
          sequenceChecker = false;
        }
      }
    });
  } else {
    sequenceChecker = false;
  }
  return sequenceChecker;
}

console.log("Should return 3:");
console.log(returnArithmeticSequences([1, 2, 3, 4]));
console.log("Should return 3:");
console.log(returnArithmeticSequences([2, 4, 6, 8]));
console.log("Should return 1:");
console.log(returnArithmeticSequences([1, 5, 9]));
console.log("Should return Not an arithmetic sequence:");
console.log(returnArithmeticSequences([1, 3, 3, 24]));
console.log("Should return Not an arithmetic sequence:");
console.log(returnArithmeticSequences([1, 3, 3]));
console.log("Should return Not an arithmetic sequence:");
console.log(returnArithmeticSequences([1, 3]));
