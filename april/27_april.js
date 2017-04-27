'use strict';

function checkValidArray(testArray){
  let valid = false;

  testArray.forEach((item, index, arr) => {
    if ((arr[index + 1] != undefined) && (arr[index + 2] != undefined)) {
      if ((arr[index] < arr[index + 1]) && (arr[index + 1] < arr[index + 2])) {
        valid = true;
      }
    }
  });

  return valid;
}

console.log(`Should return true:`);
console.log(checkValidArray([1, 2, 3, 4, 5]));
console.log(`Should return false:`);
console.log(checkValidArray([5, 4, 3, 2, 1]));
console.log(`Should return true:`);
console.log(checkValidArray([5, 1, 2, 4, 3]));
