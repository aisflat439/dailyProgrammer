'use strict';

function createCipher(shiftValue, word) {
  const asciiWrapValue = 122;
  const asciiStartValue = 96;
  let wordAsCipher = [];
  word = word.toLowerCase().split('');

  word.forEach((letter) => {
    let charValue = letter.charCodeAt(0);
    charValue += shiftValue;
    if (charValue > asciiWrapValue) {
      charValue = asciiStartValue + (charValue - asciiWrapValue);
    }
    charValue = String.fromCharCode(charValue);
    wordAsCipher.push(charValue);
  });

  return wordAsCipher;
}

console.log(createCipher(5, 'PhillyDev'));
