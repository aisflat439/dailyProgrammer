'use strict';

function onePassBubbleSort(array){
  let bubbledArray = array;

  array.forEach((item, index, array) => {
    if (item < array[index + 1]){
      printArray(bubbledArray);
    } else {
      bubbledArray[index + 1] = item;
      bubbledArray[item] = array[index + 1];
      printArray(bubbledArray);
    }
  });

  return true;
}

function printArray(array) {
  console.log(array.join(' '));
}

onePassBubbleSort([1, 4, 3, 2, 6, 5]);
