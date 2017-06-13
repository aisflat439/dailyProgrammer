process.stdin.resume();
process.stdin.setEncoding('utf8');
var util = require('util');

const secretName = `tom\n`;

console.log('Guess a name:');
process.stdin.on('data', function (text) {
  text = text.toLowerCase();
  if (text === `${secretName}\n`) {
    done();
  }

  if (text.length > secretName.length) {
    console.log(`your guess is too long`);
  } else if (text.length < secretName.length){
    console.log(`your guess is too short`);
  } else {
    if (text === secretName) {
      done();
    } else {
      // note correct letters
      let guess = text.split('');
      let secret = secretName.split('') ;
      let count = 0;
      guess.forEach((val, item, arr) => {
        // 
      })
      console.log(guess);
      console.log(secret);
    }
  }
});

function done() {
  console.log('Correct!');
  process.exit();
}
