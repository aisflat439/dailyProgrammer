const { performance } = require('perf_hooks')

const hasNoRemainder = (value, begin, end) => {
    for (let i = begin; i <= end; i++) {
        if (value % i !== 0) {
            return false
        }
    }
    return true    
}

const multipleFinder = (begin, end) => {
    let smallestMultiple = begin
    while (!hasNoRemainder(smallestMultiple, begin, end)) {
        smallestMultiple++
    }
    return smallestMultiple
}

// console.assert(2520 === multipleFinder(1, 10))
var t0 = performance.now();
multipleFinder(1, 20)
var t1 = performance.now();
console.log("Call to multipleFinder took " + (t1 - t0) + " milliseconds.")
console.log(multipleFinder(1, 20))