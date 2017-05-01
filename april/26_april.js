'use strict';

function findOverlapsOnArray(testArrayOne, testArrayTwo) {
  let matches = testArrayOne.filter((item) => {
    for (let i = 0; i < testArrayTwo.length; i++) {
      if (testArrayTwo[i] === item) {
        return item;
      }
    }
  });

  let mergedArray = testArrayOne.map((item) => {

  });

  return `${mergedArray} and ${matches}`;
}

console.log(`Should print [1, 2, 3, 7, 8, 11, 13] and [7, 8].`);
console.log(findOverlapsOnArray([2, 5, 7, 8, 11], [1, 3, 7, 8, 13]));
