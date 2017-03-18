'use strict';

let testArray = [3, 55, 2, 78];
let exampleArray = [34, 7, 38, 1];

function sortAndIndexArray(array){
  let holderArray = [];
  let stringValue = "";

  let len = array.length;
  for (let i = 0; i < len; i++) {
    let pojo = { value: array[i], location: (i + 1) };
    holderArray.push(pojo);
  }

  for (let i = 0; i < len; i++) {
    if (i != 0) { stringValue += '\n'; }
    stringValue += `Space ${holderArray[i].location} held ${holderArray[i].value}`;
  }

  return stringValue;
}

console.log("Should hold 1/3, 2/55, 3/2, 4/78");
console.log(sortAndIndexArray(testArray));
console.log("Should hold 1/34, 2/7, 3/38, 4/1");
console.log(sortAndIndexArray(exampleArray));
