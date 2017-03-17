'use strict';

let testArray = [3, 55, 2, 78];
let exampleArray = [34, 7, 38, 1];

function sortAndIndexArray(array){
  let arrayAsObj = {};

  var len = array.length;
  for (let i = 0; i < len; i++) {
    arrayAsObj[array[i]] = i + 1;
  }
  let value = createSentence(arrayAsObj);
  console.log(value);
  return arrayAsObj;
}

function createSentence(obj) {
  let sentence = "";

  for each (var item in obj) {
    sentence += "its " item + "\n";
  }

  return sentence;
}

console.log(sortAndIndexArray(testArray));
console.log(sortAndIndexArray(exampleArray));
