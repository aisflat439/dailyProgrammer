'use strict';

function anagramTester(firstString, secondString) {
  let reorderedStringOne,
      reorderedStringTwo;

  reorderedStringOne = firstString.split('').sort((a, b) => {
    return a < b;
  });
  reorderedStringTwo = secondString.split('').sort((a, b) => {
    return a < b;
  });

  if (reorderedStringOne.join('') == reorderedStringTwo.join('')) {
    return `${firstString} and ${secondString} are anagrams`;
  } else {
    return `${firstString} and ${secondString} are not anagrams`;
  }
}

console.log(anagramTester(`anagram`, `nagaram`));
console.log(anagramTester(`cow`, `dog`));
