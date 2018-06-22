const squareSumDifference = (startpoint, endpoint) => {
    const values = Array.from({length: endpoint - startpoint + 1}, (n, i) => i + 1)
    const squares = values.reduce((acc, currentNum) => acc + Math.pow(currentNum, 2))
    let sumSquared = values.reduce((acc, currentNum) => acc + currentNum)

    return Math.pow(sumSquared, 2) - squares
}

console.assert(2640 === squareSumDifference(1, 10))
console.log(squareSumDifference(1,100))