'use strict'

function mergeOverlappingAmounts( ...pairs ){
  let overlappingValuesOnly = [];

  pairs.forEach((pair, index, pairs) => {
    if (index % 2 === 0) {
      overlappingValuesOnly.push(comparePair(pair, pairs[index + 1]));
    }
  });

  return overlappingValuesOnly;
}

function comparePair(setOne, setTwo) {
  let newPair = [];

  setOne = setOne.concat(setTwo);
  setOne.sort(function compare(a, b) {
    return a > b;
  });
  newPair.push(setOne[0]);
  newPair.push(setOne[3]);

  return newPair;
}

console.log("Should print [1,6] and [7,11]");
console.log(mergeOverlappingAmounts( [1, 3], [2, 6], [8, 10], [7, 11] ));
console.log("Should print [5,12]");
console.log(mergeOverlappingAmounts( [5, 12], [8, 10] ));
