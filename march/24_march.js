'use strict';

function vowelCounter(testString) {
  const vowels = ["a", "e", "i", "o", "u"];
  const sometimesY = ["y"];

  let vowelCount = 0,
      yCount = 0;

  let checkWord = testString.toLowerCase().split('');

  checkWord.forEach((letter) => {
    let numberOfMatches = checkVsArray(letter, vowels);
    vowelCount += numberOfMatches;
    numberOfMatches = checkVsArray(letter, sometimesY);
    yCount += numberOfMatches;
  })

  let returnString = `There are ${vowelCount} vowels`;
  if (yCount) {
    returnString += ` and ${yCount} y`;
  }
  returnString += ` in ${testString}`;
  return returnString;
}

function checkVsArray(letter, array){
  let matchCount = 0;

  array.forEach((vowel) => {
    if (vowel === letter){
      matchCount++;
    }
  })
  return matchCount;
}


console.log(vowelCounter("Pixel"));
console.log(vowelCounter("Friday daily challenge"));
console.log(vowelCounter("Analagous"));
