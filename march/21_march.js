'use strict'

function sumOfDigits(numberToSum) {
  let sum = 0;
  while (numberToSum > 0) {
    sum += numberToSum % 10;
    numberToSum = ~~(numberToSum * .1);
    // numberToSum = ~~numberToSum;
  }
  return sum;
}

function sumOfDigitsByString(numberToSum) {
  let sum = 0;

  let num = numberToSum.toString();
  num = num.split('');

  for (let place of num) {
    sum += parseInt(place);
  }

  return sum;
}

console.log(sumOfDigitsByString(1492));
console.log(sumOfDigitsByString(1776));
console.log(sumOfDigitsByString(2011));

console.log(sumOfDigits(1492));
console.log(sumOfDigits(1776));
console.log(sumOfDigits(2011));
