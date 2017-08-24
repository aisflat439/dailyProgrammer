'use strict';

function testIfAnagram(phraseOne, phraseTwo) {
  if (compare(phraseOne, phraseTwo)) {
    return `${phraseOne} and ${phraseTwo} are anagrams`;
  } else {
    return `${phraseOne} and ${phraseTwo} are not anagrams`;
  }
}

function compare(itemOne, itemTwo) {
  let isAnagram = false;
  itemOne = itemOne.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
  itemTwo = itemTwo.toLowerCase().replace(/\s+/g, '').split('').sort().join('');

  return isAnagram = (itemOne === itemTwo) ? true : false;
}


console.log(testIfAnagram('Philly Dev', 'Veld Hi Ply'));
console.log(testIfAnagram('Daily Programmer', 'Darmak and Jalad at Tanagra'));
