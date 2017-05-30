'use strict';

function removeDuplicates(testArray, valueToRemove) {
  testArray = testArray.filter((item) => {
    if (item !== valueToRemove) {
      return item;
    }
  });

  return `${testArray} with ${valueToRemove} removed`;
}

console.log(removeDuplicates([3, 6, 1, 3, 8, 8], 3));
console.log(removeDuplicates([3, 6, 1, 3, 8, 8], 8));
console.log(removeDuplicates([4, 2, 8, 4, 4, 2], 4));
