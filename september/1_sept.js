'use strict';

function findAndReplaceHexCode(hexString) {
  hexString = hexString.split(' ')

  let hexValues = hexString.filter((item) => {
    let value = new RegExp();
    return item = value.test(item);
  })

  return hexValues;
}

console.log(findAndReplaceHexCode("test value with nothing"))
console.log(findAndReplaceHexCode("test value 4 with 4"))
