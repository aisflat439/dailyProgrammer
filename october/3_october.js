function zipSum(arrayOne, arrayTwo) {
  let zippedArray = [];

  arrayOne.forEach((item, index) => {
    if (item === arrayTwo[index]) {
      zippedArray.push(item + arrayTwo[index])
    } else {
      zippedArray.push(item > arrayTwo[index] ? item : arrayTwo[index]);
    }
  });

  return zippedArray;
}

console.log(zipSum([1, 2.4, 3], [7, 2.4, 3]));
console.log(zipSum([1, 2, 3], [1, 3, 2]));
console.log(zipSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
console.log(zipSum([], []));
