'use strict';

function findSubstring(testString){
  let newString = [];
  testString = testString.split('');

  testString = testString.filter((element, index, array) => {
    // test letter versus the next letter in the array.
    // if there is no match, add element to array and continue
    if (element !== array[index + 1]) {
      return element;
    }
    // if there is a match, add element to new string and quit
  })

  return `${testString.join('')}, which the length is ${testString.length}`;
}

console.log(`Should print \n"abc", which the length is 3`);
console.log(findSubstring(`abcabcbb`));
console.log(`Should print \n"b", which the length is 1`);
console.log(findSubstring(`bbbbb`));
console.log(`Should print \n"wke", which the length is 3`);
console.log(findSubstring(`pwwkew`));
