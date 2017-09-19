'use strict';

function testIfAnagram(phraseOne, phraseTwo) {
  if (compare(phraseOne, phraseTwo)) {
    return `${phraseOne} and ${phraseTwo} are anagrams`;
  } else {
    return `${phraseOne} and ${phraseTwo} are not anagrams`;
  }
}

function compare(itemOne, itemTwo) {
  let isAnagram = false;
  itemOne = itemOne.toLowerCase().replace(/\s+/g, '').split('').sort().join('');
  itemTwo = itemTwo.toLowerCase().replace(/\s+/g, '').split('').sort().join('');

  return isAnagram = (itemOne === itemTwo) ? true : false;
}


console.log(testIfAnagram('Philly Dev', 'Veld Hi Ply'));
console.log(testIfAnagram('Daily Programmer', 'Darmak and Jalad at Tanagra'));




<meta name="viewport" content="width=device-width, initial-scale=1.0">

<div class="parent">
    <div class="child">Item one</div>
    <div class="child second">Item two</div>
    <div class="child">Item one</div>
</div>

<style>
.parent {
    display: flex;
}

.child {
    min-height: 50px;
    background-color: blue;
    flex: 1;
}

.second {
    flex: 2;
    background-color: yellow;
}

@media screen (min-width: 501px) {
    .second {
        flex: 1;
        background-color: green;
    }
}

@media screen(min-width: 800px) {

}

</style>
