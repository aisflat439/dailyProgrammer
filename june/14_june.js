'use strict';

function makeStringsAMatrix(arr) {
  let matrix = '';
  let longest = 0;

  arr.forEach((item) => {
    if (item.length > longest) {
      longest = item.length;
    }
  });

  arr.forEach((item) => {
    if (item.length < longest) {
      let numFillers = longest - item.length;
      for (let i = 0; i < numFillers; i++) {
        item += 'x'
      };
    }
    matrix += item + '\n';
  });
  return matrix;
}

console.log(makeStringsAMatrix(['dog', 'hound', 'fox', 'fish']));
