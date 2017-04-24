'use strict';

function productOfThreeInArray(numberSet){
  numberSet.sort((a, b) => {
    return b - a;
  });
  return numberSet[0] * numberSet[1] * numberSet[2];
}

console.log(`should be 495`);
console.log(productOfThreeInArray([1,4,6,8,9,11]));
console.log(`should be 495`);
console.log(productOfThreeInArray([11,4,9,8,6,1]));
console.log(`should be 720`);
console.log(productOfThreeInArray([5,8,1,18,4,2]));
console.log(`should be 490`);
console.log(productOfThreeInArray([3,7,2,7,4,10]));
