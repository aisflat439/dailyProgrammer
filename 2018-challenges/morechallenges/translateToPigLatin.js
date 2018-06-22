// * Happy Thursday daily_programmer *

//     Write function that translates a text to Pig Latin and back.English is translated to Pig Latin by taking the first letter of every word, moving it to the end of the word and adding ‘ay’.“The quick brown fox” becomes “Hetay uickqay rownbay oxfay”.


// Words that start with a vowel(A, E, I, O, U) simply have "WAY" appended to the end of the word.
// Words that start with a consonant have all consonant letters up to the first vowel moved to the end of the word(as opposed to just the first consonant letter), and "AY" is appended.
//      ('Y' is counted as a vowel in this context)

//     ```
// 'excellentway' === translateToPigLatin('excellent')
// 'ailyday' === translateToPigLatin('daily')
// 'ogrammerpray' === translateToPigLatin('programmer')
// 'ethay ickquay ownbray oxfay' === translateToPigLatin('the quick brown fox')
// 'illyphay evday ailyday ogrammerpray' === translateToPigLatin('philly dev daily programmer')
// ```

//     * Please DM me or Richie with ideas for future problems or future themed weeks.When you have completed it post a link to your solution.*

const latinizeWord = target => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
    let word = target.split('')
    if (vowels.includes(word[0])) return word.join('') + 'way'

    while (!vowels.includes(word[0])) {
        if (word[0] === 'q') {
            // This should be more obvious what's happening here
            // basically when q is the letter you want to move q and u to the end
            word.push(word.shift())
            word.push(word.shift())
        } else {
            word.push(word.shift())
        }
    }

    return word.join('') + 'ay'    
}

const translateToPigLatin = phrase => {
    return phrase.split(' ').map(word => latinizeWord(word)).join(' ')
}

console.assert('aimway' === translateToPigLatin('aim'))
console.assert('ailyday' === translateToPigLatin('daily'))
console.assert('ogrammerpray' === translateToPigLatin('programmer'))
console.assert('ethay ickquay ownbray oxfay' === translateToPigLatin('the quick brown fox'))
console.assert('illyphay evday ailyday ogrammerpray' === translateToPigLatin('philly dev daily programmer'))