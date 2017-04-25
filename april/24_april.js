'use strict';

function productOfThreeHighestInArray(numberSet){
  numberSet.sort((a, b) => {
    return b - a;
  });
  return numberSet[0] * numberSet[1] * numberSet[2];
}

console.log(`should be 495`);
console.log(productOfThreeHighestInArray([1, 4, 6, 8, 9, 11]));
console.log(`should be 495`);
console.log(productOfThreeHighestInArray([11, 4, 9, 8, 6, 1]));
console.log(`should be 720`);
console.log(productOfThreeHighestInArray([5, 8, 1, 18, 4, 2]));
console.log(`should be 490`);
console.log(productOfThreeHighestInArray([3, 7, 2, 7, 4, 10]));
