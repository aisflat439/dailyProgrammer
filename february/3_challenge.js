'use strict'

function getFinishPosition(position) {
  if ((position % 100) === 11) {
    return position + "th place";
  }

  let finishString = "" + position;
  finishString += appendCorrectly(getTensPlaceValue(position));
  finishString += " place";
  return finishString;
}

function getTensPlaceValue(num){
  let tensPlace = ``;
  tensPlace = num < 10 ? num : num % 10;
  return tensPlace;
};

function appendCorrectly(num) {
  let correctStringValue = '';
  if (num >= 4){
    correctStringValue = 'th';
  } else if (num === 3) {
    correctStringValue = 'rd';
  } else if (num === 2) {
    correctStringValue = 'nd';
  } else {
    correctStringValue = 'st';
  }
  return correctStringValue;
}

console.log("The next line should be 11th place");
console.log(getFinishPosition(11));
console.log("The next line should be 21st place");
console.log(getFinishPosition(21));
console.log("The next line should be 4th place");
console.log(getFinishPosition(4));
console.log("The next line should be 33rd place");
console.log(getFinishPosition(33));
console.log("The next line should be 5th place");
console.log(getFinishPosition(5));
console.log("The next line should be 211th place");
console.log(getFinishPosition(211));
