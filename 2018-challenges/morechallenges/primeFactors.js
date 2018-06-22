const { performance } = require('perf_hooks');

const findLargestPrimeFactor = (target) => {
    let primeFactorArray = []

    // Reduce numbers that are even until they're not
    while (target % 2 === 0) {
        primeFactorArray.push(2)
        target = target / 2
    }

    // Remove all those extra 2's
    primeFactorArray = [...new Set([...primeFactorArray])]

    // There's a couple math ideas here
    // one, you don't need to check even numbers now, that's done
    // two you only need to check numbers below the squareRoot of reduced target
    for (let i = 3; i <= Math.sqrt(target); i+= 2) {
        // suppose you have 315. 315 % 3 doesn't have a remainder
        // Push 315 into the array then reduce, again at 105
        // i+= 2 moves you to 5 which 35 falls into now you have 
        // 7 % 7 which is still 0 so that get's pushed into the array
        while (target % i === 0) {
            primeFactorArray.push(target)
            target = target / i
        }
    }

    // Prime numbers are only divisible by themselves and 1
    // so... this runs last and only happens if 
    // target % i === 0 and 
    // target % 2 === 0
    if (target > 2) {
        primeFactorArray.push(target)
    }

    return primeFactorArray.pop()
}

let time = performance.now()
console.assert(7 === findLargestPrimeFactor(315))
let time2 = performance.now()
console.log(`Function with 315 took ${time2 - time} milliseconds`)

time = performance.now()
console.assert(5 === findLargestPrimeFactor(30))
time2 = performance.now()
console.log(`Function with 30 took ${time2 - time} milliseconds`)

time = performance.now()
console.assert(17 === findLargestPrimeFactor(17))
time2 = performance.now()
console.log(`Function with 17 took ${time2 - time} milliseconds`)

time = performance.now()
console.assert(1300979 === findLargestPrimeFactor(1300979))
time2 = performance.now()
console.log(`Function with 1300979 took ${time2 - time} milliseconds`)

time = performance.now()
console.assert(17 === findLargestPrimeFactor(830297))
time2 = performance.now()
console.log(`Function with 830297 took ${time2 - time} milliseconds`)

time = performance.now()
console.assert(67 === findLargestPrimeFactor(18894))
time2 = performance.now()
console.log(`Function with 18894 took ${time2 - time} milliseconds`)

time = performance.now()
console.assert(6857 === findLargestPrimeFactor(600851475143))
time2 = performance.now()
console.log(`Function with 600841475143 took ${time2 - time} milliseconds`)
