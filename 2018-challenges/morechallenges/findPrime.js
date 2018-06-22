const isPrime = num => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false
    }
    return num !== 1
}

const findPrime = location => {
    let start = 1
    let lastPrime = 0
    let begin = 0

    while (begin < location) {
        if (isPrime(start)) {
            lastPrime = start
            begin++
        }
        start++
    }

    return lastPrime
}

console.log(findPrime(4))
console.log(findPrime(6))
console.log(findPrime(100))
console.log(findPrime(10001))