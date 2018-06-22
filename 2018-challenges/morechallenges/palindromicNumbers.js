const checkHalves = (value) => {
    const half = value.length / 2
    let first = value.substr(0, half)
    let second = value.substr(half, value.length - 1).split('').reverse().join('')

    return first === second ? true : false
}

const findPalindromicNumbers = digits => {
    let numRange = Math.pow(10, digits);

    let arr = [...Array(numRange)].map((_, i) => i).filter(num => num >= numRange * .1)
    
    let answers = arr.map((item, _, array) => {
        let newnum = []
        array.forEach(value => {
            if (item * value >= numRange * 10 && checkHalves((item * value) + '')){
                newnum.push((item * value))
            }
        })
        return newnum
    })
    var merged = [].concat(...answers)
    return merged.sort().pop()
}

console.assert(9009 === findPalindromicNumbers(2))
console.assert(906609 === findPalindromicNumbers(3))
console.log(findPalindromicNumbers(4))