function outputThrees(number) {
  let output = 'runs';

  let counter = 0;
  while (number !== 1) {
   number--;
   
  }
  // while (number !== 1) {
  //   if (number % 3 === 0) {
  //     // if (number / 3 !== 1) {
  //        number = number / 3;
  //        counter++;
  //     // }
  //   }
  //   if ((number + 1) % 3 === 0) {
  //       number = number + 1;
  //       counter += 1000
  //   }
  //   if ((number - 1) % 3 === 0) {
  //       number = number - 1;
  //       counter += 1000000
  //   }
  // }
  console.log(counter)
  return output;
}

// console.log(outputThrees(3));
console.log(outputThrees(100));
