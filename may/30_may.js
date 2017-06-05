'use strict';

function removeMatchingValues(testArray, valueToRemove) {
  if (!valueToRemove) {
    return `${testArray}, No matching value was entered.`;
  }

  testArray = testArray.filter((item) => {
    if (item !== valueToRemove) {
      return item;
    }
  });

  return `${testArray} with ${valueToRemove} removed`;
}

console.log(removeMatchingValues([3, 6, 1, 3, 8, 8], 3));
console.log(removeMatchingValues([3, 6, 1, 3, 8, 8], 8));
console.log(removeMatchingValues([4, 2, 8, 4, 4, 2], 4));
console.log(removeMatchingValues([4, 2, 8, 4, 4, 2]));
