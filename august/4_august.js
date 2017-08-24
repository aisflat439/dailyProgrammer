const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function testForPangram(...phrases) {
  let testResults = '';
  phrases.forEach(function(phrase) {
    let isPangram = true;
    let letters = phrase.split(' ').join('').split('').sort();

    alphabet.forEach(function(item){
      // console.log('item', item, letters.indexOf(item));
      if (letters.indexOf(item) === -1) {
        isPangram += false;
      }
    });
    if (isPangram === true) {
      testResults += 'true\n'
    } else {
      testResults += 'false\n'
    }
  });
  return testResults;
}

console.log(testForPangram('the quick brown fox jumps over the lazy dog', 'pack my box with five dozen liquor jugs', 'saxophones quickly blew over my jazzy hair'));

function altTestForPangram(...phrases) {
  let testResults = '';
  phrases.forEach(function(phrase) {
    let isPangram = true;
    let letters = phrase.split(' ').join('').split('');

    letters = [...new Set(letters)];

    isPangram = (letters.length === alphabet.length) ? true : false;
    testResults += isPangram ? 'true\n' : 'false\n';
  });
  return testResults;
}

console.log(altTestForPangram('the quick brown fox jumps over the lazy dog',
                            'pack my box with five dozen liquor jugs',
                            'saxophones quickly blew over my jazzy hair'));
