// * Happy Monday daily_programmer *

//     Write a function `questionMarks` that takes a string and returns true if there are exactly three question marks that between every 2 digits that add up to 10.

//         ```
// true === questionMarks('5???5')
// false === questionMarks('5???4')
// false === questionMarks('5??5')
// true === questionMarks('acc?7??sss?3rr1??????5')
// true === questionMarks('acc?7??sss?3rr5???5')
// false === questionMarks('acc?7??sss?3rr5???4')
// false === questionMarks('ac6?7')
// ```

//         * Please DM me or Richie with ideas for future problems or future themed weeks.When you have completed it post a link to your solution.*
// *if you have a question about someones solution please use a thread under their posted link.*


function firstAndLastEqualTen(arrayString) {
    return parseInt(arrayString.charAt(0)) + parseInt(arrayString.slice(-1)) === 10
}

const questionMarks = str => {
    let holder
    let validChunkArray = []
    let cleanString = str.replace(/[^0-9^?]/g, '')
    
    if (cleanString.length < 5) { return false }

    let validChunk = RegExp('[0-9]\\?{3}[0-9]', 'g');

    while ((holder = validChunk.exec(cleanString)) !== null) {
        validChunkArray.push(holder[0])
    }
    
    return validChunkArray.every(firstAndLastEqualTen)
}

console.assert(true === questionMarks('5???5'))
console.assert(false === questionMarks('5???4'))
console.assert(false === questionMarks('5??5'))
console.assert(true === questionMarks('acc?7??sss?3rr1??????5'))
console.assert(true === questionMarks('acc?7??sss?3rr5???5'))
console.assert(false === questionMarks('acc?7??sss?3rr5???4'))
console.assert(false === questionMarks('ac6?7'))
