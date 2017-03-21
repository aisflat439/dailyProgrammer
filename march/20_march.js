'use strict'
// Happy Monday daily programmers! This question was submitted by one of our members. You should totes submit a question. All skill levels are welcome. Shoot me a DM with the question and I'll add it to the queue.
//
// Sort a string by cardinality of repeating c, then alphabetically within each partition created by cardinality sorting.
//
// An example: "abcdddeeeffff" would be sorted "ffffdddeeeabc"
//
// In the above, 'f' appears the most(4), so it comes first, followed by 'd's and 'e's (3), in alaphabetical order, since they have equal cardinality. Then follow 'a', 'b', and 'c' in alphabetical order since they all have the same cardinality(1).
//
// Another example: "cardinality" would be sorted "aaiicdlnrty"

function findLetterMatches(word) {
  let wordAsArray = word.split('');

  let len = wordAsArray.length;

  let sortedWord = wordAsArray.slice().sort();
  


  console.log("=============");
  console.log(wordAsArray);
  console.log(sortedWord);
  console.log("=============");

  // for each letter in words in a array
  // compare vs all other lettesre
  // if they match store them
  // if they don't store them elsewhere
  // sort string one
  // then string two
  // append string two to string one
 }

function stringSorter(word) {
  let wordAsArray = word.split('');
  return wordAsArray.sort()
}

console.log(findLetterMatches("repeating"));
console.log("----------------------");
console.log(stringSorter("characters"));
