'use strict';

function fridayFizzBuzz(){
  let statement = ``;

  [...Array(100)].forEach((item, index) => {
    let value = index + 1;
    statement += `${value} `;
    if (value % 3 === 0) {
      statement += `Fizz`;
    }
    if (value % 5 === 0){
      statement += `Buzz`;
    }
    statement += `\n`;
  });

  return statement;
}

console.log(fridayFizzBuzz());
