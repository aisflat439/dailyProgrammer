'use strict';

function wordLadder(startWord, endWord, wordArray){
  let count = 0;

  startWord = startWord.split('');
  endWord = endWord.split('');

  let len = startWord.length;
  for (let i = 0; i < len; i++){
    if (startWord.join('') === endWord.join('')){
      break;
    }
    if (startWord[i] !== endWord[i]){

    }
    // checkCharVsTargetWord(startWord[i], i);
    // checkVersusArray(char, wordArray);
    count++;
  }

  let value = `it worked! ${count}`
  return(value);
};


                      // hit -> hot -> dot -> dog -> cog
console.log(wordLadder("hit", "cog", ["hot", "dot", "log", "lot", "cog"] ));
