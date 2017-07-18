function printSquare(number) {
  let numberSquared = number * number,
      values = [],
      testValues = [],
      printedLine = '',
      pairs = {};

  for (let i = 1; i <= numberSquared; i++) {
    printedLine += ' ' + i;
    if (i % number === 0) {
      printedLine += '\n';
    }
    values.push(i);
  }

  values.forEach((item, index, array) => {
    for (let i = 0; i < number; i++) {
      if (item % number === i) {
        pairs[item] = i;
      }
    }
  });

  return printedLine  ;
}

console.log(printSquare(5));
console.log(printSquare(4));
