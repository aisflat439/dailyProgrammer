'use strict'

const testWordsArray = ["abort", "times", "alloy", "taught", "arrow", "know", "below", "onscreen", "berry", "idea", "cello", "asked", "deist", "worlds", "feint", "best", "floss", "suggest", "hilly", "hippy"];

function wordTest(word) {
  var alphabetical = true;
  let letterArray = word.split('');

  for (let i = 0; i < letterArray.length -1; i++){
    if (letterArray[i] > letterArray[i + 1]){
      alphabetical = false;
      break;
    }
  }
  return alphabetical;
}

for (let i = 0; i < testWordsArray.length; i++){
  console.log(`${testWordsArray[i]}: ` + wordTest(testWordsArray[i]));
}
