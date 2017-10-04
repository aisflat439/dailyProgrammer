const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function printLetterTriangle(array) {
  let triangle = ''
  let revLine = [];

  array.forEach((item, index, arr)=> {
    let lineStatement = '';

    for (let i = 0;  i <= index; i++) {
      lineStatement += arr[i];
    }
    for (let j = index -1; j >= 0; j--) {
      lineStatement += arr[j];
    }
    revLine.unshift(lineStatement)
    triangle += `${lineStatement}\n`;
  });
  triangle += revLine.join('\n');
  return triangle;
}

console.log(printLetterTriangle(alphabet));
