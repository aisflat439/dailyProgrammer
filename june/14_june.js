'use strict';

function makeStringsAMatrix(arr) {
  let matrix = '';

  arr.forEach((item) => {
    matrix += item + '\n';
  });
  return matrix;
}

console.log(makeStringsAMatrix(['dog', 'fox', 'fish', 'hound']));
