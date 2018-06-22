const findSumOfMultiplesBelow = (endpoint, first = 5, second = 3) => {
    const values = Array.from({ length: endpoint - 1}, (n, i) => i + 1)
    let mutliples = values.filter((number) => number % first === 0 || number % second === 0)
    return mutliples.reduce((acc, num) => acc + num)

    // return Array.from({ length: endpoint - 1 }, (n, i) => i + 1).filter((number) => number % first === 0 || number % second === 0).reduce((acc, num) => acc + num)
}

console.log(findSumOfMultiplesBelow(10))
console.log(findSumOfMultiplesBelow(10, 5, 3))
console.log(findSumOfMultiplesBelow(10, 6, 2))
console.log(findSumOfMultiplesBelow(1000))