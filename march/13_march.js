'use strict';

let test_title_one = "the quick brown fox jumped over the moon";
let test_title_two = "the curious incident of the dog in the nighttime";

function capitalzeTitle(titleString, exceptionsArray = [""]){
  let stringAsArray = titleString.split(" ");
  return stringAsArray;
}

console.log(capitalzeTitle(test_title_one));
console.log(capitalzeTitle(test_title_two));
