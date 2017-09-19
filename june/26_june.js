'use strict';

function getBowlingScore(scoreArray) {
  let score = 0,
      frame = 1,
      allFrames = [];

  scoreArray.forEach((item, index) => {
    let frame = new Frame(index + 1, item);
    allFrames.push(frame)
  });

  return allFrames;
}

function Frame(frameNumber, score) { //, firstPreviousFrame, secondPreviousFrame) {
  this.score = score;
  // this.previousFrame = firstPreviousFrame.getScore();
  // this.secondPreviousFrame = secondPreviousFrame.getScore();
  this.isSpare = false;
  this.isStrike = false;
  this.frameNumber = frameNumber;

  function getScore() {
    return this.score;
  }

  function getFrameNumber() {
    return this.frameNumber;
  }
}




// function getBowlingScore(scoreArray) {
//   let score = 0,
//       frame = 1,
//       previousFrameIsSpare = false,
//       currentFrameIsSpare = false,
//       previousFrameIsStrike = false,
//       currentFrameIsStrike = false;
//
//   scoreArray.forEach((item) => {
//     if (item === 'X') {
//       if (previousFrameIsStrike){
//         score += 20;
//       } else {
//         score += 10;
//       }
//       frame++;
//       previousFrameIsStrike = true;
//     }
//
//     if (item === 'XXX') {
//       if (previousFrameIsStrike){
//         score += 40;
//       } else {
//         score += 30;
//       }
//       frame++;
//       previousFrameIsStrike = true;
//     }
//   });
//
//   return `Score: ${score}, numFrames: ${frame}`;
// }

console.log(`Next line should be 300`);
console.log(getBowlingScore(['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'XXX']));
// console.log(`Next line should be 299`);
// console.log(getBowlingScore(['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'XX9']));
// console.log(getBowlingScore(['1,3']));
