function returnReversedWords(phrase) {
    phrase = phrase.split(' ');
    phrase = phrase.map((word) => {
        let validLetters = /A-Za-z/;
        let character; 
        word =  word.split('');
        
        if (validLetters.test(word)){
            return word.reverse().join('');
        }
        character = word[word.length -1];
        word.pop();
        word.reverse().push(character);
        return word.join('');
    });
    return phrase.join(' ');
}

console.log(returnReversedWords('daily programmer rules!'));
console.log(returnReversedWords('That"s all folks!'));
