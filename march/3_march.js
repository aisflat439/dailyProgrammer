'use strict'

const fs = require('fs');

var realEstateRecordArray = [];
var titleRows = 10;

fs.readFile('./data/realEstate.csv', 'utf8', (err, data) => {
  if (err) {
    console.log("Something went wrong with your fs: \n" + err);
  }

  let csvDataArray = data.split('\r');//.split(/\r?\n/);

  let len = csvDataArray.length;
  for (let i = titleRows; i < len; i++){
    var value = csvDataArray[i].split(',');
    if (!(value[9] == 0 || value[6] == 0)) {
      var r = new RealEstateRecord(value[0], value[1], value[2], value[3], value[4], value[5], value[6], value[7], value[8], value[9], value[10], value[11]);
      realEstateRecordArray.push(r);
    }
  }

  realEstateRecordArray.sort(function(a, b) {
    return parseFloat(a.pricePerSqFt) - parseFloat(b.pricePerSqFt);
  });

  console.log(realEstateRecordArray[0]);

});

function RealEstateRecord(street, city, zip, state, beds, baths, sqft, type, saleDate, price, lat, lon){
  this.street = street;
  this.city = city;
  this.zip = zip;
  this.state = state;
  this.beds = beds;
  this.baths = baths;
  this.sqft = sqft;
  this.type = type;
  this.saleDate = saleDate;
  this.price = price;
  this.latitude = lat;
  this.longitude = lon;
  this.pricePerSqFt = (this.price / this.sqft).toFixed(2);
}
