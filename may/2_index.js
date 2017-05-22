'use strict';

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function wordShiftCipher(keyword, phrase) {
  let codedPhrase = '',
      locationHolder = [];

  keyword = keyword.toLowerCase().split('');
  alphabet.forEach((letter, index) => {
    if (keyword[0] === letter) {
      console.log(`match found ${keyword[0]} ${letter}`);
      locationHolder.push(index);
      keyword = keyword.shift();
    }
  })

  // console.log(alphabet);

  return locationHolder;
}

console.log(wordShiftCipher('word', 'test phrase'));
console.log(wordShiftCipher('PhillyTechWeek', 'Obviously, you\'re not a golfer'));
