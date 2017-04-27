'use strict';

function getProductOfAllIntsExceptAtIndex(array) {
  let productsOfArray = [];

  array.forEach((item, index, arr) => {
    let product = 0;
    arr.splice(index, 1).reduce((acc, i) => {
      return acc * i;
    }, 1);
    productsOfArray.push(product)
  });


  return productsOfArray;
}

console.log(`Next line should be 84, 12, 28, 21`);
console.log(getProductOfAllIntsExceptAtIndex([1, 7, 4, 3]));
console.log(`Next line should be 96, 0, 0, 0`);
console.log(getProductOfAllIntsExceptAtIndex([8, 2, 6, 0]));
console.log(`Next line should be 75, 75, 45, 45`);
console.log(getProductOfAllIntsExceptAtIndex([3, 3, 5, 5]));
console.log(`Next line should be -504, 144, -126, 112`);
console.log(getProductOfAllIntsExceptAtIndex([-2, 7, -8, 9]));
