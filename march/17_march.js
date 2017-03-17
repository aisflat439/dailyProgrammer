'use strict';

function fizzBuzz(num){
  let response = '';

  for (let i = 1; i <= num; i++){
    if (i % 15 === 0) {
      response += i + ' fizzBuzz\n';
    } else if (i % 3 === 0) {
      response += i + ' fizz\n';
    } else if (i % 5 === 0) {
      response += i + ' buzz\n';
    } else {
      response += '';
    }
  }
  return response;
}

console.log(fizzBuzz(100));
