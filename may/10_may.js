'use strict';

function translateRange(inputRange){
  let translatedRange = [];

  inputRange = inputRange.map((item, index, array) => {
    return cleanRangeDotSpreads(item);
  });

  if (typeof translatedRange === undefined || translatedRange.length === 0) {
    translatedRange.push(inputRange[0]);
  }

  for (let i = 1; i < inputRange.length; i++){
      let amountToBePushed = increaseByFactor(10, translatedRange[translatedRange.length - 1], inputRange[i]);
      translatedRange.push(amountToBePushed);
  }

  return translatedRange;
}

function increaseByFactor(factor, testVal, value) {
  if (value > testVal) {
    return value;
  } else {
    while (value < testVal) {
      value += factor;
    }
  }
  return value;
}

function cleanRangeDotSpreads(item) {
  if (typeof item === "number") {
    return item;
  } else {
    let dotSpreadAsArray = [];
    item = item.split('');
    let first = parseInt(item[0]);
    let last = parseInt(item.pop()) + 10;
    for (let i = first; i <= last; i++) {
      dotSpreadAsArray.push(i);
    }
    return dotSpreadAsArray;
  }
}

console.log(`Should print [1, 6, 14, 19, 21, 26]`);
console.log(translateRange([1, 6, 4, 9, 1, 6]));
console.log(`Should print [2, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 29]`);
console.log(translateRange([2, '9..9', 9]));
console.log(`Should print [5, 7, 10, 11, 19, 24]`);
console.log(translateRange([5, 7, 0, 1, 9, 4]));
