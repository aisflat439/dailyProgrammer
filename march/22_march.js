'use strict';

function weightedSumOfDigits(value) {
  let sum = 0,
      valueAsArray = createArrayOfDigits(value);

  valueAsArray.forEach((val, i) => {
      sum += val * (i + 1);
  });

  return sum;
}

function createArrayOfDigits(value) {
  let array = [];

  while (value > 0){
    array.push(value % 10);
    value = ~~(value * .1);
  }

  return array.reverse();
}

console.log(weightedSumOfDigits(1492));
console.log(weightedSumOfDigits(1776));
console.log(weightedSumOfDigits(2011));
