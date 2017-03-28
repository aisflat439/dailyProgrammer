'use strict'
// Happy Tuesday daily_programmer!
//
// Write a function that combines two lists by alternatingly taking elements. For example: given the two lists [a, b, c] and [1, 2, 3], the function should return [a, 1, b, 2, c, 3]
//
// Please DM me with ideas for future problems. When you have completed it post a link to your solution.

function mergeArrays(arrayOne, arrayTwo) {
  let len = arrayOne.length > arrayTwo.length ? arrayOne.length : arrayTwo.length;
  let mergedArray = [];

  if (arrayOne.length === len){
    arrayOne.forEach((item, index) => {
      mergedArray.push(item);
      if (arrayTwo[index] !== undefined) {
        mergedArray.push(arrayTwo[index])
      }
    })
  } else {
    arrayTwo.forEach((item, index) => {
      if (arrayOne[index] !== undefined) {
        mergedArray.push(arrayOne[index])
      }
      mergedArray.push(item);
    })
  }

  return mergedArray;
}

console.log(mergeArrays(["1", "2", "3"], ["a", "b", "c"]));
console.log(mergeArrays(["1", "2", "3"], ["a", "b"]));
console.log(mergeArrays(["1", "2", "3"], ["a", "b", "c"]));
console.log(mergeArrays(["1", "2"], ["a", "b", "c"]));
