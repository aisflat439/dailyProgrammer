function acdcSort(arrayToSort) {
  let numberArray = arrayToSort.filter((item) => {
    return !isNaN(item);
  });
  let letterArray = arrayToSort.filter((item) => {
    return isNaN(item);
  });

  numberArray = numberArray.sort(function(a, b) {
    return a - b;
  })
  letterArray = letterArray.sort(function(a, b) {
    return a < b;
  })

  for (let i = 0; i < arrayToSort.length; i++) {
    if (isNaN(arrayToSort[i])) {
      arrayToSort[i] = letterArray.shift()
    } else {
      arrayToSort[i] = numberArray.shift()
    }
  }

  return arrayToSort;
}

console.log(acdcSort(['a', 3, 'b', 2, 'c', 1]));
console.log(acdcSort([3, 2, 1]));
console.log(acdcSort(['a', 'b', 'c']));
console.log(acdcSort([5, 'a', 'x', 3, 6, 'b']));
