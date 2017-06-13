'use strict';

function matchPattern(pattern, string) {
  let match = true;
  pattern = Array.from(pattern);
  string = string.split(' ');

  if (pattern.length === string.length) {
    pattern.forEach((item, index) => {
      let valueToMatch = string[index];
      for (let i = 0; i < pattern.length; i++) {
        if (pattern[i] === item && valueToMatch !== string[i]) {
          match = false;
        }
      }
    });
  } else {
    match = false;
  }
  return match;
}

console.log(`Next line should be true:`);
console.log(matchPattern(`abba`, `cat dog dog cat`));
console.log(`Next line should be true:`);
console.log(matchPattern(`abab`, `cat dog cat dog`));
console.log(`Next line should be false:`);
console.log(matchPattern(`babb`, `cat dog cat dog`));
console.log(`Next line should be false:`);
console.log(matchPattern(`abaa`, `cat dog cat dog`));
