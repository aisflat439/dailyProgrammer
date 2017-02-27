'use strict';

// // merge two sorted arrays into one sorted arrays
// Merge the following two sorted arrays into one sorted array.
//
// arrayOne = [ 2, 9, 22, 97, 167, 204 ]
// arrayTwo = [ 3, 7, 10, 22, 98, 188, 203, 205, 209, 215]

var ARRAY_ONE = [2, 9, 22, 97, 167, 204];
var ARRAY_TWO = [3, 7, 10, 22, 98, 188, 203, 205, 209, 215];

function mergeTwoArrays(arrayOne, arrayTwo){
  let mergedArray = []
  let shorterArray = arrayOne.length < arrayTwo.length ? arrayOne : arrayTwo;
  let longerArray = arrayOne.length >= arrayTwo.length ? arrayOne : arrayTwo;

  let len = longerArray.length;
  let k = 0;
  for (let i = 0; i < len; i++){
    while (shorterArray[k] <= longerArray[i]) {
      mergedArray.push(shorterArray[k]);
      k++;
    }
    mergedArray.push(longerArray[i]);
  }
  return mergedArray;
}

console.log(mergeTwoArrays(ARRAY_ONE, ARRAY_TWO));
