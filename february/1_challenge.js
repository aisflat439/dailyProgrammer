'use strict'

// Today's challenge is FizzBuzz.
// Since you know it, it should be a good starting point.

function fizzBuzz(value) {
  let output = "";

  if (value === 0){
    return output += "You entered zero";
  }

  if (value < 0){
    for (let i = value; i < 0; i++){
      output += "\n" + i + " ";
      output += modulusCheck(3, i);
      output += modulusCheck(5, i, "Buzz");
    }
  } else {
    for (let i = 1; i <= value; i++){
      output += "\n" + i + " ";
      output += modulusCheck(3, i);
      output += modulusCheck(5, i, "Buzz");
    }
  }

  return output;
}

function modulusCheck(valueToCheckAgainst, numberBeingChecked, outputDesired = "Fizz"){
  let output = "";

  if (numberBeingChecked % valueToCheckAgainst === 0){
    output += outputDesired;
  }

  return output;
}

console.log(fizzBuzz(0));
console.log(fizzBuzz(100));
console.log(fizzBuzz(-100));
