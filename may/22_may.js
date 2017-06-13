'use strict'
//
const fs = require('fs');

let elements = []

fs.readFile('./data/elements.csv', 'utf8', (error, elementsCSV) => {
  if (error) {
    console.log(`Something went wrong with your readFile`);
    console.log(error);
  }

  let currentSubset = [];
  let elementsData = elementsCSV.split(`\r`);

  elementsData.forEach((item, index) => {
    item = item.split(',');
    let e = new Element(item[0], item[1], item[2], item[3]);
    elements.push(e)
  });

  let values = ['H2O', 'CH4', 'NH3'];
  values = cleanInputs(values);
  console.log(values);
  let inputs = ['H', 'C', 'N', 'O'];

  values.forEach((item, index, array) => {
    // test each value

  })

  currentSubset = elements.filter((item, index, arr) => {
    // inputs.forEach((input) => {
      if (item.symbol === inputs[0]) {
        return item;
      } else if (item.symbol === inputs[1]) {
        return item;
      } else if (item.symbol === inputs[2]) {
        return item;
      } else if (item.symbol === inputs[3]) {
        return item;
      } else {
      }
    // })
  });

  // console.log(elements[2].symbol);

  console.log(currentSubset);

});

function Element(number, symbol, name, weight) {
  this.number = number;
  this.symbol = symbol;
  this.name = name;
  this.weight = weight;
}

// switch this to taking one item
// then you can get the return 2 - H and 2 - O
// you can then do the math on that.
function cleanInputs(array) {
  array = array.join().split('');
  return array;
}
