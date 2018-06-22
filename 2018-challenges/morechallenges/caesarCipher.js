
const shiftLetters = (str, shift) => {
    const charCodes = [...str].map(letter => letter.toLowerCase().charCodeAt());
    const shiftedCodes = charCodes.map(number => {
        if (number === 32) {
            return number
        }
        if (shift < 0) {
            return number + shift <= 97 ? number + shift + 26 : number + shift
        }
        return number + shift <= 122 ? number + shift : number - 26 + shift
    })
    return shiftedCodes.map(number => String.fromCharCode(number)).join('')
}

console.assert('d' === shiftLetters('a', 3))
console.assert('jk' === shiftLetters('ab', 9))
console.assert('nm' === shiftLetters('az', 13))
console.assert('skloob ghy uxohv' === shiftLetters('Philly Dev Rules', 3))
console.assert('wopssf klc ybslz' === shiftLetters('Philly Dev Rules', 7))
console.assert('hzaddq vwn jmdwk' === shiftLetters('Philly Dev Rules', 18))
console.assert('v' === shiftLetters('a', -5))