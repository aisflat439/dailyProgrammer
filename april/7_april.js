'use strict';

function findSubstring(testString){
  let newString = [];
  testString = testString.split('');

  for (let i = 0; i < testString.length; i++)   {
    if ((testString[i] !== testString[i + 1]) && testString[i] !== newString[newString.length - 1]) {
      newString.push(testString[i]);
    }
    if (testString[i] === testString[i + 1]) {
      newString.push(testString[i]);
      break;
    }
  }

  return `${newString.join('')}, which the length is ${newString.length}`;
}

console.log(`Should print \n"abc", which the length is 3`);
console.log(findSubstring(`abcabcbb`));
console.log(`Should print \n"b", which the length is 1`);
console.log(findSubstring(`bbbbb`));
console.log(`Should print \n"wke", which the length is 3`);
console.log(findSubstring(`pwwkew`));
