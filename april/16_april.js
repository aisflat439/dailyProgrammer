'use strict';

function anagramTester(firstString, secondString) {
  let reorderedStringOne,
      reorderedStringTwo;

  reorderedStringOne = Array.from(firstString).sort((a, b) => {
    return a < b;
  });
  reorderedStringTwo = Array.from(secondString).sort((a, b) => {
    return a < b;
  });

  if (reorderedStringOne.toString() == reorderedStringTwo.toString()) {
    return `${firstString} and ${secondString} are anagrams`;
  } else {
    return `${firstString} and ${secondString} are not anagrams`;
  }
}

console.log(anagramTester(`anagram`, `nagaram`));
console.log(anagramTester(`cow`, `dog`));
