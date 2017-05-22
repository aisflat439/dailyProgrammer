'use strict';

function findSubsetsThatSumToZero(arraySet) {
  let hasMatch = false;
  let length = arraySet.length;
  arraySet.forEach((item, index, array) => {
    if (item === 0) {
      hasMatch = true;
    }
    let subset = [];
    for (let i = 0; i < index; i++){
      subset.push(array[i]);
      let sumOfSubset = subset.reduce((accumuator, value) => {
        return accumuator + value;
      });
      if (item + sumOfSubset === 0) {
        hasMatch = true;
      }
    }
  });

  return hasMatch;
}

console.log(`Should be true`);
console.log(findSubsetsThatSumToZero([-3, 1, 2]));
console.log(`Should be true`);
console.log(findSubsetsThatSumToZero([-98634, -86888, -48841, -40483, 2612, 9225, 17848, 71967, 84319, 88875]));
console.log(`Should be false`);
console.log(findSubsetsThatSumToZero([-3, 2, 7]));
console.log(`Should be false`);
console.log(findSubsetsThatSumToZero([-83314, -82838, -80120, -63468, -62478, -59378, -56958, -50061, -34791, -32264, -21928, -14988, 23767, 24417, 26403, 26511, 36399, 78055]));
console.log(`Should be true`);
console.log(findSubsetsThatSumToZero([-3, 0, 2, 7]));
