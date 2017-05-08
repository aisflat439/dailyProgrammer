'use strict';

function checkForPairsThatEqualZero(testArray){
  let hasPairThatEqualsZero = false;
  testArray.forEach((item) => {
    if (item === 0) {
      hasPairThatEqualsZero = true;
    }
    testArray.forEach((c) => {
      if ((item + c) === 0) {
        hasPairThatEqualsZero = true;
      }
    })
  })
  return hasPairThatEqualsZero;
}

console.log(`Should return true:`);
console.log(checkForPairsThatEqualZero([-1, 1, 8, 11]));
console.log(`Should return true:`);
console.log(checkForPairsThatEqualZero([-13, 3, 5, 13]));
console.log(`Should return false:`);
console.log(checkForPairsThatEqualZero([-13, 3, 5, 14]));
console.log(`Should return true:`);
console.log(checkForPairsThatEqualZero([-14435, 24, 566, 14435]));
console.log(`Should return true:`);
console.log(checkForPairsThatEqualZero([-48, -13, 0, 15, 49, 144]));
console.log(`Should return false:`);
console.log(checkForPairsThatEqualZero([-48, -13, 1, 15, 49, 144]));
