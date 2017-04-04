'use strict'

const fs = require('fs');

let elements = []

fs.readFile('./data/elements.csv', 'utf8', (error, elementsCSV) => {
  if (error) {
    console.log(`Something went wrong with your readFile`);
    console.log(error);
  }

  let elementsData = elementsCSV.split(`\r`);

  elementsData.forEach((item, index) => {
    item = item.split(',');
    let e = new Element(item[0], item[1], item[2], item[3]);
    elements.push(e)
  })

  console.log(elements);
});

function Element(number, symbol, name, weight) {
  this.number = number;
  this.symbol = symbol;
  this.name = name;
  this.weight = weight;
}
