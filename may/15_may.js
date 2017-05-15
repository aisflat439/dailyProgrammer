'use strict';

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output:process.stdout
});

let rowOne = '';
let rowTwo = '';

rl.question(`Please reply with row one\n`, (answer1) => {
  rl.question(`Please reply with row two\n`, (answer2) => {
    rowOne = answer1;
    rowTwo = answer2;

    console.log(splitWordsIntoColumns(rowOne, rowTwo));

    rl.close;
  });
});

function splitWordsIntoColumns(wordOne, wordTwo) {
  let newWord = '';

  wordOne = wordOne.split('');
  wordTwo = wordTwo.split('');

  let len = '';
  if (wordTwo.length > wordOne.length) {
    len = wordTwo.length;
  } else {
    len = wordOne.length;
  }

  for (let i = 0; i < len; i++){
    if (wordOne[i] === undefined) {
      newWord += ' ';
    } else {
      newWord += wordOne[i];
    }
    if (wordTwo[i] === undefined) {
      newWord += ' ';
    } else {
      newWord += wordTwo[i];
    }
    newWord += '\n';
  }

  return newWord;
}
