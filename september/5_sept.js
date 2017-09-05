'use strict';

const ALPHABET = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function isAlphabetized(testString) {
  let highestValue = 0;
  let alphabetized = true;
  testString = testString.split('');
  testString.forEach((letter) => {
    if (highestValue > ALPHABET.indexOf(letter)) {
      alphabetized = false;
    }
    highestValue = ALPHABET.indexOf(letter);
  });
  return alphabetized;
}

console.log(isAlphabetized('cereal'));
console.log(isAlphabetized('almost'));
