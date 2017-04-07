'use strict';

function keplarsRoutine(testNumber){
  let count = 0;
  testNumber = reverse(testNumber);

  return `${testNumber} took ${count} loops`;
}

function reverse(number) {
  let reversed = 0;

  while (number > 0) {
    reversed = reversed * 10;
    reversed = reversed + number % 10;
  }

  return reversed;
}

console.log(keplarsRoutine(4920));
console.log(keplarsRoutine(8219));
console.log(keplarsRoutine(7392));
