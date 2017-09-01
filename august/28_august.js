function isLatinSquare(size, latinSquareValues) {
  let isSquare = false;

  if (latinSquareValues.length % size !== 0) {
    return isSquare;
  }

  let square = [];
  for (let i = 0; i < size; i++) {
    let tempArr = []
    for (let k = 0; k < size; k++) {
      tempArr.push(latinSquareValues.shift());
    }
    square.push(tempArr);
  }

  

  console.log(square);
  return isSquare;
}

console.log(isLatinSquare(5, [1,2,3,4,5,5,1,2,3,4,4,5,1,2,3,3,4,5,1,2,2,3,4,5,1]));
console.log(isLatinSquare(4, [1,2,3,4,1,3,2,4,2,3,4,1,4,3,2,1]));
