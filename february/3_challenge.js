'use strict'

function getFinishPosition(position) {
  if ((position % 100) === 11 || (position >= 10 && position <= 13)) {
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

for (let i = 1; i < 111; i++){
  console.log(getFinishPosition(i));
};
